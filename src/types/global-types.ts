/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ScheduleType {
  EXTERNAL_LINK = "EXTERNAL_LINK",
  INTERNAL_LINK = "INTERNAL_LINK",
}

export interface BooleanFilter {
  equals?: boolean | null;
  not?: boolean | null;
}

export interface ChallengeCreateManyWithoutPrimaryTopicInput {
  create?: ChallengeCreateWithoutPrimaryTopicInput[] | null;
  connect?: ChallengeWhereUniqueInput[] | null;
}

export interface ChallengeCreateManyWithoutTeamsThatCanSelectThisChallengeInput {
  create?: ChallengeCreateWithoutTeamsThatCanSelectThisChallengeInput[] | null;
  connect?: ChallengeWhereUniqueInput[] | null;
}

export interface ChallengeCreateOneWithoutProjectsInput {
  create?: ChallengeCreateWithoutProjectsInput | null;
  connect?: ChallengeWhereUniqueInput | null;
}

export interface ChallengeCreateOneWithoutTeamChallengeVotesInput {
  create?: ChallengeCreateWithoutTeamChallengeVotesInput | null;
  connect?: ChallengeWhereUniqueInput | null;
}

export interface ChallengeCreateOneWithoutTeamsThatSelectedThisChallengeInput {
  create?: ChallengeCreateWithoutTeamsThatSelectedThisChallengeInput | null;
  connect?: ChallengeWhereUniqueInput | null;
}

export interface ChallengeCreateOneWithoutUsersThatPreferThisChallengeInput {
  create?: ChallengeCreateWithoutUsersThatPreferThisChallengeInput | null;
  connect?: ChallengeWhereUniqueInput | null;
}

export interface ChallengeCreateWithoutPrimaryTopicInput {
  id?: string | null;
  title: string;
  context: string;
  challenge: string;
  solution?: string | null;
  resources?: string | null;
  commentsByTeam?: string | null;
  organization?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  teamsThatCanSelectThisChallenge?: TeamCreateManyWithoutChallengesToSelectInput | null;
  teamsThatSelectedThisChallenge?: TeamCreateManyWithoutChallengeSelectedInput | null;
  projects?: ProjectCreateManyWithoutChallengeInput | null;
  teamChallengeVotes?: TeamChallengeVoteCreateManyWithoutChallengeInput | null;
  usersThatPreferThisChallenge?: UserCreateManyWithoutPreferredChallengeInput | null;
}

export interface ChallengeCreateWithoutProjectsInput {
  id?: string | null;
  title: string;
  context: string;
  challenge: string;
  solution?: string | null;
  resources?: string | null;
  commentsByTeam?: string | null;
  organization?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  teamsThatCanSelectThisChallenge?: TeamCreateManyWithoutChallengesToSelectInput | null;
  teamsThatSelectedThisChallenge?: TeamCreateManyWithoutChallengeSelectedInput | null;
  primaryTopic: HackerTopicCreateOneWithoutPrimaryChallengesInput;
  teamChallengeVotes?: TeamChallengeVoteCreateManyWithoutChallengeInput | null;
  usersThatPreferThisChallenge?: UserCreateManyWithoutPreferredChallengeInput | null;
}

export interface ChallengeCreateWithoutTeamChallengeVotesInput {
  id?: string | null;
  title: string;
  context: string;
  challenge: string;
  solution?: string | null;
  resources?: string | null;
  commentsByTeam?: string | null;
  organization?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  teamsThatCanSelectThisChallenge?: TeamCreateManyWithoutChallengesToSelectInput | null;
  teamsThatSelectedThisChallenge?: TeamCreateManyWithoutChallengeSelectedInput | null;
  projects?: ProjectCreateManyWithoutChallengeInput | null;
  primaryTopic: HackerTopicCreateOneWithoutPrimaryChallengesInput;
  usersThatPreferThisChallenge?: UserCreateManyWithoutPreferredChallengeInput | null;
}

export interface ChallengeCreateWithoutTeamsThatCanSelectThisChallengeInput {
  id?: string | null;
  title: string;
  context: string;
  challenge: string;
  solution?: string | null;
  resources?: string | null;
  commentsByTeam?: string | null;
  organization?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  teamsThatSelectedThisChallenge?: TeamCreateManyWithoutChallengeSelectedInput | null;
  projects?: ProjectCreateManyWithoutChallengeInput | null;
  primaryTopic: HackerTopicCreateOneWithoutPrimaryChallengesInput;
  teamChallengeVotes?: TeamChallengeVoteCreateManyWithoutChallengeInput | null;
  usersThatPreferThisChallenge?: UserCreateManyWithoutPreferredChallengeInput | null;
}

export interface ChallengeCreateWithoutTeamsThatSelectedThisChallengeInput {
  id?: string | null;
  title: string;
  context: string;
  challenge: string;
  solution?: string | null;
  resources?: string | null;
  commentsByTeam?: string | null;
  organization?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  teamsThatCanSelectThisChallenge?: TeamCreateManyWithoutChallengesToSelectInput | null;
  projects?: ProjectCreateManyWithoutChallengeInput | null;
  primaryTopic: HackerTopicCreateOneWithoutPrimaryChallengesInput;
  teamChallengeVotes?: TeamChallengeVoteCreateManyWithoutChallengeInput | null;
  usersThatPreferThisChallenge?: UserCreateManyWithoutPreferredChallengeInput | null;
}

export interface ChallengeCreateWithoutUsersThatPreferThisChallengeInput {
  id?: string | null;
  title: string;
  context: string;
  challenge: string;
  solution?: string | null;
  resources?: string | null;
  commentsByTeam?: string | null;
  organization?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  teamsThatCanSelectThisChallenge?: TeamCreateManyWithoutChallengesToSelectInput | null;
  teamsThatSelectedThisChallenge?: TeamCreateManyWithoutChallengeSelectedInput | null;
  projects?: ProjectCreateManyWithoutChallengeInput | null;
  primaryTopic: HackerTopicCreateOneWithoutPrimaryChallengesInput;
  teamChallengeVotes?: TeamChallengeVoteCreateManyWithoutChallengeInput | null;
}

export interface ChallengeFilter {
  every?: ChallengeWhereInput | null;
  some?: ChallengeWhereInput | null;
  none?: ChallengeWhereInput | null;
}

export interface ChallengeScalarWhereInput {
  id?: UUIDFilter | null;
  title?: StringFilter | null;
  context?: StringFilter | null;
  challenge?: StringFilter | null;
  solution?: NullableStringFilter | null;
  resources?: NullableStringFilter | null;
  commentsByTeam?: NullableStringFilter | null;
  organization?: NullableStringFilter | null;
  contactName?: NullableStringFilter | null;
  contactEmail?: NullableStringFilter | null;
  teamsThatCanSelectThisChallenge?: TeamFilter | null;
  teamsThatSelectedThisChallenge?: TeamFilter | null;
  projects?: ProjectFilter | null;
  primaryTopicId?: StringFilter | null;
  teamChallengeVotes?: TeamChallengeVoteFilter | null;
  usersThatPreferThisChallenge?: UserFilter | null;
  AND?: ChallengeScalarWhereInput[] | null;
  OR?: ChallengeScalarWhereInput[] | null;
  NOT?: ChallengeScalarWhereInput[] | null;
}

export interface ChallengeUpdateManyDataInput {
  id?: string | null;
  title?: string | null;
  context?: string | null;
  challenge?: string | null;
  solution?: string | null;
  resources?: string | null;
  commentsByTeam?: string | null;
  organization?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
}

export interface ChallengeUpdateManyWithWhereNestedInput {
  where: ChallengeScalarWhereInput;
  data: ChallengeUpdateManyDataInput;
}

export interface ChallengeUpdateManyWithoutPrimaryTopicInput {
  create?: ChallengeCreateWithoutPrimaryTopicInput[] | null;
  connect?: ChallengeWhereUniqueInput[] | null;
  set?: ChallengeWhereUniqueInput[] | null;
  disconnect?: ChallengeWhereUniqueInput[] | null;
  delete?: ChallengeWhereUniqueInput[] | null;
  update?: ChallengeUpdateWithWhereUniqueWithoutPrimaryTopicInput[] | null;
  updateMany?: ChallengeUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: ChallengeScalarWhereInput[] | null;
  upsert?: ChallengeUpsertWithWhereUniqueWithoutPrimaryTopicInput[] | null;
}

export interface ChallengeUpdateManyWithoutTeamsThatCanSelectThisChallengeInput {
  create?: ChallengeCreateWithoutTeamsThatCanSelectThisChallengeInput[] | null;
  connect?: ChallengeWhereUniqueInput[] | null;
  set?: ChallengeWhereUniqueInput[] | null;
  disconnect?: ChallengeWhereUniqueInput[] | null;
  delete?: ChallengeWhereUniqueInput[] | null;
  update?:
    | ChallengeUpdateWithWhereUniqueWithoutTeamsThatCanSelectThisChallengeInput[]
    | null;
  updateMany?: ChallengeUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: ChallengeScalarWhereInput[] | null;
  upsert?:
    | ChallengeUpsertWithWhereUniqueWithoutTeamsThatCanSelectThisChallengeInput[]
    | null;
}

export interface ChallengeUpdateOneRequiredWithoutTeamChallengeVotesInput {
  create?: ChallengeCreateWithoutTeamChallengeVotesInput | null;
  connect?: ChallengeWhereUniqueInput | null;
  update?: ChallengeUpdateWithoutTeamChallengeVotesDataInput | null;
  upsert?: ChallengeUpsertWithoutTeamChallengeVotesInput | null;
}

export interface ChallengeUpdateOneWithoutProjectsInput {
  create?: ChallengeCreateWithoutProjectsInput | null;
  connect?: ChallengeWhereUniqueInput | null;
  disconnect?: boolean | null;
  delete?: boolean | null;
  update?: ChallengeUpdateWithoutProjectsDataInput | null;
  upsert?: ChallengeUpsertWithoutProjectsInput | null;
}

export interface ChallengeUpdateOneWithoutTeamsThatSelectedThisChallengeInput {
  create?: ChallengeCreateWithoutTeamsThatSelectedThisChallengeInput | null;
  connect?: ChallengeWhereUniqueInput | null;
  disconnect?: boolean | null;
  delete?: boolean | null;
  update?: ChallengeUpdateWithoutTeamsThatSelectedThisChallengeDataInput | null;
  upsert?: ChallengeUpsertWithoutTeamsThatSelectedThisChallengeInput | null;
}

export interface ChallengeUpdateOneWithoutUsersThatPreferThisChallengeInput {
  create?: ChallengeCreateWithoutUsersThatPreferThisChallengeInput | null;
  connect?: ChallengeWhereUniqueInput | null;
  disconnect?: boolean | null;
  delete?: boolean | null;
  update?: ChallengeUpdateWithoutUsersThatPreferThisChallengeDataInput | null;
  upsert?: ChallengeUpsertWithoutUsersThatPreferThisChallengeInput | null;
}

export interface ChallengeUpdateWithWhereUniqueWithoutPrimaryTopicInput {
  where: ChallengeWhereUniqueInput;
  data: ChallengeUpdateWithoutPrimaryTopicDataInput;
}

export interface ChallengeUpdateWithWhereUniqueWithoutTeamsThatCanSelectThisChallengeInput {
  where: ChallengeWhereUniqueInput;
  data: ChallengeUpdateWithoutTeamsThatCanSelectThisChallengeDataInput;
}

export interface ChallengeUpdateWithoutPrimaryTopicDataInput {
  id?: string | null;
  title?: string | null;
  context?: string | null;
  challenge?: string | null;
  solution?: string | null;
  resources?: string | null;
  commentsByTeam?: string | null;
  organization?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  teamsThatCanSelectThisChallenge?: TeamUpdateManyWithoutChallengesToSelectInput | null;
  teamsThatSelectedThisChallenge?: TeamUpdateManyWithoutChallengeSelectedInput | null;
  projects?: ProjectUpdateManyWithoutChallengeInput | null;
  teamChallengeVotes?: TeamChallengeVoteUpdateManyWithoutChallengeInput | null;
  usersThatPreferThisChallenge?: UserUpdateManyWithoutPreferredChallengeInput | null;
}

export interface ChallengeUpdateWithoutProjectsDataInput {
  id?: string | null;
  title?: string | null;
  context?: string | null;
  challenge?: string | null;
  solution?: string | null;
  resources?: string | null;
  commentsByTeam?: string | null;
  organization?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  teamsThatCanSelectThisChallenge?: TeamUpdateManyWithoutChallengesToSelectInput | null;
  teamsThatSelectedThisChallenge?: TeamUpdateManyWithoutChallengeSelectedInput | null;
  primaryTopic?: HackerTopicUpdateOneRequiredWithoutPrimaryChallengesInput | null;
  teamChallengeVotes?: TeamChallengeVoteUpdateManyWithoutChallengeInput | null;
  usersThatPreferThisChallenge?: UserUpdateManyWithoutPreferredChallengeInput | null;
}

export interface ChallengeUpdateWithoutTeamChallengeVotesDataInput {
  id?: string | null;
  title?: string | null;
  context?: string | null;
  challenge?: string | null;
  solution?: string | null;
  resources?: string | null;
  commentsByTeam?: string | null;
  organization?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  teamsThatCanSelectThisChallenge?: TeamUpdateManyWithoutChallengesToSelectInput | null;
  teamsThatSelectedThisChallenge?: TeamUpdateManyWithoutChallengeSelectedInput | null;
  projects?: ProjectUpdateManyWithoutChallengeInput | null;
  primaryTopic?: HackerTopicUpdateOneRequiredWithoutPrimaryChallengesInput | null;
  usersThatPreferThisChallenge?: UserUpdateManyWithoutPreferredChallengeInput | null;
}

export interface ChallengeUpdateWithoutTeamsThatCanSelectThisChallengeDataInput {
  id?: string | null;
  title?: string | null;
  context?: string | null;
  challenge?: string | null;
  solution?: string | null;
  resources?: string | null;
  commentsByTeam?: string | null;
  organization?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  teamsThatSelectedThisChallenge?: TeamUpdateManyWithoutChallengeSelectedInput | null;
  projects?: ProjectUpdateManyWithoutChallengeInput | null;
  primaryTopic?: HackerTopicUpdateOneRequiredWithoutPrimaryChallengesInput | null;
  teamChallengeVotes?: TeamChallengeVoteUpdateManyWithoutChallengeInput | null;
  usersThatPreferThisChallenge?: UserUpdateManyWithoutPreferredChallengeInput | null;
}

export interface ChallengeUpdateWithoutTeamsThatSelectedThisChallengeDataInput {
  id?: string | null;
  title?: string | null;
  context?: string | null;
  challenge?: string | null;
  solution?: string | null;
  resources?: string | null;
  commentsByTeam?: string | null;
  organization?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  teamsThatCanSelectThisChallenge?: TeamUpdateManyWithoutChallengesToSelectInput | null;
  projects?: ProjectUpdateManyWithoutChallengeInput | null;
  primaryTopic?: HackerTopicUpdateOneRequiredWithoutPrimaryChallengesInput | null;
  teamChallengeVotes?: TeamChallengeVoteUpdateManyWithoutChallengeInput | null;
  usersThatPreferThisChallenge?: UserUpdateManyWithoutPreferredChallengeInput | null;
}

export interface ChallengeUpdateWithoutUsersThatPreferThisChallengeDataInput {
  id?: string | null;
  title?: string | null;
  context?: string | null;
  challenge?: string | null;
  solution?: string | null;
  resources?: string | null;
  commentsByTeam?: string | null;
  organization?: string | null;
  contactName?: string | null;
  contactEmail?: string | null;
  teamsThatCanSelectThisChallenge?: TeamUpdateManyWithoutChallengesToSelectInput | null;
  teamsThatSelectedThisChallenge?: TeamUpdateManyWithoutChallengeSelectedInput | null;
  projects?: ProjectUpdateManyWithoutChallengeInput | null;
  primaryTopic?: HackerTopicUpdateOneRequiredWithoutPrimaryChallengesInput | null;
  teamChallengeVotes?: TeamChallengeVoteUpdateManyWithoutChallengeInput | null;
}

export interface ChallengeUpsertWithWhereUniqueWithoutPrimaryTopicInput {
  where: ChallengeWhereUniqueInput;
  update: ChallengeUpdateWithoutPrimaryTopicDataInput;
  create: ChallengeCreateWithoutPrimaryTopicInput;
}

export interface ChallengeUpsertWithWhereUniqueWithoutTeamsThatCanSelectThisChallengeInput {
  where: ChallengeWhereUniqueInput;
  update: ChallengeUpdateWithoutTeamsThatCanSelectThisChallengeDataInput;
  create: ChallengeCreateWithoutTeamsThatCanSelectThisChallengeInput;
}

export interface ChallengeUpsertWithoutProjectsInput {
  update: ChallengeUpdateWithoutProjectsDataInput;
  create: ChallengeCreateWithoutProjectsInput;
}

export interface ChallengeUpsertWithoutTeamChallengeVotesInput {
  update: ChallengeUpdateWithoutTeamChallengeVotesDataInput;
  create: ChallengeCreateWithoutTeamChallengeVotesInput;
}

export interface ChallengeUpsertWithoutTeamsThatSelectedThisChallengeInput {
  update: ChallengeUpdateWithoutTeamsThatSelectedThisChallengeDataInput;
  create: ChallengeCreateWithoutTeamsThatSelectedThisChallengeInput;
}

export interface ChallengeUpsertWithoutUsersThatPreferThisChallengeInput {
  update: ChallengeUpdateWithoutUsersThatPreferThisChallengeDataInput;
  create: ChallengeCreateWithoutUsersThatPreferThisChallengeInput;
}

export interface ChallengeWhereInput {
  id?: UUIDFilter | null;
  title?: StringFilter | null;
  context?: StringFilter | null;
  challenge?: StringFilter | null;
  solution?: NullableStringFilter | null;
  resources?: NullableStringFilter | null;
  commentsByTeam?: NullableStringFilter | null;
  organization?: NullableStringFilter | null;
  contactName?: NullableStringFilter | null;
  contactEmail?: NullableStringFilter | null;
  teamsThatCanSelectThisChallenge?: TeamFilter | null;
  teamsThatSelectedThisChallenge?: TeamFilter | null;
  projects?: ProjectFilter | null;
  primaryTopicId?: StringFilter | null;
  teamChallengeVotes?: TeamChallengeVoteFilter | null;
  usersThatPreferThisChallenge?: UserFilter | null;
  AND?: ChallengeWhereInput[] | null;
  OR?: ChallengeWhereInput[] | null;
  NOT?: ChallengeWhereInput[] | null;
  primaryTopic?: HackerTopicWhereInput | null;
}

export interface ChallengeWhereUniqueInput {
  id?: string | null;
  title?: string | null;
}

export interface DateTimeFilter {
  equals?: any | null;
  not?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
}

export interface HackerSkillCreateManyWithoutUsersInput {
  create?: HackerSkillCreateWithoutUsersInput[] | null;
  connect?: HackerSkillWhereUniqueInput[] | null;
}

export interface HackerSkillCreateWithoutUsersInput {
  id: string;
  title: string;
  description: string;
}

export interface HackerSkillFilter {
  every?: HackerSkillWhereInput | null;
  some?: HackerSkillWhereInput | null;
  none?: HackerSkillWhereInput | null;
}

export interface HackerSkillScalarWhereInput {
  id?: StringFilter | null;
  title?: StringFilter | null;
  description?: StringFilter | null;
  users?: UserFilter | null;
  AND?: HackerSkillScalarWhereInput[] | null;
  OR?: HackerSkillScalarWhereInput[] | null;
  NOT?: HackerSkillScalarWhereInput[] | null;
}

export interface HackerSkillUpdateManyDataInput {
  id?: string | null;
  title?: string | null;
  description?: string | null;
}

export interface HackerSkillUpdateManyWithWhereNestedInput {
  where: HackerSkillScalarWhereInput;
  data: HackerSkillUpdateManyDataInput;
}

export interface HackerSkillUpdateManyWithoutUsersInput {
  create?: HackerSkillCreateWithoutUsersInput[] | null;
  connect?: HackerSkillWhereUniqueInput[] | null;
  set?: HackerSkillWhereUniqueInput[] | null;
  disconnect?: HackerSkillWhereUniqueInput[] | null;
  delete?: HackerSkillWhereUniqueInput[] | null;
  update?: HackerSkillUpdateWithWhereUniqueWithoutUsersInput[] | null;
  updateMany?: HackerSkillUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: HackerSkillScalarWhereInput[] | null;
  upsert?: HackerSkillUpsertWithWhereUniqueWithoutUsersInput[] | null;
}

export interface HackerSkillUpdateWithWhereUniqueWithoutUsersInput {
  where: HackerSkillWhereUniqueInput;
  data: HackerSkillUpdateWithoutUsersDataInput;
}

export interface HackerSkillUpdateWithoutUsersDataInput {
  id?: string | null;
  title?: string | null;
  description?: string | null;
}

export interface HackerSkillUpsertWithWhereUniqueWithoutUsersInput {
  where: HackerSkillWhereUniqueInput;
  update: HackerSkillUpdateWithoutUsersDataInput;
  create: HackerSkillCreateWithoutUsersInput;
}

export interface HackerSkillWhereInput {
  id?: StringFilter | null;
  title?: StringFilter | null;
  description?: StringFilter | null;
  users?: UserFilter | null;
  AND?: HackerSkillWhereInput[] | null;
  OR?: HackerSkillWhereInput[] | null;
  NOT?: HackerSkillWhereInput[] | null;
}

export interface HackerSkillWhereUniqueInput {
  id?: string | null;
  title?: string | null;
}

export interface HackerTopicCreateManyWithoutUsersInput {
  create?: HackerTopicCreateWithoutUsersInput[] | null;
  connect?: HackerTopicWhereUniqueInput[] | null;
}

export interface HackerTopicCreateOneWithoutPrimaryChallengesInput {
  create?: HackerTopicCreateWithoutPrimaryChallengesInput | null;
  connect?: HackerTopicWhereUniqueInput | null;
}

export interface HackerTopicCreateOneWithoutTeamsInput {
  create?: HackerTopicCreateWithoutTeamsInput | null;
  connect?: HackerTopicWhereUniqueInput | null;
}

export interface HackerTopicCreateWithoutPrimaryChallengesInput {
  id: string;
  title: string;
  description: string;
  slackId?: string | null;
  users?: UserCreateManyWithoutHackerTopicsInput | null;
  mentors?: MentorCreateManyWithoutTopicsInput | null;
  teams?: TeamCreateManyWithoutPrimaryTopicInput | null;
}

export interface HackerTopicCreateWithoutTeamsInput {
  id: string;
  title: string;
  description: string;
  slackId?: string | null;
  users?: UserCreateManyWithoutHackerTopicsInput | null;
  primaryChallenges?: ChallengeCreateManyWithoutPrimaryTopicInput | null;
  mentors?: MentorCreateManyWithoutTopicsInput | null;
}

export interface HackerTopicCreateWithoutUsersInput {
  id: string;
  title: string;
  description: string;
  slackId?: string | null;
  primaryChallenges?: ChallengeCreateManyWithoutPrimaryTopicInput | null;
  mentors?: MentorCreateManyWithoutTopicsInput | null;
  teams?: TeamCreateManyWithoutPrimaryTopicInput | null;
}

export interface HackerTopicFilter {
  every?: HackerTopicWhereInput | null;
  some?: HackerTopicWhereInput | null;
  none?: HackerTopicWhereInput | null;
}

export interface HackerTopicScalarWhereInput {
  id?: StringFilter | null;
  title?: StringFilter | null;
  description?: StringFilter | null;
  users?: UserFilter | null;
  primaryChallenges?: ChallengeFilter | null;
  mentors?: MentorFilter | null;
  teams?: TeamFilter | null;
  slackId?: NullableStringFilter | null;
  AND?: HackerTopicScalarWhereInput[] | null;
  OR?: HackerTopicScalarWhereInput[] | null;
  NOT?: HackerTopicScalarWhereInput[] | null;
}

export interface HackerTopicUpdateManyDataInput {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  slackId?: string | null;
}

export interface HackerTopicUpdateManyWithWhereNestedInput {
  where: HackerTopicScalarWhereInput;
  data: HackerTopicUpdateManyDataInput;
}

export interface HackerTopicUpdateManyWithoutUsersInput {
  create?: HackerTopicCreateWithoutUsersInput[] | null;
  connect?: HackerTopicWhereUniqueInput[] | null;
  set?: HackerTopicWhereUniqueInput[] | null;
  disconnect?: HackerTopicWhereUniqueInput[] | null;
  delete?: HackerTopicWhereUniqueInput[] | null;
  update?: HackerTopicUpdateWithWhereUniqueWithoutUsersInput[] | null;
  updateMany?: HackerTopicUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: HackerTopicScalarWhereInput[] | null;
  upsert?: HackerTopicUpsertWithWhereUniqueWithoutUsersInput[] | null;
}

export interface HackerTopicUpdateOneRequiredWithoutPrimaryChallengesInput {
  create?: HackerTopicCreateWithoutPrimaryChallengesInput | null;
  connect?: HackerTopicWhereUniqueInput | null;
  update?: HackerTopicUpdateWithoutPrimaryChallengesDataInput | null;
  upsert?: HackerTopicUpsertWithoutPrimaryChallengesInput | null;
}

export interface HackerTopicUpdateOneWithoutTeamsInput {
  create?: HackerTopicCreateWithoutTeamsInput | null;
  connect?: HackerTopicWhereUniqueInput | null;
  disconnect?: boolean | null;
  delete?: boolean | null;
  update?: HackerTopicUpdateWithoutTeamsDataInput | null;
  upsert?: HackerTopicUpsertWithoutTeamsInput | null;
}

export interface HackerTopicUpdateWithWhereUniqueWithoutUsersInput {
  where: HackerTopicWhereUniqueInput;
  data: HackerTopicUpdateWithoutUsersDataInput;
}

export interface HackerTopicUpdateWithoutPrimaryChallengesDataInput {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  slackId?: string | null;
  users?: UserUpdateManyWithoutHackerTopicsInput | null;
  mentors?: MentorUpdateManyWithoutTopicsInput | null;
  teams?: TeamUpdateManyWithoutPrimaryTopicInput | null;
}

export interface HackerTopicUpdateWithoutTeamsDataInput {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  slackId?: string | null;
  users?: UserUpdateManyWithoutHackerTopicsInput | null;
  primaryChallenges?: ChallengeUpdateManyWithoutPrimaryTopicInput | null;
  mentors?: MentorUpdateManyWithoutTopicsInput | null;
}

export interface HackerTopicUpdateWithoutUsersDataInput {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  slackId?: string | null;
  primaryChallenges?: ChallengeUpdateManyWithoutPrimaryTopicInput | null;
  mentors?: MentorUpdateManyWithoutTopicsInput | null;
  teams?: TeamUpdateManyWithoutPrimaryTopicInput | null;
}

export interface HackerTopicUpsertWithWhereUniqueWithoutUsersInput {
  where: HackerTopicWhereUniqueInput;
  update: HackerTopicUpdateWithoutUsersDataInput;
  create: HackerTopicCreateWithoutUsersInput;
}

export interface HackerTopicUpsertWithoutPrimaryChallengesInput {
  update: HackerTopicUpdateWithoutPrimaryChallengesDataInput;
  create: HackerTopicCreateWithoutPrimaryChallengesInput;
}

export interface HackerTopicUpsertWithoutTeamsInput {
  update: HackerTopicUpdateWithoutTeamsDataInput;
  create: HackerTopicCreateWithoutTeamsInput;
}

export interface HackerTopicWhereInput {
  id?: StringFilter | null;
  title?: StringFilter | null;
  description?: StringFilter | null;
  users?: UserFilter | null;
  primaryChallenges?: ChallengeFilter | null;
  mentors?: MentorFilter | null;
  teams?: TeamFilter | null;
  slackId?: NullableStringFilter | null;
  AND?: HackerTopicWhereInput[] | null;
  OR?: HackerTopicWhereInput[] | null;
  NOT?: HackerTopicWhereInput[] | null;
}

export interface HackerTopicWhereUniqueInput {
  id?: string | null;
  title?: string | null;
}

export interface HackerTypeCreateManyWithoutUsersInput {
  create?: HackerTypeCreateWithoutUsersInput[] | null;
  connect?: HackerTypeWhereUniqueInput[] | null;
}

export interface HackerTypeCreateWithoutUsersInput {
  id: string;
  title: string;
  description: string;
}

export interface HackerTypeFilter {
  every?: HackerTypeWhereInput | null;
  some?: HackerTypeWhereInput | null;
  none?: HackerTypeWhereInput | null;
}

export interface HackerTypeScalarWhereInput {
  id?: StringFilter | null;
  title?: StringFilter | null;
  description?: StringFilter | null;
  users?: UserFilter | null;
  AND?: HackerTypeScalarWhereInput[] | null;
  OR?: HackerTypeScalarWhereInput[] | null;
  NOT?: HackerTypeScalarWhereInput[] | null;
}

export interface HackerTypeUpdateManyDataInput {
  id?: string | null;
  title?: string | null;
  description?: string | null;
}

export interface HackerTypeUpdateManyWithWhereNestedInput {
  where: HackerTypeScalarWhereInput;
  data: HackerTypeUpdateManyDataInput;
}

export interface HackerTypeUpdateManyWithoutUsersInput {
  create?: HackerTypeCreateWithoutUsersInput[] | null;
  connect?: HackerTypeWhereUniqueInput[] | null;
  set?: HackerTypeWhereUniqueInput[] | null;
  disconnect?: HackerTypeWhereUniqueInput[] | null;
  delete?: HackerTypeWhereUniqueInput[] | null;
  update?: HackerTypeUpdateWithWhereUniqueWithoutUsersInput[] | null;
  updateMany?: HackerTypeUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: HackerTypeScalarWhereInput[] | null;
  upsert?: HackerTypeUpsertWithWhereUniqueWithoutUsersInput[] | null;
}

export interface HackerTypeUpdateWithWhereUniqueWithoutUsersInput {
  where: HackerTypeWhereUniqueInput;
  data: HackerTypeUpdateWithoutUsersDataInput;
}

export interface HackerTypeUpdateWithoutUsersDataInput {
  id?: string | null;
  title?: string | null;
  description?: string | null;
}

export interface HackerTypeUpsertWithWhereUniqueWithoutUsersInput {
  where: HackerTypeWhereUniqueInput;
  update: HackerTypeUpdateWithoutUsersDataInput;
  create: HackerTypeCreateWithoutUsersInput;
}

export interface HackerTypeWhereInput {
  id?: StringFilter | null;
  title?: StringFilter | null;
  description?: StringFilter | null;
  users?: UserFilter | null;
  AND?: HackerTypeWhereInput[] | null;
  OR?: HackerTypeWhereInput[] | null;
  NOT?: HackerTypeWhereInput[] | null;
}

export interface HackerTypeWhereUniqueInput {
  id?: string | null;
  title?: string | null;
}

export interface ImageCreateManyWithoutProjectInput {
  create?: ImageCreateWithoutProjectInput[] | null;
  connect?: ImageWhereUniqueInput[] | null;
}

export interface ImageCreateOneWithoutUserInput {
  create?: ImageCreateWithoutUserInput | null;
  connect?: ImageWhereUniqueInput | null;
}

export interface ImageCreateWithoutProjectInput {
  id?: string | null;
  base64: string;
  user?: UserCreateOneWithoutProfilePhotoInput | null;
}

export interface ImageCreateWithoutUserInput {
  id?: string | null;
  base64: string;
  project?: ProjectCreateOneWithoutImagesInput | null;
}

export interface ImageFilter {
  every?: ImageWhereInput | null;
  some?: ImageWhereInput | null;
  none?: ImageWhereInput | null;
}

export interface ImageScalarWhereInput {
  id?: UUIDFilter | null;
  base64?: StringFilter | null;
  projectId?: NullableStringFilter | null;
  AND?: ImageScalarWhereInput[] | null;
  OR?: ImageScalarWhereInput[] | null;
  NOT?: ImageScalarWhereInput[] | null;
}

export interface ImageUpdateManyDataInput {
  id?: string | null;
  base64?: string | null;
}

export interface ImageUpdateManyWithWhereNestedInput {
  where: ImageScalarWhereInput;
  data: ImageUpdateManyDataInput;
}

export interface ImageUpdateManyWithoutProjectInput {
  create?: ImageCreateWithoutProjectInput[] | null;
  connect?: ImageWhereUniqueInput[] | null;
  set?: ImageWhereUniqueInput[] | null;
  disconnect?: ImageWhereUniqueInput[] | null;
  delete?: ImageWhereUniqueInput[] | null;
  update?: ImageUpdateWithWhereUniqueWithoutProjectInput[] | null;
  updateMany?: ImageUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: ImageScalarWhereInput[] | null;
  upsert?: ImageUpsertWithWhereUniqueWithoutProjectInput[] | null;
}

export interface ImageUpdateOneWithoutUserInput {
  create?: ImageCreateWithoutUserInput | null;
  connect?: ImageWhereUniqueInput | null;
  disconnect?: boolean | null;
  delete?: boolean | null;
  update?: ImageUpdateWithoutUserDataInput | null;
  upsert?: ImageUpsertWithoutUserInput | null;
}

export interface ImageUpdateWithWhereUniqueWithoutProjectInput {
  where: ImageWhereUniqueInput;
  data: ImageUpdateWithoutProjectDataInput;
}

export interface ImageUpdateWithoutProjectDataInput {
  id?: string | null;
  base64?: string | null;
  user?: UserUpdateOneWithoutProfilePhotoInput | null;
}

export interface ImageUpdateWithoutUserDataInput {
  id?: string | null;
  base64?: string | null;
  project?: ProjectUpdateOneWithoutImagesInput | null;
}

export interface ImageUpsertWithWhereUniqueWithoutProjectInput {
  where: ImageWhereUniqueInput;
  update: ImageUpdateWithoutProjectDataInput;
  create: ImageCreateWithoutProjectInput;
}

export interface ImageUpsertWithoutUserInput {
  update: ImageUpdateWithoutUserDataInput;
  create: ImageCreateWithoutUserInput;
}

export interface ImageWhereInput {
  id?: UUIDFilter | null;
  base64?: StringFilter | null;
  projectId?: NullableStringFilter | null;
  AND?: ImageWhereInput[] | null;
  OR?: ImageWhereInput[] | null;
  NOT?: ImageWhereInput[] | null;
  user?: UserWhereInput | null;
  project?: ProjectWhereInput | null;
}

export interface ImageWhereUniqueInput {
  id?: string | null;
}

export interface IntFilter {
  equals?: number | null;
  not?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
}

export interface MentorCreateManyWithoutTopicsInput {
  create?: MentorCreateWithoutTopicsInput[] | null;
  connect?: MentorWhereUniqueInput[] | null;
}

export interface MentorCreateWithoutTopicsInput {
  id?: string | null;
  email: string;
  name: string;
  skills: string;
  linkedin: string;
  languages: string;
}

export interface MentorFilter {
  every?: MentorWhereInput | null;
  some?: MentorWhereInput | null;
  none?: MentorWhereInput | null;
}

export interface MentorScalarWhereInput {
  id?: UUIDFilter | null;
  email?: StringFilter | null;
  name?: StringFilter | null;
  skills?: StringFilter | null;
  linkedin?: StringFilter | null;
  languages?: StringFilter | null;
  topics?: HackerTopicFilter | null;
  AND?: MentorScalarWhereInput[] | null;
  OR?: MentorScalarWhereInput[] | null;
  NOT?: MentorScalarWhereInput[] | null;
}

export interface MentorUpdateManyDataInput {
  id?: string | null;
  email?: string | null;
  name?: string | null;
  skills?: string | null;
  linkedin?: string | null;
  languages?: string | null;
}

export interface MentorUpdateManyWithWhereNestedInput {
  where: MentorScalarWhereInput;
  data: MentorUpdateManyDataInput;
}

export interface MentorUpdateManyWithoutTopicsInput {
  create?: MentorCreateWithoutTopicsInput[] | null;
  connect?: MentorWhereUniqueInput[] | null;
  set?: MentorWhereUniqueInput[] | null;
  disconnect?: MentorWhereUniqueInput[] | null;
  delete?: MentorWhereUniqueInput[] | null;
  update?: MentorUpdateWithWhereUniqueWithoutTopicsInput[] | null;
  updateMany?: MentorUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: MentorScalarWhereInput[] | null;
  upsert?: MentorUpsertWithWhereUniqueWithoutTopicsInput[] | null;
}

export interface MentorUpdateWithWhereUniqueWithoutTopicsInput {
  where: MentorWhereUniqueInput;
  data: MentorUpdateWithoutTopicsDataInput;
}

export interface MentorUpdateWithoutTopicsDataInput {
  id?: string | null;
  email?: string | null;
  name?: string | null;
  skills?: string | null;
  linkedin?: string | null;
  languages?: string | null;
}

export interface MentorUpsertWithWhereUniqueWithoutTopicsInput {
  where: MentorWhereUniqueInput;
  update: MentorUpdateWithoutTopicsDataInput;
  create: MentorCreateWithoutTopicsInput;
}

export interface MentorWhereInput {
  id?: UUIDFilter | null;
  email?: StringFilter | null;
  name?: StringFilter | null;
  skills?: StringFilter | null;
  linkedin?: StringFilter | null;
  languages?: StringFilter | null;
  topics?: HackerTopicFilter | null;
  AND?: MentorWhereInput[] | null;
  OR?: MentorWhereInput[] | null;
  NOT?: MentorWhereInput[] | null;
}

export interface MentorWhereUniqueInput {
  id?: string | null;
  email?: string | null;
}

export interface NullableBooleanFilter {
  equals?: boolean | null;
  not?: boolean | null;
}

export interface NullableStringFilter {
  equals?: string | null;
  not?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
}

export interface ProjectCreateInput {
  id?: string | null;
  title: string;
  tagline: string;
  description?: string | null;
  technologiesUsed?: string | null;
  obstacles?: string | null;
  accomplishments?: string | null;
  learnings?: string | null;
  nextSteps?: string | null;
  videoUrl?: string | null;
  relevanceToHackathon?: string | null;
  relevanceToChallenge?: string | null;
  longTermImpact?: string | null;
  progressDuringHackathon?: string | null;
  valueAdded?: string | null;
  isPublished?: boolean | null;
  urls?: ProjectCreateurlsInput | null;
  thumbnail?: ThumbnailCreateOneWithoutProjectInput | null;
  images?: ImageCreateManyWithoutProjectInput | null;
  challenge?: ChallengeCreateOneWithoutProjectsInput | null;
  team?: TeamCreateOneWithoutProjectsInput | null;
}

export interface ProjectCreateManyWithoutChallengeInput {
  create?: ProjectCreateWithoutChallengeInput[] | null;
  connect?: ProjectWhereUniqueInput[] | null;
}

export interface ProjectCreateManyWithoutTeamInput {
  create?: ProjectCreateWithoutTeamInput[] | null;
  connect?: ProjectWhereUniqueInput[] | null;
}

export interface ProjectCreateOneWithoutImagesInput {
  create?: ProjectCreateWithoutImagesInput | null;
  connect?: ProjectWhereUniqueInput | null;
}

export interface ProjectCreateWithoutChallengeInput {
  id?: string | null;
  title: string;
  tagline: string;
  description?: string | null;
  technologiesUsed?: string | null;
  obstacles?: string | null;
  accomplishments?: string | null;
  learnings?: string | null;
  nextSteps?: string | null;
  videoUrl?: string | null;
  relevanceToHackathon?: string | null;
  relevanceToChallenge?: string | null;
  longTermImpact?: string | null;
  progressDuringHackathon?: string | null;
  valueAdded?: string | null;
  isPublished?: boolean | null;
  urls?: ProjectCreateurlsInput | null;
  thumbnail?: ThumbnailCreateOneWithoutProjectInput | null;
  images?: ImageCreateManyWithoutProjectInput | null;
  team?: TeamCreateOneWithoutProjectsInput | null;
}

export interface ProjectCreateWithoutImagesInput {
  id?: string | null;
  title: string;
  tagline: string;
  description?: string | null;
  technologiesUsed?: string | null;
  obstacles?: string | null;
  accomplishments?: string | null;
  learnings?: string | null;
  nextSteps?: string | null;
  videoUrl?: string | null;
  relevanceToHackathon?: string | null;
  relevanceToChallenge?: string | null;
  longTermImpact?: string | null;
  progressDuringHackathon?: string | null;
  valueAdded?: string | null;
  isPublished?: boolean | null;
  urls?: ProjectCreateurlsInput | null;
  thumbnail?: ThumbnailCreateOneWithoutProjectInput | null;
  challenge?: ChallengeCreateOneWithoutProjectsInput | null;
  team?: TeamCreateOneWithoutProjectsInput | null;
}

export interface ProjectCreateWithoutTeamInput {
  id?: string | null;
  title: string;
  tagline: string;
  description?: string | null;
  technologiesUsed?: string | null;
  obstacles?: string | null;
  accomplishments?: string | null;
  learnings?: string | null;
  nextSteps?: string | null;
  videoUrl?: string | null;
  relevanceToHackathon?: string | null;
  relevanceToChallenge?: string | null;
  longTermImpact?: string | null;
  progressDuringHackathon?: string | null;
  valueAdded?: string | null;
  isPublished?: boolean | null;
  urls?: ProjectCreateurlsInput | null;
  thumbnail?: ThumbnailCreateOneWithoutProjectInput | null;
  images?: ImageCreateManyWithoutProjectInput | null;
  challenge?: ChallengeCreateOneWithoutProjectsInput | null;
}

export interface ProjectCreateurlsInput {
  set?: string[] | null;
}

export interface ProjectFilter {
  every?: ProjectWhereInput | null;
  some?: ProjectWhereInput | null;
  none?: ProjectWhereInput | null;
}

export interface ProjectScalarWhereInput {
  id?: UUIDFilter | null;
  title?: StringFilter | null;
  tagline?: StringFilter | null;
  thumbnailId?: NullableStringFilter | null;
  description?: NullableStringFilter | null;
  technologiesUsed?: NullableStringFilter | null;
  obstacles?: NullableStringFilter | null;
  accomplishments?: NullableStringFilter | null;
  learnings?: NullableStringFilter | null;
  nextSteps?: NullableStringFilter | null;
  videoUrl?: NullableStringFilter | null;
  relevanceToHackathon?: NullableStringFilter | null;
  relevanceToChallenge?: NullableStringFilter | null;
  longTermImpact?: NullableStringFilter | null;
  progressDuringHackathon?: NullableStringFilter | null;
  valueAdded?: NullableStringFilter | null;
  images?: ImageFilter | null;
  challengeId?: NullableStringFilter | null;
  teamId?: NullableStringFilter | null;
  isPublished?: BooleanFilter | null;
  AND?: ProjectScalarWhereInput[] | null;
  OR?: ProjectScalarWhereInput[] | null;
  NOT?: ProjectScalarWhereInput[] | null;
}

export interface ProjectUpdateInput {
  id?: string | null;
  title?: string | null;
  tagline?: string | null;
  description?: string | null;
  technologiesUsed?: string | null;
  obstacles?: string | null;
  accomplishments?: string | null;
  learnings?: string | null;
  nextSteps?: string | null;
  videoUrl?: string | null;
  relevanceToHackathon?: string | null;
  relevanceToChallenge?: string | null;
  longTermImpact?: string | null;
  progressDuringHackathon?: string | null;
  valueAdded?: string | null;
  isPublished?: boolean | null;
  urls?: ProjectUpdateurlsInput | null;
  thumbnail?: ThumbnailUpdateOneWithoutProjectInput | null;
  images?: ImageUpdateManyWithoutProjectInput | null;
  challenge?: ChallengeUpdateOneWithoutProjectsInput | null;
  team?: TeamUpdateOneWithoutProjectsInput | null;
}

export interface ProjectUpdateManyDataInput {
  id?: string | null;
  title?: string | null;
  tagline?: string | null;
  description?: string | null;
  technologiesUsed?: string | null;
  obstacles?: string | null;
  accomplishments?: string | null;
  learnings?: string | null;
  nextSteps?: string | null;
  videoUrl?: string | null;
  relevanceToHackathon?: string | null;
  relevanceToChallenge?: string | null;
  longTermImpact?: string | null;
  progressDuringHackathon?: string | null;
  valueAdded?: string | null;
  isPublished?: boolean | null;
  urls?: ProjectUpdateurlsInput | null;
}

export interface ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput;
  data: ProjectUpdateManyDataInput;
}

export interface ProjectUpdateManyWithoutChallengeInput {
  create?: ProjectCreateWithoutChallengeInput[] | null;
  connect?: ProjectWhereUniqueInput[] | null;
  set?: ProjectWhereUniqueInput[] | null;
  disconnect?: ProjectWhereUniqueInput[] | null;
  delete?: ProjectWhereUniqueInput[] | null;
  update?: ProjectUpdateWithWhereUniqueWithoutChallengeInput[] | null;
  updateMany?: ProjectUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: ProjectScalarWhereInput[] | null;
  upsert?: ProjectUpsertWithWhereUniqueWithoutChallengeInput[] | null;
}

export interface ProjectUpdateManyWithoutTeamInput {
  create?: ProjectCreateWithoutTeamInput[] | null;
  connect?: ProjectWhereUniqueInput[] | null;
  set?: ProjectWhereUniqueInput[] | null;
  disconnect?: ProjectWhereUniqueInput[] | null;
  delete?: ProjectWhereUniqueInput[] | null;
  update?: ProjectUpdateWithWhereUniqueWithoutTeamInput[] | null;
  updateMany?: ProjectUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: ProjectScalarWhereInput[] | null;
  upsert?: ProjectUpsertWithWhereUniqueWithoutTeamInput[] | null;
}

export interface ProjectUpdateOneWithoutImagesInput {
  create?: ProjectCreateWithoutImagesInput | null;
  connect?: ProjectWhereUniqueInput | null;
  disconnect?: boolean | null;
  delete?: boolean | null;
  update?: ProjectUpdateWithoutImagesDataInput | null;
  upsert?: ProjectUpsertWithoutImagesInput | null;
}

export interface ProjectUpdateWithWhereUniqueWithoutChallengeInput {
  where: ProjectWhereUniqueInput;
  data: ProjectUpdateWithoutChallengeDataInput;
}

export interface ProjectUpdateWithWhereUniqueWithoutTeamInput {
  where: ProjectWhereUniqueInput;
  data: ProjectUpdateWithoutTeamDataInput;
}

export interface ProjectUpdateWithoutChallengeDataInput {
  id?: string | null;
  title?: string | null;
  tagline?: string | null;
  description?: string | null;
  technologiesUsed?: string | null;
  obstacles?: string | null;
  accomplishments?: string | null;
  learnings?: string | null;
  nextSteps?: string | null;
  videoUrl?: string | null;
  relevanceToHackathon?: string | null;
  relevanceToChallenge?: string | null;
  longTermImpact?: string | null;
  progressDuringHackathon?: string | null;
  valueAdded?: string | null;
  isPublished?: boolean | null;
  urls?: ProjectUpdateurlsInput | null;
  thumbnail?: ThumbnailUpdateOneWithoutProjectInput | null;
  images?: ImageUpdateManyWithoutProjectInput | null;
  team?: TeamUpdateOneWithoutProjectsInput | null;
}

export interface ProjectUpdateWithoutImagesDataInput {
  id?: string | null;
  title?: string | null;
  tagline?: string | null;
  description?: string | null;
  technologiesUsed?: string | null;
  obstacles?: string | null;
  accomplishments?: string | null;
  learnings?: string | null;
  nextSteps?: string | null;
  videoUrl?: string | null;
  relevanceToHackathon?: string | null;
  relevanceToChallenge?: string | null;
  longTermImpact?: string | null;
  progressDuringHackathon?: string | null;
  valueAdded?: string | null;
  isPublished?: boolean | null;
  urls?: ProjectUpdateurlsInput | null;
  thumbnail?: ThumbnailUpdateOneWithoutProjectInput | null;
  challenge?: ChallengeUpdateOneWithoutProjectsInput | null;
  team?: TeamUpdateOneWithoutProjectsInput | null;
}

export interface ProjectUpdateWithoutTeamDataInput {
  id?: string | null;
  title?: string | null;
  tagline?: string | null;
  description?: string | null;
  technologiesUsed?: string | null;
  obstacles?: string | null;
  accomplishments?: string | null;
  learnings?: string | null;
  nextSteps?: string | null;
  videoUrl?: string | null;
  relevanceToHackathon?: string | null;
  relevanceToChallenge?: string | null;
  longTermImpact?: string | null;
  progressDuringHackathon?: string | null;
  valueAdded?: string | null;
  isPublished?: boolean | null;
  urls?: ProjectUpdateurlsInput | null;
  thumbnail?: ThumbnailUpdateOneWithoutProjectInput | null;
  images?: ImageUpdateManyWithoutProjectInput | null;
  challenge?: ChallengeUpdateOneWithoutProjectsInput | null;
}

export interface ProjectUpdateurlsInput {
  set?: string[] | null;
}

export interface ProjectUpsertWithWhereUniqueWithoutChallengeInput {
  where: ProjectWhereUniqueInput;
  update: ProjectUpdateWithoutChallengeDataInput;
  create: ProjectCreateWithoutChallengeInput;
}

export interface ProjectUpsertWithWhereUniqueWithoutTeamInput {
  where: ProjectWhereUniqueInput;
  update: ProjectUpdateWithoutTeamDataInput;
  create: ProjectCreateWithoutTeamInput;
}

export interface ProjectUpsertWithoutImagesInput {
  update: ProjectUpdateWithoutImagesDataInput;
  create: ProjectCreateWithoutImagesInput;
}

export interface ProjectWhereInput {
  id?: UUIDFilter | null;
  title?: StringFilter | null;
  tagline?: StringFilter | null;
  thumbnailId?: NullableStringFilter | null;
  description?: NullableStringFilter | null;
  technologiesUsed?: NullableStringFilter | null;
  obstacles?: NullableStringFilter | null;
  accomplishments?: NullableStringFilter | null;
  learnings?: NullableStringFilter | null;
  nextSteps?: NullableStringFilter | null;
  videoUrl?: NullableStringFilter | null;
  relevanceToHackathon?: NullableStringFilter | null;
  relevanceToChallenge?: NullableStringFilter | null;
  longTermImpact?: NullableStringFilter | null;
  progressDuringHackathon?: NullableStringFilter | null;
  valueAdded?: NullableStringFilter | null;
  images?: ImageFilter | null;
  challengeId?: NullableStringFilter | null;
  teamId?: NullableStringFilter | null;
  isPublished?: BooleanFilter | null;
  AND?: ProjectWhereInput[] | null;
  OR?: ProjectWhereInput[] | null;
  NOT?: ProjectWhereInput[] | null;
  thumbnail?: ThumbnailWhereInput | null;
  challenge?: ChallengeWhereInput | null;
  team?: TeamWhereInput | null;
}

export interface ProjectWhereUniqueInput {
  id?: string | null;
}

export interface RegisterHackerInput {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  profilePhotoBase64?: string | null;
  possibleTeamMemberEmails?: string | null;
  participateInTeamBuildingSession?: boolean | null;
  linkedin?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  languages: string[];
  email: string;
  city: string;
  hackerSkills: string[];
  hackerTypes: string[];
  hackerTopics: string[];
}

export interface StringFilter {
  equals?: string | null;
  not?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
}

export interface TeamChallengeVoteCreateManyWithoutChallengeInput {
  create?: TeamChallengeVoteCreateWithoutChallengeInput[] | null;
  connect?: TeamChallengeVoteWhereUniqueInput[] | null;
}

export interface TeamChallengeVoteCreateManyWithoutTeamInput {
  create?: TeamChallengeVoteCreateWithoutTeamInput[] | null;
  connect?: TeamChallengeVoteWhereUniqueInput[] | null;
}

export interface TeamChallengeVoteCreateManyWithoutUserInput {
  create?: TeamChallengeVoteCreateWithoutUserInput[] | null;
  connect?: TeamChallengeVoteWhereUniqueInput[] | null;
}

export interface TeamChallengeVoteCreateWithoutChallengeInput {
  id?: string | null;
  score: number;
  user: UserCreateOneWithoutTeamChallengeVotesInput;
  team?: TeamCreateOneWithoutChallengeVotesInput | null;
}

export interface TeamChallengeVoteCreateWithoutTeamInput {
  id?: string | null;
  score: number;
  user: UserCreateOneWithoutTeamChallengeVotesInput;
  challenge: ChallengeCreateOneWithoutTeamChallengeVotesInput;
}

export interface TeamChallengeVoteCreateWithoutUserInput {
  id?: string | null;
  score: number;
  challenge: ChallengeCreateOneWithoutTeamChallengeVotesInput;
  team?: TeamCreateOneWithoutChallengeVotesInput | null;
}

export interface TeamChallengeVoteFilter {
  every?: TeamChallengeVoteWhereInput | null;
  some?: TeamChallengeVoteWhereInput | null;
  none?: TeamChallengeVoteWhereInput | null;
}

export interface TeamChallengeVoteScalarWhereInput {
  id?: UUIDFilter | null;
  userId?: StringFilter | null;
  challengeId?: StringFilter | null;
  teamId?: NullableStringFilter | null;
  score?: IntFilter | null;
  AND?: TeamChallengeVoteScalarWhereInput[] | null;
  OR?: TeamChallengeVoteScalarWhereInput[] | null;
  NOT?: TeamChallengeVoteScalarWhereInput[] | null;
}

export interface TeamChallengeVoteUpdateManyDataInput {
  id?: string | null;
  score?: number | null;
}

export interface TeamChallengeVoteUpdateManyWithWhereNestedInput {
  where: TeamChallengeVoteScalarWhereInput;
  data: TeamChallengeVoteUpdateManyDataInput;
}

export interface TeamChallengeVoteUpdateManyWithoutChallengeInput {
  create?: TeamChallengeVoteCreateWithoutChallengeInput[] | null;
  connect?: TeamChallengeVoteWhereUniqueInput[] | null;
  set?: TeamChallengeVoteWhereUniqueInput[] | null;
  disconnect?: TeamChallengeVoteWhereUniqueInput[] | null;
  delete?: TeamChallengeVoteWhereUniqueInput[] | null;
  update?: TeamChallengeVoteUpdateWithWhereUniqueWithoutChallengeInput[] | null;
  updateMany?: TeamChallengeVoteUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: TeamChallengeVoteScalarWhereInput[] | null;
  upsert?: TeamChallengeVoteUpsertWithWhereUniqueWithoutChallengeInput[] | null;
}

export interface TeamChallengeVoteUpdateManyWithoutTeamInput {
  create?: TeamChallengeVoteCreateWithoutTeamInput[] | null;
  connect?: TeamChallengeVoteWhereUniqueInput[] | null;
  set?: TeamChallengeVoteWhereUniqueInput[] | null;
  disconnect?: TeamChallengeVoteWhereUniqueInput[] | null;
  delete?: TeamChallengeVoteWhereUniqueInput[] | null;
  update?: TeamChallengeVoteUpdateWithWhereUniqueWithoutTeamInput[] | null;
  updateMany?: TeamChallengeVoteUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: TeamChallengeVoteScalarWhereInput[] | null;
  upsert?: TeamChallengeVoteUpsertWithWhereUniqueWithoutTeamInput[] | null;
}

export interface TeamChallengeVoteUpdateManyWithoutUserInput {
  create?: TeamChallengeVoteCreateWithoutUserInput[] | null;
  connect?: TeamChallengeVoteWhereUniqueInput[] | null;
  set?: TeamChallengeVoteWhereUniqueInput[] | null;
  disconnect?: TeamChallengeVoteWhereUniqueInput[] | null;
  delete?: TeamChallengeVoteWhereUniqueInput[] | null;
  update?: TeamChallengeVoteUpdateWithWhereUniqueWithoutUserInput[] | null;
  updateMany?: TeamChallengeVoteUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: TeamChallengeVoteScalarWhereInput[] | null;
  upsert?: TeamChallengeVoteUpsertWithWhereUniqueWithoutUserInput[] | null;
}

export interface TeamChallengeVoteUpdateWithWhereUniqueWithoutChallengeInput {
  where: TeamChallengeVoteWhereUniqueInput;
  data: TeamChallengeVoteUpdateWithoutChallengeDataInput;
}

export interface TeamChallengeVoteUpdateWithWhereUniqueWithoutTeamInput {
  where: TeamChallengeVoteWhereUniqueInput;
  data: TeamChallengeVoteUpdateWithoutTeamDataInput;
}

export interface TeamChallengeVoteUpdateWithWhereUniqueWithoutUserInput {
  where: TeamChallengeVoteWhereUniqueInput;
  data: TeamChallengeVoteUpdateWithoutUserDataInput;
}

export interface TeamChallengeVoteUpdateWithoutChallengeDataInput {
  id?: string | null;
  score?: number | null;
  user?: UserUpdateOneRequiredWithoutTeamChallengeVotesInput | null;
  team?: TeamUpdateOneWithoutChallengeVotesInput | null;
}

export interface TeamChallengeVoteUpdateWithoutTeamDataInput {
  id?: string | null;
  score?: number | null;
  user?: UserUpdateOneRequiredWithoutTeamChallengeVotesInput | null;
  challenge?: ChallengeUpdateOneRequiredWithoutTeamChallengeVotesInput | null;
}

export interface TeamChallengeVoteUpdateWithoutUserDataInput {
  id?: string | null;
  score?: number | null;
  challenge?: ChallengeUpdateOneRequiredWithoutTeamChallengeVotesInput | null;
  team?: TeamUpdateOneWithoutChallengeVotesInput | null;
}

export interface TeamChallengeVoteUpsertWithWhereUniqueWithoutChallengeInput {
  where: TeamChallengeVoteWhereUniqueInput;
  update: TeamChallengeVoteUpdateWithoutChallengeDataInput;
  create: TeamChallengeVoteCreateWithoutChallengeInput;
}

export interface TeamChallengeVoteUpsertWithWhereUniqueWithoutTeamInput {
  where: TeamChallengeVoteWhereUniqueInput;
  update: TeamChallengeVoteUpdateWithoutTeamDataInput;
  create: TeamChallengeVoteCreateWithoutTeamInput;
}

export interface TeamChallengeVoteUpsertWithWhereUniqueWithoutUserInput {
  where: TeamChallengeVoteWhereUniqueInput;
  update: TeamChallengeVoteUpdateWithoutUserDataInput;
  create: TeamChallengeVoteCreateWithoutUserInput;
}

export interface TeamChallengeVoteWhereInput {
  id?: UUIDFilter | null;
  userId?: StringFilter | null;
  challengeId?: StringFilter | null;
  teamId?: NullableStringFilter | null;
  score?: IntFilter | null;
  AND?: TeamChallengeVoteWhereInput[] | null;
  OR?: TeamChallengeVoteWhereInput[] | null;
  NOT?: TeamChallengeVoteWhereInput[] | null;
  user?: UserWhereInput | null;
  challenge?: ChallengeWhereInput | null;
  team?: TeamWhereInput | null;
}

export interface TeamChallengeVoteWhereUniqueInput {
  id?: string | null;
  userId_challengeId_teamId?: UserIdChallengeIdTeamIdCompoundUniqueInput | null;
}

export interface TeamCreateManyWithoutChallengeSelectedInput {
  create?: TeamCreateWithoutChallengeSelectedInput[] | null;
  connect?: TeamWhereUniqueInput[] | null;
}

export interface TeamCreateManyWithoutChallengesToSelectInput {
  create?: TeamCreateWithoutChallengesToSelectInput[] | null;
  connect?: TeamWhereUniqueInput[] | null;
}

export interface TeamCreateManyWithoutPrimaryTopicInput {
  create?: TeamCreateWithoutPrimaryTopicInput[] | null;
  connect?: TeamWhereUniqueInput[] | null;
}

export interface TeamCreateOneWithoutChallengeVotesInput {
  create?: TeamCreateWithoutChallengeVotesInput | null;
  connect?: TeamWhereUniqueInput | null;
}

export interface TeamCreateOneWithoutMembersInput {
  create?: TeamCreateWithoutMembersInput | null;
  connect?: TeamWhereUniqueInput | null;
}

export interface TeamCreateOneWithoutProjectsInput {
  create?: TeamCreateWithoutProjectsInput | null;
  connect?: TeamWhereUniqueInput | null;
}

export interface TeamCreateWithoutChallengeSelectedInput {
  id: string;
  slackId?: string | null;
  tags?: TeamCreatetagsInput | null;
  challengesToSelect?: ChallengeCreateManyWithoutTeamsThatCanSelectThisChallengeInput | null;
  members?: UserCreateManyWithoutTeamInput | null;
  projects?: ProjectCreateManyWithoutTeamInput | null;
  challengeVotes?: TeamChallengeVoteCreateManyWithoutTeamInput | null;
  primaryTopic?: HackerTopicCreateOneWithoutTeamsInput | null;
}

export interface TeamCreateWithoutChallengeVotesInput {
  id: string;
  slackId?: string | null;
  tags?: TeamCreatetagsInput | null;
  challengesToSelect?: ChallengeCreateManyWithoutTeamsThatCanSelectThisChallengeInput | null;
  members?: UserCreateManyWithoutTeamInput | null;
  challengeSelected?: ChallengeCreateOneWithoutTeamsThatSelectedThisChallengeInput | null;
  projects?: ProjectCreateManyWithoutTeamInput | null;
  primaryTopic?: HackerTopicCreateOneWithoutTeamsInput | null;
}

export interface TeamCreateWithoutChallengesToSelectInput {
  id: string;
  slackId?: string | null;
  tags?: TeamCreatetagsInput | null;
  members?: UserCreateManyWithoutTeamInput | null;
  challengeSelected?: ChallengeCreateOneWithoutTeamsThatSelectedThisChallengeInput | null;
  projects?: ProjectCreateManyWithoutTeamInput | null;
  challengeVotes?: TeamChallengeVoteCreateManyWithoutTeamInput | null;
  primaryTopic?: HackerTopicCreateOneWithoutTeamsInput | null;
}

export interface TeamCreateWithoutMembersInput {
  id: string;
  slackId?: string | null;
  tags?: TeamCreatetagsInput | null;
  challengesToSelect?: ChallengeCreateManyWithoutTeamsThatCanSelectThisChallengeInput | null;
  challengeSelected?: ChallengeCreateOneWithoutTeamsThatSelectedThisChallengeInput | null;
  projects?: ProjectCreateManyWithoutTeamInput | null;
  challengeVotes?: TeamChallengeVoteCreateManyWithoutTeamInput | null;
  primaryTopic?: HackerTopicCreateOneWithoutTeamsInput | null;
}

export interface TeamCreateWithoutPrimaryTopicInput {
  id: string;
  slackId?: string | null;
  tags?: TeamCreatetagsInput | null;
  challengesToSelect?: ChallengeCreateManyWithoutTeamsThatCanSelectThisChallengeInput | null;
  members?: UserCreateManyWithoutTeamInput | null;
  challengeSelected?: ChallengeCreateOneWithoutTeamsThatSelectedThisChallengeInput | null;
  projects?: ProjectCreateManyWithoutTeamInput | null;
  challengeVotes?: TeamChallengeVoteCreateManyWithoutTeamInput | null;
}

export interface TeamCreateWithoutProjectsInput {
  id: string;
  slackId?: string | null;
  tags?: TeamCreatetagsInput | null;
  challengesToSelect?: ChallengeCreateManyWithoutTeamsThatCanSelectThisChallengeInput | null;
  members?: UserCreateManyWithoutTeamInput | null;
  challengeSelected?: ChallengeCreateOneWithoutTeamsThatSelectedThisChallengeInput | null;
  challengeVotes?: TeamChallengeVoteCreateManyWithoutTeamInput | null;
  primaryTopic?: HackerTopicCreateOneWithoutTeamsInput | null;
}

export interface TeamCreatetagsInput {
  set?: string[] | null;
}

export interface TeamFilter {
  every?: TeamWhereInput | null;
  some?: TeamWhereInput | null;
  none?: TeamWhereInput | null;
}

export interface TeamScalarWhereInput {
  id?: StringFilter | null;
  challengesToSelect?: ChallengeFilter | null;
  members?: UserFilter | null;
  challengeSelectedId?: NullableStringFilter | null;
  projects?: ProjectFilter | null;
  slackId?: NullableStringFilter | null;
  challengeVotes?: TeamChallengeVoteFilter | null;
  primaryTopicId?: NullableStringFilter | null;
  AND?: TeamScalarWhereInput[] | null;
  OR?: TeamScalarWhereInput[] | null;
  NOT?: TeamScalarWhereInput[] | null;
}

export interface TeamUpdateManyDataInput {
  id?: string | null;
  slackId?: string | null;
  tags?: TeamUpdatetagsInput | null;
}

export interface TeamUpdateManyWithWhereNestedInput {
  where: TeamScalarWhereInput;
  data: TeamUpdateManyDataInput;
}

export interface TeamUpdateManyWithoutChallengeSelectedInput {
  create?: TeamCreateWithoutChallengeSelectedInput[] | null;
  connect?: TeamWhereUniqueInput[] | null;
  set?: TeamWhereUniqueInput[] | null;
  disconnect?: TeamWhereUniqueInput[] | null;
  delete?: TeamWhereUniqueInput[] | null;
  update?: TeamUpdateWithWhereUniqueWithoutChallengeSelectedInput[] | null;
  updateMany?: TeamUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: TeamScalarWhereInput[] | null;
  upsert?: TeamUpsertWithWhereUniqueWithoutChallengeSelectedInput[] | null;
}

export interface TeamUpdateManyWithoutChallengesToSelectInput {
  create?: TeamCreateWithoutChallengesToSelectInput[] | null;
  connect?: TeamWhereUniqueInput[] | null;
  set?: TeamWhereUniqueInput[] | null;
  disconnect?: TeamWhereUniqueInput[] | null;
  delete?: TeamWhereUniqueInput[] | null;
  update?: TeamUpdateWithWhereUniqueWithoutChallengesToSelectInput[] | null;
  updateMany?: TeamUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: TeamScalarWhereInput[] | null;
  upsert?: TeamUpsertWithWhereUniqueWithoutChallengesToSelectInput[] | null;
}

export interface TeamUpdateManyWithoutPrimaryTopicInput {
  create?: TeamCreateWithoutPrimaryTopicInput[] | null;
  connect?: TeamWhereUniqueInput[] | null;
  set?: TeamWhereUniqueInput[] | null;
  disconnect?: TeamWhereUniqueInput[] | null;
  delete?: TeamWhereUniqueInput[] | null;
  update?: TeamUpdateWithWhereUniqueWithoutPrimaryTopicInput[] | null;
  updateMany?: TeamUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: TeamScalarWhereInput[] | null;
  upsert?: TeamUpsertWithWhereUniqueWithoutPrimaryTopicInput[] | null;
}

export interface TeamUpdateOneWithoutChallengeVotesInput {
  create?: TeamCreateWithoutChallengeVotesInput | null;
  connect?: TeamWhereUniqueInput | null;
  disconnect?: boolean | null;
  delete?: boolean | null;
  update?: TeamUpdateWithoutChallengeVotesDataInput | null;
  upsert?: TeamUpsertWithoutChallengeVotesInput | null;
}

export interface TeamUpdateOneWithoutMembersInput {
  create?: TeamCreateWithoutMembersInput | null;
  connect?: TeamWhereUniqueInput | null;
  disconnect?: boolean | null;
  delete?: boolean | null;
  update?: TeamUpdateWithoutMembersDataInput | null;
  upsert?: TeamUpsertWithoutMembersInput | null;
}

export interface TeamUpdateOneWithoutProjectsInput {
  create?: TeamCreateWithoutProjectsInput | null;
  connect?: TeamWhereUniqueInput | null;
  disconnect?: boolean | null;
  delete?: boolean | null;
  update?: TeamUpdateWithoutProjectsDataInput | null;
  upsert?: TeamUpsertWithoutProjectsInput | null;
}

export interface TeamUpdateWithWhereUniqueWithoutChallengeSelectedInput {
  where: TeamWhereUniqueInput;
  data: TeamUpdateWithoutChallengeSelectedDataInput;
}

export interface TeamUpdateWithWhereUniqueWithoutChallengesToSelectInput {
  where: TeamWhereUniqueInput;
  data: TeamUpdateWithoutChallengesToSelectDataInput;
}

export interface TeamUpdateWithWhereUniqueWithoutPrimaryTopicInput {
  where: TeamWhereUniqueInput;
  data: TeamUpdateWithoutPrimaryTopicDataInput;
}

export interface TeamUpdateWithoutChallengeSelectedDataInput {
  id?: string | null;
  slackId?: string | null;
  tags?: TeamUpdatetagsInput | null;
  challengesToSelect?: ChallengeUpdateManyWithoutTeamsThatCanSelectThisChallengeInput | null;
  members?: UserUpdateManyWithoutTeamInput | null;
  projects?: ProjectUpdateManyWithoutTeamInput | null;
  challengeVotes?: TeamChallengeVoteUpdateManyWithoutTeamInput | null;
  primaryTopic?: HackerTopicUpdateOneWithoutTeamsInput | null;
}

export interface TeamUpdateWithoutChallengeVotesDataInput {
  id?: string | null;
  slackId?: string | null;
  tags?: TeamUpdatetagsInput | null;
  challengesToSelect?: ChallengeUpdateManyWithoutTeamsThatCanSelectThisChallengeInput | null;
  members?: UserUpdateManyWithoutTeamInput | null;
  challengeSelected?: ChallengeUpdateOneWithoutTeamsThatSelectedThisChallengeInput | null;
  projects?: ProjectUpdateManyWithoutTeamInput | null;
  primaryTopic?: HackerTopicUpdateOneWithoutTeamsInput | null;
}

export interface TeamUpdateWithoutChallengesToSelectDataInput {
  id?: string | null;
  slackId?: string | null;
  tags?: TeamUpdatetagsInput | null;
  members?: UserUpdateManyWithoutTeamInput | null;
  challengeSelected?: ChallengeUpdateOneWithoutTeamsThatSelectedThisChallengeInput | null;
  projects?: ProjectUpdateManyWithoutTeamInput | null;
  challengeVotes?: TeamChallengeVoteUpdateManyWithoutTeamInput | null;
  primaryTopic?: HackerTopicUpdateOneWithoutTeamsInput | null;
}

export interface TeamUpdateWithoutMembersDataInput {
  id?: string | null;
  slackId?: string | null;
  tags?: TeamUpdatetagsInput | null;
  challengesToSelect?: ChallengeUpdateManyWithoutTeamsThatCanSelectThisChallengeInput | null;
  challengeSelected?: ChallengeUpdateOneWithoutTeamsThatSelectedThisChallengeInput | null;
  projects?: ProjectUpdateManyWithoutTeamInput | null;
  challengeVotes?: TeamChallengeVoteUpdateManyWithoutTeamInput | null;
  primaryTopic?: HackerTopicUpdateOneWithoutTeamsInput | null;
}

export interface TeamUpdateWithoutPrimaryTopicDataInput {
  id?: string | null;
  slackId?: string | null;
  tags?: TeamUpdatetagsInput | null;
  challengesToSelect?: ChallengeUpdateManyWithoutTeamsThatCanSelectThisChallengeInput | null;
  members?: UserUpdateManyWithoutTeamInput | null;
  challengeSelected?: ChallengeUpdateOneWithoutTeamsThatSelectedThisChallengeInput | null;
  projects?: ProjectUpdateManyWithoutTeamInput | null;
  challengeVotes?: TeamChallengeVoteUpdateManyWithoutTeamInput | null;
}

export interface TeamUpdateWithoutProjectsDataInput {
  id?: string | null;
  slackId?: string | null;
  tags?: TeamUpdatetagsInput | null;
  challengesToSelect?: ChallengeUpdateManyWithoutTeamsThatCanSelectThisChallengeInput | null;
  members?: UserUpdateManyWithoutTeamInput | null;
  challengeSelected?: ChallengeUpdateOneWithoutTeamsThatSelectedThisChallengeInput | null;
  challengeVotes?: TeamChallengeVoteUpdateManyWithoutTeamInput | null;
  primaryTopic?: HackerTopicUpdateOneWithoutTeamsInput | null;
}

export interface TeamUpdatetagsInput {
  set?: string[] | null;
}

export interface TeamUpsertWithWhereUniqueWithoutChallengeSelectedInput {
  where: TeamWhereUniqueInput;
  update: TeamUpdateWithoutChallengeSelectedDataInput;
  create: TeamCreateWithoutChallengeSelectedInput;
}

export interface TeamUpsertWithWhereUniqueWithoutChallengesToSelectInput {
  where: TeamWhereUniqueInput;
  update: TeamUpdateWithoutChallengesToSelectDataInput;
  create: TeamCreateWithoutChallengesToSelectInput;
}

export interface TeamUpsertWithWhereUniqueWithoutPrimaryTopicInput {
  where: TeamWhereUniqueInput;
  update: TeamUpdateWithoutPrimaryTopicDataInput;
  create: TeamCreateWithoutPrimaryTopicInput;
}

export interface TeamUpsertWithoutChallengeVotesInput {
  update: TeamUpdateWithoutChallengeVotesDataInput;
  create: TeamCreateWithoutChallengeVotesInput;
}

export interface TeamUpsertWithoutMembersInput {
  update: TeamUpdateWithoutMembersDataInput;
  create: TeamCreateWithoutMembersInput;
}

export interface TeamUpsertWithoutProjectsInput {
  update: TeamUpdateWithoutProjectsDataInput;
  create: TeamCreateWithoutProjectsInput;
}

export interface TeamWhereInput {
  id?: StringFilter | null;
  challengesToSelect?: ChallengeFilter | null;
  members?: UserFilter | null;
  challengeSelectedId?: NullableStringFilter | null;
  projects?: ProjectFilter | null;
  slackId?: NullableStringFilter | null;
  challengeVotes?: TeamChallengeVoteFilter | null;
  primaryTopicId?: NullableStringFilter | null;
  AND?: TeamWhereInput[] | null;
  OR?: TeamWhereInput[] | null;
  NOT?: TeamWhereInput[] | null;
  challengeSelected?: ChallengeWhereInput | null;
  primaryTopic?: HackerTopicWhereInput | null;
}

export interface TeamWhereUniqueInput {
  id?: string | null;
}

export interface ThumbnailCreateOneWithoutProjectInput {
  create?: ThumbnailCreateWithoutProjectInput | null;
  connect?: ThumbnailWhereUniqueInput | null;
}

export interface ThumbnailCreateWithoutProjectInput {
  id?: string | null;
  base64: string;
}

export interface ThumbnailUpdateOneWithoutProjectInput {
  create?: ThumbnailCreateWithoutProjectInput | null;
  connect?: ThumbnailWhereUniqueInput | null;
  disconnect?: boolean | null;
  delete?: boolean | null;
  update?: ThumbnailUpdateWithoutProjectDataInput | null;
  upsert?: ThumbnailUpsertWithoutProjectInput | null;
}

export interface ThumbnailUpdateWithoutProjectDataInput {
  id?: string | null;
  base64?: string | null;
}

export interface ThumbnailUpsertWithoutProjectInput {
  update: ThumbnailUpdateWithoutProjectDataInput;
  create: ThumbnailCreateWithoutProjectInput;
}

export interface ThumbnailWhereInput {
  id?: UUIDFilter | null;
  base64?: StringFilter | null;
  Project?: ProjectFilter | null;
  AND?: ThumbnailWhereInput[] | null;
  OR?: ThumbnailWhereInput[] | null;
  NOT?: ThumbnailWhereInput[] | null;
}

export interface ThumbnailWhereUniqueInput {
  id?: string | null;
}

export interface UUIDFilter {
  equals?: any | null;
  not?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  contains?: any | null;
  startsWith?: any | null;
  endsWith?: any | null;
}

export interface UserCreateManyWithoutHackerTopicsInput {
  create?: UserCreateWithoutHackerTopicsInput[] | null;
  connect?: UserWhereUniqueInput[] | null;
}

export interface UserCreateManyWithoutPreferredChallengeInput {
  create?: UserCreateWithoutPreferredChallengeInput[] | null;
  connect?: UserWhereUniqueInput[] | null;
}

export interface UserCreateManyWithoutTeamInput {
  create?: UserCreateWithoutTeamInput[] | null;
  connect?: UserWhereUniqueInput[] | null;
}

export interface UserCreateOneWithoutProfilePhotoInput {
  create?: UserCreateWithoutProfilePhotoInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserCreateOneWithoutTeamChallengeVotesInput {
  create?: UserCreateWithoutTeamChallengeVotesInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserCreateWithoutHackerTopicsInput {
  id?: string | null;
  firstname: string;
  lastname: string;
  email: string;
  emailConfirmed: boolean;
  phoneNumber: string;
  city: string;
  possibleTeamMemberEmails?: string | null;
  participateInTeamBuildingSession?: boolean | null;
  linkedin?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  devpostUrl?: string | null;
  isAnonymized?: boolean | null;
  languages?: UserCreatelanguagesInput | null;
  profilePhoto?: ImageCreateOneWithoutUserInput | null;
  hackerTypes?: HackerTypeCreateManyWithoutUsersInput | null;
  hackerSkills?: HackerSkillCreateManyWithoutUsersInput | null;
  roles?: UserRoleCreateManyWithoutUsersInput | null;
  loginTokens?: UserLoginTokenCreateManyWithoutUserInput | null;
  resumeTokens?: UserResumeTokenCreateManyWithoutUserInput | null;
  team?: TeamCreateOneWithoutMembersInput | null;
  teamChallengeVotes?: TeamChallengeVoteCreateManyWithoutUserInput | null;
  preferredChallenge?: ChallengeCreateOneWithoutUsersThatPreferThisChallengeInput | null;
}

export interface UserCreateWithoutPreferredChallengeInput {
  id?: string | null;
  firstname: string;
  lastname: string;
  email: string;
  emailConfirmed: boolean;
  phoneNumber: string;
  city: string;
  possibleTeamMemberEmails?: string | null;
  participateInTeamBuildingSession?: boolean | null;
  linkedin?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  devpostUrl?: string | null;
  isAnonymized?: boolean | null;
  languages?: UserCreatelanguagesInput | null;
  profilePhoto?: ImageCreateOneWithoutUserInput | null;
  hackerTypes?: HackerTypeCreateManyWithoutUsersInput | null;
  hackerSkills?: HackerSkillCreateManyWithoutUsersInput | null;
  hackerTopics?: HackerTopicCreateManyWithoutUsersInput | null;
  roles?: UserRoleCreateManyWithoutUsersInput | null;
  loginTokens?: UserLoginTokenCreateManyWithoutUserInput | null;
  resumeTokens?: UserResumeTokenCreateManyWithoutUserInput | null;
  team?: TeamCreateOneWithoutMembersInput | null;
  teamChallengeVotes?: TeamChallengeVoteCreateManyWithoutUserInput | null;
}

export interface UserCreateWithoutProfilePhotoInput {
  id?: string | null;
  firstname: string;
  lastname: string;
  email: string;
  emailConfirmed: boolean;
  phoneNumber: string;
  city: string;
  possibleTeamMemberEmails?: string | null;
  participateInTeamBuildingSession?: boolean | null;
  linkedin?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  devpostUrl?: string | null;
  isAnonymized?: boolean | null;
  languages?: UserCreatelanguagesInput | null;
  hackerTypes?: HackerTypeCreateManyWithoutUsersInput | null;
  hackerSkills?: HackerSkillCreateManyWithoutUsersInput | null;
  hackerTopics?: HackerTopicCreateManyWithoutUsersInput | null;
  roles?: UserRoleCreateManyWithoutUsersInput | null;
  loginTokens?: UserLoginTokenCreateManyWithoutUserInput | null;
  resumeTokens?: UserResumeTokenCreateManyWithoutUserInput | null;
  team?: TeamCreateOneWithoutMembersInput | null;
  teamChallengeVotes?: TeamChallengeVoteCreateManyWithoutUserInput | null;
  preferredChallenge?: ChallengeCreateOneWithoutUsersThatPreferThisChallengeInput | null;
}

export interface UserCreateWithoutTeamChallengeVotesInput {
  id?: string | null;
  firstname: string;
  lastname: string;
  email: string;
  emailConfirmed: boolean;
  phoneNumber: string;
  city: string;
  possibleTeamMemberEmails?: string | null;
  participateInTeamBuildingSession?: boolean | null;
  linkedin?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  devpostUrl?: string | null;
  isAnonymized?: boolean | null;
  languages?: UserCreatelanguagesInput | null;
  profilePhoto?: ImageCreateOneWithoutUserInput | null;
  hackerTypes?: HackerTypeCreateManyWithoutUsersInput | null;
  hackerSkills?: HackerSkillCreateManyWithoutUsersInput | null;
  hackerTopics?: HackerTopicCreateManyWithoutUsersInput | null;
  roles?: UserRoleCreateManyWithoutUsersInput | null;
  loginTokens?: UserLoginTokenCreateManyWithoutUserInput | null;
  resumeTokens?: UserResumeTokenCreateManyWithoutUserInput | null;
  team?: TeamCreateOneWithoutMembersInput | null;
  preferredChallenge?: ChallengeCreateOneWithoutUsersThatPreferThisChallengeInput | null;
}

export interface UserCreateWithoutTeamInput {
  id?: string | null;
  firstname: string;
  lastname: string;
  email: string;
  emailConfirmed: boolean;
  phoneNumber: string;
  city: string;
  possibleTeamMemberEmails?: string | null;
  participateInTeamBuildingSession?: boolean | null;
  linkedin?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  devpostUrl?: string | null;
  isAnonymized?: boolean | null;
  languages?: UserCreatelanguagesInput | null;
  profilePhoto?: ImageCreateOneWithoutUserInput | null;
  hackerTypes?: HackerTypeCreateManyWithoutUsersInput | null;
  hackerSkills?: HackerSkillCreateManyWithoutUsersInput | null;
  hackerTopics?: HackerTopicCreateManyWithoutUsersInput | null;
  roles?: UserRoleCreateManyWithoutUsersInput | null;
  loginTokens?: UserLoginTokenCreateManyWithoutUserInput | null;
  resumeTokens?: UserResumeTokenCreateManyWithoutUserInput | null;
  teamChallengeVotes?: TeamChallengeVoteCreateManyWithoutUserInput | null;
  preferredChallenge?: ChallengeCreateOneWithoutUsersThatPreferThisChallengeInput | null;
}

export interface UserCreatelanguagesInput {
  set?: string[] | null;
}

export interface UserFilter {
  every?: UserWhereInput | null;
  some?: UserWhereInput | null;
  none?: UserWhereInput | null;
}

export interface UserIdChallengeIdTeamIdCompoundUniqueInput {
  userId: string;
  challengeId: string;
  teamId: string;
}

export interface UserLoginTokenCreateManyWithoutUserInput {
  create?: UserLoginTokenCreateWithoutUserInput[] | null;
  connect?: UserLoginTokenWhereUniqueInput[] | null;
}

export interface UserLoginTokenCreateWithoutUserInput {
  id?: string | null;
  hashedToken: string;
  created?: any | null;
}

export interface UserLoginTokenFilter {
  every?: UserLoginTokenWhereInput | null;
  some?: UserLoginTokenWhereInput | null;
  none?: UserLoginTokenWhereInput | null;
}

export interface UserLoginTokenScalarWhereInput {
  id?: UUIDFilter | null;
  hashedToken?: StringFilter | null;
  created?: DateTimeFilter | null;
  userId?: NullableStringFilter | null;
  AND?: UserLoginTokenScalarWhereInput[] | null;
  OR?: UserLoginTokenScalarWhereInput[] | null;
  NOT?: UserLoginTokenScalarWhereInput[] | null;
}

export interface UserLoginTokenUpdateManyDataInput {
  id?: string | null;
  hashedToken?: string | null;
  created?: any | null;
}

export interface UserLoginTokenUpdateManyWithWhereNestedInput {
  where: UserLoginTokenScalarWhereInput;
  data: UserLoginTokenUpdateManyDataInput;
}

export interface UserLoginTokenUpdateManyWithoutUserInput {
  create?: UserLoginTokenCreateWithoutUserInput[] | null;
  connect?: UserLoginTokenWhereUniqueInput[] | null;
  set?: UserLoginTokenWhereUniqueInput[] | null;
  disconnect?: UserLoginTokenWhereUniqueInput[] | null;
  delete?: UserLoginTokenWhereUniqueInput[] | null;
  update?: UserLoginTokenUpdateWithWhereUniqueWithoutUserInput[] | null;
  updateMany?: UserLoginTokenUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: UserLoginTokenScalarWhereInput[] | null;
  upsert?: UserLoginTokenUpsertWithWhereUniqueWithoutUserInput[] | null;
}

export interface UserLoginTokenUpdateWithWhereUniqueWithoutUserInput {
  where: UserLoginTokenWhereUniqueInput;
  data: UserLoginTokenUpdateWithoutUserDataInput;
}

export interface UserLoginTokenUpdateWithoutUserDataInput {
  id?: string | null;
  hashedToken?: string | null;
  created?: any | null;
}

export interface UserLoginTokenUpsertWithWhereUniqueWithoutUserInput {
  where: UserLoginTokenWhereUniqueInput;
  update: UserLoginTokenUpdateWithoutUserDataInput;
  create: UserLoginTokenCreateWithoutUserInput;
}

export interface UserLoginTokenWhereInput {
  id?: UUIDFilter | null;
  hashedToken?: StringFilter | null;
  created?: DateTimeFilter | null;
  userId?: NullableStringFilter | null;
  AND?: UserLoginTokenWhereInput[] | null;
  OR?: UserLoginTokenWhereInput[] | null;
  NOT?: UserLoginTokenWhereInput[] | null;
  user?: UserWhereInput | null;
}

export interface UserLoginTokenWhereUniqueInput {
  id?: string | null;
  hashedToken?: string | null;
}

export interface UserResumeTokenCreateManyWithoutUserInput {
  create?: UserResumeTokenCreateWithoutUserInput[] | null;
  connect?: UserResumeTokenWhereUniqueInput[] | null;
}

export interface UserResumeTokenCreateWithoutUserInput {
  id?: string | null;
  hashedToken: string;
  created?: any | null;
}

export interface UserResumeTokenFilter {
  every?: UserResumeTokenWhereInput | null;
  some?: UserResumeTokenWhereInput | null;
  none?: UserResumeTokenWhereInput | null;
}

export interface UserResumeTokenScalarWhereInput {
  id?: UUIDFilter | null;
  hashedToken?: StringFilter | null;
  created?: DateTimeFilter | null;
  userId?: NullableStringFilter | null;
  AND?: UserResumeTokenScalarWhereInput[] | null;
  OR?: UserResumeTokenScalarWhereInput[] | null;
  NOT?: UserResumeTokenScalarWhereInput[] | null;
}

export interface UserResumeTokenUpdateManyDataInput {
  id?: string | null;
  hashedToken?: string | null;
  created?: any | null;
}

export interface UserResumeTokenUpdateManyWithWhereNestedInput {
  where: UserResumeTokenScalarWhereInput;
  data: UserResumeTokenUpdateManyDataInput;
}

export interface UserResumeTokenUpdateManyWithoutUserInput {
  create?: UserResumeTokenCreateWithoutUserInput[] | null;
  connect?: UserResumeTokenWhereUniqueInput[] | null;
  set?: UserResumeTokenWhereUniqueInput[] | null;
  disconnect?: UserResumeTokenWhereUniqueInput[] | null;
  delete?: UserResumeTokenWhereUniqueInput[] | null;
  update?: UserResumeTokenUpdateWithWhereUniqueWithoutUserInput[] | null;
  updateMany?: UserResumeTokenUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: UserResumeTokenScalarWhereInput[] | null;
  upsert?: UserResumeTokenUpsertWithWhereUniqueWithoutUserInput[] | null;
}

export interface UserResumeTokenUpdateWithWhereUniqueWithoutUserInput {
  where: UserResumeTokenWhereUniqueInput;
  data: UserResumeTokenUpdateWithoutUserDataInput;
}

export interface UserResumeTokenUpdateWithoutUserDataInput {
  id?: string | null;
  hashedToken?: string | null;
  created?: any | null;
}

export interface UserResumeTokenUpsertWithWhereUniqueWithoutUserInput {
  where: UserResumeTokenWhereUniqueInput;
  update: UserResumeTokenUpdateWithoutUserDataInput;
  create: UserResumeTokenCreateWithoutUserInput;
}

export interface UserResumeTokenWhereInput {
  id?: UUIDFilter | null;
  hashedToken?: StringFilter | null;
  created?: DateTimeFilter | null;
  userId?: NullableStringFilter | null;
  AND?: UserResumeTokenWhereInput[] | null;
  OR?: UserResumeTokenWhereInput[] | null;
  NOT?: UserResumeTokenWhereInput[] | null;
  user?: UserWhereInput | null;
}

export interface UserResumeTokenWhereUniqueInput {
  id?: string | null;
  hashedToken?: string | null;
}

export interface UserRoleCreateManyWithoutUsersInput {
  create?: UserRoleCreateWithoutUsersInput[] | null;
  connect?: UserRoleWhereUniqueInput[] | null;
}

export interface UserRoleCreateWithoutUsersInput {
  id: string;
}

export interface UserRoleFilter {
  every?: UserRoleWhereInput | null;
  some?: UserRoleWhereInput | null;
  none?: UserRoleWhereInput | null;
}

export interface UserRoleScalarWhereInput {
  id?: StringFilter | null;
  users?: UserFilter | null;
  AND?: UserRoleScalarWhereInput[] | null;
  OR?: UserRoleScalarWhereInput[] | null;
  NOT?: UserRoleScalarWhereInput[] | null;
}

export interface UserRoleUpdateManyDataInput {
  id?: string | null;
}

export interface UserRoleUpdateManyWithWhereNestedInput {
  where: UserRoleScalarWhereInput;
  data: UserRoleUpdateManyDataInput;
}

export interface UserRoleUpdateManyWithoutUsersInput {
  create?: UserRoleCreateWithoutUsersInput[] | null;
  connect?: UserRoleWhereUniqueInput[] | null;
  set?: UserRoleWhereUniqueInput[] | null;
  disconnect?: UserRoleWhereUniqueInput[] | null;
  delete?: UserRoleWhereUniqueInput[] | null;
  update?: UserRoleUpdateWithWhereUniqueWithoutUsersInput[] | null;
  updateMany?: UserRoleUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: UserRoleScalarWhereInput[] | null;
  upsert?: UserRoleUpsertWithWhereUniqueWithoutUsersInput[] | null;
}

export interface UserRoleUpdateWithWhereUniqueWithoutUsersInput {
  where: UserRoleWhereUniqueInput;
  data: UserRoleUpdateWithoutUsersDataInput;
}

export interface UserRoleUpdateWithoutUsersDataInput {
  id?: string | null;
}

export interface UserRoleUpsertWithWhereUniqueWithoutUsersInput {
  where: UserRoleWhereUniqueInput;
  update: UserRoleUpdateWithoutUsersDataInput;
  create: UserRoleCreateWithoutUsersInput;
}

export interface UserRoleWhereInput {
  id?: StringFilter | null;
  users?: UserFilter | null;
  AND?: UserRoleWhereInput[] | null;
  OR?: UserRoleWhereInput[] | null;
  NOT?: UserRoleWhereInput[] | null;
}

export interface UserRoleWhereUniqueInput {
  id?: string | null;
}

export interface UserScalarWhereInput {
  id?: UUIDFilter | null;
  firstname?: StringFilter | null;
  lastname?: StringFilter | null;
  profilePhotoId?: NullableStringFilter | null;
  email?: StringFilter | null;
  emailConfirmed?: BooleanFilter | null;
  phoneNumber?: StringFilter | null;
  city?: StringFilter | null;
  hackerTypes?: HackerTypeFilter | null;
  hackerSkills?: HackerSkillFilter | null;
  hackerTopics?: HackerTopicFilter | null;
  roles?: UserRoleFilter | null;
  loginTokens?: UserLoginTokenFilter | null;
  resumeTokens?: UserResumeTokenFilter | null;
  possibleTeamMemberEmails?: NullableStringFilter | null;
  participateInTeamBuildingSession?: NullableBooleanFilter | null;
  linkedin?: NullableStringFilter | null;
  instagram?: NullableStringFilter | null;
  facebook?: NullableStringFilter | null;
  twitter?: NullableStringFilter | null;
  teamId?: NullableStringFilter | null;
  teamChallengeVotes?: TeamChallengeVoteFilter | null;
  devpostUrl?: NullableStringFilter | null;
  isAnonymized?: BooleanFilter | null;
  preferredChallengeId?: NullableStringFilter | null;
  AND?: UserScalarWhereInput[] | null;
  OR?: UserScalarWhereInput[] | null;
  NOT?: UserScalarWhereInput[] | null;
}

export interface UserUpdateManyDataInput {
  id?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  emailConfirmed?: boolean | null;
  phoneNumber?: string | null;
  city?: string | null;
  possibleTeamMemberEmails?: string | null;
  participateInTeamBuildingSession?: boolean | null;
  linkedin?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  devpostUrl?: string | null;
  isAnonymized?: boolean | null;
  languages?: UserUpdatelanguagesInput | null;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
}

export interface UserUpdateManyWithoutHackerTopicsInput {
  create?: UserCreateWithoutHackerTopicsInput[] | null;
  connect?: UserWhereUniqueInput[] | null;
  set?: UserWhereUniqueInput[] | null;
  disconnect?: UserWhereUniqueInput[] | null;
  delete?: UserWhereUniqueInput[] | null;
  update?: UserUpdateWithWhereUniqueWithoutHackerTopicsInput[] | null;
  updateMany?: UserUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: UserScalarWhereInput[] | null;
  upsert?: UserUpsertWithWhereUniqueWithoutHackerTopicsInput[] | null;
}

export interface UserUpdateManyWithoutPreferredChallengeInput {
  create?: UserCreateWithoutPreferredChallengeInput[] | null;
  connect?: UserWhereUniqueInput[] | null;
  set?: UserWhereUniqueInput[] | null;
  disconnect?: UserWhereUniqueInput[] | null;
  delete?: UserWhereUniqueInput[] | null;
  update?: UserUpdateWithWhereUniqueWithoutPreferredChallengeInput[] | null;
  updateMany?: UserUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: UserScalarWhereInput[] | null;
  upsert?: UserUpsertWithWhereUniqueWithoutPreferredChallengeInput[] | null;
}

export interface UserUpdateManyWithoutTeamInput {
  create?: UserCreateWithoutTeamInput[] | null;
  connect?: UserWhereUniqueInput[] | null;
  set?: UserWhereUniqueInput[] | null;
  disconnect?: UserWhereUniqueInput[] | null;
  delete?: UserWhereUniqueInput[] | null;
  update?: UserUpdateWithWhereUniqueWithoutTeamInput[] | null;
  updateMany?: UserUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: UserScalarWhereInput[] | null;
  upsert?: UserUpsertWithWhereUniqueWithoutTeamInput[] | null;
}

export interface UserUpdateOneRequiredWithoutTeamChallengeVotesInput {
  create?: UserCreateWithoutTeamChallengeVotesInput | null;
  connect?: UserWhereUniqueInput | null;
  update?: UserUpdateWithoutTeamChallengeVotesDataInput | null;
  upsert?: UserUpsertWithoutTeamChallengeVotesInput | null;
}

export interface UserUpdateOneWithoutProfilePhotoInput {
  create?: UserCreateWithoutProfilePhotoInput | null;
  connect?: UserWhereUniqueInput | null;
  disconnect?: boolean | null;
  delete?: boolean | null;
  update?: UserUpdateWithoutProfilePhotoDataInput | null;
  upsert?: UserUpsertWithoutProfilePhotoInput | null;
}

export interface UserUpdateWithWhereUniqueWithoutHackerTopicsInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutHackerTopicsDataInput;
}

export interface UserUpdateWithWhereUniqueWithoutPreferredChallengeInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutPreferredChallengeDataInput;
}

export interface UserUpdateWithWhereUniqueWithoutTeamInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutTeamDataInput;
}

export interface UserUpdateWithoutHackerTopicsDataInput {
  id?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  emailConfirmed?: boolean | null;
  phoneNumber?: string | null;
  city?: string | null;
  possibleTeamMemberEmails?: string | null;
  participateInTeamBuildingSession?: boolean | null;
  linkedin?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  devpostUrl?: string | null;
  isAnonymized?: boolean | null;
  languages?: UserUpdatelanguagesInput | null;
  profilePhoto?: ImageUpdateOneWithoutUserInput | null;
  hackerTypes?: HackerTypeUpdateManyWithoutUsersInput | null;
  hackerSkills?: HackerSkillUpdateManyWithoutUsersInput | null;
  roles?: UserRoleUpdateManyWithoutUsersInput | null;
  loginTokens?: UserLoginTokenUpdateManyWithoutUserInput | null;
  resumeTokens?: UserResumeTokenUpdateManyWithoutUserInput | null;
  team?: TeamUpdateOneWithoutMembersInput | null;
  teamChallengeVotes?: TeamChallengeVoteUpdateManyWithoutUserInput | null;
  preferredChallenge?: ChallengeUpdateOneWithoutUsersThatPreferThisChallengeInput | null;
}

export interface UserUpdateWithoutPreferredChallengeDataInput {
  id?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  emailConfirmed?: boolean | null;
  phoneNumber?: string | null;
  city?: string | null;
  possibleTeamMemberEmails?: string | null;
  participateInTeamBuildingSession?: boolean | null;
  linkedin?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  devpostUrl?: string | null;
  isAnonymized?: boolean | null;
  languages?: UserUpdatelanguagesInput | null;
  profilePhoto?: ImageUpdateOneWithoutUserInput | null;
  hackerTypes?: HackerTypeUpdateManyWithoutUsersInput | null;
  hackerSkills?: HackerSkillUpdateManyWithoutUsersInput | null;
  hackerTopics?: HackerTopicUpdateManyWithoutUsersInput | null;
  roles?: UserRoleUpdateManyWithoutUsersInput | null;
  loginTokens?: UserLoginTokenUpdateManyWithoutUserInput | null;
  resumeTokens?: UserResumeTokenUpdateManyWithoutUserInput | null;
  team?: TeamUpdateOneWithoutMembersInput | null;
  teamChallengeVotes?: TeamChallengeVoteUpdateManyWithoutUserInput | null;
}

export interface UserUpdateWithoutProfilePhotoDataInput {
  id?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  emailConfirmed?: boolean | null;
  phoneNumber?: string | null;
  city?: string | null;
  possibleTeamMemberEmails?: string | null;
  participateInTeamBuildingSession?: boolean | null;
  linkedin?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  devpostUrl?: string | null;
  isAnonymized?: boolean | null;
  languages?: UserUpdatelanguagesInput | null;
  hackerTypes?: HackerTypeUpdateManyWithoutUsersInput | null;
  hackerSkills?: HackerSkillUpdateManyWithoutUsersInput | null;
  hackerTopics?: HackerTopicUpdateManyWithoutUsersInput | null;
  roles?: UserRoleUpdateManyWithoutUsersInput | null;
  loginTokens?: UserLoginTokenUpdateManyWithoutUserInput | null;
  resumeTokens?: UserResumeTokenUpdateManyWithoutUserInput | null;
  team?: TeamUpdateOneWithoutMembersInput | null;
  teamChallengeVotes?: TeamChallengeVoteUpdateManyWithoutUserInput | null;
  preferredChallenge?: ChallengeUpdateOneWithoutUsersThatPreferThisChallengeInput | null;
}

export interface UserUpdateWithoutTeamChallengeVotesDataInput {
  id?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  emailConfirmed?: boolean | null;
  phoneNumber?: string | null;
  city?: string | null;
  possibleTeamMemberEmails?: string | null;
  participateInTeamBuildingSession?: boolean | null;
  linkedin?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  devpostUrl?: string | null;
  isAnonymized?: boolean | null;
  languages?: UserUpdatelanguagesInput | null;
  profilePhoto?: ImageUpdateOneWithoutUserInput | null;
  hackerTypes?: HackerTypeUpdateManyWithoutUsersInput | null;
  hackerSkills?: HackerSkillUpdateManyWithoutUsersInput | null;
  hackerTopics?: HackerTopicUpdateManyWithoutUsersInput | null;
  roles?: UserRoleUpdateManyWithoutUsersInput | null;
  loginTokens?: UserLoginTokenUpdateManyWithoutUserInput | null;
  resumeTokens?: UserResumeTokenUpdateManyWithoutUserInput | null;
  team?: TeamUpdateOneWithoutMembersInput | null;
  preferredChallenge?: ChallengeUpdateOneWithoutUsersThatPreferThisChallengeInput | null;
}

export interface UserUpdateWithoutTeamDataInput {
  id?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  emailConfirmed?: boolean | null;
  phoneNumber?: string | null;
  city?: string | null;
  possibleTeamMemberEmails?: string | null;
  participateInTeamBuildingSession?: boolean | null;
  linkedin?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  devpostUrl?: string | null;
  isAnonymized?: boolean | null;
  languages?: UserUpdatelanguagesInput | null;
  profilePhoto?: ImageUpdateOneWithoutUserInput | null;
  hackerTypes?: HackerTypeUpdateManyWithoutUsersInput | null;
  hackerSkills?: HackerSkillUpdateManyWithoutUsersInput | null;
  hackerTopics?: HackerTopicUpdateManyWithoutUsersInput | null;
  roles?: UserRoleUpdateManyWithoutUsersInput | null;
  loginTokens?: UserLoginTokenUpdateManyWithoutUserInput | null;
  resumeTokens?: UserResumeTokenUpdateManyWithoutUserInput | null;
  teamChallengeVotes?: TeamChallengeVoteUpdateManyWithoutUserInput | null;
  preferredChallenge?: ChallengeUpdateOneWithoutUsersThatPreferThisChallengeInput | null;
}

export interface UserUpdatelanguagesInput {
  set?: string[] | null;
}

export interface UserUpsertWithWhereUniqueWithoutHackerTopicsInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutHackerTopicsDataInput;
  create: UserCreateWithoutHackerTopicsInput;
}

export interface UserUpsertWithWhereUniqueWithoutPreferredChallengeInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutPreferredChallengeDataInput;
  create: UserCreateWithoutPreferredChallengeInput;
}

export interface UserUpsertWithWhereUniqueWithoutTeamInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutTeamDataInput;
  create: UserCreateWithoutTeamInput;
}

export interface UserUpsertWithoutProfilePhotoInput {
  update: UserUpdateWithoutProfilePhotoDataInput;
  create: UserCreateWithoutProfilePhotoInput;
}

export interface UserUpsertWithoutTeamChallengeVotesInput {
  update: UserUpdateWithoutTeamChallengeVotesDataInput;
  create: UserCreateWithoutTeamChallengeVotesInput;
}

export interface UserWhereInput {
  id?: UUIDFilter | null;
  firstname?: StringFilter | null;
  lastname?: StringFilter | null;
  profilePhotoId?: NullableStringFilter | null;
  email?: StringFilter | null;
  emailConfirmed?: BooleanFilter | null;
  phoneNumber?: StringFilter | null;
  city?: StringFilter | null;
  hackerTypes?: HackerTypeFilter | null;
  hackerSkills?: HackerSkillFilter | null;
  hackerTopics?: HackerTopicFilter | null;
  roles?: UserRoleFilter | null;
  loginTokens?: UserLoginTokenFilter | null;
  resumeTokens?: UserResumeTokenFilter | null;
  possibleTeamMemberEmails?: NullableStringFilter | null;
  participateInTeamBuildingSession?: NullableBooleanFilter | null;
  linkedin?: NullableStringFilter | null;
  instagram?: NullableStringFilter | null;
  facebook?: NullableStringFilter | null;
  twitter?: NullableStringFilter | null;
  teamId?: NullableStringFilter | null;
  teamChallengeVotes?: TeamChallengeVoteFilter | null;
  devpostUrl?: NullableStringFilter | null;
  isAnonymized?: BooleanFilter | null;
  preferredChallengeId?: NullableStringFilter | null;
  AND?: UserWhereInput[] | null;
  OR?: UserWhereInput[] | null;
  NOT?: UserWhereInput[] | null;
  profilePhoto?: ImageWhereInput | null;
  team?: TeamWhereInput | null;
  preferredChallenge?: ChallengeWhereInput | null;
}

export interface UserWhereUniqueInput {
  id?: string | null;
  email?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
