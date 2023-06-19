/*
 * @Author: xiaohu
 * @Date: 2023-06-19 17:54:47
 * @LastEditors: xiaohu
 * @LastEditTime: 2023-06-19 19:51:33
 * @FilePath: \yeyu-low-code\.eslintrc.js
 * @Description: 
 */
// import { defineConfig } from "eslint-define-config"
const { defineConfig } = require("eslint-define-config")
module.exports = defineConfig({
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        'standard',
        'standard-jsx'
    ],
    "parser": "@typescript-eslint/parser",
    "rules": {
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off'
    }
})
