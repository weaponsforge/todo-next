## todo-next / client

This directory will contain the web user interfaces for interacting with the Todo CRUD API.

## Requirements

1. Windows, Linux or Mac OS
2. NodeJS LTS v16.14.2

### Core Libraries/Frameworks

(See package.json for more information)

1. NextJS 12.2.5
2. React 18.2.0
3. Material-UI v5.10.1

## Installation

1. Install dependencies.<br>
`npm install`

2. Set up the environment variables. Create a `.env `file inside the root project directory with reference to the `.env.example` file.<br>

   | Variable Name         | Description                                                                                                                                                                                                                                                                                                                                               |
   | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | NEXT_PUBLIC_BASE_PATH | Directory name of assets and media that NextJS uses for the app.<br><br>Set its value to blank `''` when working on development mode in localhost.<br>Set its value to the sub-directory name where the exported NextJS app is to be deployed, i.e. `/<YOUR_REPOSITORY_NAME>` when deploying on a repository (sub-directory) of a root GitHub Pages site. |
   | BASE_API_URL          | Base URL of the Todo CRUD API from the `/server` directory. |
   | WATCHPACK_POLLING | Enables hot reload on NextJS apps (tested on NextJS v13.2.1) running inside Docker containers on a Windows host. Set it to `true` if running Docker Desktop with WSL2 on a Windows OS.|

## Usage

1. Run the project in development mode.<br>
`npm run dev`
2. Launch the development website from:<br>
`http://localhost:3000`
3. Check for lint errors.
   - `npm run lint` (check lint errors)
   - `npm run lint:fix` (fix lint errors)
5. Export the static website.<br>
`npm run export`


@weaponsforge<br>
20220820
