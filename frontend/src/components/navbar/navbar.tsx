"use client"

import React from 'react';
import { useCartContext } from "@/contexts/cart";
import { BsCart3 } from "react-icons/bs";

export default function Navbar() {
    const { openSidebar } = useCartContext();

    return (
        
        <header className='flex items-center justify-between p-4'>
            <a href="/">CreaTI</a>

            <nav>
                <ul className='flex gap-x-4'>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Reciclaje</a></li>
                    <li><a href="#">Artículos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>

            <BsCart3 className="text-2xl hover:cursor-pointer" onClick={openSidebar} />

        </header>
    );
};
