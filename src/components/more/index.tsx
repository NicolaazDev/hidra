import React from "react";

const Card = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="bg-white overflow-hidden p-6 rounded-lg border border-solid transition-all border-blue-300 mb-4 relative hover:border-blue-900 card">
      <h2 className="text-lg font-semibold mt-6 text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-700 font-[600]">{description}</p>
    </div>
  );
};

const ProcessFlowSection = () => {
  const items = [
    {
      title: "01 - Entrada (esgoto bruto)",
      description:
        "O esgoto afluente entra pela parte superior do reator e é distribuído uniformemente no fundo do mesmo.",
    },
    {
      title: "02 - Queimador/dissipador de gás",
      description:
        "Os gases produzidos, como o metano, são direcionados para a parte central superior e coletados para o queimador ou dispersos na atmosfera.",
    },
    {
      title: "03 - Inspeções superiores",
      description:
        "Utilizadas para a retirada de sobrenadante (escuma) que se forma na superfície.",
    },
    {
      title: "04 - Ventilação",
      description:
        "Propicia a saída e entrada de ar, assegurando o funcionamento hidráulico.",
    },
    {
      title: "05 - Extravasores",
      description:
        "Permitem que o esgoto tratado no RAFA seja direcionado para o compartimento anterior ao Filtro Anaeróbio.",
    },
    {
      title: "06 - Calha coletora",
      description:
        "Coleta o esgoto tratado no Filtro Anaeróbio e direciona-o para a unidade de pós-tratamento ou destino final.",
    },
    {
      title: "07 - Saída (esgoto tratado)",
      description:
        "O esgoto tratado é direcionado para o destino final ou unidade de pós-tratamento.",
    },
    {
      title: "08 - Inspeção lateral",
      description: "Permite o acesso para manutenção interna do reator.",
    },
    {
      title: "09 - Descarga de lodo/Esgotamento",
      description:
        "O lodo estabilizado é descartado para leitos de secagem ou retirado por caminhão limpa-fossa.",
    },
    {
      title: "10 - Amostradores",
      description:
        "Permitem a coleta de material do interior do reator para análises laboratoriais.",
    },
    {
      title: "11 - Descarga do filtro",
      description:
        "Caso necessário, o filtro pode ser esgotado ou retro-lavado.",
    },
  ];

  return (
    <section className=" p-10 rounded-lg center-col">
      <h1 className="text-7xl uppercase font-poppinsBold text-center font-bold text-gray-800 mb-6 sm:text-3xl">
        Princípio de Funcionamento
      </h1>
      <img src="https://www.hidrica.com.br/img/sistema_rafa_fan.jpg" />

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-1 gap-4">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            index={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ProcessFlowSection;
