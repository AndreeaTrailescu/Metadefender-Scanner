import axios from "axios";
import { MetadefenderResponse } from "./components/MetadefenderResponse";
import { NewEngineFormat } from "./components/NewEngineFormat";
import { Engine } from "./components/Engine";
import { displayResult } from "./displayResult";

export async function pollForResult(
    apiKey: string,
    dataId: string
): Promise<void> {
    const pollInterval = 10000;

    while (true) {
        await new Promise((resolve) => setTimeout(resolve, pollInterval));

        try {
            const response = await axios.get(
                `https://api.metadefender.com/v4/file/${dataId}`,
                {
                    headers: {
                        apikey: apiKey,
                        "x-file-metadata": 1,
                    },
                }
            );

            const progressPercentage = response.data.scan_results
                .progress_percentage as number;

            if (progressPercentage === 100) {
                displayResult(response);
            }
        } catch (error) {
            console.error(`Polling error: ${error}`);
        }
    }
}
