import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { RoleCommand, RoleCommandId } from './role_command';

export interface CommandAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CommandPk = "id";
export type CommandId = Command[CommandPk];
export type CommandOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt";
export type CommandCreationAttributes = Optional<CommandAttributes, CommandOptionalAttributes>;

export class Command extends Model<CommandAttributes, CommandCreationAttributes> implements CommandAttributes {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // Command hasMany RoleCommand via commandId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Command {
    return sequelize.define('Command', {
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
    tableName: 'command',
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
  }) as typeof Command;
  }
}
