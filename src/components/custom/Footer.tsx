import Link from "next/link";
import {MapPin, Phone, Clock} from "lucide-react";

const contactItems = [
    {
        icon: MapPin,
        title: "Alamat",
        value: "Jl. Petamburan IV Rt008/04 No.17, Petamburan, Tanah Abang, Jakarta Pusat",
    },
    {
        icon: Phone,
        title: "WhatsApp",
        value: "+62 858-1766-3217",
    },
    {
        icon: Clock,
        title: "Jam Operasional",
        value: "Senin - Minggu, 08:00 - 16:00 WIB",
    },
];

export function Footer() {
    return (
        <footer id="kontak" className="border-t border-stone-200 bg-gradient-to-b from-[#FAF7F2] to-white">
            <div className="container mx-auto px-4 py-14 md:px-8 md:py-20">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        <span className="mb-3 inline-block w-fit rounded-full bg-[#651114]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#651114]">
                            Kontak Kami
                        </span>

                        <h2 className="font-serif text-3xl font-bold leading-tight text-stone-900 md:text-4xl">
                            Hubungi Dapoer R2
                        </h2>

                        <p className="mt-4 max-w-md text-sm leading-7 text-stone-600 md:text-base">
                            Kami siap membantu pesanan, pertanyaan menu, maupun kerja sama. Nikmati cita rasa autentik
                            Minangkabau dengan pelayanan yang hangat dan responsif.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] md:p-10">
                        <div className="space-y-6">
                            {contactItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="flex items-start gap-4 rounded-2xl border border-stone-100 bg-stone-50/70 p-4 transition hover:bg-stone-50"
                                    >
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#651114]/10 text-[#651114]">
                                            <Icon size={20} />
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-stone-900">{item.title}</h4>
                                            <p className="mt-1 text-sm leading-6 text-stone-600">{item.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <Link
                            href="https://wa.me/6285817663217"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#651114] px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#4a0d0f] hover:shadow-lg"
                        >
                            Pesan Lewat WhatsApp
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-stone-200 bg-white/80">
                <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 text-center md:flex-row md:px-8 md:text-left">
                    <div>
                        <h3 className="font-serif text-xl font-bold text-[#651114]">Dapoer R2</h3>
                        <p className="mt-2 max-w-sm text-sm leading-6 text-stone-500">
                            Menyajikan cita rasa autentik Minangkabau dalam kemasan yang lebih modern dan higienis.
                        </p>
                    </div>

                    <div className="text-sm text-stone-400 md:text-right">
                        <p>&copy; {new Date().getFullYear()} Dapoer R2. All rights reserved.</p>
                        <p className="mt-1">Tradisi Minang dalam Sentuhan Modern.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
