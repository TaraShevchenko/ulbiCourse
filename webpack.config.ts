import path from 'path';
import buildWebpackConfig from "./config/build/buildWebpackConfig";
import {BuildOptions} from "./config/build/types/config";

const mode = 'development'
const isDev = mode === 'development'

const buildOptions: BuildOptions = {
    mode,
    isDev,
    path: {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve('build'),
        html: path.resolve(__dirname, 'src', 'index.html'),
    }
}

export default buildWebpackConfig(buildOptions);