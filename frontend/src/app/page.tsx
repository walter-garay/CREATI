
import React from "react";
import ProducList from "@/components/catalogo/list";
import SidebarCart from "@/components/cart/sidebar";

export default function Home() {

  return (
      <main className="flex flex-col min-h-screen 
        items-center justify-center bg-gray-100"
      >
        <h1 className="font-semibold text-2xl">Kits Armables</h1>

        <ProducList />
        <SidebarCart />
      </main>
  );
}
