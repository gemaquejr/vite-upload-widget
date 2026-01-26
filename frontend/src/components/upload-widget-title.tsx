import { UploadCloud } from "lucide-react"

export function UploadWidgetTitle() {
    const isThereAnyPendingUploads = true; // Placeholder for future state management
    const uploadGlobalPercentage = 76; // Placeholder for future state management

    return (
        <div className="flex items-center gap-1.5 text-sm font-medium">
            <UploadCloud className="size-4 text-zinc-400" strokeWidth={1.5} />
            {isThereAnyPendingUploads ? (
                <span className="flex items-baseline gap-1">
                    Uploading
                    <span className="text-xs text-zinc-400 tabular-nums">{uploadGlobalPercentage}%</span>
                </span>
            ) : (
                <span>Upload Files</span>
            )}
        </div>
    );
}