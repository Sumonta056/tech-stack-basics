import { LazyImage } from "./LazyImage";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 text-center mb-4">
          🖼️ Lazy Loading Gallery
        </h1>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Scroll down slowly to see images load as they enter the viewport
        </p>

        <div className="space-y-0">
          {images.map((img, idx) => (
            <LazyImage
              key={idx}
              src={img}
              alt={`Landscape ${idx + 1}`}
              index={idx}
            />
          ))}
        </div>

        <div className="mt-16 text-center text-gray-500">
          <p>✨ End of Gallery ✨</p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
