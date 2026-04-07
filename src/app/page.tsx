"use client";

import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/custom/ProductCard";
import { VariantModal } from "@/components/custom/VariantModal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  Utensils,
  ShoppingBag,
  CalendarDays,
  WalletCards,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 3);

  const handleSelectProduct = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION (DIPERBARUI DENGAN GAMBAR & FADE OUT) */}
      <section className="relative w-full overflow-hidden bg-[#FAF7F2]">
        {/* [TRICK FADE OUT IMAGEMU DI SINI] */}
        {/* Container untuk Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-section.png')" }}
        >
          {/* 1. Dark Overlay (Opsional): Bikin teks putih lebih gampang dibaca */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-section.jpg')" }}
          >
            {/* 1. Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* 2. Linear Gradient (DIPERBARUI: Fade ditekan ke 70% ke bawah) */}
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent from-70% to-[#FAF7F2]"></div>
          </div>
        </div>

        {/* Konten Hero (Sama seperti sebelumnya, tapi dinaikkan z-indexnya) */}
        <div className="container relative z-30 mx-auto px-4 md:px-8 py-32 md:py-48 flex flex-col items-start text-white">
          <div className="flex gap-2 mb-6">
            <span className="bg-[#651114] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase flex items-center gap-1.5">
              <Check size={14} strokeWidth={3} />
              HALAL
            </span>
            <span className="bg-[#651114] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase flex items-center gap-1.5">
              <Utensils size={14} strokeWidth={2.5} />
              FRESH COOKED
            </span>
          </div>

          {/* Teks Putih dengan Font Serif sesuai desain */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight max-w-2xl text-white">
            Citarasa Minang <span className="text-[#E87A5D]">Autentik,</span>{" "}
            Dimasak Khusus Untuk Anda
          </h1>
          {/* Teks Sub-Headline */}
          <p className="text-white text-lg font-medium drop-shadow-md mb-10 max-w-xl">
            Sistem Pre-Order (H-3) menjaga kualitas bumbu rahasia DAPOER R2.
            Tanpa stok lama, setiap hidangan dimasak{" "}
            <span className="italic">fresh</span> dan dikirim langsung ke rumah
            Anda.
          </p>

          <div className="flex gap-4">
            <Link href="/menu">
              <Button className="bg-[#651114] hover:bg-[#4a0d0f] text-white px-8 py-6 rounded-md font-bold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Order Sekarang
              </Button>
            </Link>
            <Link href="#cara-order">
              <Button className="bg-white text-gray-900 px-8 py-6 rounded-md font-bold text-lg transition-all duration-300 hover:bg-gray-50 hover:text-[#651114] hover:shadow-lg hover:-translate-y-1">
                Cara Order
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MENU BEST SELLER SECTION (Sama seperti sebelumnya) */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <p className="text-[#651114] text-xs font-bold tracking-widest uppercase mb-2">
              Paling Favorit
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Artifact Kurasi Terbaik
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs mt-4 md:mt-0 text-left md:text-right">
            Pilihan menu yang paling dicinta oleh pelanggan kami di seluruh
            Nusantara.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={handleSelectProduct}
              showBadge={true}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/menu">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-6 rounded-md font-semibold tracking-wider uppercase text-xs"
            >
              Lihat Semua Menu
            </Button>
          </Link>
        </div>
      </section>

      {/* 3. CARA ORDER SECTION (Sama seperti sebelumnya) */}
      <section id="cara-order" className="py-24 bg-[#F2ECE4]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-[#651114] text-xs font-bold tracking-widest uppercase mb-2">
              Proses Pesanan
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Cara Order
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <ShoppingBag className="text-[#651114]" size={28} />,
                title: "Pilih Menu & Berat",
                desc: "Pilih varian kemasan agar sesuai dengan kebutuhan stok di rumah.",
              },
              {
                icon: <CalendarDays className="text-[#651114]" size={28} />,
                title: "Pilih Tanggal Pengiriman",
                desc: "Gunakan kalender untuk memilih jadwal (Minimal H+3). Kami butuh waktu untuk proses slow-cooking yang sempurna.",
              },
              {
                icon: <WalletCards className="text-[#651114]" size={28} />,
                title: "Pembayaran Full di Awal",
                desc: "Pembayaran dilakukan 100% di depan agar kami bisa langsung memproses belanja bahan baku segar di hari yang sama.",
              },
              {
                icon: <MessageCircle className="text-[#651114]" size={28} />,
                title: "Konfirmasi WA",
                desc: "Klik tombol WhatsApp, data pesanan otomatis terisi. Kirim bukti transfer dan duduk manis menunggu aroma rendang sampai ke rumah.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Lingkaran Ikon (Diperbesar sedikit agar ikon proporsional) */}
                <div className="w-16 h-16 bg-[#F2ECE4] rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONI SECTION (Sama seperti sebelumnya) */}
      <section id="testimoni" className="py-24 container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-[#651114] text-xs font-bold tracking-widest uppercase mb-2">
            Apa Kata Mereka
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Ulasan Pelanggan Setia
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-[#F2ECE4] p-8 rounded-2xl">
              <div className="text-[#E87A5D] mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-6">
                "Rendangnya juara! Bumbunya meresap sampai ke dalam, dagingnya
                benar-benar lembut. Sangat memuaskan."
              </p>
              <div className="font-bold text-sm">Pelanggan {item}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section id="faq" className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-[#651114] text-xs font-bold tracking-widest uppercase mb-2">
              Pusat Bantuan
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Pertanyaan Populer
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: " Kenapa harus Pre-Order H-3?",
                a: "Kami tidak menggunakan sistem stok (Ready Stock). Bahan baku baru kami beli di pasar subuh sesuai jumlah pesanan yang masuk. Proses masak rendang dan gulai yang tanak membutuhkan waktu minimal 6-8 jam agar bumbu meresap sempurna dan tekstur daging empuk.",
              },
              {
                q: "Mengapa pembayaran harus Full di Awal?",
                a: "Karena setiap pesanan bersifat Made-to-Order (dimasak khusus untuk Anda), dana tersebut langsung kami gunakan untuk pengadaan bahan baku segar. Hal ini juga membantu kami mempercepat proses pengiriman tanpa harus menagih pelunasan saat kurir tiba.",
              },
              {
                q: "Bagaimana cara pengirimannya?",
                a: "Lauk Basah (Gulai/Batokok): Wajib menggunakan kurir Instan/Same Day. Lauk Kering (Rendang/Dendeng): Bisa dikirim ke seluruh Indonesia menggunakan ekspedisi reguler karena daya tahannya yang baik di perjalanan.",
              },
              {
                q: "Berapa lama daya tahan makanan Dapoer R2?",
                a: "Lauk Kering: 2-4 minggu di suhu ruang (suasana sejuk), 1-2 bulan di kulkas. Gulai & Lauk Basah: 2 hari di kulkas, 2 minggu di freezer. Pastikan dipanaskan kembali sebelum dinikmati.",
              },
              {
                q: "Apakah bisa kirim untuk stok traveling/umroh?",
                a: "Sangat bisa! Produk Rendang Suwir, Rendang Telur, dan Paru Kriuk kami sangat populer untuk dibawa bepergian karena praktis, kemasan aman (vacuum), dan tahan lama tanpa pengawet.",
              },
              {
                q: "Dapatkah saya membatalkan pesanan?",
                a: "Pembatalan H-3 dana kembali 100%. Pembatalan H-2 dikenakan potongan 50%. Pembatalan H-1 atau Hari-H mohon maaf dana tidak dapat dikembalikan karena bahan sudah dibeli dan proses masak sudah dimulai.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-[#FAF7F2] p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
              >
                <summary className="font-bold text-gray-900 text-lg flex justify-between items-center outline-none">
                  {faq.q}
                  {/* Ikon panah yang akan berputar saat dropdown dibuka */}
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#651114]">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <p className="text-gray-600 text-sm leading-relaxed mt-4 border-t border-gray-200 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <VariantModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
