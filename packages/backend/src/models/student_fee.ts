import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Student, StudentId } from './student';

export interface StudentFeeAttributes {
  id: number;
  name: string;
  studentId: number;
  amount: number;
  dueDate: Date;
  paidOn: Date;
  receiptNumber?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}

export type StudentFeePk = "id";
export type StudentFeeId = StudentFee[StudentFeePk];
export type StudentFeeOptionalAttributes = "id" | "receiptNumber" | "createdAt" | "updatedAt" | "deletedAt" | "createdBy" | "updatedBy" | "deletedBy";
export type StudentFeeCreationAttributes = Optional<StudentFeeAttributes, StudentFeeOptionalAttributes>;

export class StudentFee extends Model<StudentFeeAttributes, StudentFeeCreationAttributes> implements StudentFeeAttributes {
  id!: number;
  name!: string;
  studentId!: number;
  amount!: number;
  dueDate!: Date;
  paidOn!: Date;
  receiptNumber?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;

  // StudentFee belongsTo Student via studentId
  student!: Student;
  getStudent!: Sequelize.BelongsToGetAssociationMixin<Student>;
  setStudent!: Sequelize.BelongsToSetAssociationMixin<Student, StudentId>;
  createStudent!: Sequelize.BelongsToCreateAssociationMixin<Student>;

  static initModel(sequelize: Sequelize.Sequelize): typeof StudentFee {
    return sequelize.define('StudentFee', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'due_date'
    },
    paidOn: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'paid_on'
    },
    receiptNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'receipt_number'
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
    tableName: 'student_fee',
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
        name: "fk_student_fee_student_id",
        using: "BTREE",
        fields: [
          { name: "student_id" },
        ]
      },
    ]
  }) as typeof StudentFee;
  }
}
