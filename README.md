# react-skeleton
React Skeleton

1) Create folder
  -public
  -src

2) Initialize node project
  npm init

3) Install node packages
  -browserify
  -watchify
  -babelify
  -babel-preset-react
  -react
  -react-dom

4) Create React components folder


5) Create main.jsx - main entrypoint to react components

6) Add script to package.json to watch and compile automatically the main.jsx file on changes/updates
  "scripts": {
    "start": "watchify src/main.jsx -v -t [ babelify --presets [ react ] ] -o public/js/main.js",
    ...
  }
