import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CourseExam, CourseExamId } from './course_exam';
import type { Faculty, FacultyId } from './faculty';
import type { Student, StudentId } from './student';

export interface CourseExamResultAttributes {
  id: number;
  courseExamId: number;
  studentId: number;
  evaluatedBy: number;
  markScored: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CourseExamResultPk = "id";
export type CourseExamResultId = CourseExamResult[CourseExamResultPk];
export type CourseExamResultOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt";
export type CourseExamResultCreationAttributes = Optional<CourseExamResultAttributes, CourseExamResultOptionalAttributes>;

export class CourseExamResult extends Model<CourseExamResultAttributes, CourseExamResultCreationAttributes> implements CourseExamResultAttributes {
  id!: number;
  courseExamId!: number;
  studentId!: number;
  evaluatedBy!: number;
  markScored!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // CourseExamResult belongsTo CourseExam via courseExamId
  courseExam!: CourseExam;
  getCourseExam!: Sequelize.BelongsToGetAssociationMixin<CourseExam>;
  setCourseExam!: Sequelize.BelongsToSetAssociationMixin<CourseExam, CourseExamId>;
  createCourseExam!: Sequelize.BelongsToCreateAssociationMixin<CourseExam>;
  // CourseExamResult belongsTo Faculty via evaluatedBy
  evaluatedByFaculty!: Faculty;
  getEvaluatedByFaculty!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setEvaluatedByFaculty!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createEvaluatedByFaculty!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;
  // CourseExamResult belongsTo Student via studentId
  student!: Student;
  getStudent!: Sequelize.BelongsToGetAssociationMixin<Student>;
  setStudent!: Sequelize.BelongsToSetAssociationMixin<Student, StudentId>;
  createStudent!: Sequelize.BelongsToCreateAssociationMixin<Student>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CourseExamResult {
    return sequelize.define('CourseExamResult', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    courseExamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'course_exam',
        key: 'id'
      },
      field: 'course_exam_id'
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'student',
        key: 'id'
      },
      field: 'student_id'
    },
    evaluatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'faculty',
        key: 'id'
      },
      field: 'evaluated_by'
    },
    markScored: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mark_scored'
    }
  }, {
    tableName: 'course_exam_result',
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
        name: "fk_course_exam_result_course_exam_id",
        using: "BTREE",
        fields: [
          { name: "course_exam_id" },
        ]
      },
      {
        name: "fk_course_exam_result_student_id",
        using: "BTREE",
        fields: [
          { name: "student_id" },
        ]
      },
      {
        name: "fk_course_exam_result_evaluated_by",
        using: "BTREE",
        fields: [
          { name: "evaluated_by" },
        ]
      },
    ]
  }) as typeof CourseExamResult;
  }
}
