import { useState } from "react";
import { ExternalLink, ShieldCheck, PawPrint, ShoppingCart, Scale, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import DemoModal from "@/components/ui/DemoModal";

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      title: "Apólice System",
      description: "Plataforma SaaS completa para gestão de seguros. Controle apólices, renovações e clientes com eficiência e segurança de dados.",
      icon: ShieldCheck,
      image: "/produto-apolice.png",
      url: "https://apolicesystemsaas.netlify.app/",
      tags: ["SaaS", "Seguros", "Gestão"],
      isDirectLink: true,
      isDisabled: false
    },
    {
      id: 2,
      title: "Pets Admin",
      description: "Painel administrativo intuitivo para Pet Shops e Clínicas Veterinárias. Gerencie agendamentos, estoque e histórico de clientes.",
      icon: PawPrint,
      image: "/produto-pets.png",
      url: "https://aidanodasilvalima784722.netlify.app/login",
      tags: ["Dashboard", "Veterinária", "Admin"],
      isDirectLink: true,
      isDisabled: false
    },
    {
      id: 3,
      title: "Loja Quinta do Monteiro",
      description: "Um e-commerce completo. Proporciona a melhor experiência de compra para o usuário e ferramentas modernas de gestão para impulsionar suas vendas.",
      icon: ShoppingCart,
      image: "/produto-ecommerce.png", 
      url: "https://painel-quintadomonteiro.onrender.com/", 
      tags: ["E-commerce", "Vendas", "Loja"],
      isDirectLink: true,
      isDisabled: false
    },
    {
      id: 4,
      title: "GestJus",
      description: "Software jurídico com foco na automação de documentos e fluxos de trabalho. Ideal para escritórios que desejam aumentar a produtividade e reduzir riscos operacionais. Permite criar, revisar e armazenar contratos de forma segura.",
      icon: Scale,
      image: "/produto-gestjus.png", // <-- Caminho atualizado para a imagem do print!
      url: "#",
      tags: ["Jurídico", "Automação", "Software"],
      isDirectLink: false,
      isDisabled: true 
    }
  ];

  // Lógica inteligente para limitar os botões e evitar o "espaço em branco"
  const nextSlide = () => {
    const maxIndex = window.innerWidth >= 768 ? products.length - 2 : products.length - 1;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = window.innerWidth >= 768 ? products.length - 2 : products.length - 1;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="produtos" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Cabeçalho Centralizado */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4 text-foreground">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-8">
            Soluções proprietárias desenvolvidas para resolver problemas reais com tecnologia de ponta.
          </p>
          
          {/* Controles do Carrossel Centralizados */}
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide} 
              className="rounded-full shadow-sm hover:text-primary hover:border-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide} 
              className="rounded-full shadow-sm hover:text-primary hover:border-primary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Carrossel */}
        <div className="overflow-hidden w-full max-w-6xl mx-auto">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{ transform: `translateX(calc(-${currentIndex} * (100% + 2rem)))` }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="w-full md:w-[calc(50%-1rem)] flex-shrink-0 bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Ícone e Tags */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <product.icon className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2 flex-wrap justify-end max-w-[60%]">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl mb-4 text-card-foreground">
                  {product.title}
                </h3>
                
                {/* Imagem do Produto */}
                <div className="mb-6 rounded-lg overflow-hidden border border-border/50 bg-muted/30 relative group">
                  <img 
                    src={product.image} 
                    alt={`Interface do ${product.title}`}
                    className="w-full h-48 lg:h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => (e.currentTarget.style.display = 'none')} 
                  />
                </div>

                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {product.description}
                </p>

                {/* Botão de Ação: Verifica se está desabilitado, se é link direto ou modal */}
                <div className="mt-auto">
                  {product.isDisabled ? (
                    <Button 
                      disabled 
                      className="w-full gap-2 font-semibold bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-500 cursor-not-allowed opacity-100" 
                      size="lg"
                    >
                      Em breve
                    </Button>
                  ) : product.isDirectLink ? (
                    <a href={product.url} target="_blank" rel="noopener noreferrer" className="w-full block">
                      <Button className="w-full gap-2 font-semibold" size="lg">
                        Acessar
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  ) : (
                    <DemoModal 
                      videoUrl={product.url}
                      triggerCustom={
                        <Button className="w-full gap-2 font-semibold" size="lg">
                          Acessar
                          <Play className="w-4 h-4" />
                        </Button>
                      }
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;