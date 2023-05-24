/* eslint-disable react/no-children-prop */
import { prepareMarkdown } from "@/utils";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function WelcomeTab() {
  return (
    <div
      className="px-5 py-1"
      style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
    >
      <ReactMarkdown
        children={prepareMarkdown(`
          # Bem-vindo(a)!

          Bem-vindo(a) ao meu site pessoal! \\
          Aqui você pode encontrar informações sobre mim, meus projetos e minhas experiências.

          Navegue utilizando as abas acima ou o menu lateral esquerdo. \\
          Pode utilizar esses links também:
        `)}
      />

      <ul>
        <li>
          <Link href="/experiencia">experiencia.html</Link>
        </li>
        <li>
          <Link href="/projetos">projetos.html</Link>
        </li>
        <li>
          <Link href="/competencias">competencias.html</Link>
        </li>
        <li>
          <Link href="/galeria">galeria.html</Link>
        </li>
      </ul>
    </div>
  );
}
