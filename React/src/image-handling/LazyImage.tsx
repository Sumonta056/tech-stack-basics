/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

export function LazyImage({ src, alt, index }: any) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className="w-full mb-8 bg-gray-300 rounded-lg overflow-hidden"
      style={{ minHeight: "400px" }}
    >
      {isVisible ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto transition-opacity duration-700 ${
            hasLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setHasLoaded(true)}
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ minHeight: "400px" }}
        >
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-400 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Image {index + 1}</p>
          </div>
        </div>
      )}
    </div>
  );
}
