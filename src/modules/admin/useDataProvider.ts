import buildGraphQLProvider from "@ra-data-prisma/dataprovider";
import { useEffect, useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { MeFragment } from "../../fragments/user";
import { Me } from "../user/hooks/types/Me";

const QUERY = gql`
  query Me {
    me {
      ...Me
    }
  }
  ${MeFragment}
`;

export default () => {
  const [dataProvider, setDataProvider] = useState();

  useEffect(() => {
    buildGraphQLProvider({
      clientOptions: { uri: "/api/graphql" } as any,
    }).then((p) => {
      setDataProvider(() => p);
    });
  }, []);

  const { data, ...rest } = useQuery<Me>(QUERY, { ssr: false });
  const isAdmin = data?.me?.roles.some((r) => r.id === "admin");

  return [dataProvider, isAdmin];
};
