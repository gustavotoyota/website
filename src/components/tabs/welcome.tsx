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
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          # Bem-vindo(a)!

          ![Bem-vindo(a)!](/images/welcome.png "Sorrindo com o prêmio que ganhei no bingo")

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

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          E-mail para contato: [mail@gustavotoyota.dev](mailto:mail@gustavotoyota.dev) \\
          GitHub: [github.com/gustavotoyota](https://github.com/gustavotoyota/) \\
          LinkedIn: [linkedin.com/in/gustavotoyota](https://www.linkedin.com/in/gustavotoyota/)

          &nbsp;
        `)}
      />
    </div>
  );
}
