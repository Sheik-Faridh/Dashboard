import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Command, CommandId } from './command';
import type { Role, RoleId } from './role';

export interface RoleCommandAttributes {
  id: number;
  roleId?: number;
  commandId?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy: number;
  updatedBy: number;
  deletedBy?: number;
}

export type RoleCommandPk = "id";
export type RoleCommandId = RoleCommand[RoleCommandPk];
export type RoleCommandOptionalAttributes = "id" | "roleId" | "commandId" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy";
export type RoleCommandCreationAttributes = Optional<RoleCommandAttributes, RoleCommandOptionalAttributes>;

export class RoleCommand extends Model<RoleCommandAttributes, RoleCommandCreationAttributes> implements RoleCommandAttributes {
  id!: number;
  roleId?: number;
  commandId?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy!: number;
  updatedBy!: number;
  deletedBy?: number;

  // RoleCommand belongsTo Command via commandId
  command!: Command;
  getCommand!: Sequelize.BelongsToGetAssociationMixin<Command>;
  setCommand!: Sequelize.BelongsToSetAssociationMixin<Command, CommandId>;
  createCommand!: Sequelize.BelongsToCreateAssociationMixin<Command>;
  // RoleCommand belongsTo Role via roleId
  role!: Role;
  getRole!: Sequelize.BelongsToGetAssociationMixin<Role>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<Role, RoleId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<Role>;

  static initModel(sequelize: Sequelize.Sequelize): typeof RoleCommand {
    return sequelize.define('RoleCommand', {
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
    commandId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'command',
        key: 'id'
      },
      field: 'command_id'
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
    tableName: 'role_command',
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
        name: "fk_role_command_command_id",
        using: "BTREE",
        fields: [
          { name: "command_id" },
        ]
      },
      {
        name: "fk_role_command_role_id",
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  }) as typeof RoleCommand;
  }
}
