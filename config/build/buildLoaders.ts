import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
            use: 'ts-loader',
        exclude: /node_modules/,
    }
    const cssLoader =  {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module\.\w+$/i,
                        localIdentName: isDev ? "[path]-[local]--[hash:base64:4]" : "[hash:base64:4]"
                    }
                }
            },
            "sass-loader",
        ],
    }
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
    return [
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ];
}
export default buildLoaders;
