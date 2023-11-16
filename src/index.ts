import { calculateFileHash } from "./calculateFileHash";
import { displayResult } from "./displayResult";
import { lookupHashInMetadefender } from "./lookupHashInMetadefender";
import { pollForResult } from "./pollForResult";
import { uploadFileToMetadefender } from "./uploadFileToMetadefender";

async function init() {
    const apiKey = process.env.API_KEY;
    const filePath = process.env.FILE_PATH || "./utils/ceva.txt";

    if (!apiKey) {
        console.error("API key is undefined.");
    } else {
        try {
            const hash = await calculateFileHash(filePath);
            const response = await lookupHashInMetadefender(hash, apiKey);

            if (response === null) {
                const newDataId = await uploadFileToMetadefender(
                    filePath,
                    apiKey
                );

                await pollForResult(apiKey, newDataId);
            } else {
                displayResult(response);
            }
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }
}

init();
