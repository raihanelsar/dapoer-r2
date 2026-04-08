"use client";

import { useState, useEffect } from "react";
import { Product, ProductVariant } from "@/data/products";
import { useCartStore } from "@/store/useCartStore";
import toast from "react-hot-toast";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface VariantModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VariantModal({ product, isOpen, onClose }: VariantModalProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null,
  );
  const [poDate, setPoDate] = useState<string>("");
  const [minDateStr, setMinDateStr] = useState<string>("");

  // State baru untuk Jasa Pengiriman
  const [deliveryMethod, setDeliveryMethod] = useState<string>("Gojek Instant");

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    if (product && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }

    const today = new Date();
    today.setDate(today.getDate() + 1);
    const formattedMinDate = today.toISOString().split("T")[0];
    setMinDateStr(formattedMinDate);
    setPoDate(formattedMinDate);
  }, [product, isOpen]);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    if (!poDate)  {
      toast.error("Mohon pilih tanggal pengiriman!");
      return;
    }

    addToCart({
      id: `${product.id}-${selectedVariant.name}-${poDate}-${deliveryMethod}`,
      productId: product.id,
      name: product.name,
      image: product.image,
      variant: selectedVariant.name,
      price: selectedVariant.price,
      qty: 1,
      poDate: poDate,
      delivery: deliveryMethod, // Simpan data kurir ke keranjang
    });

    toast.success(`${product.name} berhasil ditambahkan!`);
    onClose();
  };

  const displayDate = new Date(poDate).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-6">
          {/* 1. Section Pilih Varian (Otomatis menyesuaikan jumlah varian) */}
          <div>
            <h4 className="mb-3 text-sm font-medium leading-none">
              1. Pilih Varian:
            </h4>
            <RadioGroup
              value={selectedVariant?.name}
              onValueChange={(value) => {
                const variant = product.variants.find((v) => v.name === value);
                if (variant) setSelectedVariant(variant);
              }}
              className="flex flex-col space-y-2"
            >
              {product.variants.map((variant) => (
                <div
                  key={variant.name}
                  className="flex items-center justify-between space-x-2 border p-3 rounded-md"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={variant.name} id={variant.name} />
                    <Label
                      htmlFor={variant.name}
                      className="cursor-pointer font-normal"
                    >
                      {variant.name}
                    </Label>
                  </div>
                  <span className="font-semibold text-sm">
                    Rp {variant.price.toLocaleString("id-ID")}
                  </span>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* 2. Section Pilih Tanggal PO */}
          <div>
            <h4 className="mb-3 text-sm font-medium leading-none">
              2. Tanggal Pengiriman (Min. H+1):
            </h4>
            <input
              type="date"
              min={minDateStr}
              value={poDate}
              onChange={(e) => setPoDate(e.target.value)}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#651114]"
            />
            {poDate && (
              <p className="text-xs text-green-700 mt-2">
                Dikirim pada: <strong>{displayDate}</strong>
              </p>
            )}
          </div>

          {/* 3. Section Jasa Pengiriman */}
          <div>
            <h4 className="mb-3 text-sm font-medium leading-none">
              3. Jasa Pengiriman:
            </h4>
            <RadioGroup
              value={deliveryMethod}
              onValueChange={setDeliveryMethod}
              className="grid grid-cols-2 gap-3"
            >
              {[
                {
                  id: "Gojek Instant",
                  name: "Instant",
                  brand: "Gojek",
                  color: "bg-[#00AA13]",
                },
                {
                  id: "Grab Instant",
                  name: "Instant",
                  brand: "Grab",
                  color: "bg-[#00B14F]",
                },
                {
                  id: "Gojek Sameday",
                  name: "Sameday",
                  brand: "Gojek",
                  color: "bg-[#00AA13]",
                },
                {
                  id: "Grab Sameday",
                  name: "Sameday",
                  brand: "Grab",
                  color: "bg-[#00B14F]",
                },
              ].map((method) => (
                <div key={method.id} className="relative">
                  <RadioGroupItem
                    value={method.id}
                    id={method.id}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={method.id}
                    className="flex flex-col items-center justify-center p-3 border-2 rounded-md cursor-pointer hover:bg-gray-50 peer-data-[state=checked]:border-[#651114] peer-data-[state=checked]:bg-red-50 transition-all"
                  >
                    <span
                      className={`text-[10px] text-white font-bold px-2 py-0.5 rounded-full mb-1 ${method.color}`}
                    >
                      {method.brand}
                    </span>
                    <span className="font-semibold text-xs">{method.name}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2 pt-4 border-t">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="font-bold text-lg">
              Rp {selectedVariant?.price.toLocaleString("id-ID") || 0}
            </span>
          </div>
          <Button
            onClick={handleAddToCart}
            className="bg-[#651114] hover:bg-[#4a0d0f] text-white"
          >
            Tambahkan
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
