import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";
import { startGeminiChat } from "@/lib/gemini";
import { useIsMobile } from "@/hooks/use-mobile";

interface Message {
  role: "user" | "model";
  text: string;
}

const ChatWidget = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Olá! Sou o assistente virtual da ASL Soluções Tech. Para um atendimento mais rápido, como posso ajudar com o seu caso hoje?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatInstance, setChatInstance] = useState<any>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const initChat = async () => {
      try {
        const response = await fetch("/contexto-asl.md");
        const contextText = await response.text();
        const chat = await startGeminiChat(contextText);
        setChatInstance(chat);
      } catch (error) {
        console.error("Erro ao carregar contexto:", error);
      }
    };
    initChat();
  }, []);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading || !chatInstance) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const result = await chatInstance.sendMessage(userMessage);
      const response = await result.response;
      setMessages((prev) => [...prev, { role: "model", text: response.text() }]);
    } catch (error: any) {
      console.error("🔍 ERRO DETALHADO DO GEMINI:", error?.message || error);
      
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "Desculpe, tive um pequeno problema de conexão. Pode repetir?" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed z-[9999] flex flex-col transition-all duration-300 ${
      isOpen && isMobile 
        ? "inset-0 bg-slate-50" 
        : "bottom-6 right-6 items-end"
    }`}>
      
      {isOpen && (
        <div className={`
          flex flex-col overflow-hidden animate-in zoom-in-95 duration-200
          ${isMobile 
            ? "w-full h-full" 
            : "mb-4 w-[380px] h-[550px] max-h-[calc(100dvh-120px)] bg-slate-50 rounded-2xl shadow-2xl border border-gray-200"
          }
        `}>
          
          <div className="bg-[#1e1e1e] p-4 text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-600 shadow-inner p-0.5">
                <img 
                  src="/og-image.png" 
                  alt="Logo ASL" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-sm leading-tight">Assistente Virtual</p>
                <p className="text-xs text-gray-300 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  Online agora
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-5 space-y-4 bg-gray-50/50">
            <div className="text-center text-xs text-gray-400 font-medium mb-4">Hoje</div>
            
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`p-3.5 rounded-2xl text-[15px] leading-relaxed shadow-sm max-w-[85%] ${
                  msg.role === "user" 
                  ? "bg-primary text-primary-foreground rounded-br-sm" 
                  : "bg-white text-gray-700 border border-gray-100 rounded-bl-sm"
                }`}>
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white border border-gray-100 p-3.5 rounded-2xl rounded-bl-sm">
                  <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                </div>
              </div>
            )}
          </div>

          <form 
            onSubmit={handleSendMessage} 
            className={`p-4 bg-white border-t border-gray-100 flex gap-3 shrink-0 ${
              isMobile ? "pb-[calc(1rem+env(safe-area-inset-bottom))]" : ""
            }`}
          >
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-grow bg-gray-100 border-transparent focus:bg-gray-100 rounded-full px-5 py-3 text-sm focus:ring-0 outline-none text-gray-700 placeholder:text-gray-400"
            />
            <button type="submit" disabled={isLoading || !input.trim()} className="w-11 h-11 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center shrink-0 hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-gray-200 disabled:hover:text-gray-500">
              <Send className="w-5 h-5 ml-1" />
            </button>
          </form>
        </div>
      )}

      {(!isOpen || !isMobile) && (
        <div className="relative flex items-center justify-center">
          {!isOpen && (
            <span className="absolute w-full h-full rounded-full bg-[#00a8ff] opacity-40 animate-ping"></span>
          )}
          <button onClick={() => setIsOpen(!isOpen)} className="relative w-16 h-16 bg-[#00a8ff] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 z-10">
            {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;