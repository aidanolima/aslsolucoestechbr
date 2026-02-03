import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const highlights = [
    "Mais de 20 anos de experiência",
    "Projetos em grandes empresas",
    "AWS, Azure & Google Cloud",
  ];

  // Configuração do WhatsApp para o botão de diagnóstico
  const phoneNumber = "5581999207087";
  const message = "Olá! Vim pelo site da ASL Soluções Tech e gostaria de solicitar um diagnóstico gratuito.";
  const diagnosticUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Função para rolagem suave até a seção de serviços
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Evita o pulo brusco padrão do navegador
    const section = document.querySelector('#servicos'); // Busca a seção pelo ID "servicos"
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 tech-badge mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Parceiro Estratégico em TI
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Transformamos{" "}
            <span className="text-gradient">tecnologia</span> em resultado real para o seu negócio
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Soluções digitais sob medida em{" "}
            <strong className="text-foreground">desenvolvimento de software</strong>,{" "}
            <strong className="text-foreground">cloud computing</strong>,{" "}
            <strong className="text-foreground">arquitetura de sistemas</strong> e{" "}
            <strong className="text-foreground">transformação digital</strong>, conduzidas por especialistas com mais de 20 anos de experiência.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 md:gap-6 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {item}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            
            {/* Botão 1: WhatsApp (Diagnóstico) */}
            <a 
              href={diagnosticUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="cta" size="xl" className="w-full sm:w-auto">
                Solicitar diagnóstico gratuito
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            
            {/* Botão 2: Scroll Suave (Serviços) */}
            <a 
              href="#servicos" 
              onClick={handleScrollToServices}
              className="inline-block"
            >
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Conhecer nossos serviços
              </Button>
            </a>

          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;