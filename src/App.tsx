import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const InstagramFAB = () => {
  const instagramUrl = "https://www.instagram.com/aslsolucoestech/";

  return (
    <a
      href={instagramUrl}
      target="_blank" 
      rel="noopener noreferrer" 
      title="Siga a ASL Soluções Tech no Instagram"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-2 border-primary/20 hover:border-primary shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95 after:content-[''] after:absolute after:inset-0 after:rounded-full after:border-2 after:border-primary/30 after:animate-pulse"
    >
      <div className="w-10 h-10 flex items-center justify-center p-0.5 relative">
        <img
          src="/og-image.png" 
          alt="Imagem ASL Soluções Tech"
          className="w-full h-full object-contain"
        />
      </div>
    </a>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <InstagramFAB />
        
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;