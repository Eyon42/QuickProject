/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** Id as string or int */
  Id: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Achievement = {
  __typename?: 'Achievement';
  Description?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<UploadFileEntityResponse>;
  isExternalPOAP?: Maybe<Scalars['Boolean']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AchievementEntity = {
  __typename?: 'AchievementEntity';
  attributes?: Maybe<Achievement>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type AchievementEntityResponse = {
  __typename?: 'AchievementEntityResponse';
  data?: Maybe<AchievementEntity>;
};

export type AchievementEntityResponseCollection = {
  __typename?: 'AchievementEntityResponseCollection';
  data: Array<AchievementEntity>;
  meta: ResponseCollectionMeta;
};

export type AchievementFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AchievementFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  eventId?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isExternalPOAP?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<AchievementFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AchievementFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AchievementInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  icon?: InputMaybe<Scalars['Id']['input']>;
  isExternalPOAP?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AchievementRelationResponseCollection = {
  __typename?: 'AchievementRelationResponseCollection';
  data: Array<AchievementEntity>;
};

export type ApiVideoUploaderApiVideoAsset = {
  __typename?: 'ApiVideoUploaderApiVideoAsset';
  _public: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hls: Scalars['String']['output'];
  iframe: Scalars['String']['output'];
  lesson?: Maybe<LessonEntityResponse>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  mp4: Scalars['String']['output'];
  player: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  videoId: Scalars['String']['output'];
};

export type ApiVideoUploaderApiVideoAssetEntity = {
  __typename?: 'ApiVideoUploaderApiVideoAssetEntity';
  attributes?: Maybe<ApiVideoUploaderApiVideoAsset>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type ApiVideoUploaderApiVideoAssetEntityResponse = {
  __typename?: 'ApiVideoUploaderApiVideoAssetEntityResponse';
  data?: Maybe<ApiVideoUploaderApiVideoAssetEntity>;
};

export type ApiVideoUploaderApiVideoAssetEntityResponseCollection = {
  __typename?: 'ApiVideoUploaderApiVideoAssetEntityResponseCollection';
  data: Array<ApiVideoUploaderApiVideoAssetEntity>;
  meta: ResponseCollectionMeta;
};

export type ApiVideoUploaderApiVideoAssetFiltersInput = {
  _public?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ApiVideoUploaderApiVideoAssetFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  hls?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  iframe?: InputMaybe<StringFilterInput>;
  lesson?: InputMaybe<LessonFiltersInput>;
  metadata?: InputMaybe<JsonFilterInput>;
  mp4?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ApiVideoUploaderApiVideoAssetFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ApiVideoUploaderApiVideoAssetFiltersInput>>>;
  player?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<JsonFilterInput>;
  thumbnail?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  videoId?: InputMaybe<StringFilterInput>;
};

export type ApiVideoUploaderApiVideoAssetInput = {
  _public?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hls?: InputMaybe<Scalars['String']['input']>;
  iframe?: InputMaybe<Scalars['String']['input']>;
  lesson?: InputMaybe<Scalars['Id']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  mp4?: InputMaybe<Scalars['String']['input']>;
  player?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  videoId?: InputMaybe<Scalars['String']['input']>;
};

export type Author = {
  __typename?: 'Author';
  Description?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  courses?: Maybe<CourseRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AuthorCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AuthorEntity = {
  __typename?: 'AuthorEntity';
  attributes?: Maybe<Author>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type AuthorEntityResponse = {
  __typename?: 'AuthorEntityResponse';
  data?: Maybe<AuthorEntity>;
};

export type AuthorEntityResponseCollection = {
  __typename?: 'AuthorEntityResponseCollection';
  data: Array<AuthorEntity>;
  meta: ResponseCollectionMeta;
};

export type AuthorFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  courses?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  instagram?: InputMaybe<StringFilterInput>;
  linkedin?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AuthorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  twitter?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AuthorInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  courses?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['Id']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
};

export type AuthorRelationResponseCollection = {
  __typename?: 'AuthorRelationResponseCollection';
  data: Array<AuthorEntity>;
};

/** User type which was the author of comment - Strapi built-in or generic */
export enum AuthorType {
  Generic = 'GENERIC',
  Strapi = 'STRAPI'
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentAuthor = {
  __typename?: 'CommentAuthor';
  avatar?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Id']['output']>;
  name: Scalars['String']['output'];
};

export type CommentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  approvalStatus?: InputMaybe<StringFilterInput>;
  authorAvatar?: InputMaybe<StringFilterInput>;
  authorEmail?: InputMaybe<StringFilterInput>;
  authorId?: InputMaybe<StringFilterInput>;
  authorName?: InputMaybe<StringFilterInput>;
  authorUser?: InputMaybe<UsersPermissionsUserFiltersInput>;
  blockReason?: InputMaybe<StringFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  blockedThread?: InputMaybe<BooleanFilterInput>;
  content?: InputMaybe<StringFilterInput>;
  filterBy?: InputMaybe<Scalars['String']['input']>;
  filterByValue?: InputMaybe<Scalars['String']['input']>;
  isAdminComment?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<CommentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  related?: InputMaybe<StringFilterInput>;
  removed?: InputMaybe<BooleanFilterInput>;
  reports?: InputMaybe<CommentsCommentReportFiltersInput>;
  threadOf?: InputMaybe<CommentsCommentFiltersInput>;
};

export type CommentNested = {
  __typename?: 'CommentNested';
  approvalStatus?: Maybe<Scalars['String']['output']>;
  author?: Maybe<CommentAuthor>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  blockedThread?: Maybe<Scalars['Boolean']['output']>;
  children?: Maybe<Array<Maybe<CommentNested>>>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Id']['output']>;
  removed?: Maybe<Scalars['Boolean']['output']>;
  tab?: Maybe<Scalars['String']['output']>;
  threadOf?: Maybe<CommentSingle>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CommentSingle = {
  __typename?: 'CommentSingle';
  approvalStatus?: Maybe<Scalars['String']['output']>;
  author?: Maybe<CommentAuthor>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  blockedThread?: Maybe<Scalars['Boolean']['output']>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Id']['output']>;
  removed?: Maybe<Scalars['Boolean']['output']>;
  tab?: Maybe<Scalars['String']['output']>;
  threadOf?: Maybe<CommentSingle>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CommentsComment = {
  __typename?: 'CommentsComment';
  approvalStatus?: Maybe<Scalars['String']['output']>;
  authorAvatar?: Maybe<Scalars['String']['output']>;
  authorEmail?: Maybe<Scalars['String']['output']>;
  authorId?: Maybe<Scalars['String']['output']>;
  authorName?: Maybe<Scalars['String']['output']>;
  authorUser?: Maybe<UsersPermissionsUserEntityResponse>;
  blockReason?: Maybe<Scalars['String']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  blockedThread?: Maybe<Scalars['Boolean']['output']>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  isAdminComment?: Maybe<Scalars['Boolean']['output']>;
  likedBy?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  related?: Maybe<Scalars['String']['output']>;
  removed?: Maybe<Scalars['Boolean']['output']>;
  reports?: Maybe<CommentsCommentReportRelationResponseCollection>;
  tab?: Maybe<Enum_Commentscomment_Tab>;
  threadOf?: Maybe<CommentsCommentEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CommentsCommentLikedByArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CommentsCommentReportsArgs = {
  filters?: InputMaybe<CommentsCommentReportFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CommentsCommentEntity = {
  __typename?: 'CommentsCommentEntity';
  attributes?: Maybe<CommentsComment>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type CommentsCommentEntityResponse = {
  __typename?: 'CommentsCommentEntityResponse';
  data?: Maybe<CommentsCommentEntity>;
};

export type CommentsCommentEntityResponseCollection = {
  __typename?: 'CommentsCommentEntityResponseCollection';
  data: Array<CommentsCommentEntity>;
  meta: ResponseCollectionMeta;
};

export type CommentsCommentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentsCommentFiltersInput>>>;
  approvalStatus?: InputMaybe<StringFilterInput>;
  authorAvatar?: InputMaybe<StringFilterInput>;
  authorEmail?: InputMaybe<StringFilterInput>;
  authorId?: InputMaybe<StringFilterInput>;
  authorName?: InputMaybe<StringFilterInput>;
  authorUser?: InputMaybe<UsersPermissionsUserFiltersInput>;
  blockReason?: InputMaybe<StringFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  blockedThread?: InputMaybe<BooleanFilterInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isAdminComment?: InputMaybe<BooleanFilterInput>;
  likedBy?: InputMaybe<UsersPermissionsUserFiltersInput>;
  not?: InputMaybe<CommentsCommentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentsCommentFiltersInput>>>;
  related?: InputMaybe<StringFilterInput>;
  removed?: InputMaybe<BooleanFilterInput>;
  reports?: InputMaybe<CommentsCommentReportFiltersInput>;
  tab?: InputMaybe<StringFilterInput>;
  threadOf?: InputMaybe<CommentsCommentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommentsCommentInput = {
  approvalStatus?: InputMaybe<Scalars['String']['input']>;
  authorAvatar?: InputMaybe<Scalars['String']['input']>;
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorId?: InputMaybe<Scalars['String']['input']>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorUser?: InputMaybe<Scalars['Id']['input']>;
  blockReason?: InputMaybe<Scalars['String']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  blockedThread?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  isAdminComment?: InputMaybe<Scalars['Boolean']['input']>;
  likedBy?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
  related?: InputMaybe<Scalars['String']['input']>;
  removed?: InputMaybe<Scalars['Boolean']['input']>;
  reports?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
  tab?: InputMaybe<Enum_Commentscomment_Tab>;
  threadOf?: InputMaybe<Scalars['Id']['input']>;
};

export type CommentsCommentRelationResponseCollection = {
  __typename?: 'CommentsCommentRelationResponseCollection';
  data: Array<CommentsCommentEntity>;
};

export type CommentsCommentReport = {
  __typename?: 'CommentsCommentReport';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  reason: Enum_Commentscommentreport_Reason;
  related?: Maybe<CommentsCommentEntityResponse>;
  resolved?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CommentsCommentReportEntity = {
  __typename?: 'CommentsCommentReportEntity';
  attributes?: Maybe<CommentsCommentReport>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type CommentsCommentReportFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentsCommentReportFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CommentsCommentReportFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentsCommentReportFiltersInput>>>;
  reason?: InputMaybe<StringFilterInput>;
  related?: InputMaybe<CommentsCommentFiltersInput>;
  resolved?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommentsCommentReportRelationResponseCollection = {
  __typename?: 'CommentsCommentReportRelationResponseCollection';
  data: Array<CommentsCommentReportEntity>;
};

export type Course = {
  __typename?: 'Course';
  Added?: Maybe<Scalars['Date']['output']>;
  AuthorDescription?: Maybe<Scalars['String']['output']>;
  CoverImage?: Maybe<UploadFileEntityResponse>;
  Icon?: Maybe<UploadFileEntityResponse>;
  Summary?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  authors?: Maybe<AuthorRelationResponseCollection>;
  course_sections?: Maybe<CourseSectionRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  intro_video?: Maybe<ApiVideoUploaderApiVideoAssetEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  required_role?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CourseAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CourseCourse_SectionsArgs = {
  filters?: InputMaybe<CourseSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CourseEntity = {
  __typename?: 'CourseEntity';
  attributes?: Maybe<Course>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type CourseEntityResponse = {
  __typename?: 'CourseEntityResponse';
  data?: Maybe<CourseEntity>;
};

export type CourseEntityResponseCollection = {
  __typename?: 'CourseEntityResponseCollection';
  data: Array<CourseEntity>;
  meta: ResponseCollectionMeta;
};

export type CourseFiltersInput = {
  Added?: InputMaybe<DateFilterInput>;
  AuthorDescription?: InputMaybe<StringFilterInput>;
  Summary?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  authors?: InputMaybe<AuthorFiltersInput>;
  course_sections?: InputMaybe<CourseSectionFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  intro_video?: InputMaybe<ApiVideoUploaderApiVideoAssetFiltersInput>;
  not?: InputMaybe<CourseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  required_role?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CourseInput = {
  Added?: InputMaybe<Scalars['Date']['input']>;
  AuthorDescription?: InputMaybe<Scalars['String']['input']>;
  CoverImage?: InputMaybe<Scalars['Id']['input']>;
  Icon?: InputMaybe<Scalars['Id']['input']>;
  Summary?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  authors?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
  course_sections?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
  intro_video?: InputMaybe<Scalars['Id']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  required_role?: InputMaybe<Scalars['Int']['input']>;
};

export type CourseRelationResponseCollection = {
  __typename?: 'CourseRelationResponseCollection';
  data: Array<CourseEntity>;
};

export type CourseSection = {
  __typename?: 'CourseSection';
  Content?: Maybe<Scalars['String']['output']>;
  Summary?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  course?: Maybe<CourseEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  lessons?: Maybe<LessonRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CourseSectionLessonsArgs = {
  filters?: InputMaybe<LessonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CourseSectionEntity = {
  __typename?: 'CourseSectionEntity';
  attributes?: Maybe<CourseSection>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type CourseSectionEntityResponse = {
  __typename?: 'CourseSectionEntityResponse';
  data?: Maybe<CourseSectionEntity>;
};

export type CourseSectionEntityResponseCollection = {
  __typename?: 'CourseSectionEntityResponseCollection';
  data: Array<CourseSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type CourseSectionFiltersInput = {
  Content?: InputMaybe<StringFilterInput>;
  Summary?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CourseSectionFiltersInput>>>;
  course?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  index?: InputMaybe<IntFilterInput>;
  lessons?: InputMaybe<LessonFiltersInput>;
  not?: InputMaybe<CourseSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CourseSectionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CourseSectionInput = {
  Content?: InputMaybe<Scalars['String']['input']>;
  Summary?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  course?: InputMaybe<Scalars['Id']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  lessons?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CourseSectionRelationResponseCollection = {
  __typename?: 'CourseSectionRelationResponseCollection';
  data: Array<CourseSectionEntity>;
};

export type CreateComment = {
  author?: InputMaybe<CreateCommentAuthor>;
  content: Scalars['String']['input'];
  relation: Scalars['String']['input'];
  tab?: InputMaybe<Scalars['String']['input']>;
  threadOf?: InputMaybe<Scalars['Id']['input']>;
};

export type CreateCommentAuthor = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Id']['input'];
  name: Scalars['String']['input'];
};

export type CreateReport = {
  commentId?: InputMaybe<Scalars['Id']['input']>;
  content: Scalars['String']['input'];
  reason?: InputMaybe<ReportReason>;
  relation: Scalars['String']['input'];
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Commentscommentreport_Reason {
  BadLanguage = 'BAD_LANGUAGE',
  Discrimination = 'DISCRIMINATION',
  Other = 'OTHER'
}

export enum Enum_Commentscomment_Tab {
  Contribution = 'contribution',
  Question = 'question'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Achievement | ApiVideoUploaderApiVideoAsset | Author | CommentsComment | CommentsCommentReport | Course | CourseSection | I18NLocale | Lesson | NewsContent | TurtleOfTheMonth | UploadFile | UploadFolder | UserWalletPassword | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IdentifyCommentAuthor = {
  id: Scalars['Id']['input'];
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Lesson = {
  __typename?: 'Lesson';
  Content?: Maybe<Scalars['String']['output']>;
  Summary?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  Transcript?: Maybe<Scalars['String']['output']>;
  api_video_uploader_api_video_asset?: Maybe<ApiVideoUploaderApiVideoAssetEntityResponse>;
  course_section?: Maybe<CourseSectionEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  lesson_minutes?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LessonEntity = {
  __typename?: 'LessonEntity';
  attributes?: Maybe<Lesson>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type LessonEntityResponse = {
  __typename?: 'LessonEntityResponse';
  data?: Maybe<LessonEntity>;
};

export type LessonEntityResponseCollection = {
  __typename?: 'LessonEntityResponseCollection';
  data: Array<LessonEntity>;
  meta: ResponseCollectionMeta;
};

export type LessonFiltersInput = {
  Content?: InputMaybe<StringFilterInput>;
  Summary?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  Transcript?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<LessonFiltersInput>>>;
  api_video_uploader_api_video_asset?: InputMaybe<ApiVideoUploaderApiVideoAssetFiltersInput>;
  course_section?: InputMaybe<CourseSectionFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  index?: InputMaybe<IntFilterInput>;
  lesson_minutes?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<LessonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LessonFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LessonInput = {
  Content?: InputMaybe<Scalars['String']['input']>;
  Summary?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  Transcript?: InputMaybe<Scalars['String']['input']>;
  api_video_uploader_api_video_asset?: InputMaybe<Scalars['Id']['input']>;
  course_section?: InputMaybe<Scalars['Id']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  lesson_minutes?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LessonRelationResponseCollection = {
  __typename?: 'LessonRelationResponseCollection';
  data: Array<LessonEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAbuseReport: Report;
  createAchievement?: Maybe<AchievementEntityResponse>;
  createApiVideoUploaderApiVideoAsset?: Maybe<ApiVideoUploaderApiVideoAssetEntityResponse>;
  createAuthor?: Maybe<AuthorEntityResponse>;
  createComment: CommentSingle;
  createCommentsComment?: Maybe<CommentsCommentEntityResponse>;
  createCourse?: Maybe<CourseEntityResponse>;
  createCourseSection?: Maybe<CourseSectionEntityResponse>;
  createLesson?: Maybe<LessonEntityResponse>;
  createNewsContent?: Maybe<NewsContentEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  createUserWalletPassword?: Maybe<UserWalletPasswordEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAchievement?: Maybe<AchievementEntityResponse>;
  deleteApiVideoUploaderApiVideoAsset?: Maybe<ApiVideoUploaderApiVideoAssetEntityResponse>;
  deleteAuthor?: Maybe<AuthorEntityResponse>;
  deleteCommentsComment?: Maybe<CommentsCommentEntityResponse>;
  deleteCourse?: Maybe<CourseEntityResponse>;
  deleteCourseSection?: Maybe<CourseSectionEntityResponse>;
  deleteLesson?: Maybe<LessonEntityResponse>;
  deleteNewsContent?: Maybe<NewsContentEntityResponse>;
  deleteTurtleOfTheMonth?: Maybe<TurtleOfTheMonthEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  deleteUserWalletPassword?: Maybe<UserWalletPasswordEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeComment: CommentSingle;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAchievement?: Maybe<AchievementEntityResponse>;
  updateApiVideoUploaderApiVideoAsset?: Maybe<ApiVideoUploaderApiVideoAssetEntityResponse>;
  updateAuthor?: Maybe<AuthorEntityResponse>;
  updateComment: CommentSingle;
  updateCommentsComment?: Maybe<CommentsCommentEntityResponse>;
  updateCourse?: Maybe<CourseEntityResponse>;
  updateCourseSection?: Maybe<CourseSectionEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateLesson?: Maybe<LessonEntityResponse>;
  updateNewsContent?: Maybe<NewsContentEntityResponse>;
  updateTurtleOfTheMonth?: Maybe<TurtleOfTheMonthEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  updateUserWalletPassword?: Maybe<UserWalletPasswordEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAbuseReportArgs = {
  input: CreateReport;
};


export type MutationCreateAchievementArgs = {
  data: AchievementInput;
};


export type MutationCreateApiVideoUploaderApiVideoAssetArgs = {
  data: ApiVideoUploaderApiVideoAssetInput;
};


export type MutationCreateAuthorArgs = {
  data: AuthorInput;
};


export type MutationCreateCommentArgs = {
  input: CreateComment;
};


export type MutationCreateCommentsCommentArgs = {
  data: CommentsCommentInput;
};


export type MutationCreateCourseArgs = {
  data: CourseInput;
};


export type MutationCreateCourseSectionArgs = {
  data: CourseSectionInput;
};


export type MutationCreateLessonArgs = {
  data: LessonInput;
};


export type MutationCreateNewsContentArgs = {
  data: NewsContentInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUserWalletPasswordArgs = {
  data: UserWalletPasswordInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAchievementArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApiVideoUploaderApiVideoAssetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentsCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCourseSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLessonArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNewsContentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserWalletPasswordArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveCommentArgs = {
  input: RemoveComment;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAchievementArgs = {
  data: AchievementInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateApiVideoUploaderApiVideoAssetArgs = {
  data: ApiVideoUploaderApiVideoAssetInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateAuthorArgs = {
  data: AuthorInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommentArgs = {
  input: UpdateComment;
};


export type MutationUpdateCommentsCommentArgs = {
  data: CommentsCommentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCourseArgs = {
  data: CourseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCourseSectionArgs = {
  data: CourseSectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateLessonArgs = {
  data: LessonInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNewsContentArgs = {
  data: NewsContentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTurtleOfTheMonthArgs = {
  data: TurtleOfTheMonthInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserWalletPasswordArgs = {
  data: UserWalletPasswordInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type NewsContent = {
  __typename?: 'NewsContent';
  Published?: Maybe<Scalars['Date']['output']>;
  Summary?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NewsContentEntity = {
  __typename?: 'NewsContentEntity';
  attributes?: Maybe<NewsContent>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type NewsContentEntityResponse = {
  __typename?: 'NewsContentEntityResponse';
  data?: Maybe<NewsContentEntity>;
};

export type NewsContentEntityResponseCollection = {
  __typename?: 'NewsContentEntityResponseCollection';
  data: Array<NewsContentEntity>;
  meta: ResponseCollectionMeta;
};

export type NewsContentFiltersInput = {
  Published?: InputMaybe<DateFilterInput>;
  Summary?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<NewsContentFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<NewsContentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NewsContentFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NewsContentInput = {
  Published?: InputMaybe<Scalars['Date']['input']>;
  Summary?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  thumbnail?: InputMaybe<Scalars['Id']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  achievement?: Maybe<AchievementEntityResponse>;
  achievements?: Maybe<AchievementEntityResponseCollection>;
  apiVideoUploaderApiVideoAsset?: Maybe<ApiVideoUploaderApiVideoAssetEntityResponse>;
  apiVideoUploaderApiVideoAssets?: Maybe<ApiVideoUploaderApiVideoAssetEntityResponseCollection>;
  author?: Maybe<AuthorEntityResponse>;
  authors?: Maybe<AuthorEntityResponseCollection>;
  commentsComment?: Maybe<CommentsCommentEntityResponse>;
  commentsComments?: Maybe<CommentsCommentEntityResponseCollection>;
  course?: Maybe<CourseEntityResponse>;
  courseSection?: Maybe<CourseSectionEntityResponse>;
  courseSections?: Maybe<CourseSectionEntityResponseCollection>;
  courses?: Maybe<CourseEntityResponseCollection>;
  findAllFlat?: Maybe<ResponseFindAll>;
  findAllInHierarchy: Array<Maybe<CommentNested>>;
  findAllPerAuthor?: Maybe<ResponseFindAllPerAuthor>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  lesson?: Maybe<LessonEntityResponse>;
  lessons?: Maybe<LessonEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  newsContent?: Maybe<NewsContentEntityResponse>;
  newsContents?: Maybe<NewsContentEntityResponseCollection>;
  turtleOfTheMonth?: Maybe<TurtleOfTheMonthEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  userWalletPassword?: Maybe<UserWalletPasswordEntityResponse>;
  userWalletPasswords?: Maybe<UserWalletPasswordEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAchievementArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAchievementsArgs = {
  filters?: InputMaybe<AchievementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryApiVideoUploaderApiVideoAssetArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApiVideoUploaderApiVideoAssetsArgs = {
  filters?: InputMaybe<ApiVideoUploaderApiVideoAssetFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAuthorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCommentsCommentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommentsCommentsArgs = {
  filters?: InputMaybe<CommentsCommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCourseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCourseSectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCourseSectionsArgs = {
  filters?: InputMaybe<CourseSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFindAllFlatArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  relation: Scalars['String']['input'];
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFindAllInHierarchyArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  relation: Scalars['String']['input'];
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFindAllPerAuthorArgs = {
  authorId: Scalars['Int']['input'];
  authorType?: InputMaybe<AuthorType>;
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLessonArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLessonsArgs = {
  filters?: InputMaybe<LessonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNewsContentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryNewsContentsArgs = {
  filters?: InputMaybe<NewsContentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTurtleOfTheMonthArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUserWalletPasswordArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUserWalletPasswordsArgs = {
  filters?: InputMaybe<UserWalletPasswordFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RemoveComment = {
  author?: InputMaybe<IdentifyCommentAuthor>;
  id?: InputMaybe<Scalars['Id']['input']>;
  relation: Scalars['String']['input'];
};

export type Report = {
  __typename?: 'Report';
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Id']['output']>;
  reason?: Maybe<ReportReason>;
  related?: Maybe<CommentSingle>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

/** Reason of abuse report */
export enum ReportReason {
  BadLanguage = 'BAD_LANGUAGE',
  Discrimination = 'DISCRIMINATION',
  Other = 'OTHER'
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type ResponseFindAll = {
  __typename?: 'ResponseFindAll';
  data?: Maybe<Array<Maybe<CommentSingle>>>;
  meta?: Maybe<ResponseMeta>;
};

export type ResponseFindAllPerAuthor = {
  __typename?: 'ResponseFindAllPerAuthor';
  data?: Maybe<Array<Maybe<CommentSingle>>>;
  meta?: Maybe<ResponseMeta>;
};

export type ResponseMeta = {
  __typename?: 'ResponseMeta';
  pagination?: Maybe<ResponsePagination>;
};

export type ResponsePagination = {
  __typename?: 'ResponsePagination';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pageCount?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
  start?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TurtleOfTheMonth = {
  __typename?: 'TurtleOfTheMonth';
  Image?: Maybe<UploadFileEntityResponse>;
  Name?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TurtleOfTheMonthEntity = {
  __typename?: 'TurtleOfTheMonthEntity';
  attributes?: Maybe<TurtleOfTheMonth>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type TurtleOfTheMonthEntityResponse = {
  __typename?: 'TurtleOfTheMonthEntityResponse';
  data?: Maybe<TurtleOfTheMonthEntity>;
};

export type TurtleOfTheMonthInput = {
  Image?: InputMaybe<Scalars['Id']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateComment = {
  author?: InputMaybe<IdentifyCommentAuthor>;
  content: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Id']['input']>;
  relation: Scalars['String']['input'];
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['Id']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['Id']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UserWalletPassword = {
  __typename?: 'UserWalletPassword';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type UserWalletPasswordEntity = {
  __typename?: 'UserWalletPasswordEntity';
  attributes?: Maybe<UserWalletPassword>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type UserWalletPasswordEntityResponse = {
  __typename?: 'UserWalletPasswordEntityResponse';
  data?: Maybe<UserWalletPasswordEntity>;
};

export type UserWalletPasswordEntityResponseCollection = {
  __typename?: 'UserWalletPasswordEntityResponseCollection';
  data: Array<UserWalletPasswordEntity>;
  meta: ResponseCollectionMeta;
};

export type UserWalletPasswordFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UserWalletPasswordFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UserWalletPasswordFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UserWalletPasswordFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UserWalletPasswordInput = {
  password?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['Id']['input']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Id']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Id']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  achievements?: Maybe<AchievementRelationResponseCollection>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  courses_approveds?: Maybe<CourseRelationResponseCollection>;
  courses_enrolled?: Maybe<CourseRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  current_lesson?: Maybe<LessonEntityResponse>;
  email: Scalars['String']['output'];
  lessons_completed?: Maybe<LessonRelationResponseCollection>;
  liked?: Maybe<CommentsCommentRelationResponseCollection>;
  membership_expires?: Maybe<Scalars['DateTime']['output']>;
  onboarded?: Maybe<Scalars['Boolean']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user_wallet_password?: Maybe<UserWalletPasswordEntityResponse>;
  username: Scalars['String']['output'];
  walletAddress?: Maybe<Scalars['String']['output']>;
  walletLogin?: Maybe<Scalars['Boolean']['output']>;
};


export type UsersPermissionsUserAchievementsArgs = {
  filters?: InputMaybe<AchievementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserCourses_ApprovedsArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserCourses_EnrolledArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserLessons_CompletedArgs = {
  filters?: InputMaybe<LessonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserLikedArgs = {
  filters?: InputMaybe<CommentsCommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['Id']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  achievements?: InputMaybe<AchievementFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  courses_approveds?: InputMaybe<CourseFiltersInput>;
  courses_enrolled?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  current_lesson?: InputMaybe<LessonFiltersInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lessons_completed?: InputMaybe<LessonFiltersInput>;
  liked?: InputMaybe<CommentsCommentFiltersInput>;
  membership_expires?: InputMaybe<DateTimeFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  onboarded?: InputMaybe<BooleanFilterInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user_wallet_password?: InputMaybe<UserWalletPasswordFiltersInput>;
  username?: InputMaybe<StringFilterInput>;
  walletAddress?: InputMaybe<StringFilterInput>;
  walletLogin?: InputMaybe<BooleanFilterInput>;
};

export type UsersPermissionsUserInput = {
  achievements?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  courses_approveds?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
  courses_enrolled?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
  current_lesson?: InputMaybe<Scalars['Id']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  lessons_completed?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
  liked?: InputMaybe<Array<InputMaybe<Scalars['Id']['input']>>>;
  membership_expires?: InputMaybe<Scalars['DateTime']['input']>;
  onboarded?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['Id']['input']>;
  user_wallet_password?: InputMaybe<Scalars['Id']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  walletAddress?: InputMaybe<Scalars['String']['input']>;
  walletLogin?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type LessonCommentsQueryVariables = Exact<{
  relation: Scalars['String']['input'];
}>;


export type LessonCommentsQuery = { __typename?: 'Query', findAllInHierarchy: Array<{ __typename?: 'CommentNested', content: string, id?: any | null, tab?: string | null, createdAt?: string | null, author?: { __typename?: 'CommentAuthor', name: string, avatar?: string | null } | null, children?: Array<{ __typename?: 'CommentNested', id?: any | null, content: string, createdAt?: string | null, tab?: string | null, author?: { __typename?: 'CommentAuthor', name: string, avatar?: string | null } | null, children?: Array<{ __typename?: 'CommentNested', id?: any | null, content: string, author?: { __typename?: 'CommentAuthor', name: string, avatar?: string | null } | null, children?: Array<{ __typename?: 'CommentNested', id?: any | null } | null> | null } | null> | null } | null> | null } | null> };

export type CreateCommentMutationVariables = Exact<{
  relation: Scalars['String']['input'];
  content: Scalars['String']['input'];
  threadOf?: InputMaybe<Scalars['Id']['input']>;
  tab: Scalars['String']['input'];
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'CommentSingle', id?: any | null } };

export type CourseOverviewQueryVariables = Exact<{
  courseId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CourseOverviewQuery = { __typename?: 'Query', course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', id?: any | null, attributes?: { __typename?: 'Course', Title?: string | null, Summary?: string | null, course_sections?: { __typename?: 'CourseSectionRelationResponseCollection', data: Array<{ __typename?: 'CourseSectionEntity', id?: any | null, attributes?: { __typename?: 'CourseSection', Title?: string | null, index?: number | null, lessons?: { __typename?: 'LessonRelationResponseCollection', data: Array<{ __typename?: 'LessonEntity', id?: any | null, attributes?: { __typename?: 'Lesson', Title?: string | null, Summary?: string | null, index?: number | null, api_video_uploader_api_video_asset?: { __typename?: 'ApiVideoUploaderApiVideoAssetEntityResponse', data?: { __typename?: 'ApiVideoUploaderApiVideoAssetEntity', attributes?: { __typename?: 'ApiVideoUploaderApiVideoAsset', videoId: string } | null } | null } | null } | null }> } | null } | null }> } | null, intro_video?: { __typename?: 'ApiVideoUploaderApiVideoAssetEntityResponse', data?: { __typename?: 'ApiVideoUploaderApiVideoAssetEntity', id?: any | null, attributes?: { __typename?: 'ApiVideoUploaderApiVideoAsset', videoId: string } | null } | null } | null } | null } | null } | null };

export type CourseIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type CourseIdsQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: any | null }> } | null };

export type CompletedCourseLessonsQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
  courseId: Scalars['ID']['input'];
}>;


export type CompletedCourseLessonsQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', lessons_completed?: { __typename?: 'LessonRelationResponseCollection', data: Array<{ __typename?: 'LessonEntity', id?: any | null, attributes?: { __typename?: 'Lesson', index?: number | null, course_section?: { __typename?: 'CourseSectionEntityResponse', data?: { __typename?: 'CourseSectionEntity', attributes?: { __typename?: 'CourseSection', index?: number | null } | null } | null } | null } | null }> } | null, courses_approveds?: { __typename?: 'CourseRelationResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: any | null }> } | null } | null } | null } | null };

export type CoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type CoursesQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: any | null, attributes?: { __typename?: 'Course', Title?: string | null, Summary?: string | null, required_role?: number | null, AuthorDescription?: string | null, course_sections?: { __typename?: 'CourseSectionRelationResponseCollection', data: Array<{ __typename?: 'CourseSectionEntity', id?: any | null, attributes?: { __typename?: 'CourseSection', lessons?: { __typename?: 'LessonRelationResponseCollection', data: Array<{ __typename?: 'LessonEntity', id?: any | null, attributes?: { __typename?: 'Lesson', lesson_minutes?: number | null } | null }> } | null } | null }> } | null, CoverImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, authors?: { __typename?: 'AuthorRelationResponseCollection', data: Array<{ __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', Name?: string | null, twitter?: string | null, linkedin?: string | null, instagram?: string | null, Description?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null, Icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null };

export type LessonQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
  sectionIndex: Scalars['Int']['input'];
  lessonIndex: Scalars['Int']['input'];
}>;


export type LessonQuery = { __typename?: 'Query', lessons?: { __typename?: 'LessonEntityResponseCollection', data: Array<{ __typename?: 'LessonEntity', id?: any | null, attributes?: { __typename?: 'Lesson', Title?: string | null, Summary?: string | null, Content?: string | null, Transcript?: string | null, index?: number | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, course_section?: { __typename?: 'CourseSectionEntityResponse', data?: { __typename?: 'CourseSectionEntity', attributes?: { __typename?: 'CourseSection', Title?: string | null, Summary?: string | null, index?: number | null, course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', Title?: string | null, Summary?: string | null, required_role?: number | null } | null } | null } | null } | null } | null } | null, api_video_uploader_api_video_asset?: { __typename?: 'ApiVideoUploaderApiVideoAssetEntityResponse', data?: { __typename?: 'ApiVideoUploaderApiVideoAssetEntity', attributes?: { __typename?: 'ApiVideoUploaderApiVideoAsset', title: string, description?: string | null, videoId: string } | null } | null } | null } | null }> } | null };

export type LessonIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type LessonIdsQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: any | null, attributes?: { __typename?: 'Course', course_sections?: { __typename?: 'CourseSectionRelationResponseCollection', data: Array<{ __typename?: 'CourseSectionEntity', id?: any | null, attributes?: { __typename?: 'CourseSection', index?: number | null, lessons?: { __typename?: 'LessonRelationResponseCollection', data: Array<{ __typename?: 'LessonEntity', attributes?: { __typename?: 'Lesson', index?: number | null } | null }> } | null } | null }> } | null } | null }> } | null };

export type CourseLessonIdsQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
}>;


export type CourseLessonIdsQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: any | null, attributes?: { __typename?: 'Course', course_sections?: { __typename?: 'CourseSectionRelationResponseCollection', data: Array<{ __typename?: 'CourseSectionEntity', id?: any | null, attributes?: { __typename?: 'CourseSection', index?: number | null, lessons?: { __typename?: 'LessonRelationResponseCollection', data: Array<{ __typename?: 'LessonEntity', id?: any | null, attributes?: { __typename?: 'Lesson', index?: number | null } | null }> } | null } | null }> } | null } | null }> } | null };

export type UsersPermissionsUserQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UsersPermissionsUserQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', current_lesson?: { __typename?: 'LessonEntityResponse', data?: { __typename?: 'LessonEntity', id?: any | null, attributes?: { __typename?: 'Lesson', Title?: string | null, Summary?: string | null, index?: number | null, course_section?: { __typename?: 'CourseSectionEntityResponse', data?: { __typename?: 'CourseSectionEntity', attributes?: { __typename?: 'CourseSection', index?: number | null, course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', id?: any | null, attributes?: { __typename?: 'Course', Title?: string | null } | null } | null } | null } | null } | null } | null, api_video_uploader_api_video_asset?: { __typename?: 'ApiVideoUploaderApiVideoAssetEntityResponse', data?: { __typename?: 'ApiVideoUploaderApiVideoAssetEntity', attributes?: { __typename?: 'ApiVideoUploaderApiVideoAsset', videoId: string, thumbnail: string } | null } | null } | null } | null } | null } | null } | null } | null } | null };

export type GetProfileQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProfileQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: any | null, attributes?: { __typename?: 'UsersPermissionsUser', courses_enrolled?: { __typename?: 'CourseRelationResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: any | null, attributes?: { __typename?: 'Course', Title?: string | null, course_sections?: { __typename?: 'CourseSectionRelationResponseCollection', data: Array<{ __typename?: 'CourseSectionEntity', attributes?: { __typename?: 'CourseSection', lessons?: { __typename?: 'LessonRelationResponseCollection', data: Array<{ __typename?: 'LessonEntity', id?: any | null }> } | null } | null }> } | null, Icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null, lessons_completed?: { __typename?: 'LessonRelationResponseCollection', data: Array<{ __typename?: 'LessonEntity', id?: any | null, attributes?: { __typename?: 'Lesson', lesson_minutes?: number | null, course_section?: { __typename?: 'CourseSectionEntityResponse', data?: { __typename?: 'CourseSectionEntity', attributes?: { __typename?: 'CourseSection', course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', id?: any | null } | null } | null } | null } | null } | null } | null }> } | null, achievements?: { __typename?: 'AchievementRelationResponseCollection', data: Array<{ __typename?: 'AchievementEntity', id?: any | null, attributes?: { __typename?: 'Achievement', Title?: string | null, Description?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null, courses_approveds?: { __typename?: 'CourseRelationResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: any | null }> } | null } | null } | null } | null, turtleOfTheMonth?: { __typename?: 'TurtleOfTheMonthEntityResponse', data?: { __typename?: 'TurtleOfTheMonthEntity', id?: any | null, attributes?: { __typename?: 'TurtleOfTheMonth', Name?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null };

export type UserWalletPasswordQueryVariables = Exact<{
  walletAddress: Scalars['String']['input'];
}>;


export type UserWalletPasswordQuery = { __typename?: 'Query', usersPermissionsUsers?: { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: any | null, attributes?: { __typename?: 'UsersPermissionsUser', email: string, user_wallet_password?: { __typename?: 'UserWalletPasswordEntityResponse', data?: { __typename?: 'UserWalletPasswordEntity', id?: any | null, attributes?: { __typename?: 'UserWalletPassword', password?: string | null } | null } | null } | null } | null }> } | null };

export type CreateWalletUserMutationVariables = Exact<{
  wallet: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateWalletUserMutation = { __typename?: 'Mutation', createUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: any | null } | null } };

export type SaveWalletPasswordMutationVariables = Exact<{
  userId: Scalars['Id']['input'];
  password: Scalars['String']['input'];
}>;


export type SaveWalletPasswordMutation = { __typename?: 'Mutation', createUserWalletPassword?: { __typename?: 'UserWalletPasswordEntityResponse', data?: { __typename?: 'UserWalletPasswordEntity', id?: any | null } | null } | null };


export const LessonCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LessonComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"relation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllInHierarchy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"relation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"relation"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"blocked"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"BooleanValue","value":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"blockedThread"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tab"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"tab"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<LessonCommentsQuery, LessonCommentsQueryVariables>;
export const CreateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"relation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threadOf"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Id"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tab"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"relation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"relation"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"threadOf"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threadOf"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tab"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tab"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateCommentMutation, CreateCommentMutationVariables>;
export const CourseOverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CourseOverview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"course_sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"lessons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Summary"}},{"kind":"Field","name":{"kind":"Name","value":"api_video_uploader_api_video_asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoId"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"intro_video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoId"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Summary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CourseOverviewQuery, CourseOverviewQueryVariables>;
export const CourseIdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CourseIds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CourseIdsQuery, CourseIdsQueryVariables>;
export const CompletedCourseLessonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CompletedCourseLessons"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersPermissionsUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lessons_completed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course_section"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"course_section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses_approveds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CompletedCourseLessonsQuery, CompletedCourseLessonsQueryVariables>;
export const CoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Summary"}},{"kind":"Field","name":{"kind":"Name","value":"required_role"}},{"kind":"Field","name":{"kind":"Name","value":"course_sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lessons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lesson_minutes"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CoverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"AuthorDescription"}},{"kind":"Field","name":{"kind":"Name","value":"Icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CoursesQuery, CoursesQueryVariables>;
export const LessonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Lesson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sectionIndex"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lessonIndex"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lessons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course_section"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"index"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sectionIndex"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"index"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lessonIndex"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Summary"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}},{"kind":"Field","name":{"kind":"Name","value":"Transcript"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"course_section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Summary"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Summary"}},{"kind":"Field","name":{"kind":"Name","value":"required_role"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"api_video_uploader_api_video_asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<LessonQuery, LessonQueryVariables>;
export const LessonIdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LessonIds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course_sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"lessons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<LessonIdsQuery, LessonIdsQueryVariables>;
export const CourseLessonIdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CourseLessonIds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course_sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"lessons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CourseLessonIdsQuery, CourseLessonIdsQueryVariables>;
export const UsersPermissionsUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UsersPermissionsUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersPermissionsUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current_lesson"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Summary"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"course_section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"api_video_uploader_api_video_asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersPermissionsUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses_enrolled"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"course_sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lessons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lessons_completed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course_section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lesson_minutes"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"achievements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses_approveds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"turtleOfTheMonth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const UserWalletPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userWalletPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"walletAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersPermissionsUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"walletAddress"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"walletAddress"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"user_wallet_password"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"password"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserWalletPasswordQuery, UserWalletPasswordQueryVariables>;
export const CreateWalletUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWalletUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wallet"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUsersPermissionsUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wallet"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"confirmed"},"value":{"kind":"BooleanValue","value":true}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"walletAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wallet"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"role"},"value":{"kind":"StringValue","value":"1","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateWalletUserMutation, CreateWalletUserMutationVariables>;
export const SaveWalletPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"saveWalletPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Id"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserWalletPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SaveWalletPasswordMutation, SaveWalletPasswordMutationVariables>;