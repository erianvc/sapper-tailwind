module.exports = {
    verbose: true,
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.svelte$': 'svelte-jester',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testPathIgnorePatterns: ['<rootDir>/cypress/'],
    moduleFileExtensions: ['js', 'svelte'],
    moduleNameMapper: {
        '^@assets(.*)$': '<rootDir>/src/assets$1',
        '^@components(.*)$': '<rootDir>/src/components$1',
    },
    collectCoverage: true,
    coverageReporters: ['text','html'],
    coverageDirectory: '<rootDir>/coverage/',
}
