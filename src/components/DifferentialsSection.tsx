import { Award, Lightbulb, Users, Target, MessageSquare, CheckCircle2 } from "lucide-react";

const differentials = [
  {
    icon: Award,
    title: "Experiência comprovada",
    description: "Mais de 20 anos atuando em grandes projetos corporativos e governamentais.",
  },
  {
    icon: Lightbulb,
    title: "Visão estratégica + execução",
    description: "Unimos pensamento estratégico com capacidade técnica de implementação.",
  },
  {
    icon: Users,
    title: "Atuação consultiva",
    description: "Cada projeto é único. Personalizamos soluções para suas necessidades.",
  },
  {
    icon: Target,
    title: "Foco em resultado",
    description: "Tecnologia é meio, não fim. O que importa é o impacto no seu negócio.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação clara",
    description: "Acompanhamento próximo e transparente em todas as etapas.",
  },
];

const targetAudience = [
  "Precisam escalar tecnologia com segurança",
  "Buscam modernizar sistemas e processos",
  "Querem migrar ou otimizar ambientes em cloud",
  "Necessitam de liderança técnica experiente",
  "Valorizam qualidade, governança e resultado",
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 dark-section text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Differentials */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
              Por que nos escolher
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-10">
              Diferenciais que <span className="text-primary">fazem a diferença</span>
            </h2>

            <div className="space-y-6">
              {differentials.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Target Audience */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
              Para quem é a ASL
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-10">
              Atendemos empresas que:
            </h2>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
              <ul className="space-y-4">
                {targetAudience.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
