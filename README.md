# Angular Webpack2 @ngtools/webpack AOT



## Create a new project

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/kunl/Angular-webpack-AOT.git  my-proj
cd my-proj
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm run dev
```

The `npm run dev` command first compiles the application and run webpack-dev-server, 
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

Open browser at http://localhost:3000.

For a lighter development web server (not watching for file changes though), build or
rebuild when needed with:

```bash
npm build
```

then have a separate shell open where you launched

```bash
npm run serve
```

Again, open browser at http://localhost:3000.
