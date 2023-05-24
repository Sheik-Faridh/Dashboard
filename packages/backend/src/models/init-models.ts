import type { Sequelize } from "sequelize";
import { Sequelizemetum as _Sequelizemetum } from "./sequelizemetum";
import type { SequelizemetumAttributes, SequelizemetumCreationAttributes } from "./sequelizemetum";
import { User as _User } from "./user";
import type { UserAttributes, UserCreationAttributes } from "./user";

export {
  _Sequelizemetum as Sequelizemetum,
  _User as User,
};

export type {
  SequelizemetumAttributes,
  SequelizemetumCreationAttributes,
  UserAttributes,
  UserCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Sequelizemetum = _Sequelizemetum.initModel(sequelize);
  const User = _User.initModel(sequelize);


  return {
    Sequelizemetum: Sequelizemetum,
    User: User,
  };
}
