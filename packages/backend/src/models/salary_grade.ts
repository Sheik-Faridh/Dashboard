import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { FacultySalary, FacultySalaryId } from './faculty_salary';

export interface SalaryGradeAttributes {
  id: number;
  name: string;
  startRange: number;
  endRange: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SalaryGradePk = "id";
export type SalaryGradeId = SalaryGrade[SalaryGradePk];
export type SalaryGradeOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt";
export type SalaryGradeCreationAttributes = Optional<SalaryGradeAttributes, SalaryGradeOptionalAttributes>;

export class SalaryGrade extends Model<SalaryGradeAttributes, SalaryGradeCreationAttributes> implements SalaryGradeAttributes {
  id!: number;
  name!: string;
  startRange!: number;
  endRange!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // SalaryGrade hasMany FacultySalary via gradeLevelId
  facultySalaries!: FacultySalary[];
  getFacultySalaries!: Sequelize.HasManyGetAssociationsMixin<FacultySalary>;
  setFacultySalaries!: Sequelize.HasManySetAssociationsMixin<FacultySalary, FacultySalaryId>;
  addFacultySalary!: Sequelize.HasManyAddAssociationMixin<FacultySalary, FacultySalaryId>;
  addFacultySalaries!: Sequelize.HasManyAddAssociationsMixin<FacultySalary, FacultySalaryId>;
  createFacultySalary!: Sequelize.HasManyCreateAssociationMixin<FacultySalary>;
  removeFacultySalary!: Sequelize.HasManyRemoveAssociationMixin<FacultySalary, FacultySalaryId>;
  removeFacultySalaries!: Sequelize.HasManyRemoveAssociationsMixin<FacultySalary, FacultySalaryId>;
  hasFacultySalary!: Sequelize.HasManyHasAssociationMixin<FacultySalary, FacultySalaryId>;
  hasFacultySalaries!: Sequelize.HasManyHasAssociationsMixin<FacultySalary, FacultySalaryId>;
  countFacultySalaries!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof SalaryGrade {
    return sequelize.define('SalaryGrade', {
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
    startRange: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'start_range'
    },
    endRange: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'end_range'
    }
  }, {
    tableName: 'salary_grade',
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
  }) as typeof SalaryGrade;
  }
}
