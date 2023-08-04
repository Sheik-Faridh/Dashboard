import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Faculty, FacultyId } from './faculty';

export interface SalaryHikeAttributes {
  id: number;
  facultyId: number;
  oldSalary: number;
  revisedSalary: number;
  effectiveFrom: Date;
  reviewerId: number;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}

export type SalaryHikePk = "id";
export type SalaryHikeId = SalaryHike[SalaryHikePk];
export type SalaryHikeOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt" | "createdBy" | "updatedBy" | "deletedBy";
export type SalaryHikeCreationAttributes = Optional<SalaryHikeAttributes, SalaryHikeOptionalAttributes>;

export class SalaryHike extends Model<SalaryHikeAttributes, SalaryHikeCreationAttributes> implements SalaryHikeAttributes {
  id!: number;
  facultyId!: number;
  oldSalary!: number;
  revisedSalary!: number;
  effectiveFrom!: Date;
  reviewerId!: number;
  rating!: number;
  comment!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;

  // SalaryHike belongsTo Faculty via facultyId
  faculty!: Faculty;
  getFaculty!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setFaculty!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createFaculty!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;
  // SalaryHike belongsTo Faculty via reviewerId
  reviewer!: Faculty;
  getReviewer!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setReviewer!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createReviewer!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;

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
    },
    reviewerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'faculty',
        key: 'id'
      },
      field: 'reviewer_id'
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: false
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
      {
        name: "fk_salary_hike_reviewer_id",
        using: "BTREE",
        fields: [
          { name: "reviewer_id" },
        ]
      },
    ]
  }) as typeof SalaryHike;
  }
}
