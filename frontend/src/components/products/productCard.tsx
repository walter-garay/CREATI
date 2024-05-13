'use client'

import React, { useState } from 'react';
import { Product } from '@/lib/interfaces';

interface ProductCardProps {
    product: Product;  // Definición de la propiedad product de tipo Product
}

export function ProductCard({ product }: ProductCardProps){

    const [isInCart, setIsInCart] = useState(false);

    const handleAddToCart = () => {
        // Lógica para agregar el producto al carrito
        setIsInCart(true);
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>
            <button onClick={handleAddToCart} disabled={isInCart}>
                {isInCart ? 'Agregado al carrito' : 'Agregar al carrito'}
            </button>
        </div>
    );
};

