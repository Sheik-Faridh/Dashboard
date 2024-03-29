import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface EducationQualificationAttributes {
  id: number;
  degree: string;
  startDate: string;
  endDate: string;
  university: string;
  marks: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}

export type EducationQualificationPk = "id";
export type EducationQualificationId = EducationQualification[EducationQualificationPk];
export type EducationQualificationOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt" | "createdBy" | "updatedBy" | "deletedBy";
export type EducationQualificationCreationAttributes = Optional<EducationQualificationAttributes, EducationQualificationOptionalAttributes>;

export class EducationQualification extends Model<EducationQualificationAttributes, EducationQualificationCreationAttributes> implements EducationQualificationAttributes {
  id!: number;
  degree!: string;
  startDate!: string;
  endDate!: string;
  university!: string;
  marks!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof EducationQualification {
    return sequelize.define('EducationQualification', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    degree: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'end_date'
    },
    university: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    marks: {
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
    tableName: 'education_qualification',
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
    ]
  }) as typeof EducationQualification;
  }
}
