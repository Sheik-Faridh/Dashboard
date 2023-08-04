import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Class, ClassId } from './class';
import type { CourseExam, CourseExamId } from './course_exam';
import type { ExamName, ExamNameId } from './exam_name';

export interface ExamAttributes {
  id: number;
  examNameId: number;
  classId: number;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}

export type ExamPk = "id";
export type ExamId = Exam[ExamPk];
export type ExamOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt" | "createdBy" | "updatedBy" | "deletedBy";
export type ExamCreationAttributes = Optional<ExamAttributes, ExamOptionalAttributes>;

export class Exam extends Model<ExamAttributes, ExamCreationAttributes> implements ExamAttributes {
  id!: number;
  examNameId!: number;
  classId!: number;
  startDate!: Date;
  endDate!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;

  // Exam belongsTo Class via classId
  class!: Class;
  getClass!: Sequelize.BelongsToGetAssociationMixin<Class>;
  setClass!: Sequelize.BelongsToSetAssociationMixin<Class, ClassId>;
  createClass!: Sequelize.BelongsToCreateAssociationMixin<Class>;
  // Exam hasMany CourseExam via examId
  courseExams!: CourseExam[];
  getCourseExams!: Sequelize.HasManyGetAssociationsMixin<CourseExam>;
  setCourseExams!: Sequelize.HasManySetAssociationsMixin<CourseExam, CourseExamId>;
  addCourseExam!: Sequelize.HasManyAddAssociationMixin<CourseExam, CourseExamId>;
  addCourseExams!: Sequelize.HasManyAddAssociationsMixin<CourseExam, CourseExamId>;
  createCourseExam!: Sequelize.HasManyCreateAssociationMixin<CourseExam>;
  removeCourseExam!: Sequelize.HasManyRemoveAssociationMixin<CourseExam, CourseExamId>;
  removeCourseExams!: Sequelize.HasManyRemoveAssociationsMixin<CourseExam, CourseExamId>;
  hasCourseExam!: Sequelize.HasManyHasAssociationMixin<CourseExam, CourseExamId>;
  hasCourseExams!: Sequelize.HasManyHasAssociationsMixin<CourseExam, CourseExamId>;
  countCourseExams!: Sequelize.HasManyCountAssociationsMixin;
  // Exam belongsTo ExamName via examNameId
  examName!: ExamName;
  getExamName!: Sequelize.BelongsToGetAssociationMixin<ExamName>;
  setExamName!: Sequelize.BelongsToSetAssociationMixin<ExamName, ExamNameId>;
  createExamName!: Sequelize.BelongsToCreateAssociationMixin<ExamName>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Exam {
    return sequelize.define('Exam', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    examNameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'exam_name',
        key: 'id'
      },
      field: 'exam_name_id'
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'class',
        key: 'id'
      },
      field: 'class_id'
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'end_date'
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'created_by'
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'updated_by'
    },
    deletedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'deleted_by'
    }
  }, {
    tableName: 'exam',
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
        name: "fk_exam_exam_name_id",
        using: "BTREE",
        fields: [
          { name: "exam_name_id" },
        ]
      },
      {
        name: "fk_exam_class_id",
        using: "BTREE",
        fields: [
          { name: "class_id" },
        ]
      },
    ]
  }) as typeof Exam;
  }
}
