import React from 'react';
import { Product } from '@/lib/interfaces';
import { VscClose } from "react-icons/vsc";

interface ProductCardProps {
    product: Product;
}

export default function ItemCart({ product }: ProductCardProps) {
    return (
        <div className='flex justify-between items-center gap-x-3 text-xs'>
            <VscClose className='min-w-4'/>
            <p className='font-medium w-44'>{product.name}</p>
            <p className='text-right'>{product.price}</p>

            <img
                src={product.photos[0]}
                alt={product.name}
                className='w-12 h-12 object-cover rounded-md'
            />
        </div>
    );
};
