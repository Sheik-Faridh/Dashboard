import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Faculty, FacultyId } from './faculty';
import type { SalaryGrade, SalaryGradeId } from './salary_grade';

export interface FacultySalaryAttributes {
  id: number;
  gradeLevelId?: number;
  facultyId?: number;
  salary: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy: number;
  updatedBy: number;
  deletedBy?: number;
}

export type FacultySalaryPk = "id";
export type FacultySalaryId = FacultySalary[FacultySalaryPk];
export type FacultySalaryOptionalAttributes = "id" | "gradeLevelId" | "facultyId" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy";
export type FacultySalaryCreationAttributes = Optional<FacultySalaryAttributes, FacultySalaryOptionalAttributes>;

export class FacultySalary extends Model<FacultySalaryAttributes, FacultySalaryCreationAttributes> implements FacultySalaryAttributes {
  id!: number;
  gradeLevelId?: number;
  facultyId?: number;
  salary!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy!: number;
  updatedBy!: number;
  deletedBy?: number;

  // FacultySalary belongsTo Faculty via facultyId
  faculty!: Faculty;
  getFaculty!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setFaculty!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createFaculty!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;
  // FacultySalary belongsTo SalaryGrade via gradeLevelId
  gradeLevel!: SalaryGrade;
  getGradeLevel!: Sequelize.BelongsToGetAssociationMixin<SalaryGrade>;
  setGradeLevel!: Sequelize.BelongsToSetAssociationMixin<SalaryGrade, SalaryGradeId>;
  createGradeLevel!: Sequelize.BelongsToCreateAssociationMixin<SalaryGrade>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FacultySalary {
    return sequelize.define('FacultySalary', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gradeLevelId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'salary_grade',
        key: 'id'
      },
      field: 'grade_level_id'
    },
    facultyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'faculty',
        key: 'id'
      },
      field: 'faculty_id'
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'faculty_salary',
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
        name: "fk_faculty_salary_grade_level_id",
        using: "BTREE",
        fields: [
          { name: "grade_level_id" },
        ]
      },
      {
        name: "fk_faculty_salary_faculty_id",
        using: "BTREE",
        fields: [
          { name: "faculty_id" },
        ]
      },
    ]
  }) as typeof FacultySalary;
  }
}
