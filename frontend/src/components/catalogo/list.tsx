import React from 'react';
import { ProductCard } from './item';
import products from '@/lib/data';  // Suponiendo que tienes un archivo de datos con la información de los productos

const ProductList = () => {
    return (
        <div className='flex flex-wrap gap-5'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
