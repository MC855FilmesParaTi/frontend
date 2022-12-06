# FilmesPraTi Frontend Project

This project was built with Create React App, with a Typescript template, using css modules and sass for styling and storybook for component development. (The storybook toolset was uninstalled due to package compatibility problems when building)

To start developing, after cloning this repo, on the project root folder, run `npm install` and `npm start` to run the development server.

To start the Storybook for this project, run `npm run storybook`

There are some vscode configurations commited with this repo. When opening the project, install the recommended extensions: `Prettier` and `Eslint`. Then, after each file save, the code will automatically be formatted, and you will see linter errors / warnings on your code as you type.

There is a debugger configuration already saved on this project. First, start the development server with `npm start`, wait for it to start, and then on the debug view, click on the play button for the Chrome run configuration. This will open a new chrome with the code and breakpoints on the vsccode attached to it's javascript.

To build this project, run `npm run build`, and to deploy it to github pages, run `npm run deploy`.

The deployment was made using github pages due to free tier limitations on our cloud services available at the time. There are some adjustments to deal with the redirect problem on the github pages deploy.

The next step for this project is to move the deployment to a CDN service on a cloud provider. You should be able to build this app as static files (html, js and css), and upload it to a storage system (AWS S3), and configure a CDN (Amazon ColoudFront) to serve the files uploaded on S3. For correct instructions, follow the [create react app docs](https://create-react-app.dev/docs/deployment/).

Other important step is to apply correctly the Typescript types on all untyped variables, solve the linter warnings, adjust accessibility (tune the color pallete), and then proceed to add the project's new features.
