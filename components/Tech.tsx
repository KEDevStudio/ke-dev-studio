"use client";

import FadeIn from "./ui/FadeIn";


const techs = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "GitHub",
  "Vercel",
];


export default function Tech() {

  return (

    <section
      id="tecnologias"
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
              ⚙ Tecnologias
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
              Tecnologias modernas
              <br />
              para criar soluções melhores
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
              Utilizamos ferramentas atuais para desenvolver
              aplicações rápidas, seguras e preparadas para crescer.
            </p>


          </div>


        </FadeIn>




        <div
          className="
          mt-20
          grid
          grid-cols-2
          gap-6
          md:grid-cols-4
          "
        >


          {techs.map((tech, index) => (

            <FadeIn
              key={tech}
              delay={index * 0.08}
            >


              <div
                className="
                group
                flex
                h-32
                items-center
                justify-center
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
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


                <h3
                  className="
                  text-lg
                  font-bold
                  text-white
                  transition
                  group-hover:scale-110
                  "
                >
                  {tech}
                </h3>



              </div>


            </FadeIn>

          ))}


        </div>


      </div>


    </section>

  );
}