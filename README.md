# React Weather App

This is the companion code for the Beginner React series on the [Scotch School](https://scotch.io/courses/getting-started-with-react).

I ❤️ Scotch

## Setup

Clone the project, install the dependencies, and run the project.

```
git clone https://github.com/Rob-Rychs/react-weather-app.git
cd react-weather-app
yarn
yarn start
```

Then open up your browser to `http://localhost:8080`, and you will be able to see the project.

This project uses a local db.json file as a database: find it at `http://localhost:3000/weather`

## Todo

- refactor WeatherListItem into functional component and refactor it's onClick method into it's own functional component (functional-refactor branch)

- refactor CurrentDay into functional component (functional-refactor branch)

- refactor ZipForm into functional component (functional-refactor branch)

- Implement an actual fetch call to use a weather API to replace local db.json ( will have to revert back to input field from select box, or use master branch, not functional-refactor)