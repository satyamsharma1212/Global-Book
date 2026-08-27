import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX";
  const href = `https://wa.me/${number}?text=${encodeURIComponent(
    "Hello Global Book Publishing, I would like to know more about the handwriting work."
  )}`;

  return (
    <a
      className="whatsapp"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Global Book Publishing on WhatsApp"
    >
      <MessageCircle size={25} />
    </a>
  );
}