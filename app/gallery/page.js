"use client";

import { useEffect } from 'react';
import Image from 'next/image'; // Import next/image
import 'lightbox2/dist/css/lightbox.min.css';

export default function Gallery() {
  useEffect(() => {
    const loadLightbox = async () => {
      if (typeof window !== 'undefined') {
        // Ensure jQuery is available on the window object
        const $ = await import('jquery');
        window.$ = window.jQuery = $;

        // Dynamically import Lightbox2 after jQuery is loaded
        const lightbox = await import('lightbox2');
        if (lightbox) {
          lightbox.init();
        }
      }
    };

    loadLightbox();
  }, []);

  const images = [
    'ab1.jpg', 'ab2.jpg', 'ab3.jpg', 'ab4.jpg', 'ab5.jpg', 'ab6.jpg',
    'ab7.jpg', 'ab8.jpg', 'ab9.jpg', 'ab10.jpg', 'ab11.jpg', 'ab12.jpg',
    'ab13.jpg', 'ab14.jpg', 'abc1.jpg', 'abc2.jpg', 'abc3.jpg', 'abc4.jpg',
    'abc5.jpg', 'abc6.jpg', 'abc7.jpg', 'abc8.jpg', 'abc9.jpg', 'abc10.jpg',
    'abc11.jpg', 'abc12.jpg', 'abc13.jpg', 'abc14.jpg'
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Header with margin top to create space between navbar and header */}
      <h1 className="text-4xl font-bold text-center mt-16 mb-16">Gallery</h1>
      
      <div className="gallery grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="desc">
            <a href={`/image/${image}`} data-lightbox="Gallery">
              <Image
                src={`/image/${image}`} // Image source
                width={300} // Provide width
                height={200} // Provide height
                className="transition-transform duration-500 ease-in-out transform hover:scale-110 hover:grayscale"
                alt={`Gallery ${index + 1}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
