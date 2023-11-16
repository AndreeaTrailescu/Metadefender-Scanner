import axios, { AxiosResponse } from "axios";

export async function lookupHashInMetadefender(
    hash: string,
    apiKey: string
): Promise<AxiosResponse | null> {
    try {
        const response = await axios.get(
            `https://api.metadefender.com/v4/hash/${hash}`,
            {
                headers: {
                    apikey: apiKey,
                },
            }
        );

        return response;
    } catch (error) {
        console.error("There are not cached results");
        return null;
    }
}
