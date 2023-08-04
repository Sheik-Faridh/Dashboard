import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { StudentAttendence, StudentAttendenceId } from './student_attendence';

export interface AttendenceStatusAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy: number;
  updatedBy: number;
  deletedBy?: number;
}

export type AttendenceStatusPk = "id";
export type AttendenceStatusId = AttendenceStatus[AttendenceStatusPk];
export type AttendenceStatusOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy";
export type AttendenceStatusCreationAttributes = Optional<AttendenceStatusAttributes, AttendenceStatusOptionalAttributes>;

export class AttendenceStatus extends Model<AttendenceStatusAttributes, AttendenceStatusCreationAttributes> implements AttendenceStatusAttributes {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy!: number;
  updatedBy!: number;
  deletedBy?: number;

  // AttendenceStatus hasMany StudentAttendence via statusId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof AttendenceStatus {
    return sequelize.define('AttendenceStatus', {
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
    tableName: 'attendence_status',
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
  }) as typeof AttendenceStatus;
  }
}
