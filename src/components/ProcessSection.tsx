import { Search, FileText, Zap, RefreshCcw, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Análise técnica e de negócio para entender seus desafios e oportunidades.",
  },
  {
    icon: FileText,
    title: "Proposta",
    description: "Desenho de solução personalizada com escopo, cronograma e investimento.",
  },
  {
    icon: Zap,
    title: "Execução",
    description: "Desenvolvimento ágil com entregas incrementais e acompanhamento próximo.",
  },
  {
    icon: RefreshCcw,
    title: "Entrega Contínua",
    description: "Releases frequentes com validação e ajustes em tempo real.",
  },
  {
    icon: TrendingUp,
    title: "Evolução",
    description: "Suporte estratégico e evolução contínua da solução.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
            Nosso Método
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Do diagnóstico ao <span className="text-gradient">resultado</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo estruturado que garante transparência, qualidade e resultados em cada etapa.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="process-step relative">
              {/* Icon */}
              <div className="process-icon">
                <step.icon className="w-7 h-7 text-primary" />
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 -translate-y-1/2">
                    <div className="w-full h-full bg-gradient-to-r from-primary to-accent opacity-30" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
