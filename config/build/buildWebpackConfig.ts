import {Configuration} from "webpack";
import {BuildOptions} from "./types/config";
import buildPlugins from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildDevServer from "./buildDevServer";

function buildWebpackConfig(options: BuildOptions): Configuration {
    const {mode, path, isDev} = options
    const {entry, build} = path
    return  {
        mode: mode,
        entry,
        output: {
            filename: 'bundle.js',
            path: build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}

export default buildWebpackConfig;