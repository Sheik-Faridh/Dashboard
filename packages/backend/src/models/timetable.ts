import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Class, ClassId } from './class';
import type { Course, CourseId } from './course';
import type { Faculty, FacultyId } from './faculty';
import type { Period, PeriodId } from './period';

export interface TimetableAttributes {
  id: number;
  periodId: number;
  classId: number;
  courseId: number;
  facultyId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy: number;
  updatedBy: number;
  deletedBy?: number;
}

export type TimetablePk = "id";
export type TimetableId = Timetable[TimetablePk];
export type TimetableOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy";
export type TimetableCreationAttributes = Optional<TimetableAttributes, TimetableOptionalAttributes>;

export class Timetable extends Model<TimetableAttributes, TimetableCreationAttributes> implements TimetableAttributes {
  id!: number;
  periodId!: number;
  classId!: number;
  courseId!: number;
  facultyId!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy!: number;
  updatedBy!: number;
  deletedBy?: number;

  // Timetable belongsTo Class via classId
  class!: Class;
  getClass!: Sequelize.BelongsToGetAssociationMixin<Class>;
  setClass!: Sequelize.BelongsToSetAssociationMixin<Class, ClassId>;
  createClass!: Sequelize.BelongsToCreateAssociationMixin<Class>;
  // Timetable belongsTo Course via courseId
  course!: Course;
  getCourse!: Sequelize.BelongsToGetAssociationMixin<Course>;
  setCourse!: Sequelize.BelongsToSetAssociationMixin<Course, CourseId>;
  createCourse!: Sequelize.BelongsToCreateAssociationMixin<Course>;
  // Timetable belongsTo Faculty via facultyId
  faculty!: Faculty;
  getFaculty!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setFaculty!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createFaculty!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;
  // Timetable belongsTo Period via periodId
  period!: Period;
  getPeriod!: Sequelize.BelongsToGetAssociationMixin<Period>;
  setPeriod!: Sequelize.BelongsToSetAssociationMixin<Period, PeriodId>;
  createPeriod!: Sequelize.BelongsToCreateAssociationMixin<Period>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Timetable {
    return sequelize.define('Timetable', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    periodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'period',
        key: 'id'
      },
      field: 'period_id'
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
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'course',
        key: 'id'
      },
      field: 'course_id'
    },
    facultyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'faculty',
        key: 'id'
      },
      field: 'faculty_id'
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'created_by'
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'updated_by'
    },
    deletedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'deleted_by'
    }
  }, {
    tableName: 'timetable',
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
        name: "fk_timetable_class_id",
        using: "BTREE",
        fields: [
          { name: "class_id" },
        ]
      },
      {
        name: "fk_timetable_period_id",
        using: "BTREE",
        fields: [
          { name: "period_id" },
        ]
      },
      {
        name: "fk_timetable_course_id",
        using: "BTREE",
        fields: [
          { name: "course_id" },
        ]
      },
      {
        name: "fk_timetable_faculty_id",
        using: "BTREE",
        fields: [
          { name: "faculty_id" },
        ]
      },
    ]
  }) as typeof Timetable;
  }
}
