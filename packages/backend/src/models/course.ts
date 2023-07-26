import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CourseExam, CourseExamId } from './course_exam';
import type { Department, DepartmentId } from './department';
import type { Faculty, FacultyId } from './faculty';
import type { Session, SessionId } from './session';
import type { Timetable, TimetableId } from './timetable';

export interface CourseAttributes {
  id: number;
  name: string;
  departmentId?: number;
  courseCode: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CoursePk = "id";
export type CourseId = Course[CoursePk];
export type CourseOptionalAttributes = "id" | "departmentId" | "createdAt" | "updatedAt" | "deletedAt";
export type CourseCreationAttributes = Optional<CourseAttributes, CourseOptionalAttributes>;

export class Course extends Model<CourseAttributes, CourseCreationAttributes> implements CourseAttributes {
  id!: number;
  name!: string;
  departmentId?: number;
  courseCode!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // Course hasMany CourseExam via courseId
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
  // Course hasMany Faculty via courseId
  faculties!: Faculty[];
  getFaculties!: Sequelize.HasManyGetAssociationsMixin<Faculty>;
  setFaculties!: Sequelize.HasManySetAssociationsMixin<Faculty, FacultyId>;
  addFaculty!: Sequelize.HasManyAddAssociationMixin<Faculty, FacultyId>;
  addFaculties!: Sequelize.HasManyAddAssociationsMixin<Faculty, FacultyId>;
  createFaculty!: Sequelize.HasManyCreateAssociationMixin<Faculty>;
  removeFaculty!: Sequelize.HasManyRemoveAssociationMixin<Faculty, FacultyId>;
  removeFaculties!: Sequelize.HasManyRemoveAssociationsMixin<Faculty, FacultyId>;
  hasFaculty!: Sequelize.HasManyHasAssociationMixin<Faculty, FacultyId>;
  hasFaculties!: Sequelize.HasManyHasAssociationsMixin<Faculty, FacultyId>;
  countFaculties!: Sequelize.HasManyCountAssociationsMixin;
  // Course hasMany Session via courseId
  sessions!: Session[];
  getSessions!: Sequelize.HasManyGetAssociationsMixin<Session>;
  setSessions!: Sequelize.HasManySetAssociationsMixin<Session, SessionId>;
  addSession!: Sequelize.HasManyAddAssociationMixin<Session, SessionId>;
  addSessions!: Sequelize.HasManyAddAssociationsMixin<Session, SessionId>;
  createSession!: Sequelize.HasManyCreateAssociationMixin<Session>;
  removeSession!: Sequelize.HasManyRemoveAssociationMixin<Session, SessionId>;
  removeSessions!: Sequelize.HasManyRemoveAssociationsMixin<Session, SessionId>;
  hasSession!: Sequelize.HasManyHasAssociationMixin<Session, SessionId>;
  hasSessions!: Sequelize.HasManyHasAssociationsMixin<Session, SessionId>;
  countSessions!: Sequelize.HasManyCountAssociationsMixin;
  // Course hasMany Timetable via courseId
  timetables!: Timetable[];
  getTimetables!: Sequelize.HasManyGetAssociationsMixin<Timetable>;
  setTimetables!: Sequelize.HasManySetAssociationsMixin<Timetable, TimetableId>;
  addTimetable!: Sequelize.HasManyAddAssociationMixin<Timetable, TimetableId>;
  addTimetables!: Sequelize.HasManyAddAssociationsMixin<Timetable, TimetableId>;
  createTimetable!: Sequelize.HasManyCreateAssociationMixin<Timetable>;
  removeTimetable!: Sequelize.HasManyRemoveAssociationMixin<Timetable, TimetableId>;
  removeTimetables!: Sequelize.HasManyRemoveAssociationsMixin<Timetable, TimetableId>;
  hasTimetable!: Sequelize.HasManyHasAssociationMixin<Timetable, TimetableId>;
  hasTimetables!: Sequelize.HasManyHasAssociationsMixin<Timetable, TimetableId>;
  countTimetables!: Sequelize.HasManyCountAssociationsMixin;
  // Course belongsTo Department via departmentId
  department!: Department;
  getDepartment!: Sequelize.BelongsToGetAssociationMixin<Department>;
  setDepartment!: Sequelize.BelongsToSetAssociationMixin<Department, DepartmentId>;
  createDepartment!: Sequelize.BelongsToCreateAssociationMixin<Department>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Course {
    return sequelize.define('Course', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "name"
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'department',
        key: 'id'
      },
      field: 'department_id'
    },
    courseCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "course_code",
      field: 'course_code'
    }
  }, {
    tableName: 'course',
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
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "course_code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "course_code" },
        ]
      },
      {
        name: "fk_course_department_id",
        using: "BTREE",
        fields: [
          { name: "department_id" },
        ]
      },
    ]
  }) as typeof Course;
  }
}
