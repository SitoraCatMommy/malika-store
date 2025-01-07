import React from 'react'
import { products } from '../data/product';
import ProductCard from '../components/ProductCard';

export default function Products () {
    return (
        <>
        <h1 className='text-3xl font-bold mb-6'>
            Наши продукты</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {products.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
        </>
    );
}

