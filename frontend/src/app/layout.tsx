import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartContextProvider } from "@/contexts/cart";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CREATI - Tu aliado en el reciclaje",
  description: "Kits armables hechos de reciclaje, tutoriales divertidos y compra de material reciclado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartContextProvider>
      <html lang="es">
        <body className={inter.className}>
          <Navbar/>
          {children}
        </body>
      </html>
    </CartContextProvider>
  );
}
