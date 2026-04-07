import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer id="kontak" className="bg-[#FAF7F2] border-t border-gray-200">
      {/* SECTION KONTAK & MAPS */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Info Kontak (Kiri) */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
              Hubungi Kami
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#651114] mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Alamat</h4>
                  <p className="text-gray-500 text-sm mt-1">
                    Jl. Tradisi Minang No. 12, Jakarta Selatan, 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[#651114] mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">WhatsApp</h4>
                  <p className="text-gray-500 text-sm mt-1">
                    +62 812-3456-7890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-[#651114] mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    Jam Operasional
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">
                    Senin - Minggu: 08:00 - 16:00 WIB
                  </p>
                </div>
              </div>
            </div>

            <Link href="https://wa.me/6285817663217" target="_blank">
              <button className="mt-8 w-full bg-[#651114] hover:bg-[#4a0d0f] text-white py-4 rounded-md font-bold tracking-widest text-xs uppercase transition-colors">
                Pesan Lewat WhatsApp
              </button>
            </Link>
          </div>

          {/* Maps (Kanan) */}
          <div className="bg-[#1A1A1A] rounded-3xl overflow-hidden h-[400px] relative shadow-lg">
            {/* Embed Google Maps Iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126917.04586221193!2d106.73977507963384!3d-6.242544299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c5e82dd4b820!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1712211234567!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            ></iframe>
            {/* Overlay Kotak Putih di Tengah Maps (opsional untuk pemanis) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-xl text-center shadow-lg pointer-events-none">
              <MapPin className="text-[#651114] mx-auto mb-1" size={24} />
              <h4 className="font-bold text-gray-900 text-xs tracking-wider uppercase">
                Dapoer R2
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BAWAH (Link & Copyright) */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-lg text-[#651114]">
              Dapoer R2
            </h3>
            <p className="text-gray-500 text-xs mt-2 max-w-xs">
              Menyajikan cita rasa autentik Minangkabau dalam kemasan yang lebih
              modern dan higienis.
            </p>
          </div>
          <div className="text-center md:text-right text-gray-400 text-xs">
            <p>&copy; {new Date().getFullYear()} Dapoer R2.</p>
            <p className="mt-1">Tradisi Minang dalam Sentuhan Modern.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
