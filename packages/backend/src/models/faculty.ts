import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Achievement, AchievementId } from './achievement';
import type { BankDetail, BankDetailId } from './bank_detail';
import type { Certification, CertificationId } from './certification';
import type { Class, ClassId } from './class';
import type { Contact, ContactId } from './contact';
import type { Course, CourseId } from './course';
import type { CourseExamResult, CourseExamResultId } from './course_exam_result';
import type { Department, DepartmentId } from './department';
import type { Designation, DesignationId } from './designation';
import type { EmploymentType, EmploymentTypeId } from './employment_type';
import type { FacultyAttendence, FacultyAttendenceId } from './faculty_attendence';
import type { FacultyPromotion, FacultyPromotionId } from './faculty_promotion';
import type { FacultySalary, FacultySalaryId } from './faculty_salary';
import type { FacultyVacation, FacultyVacationId } from './faculty_vacation';
import type { FacultyVacationRequest, FacultyVacationRequestId } from './faculty_vacation_request';
import type { SalaryHike, SalaryHikeId } from './salary_hike';
import type { Section, SectionId } from './section';
import type { Session, SessionId } from './session';
import type { Student, StudentId } from './student';
import type { Timetable, TimetableId } from './timetable';
import type { User, UserId } from './user';
import type { UserSocialMedium, UserSocialMediumId } from './user_social_medium';
import type { WorkExperience, WorkExperienceId } from './work_experience';
import type { WorkPublish, WorkPublishId } from './work_publish';

export interface FacultyAttributes {
  id: number;
  regNumber: string;
  userId: number;
  departmentId: number;
  designationId: number;
  employmentTypeId: number;
  hireDate: string;
  relieveDate?: string;
  yearsOfExperience: number;
  contactId?: number;
  reportingTo?: number;
  courseId?: number;
  workExperience?: number;
  inchargeOfClass?: number;
  inchargeOfClassSection?: number;
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

export type FacultyPk = "id";
export type FacultyId = Faculty[FacultyPk];
export type FacultyOptionalAttributes = "id" | "relieveDate" | "contactId" | "reportingTo" | "courseId" | "workExperience" | "inchargeOfClass" | "inchargeOfClassSection" | "workPublish" | "certification" | "achievement" | "bankDetail" | "socialMediaPlatform" | "createdAt" | "updatedAt" | "deletedAt" | "createdBy" | "updatedBy" | "deletedBy";
export type FacultyCreationAttributes = Optional<FacultyAttributes, FacultyOptionalAttributes>;

export class Faculty extends Model<FacultyAttributes, FacultyCreationAttributes> implements FacultyAttributes {
  id!: number;
  regNumber!: string;
  userId!: number;
  departmentId!: number;
  designationId!: number;
  employmentTypeId!: number;
  hireDate!: string;
  relieveDate?: string;
  yearsOfExperience!: number;
  contactId?: number;
  reportingTo?: number;
  courseId?: number;
  workExperience?: number;
  inchargeOfClass?: number;
  inchargeOfClassSection?: number;
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

  // Faculty belongsTo Achievement via achievement
  achievementAchievement!: Achievement;
  getAchievementAchievement!: Sequelize.BelongsToGetAssociationMixin<Achievement>;
  setAchievementAchievement!: Sequelize.BelongsToSetAssociationMixin<Achievement, AchievementId>;
  createAchievementAchievement!: Sequelize.BelongsToCreateAssociationMixin<Achievement>;
  // Faculty belongsTo BankDetail via bankDetail
  bankDetailBankDetail!: BankDetail;
  getBankDetailBankDetail!: Sequelize.BelongsToGetAssociationMixin<BankDetail>;
  setBankDetailBankDetail!: Sequelize.BelongsToSetAssociationMixin<BankDetail, BankDetailId>;
  createBankDetailBankDetail!: Sequelize.BelongsToCreateAssociationMixin<BankDetail>;
  // Faculty belongsTo Certification via certification
  certificationCertification!: Certification;
  getCertificationCertification!: Sequelize.BelongsToGetAssociationMixin<Certification>;
  setCertificationCertification!: Sequelize.BelongsToSetAssociationMixin<Certification, CertificationId>;
  createCertificationCertification!: Sequelize.BelongsToCreateAssociationMixin<Certification>;
  // Faculty belongsTo Class via inchargeOfClass
  inchargeOfClassClass!: Class;
  getInchargeOfClassClass!: Sequelize.BelongsToGetAssociationMixin<Class>;
  setInchargeOfClassClass!: Sequelize.BelongsToSetAssociationMixin<Class, ClassId>;
  createInchargeOfClassClass!: Sequelize.BelongsToCreateAssociationMixin<Class>;
  // Faculty belongsTo Contact via contactId
  contact!: Contact;
  getContact!: Sequelize.BelongsToGetAssociationMixin<Contact>;
  setContact!: Sequelize.BelongsToSetAssociationMixin<Contact, ContactId>;
  createContact!: Sequelize.BelongsToCreateAssociationMixin<Contact>;
  // Faculty belongsTo Course via courseId
  course!: Course;
  getCourse!: Sequelize.BelongsToGetAssociationMixin<Course>;
  setCourse!: Sequelize.BelongsToSetAssociationMixin<Course, CourseId>;
  createCourse!: Sequelize.BelongsToCreateAssociationMixin<Course>;
  // Faculty belongsTo Department via departmentId
  department!: Department;
  getDepartment!: Sequelize.BelongsToGetAssociationMixin<Department>;
  setDepartment!: Sequelize.BelongsToSetAssociationMixin<Department, DepartmentId>;
  createDepartment!: Sequelize.BelongsToCreateAssociationMixin<Department>;
  // Faculty belongsTo Designation via designationId
  designation!: Designation;
  getDesignation!: Sequelize.BelongsToGetAssociationMixin<Designation>;
  setDesignation!: Sequelize.BelongsToSetAssociationMixin<Designation, DesignationId>;
  createDesignation!: Sequelize.BelongsToCreateAssociationMixin<Designation>;
  // Faculty belongsTo EmploymentType via employmentTypeId
  employmentType!: EmploymentType;
  getEmploymentType!: Sequelize.BelongsToGetAssociationMixin<EmploymentType>;
  setEmploymentType!: Sequelize.BelongsToSetAssociationMixin<EmploymentType, EmploymentTypeId>;
  createEmploymentType!: Sequelize.BelongsToCreateAssociationMixin<EmploymentType>;
  // Faculty hasMany CourseExamResult via evaluatedBy
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
  // Faculty belongsTo Faculty via reportingTo
  reportingToFaculty!: Faculty;
  getReportingToFaculty!: Sequelize.BelongsToGetAssociationMixin<Faculty>;
  setReportingToFaculty!: Sequelize.BelongsToSetAssociationMixin<Faculty, FacultyId>;
  createReportingToFaculty!: Sequelize.BelongsToCreateAssociationMixin<Faculty>;
  // Faculty hasMany FacultyAttendence via facultyId
  facultyAttendences!: FacultyAttendence[];
  getFacultyAttendences!: Sequelize.HasManyGetAssociationsMixin<FacultyAttendence>;
  setFacultyAttendences!: Sequelize.HasManySetAssociationsMixin<FacultyAttendence, FacultyAttendenceId>;
  addFacultyAttendence!: Sequelize.HasManyAddAssociationMixin<FacultyAttendence, FacultyAttendenceId>;
  addFacultyAttendences!: Sequelize.HasManyAddAssociationsMixin<FacultyAttendence, FacultyAttendenceId>;
  createFacultyAttendence!: Sequelize.HasManyCreateAssociationMixin<FacultyAttendence>;
  removeFacultyAttendence!: Sequelize.HasManyRemoveAssociationMixin<FacultyAttendence, FacultyAttendenceId>;
  removeFacultyAttendences!: Sequelize.HasManyRemoveAssociationsMixin<FacultyAttendence, FacultyAttendenceId>;
  hasFacultyAttendence!: Sequelize.HasManyHasAssociationMixin<FacultyAttendence, FacultyAttendenceId>;
  hasFacultyAttendences!: Sequelize.HasManyHasAssociationsMixin<FacultyAttendence, FacultyAttendenceId>;
  countFacultyAttendences!: Sequelize.HasManyCountAssociationsMixin;
  // Faculty hasMany FacultyPromotion via facultyId
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
  // Faculty hasMany FacultySalary via facultyId
  facultySalaries!: FacultySalary[];
  getFacultySalaries!: Sequelize.HasManyGetAssociationsMixin<FacultySalary>;
  setFacultySalaries!: Sequelize.HasManySetAssociationsMixin<FacultySalary, FacultySalaryId>;
  addFacultySalary!: Sequelize.HasManyAddAssociationMixin<FacultySalary, FacultySalaryId>;
  addFacultySalaries!: Sequelize.HasManyAddAssociationsMixin<FacultySalary, FacultySalaryId>;
  createFacultySalary!: Sequelize.HasManyCreateAssociationMixin<FacultySalary>;
  removeFacultySalary!: Sequelize.HasManyRemoveAssociationMixin<FacultySalary, FacultySalaryId>;
  removeFacultySalaries!: Sequelize.HasManyRemoveAssociationsMixin<FacultySalary, FacultySalaryId>;
  hasFacultySalary!: Sequelize.HasManyHasAssociationMixin<FacultySalary, FacultySalaryId>;
  hasFacultySalaries!: Sequelize.HasManyHasAssociationsMixin<FacultySalary, FacultySalaryId>;
  countFacultySalaries!: Sequelize.HasManyCountAssociationsMixin;
  // Faculty hasMany FacultyVacation via facultyId
  facultyVacations!: FacultyVacation[];
  getFacultyVacations!: Sequelize.HasManyGetAssociationsMixin<FacultyVacation>;
  setFacultyVacations!: Sequelize.HasManySetAssociationsMixin<FacultyVacation, FacultyVacationId>;
  addFacultyVacation!: Sequelize.HasManyAddAssociationMixin<FacultyVacation, FacultyVacationId>;
  addFacultyVacations!: Sequelize.HasManyAddAssociationsMixin<FacultyVacation, FacultyVacationId>;
  createFacultyVacation!: Sequelize.HasManyCreateAssociationMixin<FacultyVacation>;
  removeFacultyVacation!: Sequelize.HasManyRemoveAssociationMixin<FacultyVacation, FacultyVacationId>;
  removeFacultyVacations!: Sequelize.HasManyRemoveAssociationsMixin<FacultyVacation, FacultyVacationId>;
  hasFacultyVacation!: Sequelize.HasManyHasAssociationMixin<FacultyVacation, FacultyVacationId>;
  hasFacultyVacations!: Sequelize.HasManyHasAssociationsMixin<FacultyVacation, FacultyVacationId>;
  countFacultyVacations!: Sequelize.HasManyCountAssociationsMixin;
  // Faculty hasMany FacultyVacationRequest via facultyId
  facultyVacationRequests!: FacultyVacationRequest[];
  getFacultyVacationRequests!: Sequelize.HasManyGetAssociationsMixin<FacultyVacationRequest>;
  setFacultyVacationRequests!: Sequelize.HasManySetAssociationsMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  addFacultyVacationRequest!: Sequelize.HasManyAddAssociationMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  addFacultyVacationRequests!: Sequelize.HasManyAddAssociationsMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  createFacultyVacationRequest!: Sequelize.HasManyCreateAssociationMixin<FacultyVacationRequest>;
  removeFacultyVacationRequest!: Sequelize.HasManyRemoveAssociationMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  removeFacultyVacationRequests!: Sequelize.HasManyRemoveAssociationsMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  hasFacultyVacationRequest!: Sequelize.HasManyHasAssociationMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  hasFacultyVacationRequests!: Sequelize.HasManyHasAssociationsMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  countFacultyVacationRequests!: Sequelize.HasManyCountAssociationsMixin;
  // Faculty hasMany FacultyVacationRequest via approvedBy
  approvedByFacultyVacationRequests!: FacultyVacationRequest[];
  getApprovedByFacultyVacationRequests!: Sequelize.HasManyGetAssociationsMixin<FacultyVacationRequest>;
  setApprovedByFacultyVacationRequests!: Sequelize.HasManySetAssociationsMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  addApprovedByFacultyVacationRequest!: Sequelize.HasManyAddAssociationMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  addApprovedByFacultyVacationRequests!: Sequelize.HasManyAddAssociationsMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  createApprovedByFacultyVacationRequest!: Sequelize.HasManyCreateAssociationMixin<FacultyVacationRequest>;
  removeApprovedByFacultyVacationRequest!: Sequelize.HasManyRemoveAssociationMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  removeApprovedByFacultyVacationRequests!: Sequelize.HasManyRemoveAssociationsMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  hasApprovedByFacultyVacationRequest!: Sequelize.HasManyHasAssociationMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  hasApprovedByFacultyVacationRequests!: Sequelize.HasManyHasAssociationsMixin<FacultyVacationRequest, FacultyVacationRequestId>;
  countApprovedByFacultyVacationRequests!: Sequelize.HasManyCountAssociationsMixin;
  // Faculty hasMany SalaryHike via facultyId
  salaryHikes!: SalaryHike[];
  getSalaryHikes!: Sequelize.HasManyGetAssociationsMixin<SalaryHike>;
  setSalaryHikes!: Sequelize.HasManySetAssociationsMixin<SalaryHike, SalaryHikeId>;
  addSalaryHike!: Sequelize.HasManyAddAssociationMixin<SalaryHike, SalaryHikeId>;
  addSalaryHikes!: Sequelize.HasManyAddAssociationsMixin<SalaryHike, SalaryHikeId>;
  createSalaryHike!: Sequelize.HasManyCreateAssociationMixin<SalaryHike>;
  removeSalaryHike!: Sequelize.HasManyRemoveAssociationMixin<SalaryHike, SalaryHikeId>;
  removeSalaryHikes!: Sequelize.HasManyRemoveAssociationsMixin<SalaryHike, SalaryHikeId>;
  hasSalaryHike!: Sequelize.HasManyHasAssociationMixin<SalaryHike, SalaryHikeId>;
  hasSalaryHikes!: Sequelize.HasManyHasAssociationsMixin<SalaryHike, SalaryHikeId>;
  countSalaryHikes!: Sequelize.HasManyCountAssociationsMixin;
  // Faculty hasMany SalaryHike via reviewerId
  reviewerSalaryHikes!: SalaryHike[];
  getReviewerSalaryHikes!: Sequelize.HasManyGetAssociationsMixin<SalaryHike>;
  setReviewerSalaryHikes!: Sequelize.HasManySetAssociationsMixin<SalaryHike, SalaryHikeId>;
  addReviewerSalaryHike!: Sequelize.HasManyAddAssociationMixin<SalaryHike, SalaryHikeId>;
  addReviewerSalaryHikes!: Sequelize.HasManyAddAssociationsMixin<SalaryHike, SalaryHikeId>;
  createReviewerSalaryHike!: Sequelize.HasManyCreateAssociationMixin<SalaryHike>;
  removeReviewerSalaryHike!: Sequelize.HasManyRemoveAssociationMixin<SalaryHike, SalaryHikeId>;
  removeReviewerSalaryHikes!: Sequelize.HasManyRemoveAssociationsMixin<SalaryHike, SalaryHikeId>;
  hasReviewerSalaryHike!: Sequelize.HasManyHasAssociationMixin<SalaryHike, SalaryHikeId>;
  hasReviewerSalaryHikes!: Sequelize.HasManyHasAssociationsMixin<SalaryHike, SalaryHikeId>;
  countReviewerSalaryHikes!: Sequelize.HasManyCountAssociationsMixin;
  // Faculty hasMany Session via facultyId
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
  // Faculty hasMany Student via mentorId
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
  // Faculty hasMany Timetable via facultyId
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
  // Faculty belongsTo Section via inchargeOfClassSection
  inchargeOfClassSectionSection!: Section;
  getInchargeOfClassSectionSection!: Sequelize.BelongsToGetAssociationMixin<Section>;
  setInchargeOfClassSectionSection!: Sequelize.BelongsToSetAssociationMixin<Section, SectionId>;
  createInchargeOfClassSectionSection!: Sequelize.BelongsToCreateAssociationMixin<Section>;
  // Faculty belongsTo User via userId
  user!: User;
  getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;
  // Faculty belongsTo UserSocialMedium via socialMediaPlatform
  socialMediaPlatformUserSocialMedium!: UserSocialMedium;
  getSocialMediaPlatformUserSocialMedium!: Sequelize.BelongsToGetAssociationMixin<UserSocialMedium>;
  setSocialMediaPlatformUserSocialMedium!: Sequelize.BelongsToSetAssociationMixin<UserSocialMedium, UserSocialMediumId>;
  createSocialMediaPlatformUserSocialMedium!: Sequelize.BelongsToCreateAssociationMixin<UserSocialMedium>;
  // Faculty belongsTo WorkExperience via workExperience
  workExperienceWorkExperience!: WorkExperience;
  getWorkExperienceWorkExperience!: Sequelize.BelongsToGetAssociationMixin<WorkExperience>;
  setWorkExperienceWorkExperience!: Sequelize.BelongsToSetAssociationMixin<WorkExperience, WorkExperienceId>;
  createWorkExperienceWorkExperience!: Sequelize.BelongsToCreateAssociationMixin<WorkExperience>;
  // Faculty belongsTo WorkPublish via workPublish
  workPublishWorkPublish!: WorkPublish;
  getWorkPublishWorkPublish!: Sequelize.BelongsToGetAssociationMixin<WorkPublish>;
  setWorkPublishWorkPublish!: Sequelize.BelongsToSetAssociationMixin<WorkPublish, WorkPublishId>;
  createWorkPublishWorkPublish!: Sequelize.BelongsToCreateAssociationMixin<WorkPublish>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Faculty {
    return sequelize.define('Faculty', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    regNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "reg_number",
      field: 'reg_number'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
      unique: "fk_faculty_user_id",
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
    designationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'designation',
        key: 'id'
      },
      field: 'designation_id'
    },
    employmentTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employment_type',
        key: 'id'
      },
      field: 'employment_type_id'
    },
    hireDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'hire_date'
    },
    relieveDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'relieve_date'
    },
    yearsOfExperience: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'years_of_experience'
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
    reportingTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'faculty',
        key: 'id'
      },
      field: 'reporting_to'
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'course',
        key: 'id'
      },
      field: 'course_id'
    },
    workExperience: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'work_experience',
        key: 'id'
      },
      field: 'work_experience'
    },
    inchargeOfClass: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'class',
        key: 'id'
      },
      field: 'incharge_of_class'
    },
    inchargeOfClassSection: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'section',
        key: 'id'
      },
      field: 'incharge_of_class_section'
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
    tableName: 'faculty',
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
        name: "reg_number",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reg_number" },
        ]
      },
      {
        name: "user_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
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
        name: "fk_faculty_department_id",
        using: "BTREE",
        fields: [
          { name: "department_id" },
        ]
      },
      {
        name: "fk_faculty_designation_id",
        using: "BTREE",
        fields: [
          { name: "designation_id" },
        ]
      },
      {
        name: "fk_faculty_employment_type_id",
        using: "BTREE",
        fields: [
          { name: "employment_type_id" },
        ]
      },
      {
        name: "fk_faculty_contact_id",
        using: "BTREE",
        fields: [
          { name: "contact_id" },
        ]
      },
      {
        name: "fk_faculty_reporting_to",
        using: "BTREE",
        fields: [
          { name: "reporting_to" },
        ]
      },
      {
        name: "fk_faculty_course_id",
        using: "BTREE",
        fields: [
          { name: "course_id" },
        ]
      },
      {
        name: "fk_faculty_work_experience",
        using: "BTREE",
        fields: [
          { name: "work_experience" },
        ]
      },
      {
        name: "fk_faculty_incharge_of_class",
        using: "BTREE",
        fields: [
          { name: "incharge_of_class" },
        ]
      },
      {
        name: "fk_faculty_incharge_of_class_section",
        using: "BTREE",
        fields: [
          { name: "incharge_of_class_section" },
        ]
      },
      {
        name: "fk_faculty_work_publish",
        using: "BTREE",
        fields: [
          { name: "work_publish" },
        ]
      },
      {
        name: "fk_faculty_certification",
        using: "BTREE",
        fields: [
          { name: "certification" },
        ]
      },
      {
        name: "fk_faculty_bank_detail",
        using: "BTREE",
        fields: [
          { name: "bank_detail" },
        ]
      },
      {
        name: "fk_faculty_social_media_platform",
        using: "BTREE",
        fields: [
          { name: "social_media_platform" },
        ]
      },
    ]
  }) as typeof Faculty;
  }
}
