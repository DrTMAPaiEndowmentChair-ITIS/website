'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface CarouselItem {
  image: string;
  caption: string;
}

interface ImageCarouselProps {
  items: CarouselItem[];
  interval?: number;
}

export default function ImageCarousel({ items = [], interval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  const handleImageError = (imagePath: string) => {
    setError(`Failed to load image: ${imagePath}`);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8 text-center bg-red-50 rounded-xl">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8 text-center bg-neutral-50 rounded-xl">
        <p className="text-neutral-600">No images available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100">
        {items.map((item, index) => (
          <div
            key={`${item.image}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={item.image}
              alt={item.caption}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => handleImageError(item.image)}
              onLoad={handleImageLoad}
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
            <div className="w-8 h-8 border-4 border-[#E8580C] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-medium text-neutral-900">{items[currentIndex]?.caption}</p>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#E8580C]' : 'bg-neutral-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 