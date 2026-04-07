import Image from "next/image";
import { Product } from "@/data/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  showBadge?: boolean;
}

export function ProductCard({
  product,
  onSelect,
  showBadge = false,
}: ProductCardProps) {
  const lowestPrice = Math.min(...product.variants.map((v) => v.price));

  return (
    <Card className="overflow-hidden flex flex-col justify-between h-full group hover:shadow-lg transition-all duration-300">
      <div>
        <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* LOGIKA BARU: Hanya muncul jika isBestSeller TRUE DAN showBadge TRUE */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isBestSeller && showBadge && (
              <Badge className="bg-[#651114] hover:bg-[#4a0d0f] text-white border-none shadow-md uppercase tracking-wider text-[10px]">
                Best Seller
              </Badge>
            )}
          </div>
        </div>

        <CardContent className="p-5">
          <h3 className="font-serif font-bold text-xl text-gray-900 line-clamp-1 mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </CardContent>
      </div>

      <CardFooter className="p-5 pt-0 flex flex-col items-start gap-4">
        <div className="font-bold text-lg text-[#651114]">
          Rp {lowestPrice.toLocaleString("id-ID")}
        </div>
        <Button
          className="w-full bg-[#651114] hover:bg-[#4a0d0f] text-white font-semibold tracking-wide transition-all duration-300"
          onClick={() => onSelect(product)}
        >
          Pesan Menu Ini
        </Button>
      </CardFooter>
    </Card>
  );
}
