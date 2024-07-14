## todo-next / server

This directory contains the backend express app that serves the Todo CRUD API endpoints.

## Requirements

The following dependencies are used for this project's localhost development environment. Feel free to use other dependency versions as needed.

1. Windows 10 OS
2. nvm for Windows v1.1.9
3. NodeJS 16.14.2 installed using nvm
   - node v16.14.2
   - npm v8.5.0
4. MongoDB Community Edition (for Windows)
   - version 4.4.0
   - architecture: x86_64

## Content

- [todo-next / server](#todo-next--server)
- [Requirements](#requirements)
- [Content](#content)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - [`npm run dev`](#npm-run-dev)
  - [`npm run lint`](#npm-run-lint)
  - [`npm run lint:fix`](#npm-run-lintfix)

## Installation

1. Clone this repository.<br>
`https://github.com/weaponsforge/todo-next.git`

2. Go to the **/server** directory and install dependencies.<br>
`npm install`

3. Set up the environment variables. Create a `.env `file inside the **/server** directory with reference to the `.env.example` file.<br>

   | Variable Name         | Description                                                                                                                                                                                                                                                                                        |
   | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | API_WINDOW_MS_MINUTES | Time in `minutes` where `API_RATE_LIMIT` times of successive calls from an IP are allowed on the server.                                                                                                                                                                                           |
   | API_RATE_LIMIT        | It's the maximum number of allowed API requests on the server per `API_WINDOW_MS_MINUTES`. <br>Users will receive a `429 - Too many requests` server error after hitting the limit.<br>The limit will reset after API_WINDOW_MS_MINUTES minutes, after which users can resume making API requests. |
   | ALLOW_CORS            | Allow Cross-Origin Resource Sharing (CORS) on the API endpoints.<br><br>Default value is `1`, allowing access to domains listed in `ALLOWED_ORIGINS`.<br> Setting to `0` will make all endpoints accept requests from all domains, including Postman.                                              |
   | ALLOWED_ORIGINS       | IP/domain origins in comma-separated values that are allowed to access the API if `ALLOW_CORS=1`.<br> Include `http://localhost:3000` by default to allow CORS access to the **/client** app.                                                                                                      |
   | DEPLOYMENT_PLATFORM   | This variable refers to the backend `server`'s hosting platform, defaulting to `DEPLOYMENT_PLATFORM=regular`<br>for full-server NodeJS express apps.<br><br>Valid values are:<br>`regular` - for traditional full-server NodeJS express apps<br>`vercel` - for Vercel (serverless)                 |
   | MONGO_URI             | MongoDB connection string.<br>Default value uses the localhost MongoDB connection string. |
   | CHOKIDAR_USEPOLLING | Enables hot reload on `nodemon` running inside Docker containers on a Windows host. Set it to `true` if running Docker Desktop with WSL2 on a Windows OS. |
   | CHOKIDAR_INTERVAL | Chokidar polling interval. Set it along with `CHOKIDAR_USEPOLLING=true` if running Docker Desktop with WSL2 on a Windows OS. The default value is `1000`. |

## Usage

1. Run the app.<br>
`npm start`

## Available Scripts

### `npm start`

Run the express server for production mode.

### `npm run dev`

Run the server for development mode using [nodemon](https://www.npmjs.com/package/nodemon).

### `npm run lint`

Lint the server JavaScript source codes.


### `npm run lint:fix`

Fix JavaScript lint errors.

@weaponsforge<br>
20220820
