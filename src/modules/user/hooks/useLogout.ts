import useMe from "./useMe";
import { useMutation, gql } from "@apollo/client";

export default () => {
  const [logoutMutation, { client }] = useMutation(gql`
    mutation Logout {
      logout
    }
  `);
  const logout = async () => {
    await logoutMutation();
    await client.resetStore();
  };

  return logout;
};
