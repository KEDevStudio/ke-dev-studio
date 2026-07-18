import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Briefing",
    text: "Entendemos seu negócio, seus objetivos e o público-alvo.",
  },
  {
    icon: PencilRuler,
    title: "Design",
    text: "Criamos um layout moderno, responsivo e focado na conversão.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    text: "Construímos seu projeto utilizando tecnologias atuais e alta performance.",
  },
  {
    icon: Rocket,
    title: "Entrega",
    text: "Publicamos seu site e oferecemos suporte após a entrega.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#09090B] py-28 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-400">
            🚀 Processo
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Como funciona nosso trabalho
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-400">
            Um processo simples, transparente e focado em entregar
            resultados para o seu negócio.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">

                  <Icon
                    size={34}
                    className="text-blue-500"
                  />

                </div>

                <span className="text-sm text-blue-400">
                  Etapa {index + 1}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {step.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}