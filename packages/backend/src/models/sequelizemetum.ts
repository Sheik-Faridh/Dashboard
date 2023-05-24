import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SequelizemetumAttributes {
  name: string;
}

export type SequelizemetumPk = "name";
export type SequelizemetumId = Sequelizemetum[SequelizemetumPk];
export type SequelizemetumCreationAttributes = SequelizemetumAttributes;

export class Sequelizemetum extends Model<SequelizemetumAttributes, SequelizemetumCreationAttributes> implements SequelizemetumAttributes {
  name!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Sequelizemetum {
    return sequelize.define('Sequelizemetum', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'sequelizemeta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
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
  }) as typeof Sequelizemetum;
  }
}
