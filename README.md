
# Live link
[Preview](https://lfl-countdown.vercel.app/).
# Countdown
## Improved countdown
The below component was designed to count down the days until our CTO's birthday, but it still needs some work. How can you make the implementation better?
- The countdown by default has a static date of 2020-12-24T00:00:00 which is not a good experience. 
- The best possible experience is to make it  dynamic an enable the user create their Custom countdown which I have implemented.
- The User Interface also doesn't look interactive and eye-catching, because of this, I created a very interactive and eye-catching User Interface while making it accessible  and easy for everyone to understand.

**Do a critique:** The current implementation isn't perfect. How could it be improved?

* Pick an area of improvement to implement.
- Fixing the countdown output bug to achieve the correct result.
- Introducing React Hooks to handle lifecycles, for short, simple and easy-to-understand code. 
- Implementing a beautiful, dynamic and good User interface and experience.

* What would happen to the current code if the date were changed, the page layout was changed or the format was changed? 
- If the date format were changed, the countdown will not function correctly as it requires a string that can be parsed by Javascript Date object.
-  If the date is not passed to the countdown component, the countdown shows '00' for all values which isn't correct.
If the layout was changed to a responsive and interactive layout, this will provide a good experience for the User and also make the Celebrant happier.

* Does the current implementation follow best practices for HTML, CSS, JS and React? Most of the implementation follows best practice except the comma sign after the <Countdown /> component. Irrelevant files, assets and code blocks should also be removed as well as unused comments. 


**Spice it up:** Let's be honest, this countdown could be a whole lot more exciting.
* What could you do to create a greater sense of urgency?
1. Change the layout which includes the Font properties(weight, size), colors for different status depending on the current state of the countdown and add moderate animations to improve the User experience which has all been done by me.
2.  In the future I could also send a reminder to the Celebrant's mail and even add it to their online calendar because it's an important event.


* How would you make this countdown more aesthetically pleasing? 
1. Get the correct Birth date
2. Replace counts to 'Happy Birthday [celebrant Name]' once it gets to the Birth date
3. Make the Fonts descriptive and use appropiate colors to correctly describe the current countdown state
4. Animation is very important but should not be misused.


* Trust your design instincts, and explain how your design choices impact the user experience
1. Using the user name would make them feel appreciated.
2. The fonts and colors if used appropiately would catch the attention of the celebrant and other users which would make them spend more time appreciating the application.
3. Usage of good animation would give the user a sense of interactivity and put a smile on their face as it signifies celebration which is a Wonderful experience.
4. Usage of Semantic HTML and taking accessibilit into consideration will help those who are in need of it as they can use screen reader to get the point of the Application's information.
5. Responsive design also go a long way to make the application accessible and provide good experience on different devices and their sizes.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
