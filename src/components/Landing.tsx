import { useState } from "react";
import { ExternalLink, ShieldCheck, PawPrint, ShoppingCart, Scale, ChevronLeft, ChevronRight } from "lucide-react";
import DemoModal from "@/components/ui/DemoModal"; // Verifique se o caminho bate com o seu projeto!

const produtos = [
  {
    id: 1,
    title: "Apólice System",
    icon: <ShieldCheck className="w-6 h-6 text-[#00a8ff]" />,
    tags: ["SaaS", "Seguros", "Gestão"],
    image: "https://placehold.co/800x450/e2e8f0/64748b?text=Imagem+Apolice+System",
    description: "Plataforma SaaS completa para gestão de seguros. Controle apólices, renovações e clientes com eficiência e segurança de dados.",
  },
  {
    id: 2,
    title: "Pets Admin",
    icon: <PawPrint className="w-6 h-6 text-[#00a8ff]" />,
    tags: ["Dashboard", "Veterinária", "Admin"],
    image: "https://placehold.co/800x450/e2e8f0/64748b?text=Imagem+Pets+Admin",
    description: "Painel administrativo intuitivo para Pet Shops e Clínicas Veterinárias. Gerencie agendamentos, estoque e histórico de clientes.",
  },
  {
    id: 3,
    title: "Loja Quinta do Monteiro",
    icon: <ShoppingCart className="w-6 h-6 text-[#00a8ff]" />,
    tags: ["E-commerce", "Vendas", "Loja"],
    image: "https://placehold.co/800x450/e2e8f0/64748b?text=Imagem+Loja+Quinta",
    description: "Um e-commerce completo. Proporciona a melhor experiência de compra para o usuário e ferramentas modernas de gestão para impulsionar suas vendas.",
  },
  {
    id: 4,
    title: "GestJus",
    icon: <Scale className="w-6 h-6 text-[#00a8ff]" />,
    tags: ["Jurídico", "Automação", "Software"],
    image: "https://placehold.co/800x450/e2e8f0/64748b?text=Imagem+GestJus",
    description: "Software jurídico com foco na automação de documentos e fluxos de trabalho. Ideal para escritórios que desejam aumentar a produtividade e reduzir riscos operacionais. Permite criar, revisar e armazenar contratos de forma segura.",
  }
];

const ProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= produtos.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? produtos.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Ecossistema
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Nossas Soluções
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button onClick={prevSlide} className="p-3 rounded-full border border-gray-200 bg-white text-gray-600 hover:text-primary hover:border-primary transition-all shadow-sm">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-full border border-gray-200 bg-white text-gray-600 hover:text-primary hover:border-primary transition-all shadow-sm">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(calc(-${currentIndex} * (100% + 1.5rem)))` }}
          >
            {produtos.map((produto) => (
              <div key={produto.id} className="w-full md:w-[calc(50%-0.75rem)] flex-shrink-0 flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#e6f6ff] flex items-center justify-center">
                    {produto.icon}
                  </div>
                  <div className="flex gap-2 flex-wrap justify-end max-w-[60%]">
                    {produto.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-[#e6f6ff] text-[#00a8ff] text-xs font-semibold rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6">{produto.title}</h3>
                
                <div className="rounded-xl overflow-hidden mb-6 aspect-[16/9] flex items-center justify-center bg-gray-50 border border-gray-100">
                  <img src={produto.image} alt={`Interface do ${produto.title}`} className="object-cover w-full h-full" />
                </div>

                <p className="text-gray-500 mb-8 flex-grow leading-relaxed">{produto.description}</p>

                <DemoModal 
                  triggerCustom={
                    <button className="w-full flex items-center justify-center bg-[#00a8ff] hover:bg-[#0097e6] text-white font-medium py-4 rounded-xl text-lg transition-colors">
                      Acessar Demonstração
                      <ExternalLink className="ml-2 w-5 h-5" />
                    </button>
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button onClick={prevSlide} className="p-3 rounded-full border border-gray-200 bg-white text-gray-600 hover:text-primary transition-all shadow-sm">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="p-3 rounded-full border border-gray-200 bg-white text-gray-600 hover:text-primary transition-all shadow-sm">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;