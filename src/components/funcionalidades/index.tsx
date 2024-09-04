import React from "react";

const Section = () => {
  return (
    <section id="features" className="bg-gray-100 p-10 w-full rounded-lg">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-7xl uppercase font-poppinsBold text-center font-bold text-gray-800 mb-6 sm:text-3xl">
          Especificações <br /> técnicas
        </h1>
        <h1 className="text-xl font-bold text-gray-800 mb-6">
          Sistema Combinado de Tratamento de Esgoto
        </h1>
        <p className="text-gray-700 mb-4 font-[600]">
          Desenvolvido pela Hídrica Engenharia em parceria com a Fortmetal, este
          sistema adaptável ao nosso clima é ideal para o tratamento de esgotos
          sanitários domésticos e efluentes orgânicos industriais.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Processo Biológico Avançado
        </h2>
        <p className="text-gray-700 mb-4 font-[600]">
          O processo é totalmente biológico e ocorre dentro do Reator Anaeróbio
          de Fluxo Ascendente (RAFA). Projetado para otimizar a transformação da
          matéria orgânica em gases, biomassa e água, o reator é construído em
          aço, revestido com alcatrão de hulha, garantindo estanqueidade e
          durabilidade. Este método oferece rapidez na execução e menor custo de
          implantação.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Filtro Anaeróbio Acoplado
        </h2>
        <p className="text-gray-700 mb-4 font-[600]">
          Associado ao RAFA, o Filtro Anaeróbio (FAn) atua no pós-tratamento,
          removendo a matéria orgânica remanescente e aumentando a clarificação
          do efluente. Este sistema reduz a carga orgânica em termos de DBO em
          mais de 60%, atendendo às exigências da legislação ambiental.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Proteção à Saúde Pública
        </h2>
        <p className="text-gray-700 mb-4 font-[600]">
          Além de contribuir para o meio ambiente, este sistema previne doenças,
          especialmente na população infantil, sendo essencial para a proteção
          da saúde pública.
        </p>
        <p className="text-gray-700 font-semibold">
          Garantia: 120 meses contra defeitos de fabricação e 24 meses contra
          defeitos de pintura.
        </p>
      </div>
    </section>
  );
};

export default Section;
