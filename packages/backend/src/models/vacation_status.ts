import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FacultyVacationRequest, FacultyVacationRequestId } from './faculty_vacation_request';

export interface VacationStatusAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}

export type VacationStatusPk = "id";
export type VacationStatusId = VacationStatus[VacationStatusPk];
export type VacationStatusOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt" | "createdBy" | "updatedBy" | "deletedBy";
export type VacationStatusCreationAttributes = Optional<VacationStatusAttributes, VacationStatusOptionalAttributes>;

export class VacationStatus extends Model<VacationStatusAttributes, VacationStatusCreationAttributes> implements VacationStatusAttributes {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;

  // VacationStatus hasMany FacultyVacationRequest via statusId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof VacationStatus {
    return sequelize.define('VacationStatus', {
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
    tableName: 'vacation_status',
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
  }) as typeof VacationStatus;
  }
}
