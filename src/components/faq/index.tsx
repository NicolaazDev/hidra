"use client";

import { useState } from "react";

import { CirclePlusIcon } from "lucide-react";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "Como o sistema de tratamento de esgoto da Hídrica Engenharia funciona?",
      answer:
        "O sistema utiliza um reator denominado RAFA (Reator Anaeróbio de Fluxo Ascendente) e um Filtro Anaeróbio (FAn) para tratar esgotos sanitários domésticos e efluentes orgânicos industriais. O processo é totalmente biológico e otimiza a transformação da matéria orgânica em gases, biomassa e água.",
    },
    {
      question:
        "Quais são as vantagens do sistema combinado desenvolvido pela Hídrica Engenharia e FORTMETAL?",
      answer:
        "Entre as vantagens estão a rapidez na execução, menor custo de implantação, grande durabilidade e eficiência na redução da carga orgânica, atendendo às exigências da legislação ambiental vigente.",
    },
    {
      question:
        "Por que o sistema da Hídrica Engenharia é importante para a saúde pública?",
      answer:
        "Além de ser eficiente no tratamento de esgoto, o sistema ajuda na prevenção de doenças, principalmente entre a população infantil, contribuindo significativamente para a proteção da saúde pública.",
    },
    {
      question:
        "O sistema de tratamento de esgoto é adequado para diferentes tipos de efluentes?",
      answer:
        "Sim, o sistema é projetado para tratar tanto esgotos sanitários domésticos quanto efluentes orgânicos industriais, garantindo alta eficiência na remoção de matéria orgânica.",
    },
    {
      question:
        "O sistema da Hídrica Engenharia é adequado para o clima brasileiro?",
      answer:
        "Sim, o sistema foi desenvolvido em parceria com a FORTMETAL para se adaptar perfeitamente ao clima brasileiro, garantindo eficiência e durabilidade em diversas condições ambientais.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-7xl uppercase font-poppinsBold text-center font-bold text-gray-800 mb-6 sm:text-3xl">
          Perguntas <br /> Frequentes
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-[10px]">
              <button
                className="w-full relative center !justify-start p-4 text-left bg-gray-50 rounded-[10px] border-solid border border-transparent !border-b-primary focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <CirclePlusIcon
                  className="absolute right-4 opacity-90"
                  strokeWidth={1}
                />
              </button>
              <div
                className={`p-4 ${activeIndex === index ? "block" : "hidden"}`}
              >
                <p className="text-gray-700 font-[600]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
