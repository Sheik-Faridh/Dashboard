import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Achievement, AchievementId } from './achievement';
import type { BankDetail, BankDetailId } from './bank_detail';
import type { Certification, CertificationId } from './certification';
import type { Class, ClassId } from './class';
import type { Contact, ContactId } from './contact';
import type { CourseExamResult, CourseExamResultId } from './course_exam_result';
import type { Department, DepartmentId } from './department';
import type { Faculty, FacultyId } from './faculty';
import type { ParentContact, ParentContactId } from './parent_contact';
import type { Section, SectionId } from './section';
import type { StudentAttendence, StudentAttendenceId } from './student_attendence';
import type { StudentFee, StudentFeeId } from './student_fee';
import type { StudentPromotion, StudentPromotionId } from './student_promotion';
import type { StudentType, StudentTypeId } from './student_type';
import type { User, UserId } from './user';
import type { UserSocialMedium, UserSocialMediumId } from './user_social_medium';
import type { WorkPublish, WorkPublishId } from './work_publish';

export interface StudentAttributes {
  id: number;
  rollNumber: string;
  userId: number;
  departmentId: number;
  studentTypeId: number;
  joinDate: string;
  relieveDate?: string;
  contactId?: number;
  mentorId: number;
  classId: number;
  sectionId: number;
  workPublish?: number;
  certification?: number;
  achievement?: number;
  bankDetail?: number;
  socialMediaPlatform?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}

export type StudentPk = "id";
export type StudentId = Student[StudentPk];
export type StudentOptionalAttributes = "id" | "relieveDate" | "contactId" | "workPublish" | "certification" | "achievement" | "bankDetail" | "socialMediaPlatform" | "createdAt" | "updatedAt" | "deletedAt" | "createdBy" | "updatedBy" | "deletedBy";
export type StudentCreationAttributes = Optional<StudentAttributes, StudentOptionalAttributes>;

export class Student extends Model<StudentAttributes, StudentCreationAttributes> implements StudentAttributes {
  id!: number;
  rollNumber!: string;
  userId!: number;
  departmentId!: number;
  studentTypeId!: number;
  joinDate!: string;
  relieveDate?: string;
  contactId?: number;
  mentorId!: number;
  classId!: number;
  sectionId!: number;
  workPublish?: number;
  certification?: number;
  achievement?: number;
  bankDetail?: number;
  socialMediaPlatform?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;

  // Student belongsTo Achievement via achievement
  achievementAchievement!: Achievement;
  getAchievementAchievement!: Sequelize.BelongsToGetAssociationMixin<Achievement>;
  setAchievementAchievement!: Sequelize.BelongsToSetAssociationMixin<Achievement, AchievementId>;
  createAchievementAchievement!: Sequelize.BelongsToCreateAssociationMixin<Achievement>;
  // Student belongsTo BankDetail via bankDetail
  bankDetailBankDetail!: BankDetail;
  getBankDetailBankDetail!: Sequelize.BelongsToGetAssociationMixin<BankDetail>;
  setBankDetailBankDetail!: Sequelize.BelongsToSetAssociationMixin<BankDetail, BankDetailId>;
  createBankDetailBankDetail!: Sequelize.BelongsToCreateAssociationMixin<BankDetail>;
  // Student belongsTo Certification via certification
  certificationCertification!: Certification;
  getCertificationCertification!: Sequelize.BelongsToGetAssociationMixin<Certification>;
  setCertificationCertification!: Sequelize.BelongsToSetAssociationMixin<Certification, CertificationId>;
  createCertificationCertification!: Sequelize.BelongsToCreateAssociationMixin<Certification>;
  // Student belongsTo Class via classId
  class!: Class;
  getClass!: Sequelize.BelongsToGetAssociationMixin<Class>;
  setClass!: Sequelize.BelongsToSetAssociationMixin<Class, ClassId>;
  createClass!: Sequelize.BelongsToCreateAssociationMixin<Class>;
  // Student belongsTo Contact via contactId
  contact!: Contact;
  getContact!: Sequelize.BelongsToGetAssociationMixin<Contact>;
  setContact!: Sequelize.BelongsToSetAssociationMixin<Contact, ContactId>;
  createContact!: Sequelize.BelongsToCreateAssociationMixin<Contact>;
  // Student belongsTo Department via departmentId
  department!: Department;
  getDepartment!: Sequelize.BelongsToGetAssociationMixin<Department>;
  setDepartment!: Sequelize.BelongsToSetAssociationMixin<Department, DepartmentId>;
  createDepartment!: Sequelize.BelongsToCreateAssociationMixin<Department>;
  // Student belongsTo Faculty via mentorId
  mentor!: Faculty;
  getMentor!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setMentor!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createMentor!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;
  // Student belongsTo Section via sectionId
  section!: Section;
  getSection!: Sequelize.BelongsToGetAssociationMixin<Section>;
  setSection!: Sequelize.BelongsToSetAssociationMixin<Section, SectionId>;
  createSection!: Sequelize.BelongsToCreateAssociationMixin<Section>;
  // Student hasMany CourseExamResult via studentId
  courseExamResults!: CourseExamResult[];
  getCourseExamResults!: Sequelize.HasManyGetAssociationsMixin<CourseExamResult>;
  setCourseExamResults!: Sequelize.HasManySetAssociationsMixin<CourseExamResult, CourseExamResultId>;
  addCourseExamResult!: Sequelize.HasManyAddAssociationMixin<CourseExamResult, CourseExamResultId>;
  addCourseExamResults!: Sequelize.HasManyAddAssociationsMixin<CourseExamResult, CourseExamResultId>;
  createCourseExamResult!: Sequelize.HasManyCreateAssociationMixin<CourseExamResult>;
  removeCourseExamResult!: Sequelize.HasManyRemoveAssociationMixin<CourseExamResult, CourseExamResultId>;
  removeCourseExamResults!: Sequelize.HasManyRemoveAssociationsMixin<CourseExamResult, CourseExamResultId>;
  hasCourseExamResult!: Sequelize.HasManyHasAssociationMixin<CourseExamResult, CourseExamResultId>;
  hasCourseExamResults!: Sequelize.HasManyHasAssociationsMixin<CourseExamResult, CourseExamResultId>;
  countCourseExamResults!: Sequelize.HasManyCountAssociationsMixin;
  // Student hasMany ParentContact via studentId
  parentContacts!: ParentContact[];
  getParentContacts!: Sequelize.HasManyGetAssociationsMixin<ParentContact>;
  setParentContacts!: Sequelize.HasManySetAssociationsMixin<ParentContact, ParentContactId>;
  addParentContact!: Sequelize.HasManyAddAssociationMixin<ParentContact, ParentContactId>;
  addParentContacts!: Sequelize.HasManyAddAssociationsMixin<ParentContact, ParentContactId>;
  createParentContact!: Sequelize.HasManyCreateAssociationMixin<ParentContact>;
  removeParentContact!: Sequelize.HasManyRemoveAssociationMixin<ParentContact, ParentContactId>;
  removeParentContacts!: Sequelize.HasManyRemoveAssociationsMixin<ParentContact, ParentContactId>;
  hasParentContact!: Sequelize.HasManyHasAssociationMixin<ParentContact, ParentContactId>;
  hasParentContacts!: Sequelize.HasManyHasAssociationsMixin<ParentContact, ParentContactId>;
  countParentContacts!: Sequelize.HasManyCountAssociationsMixin;
  // Student hasMany StudentAttendence via studentId
  studentAttendences!: StudentAttendence[];
  getStudentAttendences!: Sequelize.HasManyGetAssociationsMixin<StudentAttendence>;
  setStudentAttendences!: Sequelize.HasManySetAssociationsMixin<StudentAttendence, StudentAttendenceId>;
  addStudentAttendence!: Sequelize.HasManyAddAssociationMixin<StudentAttendence, StudentAttendenceId>;
  addStudentAttendences!: Sequelize.HasManyAddAssociationsMixin<StudentAttendence, StudentAttendenceId>;
  createStudentAttendence!: Sequelize.HasManyCreateAssociationMixin<StudentAttendence>;
  removeStudentAttendence!: Sequelize.HasManyRemoveAssociationMixin<StudentAttendence, StudentAttendenceId>;
  removeStudentAttendences!: Sequelize.HasManyRemoveAssociationsMixin<StudentAttendence, StudentAttendenceId>;
  hasStudentAttendence!: Sequelize.HasManyHasAssociationMixin<StudentAttendence, StudentAttendenceId>;
  hasStudentAttendences!: Sequelize.HasManyHasAssociationsMixin<StudentAttendence, StudentAttendenceId>;
  countStudentAttendences!: Sequelize.HasManyCountAssociationsMixin;
  // Student hasMany StudentFee via studentId
  studentFees!: StudentFee[];
  getStudentFees!: Sequelize.HasManyGetAssociationsMixin<StudentFee>;
  setStudentFees!: Sequelize.HasManySetAssociationsMixin<StudentFee, StudentFeeId>;
  addStudentFee!: Sequelize.HasManyAddAssociationMixin<StudentFee, StudentFeeId>;
  addStudentFees!: Sequelize.HasManyAddAssociationsMixin<StudentFee, StudentFeeId>;
  createStudentFee!: Sequelize.HasManyCreateAssociationMixin<StudentFee>;
  removeStudentFee!: Sequelize.HasManyRemoveAssociationMixin<StudentFee, StudentFeeId>;
  removeStudentFees!: Sequelize.HasManyRemoveAssociationsMixin<StudentFee, StudentFeeId>;
  hasStudentFee!: Sequelize.HasManyHasAssociationMixin<StudentFee, StudentFeeId>;
  hasStudentFees!: Sequelize.HasManyHasAssociationsMixin<StudentFee, StudentFeeId>;
  countStudentFees!: Sequelize.HasManyCountAssociationsMixin;
  // Student hasMany StudentPromotion via studentId
  studentPromotions!: StudentPromotion[];
  getStudentPromotions!: Sequelize.HasManyGetAssociationsMixin<StudentPromotion>;
  setStudentPromotions!: Sequelize.HasManySetAssociationsMixin<StudentPromotion, StudentPromotionId>;
  addStudentPromotion!: Sequelize.HasManyAddAssociationMixin<StudentPromotion, StudentPromotionId>;
  addStudentPromotions!: Sequelize.HasManyAddAssociationsMixin<StudentPromotion, StudentPromotionId>;
  createStudentPromotion!: Sequelize.HasManyCreateAssociationMixin<StudentPromotion>;
  removeStudentPromotion!: Sequelize.HasManyRemoveAssociationMixin<StudentPromotion, StudentPromotionId>;
  removeStudentPromotions!: Sequelize.HasManyRemoveAssociationsMixin<StudentPromotion, StudentPromotionId>;
  hasStudentPromotion!: Sequelize.HasManyHasAssociationMixin<StudentPromotion, StudentPromotionId>;
  hasStudentPromotions!: Sequelize.HasManyHasAssociationsMixin<StudentPromotion, StudentPromotionId>;
  countStudentPromotions!: Sequelize.HasManyCountAssociationsMixin;
  // Student belongsTo StudentType via studentTypeId
  studentType!: StudentType;
  getStudentType!: Sequelize.BelongsToGetAssociationMixin<StudentType>;
  setStudentType!: Sequelize.BelongsToSetAssociationMixin<StudentType, StudentTypeId>;
  createStudentType!: Sequelize.BelongsToCreateAssociationMixin<StudentType>;
  // Student belongsTo User via userId
  user!: User;
  getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Student belongsTo UserSocialMedium via socialMediaPlatform
  socialMediaPlatformUserSocialMedium!: UserSocialMedium;
  getSocialMediaPlatformUserSocialMedium!: Sequelize.BelongsToGetAssociationMixin<UserSocialMedium>;
  setSocialMediaPlatformUserSocialMedium!: Sequelize.BelongsToSetAssociationMixin<UserSocialMedium, UserSocialMediumId>;
  createSocialMediaPlatformUserSocialMedium!: Sequelize.BelongsToCreateAssociationMixin<UserSocialMedium>;
  // Student belongsTo WorkPublish via workPublish
  workPublishWorkPublish!: WorkPublish;
  getWorkPublishWorkPublish!: Sequelize.BelongsToGetAssociationMixin<WorkPublish>;
  setWorkPublishWorkPublish!: Sequelize.BelongsToSetAssociationMixin<WorkPublish, WorkPublishId>;
  createWorkPublishWorkPublish!: Sequelize.BelongsToCreateAssociationMixin<WorkPublish>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Student {
    return sequelize.define('Student', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rollNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "roll_number",
      field: 'roll_number'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
      field: 'user_id'
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'department',
        key: 'id'
      },
      field: 'department_id'
    },
    studentTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'student_type',
        key: 'id'
      },
      field: 'student_type_id'
    },
    joinDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'join_date'
    },
    relieveDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'relieve_date'
    },
    contactId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contact',
        key: 'id'
      },
      field: 'contact_id'
    },
    mentorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'faculty',
        key: 'id'
      },
      field: 'mentor_id'
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'class',
        key: 'id'
      },
      field: 'class_id'
    },
    sectionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'section',
        key: 'id'
      },
      field: 'section_id'
    },
    workPublish: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'work_publish',
        key: 'id'
      },
      field: 'work_publish'
    },
    certification: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'certification',
        key: 'id'
      }
    },
    achievement: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'achievement',
        key: 'id'
      }
    },
    bankDetail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bank_detail',
        key: 'id'
      },
      field: 'bank_detail'
    },
    socialMediaPlatform: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_social_media',
        key: 'id'
      },
      field: 'social_media_platform'
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
    tableName: 'student',
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
        name: "roll_number",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "roll_number" },
        ]
      },
      {
        name: "achievement",
        using: "BTREE",
        fields: [
          { name: "achievement" },
        ]
      },
      {
        name: "fk_student_user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_student_department_id",
        using: "BTREE",
        fields: [
          { name: "department_id" },
        ]
      },
      {
        name: "fk_student_student_type_id",
        using: "BTREE",
        fields: [
          { name: "student_type_id" },
        ]
      },
      {
        name: "fk_student_contact_id",
        using: "BTREE",
        fields: [
          { name: "contact_id" },
        ]
      },
      {
        name: "fk_student_mentor_id",
        using: "BTREE",
        fields: [
          { name: "mentor_id" },
        ]
      },
      {
        name: "fk_student_class_id",
        using: "BTREE",
        fields: [
          { name: "class_id" },
        ]
      },
      {
        name: "fk_student_section_id",
        using: "BTREE",
        fields: [
          { name: "section_id" },
        ]
      },
      {
        name: "fk_student_work_publish",
        using: "BTREE",
        fields: [
          { name: "work_publish" },
        ]
      },
      {
        name: "fk_student_certification",
        using: "BTREE",
        fields: [
          { name: "certification" },
        ]
      },
      {
        name: "fk_student_bank_detail",
        using: "BTREE",
        fields: [
          { name: "bank_detail" },
        ]
      },
      {
        name: "fk_student_social_media_platform",
        using: "BTREE",
        fields: [
          { name: "social_media_platform" },
        ]
      },
    ]
  }) as typeof Student;
  }
}
