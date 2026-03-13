import React, { useState, useEffect } from 'react';
import { X } from "lucide-react";

interface DemoModalProps {
  triggerCustom?: React.ReactNode; 
}

const DemoModal = ({ triggerCustom }: DemoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const googleCalendarUrl = "https://calendar.app.google/nYGRTAwM3WYL7n2T8";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => { 
      document.body.style.overflow = 'unset';
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {triggerCustom ? (
        <div onClick={() => setIsOpen(true)} className="w-full flex">
          {triggerCustom}
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all font-medium"
        >
          Agendar Demonstração
        </button>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-[110] border border-white/20"
            aria-label="Fechar Agendamento"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden relative shadow-2xl animate-in zoom-in duration-300 z-10">
            <div className="flex justify-between items-center p-4 border-b bg-gray-50 md:hidden">
               <span className="font-semibold text-gray-700">Agendar Demo</span>
               <button onClick={() => setIsOpen(false)} className="text-gray-500 text-2xl hover:text-gray-700" aria-label="Fechar">&times;</button>
            </div>

            <iframe 
              src={googleCalendarUrl}
              className="w-full h-full border-0"
              title="Agendamento Google Calendar"
              allow="payment"
            ></iframe>
          </div>

          <div 
            className="absolute inset-0 z-0 cursor-pointer" 
            onClick={() => setIsOpen(false)}
            aria-label="Fechar modal ao clicar no fundo"
          ></div>
        </div>
      )}
    </>
  );
};

export default DemoModal;