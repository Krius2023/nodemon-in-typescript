# nodemon-in-typescript
Using nodemon in developing typescript project



1. Clone Repository:

`git clone https://github.com/Krius2023/nodemon-in-typescript.git`

2. Install Dependencies:

`npm install`

3. Transpile TypeScript Files:

`tsc`

This command will generate JavaScript files in the `dist` folder according to the settings in `tsconfig.json` file.

4. Run Watch Mode:

`npm run watch`

This command will watch for changes in TypeScript files and automatically transpile them to JavaScript whenever they are modified.

5. Run Development Server:

`npm run dev`

This command will start the development server, allowing to test the application. Ensure the server is configured to serve files from the `dist` folder, where the compiled JavaScript files are located.

With these steps, a development environment is established where modifications to TypeScript files trigger automatic transpilation to JavaScript, and the server reflects these changes in its responses.
