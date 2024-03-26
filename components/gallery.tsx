import Image from "next/image";
import React from "react";

interface ImageProps {
  image: string;
}

const Gallery: React.FC<ImageProps> = ({ image }) => {
  return (
    <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
      <Image
        fill
        src={image}
        alt="Image"
        className="object-cover object-center"
      />
    </div>
  );
};

export default Gallery;
