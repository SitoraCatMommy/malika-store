'use client';
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useState } from "react";
import {Dancing_Script} from "next/font/google";


export const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '700']
})


export default function Header() {

    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-purple-900 border-b">
            <div className="container mx-auto px-4">
            
            <div className="flex items-center justify-between h-16">
            <Link href={"/"} className="flex items-center">
            <span className={`${dancingScript.className} text-3xl font-bold text-white`}>Malika Store</span>
            </Link>

            {/* menu for desktop*/}
            <nav className="hidden md:flex items-center gap-7">
                <Link href={"/"} className={`text-gray-400 hover:text-white ${pathname === "/" ? 'text-white': "" }}` }>
                Главная
                </Link>
                <Link href={"/products"} className={`text-gray-400 hover:text-white ${pathname === "/products" ? 'text-white': "" }}` }>
                Продукты
                </Link>
                <Link href={"/about"} className={`text-gray-400 hover:text-white ${pathname === "/about" ? 'text-white': "" }}` }>
                О нас
                </Link>
            </nav>

            {/* ekonki*/}
            <div className="flex items-center gap-4">

                <button className="p-2 text-white hover:text-gray-400">
                    <Search className="w-5 h-5"/>
                </button>

                <Link href={"/"} className="p-2 text-white hover:text-gray-400">
                
                <div className="relative">
                    <ShoppingCart className="w-5 h-5"/>
                    <span className="absolute -top-2 -right-2 bg-green-900 text-white text-xs rounded-full w-4 h-4 flex items-center justify-between">2</span>
                </div>

                </Link>

                <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white">
                    {open ?  <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
                </button>


            </div>
            </div>
            </div>
            {open && (
                <div className="md:hidden border-t">
                    <nav className="container mx-auto px-4 py-4">
                        <div className="flex flex-col gap-4">
                        <Link href={"/"} className={`text-gray-400 hover:text-white ${pathname === "/" ? 'text-white': "" }}` }>
                        Главная
                         </Link>
                        <Link href={"/products"} className={`text-gray-400 hover:text-white ${pathname === "/products" ? 'text-white': "" }}` }>
                        Продукты
                        </Link>
                        <Link href={"/about"} className={`text-gray-400 hover:text-white ${pathname === "/about" ? 'text-white': "" }}` }>
                        О нас
                        </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
};

 
