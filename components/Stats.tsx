"use client";

import {
  Briefcase,
  Users,
  Rocket,
  Award,
} from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    icon: Briefcase,
    value: 10,
    suffix: "+",
    label: "Projetos Concluídos",
  },
  {
    icon: Users,
    value: 100,
    suffix: "%",
    label: "Clientes Satisfeitos",
  },
  {
    icon: Rocket,
    value: 24,
    suffix: "h",
    label: "Suporte",
  },
  {
    icon: Award,
    value: 100,
    suffix: "%",
    label: "Responsivo",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#0D1117] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="group rounded-3xl border border-white/10 bg-white/5 p-10 text-center transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:bg-white/10"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">

                <item.icon
                  className="text-blue-500"
                  size={42}
                />

              </div>

              <h2 className="mt-6 text-5xl font-extrabold text-white">
                <CountUp
                  end={item.value}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {item.suffix}
              </h2>

              <p className="mt-4 text-lg text-gray-400">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}