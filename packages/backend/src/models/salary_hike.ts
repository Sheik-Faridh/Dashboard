import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Faculty, FacultyId } from './faculty';

export interface SalaryHikeAttributes {
  id: number;
  facultyId: number;
  oldSalary: number;
  revisedSalary: number;
  effectiveFrom: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SalaryHikePk = "id";
export type SalaryHikeId = SalaryHike[SalaryHikePk];
export type SalaryHikeOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt";
export type SalaryHikeCreationAttributes = Optional<SalaryHikeAttributes, SalaryHikeOptionalAttributes>;

export class SalaryHike extends Model<SalaryHikeAttributes, SalaryHikeCreationAttributes> implements SalaryHikeAttributes {
  id!: number;
  facultyId!: number;
  oldSalary!: number;
  revisedSalary!: number;
  effectiveFrom!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // SalaryHike belongsTo Faculty via facultyId
  faculty!: Faculty;
  getFaculty!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setFaculty!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createFaculty!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;

  static initModel(sequelize: Sequelize.Sequelize): typeof SalaryHike {
    return sequelize.define('SalaryHike', {
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
    oldSalary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'old_salary'
    },
    revisedSalary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'revised_salary'
    },
    effectiveFrom: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'effective_from'
    }
  }, {
    tableName: 'salary_hike',
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
        name: "fk_salary_hike_faculty_id",
        using: "BTREE",
        fields: [
          { name: "faculty_id" },
        ]
      },
    ]
  }) as typeof SalaryHike;
  }
}
