import Image from 'next/image'
import React from 'react'
import { IProduct } from '../types'
import Link from 'next/link'

interface ProductCardProps {
    product: IProduct
}

const ProductCard = ({product}: ProductCardProps) => {
  return (
    <div className='border rounded-lg shadow-lg p-6 transition-transform hover:scale-110'>
    <div className='relative w-full h-48 mb-4'>
    <Image
    src={product.image}
    alt={product.title}
    fill
    className='object-cover rounded-md'
    />
    </div>
    <h3 className='text-xl font-semibold mb-2'>{product.title}</h3>
    <p className='text-gray-600 mb-2'>{product.description}</p>
    <div className='flex justify-between items-center'>
        <span className='text-lg font-bold'>${product.price}</span>
        <Link className='bg-gray-400 text-white px-4 py-0.5 rounded hover:bg-green-600'
        href={`/products/${product.id}`}
        >Подробнее</Link>
    </div>
    </div>
  );
}

export default ProductCard;

