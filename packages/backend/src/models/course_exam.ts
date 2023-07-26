import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Course, CourseId } from './course';
import type { CourseExamResult, CourseExamResultId } from './course_exam_result';
import type { Exam, ExamId } from './exam';

export interface CourseExamAttributes {
  id: number;
  examId: number;
  examCode: string;
  courseId: number;
  date: Date;
  startTime: string;
  endTime: string;
  totalMark: number;
  minimumMark: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CourseExamPk = "id";
export type CourseExamId = CourseExam[CourseExamPk];
export type CourseExamOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt";
export type CourseExamCreationAttributes = Optional<CourseExamAttributes, CourseExamOptionalAttributes>;

export class CourseExam extends Model<CourseExamAttributes, CourseExamCreationAttributes> implements CourseExamAttributes {
  id!: number;
  examId!: number;
  examCode!: string;
  courseId!: number;
  date!: Date;
  startTime!: string;
  endTime!: string;
  totalMark!: number;
  minimumMark!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // CourseExam belongsTo Course via courseId
  course!: Course;
  getCourse!: Sequelize.BelongsToGetAssociationMixin<Course>;
  setCourse!: Sequelize.BelongsToSetAssociationMixin<Course, CourseId>;
  createCourse!: Sequelize.BelongsToCreateAssociationMixin<Course>;
  // CourseExam hasMany CourseExamResult via courseExamId
  courseExamResults!: CourseExamResult[];
  getCourseExamResults!: Sequelize.HasManyGetAssociationsMixin<CourseExamResult>;
  setCourseExamResults!: Sequelize.HasManySetAssociationsMixin<CourseExamResult, CourseExamResultId>;
  addCourseExamResult!: Sequelize.HasManyAddAssociationMixin<CourseExamResult, CourseExamResultId>;
  addCourseExamResults!: Sequelize.HasManyAddAssociationsMixin<CourseExamResult, CourseExamResultId>;
  createCourseExamResult!: Sequelize.HasManyCreateAssociationMixin<CourseExamResult>;
  removeCourseExamResult!: Sequelize.HasManyRemoveAssociationMixin<CourseExamResult, CourseExamResultId>;
  removeCourseExamResults!: Sequelize.HasManyRemoveAssociationsMixin<CourseExamResult, CourseExamResultId>;
  hasCourseExamResult!: Sequelize.HasManyHasAssociationMixin<CourseExamResult, CourseExamResultId>;
  hasCourseExamResults!: Sequelize.HasManyHasAssociationsMixin<CourseExamResult, CourseExamResultId>;
  countCourseExamResults!: Sequelize.HasManyCountAssociationsMixin;
  // CourseExam belongsTo Exam via examId
  exam!: Exam;
  getExam!: Sequelize.BelongsToGetAssociationMixin<Exam>;
  setExam!: Sequelize.BelongsToSetAssociationMixin<Exam, ExamId>;
  createExam!: Sequelize.BelongsToCreateAssociationMixin<Exam>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CourseExam {
    return sequelize.define('CourseExam', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    examId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'exam',
        key: 'id'
      },
      field: 'exam_id'
    },
    examCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'exam_code'
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'course',
        key: 'id'
      },
      field: 'course_id'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    startTime: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'start_time'
    },
    endTime: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'end_time'
    },
    totalMark: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'total_mark'
    },
    minimumMark: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'minimum_mark'
    }
  }, {
    tableName: 'course_exam',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_course_exam_exam_id",
        using: "BTREE",
        fields: [
          { name: "exam_id" },
        ]
      },
      {
        name: "fk_course_exam_course_id",
        using: "BTREE",
        fields: [
          { name: "course_id" },
        ]
      },
    ]
  }) as typeof CourseExam;
  }
}
