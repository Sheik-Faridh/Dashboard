import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Faculty, FacultyId } from './faculty';

export interface FacultyVacationRequestAttributes {
  id: number;
  facultyId: number;
  numberOfDay: number;
  startDate: Date;
  endDate: Date;
  approvedBy: number;
  remarks: string;
  comment: string;
  status: string;
  leaveType: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type FacultyVacationRequestPk = "id";
export type FacultyVacationRequestId = FacultyVacationRequest[FacultyVacationRequestPk];
export type FacultyVacationRequestOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt";
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
  status!: string;
  leaveType!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

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
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    leaveType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'leave_type'
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
    ]
  }) as typeof FacultyVacationRequest;
  }
}
