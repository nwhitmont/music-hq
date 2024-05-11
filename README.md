# music-hq

## Overview

This is an example project that demonstrates a Full Stack Typescript web application utilizing the modern (2024) tooling:

- [Nx monorepo](https://nx.dev/) project architecture
- [Nest.js](https://nx.dev/nx-api/nest) API server with [TypeORM](https://typeorm.io/) and Dockerized [PostgreSQL](https://hub.docker.com/_/postgres) database for quick local development setup
- [Next.js](https://nx.dev/nx-api/next) Web client application using [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

## Global Dependencies

- [Homebrew](https://brew.sh) (macOS)
- [Node.js >= LTS](https://nodejs.org/en/about/previous-releases) + npm - `brew install node`
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [DBeaver](https://dbeaver.com/download/)

## How to run this project

### Project Setup

- Download GitHub repository to your local projects directory
- `cd music-hq/`
- `code .` - open monorepo in VSCode
- In VSCode: Install the recommended Extensions
- `npm install` - install project dependencies
- `nx start.db` - start the database container
- `nx check.db` - verify db container is running
- `nx api.dev` - start the API server in development mode
- `nx web.dev` - start the Web client in development mode

## Basic Commands

Note: for nx custom task deinitions, see: ./package.json -> scripts section

```
// check if database container is running
> nx check.db

// start database container
> nx db.start

// stop the database container
> nx db.stop

// check if API server is running
> nx check.api

// start the API server in dev mode
> nx api.dev

// start the Web client application
> nx web.dev
```
