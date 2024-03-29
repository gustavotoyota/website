/* eslint-disable react/no-children-prop */
import { prepareMarkdown } from "@/misc/utils";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Gallery } from "../../../components/gallery";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiência - Gustavo Toyota",
};

export default function Experiencia() {
  return (
    <div
      className="px-5 py-1"
      style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
    >
      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          # Experiência

          ---
          
          \`2020\` - [Cielo](https://www.cielo.com.br/) - **Desenvolvedor de Software** - \`24 anos\`

          - Desenvolvimento de ferramentas e sistemas internos para apoio aos gestores de taxas de clientes da Cielo.
          - Utilização de C#, VBA, SQL, Nuxt.js, Vue.js, Typescript, Javascript, Git, HTML e CSS.
          `)}
      />

      <Gallery
        images={[
          {
            src: "/experiencia/cielo/efetivado/69179151_2912053682154595_6234392905591554048_n.jpg",
          },
          {
            src: "/experiencia/cielo/efetivado/70057899_2893862317309656_524479703717773312_n.jpg",
          },
          {
            src: "/experiencia/cielo/efetivado/71323576_2543141045731560_6758552342187999232_n.jpg",
          },
          {
            src: "/experiencia/cielo/efetivado/black-friday.jpg",
          },
          {
            src: "/experiencia/cielo/efetivado/82431514_2767329983312664_7332104924890660864_n.jpg",
          },
          {
            src: "/experiencia/cielo/efetivado/48390639_1995490190527570_8309467214616985600_n.jpg",
          },
          {
            src: "/experiencia/cielo/efetivado/55924232_2628410633852236_355297282616197120_n.jpg",
          },
          {
            src: "/experiencia/cielo/efetivado/57032266_2222064521222120_4861725893275418624_n.jpg",
          },
          {
            src: "/experiencia/cielo/efetivado/57096965_2526673200688111_7267745063298400256_n.jpg",
          },
          {
            src: "/experiencia/cielo/efetivado/57674247_2526673137354784_7068108828692185088_n.jpg",
          },
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          &nbsp;

          \`2019\` - [Cielo](https://www.cielo.com.br/) - **Estagiário** - \`23 anos\`

          - Automação de sistemas e processos internos.
          - Utilização de C#, VBA, SQL, HTML, CSS e Javascript.
          `)}
      />

      <Gallery
        images={[
          {
            src: "/experiencia/cielo/estagio/59996094_10217013363318004_1319563113250422784_n.jpg",
          },
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          &nbsp;

          \`2015-2019\` - [UFSCar](https://www.ufscar.br/) - **Bacharel em Ciência da Computação** - Campus Sorocaba - \`19-23 anos\`

          - Principais atividades extracurriculares:
            - Monitor de Algoritmos e Programação I entre Agosto e Dezembro de 2015, e de Algoritmos e Programação II entre Março e Julho de 2016, fornecendo assistência a alunos através da elaboração de listas de exercícios e esclarecimento de dúvidas sobre a disciplina.
            - Competidor em diversas maratonas de programação, incluindo a XX Maratona de Programação (Sociedade Brasileira de Computação) em 2015 e a XXI Maratona de Programação em 2016.
            - Membro da organização da SeCoT (Semana da Computação e Tecnologia) de 2015, 2016 e 2017.
          - Utilização de C, C++, Python e Java.
        `)}
      />

      <Gallery
        images={[
          {
            src: "/experiencia/ufscar/IMG_20200213_140429178.jpg",
            alt: "Formatura - UFSCar",
          },
          {
            src: "/experiencia/ufscar/IMG_20200213_131336314.jpg",
            alt: "Formatura - UFSCar",
          },
          {
            src: "/experiencia/ufscar/2º-lugar-O-Sorrateiro-Tigre-Colorido.jpg",
            alt: "2º lugar na maratona - O Sorrateiro Tigre Colorido",
          },
          {
            src: "/experiencia/ufscar/Durante-maratona-O-Sorrateiro-Tigre-Colorido.jpg",
            alt: "Durante a maratona - O Sorrateiro Tigre Colorido",
          },
          {
            src: "/experiencia/ufscar/O-Sorrateiro-Tigre-Colorido.jpg",
            alt: "Antes da maratona - O Sorrateiro Tigre Colorido",
          },
          {
            src: "/experiencia/ufscar/SeCoT-2017.jpg",
            alt: "SeCoT 2017",
          },
          {
            src: "/experiencia/ufscar/Último-dia-SeCoT-2017.jpg",
            alt: "Último dia - SeCoT 2017",
          },
          {
            src: "/experiencia/ufscar/Intervalo-SeCoT-2017.jpg",
            alt: "Intervalo - SeCoT 2017",
          },
          {
            src: "/experiencia/ufscar/Símbolo-SeCoT-2016.jpg",
            alt: "Símbolo - SeCoT 2016",
          },
          {
            src: "/experiencia/ufscar/SeCoT-2016.jpg",
            alt: "SeCoT 2016",
          },
          {
            src: "/experiencia/ufscar/SeCoT-2015.jpg",
            alt: "SeCoT 2015",
          },
          {
            src: "/experiencia/ufscar/segundo-lugar-na-maratona-da-UFScar.jpg",
            alt: "2º lugar na maratona - Baloes++;",
          },
          {
            src: "/experiencia/ufscar/Visita-à-UOL.jpg",
            alt: "Visita à UOL",
          },
          {
            src: "/experiencia/ufscar/Amigos-Pizzaria.jpg",
            alt: "Amigos - Pizzaria",
          },
          {
            src: "/experiencia/ufscar/Amigos-Jirenaton-House.jpg",
            alt: "Amigos - Jirenaton House",
          },
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          &nbsp;

          \`~2008-2014\` - **Primeiros contatos com programação** - \`~12-18 anos\`

          - Desenvolvimento de bots de Tibia, PangYa e Runescape.
          - Desenvolvimento de OTServers.
          - Utilização de Delphi, Pascal, HTML, CSS, Javascript, PHP, Java e Lua.
        `)}
      />

      <Gallery
        images={[
          {
            src: "/experiencia/infancia/SDC10189.JPG",
          },
          {
            src: "/experiencia/infancia/0ff03cf1f06ca12d73d82bf1e4b00edb1.webp",
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
