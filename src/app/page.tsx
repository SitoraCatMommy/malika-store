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
        <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3> 
        <p className="text-gray-600">Доставляем до 24 часов</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"><Clock className="w-6 h-6 text-purple-700"/></div> 
        <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3> 
        <p className="text-gray-600">Доставляем до 24 часов</p>
      </div>

      </div>

      </div>

    </section>


    <section>

    </section>


    <section>

    </section>
    

    </div>
    
  );
}


