# music-hq

## Overview
This is an example project that demonstrates a Full Stack Typescript web application utilizing the modern (2024) tooling:
- [Nx monorepo](https://nx.dev/) project architecture
- [Nest.js](https://nx.dev/nx-api/nest) API server with [TypeORM](https://typeorm.io/) and Dockerized [PostgreSQL](https://hub.docker.com/_/postgres) database for quick local development setup
- [Next.js](https://nx.dev/nx-api/next) Web client application using [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)


## Global Dependencies
- Node.js
- Docker Desktop
## Basic Commands
```
// check if database container is running
> nx check.api

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
