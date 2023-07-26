import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Session, SessionId } from './session';
import type { Student, StudentId } from './student';

export interface StudentAttendenceAttributes {
  id: number;
  sessionId: number;
  studentId: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type StudentAttendencePk = "id";
export type StudentAttendenceId = StudentAttendence[StudentAttendencePk];
export type StudentAttendenceOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt";
export type StudentAttendenceCreationAttributes = Optional<StudentAttendenceAttributes, StudentAttendenceOptionalAttributes>;

export class StudentAttendence extends Model<StudentAttendenceAttributes, StudentAttendenceCreationAttributes> implements StudentAttendenceAttributes {
  id!: number;
  sessionId!: number;
  studentId!: number;
  status!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

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
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
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
