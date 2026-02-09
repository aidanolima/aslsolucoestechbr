import { ExternalLink, ShieldCheck, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Apólice System",
      description: "Plataforma SaaS completa para gestão de seguros. Controle apólices, renovações e clientes com eficiência e segurança de dados.",
      icon: ShieldCheck,
      // Nome do arquivo da imagem que você colocará na pasta public
      image: "/produto-apolice.png",
      url: "https://apolicesystemsaas.netlify.app/",
      tags: ["SaaS", "Seguros", "Gestão"],
    },
    {
      id: 2,
      title: "Pets Admin",
      description: "Painel administrativo intuitivo para Pet Shops e Clínicas Veterinárias. Gerencie agendamentos, estoque e histórico de clientes.",
      icon: PawPrint,
      // Nome do arquivo da imagem que você colocará na pasta public
      image: "/produto-pets.png", 
      url: "https://aidanodasilvalima784722.netlify.app/login",
      tags: ["Dashboard", "Veterinária", "Admin"],
      // Credenciais removidas conforme solicitado
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4 text-foreground">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções proprietárias desenvolvidas para resolver problemas reais com tecnologia de ponta.
          </p>
        </div>

        {/* Grid de Produtos */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Ícone e Tags */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <product.icon className="w-6 h-6" />
                </div>
                <div className="flex gap-2">
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
              
              {/* --- NOVA ÁREA DE IMAGEM DO PRODUTO --- */}
              <div className="mb-6 rounded-lg overflow-hidden border border-border/50 bg-muted/30">
                <img 
                  src={product.image} 
                  alt={`Interface do ${product.title}`}
                  className="w-full h-48 lg:h-56 object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* -------------------------------------- */}

              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                {product.description}
              </p>

              {/* Botão de Ação */}
              <div className="mt-auto">
                <a 
                  href={product.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button className="w-full gap-2 font-semibold" size="lg">
                    Acessar Demonstração
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;