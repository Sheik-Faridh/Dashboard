import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Faculty, FacultyId } from './faculty';

export interface FacultyVacationAttributes {
  id: number;
  facultyId: number;
  numberOfPaidLeave: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type FacultyVacationPk = "id";
export type FacultyVacationId = FacultyVacation[FacultyVacationPk];
export type FacultyVacationOptionalAttributes = "id" | "numberOfPaidLeave" | "createdAt" | "updatedAt" | "deletedAt";
export type FacultyVacationCreationAttributes = Optional<FacultyVacationAttributes, FacultyVacationOptionalAttributes>;

export class FacultyVacation extends Model<FacultyVacationAttributes, FacultyVacationCreationAttributes> implements FacultyVacationAttributes {
  id!: number;
  facultyId!: number;
  numberOfPaidLeave!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // FacultyVacation belongsTo Faculty via facultyId
  faculty!: Faculty;
  getFaculty!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setFaculty!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createFaculty!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FacultyVacation {
    return sequelize.define('FacultyVacation', {
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
    numberOfPaidLeave: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'number_of_paid_leave'
    }
  }, {
    tableName: 'faculty_vacation',
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
        name: "fk_faculty_vacation_faculty_id",
        using: "BTREE",
        fields: [
          { name: "faculty_id" },
        ]
      },
    ]
  }) as typeof FacultyVacation;
  }
}
