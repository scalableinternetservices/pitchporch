/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchUserContext
// ====================================================

export interface FetchUserContext_self {
  __typename: "User";
  id: number;
  name: string;
  userType: UserType;
}

export interface FetchUserContext {
  self: FetchUserContext_self | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchProjects
// ====================================================

export interface FetchProjects_projects_createdBy {
  __typename: "User";
  name: string;
}

export interface FetchProjects_projects_usersInProject {
  __typename: "User";
  name: string;
}

export interface FetchProjects_projects {
  __typename: "Project";
  id: number;
  title: string;
  createdBy: FetchProjects_projects_createdBy;
  description: string;
  usersInProject: (FetchProjects_projects_usersInProject | null)[];
}

export interface FetchProjects {
  projects: FetchProjects_projects[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchProject
// ====================================================

export interface FetchProject_project_createdBy {
  __typename: "User";
  name: string;
}

export interface FetchProject_project_usersInProject {
  __typename: "User";
  name: string;
}

export interface FetchProject_project {
  __typename: "Project";
  id: number;
  title: string;
  createdBy: FetchProject_project_createdBy;
  description: string;
  usersInProject: (FetchProject_project_usersInProject | null)[];
}

export interface FetchProject {
  project: FetchProject_project | null;
}

export interface FetchProjectVariables {
  projectId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchUsers
// ====================================================

export interface FetchUsers_users_projectsPartOf {
  __typename: "Project";
  title: string;
}

export interface FetchUsers_users {
  __typename: "User";
  id: number;
  name: string;
  email: string;
  projectsPartOf: (FetchUsers_users_projectsPartOf | null)[];
}

export interface FetchUsers {
  users: FetchUsers_users[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchUser
// ====================================================

export interface FetchUser_user_projectsPartOf {
  __typename: "Project";
  title: string;
}

export interface FetchUser_user {
  __typename: "User";
  id: number;
  name: string;
  email: string;
  projectsPartOf: (FetchUser_user_projectsPartOf)[];
}

export interface FetchUser {
  user: FetchUser_user | null;
}

export interface FetchUserVariables {
  userId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddUserToProject
// ====================================================

export interface AddUserToProject_addUserToProject_createdBy {
  __typename: "User";
  name: string;
}

export interface AddUserToProject_addUserToProject_usersInProject {
  __typename: "User";
  name: string;
}

export interface AddUserToProject_addUserToProject {
  __typename: "Project";
  id: number;
  title: string;
  createdBy: AddUserToProject_addUserToProject_createdBy;
  description: string;
  usersInProject: (AddUserToProject_addUserToProject_usersInProject | null)[];
}

export interface AddUserToProject {
  addUserToProject: AddUserToProject_addUserToProject;
}

export interface AddUserToProjectVariables {
  input: AddUserToProjectInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchSurveys
// ====================================================

export interface FetchSurveys_surveys_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface FetchSurveys_surveys_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: FetchSurveys_surveys_currentQuestion_answers[];
}

export interface FetchSurveys_surveys {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: FetchSurveys_surveys_currentQuestion | null;
}

export interface FetchSurveys {
  surveys: FetchSurveys_surveys[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: SurveySubscription
// ====================================================

export interface SurveySubscription_surveyUpdates_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface SurveySubscription_surveyUpdates_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: SurveySubscription_surveyUpdates_currentQuestion_answers[];
}

export interface SurveySubscription_surveyUpdates {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: SurveySubscription_surveyUpdates_currentQuestion | null;
}

export interface SurveySubscription {
  surveyUpdates: SurveySubscription_surveyUpdates | null;
}

export interface SurveySubscriptionVariables {
  surveyId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchSurvey
// ====================================================

export interface FetchSurvey_survey_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface FetchSurvey_survey_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: FetchSurvey_survey_currentQuestion_answers[];
}

export interface FetchSurvey_survey {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: FetchSurvey_survey_currentQuestion | null;
}

export interface FetchSurvey {
  survey: FetchSurvey_survey | null;
}

export interface FetchSurveyVariables {
  surveyId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AnswerSurveyQuestion
// ====================================================

export interface AnswerSurveyQuestion {
  answerSurvey: boolean;
}

export interface AnswerSurveyQuestionVariables {
  input: SurveyInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: NextSurveyQuestion
// ====================================================

export interface NextSurveyQuestion_nextSurveyQuestion_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface NextSurveyQuestion_nextSurveyQuestion_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: NextSurveyQuestion_nextSurveyQuestion_currentQuestion_answers[];
}

export interface NextSurveyQuestion_nextSurveyQuestion {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: NextSurveyQuestion_nextSurveyQuestion_currentQuestion | null;
}

export interface NextSurveyQuestion {
  nextSurveyQuestion: NextSurveyQuestion_nextSurveyQuestion | null;
}

export interface NextSurveyQuestionVariables {
  surveyId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Project
// ====================================================

export interface Project_createdBy {
  __typename: "User";
  name: string;
}

export interface Project_usersInProject {
  __typename: "User";
  name: string;
}

export interface Project {
  __typename: "Project";
  id: number;
  title: string;
  createdBy: Project_createdBy;
  description: string;
  usersInProject: (Project_usersInProject | null)[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: User
// ====================================================

export interface User_projectsPartOf {
  __typename: "Project";
  title: string;
}

export interface User {
  __typename: "User";
  id: number;
  name: string;
  email: string;
  projectsPartOf: (User_projectsPartOf | null)[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Survey
// ====================================================

export interface Survey_currentQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface Survey_currentQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: Survey_currentQuestion_answers[];
}

export interface Survey {
  __typename: "Survey";
  id: number;
  name: string;
  isStarted: boolean;
  isCompleted: boolean;
  currentQuestion: Survey_currentQuestion | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SurveyQuestion
// ====================================================

export interface SurveyQuestion_answers {
  __typename: "SurveyAnswer";
  answer: string;
}

export interface SurveyQuestion {
  __typename: "SurveyQuestion";
  id: number;
  prompt: string;
  choices: string[] | null;
  answers: SurveyQuestion_answers[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserType {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface AddUserToProjectInput {
  projectId: number;
  userId: number;
}

export interface SurveyInput {
  questionId: number;
  answer: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================