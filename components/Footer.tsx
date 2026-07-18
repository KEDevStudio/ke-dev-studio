"use client";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaInstagram,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";


export default function Footer() {

  const year = new Date().getFullYear();


  const links = [
    {
      name: "Início",
      href: "#",
    },
    {
      name: "Sobre",
      href: "#sobre",
    },
    {
      name: "Serviços",
      href: "#servicos",
    },
    {
      name: "Projetos",
      href: "#projetos",
    },
    {
      name: "Contato",
      href: "#contato",
    },
  ];


  const services = [
    "Desenvolvimento Web",
    "Sistemas Personalizados",
    "Aplicativos Mobile",
    "Landing Pages",
    "UI/UX Design",
    "Consultoria Tech",
  ];



  return (

    <footer className="relative overflow-hidden bg-[#09090B] text-white">


      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div
          className="
          absolute
          left-1/4
          top-0
          h-72
          w-72
          rounded-full
          bg-blue-600/20
          blur-[120px]
          "
        />

        <div
          className="
          absolute
          right-1/4
          bottom-0
          h-72
          w-72
          rounded-full
          bg-purple-600/20
          blur-[120px]
          "
        />

      </div>





      <div className="mx-auto max-w-7xl px-6 py-20">


        <div
          className="
          grid
          gap-10
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-8
          backdrop-blur-xl
          lg:grid-cols-4
          "
        >



          {/* Logo */}

          <div>


            <h2
              className="
              mb-5
              text-3xl
              font-bold
              "
            >

              <span
                className="
                bg-gradient-to-r
                from-blue-500
                to-purple-500
                bg-clip-text
                text-transparent
                "
              >
                KE
              </span>{" "}

              Dev Studio

            </h2>



            <p
              className="
              text-sm
              leading-relaxed
              text-zinc-400
              "
            >

              Desenvolvemos soluções digitais modernas,
              sites, sistemas e experiências tecnológicas
              para empresas que buscam inovação.

            </p>




            <a
              href="#contato"
              className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              px-5
              py-3
              text-sm
              font-semibold
              transition-all
              hover:scale-105
              hover:shadow-xl
              hover:shadow-purple-500/30
              "
            >

              Solicitar Orçamento

              <ArrowRight size={18}/>

            </a>


          </div>







          {/* Links rápidos */}

          <div>


            <h3
              className="
              mb-5
              text-lg
              font-semibold
              "
            >
              Links rápidos
            </h3>



            <ul className="space-y-3">

              {links.map((link)=>(

                <li key={link.name}>

                  <a
                    href={link.href}
                    className="
                    inline-block
                    text-zinc-400
                    transition
                    hover:translate-x-1
                    hover:text-white
                    "
                  >

                    {link.name}

                  </a>

                </li>

              ))}


            </ul>


          </div>








          {/* Serviços */}

          <div>


            <h3
              className="
              mb-5
              text-lg
              font-semibold
              "
            >
              Serviços
            </h3>



            <ul className="space-y-3">

              {services.map((service)=>(

                <li
                  key={service}
                  className="
                  text-zinc-400
                  transition
                  hover:text-blue-400
                  "
                >

                  {service}

                </li>

              ))}


            </ul>


          </div>








          {/* Contato */}

          <div>


            <h3
              className="
              mb-5
              text-lg
              font-semibold
              "
            >
              Contato
            </h3>




            <div
              className="
              space-y-4
              text-sm
              text-zinc-400
              "
            >



              <a
                href="https://wa.me/5500000000000"
                className="
                flex
                items-center
                gap-3
                transition
                hover:text-white
                "
              >

                <FaWhatsapp size={19}/>

                WhatsApp

              </a>





              <a
                href="https://instagram.com/kedevstudio"
                className="
                flex
                items-center
                gap-3
                transition
                hover:text-white
                "
              >

                <FaInstagram size={19}/>

                Instagram

              </a>






              <a
                href="https://kedevstudio.com"
                className="
                flex
                items-center
                gap-3
                transition
                hover:text-white
                "
              >

                <FaGlobe size={19}/>

                kedevstudio.com

              </a>






              <div className="flex items-center gap-3">

                <Mail size={18}/>

                contato@kedevstudio.com

              </div>






              <div className="flex items-center gap-3">

                <Phone size={18}/>

                +55 (98) 970266587

              </div>






              <div className="flex items-center gap-3">

                <MapPin size={18}/>

                Brasil

              </div>




            </div>


          </div>



        </div>







        {/* Copyright */}

        <div
          className="
          mt-10
          flex
          flex-col
          items-center
          justify-between
          gap-4
          border-t
          border-white/10
          pt-8
          text-sm
          text-zinc-500
          md:flex-row
          "
        >


          <p>
            © {year} KE Dev Studio. Todos os direitos reservados.
          </p>



          <p
            className="
            bg-gradient-to-r
            from-blue-500
            to-purple-500
            bg-clip-text
            font-medium
            text-transparent
            "
          >

            Tecnologia • Inovação • Futuro

          </p>



        </div>



      </div>



    </footer>

  );
}