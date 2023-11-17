import axios from "axios";
import { displayResult } from "./displayResult";

const POLL_INTERVAL = 10000;

export async function pollForResult(
    apiKey: string,
    dataId: string
): Promise<void> {
    while (true) {
        await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL));

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
