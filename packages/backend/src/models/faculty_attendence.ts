import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Faculty, FacultyId } from './faculty';

export interface FacultyAttendenceAttributes {
  id: number;
  date: Date;
  facultyId: number;
  inTime: string;
  outTime: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type FacultyAttendencePk = "id";
export type FacultyAttendenceId = FacultyAttendence[FacultyAttendencePk];
export type FacultyAttendenceOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt";
export type FacultyAttendenceCreationAttributes = Optional<FacultyAttendenceAttributes, FacultyAttendenceOptionalAttributes>;

export class FacultyAttendence extends Model<FacultyAttendenceAttributes, FacultyAttendenceCreationAttributes> implements FacultyAttendenceAttributes {
  id!: number;
  date!: Date;
  facultyId!: number;
  inTime!: string;
  outTime!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // FacultyAttendence belongsTo Faculty via facultyId
  faculty!: Faculty;
  getFaculty!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setFaculty!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createFaculty!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FacultyAttendence {
    return sequelize.define('FacultyAttendence', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
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
    inTime: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'in_time'
    },
    outTime: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'out_time'
    }
  }, {
    tableName: 'faculty_attendence',
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
        name: "fk_faculty_attendence_faculty_id",
        using: "BTREE",
        fields: [
          { name: "faculty_id" },
        ]
      },
    ]
  }) as typeof FacultyAttendence;
  }
}
