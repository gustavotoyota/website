/* eslint-disable react/no-children-prop */
import { prepareMarkdown } from "@/misc/utils";
import ReactMarkdown from "react-markdown";
import { Gallery } from "../../../components/gallery";
import { Metadata } from "next";
import MineDelverScreenshot1 from "@/../public/images/projects/minedelver/screenshot-1.png";
import MineDelverScreenshot2 from "@/../public/images/projects/minedelver/screenshot-2.png";
import MineDelverScreenshot3 from "@/../public/images/projects/minedelver/screenshot-3.png";
import ChessAnalyzerScreenshot from "@/../public/images/projects/chessanalyzer/chessanalyzer.png";
import WebsiteExperienciaScreenshot from "@/../public/images/projects/website/experiencia.png";
import DeepNotesDiagrama from "@/../public/images/projects/deepnotes/whitepaper.png";
import DeepNotesGaleria from "@/../public/images/projects/deepnotes/link-gallery.png";
import DeepNotesKanban from "@/../public/images/projects/deepnotes/kanban.png";
import DeepNotesKanban2 from "@/../public/images/projects/deepnotes/kanban-2.png";
import DeepNotesHistoria from "@/../public/images/projects/deepnotes/historia.png";
import DeepNotesRedesNeurais from "@/../public/images/projects/deepnotes/neural-networks.png";
import DeepNotesTypescript from "@/../public/images/projects/deepnotes/typescript.png";
import DeepNotesArvoreGenealogica from "@/../public/images/projects/deepnotes/familia-real.png";
import DeepNotesDiagrama2 from "@/../public/images/projects/deepnotes/key-hierarchy.png";
import DeepNotesDiagrama3 from "@/../public/images/projects/deepnotes/authentication.png";
import VisualSQLQuery1 from "@/../public/images/projects/visualsql/exemplo-1.png";
import VisualSQLQuery2 from "@/../public/images/projects/visualsql/exemplo-2.png";
import VisualSQLQuery3 from "@/../public/images/projects/visualsql/exemplo-3.png";

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
        `)}
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
            src: DeepNotesDiagrama,
            alt: "Exemplo de diagrama",
          },
          {
            src: DeepNotesGaleria,
            alt: "Galeria de links",
          },
          {
            src: DeepNotesKanban,
            alt: "Exemplo de kanban",
          },
          {
            src: DeepNotesKanban2,
            alt: "Exemplo de kanban",
          },
          {
            src: DeepNotesHistoria,
            alt: "Estudo de história",
          },
          {
            src: DeepNotesRedesNeurais,
            alt: "Estudo de redes neurais",
          },
          {
            src: DeepNotesTypescript,
            alt: "Estudo de Typescript",
          },
          {
            src: DeepNotesArvoreGenealogica,
            alt: "Árvore genealógica",
          },
          {
            src: DeepNotesDiagrama2,
            alt: "Exemplo de diagrama",
          },
          {
            src: DeepNotesDiagrama3,
            alt: "Exemplo de diagrama",
          },
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
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
            src: VisualSQLQuery1,
            alt: "Exemplo de query",
          },
          {
            src: VisualSQLQuery2,
            alt: "Exemplo de query",
          },
          {
            src: VisualSQLQuery3,
            alt: "Exemplo de query",
          },
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          &nbsp;
    
          \`2023\` - **[MineDelver.com](https://minedelver.com/)** - Jogo de campo minado infinito com elementos de RPG
          - Desenvolvido com Quasar (Vue 3 + Typescript).
          - Repositório GitHub: [https://github.com/gustavotoyota/MineDelver](https://github.com/gustavotoyota/MineDelver)
        `)}
      />

      <Gallery
        images={[
          {
            src: MineDelverScreenshot1,
            alt: "Screenshot 1",
          },
          {
            src: MineDelverScreenshot2,
            alt: "Screenshot 2",
          },
          {
            src: MineDelverScreenshot3,
            alt: "Screenshot 3",
          },
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          &nbsp;
    
          \`2023\` - **[ChessAnalyzer](https://chessanalyzer.gustavotoyota.dev/)** - Ferramenta de análise de posições de xadrez
          - Desenvolvido com Next.js (React + Typescript), TailwindCSS e Stockfish 16.
          - Repositório GitHub: [https://github.com/gustavotoyota/ChessAnalyzer](https://github.com/gustavotoyota/ChessAnalyzer)
        `)}
      />

      <Gallery
        images={[
          {
            src: ChessAnalyzerScreenshot,
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
            src: WebsiteExperienciaScreenshot,
            alt: "Screenshot",
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
