import path from 'path';
import buildWebpackConfig from "./config/build/buildWebpackConfig";
import {BuildEnv} from "./config/build/types/config";


export default (env: BuildEnv) => {
    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const port = env.port || 3000

    return buildWebpackConfig({
        mode,
        isDev,
        port,
        path: {
            entry: path.resolve(__dirname, 'src', 'index.ts'),
            build: path.resolve('build'),
            html: path.resolve(__dirname, 'src', 'index.html'),
        }
    })
};