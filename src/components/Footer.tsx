import { Linkedin, Github, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const services = [
    "Desenvolvimento de Software",
    "Cloud Computing",
    "DevOps & SRE",
    "Modernização de Sistemas",
    "Gestão de Projetos",
    "LGPD & Segurança",
  ];

  const quickLinks = [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Processo", href: "#processo" },
    { label: "Contato", href: "#contato" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/aidanolima/" },
    { icon: Github, href: "https://github.com/aidanolima" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="dark-section text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">ASL</span>
              </div>
              <span className="font-display font-semibold text-lg">
                ASL <span className="font-normal text-white/70">Soluções Tech</span>
              </span>
            </a>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Tecnologia, inovação e confiança para impulsionar negócios no presente e no futuro.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#servicos"
                    className="text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Av. Brigadeiro Faria Lima, São Paulo - SP (Sede Virtual)</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+5581999207087" className="hover:text-primary transition-colors">
                  +55 81 9.9920-7087
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:aidanolima@gmail.com" className="hover:text-primary transition-colors">
                  aidanolima@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2026 ASL Soluções Tech. Todos os direitos reservados.
          </p>
          <p className="text-white/50 text-sm">
            Desenvolvido por Áidano Lima
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
