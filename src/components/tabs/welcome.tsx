/* eslint-disable react/no-children-prop */
import { files, prepareMarkdown } from "@/utils";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function WelcomeTab(props: {
  setActiveFile: (file: string) => void;
}) {
  return (
    <div
      className="px-5 py-1"
      style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
    >
      <ReactMarkdown
        children={prepareMarkdown(`
          # Bem-vindo(a)!

          ![Bem-vindo(a)!](/IMG-20190310-WA0005.png "Sorrindo com o prêmio que ganhei no bingo")

          Bem-vindo(a) ao meu site pessoal! \\
          Aqui você pode encontrar informações sobre mim, meus projetos e minhas experiências.

          Navegue utilizando as abas acima ou o menu lateral esquerdo. \\
          Pode utilizar esses links também:
        `)}
      />

      <ul>
        {files.map((file) => (
          <li key={file}>
            <a onClick={() => props.setActiveFile(file)}>{file}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
