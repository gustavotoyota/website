"use client";

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
        children={prepareMarkdown(`
          # Competências

          ---
          
          Recentemente, tenho utilizado bastante as seguintes tecnologias:

          - Typescript, Javascript
          - Vue, HTML, CSS, TailwindCSS
          - Node.js, tRPC
          - SQL, PostgreSQL
          - Redis
          - Docker
          - Git

          &nbsp;

          Porém, já tive experiência com:

          - Nuxt, Quasar, React, Next.js
          - Express, Fastify, NestJS
          - MySQL, Oracle, Redshift, Firebase, SQLite, SQL Server, Firebird, MS Access
          - C#, Java, Python, PHP, C, C++, Pascal, Lua
        `)}
      />
    </div>
  );
}
