## todo-next

todo-next is a regular TO-DO notes listing app aimed for testing using NextJS and Redux Toolkit for front-end.<br>It also features a simple Todo CRUD API running on an express backend and uses mongodb for storing data.

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

1. Set up the environment variables for the `/client` and `/server` directories.
   - Visit the `client/README.md` and `server/README.md` files for more information.
   - Take note of the `.env` variables setup for Windows and Linux.
2. Verify that ports 3000 and 3001 are free because the client and server containers will use these ports.
3. Stop current-running my-phonebook containers, if any.
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
   # 2.1. Build the client and server containers for localhost development.
   docker compose -f docker-compose.dev.yml build

   # 2.2. Create and start the development client and server containers
   docker compose -f docker-compose.dev.yml up

   # 2.3. Stop and remove the development containers, networks, images and volumes
   docker compose -f docker-compose.dev.yml down
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

@weaponsforge<br>
20220820<br>
20240714