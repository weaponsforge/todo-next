## todo-next

todo-next is a regular TO-DO notes listing app aimed for testing using NextJS and Redux Toolkit for front-end.<br>It also features a simple Todo CRUD API running on an express backend and uses mongodb for storing data.

### Table of Contents

- [Installation](#installation)
- [Installation Using Docker](#installation-using-docker)
- [Docker for Localhost Development](#docker-for-localhost-development)
   - [Build Local Images](#build-local-images)
   - [Use Pre-Built Development Images](#use-pre-built-development-images)
   - [Seed MongoDB with Default Data](#seed-mongodb-with-default-data)
   - [Docker Commands](#docker-commands)
- [Deployment With GitHub Actions](#deployment-with-gitHub-actions)

## Installation

1. Clone this repository.<br>
`https://github.com/weaponsforge/todo-next.git`

2. Read the instructions on the **README** files inside the `/server` and `/client` directories for more information on configuring and using the client and backend.

## Installation Using Docker

We can use Docker to run dockerized client and server apps for local development and production mode. The following methods require Docker and Docker compose correctly installed and set up on your development machine.

### Docker Dependencies

The following dependencies are used to build and run the image. Please feel feel free to use other OS and versions as needed.

1. Ubuntu 22.04.1
   - Docker version 23.0.1, build a5eeb1
   - Docker Compose v2.16.0
2. Microsoft Windows 10 Pro
   - version 10.0.19045 Build 19045
   - Docker Desktop
      - Docker Compose version v2.27.1-desktop.1
      - Docker Engine version 26.1.4, build 5650f9b

### Docker for Localhost Development

#### Build Local Images

1. Set up the environment variables for the `/client` and `/server` directories.
   - Visit the `client/README.md` and `server/README.md` files for more information.
   - Take note of the `.env` variables setup for Windows and Linux to enable hot reload.
2. Verify that ports 3000 and 3001 are free because the client and server containers will use these ports.
3. Stop current-running containers, if any.
   ```
   docker compose -f docker-compose.dev.yml down
   docker compose -f docker-compose.prod.yml up
   ```
4. Stop and delete all docker instances for a fresh start.
   - > **NOTE:** Running this script will delete all docker images, containers, volumes, and networks. Run this script if you feel like everything is piling but do not proceed if you have important work on other running Docker containers.
   - ```
     sudo chmod u+x scripts/docker-cleanup.sh
     ./scripts/docker-cleanup.sh
     # Answer all proceeding prompts
     ```
5. Edit any of the files under the `/client` or `/server` directory after running step no. 2.2 and wait for their live reload on `http://localhost:3000` (client) and `http://localhost:3001` (server).
   ```
   # 5.1. Build the client and server containers for localhost development.
   docker compose -f docker-compose.dev.yml build

   # 5.2. Create and start the development client and server containers
   docker compose -f docker-compose.dev.yml up

   # 5.3. Stop and remove the development containers, networks, images and volumes
   docker compose -f docker-compose.dev.yml down
   ```

#### Use Pre-Built Development Images

This project deploys the latest **client** and **server** development Docker images to Docker Hub on the creation of new Release/Tags. They are available at:

https://hub.docker.com/r/weaponsforge/todo-next

1. Pull the pre-built development Docker image using any of the two (2) options:
   - Open a terminal and run:
      ```
      docker pull weaponsforge/todo-next:client
      docker pull weaponsforge/todo-next:server
      ```
   - Navigate to the gsites-components root project directory, then run:
      `docker compose -f docker-compose.dev.yml pull`

2. Set up the environment variables for the `/client` and `/server` directories.
   - Visit the `client/README.md` and `server/README.md` files for more information.
   - Take note of the `.env` variables setup for Windows and Linux to enable hot reload.

3. Run the development images.<br>
`docker compose -f docker-compose.dev.yml up`

#### Seed MongoDB with Default Data

(Optional) To seed the container mongodb with default data:

1. Create a `"/data/dump"` directory in the root project directory.
2. Put binary data in the dump directory (data from `mongodump`)
3. Start the development client and server containers (**# 5**)
4. Run this script in another terminal (use GitBash if on Windows OS):<br>
   ```bash
   chmod u+x scripts/docker-mongo-seed.sh
   ./scripts/docker-mongo-seed.sh
   ```

### Docker for Production Deployment

The following docker-compose commands build a small client image targeted for creating optimized dockerized apps running on self-managed production servers. An Nginx service serves the frontend client on port 3000. Hot reload is NOT available when editing source codes from the `/client` and `/server` directories.

1. Follow step numbers 1 - 4 in the [Docker for Localhost Development](#docker-for-localhost-development) section.

2. Build the client and server containers for production deployment.<br>
   - > **NOTE:** Run this step only once or as needed when housekeeping docker images or if there are new source code updates in the **/client** or **/server** directories.
   - `docker compose -f docker-compose.prod.yml build`

3. Load the production mode apps on `http://localhost:3000` (client) and `http://localhost:3001` (server) after running step no. 3.1.
   ```
   # 3.1. Create and start the production client and server containers.
   docker compose -f docker-compose.prod.yml up

   # 3.2. Stop and remove the production containers, networks, images and volumes
   docker compose -f docker-compose.prod.yml down
   ```

### Docker Commands

- **view list of running containers**
   - `docker ps -a`
- **bash into the development mongodb container**<br>
   - `docker exec -it <MONGO_CONTAINER> /bin/sh`
- **bash into the development mongodb shell**<br>
   - `docker exec -it <MONGO_CONTAINER> mongo -u <DB_USERNAME> -p <DB_PASS> <SERVICE_NAME>:27017/<DB_NAME> --authenticationDatabase <AUTH_SOURCE_FROM_URI>`
   - i.e. (see the .env.example and docker-compose.dev.yml files)<br> `docker exec -it mongodb mongo -u admin -p secret mongo:27017/todo-next --authenticationDatabase admin`
- **seed default data using mongorestore**
  - _(Bash into the development mongodb container, then):_
     - `mongorestore --host <SERVICE_NAME>:27017 -d <DB_NAME> -u <DB_USER> -p <DB_PASS> --authenticationDatabase <AUTH_SOURCE_FROM_URI> PATH/TO/dump`
     - i.e. (see the .env.example and docker-compose.dev.yml files)<br>
  `mongorestore --host mongo:27017 -d todo-next -u admin -p secret --authenticationDatabase admin /data/dump`
  - _(Directly from the command line):_<br>
    - `docker exec -it <MONGO_CONTAINER> mongorestore --host <SERVICE_NAME>:27017 -d <DB_NAME> -u <DB_USER> -p <DB_PASS> --authenticationDatabase <AUTH_SOURCE_FROM_URI> /data/dump`
    - `docker exec -it mongodb mongorestore --host mongo:27017 -d todo-next -u admin -p secret --authenticationDatabase admin /data/dump`

## Deployment With GitHub Actions

This project deploys the production live demo to GitHub Pages (front end) and Vercel (server). It uses MongoDB Atlas for MongoDB. The following requirements are optional. They are only required if there is a need to deploy the web application for live demonstration purposes.

### Requirements

1. GitHub Pages setup
2. Vercel account
   - pre-configured with a [stand-alone Express server](https://vercel.com/guides/using-express-with-vercel) of the repository's **server** component
3. MongoDB Atlas database
4. Docker Hub account
   - (Optional) required to push the development images to Docker Hub

#### GitHub Secrets

| GitHub Secrets | Description |
| --- | --- |
| NEXT_PUBLIC_BASE_PATH | Root directory path name that NextJS uses for assets, media and client-side routing for the app.<br><br>Set its value to blank `''` when working on development mode in localhost.<br><br>Set its value to the sub-directory name where the exported NextJS app is to be deployed, i.e. `/<YOUR_REPOSITORY_NAME>` when<br> deploying on a repository (sub-directory) of a root GitHub Pages site, i.e, on `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>` |
| BASE_API_URL | 	Base URL of the Todo CRUD API from the `/server` directory. |
| VERCEL_ORG_ID | Vercel app's organization ID |
| VERCEL_PROJECT_ID | Vercel app's project ID |
| VERCEL_TOKEN | Vercel app's project ID |
| DOCKERHUB_USERNAME | (Optional) Docker Hub username. Required to enable pushing the development image to Docker Hub. |
| DOCKERHUB_TOKEN | (Optional) Deploy token for the Docker Hub account. Required to enable pushing the development image to the Docker Hub. |

#### GitHub Variables

| GitHub Variable | Description |
| --- | --- |
| DOCKERHUB_USERNAME | (Optional) Docker Hub username. Required to enable pushing the development image to Docker Hub. |

@weaponsforge<br>
20220820<br>
20240714