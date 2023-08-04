import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Faculty, FacultyId } from './faculty';
import type { SocialMediaPlatform, SocialMediaPlatformId } from './social_media_platform';
import type { Student, StudentId } from './student';

export interface UserSocialMediumAttributes {
  id: number;
  link: string;
  socialMediaPlatformId?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy: number;
  updatedBy: number;
  deletedBy?: number;
}

export type UserSocialMediumPk = "id";
export type UserSocialMediumId = UserSocialMedium[UserSocialMediumPk];
export type UserSocialMediumOptionalAttributes = "id" | "socialMediaPlatformId" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy";
export type UserSocialMediumCreationAttributes = Optional<UserSocialMediumAttributes, UserSocialMediumOptionalAttributes>;

export class UserSocialMedium extends Model<UserSocialMediumAttributes, UserSocialMediumCreationAttributes> implements UserSocialMediumAttributes {
  id!: number;
  link!: string;
  socialMediaPlatformId?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy!: number;
  updatedBy!: number;
  deletedBy?: number;

  // UserSocialMedium belongsTo SocialMediaPlatform via socialMediaPlatformId
  socialMediaPlatform!: SocialMediaPlatform;
  getSocialMediaPlatform!: Sequelize.BelongsToGetAssociationMixin<SocialMediaPlatform>;
  setSocialMediaPlatform!: Sequelize.BelongsToSetAssociationMixin<SocialMediaPlatform, SocialMediaPlatformId>;
  createSocialMediaPlatform!: Sequelize.BelongsToCreateAssociationMixin<SocialMediaPlatform>;
  // UserSocialMedium hasMany Faculty via socialMediaPlatform
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
  // UserSocialMedium hasMany Student via socialMediaPlatform
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

  static initModel(sequelize: Sequelize.Sequelize): typeof UserSocialMedium {
    return sequelize.define('UserSocialMedium', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "link"
    },
    socialMediaPlatformId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'social_media_platform',
        key: 'id'
      },
      field: 'social_media_platform_id'
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
    tableName: 'user_social_media',
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
        name: "link",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "link" },
        ]
      },
      {
        name: "fk_user_social_media_platform_id",
        using: "BTREE",
        fields: [
          { name: "social_media_platform_id" },
        ]
      },
    ]
  }) as typeof UserSocialMedium;
  }
}
