import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AttendenceStatus, AttendenceStatusId } from './attendence_status';
import type { Session, SessionId } from './session';
import type { Student, StudentId } from './student';

export interface StudentAttendenceAttributes {
  id: number;
  sessionId: number;
  studentId: number;
  statusId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}

export type StudentAttendencePk = "id";
export type StudentAttendenceId = StudentAttendence[StudentAttendencePk];
export type StudentAttendenceOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt" | "createdBy" | "updatedBy" | "deletedBy";
export type StudentAttendenceCreationAttributes = Optional<StudentAttendenceAttributes, StudentAttendenceOptionalAttributes>;

export class StudentAttendence extends Model<StudentAttendenceAttributes, StudentAttendenceCreationAttributes> implements StudentAttendenceAttributes {
  id!: number;
  sessionId!: number;
  studentId!: number;
  statusId!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;

  // StudentAttendence belongsTo AttendenceStatus via statusId
  status!: AttendenceStatus;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<AttendenceStatus>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<AttendenceStatus, AttendenceStatusId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<AttendenceStatus>;
  // StudentAttendence belongsTo Session via sessionId
  session!: Session;
  getSession!: Sequelize.BelongsToGetAssociationMixin<Session>;
  setSession!: Sequelize.BelongsToSetAssociationMixin<Session, SessionId>;
  createSession!: Sequelize.BelongsToCreateAssociationMixin<Session>;
  // StudentAttendence belongsTo Student via studentId
  student!: Student;
  getStudent!: Sequelize.BelongsToGetAssociationMixin<Student>;
  setStudent!: Sequelize.BelongsToSetAssociationMixin<Student, StudentId>;
  createStudent!: Sequelize.BelongsToCreateAssociationMixin<Student>;

  static initModel(sequelize: Sequelize.Sequelize): typeof StudentAttendence {
    return sequelize.define('StudentAttendence', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'session',
        key: 'id'
      },
      field: 'session_id'
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
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'attendence_status',
        key: 'id'
      },
      field: 'status_id'
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
    tableName: 'student_attendence',
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
        name: "fk_student_attendence_student_id",
        using: "BTREE",
        fields: [
          { name: "student_id" },
        ]
      },
      {
        name: "fk_student_attendence_status_id",
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
      {
        name: "fk_student_attendence_session_id",
        using: "BTREE",
        fields: [
          { name: "session_id" },
        ]
      },
    ]
  }) as typeof StudentAttendence;
  }
}
