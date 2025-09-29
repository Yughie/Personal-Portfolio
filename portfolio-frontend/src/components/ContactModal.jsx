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
        className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-2 float-right bg-brandblue hover:bg-blue-700 text-brandwhite text-xl font-bold px-2 py-1 rounded"
        >
          ✕
        </button>

        {/* Your Contact Form */}
        <ContactFormOnly />
      </div>
    </div>
  );
}
