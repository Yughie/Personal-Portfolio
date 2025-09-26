// components/ContactModal.jsx
import { useEffect } from "react";
import ContactFormOnly from "./ContactFormOnly.jsx";

export default function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg w-[90%]  max-w-3xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-brandblue hover:bg-blue-700  text-brandblack text-xl font-bold"
        >
          ✕
        </button>

        {/* Your Contact Form */}
        <ContactFormOnly />
      </div>
    </div>
  );
}
