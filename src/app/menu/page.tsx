"use client";

import { FadeIn } from "@/components/custom/FadeIn";
import { useState } from "react";
import { products, Product } from "@/data/products";
import { ProductCard } from "@/components/custom/ProductCard";
import { VariantModal } from "@/components/custom/VariantModal";

export default function MenuPage() {
  // State untuk melacak produk mana yang sedang di-klik untuk buka modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi saat tombol "Pilih Varian" di card diklik
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      {/* JUDUL HALAMAN */}
      <div className="container mx-auto px-4 md:px-8 pt-32 pb-12 text-center">
        <FadeIn direction="down" delay={0.1}>
          <p className="text-[#651114] text-xs font-bold tracking-widest uppercase mb-3">
            Eksplorasi Rasa
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            Menu Lengkap Dapoer R2
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Pilih hidangan autentik Minang favorit Anda. Semua dimasak segar
            setelah pesanan masuk.
          </p>
        </FadeIn>
      </div>

      {/* Grid Produk */}
      {/* Menggunakan Tailwind Grid biar responsif otomatis di HP, Tablet, dan Desktop */}
      <div className="container mx-auto px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={handleSelectProduct}
            />
          ))}
        </div>
      </div>

      {/* Pop-up Varian (Hanya render kalau isModalOpen true) */}
      <VariantModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
