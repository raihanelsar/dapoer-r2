import type { Metadata } from "next";
// Menggunakan font Inter bawaan Next.js sebagai base font
import { Inter } from "next/font/google";
import "./globals.css";

// Import komponen buatan kita
import { Navbar } from "@/components/custom/Navbar";
import { Footer } from "@/components/custom/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DAPOER R2 | Citarasa Minang Autentik",
  description:
    "Menghadirkan warisan rasa Minangkabau dengan bumbu rahasia. Dimasak fresh dengan sistem Pre-Order khusus untuk Anda.",

  keywords: [
    "rendang asli minang",
    "dapur r2",
    "masakan padang premium",
    "pre order rendang",
    "jual dendeng batokok",
    "ayam pop autentik",
  ],
  authors: [{ name: "Dapur R2" }],

  openGraph: {
    title: "DAPUR R2 | Citarasa Minang Autentik",
    description:
      "Menghadirkan warisan rasa Minangkabau dengan bumbu rahasia. Dimasak fresh dengan sistem Pre-Order khusus untuk Anda.",
    url: "https://dapoer-r2.vercel.app",
    siteName: "Dapoer R2",
    images: [
      {
        url: "/images/hero-section.png",
        width: 1200,
        height: 630,
        alt: "Dapoer R2 Hero",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* Navbar muncul di semua halaman */}
        <Navbar />

        {/* Main content area dengan background krem/putih tulang */}
        <main className="min-h-screen bg-[#FAF7F2]">{children}</main>

        <Footer />

        {/* Toaster untuk notifikasi pop-up masuk keranjang */}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
