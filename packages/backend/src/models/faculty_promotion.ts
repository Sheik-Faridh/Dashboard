import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Designation, DesignationId } from './designation';
import type { Faculty, FacultyId } from './faculty';

export interface FacultyPromotionAttributes {
  id: number;
  oldDesignationId: number;
  newDesignationId: number;
  facultyId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy: number;
  updatedBy: number;
  deletedBy?: number;
}

export type FacultyPromotionPk = "id";
export type FacultyPromotionId = FacultyPromotion[FacultyPromotionPk];
export type FacultyPromotionOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy";
export type FacultyPromotionCreationAttributes = Optional<FacultyPromotionAttributes, FacultyPromotionOptionalAttributes>;

export class FacultyPromotion extends Model<FacultyPromotionAttributes, FacultyPromotionCreationAttributes> implements FacultyPromotionAttributes {
  id!: number;
  oldDesignationId!: number;
  newDesignationId!: number;
  facultyId!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy!: number;
  updatedBy!: number;
  deletedBy?: number;

  // FacultyPromotion belongsTo Designation via oldDesignationId
  oldDesignation!: Designation;
  getOldDesignation!: Sequelize.BelongsToGetAssociationMixin<Designation>;
  setOldDesignation!: Sequelize.BelongsToSetAssociationMixin<Designation, DesignationId>;
  createOldDesignation!: Sequelize.BelongsToCreateAssociationMixin<Designation>;
  // FacultyPromotion belongsTo Designation via newDesignationId
  newDesignation!: Designation;
  getNewDesignation!: Sequelize.BelongsToGetAssociationMixin<Designation>;
  setNewDesignation!: Sequelize.BelongsToSetAssociationMixin<Designation, DesignationId>;
  createNewDesignation!: Sequelize.BelongsToCreateAssociationMixin<Designation>;
  // FacultyPromotion belongsTo Faculty via facultyId
  faculty!: Faculty;
  getFaculty!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setFaculty!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createFaculty!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FacultyPromotion {
    return sequelize.define('FacultyPromotion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    oldDesignationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'designation',
        key: 'id'
      },
      field: 'old_designation_id'
    },
    newDesignationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'designation',
        key: 'id'
      },
      field: 'new_designation_id'
    },
    facultyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'faculty',
        key: 'id'
      },
      field: 'faculty_id'
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
    tableName: 'faculty_promotion',
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
        name: "fk_faculty_promotion_old_designation_id",
        using: "BTREE",
        fields: [
          { name: "old_designation_id" },
        ]
      },
      {
        name: "fk_faculty_promotion_new_designation_id",
        using: "BTREE",
        fields: [
          { name: "new_designation_id" },
        ]
      },
      {
        name: "fk_faculty_promotion_faculty_id",
        using: "BTREE",
        fields: [
          { name: "faculty_id" },
        ]
      },
    ]
  }) as typeof FacultyPromotion;
  }
}
