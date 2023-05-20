import {Configuration as DevSeverConfiguration} from "webpack-dev-server";
import {BuildOptions} from "./types/config";

function buildDevServer(options: BuildOptions): DevSeverConfiguration {
    return {
        port: options.port,
        historyApiFallback: true,
    }
}

export default buildDevServer