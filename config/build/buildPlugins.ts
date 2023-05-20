import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {WebpackPluginInstance} from "webpack";
import {BuildOptions} from "./types/config";

function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
    const {path} = options
    return [
        new HtmlWebpackPlugin({
            template: path.html
        }),
        new webpack.ProgressPlugin()
    ];
}

export default buildPlugins;
