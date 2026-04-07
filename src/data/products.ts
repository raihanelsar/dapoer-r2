// src/data/products.ts

export interface ProductVariant {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  isBestSeller: boolean;
  variants: ProductVariant[];
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Rendang Daging",
    description:
      "Daging sapi bagian paha yang empuk, dimasak berjam-jam dengan santan kental dan rempah pilihan hingga bumbu meresap ke serat terdalam.",
    image: "/images/rendang-daging.png",
    isBestSeller: true,
    variants: [
      { name: "250 Gr", price: 85000 },
      { name: "500 Gr", price: 170000 },
      { name: "1 KG", price: 340000 },
    ],
  },
  {
    id: "p2",
    name: "Rendang Paru Kriuk",
    description:
      "Paru sapi pilihan yang diiris tipis, digoreng garing, lalu dibalut bumbu rendang rempah yang gurih. Tekstur renyah yang bikin nagih!",
    image: "/images/rendang-paru-kriuk.png",
    isBestSeller: true,
    variants: [
      { name: "225 Gr", price: 75000 },
      { name: "450 Gr", price: 150000 },
      { name: "900 Gr", price: 300000 },
    ],
  },
  {
    id: "p3",
    name: "Keripik Kentang Balado",
    description:
      "Irisan kentang kuning yang super renyah dengan balutan sambal balado asli (bukan bubuk). Pedas manisnya pas untuk teman nasi.",
    image: "/images/keripik-kentang-balado.png",
    isBestSeller: true,
    variants: [{ name: "300 Gr", price: 50000 }],
  },
  {
    id: "p4",
    name: "Dendeng Batokok",
    description:
      "Daging sapi yang direbus dengan bumbu, lalu dipukul (batokok) hingga pipih dan seratnya terbuka. Disiram dengan ulekan kasar cabai hijau segar yang wangi minyak kelapa.",
    image: "/images/dendeng-batokok.png",
    isBestSeller: true,
    variants: [{ name: "1 KG", price: 300000 }],
  },
  {
    id: "p5",
    name: "Dendeng Kering",
    description:
      "Daging sapi yang diiris tipis, dijemur, dan digoreng garing. Disajikan terpisah dengan sambal ijo atau merah sesuai selera Anda.",
    image: "/images/dendeng-kering.png",
    isBestSeller: true,
    variants: [{ name: "20 Potong", price: 300000 }],
  },
  {
    id: "p6",
    name: "Rendang Telur",
    description:
      "Telur yang diolah menjadi kerupuk renyah berbentuk kotak, diselimuti bumbu rendang kering yang kaya rempah.",
    image: "/images/rendang-telur.png",
    isBestSeller: true,
    variants: [{ name: "300 Gr", price: 50000 }],
  },
  {
    id: "p7",
    name: "Rendang Suwir",
    description:
      "Solusi praktis makan enak. Daging sapi yang disuwir halus dan dimasak kering dengan bumbu rendang pekat. Tahan lama dan sangat gurih.",
    image: "/images/rendang-suwir.png",
    isBestSeller: true,
    variants: [
      { name: "225 Gr", price: 85000 },
      { name: "450 Gr", price: 170000 },
      { name: "900 Gr", price: 340000 },
    ],
  },
  {
    id: "p8",
    name: "Gulai Kambing",
    description:
      "Potongan daging kambing muda yang empuk, dimasak perlahan dengan santan kental dan 21 jenis rempah pilihan. Tanpa bau prengus, hanya aroma rempah yang menggugah selera.",
    image: "/images/gulai-kambing.png",
    isBestSeller: true,
    variants: [{ name: "1 KG", price: 300000 }],
  },
  {
    id: "p9",
    name: "Gulai Tunjang",
    description:
      "Kikil sapi pilihan dengan tekstur kenyal yang pas, disiram kuah gulai kuning kental yang gurih dan berlemak. Menu wajib bagi pecinta kuliner Minang autentik.",
    image: "/images/gulai-tunjang.png",
    isBestSeller: true,
    variants: [{ name: "Per Kaki", price: 300000 }],
  },
];
