# Versus Virus Web Application

This application is custom built for managing the [Versus Virus](https://www.versusvirus.ch/) hackathon. It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

- [Dependencies](#dependencies)
- [Production Environment](#production-environment)
- [Development Environment](#development-environment)
- [Project Structure](#project-structure)
- [Database](#database)
- [Conventions](#conventions)
- [Creators](#creators)

## Dependencies

The project uses [Yarn](https://yarnpkg.com/) for managing all dependencies. To install all necessary Node modules execute `yarn` from the root folder.

## Production Environment

The app was manged with [GitLab](https://gitlab.com/) for the Versus Virus hackathons, but can be run with any service that supports Node.js and PostgreSQL.

## Development Environment

The app runs on the latest LTS version of [Node.js](https://nodejs.org/en/). It relies on [PostgreSQL 11](https://www.postgresql.org/download/) and a mailserver like [Nodemailer App](https://nodemailer.com/app/). Note that the mail server needs to be available for sending a magic link for logging into the app.

The [package.json](./package.json) file contains all the commands for starting the application.

### Local Environment Variables

Rename the `.env.example` file to `.env` and load it before running the dev command. For example:

  npx env-cmd yarn dev

### Local Database

When you make changes in prisma/schema.prisma, you can create a migration by running `yarn prisma:migrate:save`. Apply it to your local db with `yarn prisma:migrate:up`.

A database import is not necessary for development, as Prisma will create the necessary structure.

### Testing

Tests are run using [Jest](https://jestjs.io/). Simply execture `npx jest` from the command line to run.

## Project Structure

For information on how the teams are created and how challenges are assigened, see the [Readme](./teamMatchMaking/Readme.md) file in the teamCreation folder.

## Database

A GraphQl tool is available on the endpoing `/api/graphql`. You will need to be logged into the application as an administrator in order to execute mutations. Typical queries can be found in the file [example-queries.graphql](./example-queries.graphql).

## Conventions

### Version Control

The working branch for production is "master". The titles of commits to master should be prefixed with a [semantic description](https://semantic-release.gitbook.io/semantic-release/) of the nature of the change. For example `fix:` or `feat:`. This will provide more meaning during the release process.

### Code

Code formatting is done with [Prettier](https://prettier.io/). The build process may fail if the format is not followed well enough.

## Creators

(in alphabetical order)

- [Dimitri Balidis](https://www.linkedin.com/in/dimitri-balidis/)
- [Daniel Isenegger](https://www.linkedin.com/in/daniel-isenegger-81a8876/)
- [Tomáš Knápek](https://www.linkedin.com/in/knapeto/)
- [Norbert Kremer](https://www.linkedin.com/in/norbert-kremer-90a6b76b/)
- [Gabriella Kovács](https://www.linkedin.com/in/gabriella-kov%C3%A1cs-95915310a/)
- [Oleg Lavrovsky](https://www.linkedin.com/in/loleg/)
- Michael Leu
- [Karolos Potamianos](https://www.linkedin.com/in/karolos/)
- [Gabor Raz](https://www.linkedin.com/in/gabor-raz-03b05686/)
- [Claudio Romano](https://www.linkedin.com/in/claudio-romano-52181744/)
- [Marco Wettstein](https://www.linkedin.com/in/marco-wettstein-b1b8938b/)
- [Tomáš Witek](https://www.linkedin.com/in/tomaswitek/)
- [Nicolas Zanotti](https://www.linkedin.com/in/nicolas-zanotti/)
- [Remo Zumsteg](https://www.linkedin.com/in/remozumsteg/)
