import React from "react";

const AdvantagesSection = () => {
  return (
    <section className="bg-white w-full p-10 rounded-lg ">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-7xl uppercase font-poppinsBold text-center font-bold text-gray-800 mb-6">
          Vantagens do Sistema <br /> RAFA-FAn
        </h1>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            Sistema compacto que reúne dois processos de tratamento em série em
            um único módulo.
          </li>
          <li>
            Reator pré-fabricado, proporcionando maior rapidez de instalação.
          </li>
          <li>Baixo custo de implantação e operação.</li>
          <li>Grande facilidade de modulação e expansão.</li>
          <li>Simplicidade de operação e manutenção.</li>
          <li>Não utiliza produtos químicos.</li>
          <li>
            Baixo impacto ambiental, sem liberação de maus odores ou produção de
            ruído.
          </li>
          <li>Facilidade de localização no meio urbano.</li>
          <li>Área mínima necessária para instalação.</li>
          <li>Alta confiabilidade, adaptando-se bem ao nosso clima.</li>
          <li>Alta eficiência na redução da carga orgânica nos esgotos.</li>
          <li>Baixa produção de lodo digerido.</li>
          <li>
            Reaproveitamento dos subprodutos gerados, como lodo estabilizado e
            biogás.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AdvantagesSection;
