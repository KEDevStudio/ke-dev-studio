import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import FadeIn from "./ui/FadeIn";

const projects = [
  {
    title: "Thaylla Hair Braids",
    description:
      "Site profissional desenvolvido para um salão especializado em tranças. Projeto moderno, responsivo e integrado ao WhatsApp.",
    image: "/images/thaylla-preview.png",
    techs: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    site: "https://thaylla-hair-braids.vercel.app",
    status: "Online",
  },
];

export default function Portfolio() {
  return (
    <section
      id="projetos"
      className="bg-[#0D1117] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <FadeIn>

          <div className="text-center">

            <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-400">
              🚀 Portfólio
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-white md:text-5xl">
              Projetos que entregam resultados
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Desenvolvemos experiências digitais modernas,
              rápidas e pensadas para gerar presença online.
            </p>

          </div>

        </FadeIn>


        <div className="mt-20 space-y-10">

          {projects.map((project) => (

            <FadeIn key={project.title}>

              <div
                className="
                group overflow-hidden rounded-3xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-2
                hover:border-blue-500/50
                hover:shadow-2xl
                hover:shadow-blue-500/20
                "
              >

                <div className="grid md:grid-cols-2">


                  {/* IMAGEM */}

                  <div className="relative h-[300px] overflow-hidden md:h-[420px]">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="
                      object-cover
                      transition duration-700
                      group-hover:scale-110
                      "
                    />


                    <div className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-transparent
                    to-transparent
                    " />

                  </div>



                  {/* CONTEÚDO */}

                  <div className="flex flex-col justify-center p-8 md:p-12">


                    <span
                      className="
                      mb-5 w-fit rounded-full
                      border border-green-500/20
                      bg-green-500/10
                      px-4 py-2
                      text-sm text-green-400
                      "
                    >
                      ● {project.status}
                    </span>



                    <h3 className="
                    text-3xl font-bold
                    text-white
                    md:text-4xl
                    ">
                      {project.title}
                    </h3>



                    <p className="
                    mt-6
                    leading-8
                    text-gray-400
                    ">
                      {project.description}
                    </p>



                    <div className="mt-8 flex flex-wrap gap-3">

                      {project.techs.map((tech) => (

                        <span
                          key={tech}
                          className="
                          rounded-full
                          border border-white/10
                          bg-white/5
                          px-4 py-2
                          text-sm
                          text-gray-300
                          transition
                          hover:border-blue-500
                          "
                        >
                          {tech}
                        </span>

                      ))}

                    </div>



                    <div className="mt-10">

                      <a
                        href={project.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        inline-flex
                        items-center
                        gap-3
                        rounded-xl
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        px-7 py-3
                        font-semibold
                        text-white
                        transition-all
                        hover:scale-105
                        "
                      >

                        <ExternalLink size={18}/>

                        Ver Projeto

                        <ArrowUpRight size={16}/>

                      </a>

                    </div>


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