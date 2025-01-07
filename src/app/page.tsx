import { ArrowRight, Clock, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
   
    <div className="min-h-screen bg-gray-100">

    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image 
        src="/images/store.jpg"
        alt="Background"
        fill
        className="object-cover brightness-50"
        priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Инновационные технологии для вашей жизни</h1>
          <p className="text-xl text-gray-200 mb-8">Наш Malika Store гарант качества</p>
            <div className="flex flex-wrap gap-4">
            <Link href="/products"
            className="inline-flex items-center px-8 py-4 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-900 transition-colors"
            >Смотреть каталог <ArrowRight className="ml-2 w-5 h-5"/>
            </Link> 
            <Link href="/about"
            className="inline-flex items-center px-8 py-4 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-900 transition-colors"
            >О нас
            </Link>
            </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-100">

      <div className="container mx-auto px-4">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"><Zap className="w-6 h-6 text-purple-700"/></div> 
        <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3> 
        <p className="text-gray-600">Доставляем до 24 часов</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"><Shield className="w-6 h-6 text-purple-700"/></div> 
        <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3> 
        <p className="text-gray-600">Официальная гарантия на всю продукцию и сертифицированное
        обслуживание</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"><Clock className="w-6 h-6 text-purple-700"/></div> 
        <h3 className="text-xl font-semibold mb-2">Поддержка 24/7</h3> 
        <p className="text-gray-600">Круглосуточная поддержка и консультации от наших специалистов</p>
      </div>

      </div>

      </div>

    </section>


    <section className="py-16">

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Популярные категории</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {["Ноутбуки", "Смартфоны", "Планшеты", "Аксессуары"].map(
            (category, index) => (
              
              <div 
              key={index}
              className="group relative h-64 rounded-xl overflow-hidden">
                <Image src={`/images/category-${index+1}.jpg`} alt={category} fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"/>
      
                <div className="absolute bottom-0 left-0 right-0 p-6">
                 
                  <h3 className="text-xl font-semibold text-white mb-2">{category}</h3>
                  <Link href={`/products?category=${category}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                  Смотреть все
                  </Link>
                
                </div>
              
              </div>
            )
          )}

        </div>
        
      </div>

    </section>

    <section className="py-16 bg-purple-700">

      <div className="container mx-auto px-4">

        <div className="max-w-2xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-white mb-4">Подпишитесь на наши новости</h2>

          <p className="text-purple-100 mb-8">Получайте первыми информацию о новинках, акциях и специальных
          предложениях</p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
            type="email"
            placeholder="Введите вашу почту"
            className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"/>
            <button 
            type="submit"
            className="px-6 py-3 bg-white text-purple-800 rounded-3xl font-semibold hover:bg-purple-100 transition-colors"
            >Подпишитесь</button>
          </form>

        </div>

      </div>


    </section>

    </div>
    
  );
}


