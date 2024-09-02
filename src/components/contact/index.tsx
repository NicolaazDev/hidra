"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  return (
    <section className="contact-section text-background py-10 relative overflow-hidden">
      <div className="max-w-screen-2xl z-50 mx-auto center flex flex-col items-center space-y-12">
        <p className="text-lg text-center max-w-3xl z-50 sm:max-w-[90%]">
          Tem alguma dúvida, sugestão ou precisa de ajuda? Estamos disponíveis
          para ajudar.
        </p>

        <div className="text-center z-50">
          <a
            href="mailto:hidrica@hidrica.com.br"
            className="text-xl font-medium text-gray-800 hover:text-gray-800 transition-colors duration-300"
          >
            hidrica@hidrica.com.br
          </a>
        </div>
        <p className="text-lg text-center max-w-3xl z-50 sm:max-w-[90%]">
          Av: Professor Alfredo Balena, 189 - Sala 1408, Santa Efigênia - BH -
          MG Cep: 30130-100 (31) 3222-0800
        </p>
      </div>
    </section>
  );
};

export default Contact;
