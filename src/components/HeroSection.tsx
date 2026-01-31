import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const highlights = [
    "Mais de 20 anos de experiência",
    "Projetos em grandes empresas",
    "AWS, Azure & Google Cloud",
  ];

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
            <Button variant="cta" size="xl">
              Solicitar diagnóstico gratuito
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="xl">
              Conhecer nossos serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
