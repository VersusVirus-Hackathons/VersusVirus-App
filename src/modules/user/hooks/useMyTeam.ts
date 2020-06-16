import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Me } from "./types/Me";
import { ChallengeDetailsFragment } from "../../../fragments/challenge";
import { MeFragment, TeamMemberFragment } from "../../../fragments/user";
import { MyTeam } from "./types/MyTeam";

const QUERY = gql`
  query MyTeam {
    me {
      ...Me
      team {
        id
        projects {
          id
        }
        slack {
          url
        }
        challengesToSelectWithMyVotes {
          challenge {
            ...ChallengeDetails
          }
          myVote
        }
        challengeSelected {
          ...ChallengeDetails
        }
        members {
          ...TeamMember
        }
      }
    }
  }
  ${MeFragment}
  ${ChallengeDetailsFragment}
  ${TeamMemberFragment}
`;

const useMyTeam = () => {
  const { data, ...rest } = useQuery<MyTeam>(QUERY, {
    pollInterval: 30000,
    ssr: false,
  });
  return {
    ...rest,
    data,
    me: data?.me,
    myTeam: data?.me?.team,
    hasProject: data?.me?.team?.projects?.length > 0,
  };
};

export default useMyTeam;
