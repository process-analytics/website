/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import noticePlugin from "eslint-plugin-notice";
import prettierRecommendedConfig from 'eslint-plugin-prettier/recommended';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import * as mdxPlugin from 'eslint-plugin-mdx';
import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
    {
    	// Actually, the new feature to ignore folders in conf file or in commande line, seems to not work after several tests.
    	// https://eslint.org/docs/latest/use/configure/ignore
        ignores: [ ".cache/", "node_modules/",  "public/", "build/", ".github/", ".idea/", "/config/" ],
    },

    // File-pattern specific overrides
    // javascript & typescript
    {
        files: ['**/*.js', '**/*.ts', '**/*.tsx'],
        ...eslint.configs.recommended,
        ...prettierRecommendedConfig, // Enables eslint-plugin-prettier, eslint-config-prettier and prettier/prettier. This will display prettier errors as ESLint errors.
        plugins: {
            notice: noticePlugin
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
                sourceType: 'module', // Allows for the use of imports
            },
        },
        rules: {
            'notice/notice': [
                'error',
                {
                    templateFile: 'config/license-header.js',
                    onNonMatchingHeader: 'replace',
                },
            ],
            'no-console': ['error', { allow: ['warn', 'error'] }],
        },
    },

    // disable type-aware linting on JS and markdown files
    {
        files: ['**/*.js', '**/*.mdx, **/*.md'],
        ...tseslint.configs.disableTypeChecked,
    },

    // typescript
    /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
    {
        files: ['**/*.ts', '**/*.tsx'],
        extends: [ // Feature of `typescript-eslint` to extend multiple configs: https://typescript-eslint.io/packages/typescript-eslint/#flat-config-extends
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
        ],
        ...importPlugin.flatConfigs.recommended,
        ...importPlugin.flatConfigs.typescript,
        settings: {
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
                    project: './tsconfig.json',
                },
            },
        },
        languageOptions: {
            parserOptions: {
                // This setting is required if you want to use rules which require type information
                // https://typescript-eslint.io/packages/parser/#project
                projectService: true,
            },
        },
        rules: {
            // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/explicit-function-return-type': [
                'warn',
                {
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true,
                },
            ],
            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {
                    accessibility: 'no-public',
                },
            ],
            '@typescript-eslint/consistent-type-exports': [
                'error',
                {
                    fixMixedExportsWithInlineTypeSpecifier: true,
                },
            ],
            '@typescript-eslint/consistent-type-imports': ['error'],
            '@typescript-eslint/dot-notation': 'error',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
        },
    },

    // markdown
    {
        ...mdxPlugin.flat,
        // optional, if you want to lint code blocks at the same
        processor: mdxPlugin.createRemarkProcessor({
            lintCodeBlocks: true,
        }),
    },
    {
        ...mdxPlugin.flatCodeBlocks,
        rules: {
            ...mdxPlugin.rules,
            // if you want to override some rules for code blocks
            'no-var': 'error',
            'prefer-const': 'error',
        },
    },
);
