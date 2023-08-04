import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Student, StudentId } from './student';

export interface ParentContactAttributes {
  id: number;
  studentId: number;
  fatherName?: number;
  fatherContactNumber?: string;
  motherName?: number;
  motherContactNumber?: string;
  guardianName?: number;
  guardianContactNumber?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}

export type ParentContactPk = "id";
export type ParentContactId = ParentContact[ParentContactPk];
export type ParentContactOptionalAttributes = "id" | "fatherName" | "fatherContactNumber" | "motherName" | "motherContactNumber" | "guardianName" | "guardianContactNumber" | "createdAt" | "updatedAt" | "deletedAt" | "createdBy" | "updatedBy" | "deletedBy";
export type ParentContactCreationAttributes = Optional<ParentContactAttributes, ParentContactOptionalAttributes>;

export class ParentContact extends Model<ParentContactAttributes, ParentContactCreationAttributes> implements ParentContactAttributes {
  id!: number;
  studentId!: number;
  fatherName?: number;
  fatherContactNumber?: string;
  motherName?: number;
  motherContactNumber?: string;
  guardianName?: number;
  guardianContactNumber?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;

  // ParentContact belongsTo Student via studentId
  student!: Student;
  getStudent!: Sequelize.BelongsToGetAssociationMixin<Student>;
  setStudent!: Sequelize.BelongsToSetAssociationMixin<Student, StudentId>;
  createStudent!: Sequelize.BelongsToCreateAssociationMixin<Student>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ParentContact {
    return sequelize.define('ParentContact', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    fatherName: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'father_name'
    },
    fatherContactNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'father_contact_number'
    },
    motherName: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'mother_name'
    },
    motherContactNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'mother_contact_number'
    },
    guardianName: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'guardian_name'
    },
    guardianContactNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'guardian_contact_number'
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
    tableName: 'parent_contact',
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
        name: "fk_parent_contact_student_id",
        using: "BTREE",
        fields: [
          { name: "student_id" },
        ]
      },
    ]
  }) as typeof ParentContact;
  }
}
