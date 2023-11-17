import { calculateFileHash } from "./calculateFileHash";
import { displayResult } from "./displayResult";
import { getMetadefenderHash } from "./getMetadefenderHash";
import { pollForResult } from "./pollForResult";
import { uploadFileToMetadefender } from "./uploadFileToMetadefender";

async function init() {
    const apiKey = process.env.API_KEY;
    const filePath = process.env.FILE_PATH || "./src/utils/ceva.txt";

    if (!apiKey) {
        console.error("API key is undefined.");
    } else {
        try {
            const hash = await calculateFileHash(filePath);
            const hashResponse = await getMetadefenderHash(hash, apiKey);

            if (hashResponse === null) {
                const dataId = await uploadFileToMetadefender(filePath, apiKey);

                await pollForResult(apiKey, dataId);
            } else {
                displayResult(hashResponse);
            }
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }
}

init();
