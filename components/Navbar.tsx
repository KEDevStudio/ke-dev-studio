 "use client";

 import { useEffect, useState } from "react";
 import { Menu, X } from "lucide-react";

 export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  const mensagem = `Olá, KE Dev Studio!

 Meu nome é:

 Gostaria de solicitar um orçamento para o desenvolvimento de um site.

 Tipo de projeto:

 Empresa/Negócio:

 Prazo desejado:

 Observações:
 `;

  const whatsappLink = `https://wa.me/5598970266587?text=${encodeURIComponent(
    mensagem
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scroll
          ? "border-b border-white/10 bg-[#09090B]/90 backdrop-blur-xl shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <a
          href="#"
          className="text-3xl font-extrabold tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            KE
          </span>{" "}
          <span className="text-white">Dev</span>{" "}
          <span className="text-gray-300">Studio</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-300 transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Solicitar orçamento
          </a>

        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#09090B]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-6 px-6 py-6">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg text-gray-300 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-center font-semibold text-white"
            >
              Solicitar orçamento
            </a>

          </div>
        </div>
      )}
    </header>
  );
 }