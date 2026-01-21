export function UploadWidget() {
  return (
    <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg w-80 text-center">
      <input type="file" className="mb-4" />
      <button className="bg-zinc-900 max-w-[360px] rounded-3xl">
        Upload
      </button>
    </div>
  )
}