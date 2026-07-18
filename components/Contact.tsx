"use client";

import { useState, FormEvent } from "react";
import {
  Mail,
  Globe,
  Clock3,
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import FadeIn from "./ui/FadeIn";

const contacts = [
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    text: "(98) 97026-6587",
    link: "https://wa.me/5598970266587",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "hover:border-green-500/50",
    shadow: "hover:shadow-green-500/10",
  },
  {
    icon: Mail,
    title: "Email",
    text: "kedevstudio@gmail.com",
    link: "mailto:kedevstudio@gmail.com",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "hover:border-blue-500/50",
    shadow: "hover:shadow-blue-500/10",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    text: "@kedevstudio",
    link: "https://instagram.com/kedevstudio",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "hover:border-pink-500/50",
    shadow: "hover:shadow-pink-500/10",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    text: "KE Dev Studio",
    link: "https://linkedin.com/",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "hover:border-cyan-500/50",
    shadow: "hover:shadow-cyan-500/10",
  },
  {
    icon: Globe,
    title: "Site Oficial",
    text: "kedevstudio.vercel.app",
    link: "https://kedevstudio.vercel.app",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "hover:border-purple-500/50",
    shadow: "hover:shadow-purple-500/10",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Olá, KE Dev Studio!

Meu nome é: ${name}

WhatsApp: ${phone}

Tipo de projeto:
${projectType}

Mensagem:
${message}`;

    const whatsappUrl = `https://wa.me/5598970266587?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contato" className="bg-[#0D1117] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-medium text-green-400">
              📞 Contato
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Vamos tirar seu projeto do papel?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Entre em contato e solicite um orçamento sem compromisso.
              Desenvolvemos sites modernos, rápidos, seguros e profissionais
              para empresas, comércios e prestadores de serviços.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
            {contacts.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 ${item.border} ${item.shadow} hover:bg-white/[0.08] hover:shadow-xl`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg} transition duration-300 group-hover:scale-110`}
                  >
                    <item.icon size={34} className={item.color} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 break-words text-gray-400">{item.text}</p>
                </a>
              </FadeIn>
            ))}

            <FadeIn delay={0.5}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">
                  <Clock3 size={34} className="text-yellow-400" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  Atendimento
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  Segunda a Sexta
                  <br />
                  08:00 às 18:00
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl hover:border-green-500/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6">
                Solicitar Orçamento
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition duration-200"
                    placeholder="(99) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    Tipo de projeto
                  </label>
                  <select
                    id="projectType"
                    required
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#161B22] px-4 py-3 text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition duration-200 appearance-none"
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Site Institucional">Site Institucional</option>
                    <option value="E-commerce (Loja Virtual)">E-commerce (Loja Virtual)</option>
                    <option value="Sistema Web">Sistema Web</option>
                    <option value="Portfólio">Portfólio</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition duration-200 resize-none"
                    placeholder="Descreva brevemente o seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-green-500 py-4 text-sm font-semibold text-black hover:bg-green-400 transition-colors duration-300 shadow-lg shadow-green-500/20"
                >
                  <FaWhatsapp size={18} />
                  Solicitar orçamento
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}