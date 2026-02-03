import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const companies = ["Magazine Luiza", "Grupo Linx", "BrasilPrev", "Take Blip", "FIEMT"];

const CTASection = () => {
  // Configurações do WhatsApp
  const phoneNumber = "5581999207087";
  const specialistMsg = "Olá! Vim pelo site da ASL Soluções Tech e gostaria de falar com um especialista.";
  const diagnosticMsg = "Olá! Vim pelo site da ASL Soluções Tech e gostaria de solicitar um diagnóstico gratuito.";

  // Criação dos links diretos
  const specialistUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(specialistMsg)}`;
  const diagnosticUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(diagnosticMsg)}`;

  return (
    <section id="contato" className="cta-section py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Pronto para levar sua tecnologia a outro nível?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Converse com um especialista e descubra como a ASL Soluções Tech pode ajudar sua empresa a crescer com tecnologia, segurança e eficiência.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {/* Botão 1: Falar com Especialista - Envolvido em tag <a> */}
            <a 
              href={specialistUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block" // Garante comportamento correto de layout
            >
              <Button variant="ctaOutline" size="xl" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com um especialista
              </Button>
            </a>
            
            {/* Botão 2: Diagnóstico Gratuito - Envolvido em tag <a> */}
            <a 
              href={diagnosticUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="ctaWhite" size="xl" className="w-full sm:w-auto">
                Solicitar diagnóstico gratuito
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>

          {/* Trusted Companies */}
          <div>
            <p className="text-white/60 text-sm mb-6">
              Empresas que já confiaram em nossa expertise
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {companies.map((company, index) => (
                <span
                  key={index}
                  className="text-white/80 font-medium text-sm md:text-base"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;