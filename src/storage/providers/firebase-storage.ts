import type { StorageProvider, UploadFileAsStreamInput } from "../storage"
import { bucket } from "../../lib/firebase"
import { basename, extname } from "node:path"

export class FirebaseStorageProvider implements StorageProvider {

    private sanitizeFileName(fileName: string) {
        const ext = extname(fileName)
        const baseName = basename(fileName, ext)
        const sanitizedBaseName = baseName.replace(/[^a-zA-Z0-9]/g, "")

        return sanitizedBaseName.concat(ext)
    }

    async uploadFileAsStream({
        path,
        contentType,
        stream,
    }: UploadFileAsStreamInput) {

        const sanitizedPath = this.sanitizeFileName(path)
        const file = bucket.file(sanitizedPath)

        await new Promise<void>((resolve, reject) => {
            const writeStream = file.createWriteStream({
                metadata: { contentType },
                resumable: false,
                public: true,
            })

            stream
                .pipe(writeStream)
                .on("finish", () => resolve())
                .on("error", reject)
        })

        const url = `https://storage.googleapis.com/${bucket.name}/${sanitizedPath}`

        return { url }
    }
}
