import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Exam, ExamId } from './exam';

export interface ExamNameAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ExamNamePk = "id";
export type ExamNameId = ExamName[ExamNamePk];
export type ExamNameOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt";
export type ExamNameCreationAttributes = Optional<ExamNameAttributes, ExamNameOptionalAttributes>;

export class ExamName extends Model<ExamNameAttributes, ExamNameCreationAttributes> implements ExamNameAttributes {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // ExamName hasMany Exam via examNameId
  exams!: Exam[];
  getExams!: Sequelize.HasManyGetAssociationsMixin<Exam>;
  setExams!: Sequelize.HasManySetAssociationsMixin<Exam, ExamId>;
  addExam!: Sequelize.HasManyAddAssociationMixin<Exam, ExamId>;
  addExams!: Sequelize.HasManyAddAssociationsMixin<Exam, ExamId>;
  createExam!: Sequelize.HasManyCreateAssociationMixin<Exam>;
  removeExam!: Sequelize.HasManyRemoveAssociationMixin<Exam, ExamId>;
  removeExams!: Sequelize.HasManyRemoveAssociationsMixin<Exam, ExamId>;
  hasExam!: Sequelize.HasManyHasAssociationMixin<Exam, ExamId>;
  hasExams!: Sequelize.HasManyHasAssociationsMixin<Exam, ExamId>;
  countExams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ExamName {
    return sequelize.define('ExamName', {
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
    }
  }, {
    tableName: 'exam_name',
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
  }) as typeof ExamName;
  }
}
