"use client"
import React, { createContext, useState, useContext } from "react";
import { FaS } from "react-icons/fa6";

interface CartContextProps {
    isSidebarOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
}

const CartContext = createContext<CartContextProps>({
    isSidebarOpen: true,
    openSidebar: () => {},
    closeSidebar: () => {},
});

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <CartContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>
            {children}
        </CartContext.Provider>
    );
};