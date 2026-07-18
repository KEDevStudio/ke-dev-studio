import { Code2, Globe, Rocket } from "lucide-react";
import FadeIn from "./ui/FadeIn";
export default function About() {
  return (
    <section
      id="sobre"
      className="bg-[#0D1117] py-28 px-6"
    >
      <div className="mx-auto max-w-7xl grid gap-16 md:grid-cols-2 items-center">

        {/* Esquerda */}

        <div>

          <span className="rounded-full bg-blue-600/10 px-4 py-2 text-blue-400 border border-blue-500/20">
            👋 Quem somos
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Criamos experiências digitais
            para empresas crescerem.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            A <strong>KE Dev Studio</strong> é especializada no
            desenvolvimento de sites modernos, rápidos e totalmente
            responsivos.

            Nosso objetivo é transformar ideias em soluções digitais
            que transmitam profissionalismo e gerem resultados.
          </p>

        </div>

        {/* Direita */}

        <div className="grid gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <Code2
              size={40}
              className="text-blue-500"
            />

            <h3 className="mt-5 text-2xl font-bold">
              Código Moderno
            </h3>

            <p className="mt-3 text-gray-400">
              Projetos desenvolvidos com tecnologias atuais,
              garantindo desempenho e escalabilidade.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <Rocket
              size={40}
              className="text-purple-500"
            />

            <h3 className="mt-5 text-2xl font-bold">
              Alta Performance
            </h3>

            <p className="mt-3 text-gray-400">
              Sites rápidos, leves e otimizados
              para oferecer a melhor experiência.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <Globe
              size={40}
              className="text-green-500"
            />

            <h3 className="mt-5 text-2xl font-bold">
              Presença Digital
            </h3>

            <p className="mt-3 text-gray-400">
              Seu negócio disponível 24 horas por dia,
              acessível em qualquer dispositivo.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}