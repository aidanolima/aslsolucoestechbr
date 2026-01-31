import { User, FileText, Globe, Shield } from "lucide-react";

const stats = [
  { icon: User, value: "20+", label: "Anos de experiência" },
  { icon: FileText, value: "50+", label: "Projetos entregues" },
  { icon: Globe, value: "3", label: "Clouds dominados" },
  { icon: Shield, value: "100%", label: "Foco em segurança" },
];

const companies = [
  "Magazine Luiza (Luiza Labs)",
  "Grupo Linx",
  "BrasilPrev",
  "Take Blip",
  "FIEMT",
];

const skillsLeft = [
  "AWS, Azure & GCP",
  "DevOps & Kubernetes",
  "Governança de TI",
];

const skillsRight = [
  "Java, .NET, React, Node.js",
  "Metodologias Ágeis",
  "LGPD & Segurança",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 block">
              Experiência que faz a diferença
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Liderança técnica de <span className="text-gradient">alto nível</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg mb-8 leading-relaxed">
              Nossa liderança técnica é conduzida por <strong className="text-foreground">Áidano Lima</strong>, profissional com atuação em empresas de referência no mercado brasileiro, liderando projetos de alta complexidade em cloud, desenvolvimento e governança de TI.
            </p>

            {/* Companies */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-3">Experiência em empresas como:</p>
              <div className="flex flex-wrap gap-2">
                {companies.map((company, index) => (
                  <span key={index} className="company-badge">
                    {company}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills - Two columns */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <ul className="space-y-3">
                {skillsLeft.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {skillsRight.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Stats Grid - 2x2 layout */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="stats-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display font-bold text-3xl md:text-4xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
