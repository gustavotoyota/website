/* eslint-disable react/no-children-prop */
import { prepareMarkdown } from "@/utils";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function ExperienciaTab() {
  return (
    <div
      className="px-5 py-1"
      style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
    >
      <ReactMarkdown
        children={prepareMarkdown(`
          # Experiência

          ---
          
          \`2021-2023\` - **Pausa para desenvolvimento pessoal**

          &nbsp;

          \`2020\` - **Analista de Operações Comercial** - [Cielo](https://www.cielo.com.br/)

          \`2019\` - **Estagiário** - [Cielo](https://www.cielo.com.br/)

          - Desenvolvimento de ferramentas e sistemas internos para apoio aos gestores de taxas de clientes da Cielo.
          - Análise de dados e criação de relatórios.
          - Utilização de C#, VBA, SQL, HTML, CSS e Javascript.

          &nbsp;

          \`2015-2019\` - **Bacharel em Ciência da Computação** - [UFSCar](https://www.ufscar.br/)

          - Campus Sorocaba.
          - Principais atividades:
            - Monitor de Algoritmos e Programação.
            - Participações em maratonas de programação.]
          - Utilização de C, C++, Python e Java.
          
          &nbsp;

          \`~2008\` - **Primeiros contatos com programação**

          - Desenvolvimento de bots de Tibia, PangYa e Runescape.
          - Criação e programação de OTServers.
          - Experimentação com Delphi, Pascal, HTML, CSS, Javascript, PHP, Java e Lua.

          &nbsp;
        `)}
      />
    </div>
  );
}
