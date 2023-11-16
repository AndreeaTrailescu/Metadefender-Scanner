import { AxiosResponse } from "axios";
import { Engine } from "./components/Engine";
import { MetadefenderResponse } from "./components/MetadefenderResponse";
import { NewEngineFormat } from "./components/NewEngineFormat";
import * as path from "path";

export function displayResult(response: AxiosResponse) {
    const scanDetails = response.data.scan_results.scan_details as {
        [engine: string]: Engine;
    };

    const engines = Object.entries(scanDetails).map(
        ([engineName, details]) => ({
            engine: engineName,
            defTime: details.def_time,
            scanResult: details.scan_result_i,
            threatFound: details.threat_found || "clean",
        })
    ) as NewEngineFormat[];

    const result: MetadefenderResponse = {
        fileName: path.basename(process.env.FILE_PATH as string),
        overallStatus: response.data.process_info.result as string,
        engines,
    };

    console.log(JSON.stringify(result));
}
