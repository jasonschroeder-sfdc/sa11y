/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    testPathIgnorePatterns: ['__tests__/wdio.test.ts'],
    testEnvironment: 'jsdom',
    testRunner: 'jest-jasmine2',
};
