/* eslint-disable react/no-children-prop */
import { prepareMarkdown } from "@/utils";
import ReactMarkdown from "react-markdown";

export default function ProjetosTab() {
  return (
    <div
      className="px-5 py-1"
      style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
    >
      <ReactMarkdown
        children={prepareMarkdown(`
          # Projetos

          ---

          \`2023\` - **[GustavoToyota.dev](https://gustavotoyota.dev/)** - Site pessoal
          - Site pessoal para portifólio e outras coisas futuramente.
          - Desenvolvido com Next.js (React), TailwindCSS e Typescript.

          &nbsp;
          
          \`2022\` - **[DeepNotes.app](https://deepnotes.app/)** - The next level of note-taking
          - Aplicativo de anotações visuais com profundidade ilimitada.
          - Projetado para mapeamento de ideas complexas.
          - Possui end-to-end encryption, links bidirecionais e colaboração em tempo real.
          - Utilizo para guardar minhas [anotações pessoais](https://deepnotes.app/pages/euYw8Xg1JJ1I1BOpWkuA5).
          - Desenvolvido com Quasar (Vue 3 + Typescript), tRPC, Yjs, Redis, PostgreSQL e Docker.

          &nbsp;

          \`2022\` - **[UniLogr](https://www.npmjs.com/package/unilogr)** - Universal Logger
          - UniLogr é um logger que suporta ambos Node.js e browser.
          - Inspirado no [Winston](https://www.npmjs.com/package/winston).
          - Desenvolvido com Typescript.

          &nbsp;

          \`2021\` - **[VisualSQL.net](https://visualsql.net/)** - Construtor visual de queries SQL
          - Inspirado em SAS.
          - Desenvolvido com Nuxt 2 (Vue 2 + Typescript).

          &nbsp;
        `)}
      />
    </div>
  );
}
