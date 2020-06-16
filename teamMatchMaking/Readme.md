# Team Creation and Challenge Assigment

This folder contains the algorithm for creating teams from the pool of users. Most of the modules have tests, so this is a good place to start learning the specific functionalities.

```sh
npx jest teamMatchMaking
```

The alorith is exectuded via a GraphQL mutation named "recreateAllTeams". See example in [example-queries.graphql](../example-queries.graphql). The mutation **overrides** any previously created teams. Depending on the amount of participants, the mutation may take a few minutes to execute.
