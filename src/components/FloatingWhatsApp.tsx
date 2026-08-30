import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  // Ganti dengan nomor WA yang benar (format: 628...)
  const waNumber = "6281234567890"; 
  const message = encodeURIComponent("Halo REAL.CO, saya ingin bertanya tentang booking...");

  return (
    <a
      href={`https://wa.me/${waNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-6 z-[9999] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
