"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "./ui/FadeIn";

const faqs = [
  {
    question: "Quanto custa um site?",
    answer:
      "O valor depende das funcionalidades e da complexidade do projeto. Solicite um orçamento gratuito e personalizado pelo WhatsApp.",
  },
  {
    question: "Em quanto tempo o site fica pronto?",
    answer:
      "O prazo médio varia entre 3 e 10 dias úteis, dependendo do tamanho e dos recursos solicitados.",
  },
  {
    question: "O site funciona no celular?",
    answer:
      "Sim. Todos os sites desenvolvidos pela KE Dev Studio são 100% responsivos e funcionam perfeitamente em celulares, tablets e computadores.",
  },
  {
    question: "Vocês fazem manutenção em sites?",
    answer:
      "Sim. Também realizamos manutenção, atualizações, melhorias e correções em sites já existentes.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento é combinado antes do início do projeto. Dependendo do serviço, é possível dividir em etapas.",
  },
  {
    question: "Após a entrega vocês oferecem suporte?",
    answer:
      "Sim. Após a entrega do projeto oferecemos suporte para garantir que tudo esteja funcionando corretamente.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#09090B] px-6 py-28"
    >
      <div className="mx-auto max-w-5xl">

        <FadeIn>
          <div className="text-center">

            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
              ❓ FAQ
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-white md:text-5xl">
              Perguntas Frequentes
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Tire suas dúvidas sobre nossos serviços antes mesmo de entrar em contato.
            </p>

          </div>
        </FadeIn>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.08}>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">

                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left transition hover:bg-white/[0.03]"
                >

                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition duration-300 ${
                      open === index ? "rotate-180 text-blue-400" : "text-gray-400"
                    }`}
                    size={22}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-7 text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>

            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}