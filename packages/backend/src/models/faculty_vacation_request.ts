import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Faculty, FacultyId } from './faculty';

export interface FacultyVacationRequestAttributes {
  id: number;
  facultyId: number;
  numberOfDay: number;
  startDate: Date;
  endDate: Date;
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
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // FacultyVacationRequest belongsTo Faculty via facultyId
  faculty!: Faculty;
  getFaculty!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setFaculty!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createFaculty!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;

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
    ]
  }) as typeof FacultyVacationRequest;
  }
}
