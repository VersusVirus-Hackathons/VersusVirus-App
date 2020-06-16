import * as prisma from '@prisma/client';
import { core } from '@nexus/schema';
import { GraphQLResolveInfo } from 'graphql';

// Types helpers
type IsModelNameExistsInGraphQLTypes<ReturnType> =
  ReturnType extends core.GetGen<'objectNames'>
    ? true
    : false

type NexusPrismaScalarOpts = {
  alias?: string
}

type Pagination = {
  first?: boolean
  last?: boolean
  before?: boolean
  after?: boolean
  skip?: boolean
}

type RootObjectTypes = Pick<core.GetGen<'rootTypes'>, core.GetGen<'objectNames'>>

/**
 * Determine if `B` is a subset (or equivalent to) of `A`.
*/
type IsSubset<A, B> =
  keyof A extends never ? false :
  B extends A           ? true  :
                          false

type OmitByValue<T, ValueType> =
  Pick<T, { [Key in keyof T]: T[Key] extends ValueType ? never : Key }[keyof T]>

type GetSubsetTypes<ModelName extends string> =
  keyof OmitByValue<
    {
      [P in keyof RootObjectTypes]:
        // if
        ModelName extends keyof ModelTypes
        ? IsSubset<RootObjectTypes[P], ModelTypes[ModelName]> extends true
        // else if
        ? RootObjectTypes[P]
        : never
        // else
        : never
    },
    never
  >

type SubsetTypes<ModelName extends string> =
  GetSubsetTypes<ModelName> extends never
    ? `ERROR: No subset types are available. Please make sure that one of your GraphQL type is a subset of your t.model('<ModelName>')`
    : GetSubsetTypes<ModelName>

type DynamicRequiredType<ReturnType extends string> =
  IsModelNameExistsInGraphQLTypes<ReturnType> extends true
    ? { type?: SubsetTypes<ReturnType> }
    : { type: SubsetTypes<ReturnType> }

type GetNexusPrismaInput<
  ModelName extends string,
  MethodName extends string,
  InputName extends 'filtering' | 'ordering'
> =
  ModelName extends keyof NexusPrismaInputs
    ? MethodName extends keyof NexusPrismaInputs[ModelName]
      ? InputName extends keyof NexusPrismaInputs[ModelName][MethodName]
        ? NexusPrismaInputs[ModelName][MethodName][InputName] & string
        : never
      : never
    : never

/**
 *  Represents arguments required by Prisma Client JS that will
 *  be derived from a request's input (args, context, and info)
 *  and omitted from the GraphQL API. The object itself maps the
 *  names of these args to a function that takes an object representing
 *  the request's input and returns the value to pass to the prisma
 *  arg of the same name.
 */
export type LocalComputedInputs<MethodName extends string> =
  Record<
    string,
    (params: LocalMutationResolverParams<MethodName>) => unknown
  >

export type GlobalComputedInputs =
  Record<
    string,
    (params: GlobalMutationResolverParams) => unknown
  >

type BaseMutationResolverParams = {
  info: GraphQLResolveInfo
  ctx: Context
}

export type GlobalMutationResolverParams =
  BaseMutationResolverParams & {
    args: Record<string, any> & { data: unknown }
  }

export type LocalMutationResolverParams<MethodName extends string> =
  BaseMutationResolverParams & {
    args: MethodName extends keyof core.GetGen2<'argTypes', 'Mutation'>
      ? core.GetGen3<'argTypes', 'Mutation', MethodName>
      : any
  }

export type Context = core.GetGen<'context'>

type BaseRelationOptions<MethodName extends string, ReturnType extends string> =
  DynamicRequiredType<ReturnType> & {
    alias?: string
    computedInputs?: LocalComputedInputs<MethodName>
  }

// If GetNexusPrismaInput returns never, it means there are no filtering/ordering args for it.
type NexusPrismaRelationOpts<ModelName extends string, MethodName extends string, ReturnType extends string> =
  GetNexusPrismaInput<ModelName, MethodName, 'filtering'> extends never
  ? BaseRelationOptions<MethodName, ReturnType>
  // else if
  : GetNexusPrismaInput<ModelName, MethodName, 'ordering'> extends never
  ? BaseRelationOptions<MethodName, ReturnType>
  // else
  : BaseRelationOptions<MethodName, ReturnType> & {
      filtering?:
        | boolean
        | Partial<Record<GetNexusPrismaInput<ModelName, MethodName, 'filtering'>, boolean>>
      ordering?:
        | boolean
        | Partial<Record<GetNexusPrismaInput<ModelName, MethodName, 'ordering'>, boolean>>
      pagination?: boolean | Pagination
    }

type IsScalar<TypeName extends string> = TypeName extends core.GetGen<'scalarNames'>
  ? true
  : false;

type IsObject<Name extends string> = Name extends core.GetGen<'objectNames'>
  ? true
  : false

type IsEnum<Name extends string> = Name extends core.GetGen<'enumNames'>
  ? true
  : false

type IsInputObject<Name extends string> = Name extends core.GetGen<'inputNames'>
  ? true
  : false

/**
 * The kind that a GraphQL type may be.
 */
type Kind = 'Enum' | 'Object' | 'Scalar' | 'InputObject'

/**
 * Helper to safely reference a Kind type. For example instead of the following
 * which would admit a typo:
 *
 * ```ts
 * type Foo = Bar extends 'scalar' ? ...
 * ```
 *
 * You can do this which guarantees a correct reference:
 *
 * ```ts
 * type Foo = Bar extends AKind<'Scalar'> ? ...
 * ```
 *
 */
type AKind<T extends Kind> = T

type GetKind<Name extends string> =
  IsEnum<Name> extends true
  ? 'Enum'
  // else if
  : IsScalar<Name> extends true
  ? 'Scalar'
  // else if
  : IsObject<Name> extends true
  ? 'Object'
  // else if
  : IsInputObject<Name> extends true
  ? 'InputObject'
  // else
  // FIXME should be `never`, but GQL objects named differently
  // than backing type fall into this branch
  : 'Object'

type NexusPrismaFields<ModelName extends keyof NexusPrismaTypes & string> = {
  [MethodName in keyof NexusPrismaTypes[ModelName] & string]:
    NexusPrismaMethod<
      ModelName,
      MethodName,
      GetKind<NexusPrismaTypes[ModelName][MethodName] & string> // Is the return type a scalar?
    >
}

type NexusPrismaMethod<
  ModelName extends keyof NexusPrismaTypes,
  MethodName extends keyof NexusPrismaTypes[ModelName] & string,
  ThisKind extends Kind,
  ReturnType extends string = NexusPrismaTypes[ModelName][MethodName] & string
> =
  ThisKind extends AKind<'Enum'>
  ? () => NexusPrismaFields<ModelName>
  // else if
  // if scalar return scalar opts
  : ThisKind extends AKind<'Scalar'>
  ? (opts?: NexusPrismaScalarOpts) => NexusPrismaFields<ModelName>
  // else if
  // if model name has a mapped graphql types then make opts optional
  : IsModelNameExistsInGraphQLTypes<ReturnType> extends true
  ? (opts?: NexusPrismaRelationOpts<ModelName, MethodName, ReturnType>) => NexusPrismaFields<ModelName>
  // else
  // force use input the related graphql type -> { type: '...' }
  : (opts: NexusPrismaRelationOpts<ModelName, MethodName, ReturnType>) => NexusPrismaFields<ModelName>

type GetNexusPrismaMethod<TypeName extends string> = TypeName extends keyof NexusPrismaMethods
  ? NexusPrismaMethods[TypeName]
  : <CustomTypeName extends keyof ModelTypes>(typeName: CustomTypeName) => NexusPrismaMethods[CustomTypeName]

type GetNexusPrisma<TypeName extends string, ModelOrCrud extends 'model' | 'crud'> =
  ModelOrCrud extends 'model'
    ? TypeName extends 'Mutation'
      ? never
      : TypeName extends 'Query'
        ? never
        : GetNexusPrismaMethod<TypeName>
    : ModelOrCrud extends 'crud'
      ? TypeName extends 'Mutation'
        ? GetNexusPrismaMethod<TypeName>
        : TypeName extends 'Query'
          ? GetNexusPrismaMethod<TypeName>
          : never
      : never

// Generated
interface ModelTypes {
  Image: prisma.Image
  Thumbnail: prisma.Thumbnail
  Mentor: prisma.Mentor
  UserResumeToken: prisma.UserResumeToken
  UserLoginToken: prisma.UserLoginToken
  HackerType: prisma.HackerType
  HackerSkill: prisma.HackerSkill
  HackerTopic: prisma.HackerTopic
  UserRole: prisma.UserRole
  Challenge: prisma.Challenge
  TeamChallengeVote: prisma.TeamChallengeVote
  Team: prisma.Team
  User: prisma.User
  Schedule: prisma.Schedule
  Project: prisma.Project
  Submission: prisma.Submission
  SubmissionChallenge: prisma.SubmissionChallenge
  SubmissionUser: prisma.SubmissionUser
}
  
interface NexusPrismaInputs {
  Query: {
    images: {
  filtering: 'id' | 'base64' | 'projectId' | 'AND' | 'OR' | 'NOT' | 'user' | 'project'
  ordering: 'id' | 'base64' | 'projectId'
}
    thumbnails: {
  filtering: 'id' | 'base64' | 'Project' | 'AND' | 'OR' | 'NOT'
  ordering: 'id' | 'base64'
}
    mentors: {
  filtering: 'id' | 'email' | 'name' | 'skills' | 'linkedin' | 'languages' | 'topics' | 'AND' | 'OR' | 'NOT'
  ordering: 'id' | 'email' | 'name' | 'skills' | 'linkedin' | 'languages'
}
    userResumeTokens: {
  filtering: 'id' | 'hashedToken' | 'created' | 'userId' | 'AND' | 'OR' | 'NOT' | 'user'
  ordering: 'id' | 'hashedToken' | 'created' | 'userId'
}
    userLoginTokens: {
  filtering: 'id' | 'hashedToken' | 'created' | 'userId' | 'AND' | 'OR' | 'NOT' | 'user'
  ordering: 'id' | 'hashedToken' | 'created' | 'userId'
}
    hackerTypes: {
  filtering: 'id' | 'title' | 'description' | 'users' | 'AND' | 'OR' | 'NOT'
  ordering: 'id' | 'title' | 'description'
}
    hackerSkills: {
  filtering: 'id' | 'title' | 'description' | 'users' | 'AND' | 'OR' | 'NOT'
  ordering: 'id' | 'title' | 'description'
}
    hackerTopics: {
  filtering: 'id' | 'title' | 'description' | 'users' | 'primaryChallenges' | 'mentors' | 'teams' | 'slackId' | 'AND' | 'OR' | 'NOT'
  ordering: 'id' | 'title' | 'description' | 'slackId'
}
    userRoles: {
  filtering: 'id' | 'users' | 'AND' | 'OR' | 'NOT'
  ordering: 'id'
}
    challenges: {
  filtering: 'id' | 'title' | 'context' | 'challenge' | 'solution' | 'resources' | 'commentsByTeam' | 'organization' | 'contactName' | 'contactEmail' | 'teamsThatCanSelectThisChallenge' | 'teamsThatSelectedThisChallenge' | 'projects' | 'primaryTopicId' | 'teamChallengeVotes' | 'usersThatPreferThisChallenge' | 'AND' | 'OR' | 'NOT' | 'primaryTopic'
  ordering: 'id' | 'title' | 'context' | 'challenge' | 'solution' | 'resources' | 'commentsByTeam' | 'organization' | 'contactName' | 'contactEmail' | 'primaryTopicId'
}
    teamChallengeVotes: {
  filtering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score' | 'AND' | 'OR' | 'NOT' | 'user' | 'challenge' | 'team'
  ordering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score'
}
    teams: {
  filtering: 'id' | 'challengesToSelect' | 'members' | 'challengeSelectedId' | 'projects' | 'slackId' | 'challengeVotes' | 'primaryTopicId' | 'AND' | 'OR' | 'NOT' | 'challengeSelected' | 'primaryTopic'
  ordering: 'id' | 'challengeSelectedId' | 'slackId' | 'primaryTopicId'
}
    users: {
  filtering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'hackerTypes' | 'hackerSkills' | 'hackerTopics' | 'roles' | 'loginTokens' | 'resumeTokens' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'teamChallengeVotes' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId' | 'AND' | 'OR' | 'NOT' | 'profilePhoto' | 'team' | 'preferredChallenge'
  ordering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId'
}
    schedules: {
  filtering: 'id' | 'from' | 'to' | 'title' | 'type' | 'data' | 'color' | 'AND' | 'OR' | 'NOT'
  ordering: 'id' | 'from' | 'to' | 'title' | 'type' | 'data' | 'color'
}
    projects: {
  filtering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'images' | 'challengeId' | 'teamId' | 'isPublished' | 'AND' | 'OR' | 'NOT' | 'thumbnail' | 'challenge' | 'team'
  ordering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'challengeId' | 'teamId' | 'isPublished'
}
    submissions: {
  filtering: 'id' | 'title' | 'url' | 'tagline' | 'createdAt' | 'description' | 'video' | 'website' | 'file' | 'desiredPrizes' | 'builtWith' | 'slackChannel' | 'relevanceForEco' | 'relevanceForChallenge' | 'potentialForImpact' | 'progressAchieved' | 'projectAddedValue' | 'projectContinuation' | 'projectPlans' | 'teamMembersScreen' | 'collegeUniversitiesOfTeamMembers' | 'additionalTeamMemberCount' | 'challengeId' | 'submitterEmail' | 'teamMembers' | 'AND' | 'OR' | 'NOT' | 'challenge'
  ordering: 'id' | 'title' | 'url' | 'tagline' | 'createdAt' | 'description' | 'video' | 'website' | 'file' | 'desiredPrizes' | 'builtWith' | 'slackChannel' | 'relevanceForEco' | 'relevanceForChallenge' | 'potentialForImpact' | 'progressAchieved' | 'projectAddedValue' | 'projectContinuation' | 'projectPlans' | 'teamMembersScreen' | 'collegeUniversitiesOfTeamMembers' | 'additionalTeamMemberCount' | 'challengeId' | 'submitterEmail'
}
    submissionChallenges: {
  filtering: 'id' | 'title' | 'description' | 'topic' | 'AND' | 'OR' | 'NOT' | 'submission'
  ordering: 'id' | 'title' | 'description' | 'topic'
}
    submissionUsers: {
  filtering: 'id' | 'email' | 'firstName' | 'lastName' | 'screenName' | 'submissions' | 'AND' | 'OR' | 'NOT'
  ordering: 'id' | 'email' | 'firstName' | 'lastName' | 'screenName'
}

  },
    Image: {


  },  Thumbnail: {
    Project: {
  filtering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'images' | 'challengeId' | 'teamId' | 'isPublished' | 'AND' | 'OR' | 'NOT' | 'thumbnail' | 'challenge' | 'team'
  ordering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'challengeId' | 'teamId' | 'isPublished'
}

  },  Mentor: {
    topics: {
  filtering: 'id' | 'title' | 'description' | 'users' | 'primaryChallenges' | 'mentors' | 'teams' | 'slackId' | 'AND' | 'OR' | 'NOT'
  ordering: 'id' | 'title' | 'description' | 'slackId'
}

  },  UserResumeToken: {


  },  UserLoginToken: {


  },  HackerType: {
    users: {
  filtering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'hackerTypes' | 'hackerSkills' | 'hackerTopics' | 'roles' | 'loginTokens' | 'resumeTokens' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'teamChallengeVotes' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId' | 'AND' | 'OR' | 'NOT' | 'profilePhoto' | 'team' | 'preferredChallenge'
  ordering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId'
}

  },  HackerSkill: {
    users: {
  filtering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'hackerTypes' | 'hackerSkills' | 'hackerTopics' | 'roles' | 'loginTokens' | 'resumeTokens' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'teamChallengeVotes' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId' | 'AND' | 'OR' | 'NOT' | 'profilePhoto' | 'team' | 'preferredChallenge'
  ordering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId'
}

  },  HackerTopic: {
    users: {
  filtering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'hackerTypes' | 'hackerSkills' | 'hackerTopics' | 'roles' | 'loginTokens' | 'resumeTokens' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'teamChallengeVotes' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId' | 'AND' | 'OR' | 'NOT' | 'profilePhoto' | 'team' | 'preferredChallenge'
  ordering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId'
}
    primaryChallenges: {
  filtering: 'id' | 'title' | 'context' | 'challenge' | 'solution' | 'resources' | 'commentsByTeam' | 'organization' | 'contactName' | 'contactEmail' | 'teamsThatCanSelectThisChallenge' | 'teamsThatSelectedThisChallenge' | 'projects' | 'primaryTopicId' | 'teamChallengeVotes' | 'usersThatPreferThisChallenge' | 'AND' | 'OR' | 'NOT' | 'primaryTopic'
  ordering: 'id' | 'title' | 'context' | 'challenge' | 'solution' | 'resources' | 'commentsByTeam' | 'organization' | 'contactName' | 'contactEmail' | 'primaryTopicId'
}
    mentors: {
  filtering: 'id' | 'email' | 'name' | 'skills' | 'linkedin' | 'languages' | 'topics' | 'AND' | 'OR' | 'NOT'
  ordering: 'id' | 'email' | 'name' | 'skills' | 'linkedin' | 'languages'
}
    teams: {
  filtering: 'id' | 'challengesToSelect' | 'members' | 'challengeSelectedId' | 'projects' | 'slackId' | 'challengeVotes' | 'primaryTopicId' | 'AND' | 'OR' | 'NOT' | 'challengeSelected' | 'primaryTopic'
  ordering: 'id' | 'challengeSelectedId' | 'slackId' | 'primaryTopicId'
}

  },  UserRole: {
    users: {
  filtering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'hackerTypes' | 'hackerSkills' | 'hackerTopics' | 'roles' | 'loginTokens' | 'resumeTokens' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'teamChallengeVotes' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId' | 'AND' | 'OR' | 'NOT' | 'profilePhoto' | 'team' | 'preferredChallenge'
  ordering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId'
}

  },  Challenge: {
    teamsThatCanSelectThisChallenge: {
  filtering: 'id' | 'challengesToSelect' | 'members' | 'challengeSelectedId' | 'projects' | 'slackId' | 'challengeVotes' | 'primaryTopicId' | 'AND' | 'OR' | 'NOT' | 'challengeSelected' | 'primaryTopic'
  ordering: 'id' | 'challengeSelectedId' | 'slackId' | 'primaryTopicId'
}
    teamsThatSelectedThisChallenge: {
  filtering: 'id' | 'challengesToSelect' | 'members' | 'challengeSelectedId' | 'projects' | 'slackId' | 'challengeVotes' | 'primaryTopicId' | 'AND' | 'OR' | 'NOT' | 'challengeSelected' | 'primaryTopic'
  ordering: 'id' | 'challengeSelectedId' | 'slackId' | 'primaryTopicId'
}
    projects: {
  filtering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'images' | 'challengeId' | 'teamId' | 'isPublished' | 'AND' | 'OR' | 'NOT' | 'thumbnail' | 'challenge' | 'team'
  ordering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'challengeId' | 'teamId' | 'isPublished'
}
    teamChallengeVotes: {
  filtering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score' | 'AND' | 'OR' | 'NOT' | 'user' | 'challenge' | 'team'
  ordering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score'
}
    usersThatPreferThisChallenge: {
  filtering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'hackerTypes' | 'hackerSkills' | 'hackerTopics' | 'roles' | 'loginTokens' | 'resumeTokens' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'teamChallengeVotes' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId' | 'AND' | 'OR' | 'NOT' | 'profilePhoto' | 'team' | 'preferredChallenge'
  ordering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId'
}

  },  TeamChallengeVote: {


  },  Team: {
    challengesToSelect: {
  filtering: 'id' | 'title' | 'context' | 'challenge' | 'solution' | 'resources' | 'commentsByTeam' | 'organization' | 'contactName' | 'contactEmail' | 'teamsThatCanSelectThisChallenge' | 'teamsThatSelectedThisChallenge' | 'projects' | 'primaryTopicId' | 'teamChallengeVotes' | 'usersThatPreferThisChallenge' | 'AND' | 'OR' | 'NOT' | 'primaryTopic'
  ordering: 'id' | 'title' | 'context' | 'challenge' | 'solution' | 'resources' | 'commentsByTeam' | 'organization' | 'contactName' | 'contactEmail' | 'primaryTopicId'
}
    members: {
  filtering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'hackerTypes' | 'hackerSkills' | 'hackerTopics' | 'roles' | 'loginTokens' | 'resumeTokens' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'teamChallengeVotes' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId' | 'AND' | 'OR' | 'NOT' | 'profilePhoto' | 'team' | 'preferredChallenge'
  ordering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId'
}
    projects: {
  filtering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'images' | 'challengeId' | 'teamId' | 'isPublished' | 'AND' | 'OR' | 'NOT' | 'thumbnail' | 'challenge' | 'team'
  ordering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'challengeId' | 'teamId' | 'isPublished'
}
    challengeVotes: {
  filtering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score' | 'AND' | 'OR' | 'NOT' | 'user' | 'challenge' | 'team'
  ordering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score'
}

  },  User: {
    hackerTypes: {
  filtering: 'id' | 'title' | 'description' | 'users' | 'AND' | 'OR' | 'NOT'
  ordering: 'id' | 'title' | 'description'
}
    hackerSkills: {
  filtering: 'id' | 'title' | 'description' | 'users' | 'AND' | 'OR' | 'NOT'
  ordering: 'id' | 'title' | 'description'
}
    hackerTopics: {
  filtering: 'id' | 'title' | 'description' | 'users' | 'primaryChallenges' | 'mentors' | 'teams' | 'slackId' | 'AND' | 'OR' | 'NOT'
  ordering: 'id' | 'title' | 'description' | 'slackId'
}
    roles: {
  filtering: 'id' | 'users' | 'AND' | 'OR' | 'NOT'
  ordering: 'id'
}
    loginTokens: {
  filtering: 'id' | 'hashedToken' | 'created' | 'userId' | 'AND' | 'OR' | 'NOT' | 'user'
  ordering: 'id' | 'hashedToken' | 'created' | 'userId'
}
    resumeTokens: {
  filtering: 'id' | 'hashedToken' | 'created' | 'userId' | 'AND' | 'OR' | 'NOT' | 'user'
  ordering: 'id' | 'hashedToken' | 'created' | 'userId'
}
    teamChallengeVotes: {
  filtering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score' | 'AND' | 'OR' | 'NOT' | 'user' | 'challenge' | 'team'
  ordering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score'
}

  },  Schedule: {


  },  Project: {
    images: {
  filtering: 'id' | 'base64' | 'projectId' | 'AND' | 'OR' | 'NOT' | 'user' | 'project'
  ordering: 'id' | 'base64' | 'projectId'
}

  },  Submission: {
    teamMembers: {
  filtering: 'id' | 'email' | 'firstName' | 'lastName' | 'screenName' | 'submissions' | 'AND' | 'OR' | 'NOT'
  ordering: 'id' | 'email' | 'firstName' | 'lastName' | 'screenName'
}

  },  SubmissionChallenge: {


  },  SubmissionUser: {
    submissions: {
  filtering: 'id' | 'title' | 'url' | 'tagline' | 'createdAt' | 'description' | 'video' | 'website' | 'file' | 'desiredPrizes' | 'builtWith' | 'slackChannel' | 'relevanceForEco' | 'relevanceForChallenge' | 'potentialForImpact' | 'progressAchieved' | 'projectAddedValue' | 'projectContinuation' | 'projectPlans' | 'teamMembersScreen' | 'collegeUniversitiesOfTeamMembers' | 'additionalTeamMemberCount' | 'challengeId' | 'submitterEmail' | 'teamMembers' | 'AND' | 'OR' | 'NOT' | 'challenge'
  ordering: 'id' | 'title' | 'url' | 'tagline' | 'createdAt' | 'description' | 'video' | 'website' | 'file' | 'desiredPrizes' | 'builtWith' | 'slackChannel' | 'relevanceForEco' | 'relevanceForChallenge' | 'potentialForImpact' | 'progressAchieved' | 'projectAddedValue' | 'projectContinuation' | 'projectPlans' | 'teamMembersScreen' | 'collegeUniversitiesOfTeamMembers' | 'additionalTeamMemberCount' | 'challengeId' | 'submitterEmail'
}

  }
}

interface NexusPrismaTypes {
  Query: {
    image: 'Image'
    images: 'Image'
    thumbnail: 'Thumbnail'
    thumbnails: 'Thumbnail'
    mentor: 'Mentor'
    mentors: 'Mentor'
    userResumeToken: 'UserResumeToken'
    userResumeTokens: 'UserResumeToken'
    userLoginToken: 'UserLoginToken'
    userLoginTokens: 'UserLoginToken'
    hackerType: 'HackerType'
    hackerTypes: 'HackerType'
    hackerSkill: 'HackerSkill'
    hackerSkills: 'HackerSkill'
    hackerTopic: 'HackerTopic'
    hackerTopics: 'HackerTopic'
    userRole: 'UserRole'
    userRoles: 'UserRole'
    challenge: 'Challenge'
    challenges: 'Challenge'
    teamChallengeVote: 'TeamChallengeVote'
    teamChallengeVotes: 'TeamChallengeVote'
    team: 'Team'
    teams: 'Team'
    user: 'User'
    users: 'User'
    schedule: 'Schedule'
    schedules: 'Schedule'
    project: 'Project'
    projects: 'Project'
    submission: 'Submission'
    submissions: 'Submission'
    submissionChallenge: 'SubmissionChallenge'
    submissionChallenges: 'SubmissionChallenge'
    submissionUser: 'SubmissionUser'
    submissionUsers: 'SubmissionUser'

  },
  Mutation: {
    createOneImage: 'Image'
    updateOneImage: 'Image'
    updateManyImage: 'BatchPayload'
    deleteOneImage: 'Image'
    deleteManyImage: 'BatchPayload'
    upsertOneImage: 'Image'
    createOneThumbnail: 'Thumbnail'
    updateOneThumbnail: 'Thumbnail'
    updateManyThumbnail: 'BatchPayload'
    deleteOneThumbnail: 'Thumbnail'
    deleteManyThumbnail: 'BatchPayload'
    upsertOneThumbnail: 'Thumbnail'
    createOneMentor: 'Mentor'
    updateOneMentor: 'Mentor'
    updateManyMentor: 'BatchPayload'
    deleteOneMentor: 'Mentor'
    deleteManyMentor: 'BatchPayload'
    upsertOneMentor: 'Mentor'
    createOneUserResumeToken: 'UserResumeToken'
    updateOneUserResumeToken: 'UserResumeToken'
    updateManyUserResumeToken: 'BatchPayload'
    deleteOneUserResumeToken: 'UserResumeToken'
    deleteManyUserResumeToken: 'BatchPayload'
    upsertOneUserResumeToken: 'UserResumeToken'
    createOneUserLoginToken: 'UserLoginToken'
    updateOneUserLoginToken: 'UserLoginToken'
    updateManyUserLoginToken: 'BatchPayload'
    deleteOneUserLoginToken: 'UserLoginToken'
    deleteManyUserLoginToken: 'BatchPayload'
    upsertOneUserLoginToken: 'UserLoginToken'
    createOneHackerType: 'HackerType'
    updateOneHackerType: 'HackerType'
    updateManyHackerType: 'BatchPayload'
    deleteOneHackerType: 'HackerType'
    deleteManyHackerType: 'BatchPayload'
    upsertOneHackerType: 'HackerType'
    createOneHackerSkill: 'HackerSkill'
    updateOneHackerSkill: 'HackerSkill'
    updateManyHackerSkill: 'BatchPayload'
    deleteOneHackerSkill: 'HackerSkill'
    deleteManyHackerSkill: 'BatchPayload'
    upsertOneHackerSkill: 'HackerSkill'
    createOneHackerTopic: 'HackerTopic'
    updateOneHackerTopic: 'HackerTopic'
    updateManyHackerTopic: 'BatchPayload'
    deleteOneHackerTopic: 'HackerTopic'
    deleteManyHackerTopic: 'BatchPayload'
    upsertOneHackerTopic: 'HackerTopic'
    createOneUserRole: 'UserRole'
    updateOneUserRole: 'UserRole'
    updateManyUserRole: 'BatchPayload'
    deleteOneUserRole: 'UserRole'
    deleteManyUserRole: 'BatchPayload'
    upsertOneUserRole: 'UserRole'
    createOneChallenge: 'Challenge'
    updateOneChallenge: 'Challenge'
    updateManyChallenge: 'BatchPayload'
    deleteOneChallenge: 'Challenge'
    deleteManyChallenge: 'BatchPayload'
    upsertOneChallenge: 'Challenge'
    createOneTeamChallengeVote: 'TeamChallengeVote'
    updateOneTeamChallengeVote: 'TeamChallengeVote'
    updateManyTeamChallengeVote: 'BatchPayload'
    deleteOneTeamChallengeVote: 'TeamChallengeVote'
    deleteManyTeamChallengeVote: 'BatchPayload'
    upsertOneTeamChallengeVote: 'TeamChallengeVote'
    createOneTeam: 'Team'
    updateOneTeam: 'Team'
    updateManyTeam: 'BatchPayload'
    deleteOneTeam: 'Team'
    deleteManyTeam: 'BatchPayload'
    upsertOneTeam: 'Team'
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'BatchPayload'
    deleteOneUser: 'User'
    deleteManyUser: 'BatchPayload'
    upsertOneUser: 'User'
    createOneSchedule: 'Schedule'
    updateOneSchedule: 'Schedule'
    updateManySchedule: 'BatchPayload'
    deleteOneSchedule: 'Schedule'
    deleteManySchedule: 'BatchPayload'
    upsertOneSchedule: 'Schedule'
    createOneProject: 'Project'
    updateOneProject: 'Project'
    updateManyProject: 'BatchPayload'
    deleteOneProject: 'Project'
    deleteManyProject: 'BatchPayload'
    upsertOneProject: 'Project'
    createOneSubmission: 'Submission'
    updateOneSubmission: 'Submission'
    updateManySubmission: 'BatchPayload'
    deleteOneSubmission: 'Submission'
    deleteManySubmission: 'BatchPayload'
    upsertOneSubmission: 'Submission'
    createOneSubmissionChallenge: 'SubmissionChallenge'
    updateOneSubmissionChallenge: 'SubmissionChallenge'
    updateManySubmissionChallenge: 'BatchPayload'
    deleteOneSubmissionChallenge: 'SubmissionChallenge'
    deleteManySubmissionChallenge: 'BatchPayload'
    upsertOneSubmissionChallenge: 'SubmissionChallenge'
    createOneSubmissionUser: 'SubmissionUser'
    updateOneSubmissionUser: 'SubmissionUser'
    updateManySubmissionUser: 'BatchPayload'
    deleteOneSubmissionUser: 'SubmissionUser'
    deleteManySubmissionUser: 'BatchPayload'
    upsertOneSubmissionUser: 'SubmissionUser'

  },
  Image: {
    id: 'String'
    base64: 'String'
    user: 'User'
    project: 'Project'
    projectId: 'String'

},  Thumbnail: {
    id: 'String'
    base64: 'String'
    Project: 'Project'

},  Mentor: {
    id: 'String'
    email: 'String'
    name: 'String'
    skills: 'String'
    linkedin: 'String'
    languages: 'String'
    topics: 'HackerTopic'

},  UserResumeToken: {
    id: 'String'
    hashedToken: 'String'
    created: 'DateTime'
    userId: 'String'
    user: 'User'

},  UserLoginToken: {
    id: 'String'
    hashedToken: 'String'
    created: 'DateTime'
    userId: 'String'
    user: 'User'

},  HackerType: {
    id: 'String'
    title: 'String'
    description: 'String'
    users: 'User'

},  HackerSkill: {
    id: 'String'
    title: 'String'
    description: 'String'
    users: 'User'

},  HackerTopic: {
    id: 'String'
    title: 'String'
    description: 'String'
    users: 'User'
    primaryChallenges: 'Challenge'
    mentors: 'Mentor'
    teams: 'Team'
    slackId: 'String'

},  UserRole: {
    id: 'String'
    users: 'User'

},  Challenge: {
    id: 'String'
    title: 'String'
    context: 'String'
    challenge: 'String'
    solution: 'String'
    resources: 'String'
    commentsByTeam: 'String'
    organization: 'String'
    contactName: 'String'
    contactEmail: 'String'
    teamsThatCanSelectThisChallenge: 'Team'
    teamsThatSelectedThisChallenge: 'Team'
    projects: 'Project'
    primaryTopicId: 'String'
    primaryTopic: 'HackerTopic'
    teamChallengeVotes: 'TeamChallengeVote'
    usersThatPreferThisChallenge: 'User'

},  TeamChallengeVote: {
    id: 'String'
    userId: 'String'
    user: 'User'
    challengeId: 'String'
    challenge: 'Challenge'
    teamId: 'String'
    team: 'Team'
    score: 'Int'

},  Team: {
    id: 'String'
    challengesToSelect: 'Challenge'
    members: 'User'
    challengeSelectedId: 'String'
    challengeSelected: 'Challenge'
    projects: 'Project'
    slackId: 'String'
    challengeVotes: 'TeamChallengeVote'
    primaryTopicId: 'String'
    primaryTopic: 'HackerTopic'
    tags: 'String'

},  User: {
    id: 'String'
    firstname: 'String'
    lastname: 'String'
    profilePhotoId: 'String'
    profilePhoto: 'Image'
    email: 'String'
    emailConfirmed: 'Boolean'
    phoneNumber: 'String'
    languages: 'String'
    city: 'String'
    hackerTypes: 'HackerType'
    hackerSkills: 'HackerSkill'
    hackerTopics: 'HackerTopic'
    roles: 'UserRole'
    loginTokens: 'UserLoginToken'
    resumeTokens: 'UserResumeToken'
    possibleTeamMemberEmails: 'String'
    participateInTeamBuildingSession: 'Boolean'
    linkedin: 'String'
    instagram: 'String'
    facebook: 'String'
    twitter: 'String'
    teamId: 'String'
    team: 'Team'
    teamChallengeVotes: 'TeamChallengeVote'
    devpostUrl: 'String'
    isAnonymized: 'Boolean'
    preferredChallengeId: 'String'
    preferredChallenge: 'Challenge'

},  Schedule: {
    id: 'String'
    from: 'DateTime'
    to: 'DateTime'
    title: 'String'
    type: 'ScheduleType'
    data: 'String'
    color: 'String'

},  Project: {
    id: 'String'
    title: 'String'
    tagline: 'String'
    thumbnailId: 'String'
    thumbnail: 'Thumbnail'
    description: 'String'
    technologiesUsed: 'String'
    obstacles: 'String'
    accomplishments: 'String'
    learnings: 'String'
    nextSteps: 'String'
    videoUrl: 'String'
    urls: 'String'
    relevanceToHackathon: 'String'
    relevanceToChallenge: 'String'
    longTermImpact: 'String'
    progressDuringHackathon: 'String'
    valueAdded: 'String'
    images: 'Image'
    challenge: 'Challenge'
    challengeId: 'String'
    team: 'Team'
    teamId: 'String'
    isPublished: 'Boolean'

},  Submission: {
    id: 'String'
    title: 'String'
    url: 'String'
    tagline: 'String'
    createdAt: 'DateTime'
    description: 'String'
    video: 'String'
    website: 'String'
    file: 'String'
    desiredPrizes: 'String'
    builtWith: 'String'
    slackChannel: 'String'
    relevanceForEco: 'String'
    relevanceForChallenge: 'String'
    potentialForImpact: 'String'
    progressAchieved: 'String'
    projectAddedValue: 'String'
    projectContinuation: 'String'
    projectPlans: 'String'
    teamMembersScreen: 'String'
    collegeUniversitiesOfTeamMembers: 'String'
    additionalTeamMemberCount: 'Int'
    challengeId: 'String'
    challenge: 'SubmissionChallenge'
    submitterEmail: 'String'
    teamMembers: 'SubmissionUser'

},  SubmissionChallenge: {
    id: 'String'
    title: 'String'
    description: 'String'
    topic: 'String'
    submission: 'Submission'

},  SubmissionUser: {
    id: 'String'
    email: 'String'
    firstName: 'String'
    lastName: 'String'
    screenName: 'String'
    submissions: 'Submission'

}
}

interface NexusPrismaMethods {
  Image: NexusPrismaFields<'Image'>
  Thumbnail: NexusPrismaFields<'Thumbnail'>
  Mentor: NexusPrismaFields<'Mentor'>
  UserResumeToken: NexusPrismaFields<'UserResumeToken'>
  UserLoginToken: NexusPrismaFields<'UserLoginToken'>
  HackerType: NexusPrismaFields<'HackerType'>
  HackerSkill: NexusPrismaFields<'HackerSkill'>
  HackerTopic: NexusPrismaFields<'HackerTopic'>
  UserRole: NexusPrismaFields<'UserRole'>
  Challenge: NexusPrismaFields<'Challenge'>
  TeamChallengeVote: NexusPrismaFields<'TeamChallengeVote'>
  Team: NexusPrismaFields<'Team'>
  User: NexusPrismaFields<'User'>
  Schedule: NexusPrismaFields<'Schedule'>
  Project: NexusPrismaFields<'Project'>
  Submission: NexusPrismaFields<'Submission'>
  SubmissionChallenge: NexusPrismaFields<'SubmissionChallenge'>
  SubmissionUser: NexusPrismaFields<'SubmissionUser'>
  Query: NexusPrismaFields<'Query'>
  Mutation: NexusPrismaFields<'Mutation'>
}
  

declare global {
  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = GetNexusPrisma<TypeName, ModelOrCrud>;
}
  