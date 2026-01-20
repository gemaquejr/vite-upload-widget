import z from "zod"

const envSchema = z.object({
    FIREBASE_PROJECT_ID: z.string(),
    FIREBASE_CLIENT_EMAIL: z.string().email(),
    FIREBASE_PRIVATE_KEY: z.string(),
    FIREBASE_STORAGE_BUCKET: z.string(),
})

export const env = envSchema.parse(process.env)
