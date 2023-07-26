import type { Sequelize } from "sequelize";
import { Achievement as _Achievement } from "./achievement";
import type { AchievementAttributes, AchievementCreationAttributes } from "./achievement";
import { Attachment as _Attachment } from "./attachment";
import type { AttachmentAttributes, AttachmentCreationAttributes } from "./attachment";
import { BankDetail as _BankDetail } from "./bank_detail";
import type { BankDetailAttributes, BankDetailCreationAttributes } from "./bank_detail";
import { Certification as _Certification } from "./certification";
import type { CertificationAttributes, CertificationCreationAttributes } from "./certification";
import { Class as _Class } from "./class";
import type { ClassAttributes, ClassCreationAttributes } from "./class";
import { Command as _Command } from "./command";
import type { CommandAttributes, CommandCreationAttributes } from "./command";
import { Contact as _Contact } from "./contact";
import type { ContactAttributes, ContactCreationAttributes } from "./contact";
import { Course as _Course } from "./course";
import type { CourseAttributes, CourseCreationAttributes } from "./course";
import { CourseExam as _CourseExam } from "./course_exam";
import type { CourseExamAttributes, CourseExamCreationAttributes } from "./course_exam";
import { CourseExamResult as _CourseExamResult } from "./course_exam_result";
import type { CourseExamResultAttributes, CourseExamResultCreationAttributes } from "./course_exam_result";
import { Department as _Department } from "./department";
import type { DepartmentAttributes, DepartmentCreationAttributes } from "./department";
import { Designation as _Designation } from "./designation";
import type { DesignationAttributes, DesignationCreationAttributes } from "./designation";
import { EducationQualification as _EducationQualification } from "./education_qualification";
import type { EducationQualificationAttributes, EducationQualificationCreationAttributes } from "./education_qualification";
import { Exam as _Exam } from "./exam";
import type { ExamAttributes, ExamCreationAttributes } from "./exam";
import { ExamName as _ExamName } from "./exam_name";
import type { ExamNameAttributes, ExamNameCreationAttributes } from "./exam_name";
import { Faculty as _Faculty } from "./faculty";
import type { FacultyAttributes, FacultyCreationAttributes } from "./faculty";
import { FacultyAttendence as _FacultyAttendence } from "./faculty_attendence";
import type { FacultyAttendenceAttributes, FacultyAttendenceCreationAttributes } from "./faculty_attendence";
import { FacultyPromotion as _FacultyPromotion } from "./faculty_promotion";
import type { FacultyPromotionAttributes, FacultyPromotionCreationAttributes } from "./faculty_promotion";
import { FacultySalary as _FacultySalary } from "./faculty_salary";
import type { FacultySalaryAttributes, FacultySalaryCreationAttributes } from "./faculty_salary";
import { Organization as _Organization } from "./organization";
import type { OrganizationAttributes, OrganizationCreationAttributes } from "./organization";
import { ParentContact as _ParentContact } from "./parent_contact";
import type { ParentContactAttributes, ParentContactCreationAttributes } from "./parent_contact";
import { Period as _Period } from "./period";
import type { PeriodAttributes, PeriodCreationAttributes } from "./period";
import { Role as _Role } from "./role";
import type { RoleAttributes, RoleCreationAttributes } from "./role";
import { RoleCommand as _RoleCommand } from "./role_command";
import type { RoleCommandAttributes, RoleCommandCreationAttributes } from "./role_command";
import { SalaryGrade as _SalaryGrade } from "./salary_grade";
import type { SalaryGradeAttributes, SalaryGradeCreationAttributes } from "./salary_grade";
import { SalaryHike as _SalaryHike } from "./salary_hike";
import type { SalaryHikeAttributes, SalaryHikeCreationAttributes } from "./salary_hike";
import { Section as _Section } from "./section";
import type { SectionAttributes, SectionCreationAttributes } from "./section";
import { SequelizeMetum as _SequelizeMetum } from "./sequelize_metum";
import type { SequelizeMetumAttributes, SequelizeMetumCreationAttributes } from "./sequelize_metum";
import { Session as _Session } from "./session";
import type { SessionAttributes, SessionCreationAttributes } from "./session";
import { SocialMediaPlatform as _SocialMediaPlatform } from "./social_media_platform";
import type { SocialMediaPlatformAttributes, SocialMediaPlatformCreationAttributes } from "./social_media_platform";
import { Student as _Student } from "./student";
import type { StudentAttributes, StudentCreationAttributes } from "./student";
import { StudentAttendence as _StudentAttendence } from "./student_attendence";
import type { StudentAttendenceAttributes, StudentAttendenceCreationAttributes } from "./student_attendence";
import { StudentFee as _StudentFee } from "./student_fee";
import type { StudentFeeAttributes, StudentFeeCreationAttributes } from "./student_fee";
import { StudentPromotion as _StudentPromotion } from "./student_promotion";
import type { StudentPromotionAttributes, StudentPromotionCreationAttributes } from "./student_promotion";
import { Timetable as _Timetable } from "./timetable";
import type { TimetableAttributes, TimetableCreationAttributes } from "./timetable";
import { User as _User } from "./user";
import type { UserAttributes, UserCreationAttributes } from "./user";
import { UserRole as _UserRole } from "./user_role";
import type { UserRoleAttributes, UserRoleCreationAttributes } from "./user_role";
import { UserSocialMedium as _UserSocialMedium } from "./user_social_medium";
import type { UserSocialMediumAttributes, UserSocialMediumCreationAttributes } from "./user_social_medium";
import { WorkExperience as _WorkExperience } from "./work_experience";
import type { WorkExperienceAttributes, WorkExperienceCreationAttributes } from "./work_experience";
import { WorkPublish as _WorkPublish } from "./work_publish";
import type { WorkPublishAttributes, WorkPublishCreationAttributes } from "./work_publish";

export {
  _Achievement as Achievement,
  _Attachment as Attachment,
  _BankDetail as BankDetail,
  _Certification as Certification,
  _Class as Class,
  _Command as Command,
  _Contact as Contact,
  _Course as Course,
  _CourseExam as CourseExam,
  _CourseExamResult as CourseExamResult,
  _Department as Department,
  _Designation as Designation,
  _EducationQualification as EducationQualification,
  _Exam as Exam,
  _ExamName as ExamName,
  _Faculty as Faculty,
  _FacultyAttendence as FacultyAttendence,
  _FacultyPromotion as FacultyPromotion,
  _FacultySalary as FacultySalary,
  _Organization as Organization,
  _ParentContact as ParentContact,
  _Period as Period,
  _Role as Role,
  _RoleCommand as RoleCommand,
  _SalaryGrade as SalaryGrade,
  _SalaryHike as SalaryHike,
  _Section as Section,
  _SequelizeMetum as SequelizeMetum,
  _Session as Session,
  _SocialMediaPlatform as SocialMediaPlatform,
  _Student as Student,
  _StudentAttendence as StudentAttendence,
  _StudentFee as StudentFee,
  _StudentPromotion as StudentPromotion,
  _Timetable as Timetable,
  _User as User,
  _UserRole as UserRole,
  _UserSocialMedium as UserSocialMedium,
  _WorkExperience as WorkExperience,
  _WorkPublish as WorkPublish,
};

export type {
  AchievementAttributes,
  AchievementCreationAttributes,
  AttachmentAttributes,
  AttachmentCreationAttributes,
  BankDetailAttributes,
  BankDetailCreationAttributes,
  CertificationAttributes,
  CertificationCreationAttributes,
  ClassAttributes,
  ClassCreationAttributes,
  CommandAttributes,
  CommandCreationAttributes,
  ContactAttributes,
  ContactCreationAttributes,
  CourseAttributes,
  CourseCreationAttributes,
  CourseExamAttributes,
  CourseExamCreationAttributes,
  CourseExamResultAttributes,
  CourseExamResultCreationAttributes,
  DepartmentAttributes,
  DepartmentCreationAttributes,
  DesignationAttributes,
  DesignationCreationAttributes,
  EducationQualificationAttributes,
  EducationQualificationCreationAttributes,
  ExamAttributes,
  ExamCreationAttributes,
  ExamNameAttributes,
  ExamNameCreationAttributes,
  FacultyAttributes,
  FacultyCreationAttributes,
  FacultyAttendenceAttributes,
  FacultyAttendenceCreationAttributes,
  FacultyPromotionAttributes,
  FacultyPromotionCreationAttributes,
  FacultySalaryAttributes,
  FacultySalaryCreationAttributes,
  OrganizationAttributes,
  OrganizationCreationAttributes,
  ParentContactAttributes,
  ParentContactCreationAttributes,
  PeriodAttributes,
  PeriodCreationAttributes,
  RoleAttributes,
  RoleCreationAttributes,
  RoleCommandAttributes,
  RoleCommandCreationAttributes,
  SalaryGradeAttributes,
  SalaryGradeCreationAttributes,
  SalaryHikeAttributes,
  SalaryHikeCreationAttributes,
  SectionAttributes,
  SectionCreationAttributes,
  SequelizeMetumAttributes,
  SequelizeMetumCreationAttributes,
  SessionAttributes,
  SessionCreationAttributes,
  SocialMediaPlatformAttributes,
  SocialMediaPlatformCreationAttributes,
  StudentAttributes,
  StudentCreationAttributes,
  StudentAttendenceAttributes,
  StudentAttendenceCreationAttributes,
  StudentFeeAttributes,
  StudentFeeCreationAttributes,
  StudentPromotionAttributes,
  StudentPromotionCreationAttributes,
  TimetableAttributes,
  TimetableCreationAttributes,
  UserAttributes,
  UserCreationAttributes,
  UserRoleAttributes,
  UserRoleCreationAttributes,
  UserSocialMediumAttributes,
  UserSocialMediumCreationAttributes,
  WorkExperienceAttributes,
  WorkExperienceCreationAttributes,
  WorkPublishAttributes,
  WorkPublishCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Achievement = _Achievement.initModel(sequelize);
  const Attachment = _Attachment.initModel(sequelize);
  const BankDetail = _BankDetail.initModel(sequelize);
  const Certification = _Certification.initModel(sequelize);
  const Class = _Class.initModel(sequelize);
  const Command = _Command.initModel(sequelize);
  const Contact = _Contact.initModel(sequelize);
  const Course = _Course.initModel(sequelize);
  const CourseExam = _CourseExam.initModel(sequelize);
  const CourseExamResult = _CourseExamResult.initModel(sequelize);
  const Department = _Department.initModel(sequelize);
  const Designation = _Designation.initModel(sequelize);
  const EducationQualification = _EducationQualification.initModel(sequelize);
  const Exam = _Exam.initModel(sequelize);
  const ExamName = _ExamName.initModel(sequelize);
  const Faculty = _Faculty.initModel(sequelize);
  const FacultyAttendence = _FacultyAttendence.initModel(sequelize);
  const FacultyPromotion = _FacultyPromotion.initModel(sequelize);
  const FacultySalary = _FacultySalary.initModel(sequelize);
  const Organization = _Organization.initModel(sequelize);
  const ParentContact = _ParentContact.initModel(sequelize);
  const Period = _Period.initModel(sequelize);
  const Role = _Role.initModel(sequelize);
  const RoleCommand = _RoleCommand.initModel(sequelize);
  const SalaryGrade = _SalaryGrade.initModel(sequelize);
  const SalaryHike = _SalaryHike.initModel(sequelize);
  const Section = _Section.initModel(sequelize);
  const SequelizeMetum = _SequelizeMetum.initModel(sequelize);
  const Session = _Session.initModel(sequelize);
  const SocialMediaPlatform = _SocialMediaPlatform.initModel(sequelize);
  const Student = _Student.initModel(sequelize);
  const StudentAttendence = _StudentAttendence.initModel(sequelize);
  const StudentFee = _StudentFee.initModel(sequelize);
  const StudentPromotion = _StudentPromotion.initModel(sequelize);
  const Timetable = _Timetable.initModel(sequelize);
  const User = _User.initModel(sequelize);
  const UserRole = _UserRole.initModel(sequelize);
  const UserSocialMedium = _UserSocialMedium.initModel(sequelize);
  const WorkExperience = _WorkExperience.initModel(sequelize);
  const WorkPublish = _WorkPublish.initModel(sequelize);

  Faculty.belongsTo(Achievement, { as: "achievementAchievement", foreignKey: "achievement"});
  Achievement.hasMany(Faculty, { as: "faculties", foreignKey: "achievement"});
  Student.belongsTo(Achievement, { as: "achievementAchievement", foreignKey: "achievement"});
  Achievement.hasMany(Student, { as: "students", foreignKey: "achievement"});
  Achievement.belongsTo(Attachment, { as: "attachment", foreignKey: "attachmentId"});
  Attachment.hasMany(Achievement, { as: "achievements", foreignKey: "attachmentId"});
  Certification.belongsTo(Attachment, { as: "attachment", foreignKey: "attachmentId"});
  Attachment.hasMany(Certification, { as: "certifications", foreignKey: "attachmentId"});
  WorkPublish.belongsTo(Attachment, { as: "attachment", foreignKey: "attachmentId"});
  Attachment.hasMany(WorkPublish, { as: "workPublishes", foreignKey: "attachmentId"});
  Faculty.belongsTo(BankDetail, { as: "bankDetailBankDetail", foreignKey: "bankDetail"});
  BankDetail.hasMany(Faculty, { as: "faculties", foreignKey: "bankDetail"});
  Student.belongsTo(BankDetail, { as: "bankDetailBankDetail", foreignKey: "bankDetail"});
  BankDetail.hasMany(Student, { as: "students", foreignKey: "bankDetail"});
  Faculty.belongsTo(Certification, { as: "certificationCertification", foreignKey: "certification"});
  Certification.hasMany(Faculty, { as: "faculties", foreignKey: "certification"});
  Student.belongsTo(Certification, { as: "certificationCertification", foreignKey: "certification"});
  Certification.hasMany(Student, { as: "students", foreignKey: "certification"});
  Exam.belongsTo(Class, { as: "class", foreignKey: "classId"});
  Class.hasMany(Exam, { as: "exams", foreignKey: "classId"});
  Faculty.belongsTo(Class, { as: "inchargeOfClassClass", foreignKey: "inchargeOfClass"});
  Class.hasMany(Faculty, { as: "faculties", foreignKey: "inchargeOfClass"});
  Section.belongsTo(Class, { as: "class", foreignKey: "classId"});
  Class.hasMany(Section, { as: "sections", foreignKey: "classId"});
  Session.belongsTo(Class, { as: "class", foreignKey: "classId"});
  Class.hasMany(Session, { as: "sessions", foreignKey: "classId"});
  Student.belongsTo(Class, { as: "class", foreignKey: "classId"});
  Class.hasMany(Student, { as: "students", foreignKey: "classId"});
  StudentPromotion.belongsTo(Class, { as: "promotedFromClass", foreignKey: "promotedFrom"});
  Class.hasMany(StudentPromotion, { as: "studentPromotions", foreignKey: "promotedFrom"});
  StudentPromotion.belongsTo(Class, { as: "promotedToClass", foreignKey: "promotedTo"});
  Class.hasMany(StudentPromotion, { as: "promotedToStudentPromotions", foreignKey: "promotedTo"});
  Timetable.belongsTo(Class, { as: "class", foreignKey: "classId"});
  Class.hasMany(Timetable, { as: "timetables", foreignKey: "classId"});
  RoleCommand.belongsTo(Command, { as: "command", foreignKey: "commandId"});
  Command.hasMany(RoleCommand, { as: "roleCommands", foreignKey: "commandId"});
  Faculty.belongsTo(Contact, { as: "contact", foreignKey: "contactId"});
  Contact.hasMany(Faculty, { as: "faculties", foreignKey: "contactId"});
  Student.belongsTo(Contact, { as: "contact", foreignKey: "contactId"});
  Contact.hasMany(Student, { as: "students", foreignKey: "contactId"});
  CourseExam.belongsTo(Course, { as: "course", foreignKey: "courseId"});
  Course.hasMany(CourseExam, { as: "courseExams", foreignKey: "courseId"});
  Faculty.belongsTo(Course, { as: "course", foreignKey: "courseId"});
  Course.hasMany(Faculty, { as: "faculties", foreignKey: "courseId"});
  Session.belongsTo(Course, { as: "course", foreignKey: "courseId"});
  Course.hasMany(Session, { as: "sessions", foreignKey: "courseId"});
  Timetable.belongsTo(Course, { as: "course", foreignKey: "courseId"});
  Course.hasMany(Timetable, { as: "timetables", foreignKey: "courseId"});
  CourseExamResult.belongsTo(CourseExam, { as: "courseExam", foreignKey: "courseExamId"});
  CourseExam.hasMany(CourseExamResult, { as: "courseExamResults", foreignKey: "courseExamId"});
  Course.belongsTo(Department, { as: "department", foreignKey: "departmentId"});
  Department.hasMany(Course, { as: "courses", foreignKey: "departmentId"});
  Faculty.belongsTo(Department, { as: "department", foreignKey: "departmentId"});
  Department.hasMany(Faculty, { as: "faculties", foreignKey: "departmentId"});
  Student.belongsTo(Department, { as: "department", foreignKey: "departmentId"});
  Department.hasMany(Student, { as: "students", foreignKey: "departmentId"});
  Faculty.belongsTo(Designation, { as: "designation", foreignKey: "designationId"});
  Designation.hasMany(Faculty, { as: "faculties", foreignKey: "designationId"});
  FacultyPromotion.belongsTo(Designation, { as: "oldDesignation", foreignKey: "oldDesignationId"});
  Designation.hasMany(FacultyPromotion, { as: "facultyPromotions", foreignKey: "oldDesignationId"});
  FacultyPromotion.belongsTo(Designation, { as: "newDesignation", foreignKey: "newDesignationId"});
  Designation.hasMany(FacultyPromotion, { as: "newDesignationFacultyPromotions", foreignKey: "newDesignationId"});
  CourseExam.belongsTo(Exam, { as: "exam", foreignKey: "examId"});
  Exam.hasMany(CourseExam, { as: "courseExams", foreignKey: "examId"});
  Exam.belongsTo(ExamName, { as: "examName", foreignKey: "examNameId"});
  ExamName.hasMany(Exam, { as: "exams", foreignKey: "examNameId"});
  CourseExamResult.belongsTo(Faculty, { as: "evaluatedByFaculty", foreignKey: "evaluatedBy"});
  Faculty.hasMany(CourseExamResult, { as: "courseExamResults", foreignKey: "evaluatedBy"});
  Faculty.belongsTo(Faculty, { as: "reportingToFaculty", foreignKey: "reportingTo"});
  Faculty.hasMany(Faculty, { as: "faculties", foreignKey: "reportingTo"});
  FacultyAttendence.belongsTo(Faculty, { as: "faculty", foreignKey: "facultyId"});
  Faculty.hasMany(FacultyAttendence, { as: "facultyAttendences", foreignKey: "facultyId"});
  FacultyPromotion.belongsTo(Faculty, { as: "faculty", foreignKey: "facultyId"});
  Faculty.hasMany(FacultyPromotion, { as: "facultyPromotions", foreignKey: "facultyId"});
  FacultySalary.belongsTo(Faculty, { as: "faculty", foreignKey: "facultyId"});
  Faculty.hasMany(FacultySalary, { as: "facultySalaries", foreignKey: "facultyId"});
  SalaryHike.belongsTo(Faculty, { as: "faculty", foreignKey: "facultyId"});
  Faculty.hasMany(SalaryHike, { as: "salaryHikes", foreignKey: "facultyId"});
  Session.belongsTo(Faculty, { as: "faculty", foreignKey: "facultyId"});
  Faculty.hasMany(Session, { as: "sessions", foreignKey: "facultyId"});
  Student.belongsTo(Faculty, { as: "mentor", foreignKey: "mentorId"});
  Faculty.hasMany(Student, { as: "students", foreignKey: "mentorId"});
  Timetable.belongsTo(Faculty, { as: "faculty", foreignKey: "facultyId"});
  Faculty.hasMany(Timetable, { as: "timetables", foreignKey: "facultyId"});
  User.belongsTo(Organization, { as: "organization", foreignKey: "organizationId"});
  Organization.hasMany(User, { as: "users", foreignKey: "organizationId"});
  Session.belongsTo(Period, { as: "period", foreignKey: "periodId"});
  Period.hasMany(Session, { as: "sessions", foreignKey: "periodId"});
  Timetable.belongsTo(Period, { as: "period", foreignKey: "periodId"});
  Period.hasMany(Timetable, { as: "timetables", foreignKey: "periodId"});
  RoleCommand.belongsTo(Role, { as: "role", foreignKey: "roleId"});
  Role.hasMany(RoleCommand, { as: "roleCommands", foreignKey: "roleId"});
  UserRole.belongsTo(Role, { as: "role", foreignKey: "roleId"});
  Role.hasMany(UserRole, { as: "userRoles", foreignKey: "roleId"});
  FacultySalary.belongsTo(SalaryGrade, { as: "gradeLevel", foreignKey: "gradeLevelId"});
  SalaryGrade.hasMany(FacultySalary, { as: "facultySalaries", foreignKey: "gradeLevelId"});
  Faculty.belongsTo(Section, { as: "inchargeOfClassSectionSection", foreignKey: "inchargeOfClassSection"});
  Section.hasMany(Faculty, { as: "faculties", foreignKey: "inchargeOfClassSection"});
  Student.belongsTo(Section, { as: "section", foreignKey: "sectionId"});
  Section.hasMany(Student, { as: "students", foreignKey: "sectionId"});
  StudentAttendence.belongsTo(Session, { as: "session", foreignKey: "sessionId"});
  Session.hasMany(StudentAttendence, { as: "studentAttendences", foreignKey: "sessionId"});
  UserSocialMedium.belongsTo(SocialMediaPlatform, { as: "socialMediaPlatform", foreignKey: "socialMediaPlatformId"});
  SocialMediaPlatform.hasMany(UserSocialMedium, { as: "userSocialMedia", foreignKey: "socialMediaPlatformId"});
  CourseExamResult.belongsTo(Student, { as: "student", foreignKey: "studentId"});
  Student.hasMany(CourseExamResult, { as: "courseExamResults", foreignKey: "studentId"});
  ParentContact.belongsTo(Student, { as: "student", foreignKey: "studentId"});
  Student.hasMany(ParentContact, { as: "parentContacts", foreignKey: "studentId"});
  StudentAttendence.belongsTo(Student, { as: "student", foreignKey: "studentId"});
  Student.hasMany(StudentAttendence, { as: "studentAttendences", foreignKey: "studentId"});
  StudentFee.belongsTo(Student, { as: "student", foreignKey: "studentId"});
  Student.hasMany(StudentFee, { as: "studentFees", foreignKey: "studentId"});
  StudentPromotion.belongsTo(Student, { as: "student", foreignKey: "studentId"});
  Student.hasMany(StudentPromotion, { as: "studentPromotions", foreignKey: "studentId"});
  Faculty.belongsTo(User, { as: "user", foreignKey: "userId"});
  User.hasMany(Faculty, { as: "faculties", foreignKey: "userId"});
  Student.belongsTo(User, { as: "user", foreignKey: "userId"});
  User.hasMany(Student, { as: "students", foreignKey: "userId"});
  UserRole.belongsTo(User, { as: "user", foreignKey: "userId"});
  User.hasMany(UserRole, { as: "userRoles", foreignKey: "userId"});
  Faculty.belongsTo(UserSocialMedium, { as: "socialMediaPlatformUserSocialMedium", foreignKey: "socialMediaPlatform"});
  UserSocialMedium.hasMany(Faculty, { as: "faculties", foreignKey: "socialMediaPlatform"});
  Student.belongsTo(UserSocialMedium, { as: "socialMediaPlatformUserSocialMedium", foreignKey: "socialMediaPlatform"});
  UserSocialMedium.hasMany(Student, { as: "students", foreignKey: "socialMediaPlatform"});
  Faculty.belongsTo(WorkExperience, { as: "workExperienceWorkExperience", foreignKey: "workExperience"});
  WorkExperience.hasMany(Faculty, { as: "faculties", foreignKey: "workExperience"});
  Faculty.belongsTo(WorkPublish, { as: "workPublishWorkPublish", foreignKey: "workPublish"});
  WorkPublish.hasMany(Faculty, { as: "faculties", foreignKey: "workPublish"});
  Student.belongsTo(WorkPublish, { as: "workPublishWorkPublish", foreignKey: "workPublish"});
  WorkPublish.hasMany(Student, { as: "students", foreignKey: "workPublish"});

  return {
    Achievement: Achievement,
    Attachment: Attachment,
    BankDetail: BankDetail,
    Certification: Certification,
    Class: Class,
    Command: Command,
    Contact: Contact,
    Course: Course,
    CourseExam: CourseExam,
    CourseExamResult: CourseExamResult,
    Department: Department,
    Designation: Designation,
    EducationQualification: EducationQualification,
    Exam: Exam,
    ExamName: ExamName,
    Faculty: Faculty,
    FacultyAttendence: FacultyAttendence,
    FacultyPromotion: FacultyPromotion,
    FacultySalary: FacultySalary,
    Organization: Organization,
    ParentContact: ParentContact,
    Period: Period,
    Role: Role,
    RoleCommand: RoleCommand,
    SalaryGrade: SalaryGrade,
    SalaryHike: SalaryHike,
    Section: Section,
    SequelizeMetum: SequelizeMetum,
    Session: Session,
    SocialMediaPlatform: SocialMediaPlatform,
    Student: Student,
    StudentAttendence: StudentAttendence,
    StudentFee: StudentFee,
    StudentPromotion: StudentPromotion,
    Timetable: Timetable,
    User: User,
    UserRole: UserRole,
    UserSocialMedium: UserSocialMedium,
    WorkExperience: WorkExperience,
    WorkPublish: WorkPublish,
  };
}
