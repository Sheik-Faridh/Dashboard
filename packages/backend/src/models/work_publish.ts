import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Attachment, AttachmentId } from './attachment';
import type { Faculty, FacultyId } from './faculty';
import type { Student, StudentId } from './student';

export interface WorkPublishAttributes {
  id: number;
  title: string;
  description: string;
  link?: string;
  attachmentId?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type WorkPublishPk = "id";
export type WorkPublishId = WorkPublish[WorkPublishPk];
export type WorkPublishOptionalAttributes = "id" | "link" | "attachmentId" | "createdAt" | "updatedAt" | "deletedAt";
export type WorkPublishCreationAttributes = Optional<WorkPublishAttributes, WorkPublishOptionalAttributes>;

export class WorkPublish extends Model<WorkPublishAttributes, WorkPublishCreationAttributes> implements WorkPublishAttributes {
  id!: number;
  title!: string;
  description!: string;
  link?: string;
  attachmentId?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // WorkPublish belongsTo Attachment via attachmentId
  attachment!: Attachment;
  getAttachment!: Sequelize.BelongsToGetAssociationMixin<Attachment>;
  setAttachment!: Sequelize.BelongsToSetAssociationMixin<Attachment, AttachmentId>;
  createAttachment!: Sequelize.BelongsToCreateAssociationMixin<Attachment>;
  // WorkPublish hasMany Faculty via workPublish
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
  // WorkPublish hasMany Student via workPublish
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

  static initModel(sequelize: Sequelize.Sequelize): typeof WorkPublish {
    return sequelize.define('WorkPublish', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'work_publish',
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
        name: "fk_work_publish_attachment_id",
        using: "BTREE",
        fields: [
          { name: "attachment_id" },
        ]
      },
    ]
  }) as typeof WorkPublish;
  }
}
