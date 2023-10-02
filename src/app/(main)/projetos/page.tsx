/* eslint-disable react/no-children-prop */
import { prepareMarkdown } from "@/misc/utils";
import ReactMarkdown from "react-markdown";
import { Gallery } from "../../../components/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos pessoais - Gustavo Toyota",
};

export default function Projetos() {
  return (
    <div
      className="px-5 py-1"
      style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
    >
      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          # Projetos pessoais

          ---

          \`2023\` - **[ChessAnalyzer](https://chessanalyzer.gustavotoyota.dev/)** - Ferramenta de análise de posições de xadrez
          - Desenvolvido com Next.js (React + Typescript), TailwindCSS e Stockfish 16.
          - Repositório GitHub: [https://github.com/gustavotoyota/ChessAnalyzer](https://github.com/gustavotoyota/ChessAnalyzer)
        `)}
      />

      <Gallery
        images={[
          {
            src: "/images/chessanalyzer/chessanalyzer.png",
            alt: "Screenshot",
          },
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          &nbsp;

          \`2023\` - **[GustavoToyota.dev](https://gustavotoyota.dev/)** - Site pessoal
          - Site pessoal para portifólio, entre outros.
          - Desenvolvido com Next.js (React + Typescript) e TailwindCSS.
          - Repositório GitHub: [https://github.com/gustavotoyota/website](https://github.com/gustavotoyota/website)
        `)}
      />

      <Gallery
        images={[
          {
            src: "/images/website/experiencia.png",
            alt: "Screenshot",
          },
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          &nbsp;

          \`2022\` - **[DeepNotes.app](https://deepnotes.app/)** - The next level of note-taking
          - Aplicativo de anotações visuais com profundidade ilimitada.
          - Projetado para mapeamento de ideas complexas.
          - Possui end-to-end encryption, links bidirecionais e colaboração em tempo real.
          - Utilizo para guardar minhas [anotações pessoais](https://deepnotes.app/pages/euYw8Xg1JJ1I1BOpWkuA5).
          - Desenvolvido com Quasar (Vue 3 + Typescript), tRPC, Yjs, Redis, PostgreSQL e Docker.
          - Repositório GitHub: [https://github.com/DeepNotesApp/DeepNotes](https://github.com/DeepNotesApp/DeepNotes)
        `)}
      />

      <Gallery
        images={[
          {
            src: "/images/deepnotes/whitepaper.png",
            alt: "Exemplo de diagrama",
          },
          {
            src: "/images/deepnotes/link-gallery.png",
            alt: "Galeria de links",
          },
          {
            src: "/images/deepnotes/kanban.png",
            alt: "Exemplo de kanban",
          },
          {
            src: "/images/deepnotes/kanban-2.png",
            alt: "Exemplo de kanban",
          },
          {
            src: "/images/deepnotes/historia.png",
            alt: "Estudo de história",
          },
          {
            src: "/images/deepnotes/neural-networks.png",
            alt: "Estudo de redes neurais",
          },
          {
            src: "/images/deepnotes/typescript.png",
            alt: "Estudo de Typescript",
          },
          {
            src: "/images/deepnotes/familia-real.png",
            alt: "Árvore genealógica",
          },
          {
            src: "/images/deepnotes/key-hierarchy.png",
            alt: "Exemplo de diagrama",
          },
          {
            src: "/images/deepnotes/authentication.png",
            alt: "Exemplo de diagrama",
          },
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          &nbsp;

          \`2022\` - **[UniLogr](https://www.npmjs.com/package/unilogr)** - Universal Logger
          - UniLogr é um logger que suporta ambos Node.js e browser.
          - Inspirado no [Winston](https://www.npmjs.com/package/winston).
          - Desenvolvido com Typescript.
          - Repositório GitHub: [https://github.com/gustavotoyota/unilogr](https://github.com/gustavotoyota/unilogr)

          &nbsp;

          \`2021\` - **[VisualSQL.net](https://visualsql.net/)** - Construtor visual de queries SQL
          - Inspirado em SAS.
          - Desenvolvido com Nuxt 2 (Vue 2 + Typescript).
          - Repositório GitHub: [https://github.com/gustavotoyota/VisualSQL](https://github.com/gustavotoyota/VisualSQL)
        `)}
      />

      <Gallery
        images={[
          {
            src: "/images/visualsql/exemplo-1.png",
            alt: "Exemplo de query",
          },
          {
            src: "/images/visualsql/exemplo-2.png",
            alt: "Exemplo de query",
          },
          {
            src: "/images/visualsql/exemplo-3.png",
            alt: "Exemplo de query",
          },
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          &nbsp;
        `)}
      />
    </div>
  );
}
