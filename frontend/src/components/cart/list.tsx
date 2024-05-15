import React from 'react';
import products from '@/lib/data';  // Suponiendo que tienes un archivo de datos con la información de los productos
import ItemCart from './item';

export default function ItemsListCart() {
    return (
        <div className='flex flex-col gap-5'>
            {products.map((product) => (
                <ItemCart key={product.id} product={product} />
            ))}
        </div>
    );
};
