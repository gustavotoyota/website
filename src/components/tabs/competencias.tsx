/* eslint-disable react/no-children-prop */
import { prepareMarkdown } from "@/utils";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function CompetenciasTab() {
  return (
    <div
      className="px-5 py-1"
      style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
    >
      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          # Competências

          ---
          
          Recentemente, tenho focado nas seguintes tecnologias:

          - Typescript, Javascript
          - Vue, HTML, CSS, TailwindCSS, Sass
          - Node.js, tRPC, Redis
          - SQL, PostgreSQL
          - Git, Docker

          &nbsp;

          Porém, também possuo experiência com:

          - Nuxt, Quasar, React, Next.js, Django, Bootstrap, jQuery
          - Express, Fastify, NestJS
          - MySQL, Oracle, Redshift, Firebase, SQLite, SQL Server, Firebird, MS Access
          - C#, VBA, Java, Python, PHP, C, C++, Pascal, Lua
          - Figma, Selenium
        `)}
      />
    </div>
  );
}
