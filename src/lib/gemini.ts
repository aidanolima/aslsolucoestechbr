import { GoogleGenerativeAI } from "@google/generative-ai";

// Puxa a chave do arquivo .env.local
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error("ERRO: Chave da API do Gemini não encontrada. Verifique o arquivo .env.local");
}

// Inicializa a IA
const genAI = new GoogleGenerativeAI(apiKey || "");

export const startGeminiChat = async (contextoMarkdown: string) => {
  // Alterado para a versão "latest" para resolver o erro 404
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash", // Use "gemini-2.5-flash-lite" ou "gemini-2.5-flash" para evitar o erro 404
    systemInstruction: contextoMarkdown,
  });

  // Iniciamos a conversa já com um histórico inicial para dar o "tom"
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Olá! Como você pode me ajudar?" }],
      },
      {
        role: "model",
        parts: [{ text: "Olá! Sou o assistente virtual da ASL Soluções Tech. Estou aqui para tirar suas dúvidas sobre nossos serviços, como o Apólice System, Pets Admin e muito mais. Como posso ajudar o seu negócio hoje?" }],
      },
    ],
  });

  return chat;
};