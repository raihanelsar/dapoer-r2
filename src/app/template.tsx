"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Posisi awal: tembus pandang dan agak turun ke bawah
      animate={{ opacity: 1, y: 0 }} // Posisi akhir: muncul jelas dan naik ke posisi aslinya
      transition={{ duration: 0.5, ease: "easeOut" }} // Durasi animasi setengah detik
    >
      {children}
    </motion.div>
  );
}
