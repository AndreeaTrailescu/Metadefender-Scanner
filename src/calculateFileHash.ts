import * as fs from "fs";
import * as crypto from "crypto";

export function calculateFileHash(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash("sha256");
        const stream = fs.createReadStream(filePath);

        stream.on("data", (data) => {
            hash.update(data);
        });

        stream.on("end", () => {
            const fileHash = hash.digest("hex");
            resolve(fileHash);
        });

        stream.on("error", (error) => {
            reject(error);
        });
    });
}
