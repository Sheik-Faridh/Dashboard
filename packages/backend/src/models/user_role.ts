import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Role, RoleId } from './role';
import type { User, UserId } from './user';

export interface UserRoleAttributes {
  id: number;
  roleId?: number;
  userId?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UserRolePk = "id";
export type UserRoleId = UserRole[UserRolePk];
export type UserRoleOptionalAttributes = "id" | "roleId" | "userId" | "createdAt" | "updatedAt" | "deletedAt";
export type UserRoleCreationAttributes = Optional<UserRoleAttributes, UserRoleOptionalAttributes>;

export class UserRole extends Model<UserRoleAttributes, UserRoleCreationAttributes> implements UserRoleAttributes {
  id!: number;
  roleId?: number;
  userId?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // UserRole belongsTo Role via roleId
  role!: Role;
  getRole!: Sequelize.BelongsToGetAssociationMixin<Role>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<Role, RoleId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<Role>;
  // UserRole belongsTo User via userId
  user!: User;
  getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof UserRole {
    return sequelize.define('UserRole', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'role',
        key: 'id'
      },
      field: 'role_id'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      },
      field: 'user_id'
    }
  }, {
    tableName: 'user_role',
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
        name: "fk_user_role_user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_user_role_role_id",
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  }) as typeof UserRole;
  }
}
