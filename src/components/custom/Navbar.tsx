"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu } from "lucide-react"; // <-- Tambah ikon Menu
import { useCartStore } from "@/store/useCartStore";
import { CartDrawer } from "./CartDrawer";
// Import komponen Sheet untuk Drawer Mobile Menu
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // <-- State untuk menu HP
  const [isMounted, setIsMounted] = useState(false);
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const totalItems = items.reduce((total, item) => total + item.qty, 0);

  // Fungsi untuk menutup menu HP setelah diklik
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#FAF7F2] border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Bagian Kiri: Logo & Nama Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-gadang.png"
              alt="Logo Dapur R2"
              width={40}
              height={40}
            />
            <div className="flex flex-col -space-y-1">
              <span className="font-serif text-3xl text-[#651114] leading-tight font-medium">
                DAPOER
              </span>
              <span className="font-serif text-xl text-[#651114] leading-tight font-medium ml-1">
                R2
              </span>
            </div>
          </Link>

          {/* Bagian Tengah: Menu Link Desktop (Hilang di HP) */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-[0.15em] uppercase text-gray-700">
            <Link
              href="/"
              className="hover:text-[#651114] transition-colors pb-1"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="hover:text-[#651114] transition-colors pb-1"
            >
              Menu
            </Link>
            <Link
              href="/#cara-order"
              className="hover:text-[#651114] transition-colors pb-1"
            >
              Cara Order
            </Link>
            <Link
              href="#kontak"
              className="hover:text-[#651114] transition-colors pb-1"
            >
              Kontak
            </Link>
          </div>

          {/* Bagian Kanan: Ikon Keranjang & Hamburger Menu */}
          <div className="flex items-center gap-2">
            {/* Tombol Keranjang */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-800 hover:text-[#651114] transition-colors"
            >
              <ShoppingCart size={24} strokeWidth={2} />
              {isMounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#651114] text-white flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Tombol Hamburger Menu (Hanya Muncul di HP/Tablet) */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-800 hover:text-[#651114] transition-colors"
            >
              <Menu size={26} strokeWidth={2} />
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer untuk Menu Mobile */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="right" className="w-[300px] bg-[#FAF7F2] p-6">
          <SheetHeader className="mb-8 text-left">
            <SheetTitle className="font-serif text-2xl text-[#651114]">
              Navigasi
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-6 text-sm font-semibold tracking-[0.15em] uppercase text-gray-800">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="hover:text-[#651114] border-b border-gray-200 pb-2 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/menu"
              onClick={closeMobileMenu}
              className="hover:text-[#651114] border-b border-gray-200 pb-2 transition-colors"
            >
              Menu
            </Link>
            <Link
              href="/#cara-order"
              onClick={closeMobileMenu}
              className="hover:text-[#651114] border-b border-gray-200 pb-2 transition-colors"
            >
              Cara Order
            </Link>
            <Link
              href="#kontak"
              onClick={closeMobileMenu}
              className="hover:text-[#651114] border-b border-gray-200 pb-2 transition-colors"
            >
              Kontak
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Drawer Keranjang (Tetap Sama) */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
