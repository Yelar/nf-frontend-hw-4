import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  title: string;
  price: number;
  aspectRatioWidth: number;
  aspectRatioHeight: number;
}

const Card = ({ imageUrl, title, price, aspectRatioWidth, aspectRatioHeight }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col">
      <div className="relative w-full" style={{ paddingBottom: `${(aspectRatioHeight / aspectRatioWidth) * 100}%` }}>
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      <div className="flex flex-col flex-grow px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="mt-auto">
          <p className="text-gray-700 text-base">${price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
