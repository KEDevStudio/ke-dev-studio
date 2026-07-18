"use client";

import {
  BadgeCheck,
  ShieldCheck,
  Zap,
  Smartphone,
} from "lucide-react";

import FadeIn from "./ui/FadeIn";


const items = [
  {
    icon: Zap,
    title: "Alta Performance",
    description:
      "Sites rápidos, leves e otimizados para oferecer uma experiência superior aos visitantes.",
  },

  {
    icon: Smartphone,
    title: "100% Responsivo",
    description:
      "Seu projeto adaptado para celular, tablet e computador sem perder qualidade.",
  },

  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Desenvolvimento seguindo boas práticas para garantir estabilidade e confiança.",
  },

  {
    icon: BadgeCheck,
    title: "Qualidade Profissional",
    description:
      "Cada detalhe é pensado para entregar um resultado moderno e alinhado ao seu negócio.",
  },
];


export default function WhyChoose() {

  return (

    <section
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
              ⭐ Diferenciais
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
              Por que escolher
              <br />
              a KE Dev Studio?
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
              Criamos soluções digitais modernas,
              rápidas e pensadas para gerar uma
              experiência profissional para seus clientes.
            </p>


          </div>


        </FadeIn>




        <div
          className="
          mt-20
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-4
          "
        >


          {items.map((item, index) => (

            <FadeIn
              key={item.title}
              delay={index * 0.12}
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
                  bg-gradient-to-br
                  from-blue-500/20
                  to-purple-500/20
                  transition
                  duration-300
                  group-hover:scale-110
                  "
                >

                  <item.icon
                    size={34}
                    className="text-blue-400"
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
                  {item.title}
                </h3>




                <p
                  className="
                  mt-4
                  leading-7
                  text-gray-400
                  "
                >
                  {item.description}
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