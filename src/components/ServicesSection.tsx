import { Code2, Cloud, Settings, RefreshCcw, Briefcase, Shield } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento de Software Sob Medida",
    description: "Criamos aplicações web, mobile e APIs escaláveis, seguras e alinhadas às necessidades do seu negócio.",
    tags: ["Java", ".NET", "Node.js", "React", "Angular", "Flutter"],
  },
  {
    icon: Cloud,
    title: "Cloud Computing & Arquitetura",
    description: "Planejamos, migramos e otimizamos ambientes em nuvem com foco em performance, segurança e redução de custos.",
    tags: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    icon: Settings,
    title: "DevOps & SRE",
    description: "Automatizamos pipelines, melhoramos a confiabilidade dos sistemas e aceleramos entregas com práticas modernas.",
    tags: ["CI/CD", "IaC", "Monitoramento", "Alta Disponibilidade"],
  },
  {
    icon: RefreshCcw,
    title: "Modernização de Sistemas Legados",
    description: "Transformamos sistemas antigos em soluções modernas, eficientes e integradas à nuvem, sem interromper seu negócio.",
    tags: ["Refatoração", "Conteinerização", "Integração"],
  },
  {
    icon: Briefcase,
    title: "Gestão de Projetos de TI",
    description: "Atuamos desde o planejamento até a entrega, utilizando Scrum, Kanban, ITIL e boas práticas do PMI.",
    tags: ["Scrum", "Kanban", "ITIL", "KPIs"],
  },
  {
    icon: Shield,
    title: "LGPD & Segurança da Informação",
    description: "Apoiamos empresas na adequação à LGPD, proteção de dados e governança da informação.",
    tags: ["Diagnóstico", "Compliance", "Privacidade"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
            Nossas Soluções
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Soluções tecnológicas <span className="text-gradient">completas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Do desenvolvimento à infraestrutura, oferecemos tudo que sua empresa precisa para crescer com tecnologia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group"
            >
              <div className="icon-container">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
