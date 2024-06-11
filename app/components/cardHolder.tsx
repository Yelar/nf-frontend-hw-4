'use client'
import React from 'react';
import Card from './card';

interface CardHolderProps {
  products: Array<{
    id: number;
    title: string;
    price: number;
    image: string;
  }>;
}

const CardHolder = ({ products }: CardHolderProps) => {
    console.log("lol", products[10].id);
    return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            imageUrl={product.image}
            title={product.title}
            price={product.price}
            aspectRatioWidth={150}
            aspectRatioHeight={150}
          />
        ))}
      </div>
    </div>
  );
};

export default CardHolder;
