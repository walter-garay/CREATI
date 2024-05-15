'use client'

import React, { useState } from 'react';

import { Product } from '@/lib/interfaces';
import { Button } from "@/components/ui/button"

interface ProductCardProps {
    product: Product; 
}

export function ProductCard({ product }: ProductCardProps){

    const [isInCart, setIsInCart] = useState(false);

    const handleAddToCart = () => {
        // Lógica para agregar el producto al carrito
        setIsInCart(true);
    };

    return (
        <div className='shadow-md p-4 rounded-xl 
            flex flex-col gap-y-2 justify-between 
            max-w-56 min-w-56 bg-white max-h-[370px]'
        >
            <img
                src={product.photos[0]}
                alt={product.name}
                className='min-w-48 min-h-48 object-cover rounded-xl'
            />
            
            <div className='flex flex-col justify-between h-full'>
                <h2 className='text-sm'>{product.name}</h2>
                <p>S/. {product.price}</p>
            </div>

            <Button className="w-full" disabled={isInCart} onClick={handleAddToCart}>
                {isInCart ? 'En el carrito' : 'Agregar al carrito'}
            </Button>
        </div>
    );
};

