import React, { useState, useEffect } from 'react';
import { X } from "lucide-react";

interface DemoModalProps {
  triggerCustom?: React.ReactNode; 
  videoUrl?: string; // Agora o modal recebe o link de vídeo do produto
}

const DemoModal = ({ triggerCustom, videoUrl }: DemoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Link de agendamento padrão caso não seja passado um vídeo
  const fallbackUrl = "https://calendar.app.google/nYGRTAwM3WYL7n2T8";
  const iframeSrc = videoUrl || fallbackUrl;

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
      {/* Gatilho (Botão do Card) */}
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

      {/* Estrutura do Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          {/* Botão Fechar Flutuante */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-[110] border border-white/20"
            aria-label="Fechar Demonstração"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="bg-card w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden relative shadow-2xl animate-in zoom-in duration-300 z-10 border border-border">
            
            {/* Header Interno Mobile */}
            <div className="flex justify-between items-center p-4 border-b border-border bg-muted/30 md:hidden">
               <span className="font-semibold text-foreground">Demonstração</span>
               <button onClick={() => setIsOpen(false)} className="text-muted-foreground text-2xl hover:text-foreground" aria-label="Fechar">&times;</button>
            </div>

            {/* Iframe */}
            <iframe 
              src={iframeSrc}
              className="w-full h-full border-0"
              title="Demonstração do Produto"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Clique no fundo fecha */}
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