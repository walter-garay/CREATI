import React from 'react';
import { ProductCard } from './productCard';
import products from '@/lib/data';  // Suponiendo que tienes un archivo de datos con la información de los productos

const ProductList = () => {
    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
