import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

import { MeFragment } from "../../../fragments/user";
import { Me } from "./types/Me";

const QUERY = gql`
  query Me {
    me {
      ...Me
    }
  }
  ${MeFragment}
`;

const useMe = () => {
  const { data, ...rest } = useQuery<Me>(QUERY, { ssr: false });
  return {
    ...rest,
    data,
    me: data?.me,
    isAdmin: data?.me?.roles.some((r) => r.id === "admin"),
  };
};

export default useMe;
