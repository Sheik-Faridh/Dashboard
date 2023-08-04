import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Class, ClassId } from './class';
import type { Student, StudentId } from './student';

export interface StudentPromotionAttributes {
  id: number;
  promotedFrom: number;
  promotedTo: number;
  studentId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy: number;
  updatedBy: number;
  deletedBy?: number;
}

export type StudentPromotionPk = "id";
export type StudentPromotionId = StudentPromotion[StudentPromotionPk];
export type StudentPromotionOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy";
export type StudentPromotionCreationAttributes = Optional<StudentPromotionAttributes, StudentPromotionOptionalAttributes>;

export class StudentPromotion extends Model<StudentPromotionAttributes, StudentPromotionCreationAttributes> implements StudentPromotionAttributes {
  id!: number;
  promotedFrom!: number;
  promotedTo!: number;
  studentId!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy!: number;
  updatedBy!: number;
  deletedBy?: number;

  // StudentPromotion belongsTo Class via promotedFrom
  promotedFromClass!: Class;
  getPromotedFromClass!: Sequelize.BelongsToGetAssociationMixin<Class>;
  setPromotedFromClass!: Sequelize.BelongsToSetAssociationMixin<Class, ClassId>;
  createPromotedFromClass!: Sequelize.BelongsToCreateAssociationMixin<Class>;
  // StudentPromotion belongsTo Class via promotedTo
  promotedToClass!: Class;
  getPromotedToClass!: Sequelize.BelongsToGetAssociationMixin<Class>;
  setPromotedToClass!: Sequelize.BelongsToSetAssociationMixin<Class, ClassId>;
  createPromotedToClass!: Sequelize.BelongsToCreateAssociationMixin<Class>;
  // StudentPromotion belongsTo Student via studentId
  student!: Student;
  getStudent!: Sequelize.BelongsToGetAssociationMixin<Student>;
  setStudent!: Sequelize.BelongsToSetAssociationMixin<Student, StudentId>;
  createStudent!: Sequelize.BelongsToCreateAssociationMixin<Student>;

  static initModel(sequelize: Sequelize.Sequelize): typeof StudentPromotion {
    return sequelize.define('StudentPromotion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    promotedFrom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'class',
        key: 'id'
      },
      field: 'promoted_from'
    },
    promotedTo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'class',
        key: 'id'
      },
      field: 'promoted_to'
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'student',
        key: 'id'
      },
      field: 'student_id'
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
    tableName: 'student_promotion',
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
        name: "fk_student_promotion_promoted_from",
        using: "BTREE",
        fields: [
          { name: "promoted_from" },
        ]
      },
      {
        name: "fk_student_promotion_promoted_to",
        using: "BTREE",
        fields: [
          { name: "promoted_to" },
        ]
      },
      {
        name: "fk_student_promotion_student_id",
        using: "BTREE",
        fields: [
          { name: "student_id" },
        ]
      },
    ]
  }) as typeof StudentPromotion;
  }
}
