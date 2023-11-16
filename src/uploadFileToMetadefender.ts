import * as fs from "fs";
import axios from "axios";
import FormData from "form-data";

export async function uploadFileToMetadefender(
    filePath: string,
    apiKey: string
): Promise<string> {
    try {
        const formData = new FormData();
        formData.append("file", fs.createReadStream(filePath));

        const response = await axios.post(
            "https://api.metadefender.com/v4/file",
            formData,
            {
                headers: {
                    apikey: apiKey,
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return response.data.data_id as string;
    } catch (error) {
        throw new Error(`Upload error: ${error}`);
    }
}
