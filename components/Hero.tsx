"use client";

import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#09090B]">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-400">
              🚀 Desenvolvimento Web
            </span>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white lg:text-7xl">
              Transformamos
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {" "}ideias{" "}
              </span>

              em experiências digitais.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-400">
              Desenvolvemos sites modernos,
              rápidos e responsivos utilizando
              Next.js, React e tecnologias atuais.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="#contato"
                className="flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
              >
                Solicitar orçamento
                <ArrowRight size={20}/>
              </Link>

              <Link
                href="#projetos"
                className="rounded-2xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:border-blue-500"
              >
                Ver Projetos
              </Link>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity:0, x:70 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:.8 }}
            className="flex justify-center"
          >

            <div className="flex h-[430px] w-[430px] items-center justify-center rounded-full border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl">

              <Code2
                size={180}
                className="text-blue-500"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}