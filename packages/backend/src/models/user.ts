import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Faculty, FacultyId } from './faculty';
import type { Organization, OrganizationId } from './organization';
import type { Student, StudentId } from './student';
import type { UserRole, UserRoleId } from './user_role';

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  active?: number;
  activationToken: string;
  tokenExpiresOn: Date;
  organizationId?: number;
  userType: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy: number;
  updatedBy: number;
  deletedBy?: number;
}

export type UserPk = "id";
export type UserId = User[UserPk];
export type UserOptionalAttributes = "id" | "active" | "organizationId" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy";
export type UserCreationAttributes = Optional<UserAttributes, UserOptionalAttributes>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  active?: number;
  activationToken!: string;
  tokenExpiresOn!: Date;
  organizationId?: number;
  userType!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy!: number;
  updatedBy!: number;
  deletedBy?: number;

  // User belongsTo Organization via organizationId
  organization!: Organization;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<Organization>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<Organization, OrganizationId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<Organization>;
  // User hasMany Faculty via userId
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
  // User hasMany Student via userId
  students!: Student[];
  getStudents!: Sequelize.HasManyGetAssociationsMixin<Student>;
  setStudents!: Sequelize.HasManySetAssociationsMixin<Student, StudentId>;
  addStudent!: Sequelize.HasManyAddAssociationMixin<Student, StudentId>;
  addStudents!: Sequelize.HasManyAddAssociationsMixin<Student, StudentId>;
  createStudent!: Sequelize.HasManyCreateAssociationMixin<Student>;
  removeStudent!: Sequelize.HasManyRemoveAssociationMixin<Student, StudentId>;
  removeStudents!: Sequelize.HasManyRemoveAssociationsMixin<Student, StudentId>;
  hasStudent!: Sequelize.HasManyHasAssociationMixin<Student, StudentId>;
  hasStudents!: Sequelize.HasManyHasAssociationsMixin<Student, StudentId>;
  countStudents!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany UserRole via userId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof User {
    return sequelize.define('User', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "email"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    activationToken: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'activation_token'
    },
    tokenExpiresOn: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'token_expires_on'
    },
    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'organization',
        key: 'id'
      },
      field: 'organization_id'
    },
    userType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'user_type'
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
    tableName: 'user',
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
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "fk_user_organization_id",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  }) as typeof User;
  }
}
