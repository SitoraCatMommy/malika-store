'use client';

import Image from 'next/image'
import { products } from '@/app/data/product';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import { ArrowLeft, Check, ShoppingCart, X } from 'lucide-react';


function ProductDetail() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    const product = products.find(p => p.id === Number(id));
    
    if (!product) {
        return (
            <div className='text-center py-12'>
                <h1 className='text-2xl font-bold text-red-600'>
                    Этот продукт не найден
                </h1>
                <button className='mt-4 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors'
                onClick={() => router.back()}
                >
                    Назад
                </button>
            </div>
        );
    }

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
        <button className='flex items-center text-black-500 font-bold hover:text-gray-600 mb-8 transition-colors'
        onClick={() => router.back()}>
            <ArrowLeft className='w-5 h-5 mr-5'/>
            Назад к списку
        </button>

        <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-8'>
                <div className='relative h[500px] rounded-xl overflow-hidden group'>
                    <Image 
                    src = {product.image}
                    alt = {product.title}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                </div>

                <div className='flex flex-col'>
                <div className='mb-auto'>
                <div className='flex items-center justify-between mb-4'>
                        <h1 className='text-4xl font-bold text-green-900'>{product.title}</h1>
                        <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100'>{product.category}</span>
                </div>
                    
                
                        <div className='flex items-center mb-6'>
                            <span className='text-3xl font-bold text-green-600'>${product.price}</span> 
                            <span className='ml-4 inline-flex items-center'>
                                {product.inStock ? (
                                    <>
                                    <Check className='w-5 h-5 text-green-500 mr-1'/>
                                    <span className='text-green-500'>В наличии</span>
                                    </>
                                ) : (
                                    <>
                                    <X className='w-5 h-5 text-red-500 mr-1'/>
                                    <span className='text-red-500'>Нет в наличии</span>
                                    </>
                                )}
                            </span>
                        </div>
                        <p className='text-gray-600 mb-8 text-lg leading-relaxed'>{product.description}</p>
                        <div className='mb-8'>
                            <h3 className='text-lg font-semibold mb-4'>Характеристики</h3> 
                            <ul className='grid grid-cols-1 gap-3'>
                                {product.specs.map((spc, index) => (
                                    <li key={index} className='flex items-center text-grey-600'>
                                        <Check className='w-5 h-5 text-green-500 mr-3'/> 
                                    {spc} </li>
                                ))}
                            </ul>
                        </div>
                </div>
                
                <div className='flex gap-4'>
                    <button 
                    className={`flex items-center justify-center gap-2 py-3 px-8 rounded-lg text-lg font-semibold transition-colors
                    ${product.inStock ? "bg-green-600 hover:bg-green-700 text-white" : "bg-gray-300 cursor-not-allowed text-gray-500"

                    }\``}
                    disabled={!product.inStock}
                    >
                    <ShoppingCart className='w-5 h-5'/>
                   Добавить в корзину </button>
                </div>
            </div>
            </div> 
        </div> 
    </div>
  )
}
export default ProductDetail;



