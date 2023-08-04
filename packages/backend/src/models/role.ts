import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { RoleCommand, RoleCommandId } from './role_command';
import type { UserRole, UserRoleId } from './user_role';

export interface RoleAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}

export type RolePk = "id";
export type RoleId = Role[RolePk];
export type RoleOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt" | "createdBy" | "updatedBy" | "deletedBy";
export type RoleCreationAttributes = Optional<RoleAttributes, RoleOptionalAttributes>;

export class Role extends Model<RoleAttributes, RoleCreationAttributes> implements RoleAttributes {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;

  // Role hasMany RoleCommand via roleId
  roleCommands!: RoleCommand[];
  getRoleCommands!: Sequelize.HasManyGetAssociationsMixin<RoleCommand>;
  setRoleCommands!: Sequelize.HasManySetAssociationsMixin<RoleCommand, RoleCommandId>;
  addRoleCommand!: Sequelize.HasManyAddAssociationMixin<RoleCommand, RoleCommandId>;
  addRoleCommands!: Sequelize.HasManyAddAssociationsMixin<RoleCommand, RoleCommandId>;
  createRoleCommand!: Sequelize.HasManyCreateAssociationMixin<RoleCommand>;
  removeRoleCommand!: Sequelize.HasManyRemoveAssociationMixin<RoleCommand, RoleCommandId>;
  removeRoleCommands!: Sequelize.HasManyRemoveAssociationsMixin<RoleCommand, RoleCommandId>;
  hasRoleCommand!: Sequelize.HasManyHasAssociationMixin<RoleCommand, RoleCommandId>;
  hasRoleCommands!: Sequelize.HasManyHasAssociationsMixin<RoleCommand, RoleCommandId>;
  countRoleCommands!: Sequelize.HasManyCountAssociationsMixin;
  // Role hasMany UserRole via roleId
  userRoles!: UserRole[];
  getUserRoles!: Sequelize.HasManyGetAssociationsMixin<UserRole>;
  setUserRoles!: Sequelize.HasManySetAssociationsMixin<UserRole, UserRoleId>;
  addUserRole!: Sequelize.HasManyAddAssociationMixin<UserRole, UserRoleId>;
  addUserRoles!: Sequelize.HasManyAddAssociationsMixin<UserRole, UserRoleId>;
  createUserRole!: Sequelize.HasManyCreateAssociationMixin<UserRole>;
  removeUserRole!: Sequelize.HasManyRemoveAssociationMixin<UserRole, UserRoleId>;
  removeUserRoles!: Sequelize.HasManyRemoveAssociationsMixin<UserRole, UserRoleId>;
  hasUserRole!: Sequelize.HasManyHasAssociationMixin<UserRole, UserRoleId>;
  hasUserRoles!: Sequelize.HasManyHasAssociationsMixin<UserRole, UserRoleId>;
  countUserRoles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Role {
    return sequelize.define('Role', {
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
    tableName: 'role',
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
  }) as typeof Role;
  }
}
