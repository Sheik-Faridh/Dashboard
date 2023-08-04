import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Faculty, FacultyId } from './faculty';
import type { LeaveType, LeaveTypeId } from './leave_type';
import type { VacationStatus, VacationStatusId } from './vacation_status';

export interface FacultyVacationRequestAttributes {
  id: number;
  facultyId: number;
  numberOfDay: number;
  startDate: Date;
  endDate: Date;
  approvedBy: number;
  remarks: string;
  comment: string;
  statusId: number;
  leaveTypeId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}

export type FacultyVacationRequestPk = "id";
export type FacultyVacationRequestId = FacultyVacationRequest[FacultyVacationRequestPk];
export type FacultyVacationRequestOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt" | "createdBy" | "updatedBy" | "deletedBy";
export type FacultyVacationRequestCreationAttributes = Optional<FacultyVacationRequestAttributes, FacultyVacationRequestOptionalAttributes>;

export class FacultyVacationRequest extends Model<FacultyVacationRequestAttributes, FacultyVacationRequestCreationAttributes> implements FacultyVacationRequestAttributes {
  id!: number;
  facultyId!: number;
  numberOfDay!: number;
  startDate!: Date;
  endDate!: Date;
  approvedBy!: number;
  remarks!: string;
  comment!: string;
  statusId!: number;
  leaveTypeId!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;

  // FacultyVacationRequest belongsTo Faculty via facultyId
  faculty!: Faculty;
  getFaculty!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setFaculty!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createFaculty!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;
  // FacultyVacationRequest belongsTo Faculty via approvedBy
  approvedByFaculty!: Faculty;
  getApprovedByFaculty!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setApprovedByFaculty!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createApprovedByFaculty!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;
  // FacultyVacationRequest belongsTo LeaveType via leaveTypeId
  leaveType!: LeaveType;
  getLeaveType!: Sequelize.BelongsToGetAssociationMixin<LeaveType>;
  setLeaveType!: Sequelize.BelongsToSetAssociationMixin<LeaveType, LeaveTypeId>;
  createLeaveType!: Sequelize.BelongsToCreateAssociationMixin<LeaveType>;
  // FacultyVacationRequest belongsTo VacationStatus via statusId
  status!: VacationStatus;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<VacationStatus>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<VacationStatus, VacationStatusId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<VacationStatus>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FacultyVacationRequest {
    return sequelize.define('FacultyVacationRequest', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    numberOfDay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'number_of_day'
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
    approvedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'faculty',
        key: 'id'
      },
      field: 'approved_by'
    },
    remarks: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vacation_status',
        key: 'id'
      },
      field: 'status_id'
    },
    leaveTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'leave_type',
        key: 'id'
      },
      field: 'leave_type_id'
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
    tableName: 'faculty_vacation_request',
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
        name: "fk_faculty_vacation_request_faculty_id",
        using: "BTREE",
        fields: [
          { name: "faculty_id" },
        ]
      },
      {
        name: "fk_faculty_vacation_request_approved_by",
        using: "BTREE",
        fields: [
          { name: "approved_by" },
        ]
      },
      {
        name: "fk_faculty_vacation_request_status_id",
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
      {
        name: "fk_faculty_vacation_request_leave_type_id",
        using: "BTREE",
        fields: [
          { name: "leave_type_id" },
        ]
      },
    ]
  }) as typeof FacultyVacationRequest;
  }
}
