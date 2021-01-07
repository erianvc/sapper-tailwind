module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    plugins: ['svelte3'],
    extends: ['eslint:recommended', 'prettier'],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
            settings: {
                'svelte3/ignore-styles': () => true,
            },
        },
        {
            plugins: ['jest'],
            extends: ['plugin:jest/recommended'],
            files: ['src/**/*.spec.js'],
            rules: {
                'jest/no-disabled-tests': 'warn',
                'jest/no-focused-tests': 'error',
                'jest/no-identical-title': 'error',
                'jest/prefer-to-have-length': 'warn',
                'jest/valid-expect': 'error',
            },
            env: {
                'jest/globals': true,
            },
        },
        {
            plugins: ['cypress'],
            extends: ['plugin:cypress/recommended'],
            files: ['cypress/**/*'],
            env: {
                'cypress/globals': true,
            },
        },
    ],
}
