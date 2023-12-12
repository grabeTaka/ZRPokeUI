# ZRP UI TEST

Technical test for selection process at ZRP. The frontend works to show the ability of pokemon inputed by the user.

React.js, Typescript, Jest, React Testing Library, Docker and Docker Compose were used to develop the frontend.

## Demo

The live demo may take a few minutes if the server is disabled due to inactivity, more details: <a href="https://render.com/docs/free">link</a>
<h4><a href="https://zrpokeui.onrender.com/"> Live Demo UI</a></h4>

![image](https://github.com/grabeTaka/ZRPokeUI/assets/128423774/e4d04a35-c4c0-42ef-8197-1b5ca91cd77b)


## .env file
To make things easier, the .env file will already be included when you clone the project.

Containing only a single environment variable called REACT_APP_API_ENDPOINT


## Installation and initialization with Docker-Compose

Stay in the root directory of this repository and type the command below to initialize the backend:

```bash 
  docker-compose build && docker-compose up
```
The application will run on port 4000

## Installation and initialization without Docker-Compose

```bash 
  npm i && npm run dev
```
The application will run on port 3000

![image](https://github.com/grabeTaka/ZRPokeUI/assets/128423774/51434feb-da72-4a88-8597-ff7446c8d456)


## Tests

To run tests please run follow command:

```bash 
  npm run test
```
![image](https://github.com/grabeTaka/ZRPokeUI/assets/128423774/f402066c-fe37-4c1a-8741-236bb83e74d8)



## Future improvements
- Add Cypress to end-to-end tests.
- Add storybook to document the components.
- Add Husky to run tests and lint before push
