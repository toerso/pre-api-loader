import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import babel from '@rollup/plugin-babel';
import commonjs from "rollup-plugin-commonjs";
import cleanUp from 'rollup-plugin-cleanup';

const extensions = ['.js', '.ts'];

export default [
    {
        input: './src/index.js',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                exports: 'named'
            },

            {
                file: pkg.module,
                format: 'es',
                exports: 'named'
            }
        ],
        external: ['@babel/runtime'],
        plugins: [
            resolve({
                extensions
            }),
            babel({
                exclude: 'node_modules/**',
                extensions,
                babelHelpers: "runtime",
            }),
            commonjs({
                include: /node_modules/
            }),
            cleanUp()
        ]
    }
];