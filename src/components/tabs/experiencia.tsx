/* eslint-disable react/no-children-prop */
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function ExperienciaTab() {
  return (
    <div className="p-5">
      <ReactMarkdown
        children={`
          # Experiência

          ## 2020 - Analista de Operações Comercial - Cielo
          ## 2019 - Estagiário - Cielo

          Desenvolvimento de ferramentas e sistemas internos para apoio aos gestores de taxas de clientes da Cielo.

          ## 2015-2019 - Bacharel em Ciência da Computação - UFSCar
        `
          .split("\n")
          .map((line) => line.trim())
          .join("\n")}
      />

      <h1>Experiência</h1>

      <p>2020 - Analista de Operações Comercial - Cielo</p>
    </div>
  );
}
