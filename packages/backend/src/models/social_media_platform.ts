import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { UserSocialMedium, UserSocialMediumId } from './user_social_medium';

export interface SocialMediaPlatformAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SocialMediaPlatformPk = "id";
export type SocialMediaPlatformId = SocialMediaPlatform[SocialMediaPlatformPk];
export type SocialMediaPlatformOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt";
export type SocialMediaPlatformCreationAttributes = Optional<SocialMediaPlatformAttributes, SocialMediaPlatformOptionalAttributes>;

export class SocialMediaPlatform extends Model<SocialMediaPlatformAttributes, SocialMediaPlatformCreationAttributes> implements SocialMediaPlatformAttributes {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // SocialMediaPlatform hasMany UserSocialMedium via socialMediaPlatformId
  userSocialMedia!: UserSocialMedium[];
  getUserSocialMedia!: Sequelize.HasManyGetAssociationsMixin<UserSocialMedium>;
  setUserSocialMedia!: Sequelize.HasManySetAssociationsMixin<UserSocialMedium, UserSocialMediumId>;
  addUserSocialMedium!: Sequelize.HasManyAddAssociationMixin<UserSocialMedium, UserSocialMediumId>;
  addUserSocialMedia!: Sequelize.HasManyAddAssociationsMixin<UserSocialMedium, UserSocialMediumId>;
  createUserSocialMedium!: Sequelize.HasManyCreateAssociationMixin<UserSocialMedium>;
  removeUserSocialMedium!: Sequelize.HasManyRemoveAssociationMixin<UserSocialMedium, UserSocialMediumId>;
  removeUserSocialMedia!: Sequelize.HasManyRemoveAssociationsMixin<UserSocialMedium, UserSocialMediumId>;
  hasUserSocialMedium!: Sequelize.HasManyHasAssociationMixin<UserSocialMedium, UserSocialMediumId>;
  hasUserSocialMedia!: Sequelize.HasManyHasAssociationsMixin<UserSocialMedium, UserSocialMediumId>;
  countUserSocialMedia!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof SocialMediaPlatform {
    return sequelize.define('SocialMediaPlatform', {
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
    tableName: 'social_media_platform',
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
  }) as typeof SocialMediaPlatform;
  }
}
