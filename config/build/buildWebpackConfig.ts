import {Configuration} from "webpack";
import buildPlugins from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import {BuildOptions} from "./types/config";

function buildWebpackConfig(buildOptions: BuildOptions): Configuration {
    const {mode, path} = buildOptions
    const {entry, build, html} = path
    return  {
        mode: mode,
        entry,
        output: {
            filename: 'bundle.js',
            path: build,
            clean: true
        },
        plugins: buildPlugins({htmlPath: html}),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}

export default buildWebpackConfig;