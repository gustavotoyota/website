/* eslint-disable react/no-children-prop */
import { prepareMarkdown } from "@/misc/utils";
import { Metadata } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export const metadata: Metadata = {
  title:
    "Uma simples estrutura de dados para particionamento espacial de grades [11/01/2024] - Gustavo Toyota",
  description:
    "Durante o desenvolvendo do meu jogo de campo minado (que ainda está em desenvolvimento), tive que buscar uma estrutura de dados que ajudasse a reduzir o desperdício de memória no armazenamento dos dados do mapa. Então bolei uma estrutura bem simples, que talvez nem precisasse de uma página na internet.",
};

export default function ATeiaInvisivelPorTrasDosCodigos() {
  return (
    <div className="blog-post p-5 max-w-3xl" style={{ fontSize: "1rem" }}>
      <h1 style={{ marginTop: "0.67rem", marginBottom: "0" }}>
        Uma simples estrutura de dados para particionamento espacial de grades
      </h1>
      <div className="h-4"></div>
      <div className="text-xs text-white/80">
        Gustavo Toyota - 11 de janeiro de 2024
      </div>
      <div className="h-9"></div>

      <div style={{ lineHeight: "1.5rem" }}>
        <ReactMarkdown
          linkTarget={"_blank"}
          children={prepareMarkdown(`
            Durante o desenvolvendo do meu jogo de campo minado (que ainda está em desenvolvimento), tive que buscar uma estrutura de dados que ajudasse a reduzir o desperdício de memória no armazenamento dos dados do mapa. Então bolei uma estrutura bem simples, que talvez nem precisasse de uma página na internet.

            Mas como não encontrei nenhuma menção de estruturas similares a essa na internet (apesar de muito provavelmente existir em algum lugar), resolvi então deixar registrado aqui para caso alguém necessite de algo parecido.

            Dependendo das necessidades de um jogo 2D, as células de mapas são simplesmente armazenadas em uma matriz bidimensional. Mas como no meu jogo o mapa tem potencial de crescer de maneira infinita, tive que buscar algo mais elaborado.
          
            ### Interface

            Eu chamei essa estrutura de Segment, essa é a sua interface em Typescript:

            \`\`\`
            export interface Segment<TCellData> {
              from: number;
              items: TCellData[];
            }
            \`\`\`

            Um array de segments é utilizado para armazenar os dados de uma linha ou coluna da grade. Todas as operações são executadas nesse array.

            \`\`\`
            export type Segments<TCellData> = Segment<TCellData>[];
            \`\`\`

            ### Operações

            Existem 4 operações:

            * \`putItemsInSegments\`: insere um array de itens na posição especificada.
            * \`getSliceFromSegments\`: obtem os itens existentes dentro um intervalo nos segmentos
            * \`getItemsFromSegments\`: obtem os itens dentro um intervalo nos seguimentos, preenchendo os espaços vazios com \`undefined\`
            * \`removeItemsFromSegments\`: remove N items partindo da posição especifidada.

            Uma grade é formada por segmentos de segmentos:

            \`\`\`
            export type Grid<TCellData> = Segments<Segments<TCellData>>;
            \`\`\`


            ### Códigos

            Aqui estão os arquivos dessa estrutura:
            
            * Código: [segments.ts](/blog/uma-simples-estrutura-de-dados-para-particionamento-espacial-de-grades/segments.ts)
            * Testes: [segments.spec.ts](/blog/uma-simples-estrutura-de-dados-para-particionamento-espacial-de-grades/segments.spec.ts)
          `)}
        />

        <div className="h-10"></div>

        <div>Se você gostou deste artigo, compartilhe com seus colegas!</div>
        <div>
          Em caso de dúvidas ou sugestões, entre em contato comigo pelo e-mail
          abaixo.
        </div>

        <div className="h-10"></div>

        <div className="p-3 border border-white/30 bg-black/40 flex">
          <Image
            src="/photo.png"
            alt="Foto de Gustavo Toyota"
            className="rounded-full "
            width={128}
            height={128}
          />

          <div className="flex-0 w-4"></div>

          <div className="flex-1 flex flex-col">
            <div className="text-white/80">
              Sobre <b>Gustavo Toyota</b>
            </div>

            <div className="h-2"></div>

            <div className="text-sm text-white/90 flex-1">
              Desenvolvedor de software interessado em extrair o máximo de poder
              da simplicidade, transformando códigos complexos em soluções
              elegantes e eficientes.
            </div>

            <div className="h-2"></div>

            <div>
              <a href="mailto:mail@gustavotoyota.dev" className="text-sm">
                mail@gustavotoyota.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
