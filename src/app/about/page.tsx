'use client';
import { Car, Mail, MapPin, Phone, Target, Users } from 'lucide-react';
import React from 'react'
import Image from 'next/image'
import {Montserrat, Dancing_Script} from "next/font/google";

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  weight: ["400", "700"]
});

export const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function About() {
  return (
    <div className='min-h-screen'>
{/* 1*/}
      <section className='relative py-20 bg-gradient-to-r from-purple-500 to-purple-700'>
        <div className='container mx-auto px-4 '>
          <div className='max-w-3xl text-white'>
            <h1 className='text-5xl font-bold mb-6'>Мы продаем технологии будущего</h1>
            <p className='text-xl text-white-100'>Ведущий магазин на Малике</p>
          </div>
        </div>
      </section>

{/* statistika*/}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* 1*/}
            <div className='text-center'> 
              <div className='text-4xl font-bold text-purple-900 mb-2'>более 1 млн</div>
              <div className='text-gray-600'>Довольных клиентов</div>
            </div>

            {/* 2*/}
            <div className='text-center'>
            <div className='text-4xl font-bold text-purple-900 mb-2'>более 2 000</div>
            <div className='text-gray-600'>Товаров в каталоге</div>
            </div>

            {/* 3*/}
            <div className='text-center'>
            <div className='text-4xl font-bold text-purple-900 mb-2'>24\7</div>
            <div className='text-gray-600'>Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </section>

{/* idealy*/}
      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>Наши ценности</h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

            {/* 1*/}
            <div className='bg-white p-8 rounded-xl shodow-sm'>
              <Users className='w-12 h-12 text-purple-600 shadow-sm'/>
              <h3 className='text-xl font-semibold mb-4'>Клиенты на первом месте</h3>
              <p className='text-gray-600'>Мы строим долгосрочные отношения с нашими клиентами</p>
            </div> 
            
            {/* 2*/}
            <div className='bg-white p-8 rounded-xl shodow-sm'>
            <Target className='w-12 h-12 text-purple-600 shadow-sm'/>
              <h3 className='text-xl font-semibold mb-4'>Что угодно</h3>
              <p className='text-gray-600'>У нас вы можете найти все, что хотите</p>
            </div> 
            
            {/* 3*/}
            <div className='bg-white p-8 rounded-xl shodow-sm'>
            <Car className='w-12 h-12 text-purple-600 shadow-sm'/>
              <h3 className='text-xl font-semibold mb-4'>Доставка</h3>
              <p className='text-gray-600'>А если не найдете, то мы найдем и оформим вам достивку</p>
            </div> 

          </div>

          </div>
      </section>

{/* komanda*/}
      <section className='py-16'>
        <div className='container mx-auto px-4'>

          <h2 className='text-3xl font-bold text-center mb-12'>Наша команда</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center text-center max-w-4xl mx-auto px-4'>
            {[
              {name: "Nik",
                position: "CEO",
                photo: "/images/watch.jpg"
              },

              {name: "Sit",
                position: "co-CEO",
                photo: "/images/laptop_2.jpg"
              }
            ].map((member, index) => (
              <div key={index} className='text-center'>
                <div className='relative w-48 h-48 mx-auto mb-4'>
                  <Image src={member.photo} alt={member.name} fill className='object-cover rounded-full'/>
                </div>

                <h3 className='text-xl font-semibold mb-1'>{member.name}</h3>
                <p className='text-gray-600'>{member.position}</p>

              </div>
            )) }
          </div>

        </div>
      </section>

{/* kontakty*/}
      <section className='py-16 bg-gray-100'>
        
          <div className='container mx-auto px-4'>
            <h2 className={`${montserrat.className} text-3xl font-bold text-center mb-12`}>Свяжитесь с нами</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
                <div className='flex items-center gap-4'>
                  <Phone className='h-6 w-6 text-purple-600'/>
                  <div>
                    <h3 className='font-semibold'>Телефон</h3>
                    <p className='text-gray-600'>+998.....</p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <Mail className='h-6 w-6 text-purple-600'/>
                  <div>
                    <h3 className='font-semibold'>Почта</h3>
                    <p className='text-gray-600'>hello@malika.uz</p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <MapPin className='h-6 w-6 text-purple-600'/>
                  <div>
                    <h3 className='font-semibold'>Адрес</h3>
                    <p className='text-gray-600'>Malika SH.M.</p>
                  </div>
                </div>

              </div>
            
            
          </div> 

      </section>






    </div>
  )
}







