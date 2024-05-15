"use client"

import React from "react";
import ItemsListCart from "./list";
import { Button } from "../ui/button";
import { useCartContext } from "@/contexts/cart";
import { VscClose } from "react-icons/vsc";

export default function SidebarCart() {
    const { isSidebarOpen, closeSidebar } = useCartContext();

    return (
        <div
            className={`fixed top-0 right-0 bg-green-100 max-w-96 py-4 px-6 h-screen transform transition-all duration-300 ${
                isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-2xl">Carrito</h2>
                <VscClose
                    className="w-4 h-4 cursor-pointer hover:text-gray-800"
                    onClick={closeSidebar}
                />
            </div>
            {isSidebarOpen && (
                <>
                    <ItemsListCart />
                    <Button className="w-full">Realizar pedido</Button>
                </>
            )}
        </div>
    );
}

