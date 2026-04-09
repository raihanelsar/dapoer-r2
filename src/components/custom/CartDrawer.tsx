"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Minus, Plus, Trash2, CalendarDays, Truck } from "lucide-react";
import toast from "react-hot-toast";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [step, setStep] = useState<'cart' | 'form'>('cart')
  const [note, setNote] = useState("");
  const [cust_name, setCustName] = useState("")
  const [cust_phone, setCustPhone] = useState("")
  const [cust_address, setCustAddress] = useState("")

  const { items, updateQuantity, removeFromCart } = useCartStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const handleClose = () => {
    setStep('cart')
    onClose()
  }

  const handleCheckoutWA = () => {
    if (items.length === 0) return;

    if (cust_name === "" || cust_phone === "" || cust_address === "") {
      toast.error("Mohon lengkapi data diri dan pengiriman anda!")
      return;
    }

    const nomorWA = "6285817663217";
    let pesan =
      "Halo DAPUR R2, saya ingin memesan menu Pre-Order berikut:%0A%0A";

    items.forEach((item, index) => {
      const formatDate = new Date(item.poDate).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      pesan += `${index + 1}. *${item.name}* (${item.variant})%0A`;
      pesan += `   📅 Dikirim: ${formatDate}%0A`;
      pesan += `   🚚 Kurir: ${item.delivery}%0A`;
      pesan += `   Jumlah: ${item.qty} porsi%0A`;
      pesan += `   Subtotal: Rp ${(item.price * item.qty).toLocaleString("id-ID")}%0A%0A`;
    });

    pesan += `*Total Pesanan: Rp ${totalPrice.toLocaleString("id-ID")}*%0A%0A`;
    pesan += `%0A *Data Pemesan* %0A`;
    pesan += `Nama: ${cust_name}%0A`
    pesan += `No. Telp: ${cust_phone}%0A`
    pesan += `Alamat: ${cust_address}%0A%0A`

    if (note.trim() !== "") {
      pesan += `*Catatan Tambahan:*%0A${note}%0A%0A`;
    }

    pesan += `Mohon info untuk total ongkos kirim dan instruksi pembayarannya. Terima kasih!`;

    window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");
  };

  if (!isMounted) return null;

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      {/* UPDATE DI SINI: Lebar drawer responsif. Di HP full width (w-full), di Tablet/PC w-[400px] atau sm:max-w-md */}
      <SheetContent className="w-full sm:w-[400px] sm:max-w-md bg-[#FAF7F2] flex flex-col p-0 overflow-hidden">
        {/* HEADER KERANJANG */}
        <SheetHeader className="p-4 md:p-6 border-b border-gray-200 text-left space-y-1 bg-white shrink-0">
          <SheetTitle className="text-[#651114] font-bold text-lg md:text-xl uppercase tracking-wider">
            {step === 'cart' ? 'Keranjang Belanja' : 'Data Diri'}
          </SheetTitle>
          <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
            {step === 'cart' ? 'Pesanan Anda' : 'Lengkapi data pengiriman'}
          </p>
        </SheetHeader>

        {/* AREA DAFTAR PRODUK (Scrollable) */}
        { step === "cart" ? (
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 bg-[#FAF7F2]">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
                <p className="text-sm">Keranjang masih kosong</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 md:gap-4 border-b border-gray-200 pb-4 last:border-0"
                >
                  {/* Gambar Produk: Lebih kecil di HP (w-16) supaya teks muat */}
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0 relative border border-gray-200">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 64px, 80px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[8px] text-gray-400 text-center p-1">
                        Img
                      </div>
                    )}
                  </div>

                  {/* Info Produk */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        {/* Judul: line-clamp-2 agar kalau panjang otomatis turun baris, tidak nabrak harga */}
                        <h4 className="font-semibold text-xs md:text-sm leading-tight text-gray-900 line-clamp-2">
                          {item.name}
                        </h4>
                        <p className="font-bold text-xs md:text-sm text-[#651114] shrink-0">
                          Rp {item.price.toLocaleString("id-ID")}
                        </p>
                      </div>
                      <p className="text-[10px] md:text-xs text-gray-500 mt-1 uppercase tracking-wider">
                        {item.variant}
                      </p>

                      {/* Badge Info Kurir & Tanggal: Lebih padat di HP */}
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5">
                        <div className="flex items-center gap-1 text-[10px] md:text-[11px] font-medium text-[#c05b31]">
                          <CalendarDays size={10} className="md:w-3 md:h-3" />
                          {new Date(item.poDate).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "short",
                          })}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] md:text-[11px] font-medium text-gray-600">
                          <Truck size={10} className="md:w-3 md:h-3" />
                          {item.delivery}
                        </div>
                      </div>
                    </div>

                    {/* Tombol Plus Minus */}
                    <div className="flex justify-start mt-3">
                      <div className="flex items-center bg-white rounded-md border border-gray-200 shadow-sm">
                        <button
                          onClick={() => {
                            if (item.qty > 1)
                              updateQuantity(item.id, item.qty - 1);
                            else removeFromCart(item.id);
                          }}
                          className="p-1.5 md:p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-l-md transition-colors"
                        >
                          {item.qty === 1 ? (
                            <Trash2
                              size={12}
                              className="md:w-[14px] md:h-[14px]"
                            />
                          ) : (
                            <Minus
                              size={12}
                              className="md:w-[14px] md:h-[14px]"
                            />
                          )}
                        </button>
                        <span className="text-xs md:text-sm font-medium w-6 md:w-8 text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.qty + 1)}
                          className="p-1.5 md:p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-r-md transition-colors"
                        >
                          <Plus size={12} className="md:w-[14px] md:h-[14px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-2 md:px-4 space-y-4 md:space-y-6 min-h-0">
            <button
              onClick={() => setStep('cart')}
              className="flex items-center text-xs text-[#651114] fill-[#651114] hover:fill-gray-700 hover:text-gray-700 text-center py-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M10 21.308L.692 12L10 2.692l1.064 1.064L2.819 12l8.244 8.244z" />
              </svg> Kembali ke keranjang
            </button>
            <div>
              <label
                htmlFor="cust_name"
                className="block text-[10px] md:text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider"
              >
                Nama
              </label>
              <textarea
                id="cust_name"
                rows={1}
                value={cust_name}
                onChange={(e) => setCustName(e.target.value)}
                placeholder=""
                className="w-full rounded-md border border-gray-300 p-2 md:p-2.5 text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-[#651114] resize-none"
              />
            </div>
            <div>
              <label
                htmlFor="cust_phone"
                className="block text-[10px] md:text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider"
              >
                No. Telp
              </label>
              <textarea
                id="cust_phone"
                rows={1}
                value={cust_phone}
                onChange={(e) => setCustPhone(e.target.value)}
                placeholder=""
                className="w-full rounded-md border border-gray-300 p-2 md:p-2.5 text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-[#651114] resize-none"
              />
            </div>
            <div>
              <label
                htmlFor="cust_address"
                className="block text-[10px] md:text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider"
              >
                Alamat Pengiriman
              </label>
              <textarea
                id="cust_address"
                rows={2}
                value={cust_address}
                onChange={(e) => setCustAddress(e.target.value)}
                placeholder=""
                className="w-full rounded-md border border-gray-300 p-2 md:p-2.5 text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-[#651114] resize-none"
              />
            </div>
            <div>
              <label
                htmlFor="notes"
                className="block text-[10px] md:text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider"
              >
                Catatan untuk Penjual (Opsional)
              </label>
              <textarea
                id="notes"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Contoh: Pedasnya dikurangi ya..."
                className="w-full rounded-md border border-gray-300 p-2 md:p-2.5 text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-[#651114] resize-none"
              />
            </div>
          </div>
        )}

        {/* FOOTER KERANJANG (Total & Tombol Checkout) */}
        <div className="border-t border-gray-200 p-4 md:p-6 bg-white flex flex-col gap-3 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)] shrink-0 z-10 max-h-[40%] overflow-hidden">
          {/* Textarea Catatan - Ukuran padding disesuaikan biar gak menuhin layar HP */}
          <div className="space-y-1.5 md:space-y-2 pt-2 border-t border-gray-100 shrink-0">
            <div className="flex justify-between text-xs md:text-sm text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>
            <div className="flex justify-between text-xs md:text-sm text-gray-600">
              <span>Ongkos Kirim</span>
              <span className="text-[10px] md:text-xs italic text-gray-500">
                DIHITUNG SAAT CHECKOUT
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center py-1 md:py-2">
            <span className="font-bold text-sm md:text-base text-gray-900">
              Total Pesanan
            </span>
            <span className="font-bold text-lg md:text-xl text-[#651114]">
              Rp {totalPrice.toLocaleString("id-ID")}
            </span>
          </div>

          {/* Tombol — berubah sesuai step */}
          {step === 'cart' ? (
            <Button
              onClick={() => setStep('form')}
              disabled={items.length === 0}
              className="w-full bg-[#651114] hover:bg-[#4a0d0f] text-white py-5 md:py-6 rounded-md font-bold tracking-wide text-xs md:text-sm"
            >
              CHECKOUT
            </Button>
          ) : (
            <Button
              onClick={handleCheckoutWA}
              className="w-full bg-[#651114] hover:bg-[#4a0d0f] text-white py-5 md:py-6 rounded-md font-bold tracking-wide text-xs md:text-sm"
            >
              PESAN VIA WHATSAPP
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
