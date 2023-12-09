export default {
     testEnvironment: 'jsdom',
     roots: ['<rootDir>/src'],
     testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
     setupFilesAfterEnv: ["<rootDir>/path/to/setupTests.js"],
     moduleNameMapper: {
       '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
       '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
     },
     transform: {
       '^.+\\.(js|jsx)$': 'babel-jest',
     },
   };
   