<div align="center" style='display:flex; justify-content:center'>
  <img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' />
  <img src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black" />
  <img src="https://img.shields.io/badge/scss-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
  <img src="https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red" />
  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/webpack-5299c7.svg?style=for-the-badge&logo=webpack&logoColor=white" />
</div>

# React Generator (Webpack + Babel)

A React app generator bundled with Webpack 5 and Babel

## Package. json script option

### 1. `npm run dev`

Set the `NODE_ENV` environment variable to *development* and start a webpack dev server at ***[localhost:3000](http://localhost:3000)*** using the `webpack.dev.js` configuration file. You may open ***[localhost:8888](http://localhost:8888)*** and visualized the bundle size of the application.

### 2. `npm run build:local`

Set the `NODE_ENV` environment variable to *production* and output the bundled application to `/dist` directory using the `webpack.prod.js` configuration file. The `--env ANALYZE=true` will enable **BundleAnalyzerPlugin** and open ***[localhost:8888](http://localhost:8888)*** automatically upon bundled file is outputted to the `dist` directory. Optimal for local development.

### 3. `npm run build`

Set the `NODE_ENV` environment variable to *production* and output the bundled application to `/dist` directory using the `webpack.prod.js` configuration file. The `--env ANALYZE=false` will disable **BundleAnalyzerPlugin**. Optimal for production deployment.

### 4. `npm run test`

Set the `NODE_ENV` environment variable to *test* and test all the file with the extension of `.test.js`.

### 5. `npm run lint`

Lint all the code in the `src` directory (except .test) file.

### 6. `npm run lint:fix`

Lint all the code in the `src` directory (except .test) file and fix all the auto fixable warning/error.

## Running **`dist`** folder file locally

To run the built version locally, install the following package (globally on your machine).

```bash
npm install -g http-server
```

Use the following command in the `dist` folder to start the server locally.

```bash
http-server
```
