import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {WebpackPluginInstance} from "webpack";

interface IBuildOptions {
    htmlPath: string
}
function buildPlugins(optionsIBuildOptions: IBuildOptions): WebpackPluginInstance[] {
    const {htmlPath} = optionsIBuildOptions
    return [
        new HtmlWebpackPlugin({
            template: htmlPath
        }),
        new webpack.ProgressPlugin()
    ];
}

export default buildPlugins;
