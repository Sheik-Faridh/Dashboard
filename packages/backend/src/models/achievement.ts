import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Attachment, AttachmentId } from './attachment';
import type { Faculty, FacultyId } from './faculty';
import type { Student, StudentId } from './student';

export interface AchievementAttributes {
  id: number;
  name: string;
  description: string;
  attachmentId?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AchievementPk = "id";
export type AchievementId = Achievement[AchievementPk];
export type AchievementOptionalAttributes = "id" | "attachmentId" | "createdAt" | "updatedAt" | "deletedAt";
export type AchievementCreationAttributes = Optional<AchievementAttributes, AchievementOptionalAttributes>;

export class Achievement extends Model<AchievementAttributes, AchievementCreationAttributes> implements AchievementAttributes {
  id!: number;
  name!: string;
  description!: string;
  attachmentId?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // Achievement hasMany Faculty via achievement
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
  // Achievement hasMany Student via achievement
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
  // Achievement belongsTo Attachment via attachmentId
  attachment!: Attachment;
  getAttachment!: Sequelize.BelongsToGetAssociationMixin<Attachment>;
  setAttachment!: Sequelize.BelongsToSetAssociationMixin<Attachment, AttachmentId>;
  createAttachment!: Sequelize.BelongsToCreateAssociationMixin<Attachment>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Achievement {
    return sequelize.define('Achievement', {
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
    description: {
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
    tableName: 'achievement',
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
        name: "fk_achievement_attachment_id",
        using: "BTREE",
        fields: [
          { name: "attachment_id" },
        ]
      },
    ]
  }) as typeof Achievement;
  }
}
