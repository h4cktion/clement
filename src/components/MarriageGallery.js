"use client";

import { useState } from "react";
import Image from "next/image";

const MarriageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-['Romantis_Scene'] text-gray-900">
            Galerie Mariage
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques moments magiques capturés lors de mariages
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-2 group cursor-pointer overflow-hidden transition-all duration-300 hover:opacity-90"
              onClick={() => openModal(image)}
            >
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-2xl z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all"
              >
                ×
              </button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MarriageGallery;
