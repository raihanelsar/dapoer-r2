"use client";

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
      {/* Header Halaman Menu */}
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#651114] mb-4">
          Menu Autentik Kami
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Menghadirkan warisan rasa Minangkabau yang dimasak dengan teknik
          tradisional dan standar kualitas modern. Setiap hidangan adalah
          artefak kuliner yang kami kurasi khusus untuk Anda.
        </p>
      </div>

      {/* Grid Produk */}
      {/* Menggunakan Tailwind Grid biar responsif otomatis di HP, Tablet, dan Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={handleSelectProduct}
          />
        ))}
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
