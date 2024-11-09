const moduleNameMapper = { 
    '\\.(css|scss|sass)$': 'identity-obj-proxy', 
'\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/fileMock.js' };
const transform = {
    '^.+\\.(js|jsx)$': 'babel-jest',
};

const moduleFileExtensions = ['js', 'jsx'];
const testEnvironment = 'jsdom';
const setupFilesAfterEnv = ['./src/setupTests.js'];

const config = {
    moduleNameMapper,
    transform,
    moduleFileExtensions,
    testEnvironment,
    setupFilesAfterEnv,
};

module.exports = config;