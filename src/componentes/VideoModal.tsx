type VideoModalProps = {
  isOpen: boolean
  videoUrl: string
  onClose: () => void
}

function VideoModal({
  isOpen,
  videoUrl,
  onClose,
}: VideoModalProps) {

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50">

      <div className="relative w-full max-w-4xl bg-gray-900 rounded-xl p-4">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl"
        >
          ✕
        </button>

        <div className="aspect-video">

          <iframe
            className="w-full h-full rounded-lg"
            src={videoUrl}
            title="Project demo"
            allowFullScreen
          />

        </div>

      </div>

    </div>
  )
}

export default VideoModal