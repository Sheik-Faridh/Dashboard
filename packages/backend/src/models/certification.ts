import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Attachment, AttachmentId } from './attachment';
import type { Faculty, FacultyId } from './faculty';
import type { Student, StudentId } from './student';

export interface CertificationAttributes {
  id: number;
  name: string;
  attachmentId?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CertificationPk = "id";
export type CertificationId = Certification[CertificationPk];
export type CertificationOptionalAttributes = "id" | "attachmentId" | "createdAt" | "updatedAt" | "deletedAt";
export type CertificationCreationAttributes = Optional<CertificationAttributes, CertificationOptionalAttributes>;

export class Certification extends Model<CertificationAttributes, CertificationCreationAttributes> implements CertificationAttributes {
  id!: number;
  name!: string;
  attachmentId?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // Certification belongsTo Attachment via attachmentId
  attachment!: Attachment;
  getAttachment!: Sequelize.BelongsToGetAssociationMixin<Attachment>;
  setAttachment!: Sequelize.BelongsToSetAssociationMixin<Attachment, AttachmentId>;
  createAttachment!: Sequelize.BelongsToCreateAssociationMixin<Attachment>;
  // Certification hasMany Faculty via certification
  faculties!: Faculty[];
  getFaculties!: Sequelize.HasManyGetAssociationsMixin<Faculty>;
  setFaculties!: Sequelize.HasManySetAssociationsMixin<Faculty, FacultyId>;
  addFaculty!: Sequelize.HasManyAddAssociationMixin<Faculty, FacultyId>;
  addFaculties!: Sequelize.HasManyAddAssociationsMixin<Faculty, FacultyId>;
  createFaculty!: Sequelize.HasManyCreateAssociationMixin<Faculty>;
  removeFaculty!: Sequelize.HasManyRemoveAssociationMixin<Faculty, FacultyId>;
  removeFaculties!: Sequelize.HasManyRemoveAssociationsMixin<Faculty, FacultyId>;
  hasFaculty!: Sequelize.HasManyHasAssociationMixin<Faculty, FacultyId>;
  hasFaculties!: Sequelize.HasManyHasAssociationsMixin<Faculty, FacultyId>;
  countFaculties!: Sequelize.HasManyCountAssociationsMixin;
  // Certification hasMany Student via certification
  students!: Student[];
  getStudents!: Sequelize.HasManyGetAssociationsMixin<Student>;
  setStudents!: Sequelize.HasManySetAssociationsMixin<Student, StudentId>;
  addStudent!: Sequelize.HasManyAddAssociationMixin<Student, StudentId>;
  addStudents!: Sequelize.HasManyAddAssociationsMixin<Student, StudentId>;
  createStudent!: Sequelize.HasManyCreateAssociationMixin<Student>;
  removeStudent!: Sequelize.HasManyRemoveAssociationMixin<Student, StudentId>;
  removeStudents!: Sequelize.HasManyRemoveAssociationsMixin<Student, StudentId>;
  hasStudent!: Sequelize.HasManyHasAssociationMixin<Student, StudentId>;
  hasStudents!: Sequelize.HasManyHasAssociationsMixin<Student, StudentId>;
  countStudents!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Certification {
    return sequelize.define('Certification', {
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
    attachmentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'attachment',
        key: 'id'
      },
      field: 'attachment_id'
    }
  }, {
    tableName: 'certification',
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
        name: "fk_certification_attachment_id",
        using: "BTREE",
        fields: [
          { name: "attachment_id" },
        ]
      },
    ]
  }) as typeof Certification;
  }
}
