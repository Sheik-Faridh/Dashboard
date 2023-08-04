import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FacultyVacationRequest, FacultyVacationRequestId } from './faculty_vacation_request';

export interface LeaveTypeAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy: number;
  updatedBy: number;
  deletedBy?: number;
}

export type LeaveTypePk = "id";
export type LeaveTypeId = LeaveType[LeaveTypePk];
export type LeaveTypeOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy";
export type LeaveTypeCreationAttributes = Optional<LeaveTypeAttributes, LeaveTypeOptionalAttributes>;

export class LeaveType extends Model<LeaveTypeAttributes, LeaveTypeCreationAttributes> implements LeaveTypeAttributes {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy!: number;
  updatedBy!: number;
  deletedBy?: number;

  // LeaveType hasMany FacultyVacationRequest via leaveTypeId
  facultyVacationRequests!: FacultyVacationRequest[];
  getFacultyVacationRequests!: Sequelize.HasManyGetAssociationsMixin<FacultyVacationRequest>;
  setFacultyVacationRequests!: Sequelize.HasManySetAssociationsMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  addFacultyVacationRequest!: Sequelize.HasManyAddAssociationMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  addFacultyVacationRequests!: Sequelize.HasManyAddAssociationsMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  createFacultyVacationRequest!: Sequelize.HasManyCreateAssociationMixin<FacultyVacationRequest>;
  removeFacultyVacationRequest!: Sequelize.HasManyRemoveAssociationMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  removeFacultyVacationRequests!: Sequelize.HasManyRemoveAssociationsMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  hasFacultyVacationRequest!: Sequelize.HasManyHasAssociationMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  hasFacultyVacationRequests!: Sequelize.HasManyHasAssociationsMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  countFacultyVacationRequests!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof LeaveType {
    return sequelize.define('LeaveType', {
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
    tableName: 'leave_type',
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
  }) as typeof LeaveType;
  }
}
