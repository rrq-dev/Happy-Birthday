"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "@/components/image"; // ✅ pakai wrapper custom

const photos = [
  {
    id: 1,
    src: "/image/image1.jpg",
    alt: "Photo 1",
    caption: "Foto di Gramedia bjer",
  },
  {
    id: 2,
    src: "/image/image2.jpg",
    alt: "Photo 2",
    caption: "Foto kamu sama Cowboy facebook ngerinyoo",
  },
  {
    id: 3,
    src: "/image/image3.jpg",
    alt: "Photo 3",
    caption: "Foto kamu sama orang mau party",
  },
  {
    id: 4,
    src: "/image/image4.jpg",
    alt: "Photo 4",
    caption: "Cowboy facebook nya yapping njir",
  },
  {
    id: 5,
    src: "/image/image5.jpg",
    alt: "Photo 5",
    caption: "akhirnya photobooth (pamer nih pacar gwe)",
  },
  {
    id: 6,
    src: "/image/image6.jpg",
    alt: "Photo 6",
    caption: "Ingin bertemu di indomaret (cantik banged dia woilah)",
  },
  {
    id: 7,
    src: "/image/image7.jpg",
    alt: "Photo 7",
    caption: "Foto first date canggung njer",
  },
  {
    id: 8,
    src: "/image/image8.jpg",
    alt: "Photo 8",
    caption: "Part 2 canggung date ",
  },
  {
    id: 9,
    src: "/image/image9.jpg",
    alt: "Photo 9",
    caption: "Foto date pas event Mie (pamer gwe njer ke temen)",
  },
  {
    id: 10,
    src: "/image/image10.jpg",
    alt: "Photo 10",
    caption: "Foto date pas event Mie part 2",
  },
];

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="space-y-8">
      <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl overflow-hidden">
        <CardContent className="p-0">
          <div className="relative bg-white h-64 md:h-96 flex items-center justify-center">
            <Image
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              width={600}
              height={400}
              className="object-contain h-full w-full rounded-lg"
            />

            {/* Navigation Buttons */}
            <Button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-pink-600 rounded-full p-2"
              size="sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-pink-600 rounded-full p-2"
              size="sm"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-center font-medium">
                {photos[currentIndex].caption}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              index === currentIndex
                ? "border-pink-400 scale-110"
                : "border-pink-200 hover:border-pink-300"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={80}
              height={60}
              className="object-contain w-16 h-12 md:w-20 md:h-15 bg-white rounded"
            />
          </button>
        ))}
      </div>

      {/* Photo Counter */}
      <div className="text-center text-pink-500">
        <p>
          {currentIndex + 1} of {photos.length}
        </p>
      </div>
    </div>
  );
}
