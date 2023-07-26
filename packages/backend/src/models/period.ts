import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Session, SessionId } from './session';
import type { Timetable, TimetableId } from './timetable';

export interface PeriodAttributes {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type PeriodPk = "id";
export type PeriodId = Period[PeriodPk];
export type PeriodOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt";
export type PeriodCreationAttributes = Optional<PeriodAttributes, PeriodOptionalAttributes>;

export class Period extends Model<PeriodAttributes, PeriodCreationAttributes> implements PeriodAttributes {
  id!: number;
  day!: string;
  startTime!: string;
  endTime!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // Period hasMany Session via periodId
  sessions!: Session[];
  getSessions!: Sequelize.HasManyGetAssociationsMixin<Session>;
  setSessions!: Sequelize.HasManySetAssociationsMixin<Session, SessionId>;
  addSession!: Sequelize.HasManyAddAssociationMixin<Session, SessionId>;
  addSessions!: Sequelize.HasManyAddAssociationsMixin<Session, SessionId>;
  createSession!: Sequelize.HasManyCreateAssociationMixin<Session>;
  removeSession!: Sequelize.HasManyRemoveAssociationMixin<Session, SessionId>;
  removeSessions!: Sequelize.HasManyRemoveAssociationsMixin<Session, SessionId>;
  hasSession!: Sequelize.HasManyHasAssociationMixin<Session, SessionId>;
  hasSessions!: Sequelize.HasManyHasAssociationsMixin<Session, SessionId>;
  countSessions!: Sequelize.HasManyCountAssociationsMixin;
  // Period hasMany Timetable via periodId
  timetables!: Timetable[];
  getTimetables!: Sequelize.HasManyGetAssociationsMixin<Timetable>;
  setTimetables!: Sequelize.HasManySetAssociationsMixin<Timetable, TimetableId>;
  addTimetable!: Sequelize.HasManyAddAssociationMixin<Timetable, TimetableId>;
  addTimetables!: Sequelize.HasManyAddAssociationsMixin<Timetable, TimetableId>;
  createTimetable!: Sequelize.HasManyCreateAssociationMixin<Timetable>;
  removeTimetable!: Sequelize.HasManyRemoveAssociationMixin<Timetable, TimetableId>;
  removeTimetables!: Sequelize.HasManyRemoveAssociationsMixin<Timetable, TimetableId>;
  hasTimetable!: Sequelize.HasManyHasAssociationMixin<Timetable, TimetableId>;
  hasTimetables!: Sequelize.HasManyHasAssociationsMixin<Timetable, TimetableId>;
  countTimetables!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Period {
    return sequelize.define('Period', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    day: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    startTime: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'start_time'
    },
    endTime: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'end_time'
    }
  }, {
    tableName: 'period',
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
    ]
  }) as typeof Period;
  }
}
