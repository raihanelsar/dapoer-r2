"use client";

import {FadeIn} from "@/components/custom/FadeIn";
import Link from "next/link";
import {products} from "@/data/products";
import {ProductCard} from "@/components/custom/ProductCard";
import {VariantModal} from "@/components/custom/VariantModal";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {
    Check,
    Utensils,
    ShoppingBag,
    CalendarDays,
    WalletCards,
    MessageCircle,
    ChevronDown,
    HelpCircle,
} from "lucide-react";

type FAQItem = {
    question: string;
    answer: string;
};

export const faqItems: FAQItem[] = [
    {
        question: "Kenapa harus Pre-Order H-1?",
        answer: "Kami percaya kualitas terbaik tidak bisa dihasilkan dari makanan yang disimpan. Karena itu, semua pesanan dibuat fresh khusus untuk Anda. Bahan baku kami beli langsung di pasar subuh sesuai order yang masuk, lalu dimasak dengan proses 'tanak' selama 6–8 jam agar bumbu meresap sempurna dan daging menjadi super empuk. Hasilnya? Rasa autentik Minang yang benar-benar terasa seperti masakan rumah.",
    },
    {
        question: "Mengapa pembayaran harus lunas di awal?",
        answer: "Setiap pesanan di Dapoer R2 bersifat made-to-order (dimasak khusus untuk Anda). Pembayaran di awal memungkinkan kami langsung membeli bahan baku segar di hari yang sama, sehingga proses produksi lebih cepat dan terjadwal. Selain itu, Anda juga tidak perlu repot dengan pembayaran saat pengiriman—semua sudah beres dari awal.",
    },
    {
        question: "Bagaimana cara pengirimannya?",
        answer: "Kami memastikan setiap produk sampai dalam kondisi terbaik. Lauk basah seperti gulai dan batokok dikirim menggunakan kurir instan atau same day agar tetap fresh saat diterima. Untuk lauk kering seperti rendang dan dendeng, kami bisa kirim ke seluruh Indonesia menggunakan ekspedisi reguler karena daya tahannya yang lebih lama dan aman dalam perjalanan.",
    },
    {
        question: "Berapa lama daya tahan makanannya?",
        answer: "Produk kami dirancang praktis untuk disimpan tanpa mengurangi rasa. Lauk kering seperti rendang dan dendeng bisa tahan 2–4 minggu di suhu ruang (sejuk) atau hingga 1–2 bulan di kulkas. Untuk gulai dan lauk basah, bisa tahan 2 hari di kulkas atau hingga 2 minggu di freezer. Cukup panaskan kembali sebelum disajikan, dan rasanya akan tetap nikmat seperti baru dimasak.",
    },
    {
        question: "Apakah bisa untuk stok bepergian (Traveling / Umroh)?",
        answer: "Sangat bisa, dan ini salah satu favorit pelanggan kami. Produk seperti Rendang Suwir, Rendang Telur, dan Paru Kriuk dikemas dengan vacuum sealed sehingga aman, praktis, dan tahan lama tanpa bahan pengawet. Cocok untuk bekal perjalanan jauh, umroh, atau sekadar stok makanan di rumah.",
    },
    {
        question: "Dapatkah saya membatalkan pesanan?",
        answer: "Kami memahami bahwa rencana bisa berubah. Namun karena semua pesanan diproses khusus dan bahan langsung dibeli segar, berikut kebijakan kami: pembatalan H-2 akan mendapatkan pengembalian dana 100%. Untuk pembatalan H-1, mohon maaf dana tidak dapat dikembalikan karena proses memasak sudah berjalan. Kebijakan ini membantu kami menjaga kualitas dan komitmen pada setiap pesanan.",
    },
];

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
                {/* Container untuk Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{backgroundImage: "url('/images/hero-section.png')"}}
                >
                    {/* Dark Overlay - Sedikit ditebalkan biar teks putih kontras di layar HP yang terang */}
                    <div className="absolute inset-0 bg-black/50 z-10"></div>

                    {/* Linear Gradient Fade Out - Responsif: di HP mulai pudar di 50%, di PC 70% */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent from-50% md:from-70% to-[#FAF7F2]"></div>
                </div>

                {/* Konten Hero (Padding dan Min-Height responsif) */}
                <div className="container relative z-30 mx-auto px-4 sm:px-8 py-24 sm:py-32 md:py-48 flex flex-col items-start text-white min-h-[85vh] md:min-h-[auto] justify-center">
                    {/* Badge HALAL & FRESH COOKED - Ukuran font responsif */}
                    <FadeIn delay={0.1}>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-[#651114] text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase flex items-center gap-1.5">
                                <Check size={14} strokeWidth={3} />
                                HALAL
                            </span>
                            <span className="bg-[#651114] text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase flex items-center gap-1.5">
                                <Utensils size={14} strokeWidth={2.5} />
                                FRESH COOKED
                            </span>
                        </div>
                    </FadeIn>

                    {/* HEADLINE BARU: Lebih punchy, ukuran font dinamis dari 4xl (HP) sampai 7xl (Desktop) */}
                    <FadeIn delay={0.3}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 md:mb-6 leading-[1.1] max-w-3xl text-white drop-shadow-lg">
                            Citarasa Minang Autentik, <span className="text-[#E87A5D]">Dimasak Khusus</span> Untuk Anda.
                        </h1>
                    </FadeIn>

                    {/* SUB-HEADLINE BARU: Lebih persuasif, menjelaskan solusi dan scarcity (sistem PO) */}
                    <FadeIn delay={0.5}>
                        <p className="text-gray-100 text-base sm:text-lg md:text-xl font-medium drop-shadow-md mb-8 md:mb-10 max-w-2xl leading-relaxed">
                            Sistem Pre-Order H-1 untuk menjamin kesegaran bumbu rahasia Dapoer R2. Kami tidak menyetok
                            makanan, setiap pesanan dibuat fresh dari dapur kami langsung ke meja makan Anda.
                        </p>
                    </FadeIn>

                    {/* TOMBOL CALL-TO-ACTION - Di HP nyusun ke bawah (flex-col), di Desktop ke samping (sm:flex-row) */}
                    <FadeIn delay={0.7}>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                            <Link href="/menu" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto bg-[#651114] hover:bg-[#4a0d0f] text-white px-6 md:px-8 py-6 md:py-7 rounded-md font-bold text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    Order Sekarang
                                </Button>
                            </Link>
                            <Link href="#cara-order" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto bg-white text-gray-900 px-6 md:px-8 py-6 md:py-7 rounded-md font-bold text-base md:text-lg transition-all duration-300 hover:bg-gray-50 hover:text-[#651114] hover:shadow-lg hover:-translate-y-1">
                                    Cara Order
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 2. MENU JAGOAN SECTION */}
            <section id="menu-jagoan" className="py-16 md:py-24 bg-[#FAF7F2]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-16 gap-4 text-center md:text-left">
                        <div>
                            <p className="text-[#651114] text-xs font-bold tracking-widest uppercase mb-2">
                                Pilihan Favorit
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900">
                                Menu Jagoan Kami
                            </h2>
                        </div>
                        <Link href="/menu">
                            <Button
                                variant="outline"
                                className="border-[#651114] text-[#651114] hover:bg-[#651114] hover:text-white transition-colors w-full md:w-auto"
                            >
                                Lihat Semua Menu
                            </Button>
                        </Link>
                    </div>

                    {/* Grid Responsif */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                        {bestSellers.map((product, index) => (
                            <FadeIn key={product.id} delay={0.2 * index}>
                                {" "}
                                {/* Delay bertambah 0.2s tiap menu */}
                                <ProductCard product={product} onSelect={handleSelectProduct} showBadge={true} />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CARA ORDER SECTION (Sama seperti sebelumnya) */}
            <section id="cara-order" className="py-16 md:py-24 bg-[#F2ECE4]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-12 md:mb-20">
                        <p className="text-[#651114] text-xs font-bold tracking-widest uppercase mb-2">
                            Proses Pesanan
                        </p>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Cara Order</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
                        {[
                            {
                                icon: <ShoppingBag className="text-[#651114]" size={32} />,
                                title: "Pilih Menu & Berat",
                                desc: "Pilih varian kemasan agar sesuai dengan kebutuhan stok di rumah.",
                            },
                            {
                                icon: <CalendarDays className="text-[#651114]" size={32} />,
                                title: "Pilih Tanggal Pengiriman",
                                desc: "Gunakan kalender untuk memilih jadwal (Minimal H+3). Kami butuh waktu untuk proses slow-cooking yang sempurna.",
                            },
                            {
                                icon: <WalletCards className="text-[#651114]" size={32} />,
                                title: "Pembayaran Full di Awal",
                                desc: "Pembayaran dilakukan 100% di depan agar kami bisa langsung memproses belanja bahan baku segar di hari yang sama.",
                            },
                            {
                                icon: <MessageCircle className="text-[#651114]" size={32} />,
                                title: "Konfirmasi WA",
                                desc: "Klik tombol WhatsApp, data pesanan otomatis terisi. Kirim bukti transfer dan duduk manis menunggu aroma rendang sampai ke rumah.",
                            },
                        ].map((step, idx) => (
                            <FadeIn key={idx} delay={0.3 * idx} direction="up">
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FAF7F2] rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-bold text-xl text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed px-4 md:px-0">
                                        {step.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TESTIMONI SECTION */}
            <section id="testimoni" className="py-16 md:py-24 bg-[#FAF7F2]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <p className="text-[#651114] text-xs font-bold tracking-widest uppercase mb-2">Kata Mereka</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                            Pelanggan Setia Kami
                        </h2>
                    </div>

                    {/* Grid Responsif: 1 Kolom (HP) -> 2 Kolom (Tablet) -> 3 Kolom (PC) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Bapak Budi, Jaksel",
                                text: "Gila sih ini rendangnya bener-bener kaya buatan nenek saya di Bukittinggi. Bumbunya medok, dagingnya empuk banget! Udah langganan buat acara keluarga.",
                            },
                            {
                                name: "Ibu Rina, Depok",
                                text: "Sistem PO-nya jelas. Pas nyampe rumah packingnya rapih banget pakai vakum. Disimpen di freezer buat lauk sahur praktis banget. Dendengnya juara!",
                            },
                            {
                                name: "Keluarga Andre, Bekasi",
                                text: "Awalnya nyoba pesen Ayam Pop, eh nagih. Sekarang tiap minggu pasti pesen buat stok. Ongkir sameday juga murah. Rekomen banget buat yang kangen masakan Padang asli.",
                            },
                        ].map((testi, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm md:text-base italic mb-6 leading-relaxed">
                                    "{testi.text}"
                                </p>
                                <div className="font-bold text-gray-900 text-sm">{testi.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FAQ SECTION */}
            <section
                id="faq"
                className="border-t border-stone-200 bg-gradient-to-b from-white to-[#FAF7F2] py-16 md:py-24"
            >
                <div className="container mx-auto max-w-4xl px-4 md:px-8">
                    <div className="mb-12 text-center md:mb-16">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#651114]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#651114]">
                            <HelpCircle size={14} />
                            Pusat Bantuan
                        </div>

                        <h2 className="font-serif text-3xl font-bold text-stone-900 md:text-4xl">
                            Pertanyaan yang Sering Ditanyakan
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-600 md:text-base">
                            Kami rangkum pertanyaan yang paling sering ditanyakan pelanggan agar proses pemesanan Dapoer
                            R2 jadi lebih mudah, jelas, dan nyaman.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqItems.map((faq, index) => (
                            <details
                                key={index}
                                className="group overflow-hidden text-justify rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 md:px-6 md:py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#651114]/10 text-sm font-bold text-[#651114]">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-left text-base font-semibold leading-6 text-stone-900 md:text-lg">
                                            {faq.question}
                                        </h3>
                                    </div>

                                    <div className="shrink-0 rounded-full bg-stone-100 p-2 text-[#651114] transition-transform duration-300 group-open:rotate-180">
                                        <ChevronDown size={18} />
                                    </div>
                                </summary>

                                <div className="px-5 pb-5 md:px-6 md:pb-6">
                                    <div className="border-t border-stone-100 pt-4">
                                        <p className="text-sm leading-7 text-stone-600 md:text-[15px]">{faq.answer}</p>
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <VariantModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
