# pomodoro clock

Build a Pomodoro Clock. This is the last project of [FreeCodeCamp Front End Libraries Certification](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-pomodoro-clock).

This project was built with React and the design - inspired by iron man.

## Live Demonstration

Live project link: <https://rmasianjr.github.io/pomodoro-clock/>

## Screenshot

![screenshot-pomodoro](https://user-images.githubusercontent.com/37429704/51169926-15e02080-18e8-11e9-9e3d-b616bd6785a6.png)

## Objective

- [x] Build a CodePen.io app that is functionally similar to this: <https://codepen.io/freeCodeCamp/full/XpKrrW>. Fulfill the below user stories and get all of the tests to pass. Give it your own personal style. You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

## User stories

- [x] I can see an element with `id="break-label"` that contains a string (e.g. "Break Length").
- [x] I can see an element with `id="session-label"` that contains a string (e.g. "Session Length").
- [x] I can see two clickable elements with corresponding IDs: `id="break-decrement"` and `id="session-decrement"`.
- [x] I can see two clickable elements with corresponding IDs: `id="break-increment"` and `id="session-increment"`.
- [x] I can see an element with a corresponding `id="break-length"`, which by default (on load) displays a value of 5.
- [x] I can see an element with a corresponding `id="session-length"`, which by default displays a value of 25.
- [x] I can see an element with a corresponding `id="timer-label"`, that contains a string indicating a session is initialized (e.g. "Session").
- [x] I can see an element with corresponding `id="time-left"`. NOTE: Paused or running, the value in this field should always be displayed in `mm:ss` format (i.e. 25:00).
- [x] I can see a clickable element with a corresponding `id="start_stop"`.
- [x] I can see a clickable element with a corresponding `id="reset"`.
- [x] When I click the element with the id of `reset`, any running timer should be stopped, the value within `id="break-length"` should return to `5`, the value within `id="session-length"` should return to 25, and the element with `id="time-left"` should reset to it's default state.
- [x] When I click the element with the id of `break-decrement`, the value within `id="break-length"` decrements by a value of 1, and I can see the updated value.
- [x] When I click the element with the id of `break-increment`, the value within `id="break-length"` increments by a value of 1, and I can see the updated value.
- [x] When I click the element with the id of `session-decrement`, the value within `id="session-length"` decrements by a value of 1, and I can see the updated value.
- [x] When I click the element with the id of `session-increment`, the value within `id="session-length"` increments by a value of 1, and I can see the updated value.
- [x] I should not be able to set a session or break length to <= 0.
- [x] I should not be able to set a session or break length to > 60.
- [x] When I first click the element with `id="start_stop"`, the timer should begin running from the value currently displayed in `id="session-length"`, even if the value has been incremented or decremented from the original value of 25.
- [x] If the timer is running, the element with the id of `time-left` should display the remaining time in `mm:ss` format (decrementing by a value of 1 and updating the display every 1000ms).
- [x] If the timer is running and I click the element with `id="start_stop"`, the countdown should pause.
- [x] If the timer is paused and I click the element with `id="start_stop"`, the countdown should resume running from the point at which it was paused.
- [x] When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a break has begun.
- [x] When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the `id="break-length"` element.
- [x] When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a session has begun.
- [x] When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the `id="session-length"` element.
- [x] When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 `audio` tag and have a corresponding `id="beep"`.
- [x] The audio element with `id="beep"` must be 1 second or longer.
- [x] The audio element with id of `beep` must stop playing and be rewound to the beginning when the element with the id of `reset` is clicked.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
