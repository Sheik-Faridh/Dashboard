import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Achievement, AchievementId } from './achievement';
import type { Certification, CertificationId } from './certification';
import type { WorkPublish, WorkPublishId } from './work_publish';

export interface AttachmentAttributes {
  id: number;
  name: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AttachmentPk = "id";
export type AttachmentId = Attachment[AttachmentPk];
export type AttachmentOptionalAttributes = "id" | "createdAt" | "updatedAt" | "deletedAt";
export type AttachmentCreationAttributes = Optional<AttachmentAttributes, AttachmentOptionalAttributes>;

export class Attachment extends Model<AttachmentAttributes, AttachmentCreationAttributes> implements AttachmentAttributes {
  id!: number;
  name!: string;
  url!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;

  // Attachment hasMany Achievement via attachmentId
  achievements!: Achievement[];
  getAchievements!: Sequelize.HasManyGetAssociationsMixin<Achievement>;
  setAchievements!: Sequelize.HasManySetAssociationsMixin<Achievement, AchievementId>;
  addAchievement!: Sequelize.HasManyAddAssociationMixin<Achievement, AchievementId>;
  addAchievements!: Sequelize.HasManyAddAssociationsMixin<Achievement, AchievementId>;
  createAchievement!: Sequelize.HasManyCreateAssociationMixin<Achievement>;
  removeAchievement!: Sequelize.HasManyRemoveAssociationMixin<Achievement, AchievementId>;
  removeAchievements!: Sequelize.HasManyRemoveAssociationsMixin<Achievement, AchievementId>;
  hasAchievement!: Sequelize.HasManyHasAssociationMixin<Achievement, AchievementId>;
  hasAchievements!: Sequelize.HasManyHasAssociationsMixin<Achievement, AchievementId>;
  countAchievements!: Sequelize.HasManyCountAssociationsMixin;
  // Attachment hasMany Certification via attachmentId
  certifications!: Certification[];
  getCertifications!: Sequelize.HasManyGetAssociationsMixin<Certification>;
  setCertifications!: Sequelize.HasManySetAssociationsMixin<Certification, CertificationId>;
  addCertification!: Sequelize.HasManyAddAssociationMixin<Certification, CertificationId>;
  addCertifications!: Sequelize.HasManyAddAssociationsMixin<Certification, CertificationId>;
  createCertification!: Sequelize.HasManyCreateAssociationMixin<Certification>;
  removeCertification!: Sequelize.HasManyRemoveAssociationMixin<Certification, CertificationId>;
  removeCertifications!: Sequelize.HasManyRemoveAssociationsMixin<Certification, CertificationId>;
  hasCertification!: Sequelize.HasManyHasAssociationMixin<Certification, CertificationId>;
  hasCertifications!: Sequelize.HasManyHasAssociationsMixin<Certification, CertificationId>;
  countCertifications!: Sequelize.HasManyCountAssociationsMixin;
  // Attachment hasMany WorkPublish via attachmentId
  workPublishes!: WorkPublish[];
  getWorkPublishes!: Sequelize.HasManyGetAssociationsMixin<WorkPublish>;
  setWorkPublishes!: Sequelize.HasManySetAssociationsMixin<WorkPublish, WorkPublishId>;
  addWorkPublish!: Sequelize.HasManyAddAssociationMixin<WorkPublish, WorkPublishId>;
  addWorkPublishes!: Sequelize.HasManyAddAssociationsMixin<WorkPublish, WorkPublishId>;
  createWorkPublish!: Sequelize.HasManyCreateAssociationMixin<WorkPublish>;
  removeWorkPublish!: Sequelize.HasManyRemoveAssociationMixin<WorkPublish, WorkPublishId>;
  removeWorkPublishes!: Sequelize.HasManyRemoveAssociationsMixin<WorkPublish, WorkPublishId>;
  hasWorkPublish!: Sequelize.HasManyHasAssociationMixin<WorkPublish, WorkPublishId>;
  hasWorkPublishes!: Sequelize.HasManyHasAssociationsMixin<WorkPublish, WorkPublishId>;
  countWorkPublishes!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Attachment {
    return sequelize.define('Attachment', {
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
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'attachment',
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
  }) as typeof Attachment;
  }
}
