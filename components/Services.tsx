"use client";

import {
  Globe,
  Laptop,
  Smartphone,
  ShoppingBag,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import FadeIn from "./ui/FadeIn";


const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description:
      "Sites profissionais para empresas e marcas que precisam de presença digital forte e confiável.",
  },

  {
    icon: Laptop,
    title: "Landing Pages",
    description:
      "Páginas estratégicas focadas em conversão, vendas e geração de novos clientes.",
  },

  {
    icon: Smartphone,
    title: "Design Responsivo",
    description:
      "Experiência perfeita em celulares, tablets e computadores.",
  },

  {
    icon: ShoppingBag,
    title: "Catálogo Digital",
    description:
      "Mostre seus produtos e serviços de forma organizada e profissional.",
  },

  {
    icon: ShieldCheck,
    title: "Performance e SEO",
    description:
      "Sites rápidos, otimizados e preparados para melhorar sua presença no Google.",
  },

  {
    icon: Wrench,
    title: "Manutenção e Suporte",
    description:
      "Atualizações, melhorias e suporte técnico para manter seu projeto evoluindo.",
  },
];


export default function Services() {

  return (

    <section
      id="servicos"
      className="bg-[#09090B] px-6 py-28"
    >

      <div className="mx-auto max-w-7xl">


        <FadeIn>

          <div className="text-center">

            <span
              className="
              inline-flex
              rounded-full
              border border-blue-500/30
              bg-blue-500/10
              px-5 py-2
              text-sm
              font-medium
              text-blue-400
              "
            >
              💼 Serviços
            </span>


            <h2
              className="
              mt-6
              text-4xl
              font-extrabold
              text-white
              md:text-5xl
              "
            >
              Soluções digitais para
              <br />
              destacar sua marca.
            </h2>


            <p
              className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-gray-400
              "
            >
              Criamos experiências digitais modernas,
              rápidas e profissionais para empresas e
              negócios que querem crescer online.
            </p>


          </div>

        </FadeIn>



        <div
          className="
          mt-20
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
          "
        >

          {services.map((service, index) => (

            <FadeIn
              key={service.title}
              delay={index * 0.1}
            >

              <div
                className="
                group
                h-full
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-blue-500/50
                hover:bg-white/[0.08]
                hover:shadow-xl
                hover:shadow-blue-500/10
                "
              >


                <div
                  className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-500/10
                  transition
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-blue-500/20
                  "
                >

                  <service.icon
                    size={34}
                    className="text-blue-500"
                  />

                </div>



                <h3
                  className="
                  mt-7
                  text-2xl
                  font-bold
                  text-white
                  "
                >
                  {service.title}
                </h3>



                <p
                  className="
                  mt-4
                  leading-7
                  text-gray-400
                  "
                >
                  {service.description}
                </p>



                <div
                  className="
                  mt-8
                  h-1
                  w-0
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-500
                  transition-all
                  duration-500
                  group-hover:w-full
                  "
                />


              </div>


            </FadeIn>

          ))}

        </div>


      </div>

    </section>

  );
}