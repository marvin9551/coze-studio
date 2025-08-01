/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as common from './common';

export type Int64 = string | number;

/** 考试资格 */
export enum CertStatus {
  /** 未知 */
  Unknown = 0,
  /** 有效 */
  Valid = 1,
  /** 无效 */
  Invalid = 2,
  /** 无可用试题(口语试卷或听力试题) */
  OutOfQuestions = 3,
}

export enum ConfirmUniExamType {
  /** 未知 */
  Unknown = 0,
  /** 确认 */
  Confirm = 1,
  /** 保存 */
  Save = 2,
  /** 定时确认 */
  ConfirmByCron = 3,
}

export enum DetailLevel {
  /** 未知 */
  Unknown = 0,
  /** A1.1 */
  A1_1 = 1,
  /** A1.2 */
  A1_2 = 2,
  /** A2.1 */
  A2_1 = 3,
  /** A2.2 */
  A2_2 = 4,
  /** B1.1 */
  B1_1 = 5,
  /** B1.2 */
  B1_2 = 6,
  /** B2.1 */
  B2_1 = 7,
  /** B2.2 */
  B2_2 = 8,
  /** C1.1 */
  C1_1 = 9,
  /** C1.2 */
  C1_2 = 10,
  /** C2 */
  C2 = 11,
}

export enum EmailOperation {
  /** 未知 */
  Unknown = 0,
  /** 新增 */
  Create = 1,
  /** 覆盖 */
  Update = 2,
  /** 删除 */
  Delete = 3,
}

export enum ExamCategory {
  /** 未知 */
  Unknown = 0,
  /** 正式考试 */
  Formal = 1,
  /** 模拟考试 */
  Simulation = 2,
  /** 口语刷题 */
  OralPractice = 3,
}

export enum GeneralLevel {
  /** 未知 */
  Unknown = 0,
  /** A2 */
  A2 = 1,
  /** B1 */
  B1 = 2,
  /** B2 */
  B2 = 3,
  /** C1 */
  C1 = 4,
}

/** 删除状态 */
export enum IsDeleted {
  /** 否 */
  No = 0,
  /** 是 */
  Yes = 1,
}

/** 统一考试
 ======================= 枚举 =======================
 在线状态 */
export enum OnlineStatus {
  /** 下线 */
  Offline = 0,
  /** 上线 */
  Online = 1,
}

export enum PracticeStatus {
  /** 否 */
  No = 0,
  /** 是 */
  Yes = 1,
}

/** 题目批改状态 */
export enum QuestionCheckStatus {
  /** 未批改 */
  NotChecked = 0,
  /** ASR成功 */
  AsrSuccess = 1,
  /** ASR失败 */
  AsrFailed = 2,
  /** 批改成功 */
  CheckSuccess = 3,
  /** 批改失败 */
  CheckFailed = 4,
}

export enum QuestionGroupCategory {
  /** 未知 */
  Unknown = 0,
  /** 长短听力 */
  ShortLong = 1,
  /** n选n */
  NFromN = 2,
}

/** 口语题part标识 */
export enum QuestionOralPart {
  /** Part 1 */
  One = 1,
  /** Part 2 */
  Two = 2,
  /** Part 3 */
  Three = 3,
  /** Part 4 */
  Four = 4,
}

export enum RobotMessageStatus {
  /** 待推送 */
  Pending = 0,
  /** 推送中 */
  Sending = 1,
  /** 推送成功 */
  Success = 2,
  /** 推送失败 */
  Failed = 3,
}

export enum RobotMessageType {
  /** 团队学习提醒 */
  TeamStudy = 0,
  /** 团队测试提醒 */
  DeprecatedTeamExam = 1,
  /** 飞书群组活动通知 */
  FeishuGroupActivity = 2,
  /** 统一考试提醒 */
  UniExamRemind = 3,
}

/** 模拟考试 */
export enum SimulationStatus {
  /** 否 */
  No = 0,
  /** 是 */
  Yes = 1,
}

export enum TeamExamConfigurationType {
  /** 基于筛选 */
  Filter = 0,
  /** 基于邮箱 */
  Email = 1,
}

export enum TeamExamUserStatus {
  /** 未知 */
  Unknown = 0,
  /** 配置成功 */
  Success = 1,
  /** 配置失败 */
  Failure = 2,
}

/** 用户考试状态 */
export enum UniExamStatus {
  /** 进行中 */
  InProgress = 0,
  /** 已完成 */
  Finished = 1,
  /** 待复核 */
  ToBeReviewed = 2,
  /** 待批改 */
  ToBeChecked = 3,
  /** 待加试 */
  ToBeAdditional = 4,
  /** 加试进行中 */
  AdditionInProgress = 5,
  /** 已退出 */
  Exited = 6,
  /** 强制退出 */
  ForcedExit = 7,
}

export enum UserType {
  /** 未知 */
  Unknown = 0,
  /** 飞书用户 */
  Lark = 1,
  /** 外部用户 */
  External = 2,
}

export interface OralCheckTaskResult {
  /** 任务ID */
  task_id?: string;
  /** "pending", "completed", "failed" */
  status?: string;
  /** 音频URI */
  audio_uri?: string;
  /** 用户录音转文本 */
  asr_text?: string;
  /** gpt对文本的批改结果 */
  gpt_check_result?: string;
  /** 错误信息 */
  error?: string;
  /** 更新时间 */
  updated_at?: Int64;
  /** 创建时间 */
  created_at?: Int64;
}

export interface RobotMessage {
  /** 消息ID */
  id?: Int64;
  /** 消息内容 */
  payload?: string;
  /** 推送时间 */
  push_time?: Int64;
  /** 消息类型 */
  type?: RobotMessageType;
  /** 消息状态 */
  status?: RobotMessageStatus;
  /** 关联 ID，与 RobotMessageType 对应 */
  rid?: Int64;
  /** 推送记录 */
  schedule_records?: Array<ScheduleRecord>;
}

export interface ScheduleRecord {
  /** 记录ID */
  id?: Int64;
  /** 机器人消息ID */
  robot_message_id?: Int64;
  /** 推送结果 */
  schedule_result?: string;
  /** 推送用户 */
  schedule_users?: string;
}

/** ======================= 响应模型 ======================= */
export interface Team {
  id?: Int64;
  /** 团队名称 */
  name?: string;
  /** 团队头像 */
  avatar?: string;
  /** 最新团队考试 */
  latest_team_exam?: TeamExam;
  /** 团队考试列表 */
  team_exams?: Array<TeamExam>;
}

export interface TeamExam {
  id?: Int64;
  /** 测试名称 */
  name?: string;
  /** 团队ID */
  team_id?: Int64;
  /** 批改类型 0未知状态 4人工批改 5机器批改 */
  check_type?: common.TeamExamCheckType;
  /** 状态 0进行中 1未开始 2已完成 */
  status?: common.TeamExamStatus;
  /** 开始时间 */
  begin_at?: Int64;
  /** 结束时间 */
  end_at?: Int64;
  /** 考试资格过滤条件 */
  filter?: TeamExamTestFilter;
  /** 类型 0测试 1团队考试(历史数据) */
  category?: common.TeamExamCategory;
  /** 团队 */
  team?: Team;
  /** 我的考试记录 */
  my_uni_exam?: UniExam;
  /** 参与团队考试的用户考试列表(最大100条) */
  uni_exams?: Array<UniExam>;
  /** 参与团队考试的用户考试列表总数 */
  uni_exams_total?: Int64;
  /** 未完成考试的用户列表(最大100条) */
  unfinished_users?: Array<User>;
  /** 未完成考试的用户列表总数 */
  unfinished_users_total?: Int64;
  /** 创建时间 */
  created_at?: Int64;
}

export interface TeamExamTestEmail {
  /** 邮箱列表 */
  emails?: Array<string>;
  /** 邮箱excel文件URL */
  file_url?: string;
}

export interface TeamExamTestFilter {
  /** 英语分组 */
  english_group?: Array<string>;
  /** 员工角色 */
  role?: Array<string>;
  /** 历史最高成绩 */
  highest_score?: Array<string>;
  /** 是否有非中下属 */
  has_overseas_subordinate?: boolean;
}

export interface UniExam {
  id?: Int64;
  /** 用户ID */
  user_id?: Int64;
  /** 团队考试ID */
  team_exam_id?: Int64;
  /** 听力考试ID */
  uni_exam_listening_paper_id?: Int64;
  /** 听力第一次加试 ID */
  uni_exam_listening_paper_plus_one_id?: Int64;
  /** 听力第二次加试 ID */
  uni_exam_listening_paper_plus_two_id?: Int64;
  /** 口语题1 */
  uniexam_oral_question_one_id?: Int64;
  /** 口语题2 */
  uniexam_oral_question_two_id?: Int64;
  /** 口语题3 */
  uniexam_oral_question_three_id?: Int64;
  /** 口语题4 */
  uniexam_oral_question_four_id?: Int64;
  /** 视频地址, 废弃,改为视频会议列表 */
  video_uri?: string;
  /** 离开次数 */
  leave_count?: number;
  /** 状态 */
  status?: UniExamStatus;
  /** 听力考试等级 */
  listening_paper_level?: GeneralLevel;
  /** 听力考试得分 */
  listening_score?: number;
  /** 听力定级 (A/B/C1.1/2) */
  listening_level?: DetailLevel;
  /** 口语得分 */
  oral_score?: number;
  /** 口语定级 (A/B/C1.1/2) */
  oral_level?: DetailLevel;
  /** 最终定级 (A/B/C1.1/2) */
  final_level?: DetailLevel;
  /** 0 正式 1 模拟考试 */
  is_simulated?: SimulationStatus;
  /** 同步到外部的表记录id */
  apaas_english_grade_id?: Int64;
  /** 用户信息 */
  user?: User;
  /** 团队信息 */
  team?: Team;
  /** 考试类型 1 正式考试 2 模拟考试 3 口语刷题 */
  category?: ExamCategory;
  /** 类型 4新版定级[人工] 5新版定级[机改] */
  check_type?: common.TeamExamCheckType;
  /** 团队考试信息 */
  team_exam?: TeamExam;
  /** 视频地址列表 */
  video_uri_list?: Array<string>;
  /** 视频地址列表 */
  video_url_list?: Array<string>;
  /** 口语题目列表 */
  oral_questions?: Array<UniExamQuestion>;
  /** 答案列表 */
  answers?: Array<UniExamAnswer>;
  /** 听力试卷列表 */
  listening_papers?: Array<UniExamListeningPaper>;
  /** 视频URL，废弃 */
  video_url?: string;
  /** 外部展示ID */
  external_id?: string;
  /** 更新时间 */
  updated_at?: Int64;
  /** 创建时间 */
  created_at?: Int64;
}

export interface UniExamAnswer {
  id?: Int64;
  /** 用户id */
  user_id?: Int64;
  /** 考试记录id */
  uni_exam_id?: Int64;
  /** 试卷id */
  uniexam_listening_paper_id?: Int64;
  /** 试题id */
  uniexam_question_id?: Int64;
  /** 试题选项id */
  uniexam_question_option_id?: Int64;
  /** 录音内容 */
  audio_uri?: string;
  /** 口语批改记录 */
  question_check?: UniExamQuestionCheck;
  /** 录音URL */
  audio_url?: string;
  /** 更新时间 */
  updated_at?: Int64;
  /** 创建时间 */
  created_at?: Int64;
}

export interface UniExamAnswerUpdateParams {
  /** 试题id */
  uniexam_question_id?: Int64;
  /** 选项ID(听力回答) */
  uni_exam_question_option_id?: Int64;
  /** 录音uri(口语回答) */
  audio_uri?: string;
}

export interface UniExamListeningPaper {
  /** 试卷ID */
  id?: Int64;
  /** 试卷名称 */
  name?: string;
  /** 试卷等级 */
  level?: GeneralLevel;
  /** 试卷状态 */
  status?: OnlineStatus;
  /** 是否模拟试卷 */
  is_simulated?: SimulationStatus;
  /** 题目组列表 */
  question_groups?: Array<UniExamQuestionGroup>;
}

export interface UniExamQuestion {
  id?: Int64;
  /** 题目组id */
  uniexam_question_group_id?: Int64;
  /** 题干 */
  content?: string;
  /** 音频 */
  audio_uri?: string;
  /** 图片 */
  image_uri?: string;
  /** 口语题 part 1|2|3|4 */
  oral_part?: QuestionOralPart;
  /** 0 下线 1 上线 */
  status?: OnlineStatus;
  /** 0 正式题 1 模拟题 */
  is_simulated?: SimulationStatus;
  /** 音频URL */
  audio_url?: string;
  /** 图片URL */
  picture_url?: string;
  /** 选项列表 */
  options?: Array<UniExamQuestionOption>;
}

export interface UniExamQuestionCheck {
  id?: Int64;
  /** 试题id */
  uniexam_question_id?: Int64;
  /** 回答id */
  uniexam_answer_id?: Int64;
  /** 批改状态 */
  status?: QuestionCheckStatus;
  /** 用户录音转文本 */
  asr_text?: string;
  /** gpt对文本的批改结果 */
  gpt_check_result?: string;
  /** CEFR等级 */
  cefr_level?: DetailLevel;
  /** 更新时间 */
  updated_at?: Int64;
  /** 创建时间 */
  created_at?: Int64;
}

export interface UniExamQuestionCreateNFNParams {
  /** 题目ID，传空为创建，否则为更新 */
  question_id?: Int64;
  /** 题目组ID */
  uni_exam_question_group_id?: Int64;
  /** 题目 */
  content?: string;
  /** 关联音频 */
  audio_uri?: string;
  /** 关联图片 */
  image_uri?: string;
  /** 选项内容 */
  option_content?: string;
}

export interface UniExamQuestionCreateParams {
  /** 题目组ID */
  uni_exam_question_group_id?: Int64;
  /** 题目 */
  content?: string;
  /** 关联音频 */
  audio_uri?: string;
  /** 关联图片 */
  image_uri?: string;
  /** 选项列表 */
  options?: Array<UniExamQuestionOptionCreateParams>;
}

export interface UniExamQuestionGroup {
  id?: Int64;
  /** 试卷id */
  uniexam_listening_paper_id?: Int64;
  /** 题干 */
  content?: string;
  /** 音频 */
  audio_uri?: string;
  /** 图片 */
  image_uri?: string;
  /** 题目组类型 */
  category?: QuestionGroupCategory;
  /** 选项内容列表 */
  option_contents?: Array<string>;
  /** 音频URL */
  audio_url?: string;
  /** 图片URL */
  picture_url?: string;
  /** 题目列表 */
  questions?: Array<UniExamQuestion>;
}

export interface UniExamQuestionOption {
  id?: Int64;
  /** 题目ID */
  uni_exam_question_id?: Int64;
  /** 选项内容 */
  content?: string;
  /** 选项正确性 */
  is_correct?: common.QuestionOptionCorrectStatus;
}

export interface UniExamQuestionOptionCreateParams {
  /** 题目ID */
  uni_exam_question_id?: Int64;
  /** 选项内容 */
  content?: string;
  /** 选项正确性 */
  is_correct?: common.QuestionOptionCorrectStatus;
}

export interface UniExamQuestionOptionUpdateParams {
  /** 选项ID */
  id?: Int64;
  /** 题目ID */
  uni_exam_question_id?: Int64;
  /** 选项内容 */
  content?: string;
  /** 选项正确性 */
  is_correct?: common.QuestionOptionCorrectStatus;
  /** 标记为删除的选项 */
  mark_as_delete?: boolean;
}

export interface UniExamQuestionUpdateParams {
  /** 题目ID */
  id?: Int64;
  /** 题目组ID */
  uni_exam_question_group_id?: Int64;
  /** 题目 */
  content?: string;
  /** 关联音频 */
  audio_uri?: string;
  /** 关联图片 */
  image_uri?: string;
  /** 选项列表 */
  options?: Array<UniExamQuestionOptionUpdateParams>;
  /** 标记为删除的题目 */
  mark_as_delete?: boolean;
}

export interface UniExamScoreRecord {
  /** 听力考试等级 */
  listening_paper_level?: GeneralLevel;
  /** 听力考试得分 */
  listening_score?: number;
  /** 听力定级 (A/B/C1.1/2) */
  listening_level?: DetailLevel;
  /** 口语得分 */
  oral_score?: number;
  /** 口语定级 (A/B/C1.1/2) */
  oral_level?: DetailLevel;
  /** 最终定级 (A/B/C1.1/2) */
  final_level?: DetailLevel;
  /** 创建时间 */
  created_at?: Int64;
  /** 统一考试ID */
  exam_id?: Int64;
}

export interface User {
  id?: Int64;
  /** 用户名 */
  name?: string;
  /** 头像 */
  avatar?: string;
  /** 邮箱 */
  email?: string;
  /** 测试ID */
  test_id?: Int64;
  /** 测试名称 */
  test_name?: string;
  /** 统一考试ID */
  exam_id?: Int64;
}
/* eslint-enable */
