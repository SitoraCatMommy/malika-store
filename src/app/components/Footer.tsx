import Link from "next/link";
import {Dancing_Script} from "next/font/google";


export const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function Footer() {
  return (
    <footer className="bg-purple-900 border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white text-center md:text-left">
            <p className={`${dancingScript.className} text-3xl font-bold`}>Malika Store</p>
            <p className={`text-gray-400`}>© 2023 Malika Store. All rights reserved.</p>
                      
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <Link href={"/"} className="text-gray-400 hover:text-white">
              Главная
            </Link>
            <Link href={"/products"} className="text-gray-400 hover:text-white">
              Продукты
            </Link>
            <Link href={"/about"} className="text-gray-400 hover:text-white">
              О нас
            </Link>
            <Link href={"/contact"} className="text-gray-400 hover:text-white">
              Наши контакты
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}