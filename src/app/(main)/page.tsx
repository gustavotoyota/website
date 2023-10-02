import { mainFiles } from "@/misc/files";
/* eslint-disable react/no-children-prop */
import { prepareMarkdown } from "@/misc/utils";
import { Metadata } from "next";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const metadata: Metadata = {
  title: "Home - Gustavo Toyota",
};

export default function Home() {
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

          Navegue utilizando as abas acima ou o menu lateral esquerdo.
        `)}
      />

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
