# Current 5-day Weather Forecast App

## The task

Create an app that displays the current 5-day weather forecast for a location of your choice. Show
details for each day. Use Geolocation to retrieve the user’s current position. Retrieve a 5-day
forecast for a user-specified city. Allow users to drill into the hour detail for each day.
1. Try not to spend more than one working day on your solution (even if you do not
complete the entire exercise).
2. Build a web app using React.
3. OpenWeatherMap API Documentation: [http://openweathermap.org/forecast5](http://openweathermap.org/forecast5)
4. Give some thought to what will make a decent user experience. We would like to see
something readable but with no need to go all out on sleek and flashy UI elements.
5. Use any supporting technologies, package management, build systems, component
libraries that you are familiar with and feel are appropriate.
6. You can use any 3-rd party library.
7. Include unit tests for the most important parts of the code.
8. Provide a readme.md file that:
    - Documents how to run / build / test your creation.
    - Documents anything you might implement with more time (features, fixes,
technical debt corrections etc.).
9. The solution should be able to run locally on the browser.
10. Submit your code into a public git repository of your choice (GitHub / BitBucket etc.) -
(ideally with multiple commits to demonstrate your workflow)

#

# Starting the App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

`npm install` - downloads the required dependencencies. Must be run after the initial download of the project.

`npm start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

`npm test` - launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build` - builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

`npm run eject` - removes the single build dependency from the project. Instead, it copies all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into the project which allows full control over them. All of the commands except `eject` still work, but they point to the copied scripts so they can be tweaked. **Note: this is a one-way operation. Once you `eject`, you can't go back!**
#

## Marked for future improvements
  - The API doesn't provide a single forecast for the day. At the moment it displays the forecast for the day at 12 o'clock or the earliest possible, if 12 o'clock has passed, but it can be changed to check for prevailing data in specific day slots and displays it.
  - More details can be added in the detailed previes by hours.


