# React Webpack Template

A React template bundled with Webpack 5

## Features

- [x] Webpack Hot Module Replacement
- [x] Bundle Optimization
- [x] React Testing Library with Jest for unit testing
- [x] Support for various type of images, fonts
- [x] Transplile code with Babel
- [x] Support css module and scss module
- [x] Minified js and stylesheet
- [x] Integrated BundleAnalyzerPlugin to inspect bundle size
- [x] Remove console.log() on production

## Installation

```bash
npm i https://github.com/AlstonChan/react-webpack-template.git
```

## Package. json script option

### 1. `npm run dev`

Set the `NODE_ENV` environment variable to *development* and start a webpack dev server at ***[localhost:3000](http://localhost:3000)*** using the `webpack.dev.js` configuration file. You may open ***[localhost:8888](http://localhost:8888)*** and visualized the bundle size of the application.

### 2. `npm run build-local`

Set the `NODE_ENV` environment variable to *production* and output the bundled application to `/dist` directory using the `webpack.prod.js` configuration file. The `--env ANALYZE=true` will enable **BundleAnalyzerPlugin** and open ***[localhost:8888](http://localhost:8888)*** automatically upon bundled file is outputed to the `dist` directory. Optimal for local development.

### 3. `npm run build`

Set the `NODE_ENV` environment variable to *production* and output the bundled application to `/dist` directory using the `webpack.prod.js` configuration file. The `--env ANALYZE=false` will disable **BundleAnalyzerPlugin**. Optimal for production deployment.

### 4. `npm run test`

Set the `NODE_ENV` environment variable to *test* and test all the file with the extension of `.test.js`.
