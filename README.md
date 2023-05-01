# React Generator (Webpack + Babel)

A React app generator bundled with Webpack 5 and Babel

## Features

- [x] Webpack Hot Module Replacement
- [x] Bundle Optimization
- [x] React Testing Library with Jest for unit testing
- [x] Support for various type of images, fonts
- [x] Transpile code with Babel
- [x] Support css module and scss module
- [x] Minified js and stylesheet
- [x] Integrated BundleAnalyzerPlugin to inspect bundle size
- [x] Remove console.log() on production

## Usage

To create a react project, you can run the following command.

```bash
npx @chan_alston/react-generator@latest
```

You will then be prompted to enter your *project name* and select the package manager you desire.

## File Structure

```text
my-app
└── __mocks__
    ├── fileTransformer.js
    ├── identity-obj-proxy-esm.js
    ├── intersectionObserverMock.js
    └── setupTests.js
└── public
    └── font
        └── PoetsenOne.tff
    ├── favicon.ico
    ├── index.html
    ├── react.png
    └── webpack.png
└── src
    ├── index.js
    └── routes
        └── __test__
            └──index.tst.js
        ├── _routes.js
        └── index.js
    └── styles
        ├── global.scss
        └── homepage.module.scss
├── .env.example
├── .eslintignore
├── .eslintrc.json
├── babel.config.js
├── .gitignore
├── jest.config.js
├── package.json
├── postcss.config.js
├── README.md
├── webpack.config.js
├── webpack.dev.js
└── webpack.prod.js
```
