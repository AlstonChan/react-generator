# React Generator (Webpack + Babel/SWC)

A React app generator bundled with Webpack 5 and Babel/SWC

## Features

- [x] Webpack Hot Module Replacement
- [x] Bundle Optimization
- [x] React Testing Library with Jest/Vitest for unit testing
- [x] Support for various type of images, fonts
- [x] Transpile code with Babel/SWC
- [x] Support css module and scss module
- [x] Minified js and stylesheet
- [x] Integrated BundleAnalyzerPlugin to inspect bundle size
- [x] Remove console.log() on production

## Usage

To create a react project, you can run the following command.

```bash
npx @chan_alston/react-generator@latest
```

You will then be prompted to enter your *project name* select the package manager you desire and the transpiler you want the project to use.

## File Structure

Using Babel as transpiler:

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
            └──index.test.js
        ├── _routes.js
        └── index.js
    └── styles
        ├── global.scss
        └── homepage.module.scss
├── .env.example
├── babel.config.cjs
├── .eslint.config.mjs
├── .gitignore
├── jest.config.js
├── package.json
├── postcss.config.js
├── README.md
├── webpack.config.js
├── webpack.dev.js
└── webpack.prod.js
```

Using SWC as transpiler:

```text
my-app
└── public
    └── font
        └── PoetsenOne.tff
    ├── favicon.ico
    ├── index.html
    ├── react.png
    └── webpack.png
└── src
    ├── index.js
    └── test
        └── index.test.jsx
    └── routes
        ├── _routes.jsx
        └── index.jsx
    └── styles
        ├── global.scss
        └── homepage.module.scss
├── .env.example
├── .eslint.config.mjs
├── .gitignore
├── package.json
├── postcss.config.js
├── README.md
├── .swcrc
├── vitest.config.mjs
├── vitest.setup.mjs
├── webpack.config.js
├── webpack.dev.js
└── webpack.prod.js
```
