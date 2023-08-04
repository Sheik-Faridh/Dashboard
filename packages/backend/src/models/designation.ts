import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Faculty, FacultyId } from './faculty';
import type { FacultyPromotion, FacultyPromotionId } from './faculty_promotion';

export interface DesignationAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy: number;
  updatedBy: number;
  deletedBy?: number;
}

export type DesignationPk = "id";
export type DesignationId = Designation[DesignationPk];
export type DesignationOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy";
export type DesignationCreationAttributes = Optional<DesignationAttributes, DesignationOptionalAttributes>;

export class Designation extends Model<DesignationAttributes, DesignationCreationAttributes> implements DesignationAttributes {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy!: number;
  updatedBy!: number;
  deletedBy?: number;

  // Designation hasMany Faculty via designationId
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
  // Designation hasMany FacultyPromotion via oldDesignationId
  facultyPromotions!: FacultyPromotion[];
  getFacultyPromotions!: Sequelize.HasManyGetAssociationsMixin<FacultyPromotion>;
  setFacultyPromotions!: Sequelize.HasManySetAssociationsMixin<FacultyPromotion, FacultyPromotionId>;
  addFacultyPromotion!: Sequelize.HasManyAddAssociationMixin<FacultyPromotion, FacultyPromotionId>;
  addFacultyPromotions!: Sequelize.HasManyAddAssociationsMixin<FacultyPromotion, FacultyPromotionId>;
  createFacultyPromotion!: Sequelize.HasManyCreateAssociationMixin<FacultyPromotion>;
  removeFacultyPromotion!: Sequelize.HasManyRemoveAssociationMixin<FacultyPromotion, FacultyPromotionId>;
  removeFacultyPromotions!: Sequelize.HasManyRemoveAssociationsMixin<FacultyPromotion, FacultyPromotionId>;
  hasFacultyPromotion!: Sequelize.HasManyHasAssociationMixin<FacultyPromotion, FacultyPromotionId>;
  hasFacultyPromotions!: Sequelize.HasManyHasAssociationsMixin<FacultyPromotion, FacultyPromotionId>;
  countFacultyPromotions!: Sequelize.HasManyCountAssociationsMixin;
  // Designation hasMany FacultyPromotion via newDesignationId
  newDesignationFacultyPromotions!: FacultyPromotion[];
  getNewDesignationFacultyPromotions!: Sequelize.HasManyGetAssociationsMixin<FacultyPromotion>;
  setNewDesignationFacultyPromotions!: Sequelize.HasManySetAssociationsMixin<FacultyPromotion, FacultyPromotionId>;
  addNewDesignationFacultyPromotion!: Sequelize.HasManyAddAssociationMixin<FacultyPromotion, FacultyPromotionId>;
  addNewDesignationFacultyPromotions!: Sequelize.HasManyAddAssociationsMixin<FacultyPromotion, FacultyPromotionId>;
  createNewDesignationFacultyPromotion!: Sequelize.HasManyCreateAssociationMixin<FacultyPromotion>;
  removeNewDesignationFacultyPromotion!: Sequelize.HasManyRemoveAssociationMixin<FacultyPromotion, FacultyPromotionId>;
  removeNewDesignationFacultyPromotions!: Sequelize.HasManyRemoveAssociationsMixin<FacultyPromotion, FacultyPromotionId>;
  hasNewDesignationFacultyPromotion!: Sequelize.HasManyHasAssociationMixin<FacultyPromotion, FacultyPromotionId>;
  hasNewDesignationFacultyPromotions!: Sequelize.HasManyHasAssociationsMixin<FacultyPromotion, FacultyPromotionId>;
  countNewDesignationFacultyPromotions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Designation {
    return sequelize.define('Designation', {
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
    tableName: 'designation',
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
  }) as typeof Designation;
  }
}
