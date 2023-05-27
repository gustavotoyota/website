/* eslint-disable react/no-children-prop */
import { prepareMarkdown } from "@/utils";
import ReactMarkdown from "react-markdown";
import { Gallery } from "../gallery";

export default function ProjetosTab() {
  return (
    <div
      className="px-5 py-1"
      style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
    >
      <ReactMarkdown
        children={prepareMarkdown(`
          # Projetos pessoais

          ---

          \`2023\` - **[GustavoToyota.dev](https://gustavotoyota.dev/)** - Site pessoal
          - Site pessoal para portifólio, entre outras coisas.
          - Desenvolvido com Next.js (React), TailwindCSS e Typescript.
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
        children={prepareMarkdown(`
          \`2022\` - **[DeepNotes.app](https://deepnotes.app/)** - The next level of note-taking
          - Aplicativo de anotações visuais com profundidade ilimitada.
          - Projetado para mapeamento de ideas complexas.
          - Possui end-to-end encryption, links bidirecionais e colaboração em tempo real.
          - Utilizo para guardar minhas [anotações pessoais](https://deepnotes.app/pages/euYw8Xg1JJ1I1BOpWkuA5).
          - Desenvolvido com Quasar (Vue 3 + Typescript), tRPC, Yjs, Redis, PostgreSQL e Docker.
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
            alt: "Kanban",
          },
          {
            src: "/images/deepnotes/neural-networks.png",
            alt: "Estudo de redes neurais",
          },
          {
            src: "/images/deepnotes/typescript.png",
            alt: "Estudo de Typescript",
          },
        ]}
      />

      <ReactMarkdown
        children={prepareMarkdown(`
          \`2022\` - **[UniLogr](https://www.npmjs.com/package/unilogr)** - Universal Logger
          - UniLogr é um logger que suporta ambos Node.js e browser.
          - Inspirado no [Winston](https://www.npmjs.com/package/winston).
          - Desenvolvido com Typescript.

          &nbsp;

          \`2021\` - **[VisualSQL.net](https://visualsql.net/)** - Construtor visual de queries SQL
          - Inspirado em SAS.
          - Desenvolvido com Nuxt 2 (Vue 2 + Typescript).
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
        children={prepareMarkdown(`
          &nbsp;
        `)}
      />
    </div>
  );
}
