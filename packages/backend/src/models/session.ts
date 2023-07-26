import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Class, ClassId } from './class';
import type { Course, CourseId } from './course';
import type { Faculty, FacultyId } from './faculty';
import type { Period, PeriodId } from './period';
import type { StudentAttendence, StudentAttendenceId } from './student_attendence';

export interface SessionAttributes {
  id: number;
  date: Date;
  periodId: number;
  classId: number;
  courseId: number;
  facultyId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SessionPk = "id";
export type SessionId = Session[SessionPk];
export type SessionOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt";
export type SessionCreationAttributes = Optional<SessionAttributes, SessionOptionalAttributes>;

export class Session extends Model<SessionAttributes, SessionCreationAttributes> implements SessionAttributes {
  id!: number;
  date!: Date;
  periodId!: number;
  classId!: number;
  courseId!: number;
  facultyId!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // Session belongsTo Class via classId
  class!: Class;
  getClass!: Sequelize.BelongsToGetAssociationMixin<Class>;
  setClass!: Sequelize.BelongsToSetAssociationMixin<Class, ClassId>;
  createClass!: Sequelize.BelongsToCreateAssociationMixin<Class>;
  // Session belongsTo Course via courseId
  course!: Course;
  getCourse!: Sequelize.BelongsToGetAssociationMixin<Course>;
  setCourse!: Sequelize.BelongsToSetAssociationMixin<Course, CourseId>;
  createCourse!: Sequelize.BelongsToCreateAssociationMixin<Course>;
  // Session belongsTo Faculty via facultyId
  faculty!: Faculty;
  getFaculty!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setFaculty!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createFaculty!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;
  // Session belongsTo Period via periodId
  period!: Period;
  getPeriod!: Sequelize.BelongsToGetAssociationMixin<Period>;
  setPeriod!: Sequelize.BelongsToSetAssociationMixin<Period, PeriodId>;
  createPeriod!: Sequelize.BelongsToCreateAssociationMixin<Period>;
  // Session hasMany StudentAttendence via sessionId
  studentAttendences!: StudentAttendence[];
  getStudentAttendences!: Sequelize.HasManyGetAssociationsMixin<StudentAttendence>;
  setStudentAttendences!: Sequelize.HasManySetAssociationsMixin<StudentAttendence, StudentAttendenceId>;
  addStudentAttendence!: Sequelize.HasManyAddAssociationMixin<StudentAttendence, StudentAttendenceId>;
  addStudentAttendences!: Sequelize.HasManyAddAssociationsMixin<StudentAttendence, StudentAttendenceId>;
  createStudentAttendence!: Sequelize.HasManyCreateAssociationMixin<StudentAttendence>;
  removeStudentAttendence!: Sequelize.HasManyRemoveAssociationMixin<StudentAttendence, StudentAttendenceId>;
  removeStudentAttendences!: Sequelize.HasManyRemoveAssociationsMixin<StudentAttendence, StudentAttendenceId>;
  hasStudentAttendence!: Sequelize.HasManyHasAssociationMixin<StudentAttendence, StudentAttendenceId>;
  hasStudentAttendences!: Sequelize.HasManyHasAssociationsMixin<StudentAttendence, StudentAttendenceId>;
  countStudentAttendences!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Session {
    return sequelize.define('Session', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
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
    }
  }, {
    tableName: 'session',
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
        name: "fk_session_class_id",
        using: "BTREE",
        fields: [
          { name: "class_id" },
        ]
      },
      {
        name: "fk_session_period_id",
        using: "BTREE",
        fields: [
          { name: "period_id" },
        ]
      },
      {
        name: "fk_session_course_id",
        using: "BTREE",
        fields: [
          { name: "course_id" },
        ]
      },
      {
        name: "fk_session_faculty_id",
        using: "BTREE",
        fields: [
          { name: "faculty_id" },
        ]
      },
    ]
  }) as typeof Session;
  }
}
