import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Exam, ExamId } from './exam';
import type { Faculty, FacultyId } from './faculty';
import type { Section, SectionId } from './section';
import type { Session, SessionId } from './session';
import type { Student, StudentId } from './student';
import type { StudentPromotion, StudentPromotionId } from './student_promotion';
import type { Timetable, TimetableId } from './timetable';

export interface ClassAttributes {
  id: number;
  name: string;
  room?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy: number;
  updatedBy: number;
  deletedBy?: number;
}

export type ClassPk = "id";
export type ClassId = Class[ClassPk];
export type ClassOptionalAttributes = "id" | "room" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy";
export type ClassCreationAttributes = Optional<ClassAttributes, ClassOptionalAttributes>;

export class Class extends Model<ClassAttributes, ClassCreationAttributes> implements ClassAttributes {
  id!: number;
  name!: string;
  room?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy!: number;
  updatedBy!: number;
  deletedBy?: number;

  // Class hasMany Exam via classId
  exams!: Exam[];
  getExams!: Sequelize.HasManyGetAssociationsMixin<Exam>;
  setExams!: Sequelize.HasManySetAssociationsMixin<Exam, ExamId>;
  addExam!: Sequelize.HasManyAddAssociationMixin<Exam, ExamId>;
  addExams!: Sequelize.HasManyAddAssociationsMixin<Exam, ExamId>;
  createExam!: Sequelize.HasManyCreateAssociationMixin<Exam>;
  removeExam!: Sequelize.HasManyRemoveAssociationMixin<Exam, ExamId>;
  removeExams!: Sequelize.HasManyRemoveAssociationsMixin<Exam, ExamId>;
  hasExam!: Sequelize.HasManyHasAssociationMixin<Exam, ExamId>;
  hasExams!: Sequelize.HasManyHasAssociationsMixin<Exam, ExamId>;
  countExams!: Sequelize.HasManyCountAssociationsMixin;
  // Class hasMany Faculty via inchargeOfClass
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
  // Class hasMany Section via classId
  sections!: Section[];
  getSections!: Sequelize.HasManyGetAssociationsMixin<Section>;
  setSections!: Sequelize.HasManySetAssociationsMixin<Section, SectionId>;
  addSection!: Sequelize.HasManyAddAssociationMixin<Section, SectionId>;
  addSections!: Sequelize.HasManyAddAssociationsMixin<Section, SectionId>;
  createSection!: Sequelize.HasManyCreateAssociationMixin<Section>;
  removeSection!: Sequelize.HasManyRemoveAssociationMixin<Section, SectionId>;
  removeSections!: Sequelize.HasManyRemoveAssociationsMixin<Section, SectionId>;
  hasSection!: Sequelize.HasManyHasAssociationMixin<Section, SectionId>;
  hasSections!: Sequelize.HasManyHasAssociationsMixin<Section, SectionId>;
  countSections!: Sequelize.HasManyCountAssociationsMixin;
  // Class hasMany Session via classId
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
  // Class hasMany Student via classId
  students!: Student[];
  getStudents!: Sequelize.HasManyGetAssociationsMixin<Student>;
  setStudents!: Sequelize.HasManySetAssociationsMixin<Student, StudentId>;
  addStudent!: Sequelize.HasManyAddAssociationMixin<Student, StudentId>;
  addStudents!: Sequelize.HasManyAddAssociationsMixin<Student, StudentId>;
  createStudent!: Sequelize.HasManyCreateAssociationMixin<Student>;
  removeStudent!: Sequelize.HasManyRemoveAssociationMixin<Student, StudentId>;
  removeStudents!: Sequelize.HasManyRemoveAssociationsMixin<Student, StudentId>;
  hasStudent!: Sequelize.HasManyHasAssociationMixin<Student, StudentId>;
  hasStudents!: Sequelize.HasManyHasAssociationsMixin<Student, StudentId>;
  countStudents!: Sequelize.HasManyCountAssociationsMixin;
  // Class hasMany StudentPromotion via promotedFrom
  studentPromotions!: StudentPromotion[];
  getStudentPromotions!: Sequelize.HasManyGetAssociationsMixin<StudentPromotion>;
  setStudentPromotions!: Sequelize.HasManySetAssociationsMixin<StudentPromotion, StudentPromotionId>;
  addStudentPromotion!: Sequelize.HasManyAddAssociationMixin<StudentPromotion, StudentPromotionId>;
  addStudentPromotions!: Sequelize.HasManyAddAssociationsMixin<StudentPromotion, StudentPromotionId>;
  createStudentPromotion!: Sequelize.HasManyCreateAssociationMixin<StudentPromotion>;
  removeStudentPromotion!: Sequelize.HasManyRemoveAssociationMixin<StudentPromotion, StudentPromotionId>;
  removeStudentPromotions!: Sequelize.HasManyRemoveAssociationsMixin<StudentPromotion, StudentPromotionId>;
  hasStudentPromotion!: Sequelize.HasManyHasAssociationMixin<StudentPromotion, StudentPromotionId>;
  hasStudentPromotions!: Sequelize.HasManyHasAssociationsMixin<StudentPromotion, StudentPromotionId>;
  countStudentPromotions!: Sequelize.HasManyCountAssociationsMixin;
  // Class hasMany StudentPromotion via promotedTo
  promotedToStudentPromotions!: StudentPromotion[];
  getPromotedToStudentPromotions!: Sequelize.HasManyGetAssociationsMixin<StudentPromotion>;
  setPromotedToStudentPromotions!: Sequelize.HasManySetAssociationsMixin<StudentPromotion, StudentPromotionId>;
  addPromotedToStudentPromotion!: Sequelize.HasManyAddAssociationMixin<StudentPromotion, StudentPromotionId>;
  addPromotedToStudentPromotions!: Sequelize.HasManyAddAssociationsMixin<StudentPromotion, StudentPromotionId>;
  createPromotedToStudentPromotion!: Sequelize.HasManyCreateAssociationMixin<StudentPromotion>;
  removePromotedToStudentPromotion!: Sequelize.HasManyRemoveAssociationMixin<StudentPromotion, StudentPromotionId>;
  removePromotedToStudentPromotions!: Sequelize.HasManyRemoveAssociationsMixin<StudentPromotion, StudentPromotionId>;
  hasPromotedToStudentPromotion!: Sequelize.HasManyHasAssociationMixin<StudentPromotion, StudentPromotionId>;
  hasPromotedToStudentPromotions!: Sequelize.HasManyHasAssociationsMixin<StudentPromotion, StudentPromotionId>;
  countPromotedToStudentPromotions!: Sequelize.HasManyCountAssociationsMixin;
  // Class hasMany Timetable via classId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Class {
    return sequelize.define('Class', {
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
    room: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'class',
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
    ]
  }) as typeof Class;
  }
}
