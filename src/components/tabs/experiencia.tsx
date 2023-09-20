/* eslint-disable react/no-children-prop */
import { prepareMarkdown } from "@/utils";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Gallery } from "../gallery";

export default function ExperienciaTab(props: {
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
          # Experiência

          ---
          
          \`2021-2023\` - **Desenvolvimento de projetos pessoais** - \`25-27 anos\`
        `)}
      />

      <ul>
        <li>
          Mais informações em:{" "}
          <a onClick={() => props.setActiveFile("projetos.html")}>
            projetos.html
          </a>
        </li>
        <li>Foco em Typescript.</li>
      </ul>

      <Gallery
        images={[
          {
            src: "/images/pausa/20210425_123058.jpg",
            alt: "Família",
          },
          {
            src: "/images/pausa/20210810_181936.jpg",
            alt: "Eu e a Lili",
          },
          {
            src: "/images/pausa/IMG_20220109_151915.jpg",
            alt: "Lili",
          },
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          &nbsp;

          \`2020\` - [Cielo](https://www.cielo.com.br/) - **Analista de Operação Comercial** - \`24 anos\`

          - Desenvolvimento de ferramentas e sistemas internos para apoio aos gestores de taxas de clientes da Cielo.
          - Utilização de C#, VBA, SQL, HTML, CSS e Javascript.
          `)}
      />

      <Gallery
        images={[
          {
            src: "/images/cielo/efetivado/69179151_2912053682154595_6234392905591554048_n.jpg",
            alt: "Evento Cielo Xperts",
          },
          {
            src: "/images/cielo/efetivado/70057899_2893862317309656_524479703717773312_n.jpg",
            alt: "Evento Cielo Xperts",
          },
          {
            src: "/images/cielo/efetivado/71323576_2543141045731560_6758552342187999232_n.jpg",
            alt: "",
          },
          {
            src: "/images/cielo/efetivado/black-friday.jpg",
            alt: "Black Friday",
          },
          {
            src: "/images/cielo/efetivado/82431514_2767329983312664_7332104924890660864_n.jpg",
            alt: "Prêmio de reconhecimento",
          },
          {
            src: "/images/cielo/efetivado/48390639_1995490190527570_8309467214616985600_n.jpg",
            alt: "",
          },
          {
            src: "/images/cielo/efetivado/55924232_2628410633852236_355297282616197120_n.jpg",
            alt: "",
          },
          {
            src: "/images/cielo/efetivado/57032266_2222064521222120_4861725893275418624_n.jpg",
            alt: "Amigo secreto",
          },
          {
            src: "/images/cielo/efetivado/57096965_2526673200688111_7267745063298400256_n.jpg",
            alt: "Amigo secreto",
          },
          {
            src: "/images/cielo/efetivado/57674247_2526673137354784_7068108828692185088_n.jpg",
            alt: "Amigo secreto",
          },
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          &nbsp;

          \`2019\` - [Cielo](https://www.cielo.com.br/) - **Estagiário** - \`23 anos\`

          - Automação de sistemas legados.
          - Utilização de C#, VBA, SQL, HTML, CSS e Javascript.
          `)}
      />

      <Gallery
        images={[
          {
            src: "/images/cielo/estagio/59996094_10217013363318004_1319563113250422784_n.jpg",
            alt: "Aniversário da chefe",
          },
          {
            src: "/images/cielo/estagio/Crachá.jpg",
            alt: "Crachá",
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
            src: "/images/ufscar/IMG_20200213_140429178.jpg",
            alt: "Formatura - UFSCar",
          },
          {
            src: "/images/ufscar/IMG_20200213_131336314.jpg",
            alt: "Formatura - UFSCar",
          },
          {
            src: "/images/ufscar/2º-lugar-O-Sorrateiro-Tigre-Colorido.jpg",
            alt: "2º lugar na maratona - O Sorrateiro Tigre Colorido",
          },
          {
            src: "/images/ufscar/Durante-maratona-O-Sorrateiro-Tigre-Colorido.jpg",
            alt: "Durante a maratona - O Sorrateiro Tigre Colorido",
          },
          {
            src: "/images/ufscar/O-Sorrateiro-Tigre-Colorido.jpg",
            alt: "Antes da maratona - O Sorrateiro Tigre Colorido",
          },
          {
            src: "/images/ufscar/SeCoT-2017.jpg",
            alt: "SeCoT 2017",
          },
          {
            src: "/images/ufscar/Último-dia-SeCoT-2017.jpg",
            alt: "Último dia - SeCoT 2017",
          },
          {
            src: "/images/ufscar/Intervalo-SeCoT-2017.jpg",
            alt: "Intervalo - SeCoT 2017",
          },
          {
            src: "/images/ufscar/Símbolo-SeCoT-2016.jpg",
            alt: "Símbolo - SeCoT 2016",
          },
          {
            src: "/images/ufscar/SeCoT-2016.jpg",
            alt: "SeCoT 2016",
          },
          {
            src: "/images/ufscar/SeCoT-2015.jpg",
            alt: "SeCoT 2015",
          },
          {
            src: "/images/ufscar/segundo-lugar-na-maratona-da-UFScar.jpg",
            alt: "2º lugar na maratona - Baloes++;",
          },
          {
            src: "/images/ufscar/Visita-à-UOL.jpg",
            alt: "Visita à UOL",
          },
          {
            src: "/images/ufscar/Amigos-Pizzaria.jpg",
            alt: "Amigos - Pizzaria",
          },
          {
            src: "/images/ufscar/Amigos-Jirenaton-House.jpg",
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
            src: "/images/infancia/SDC10189.JPG",
            alt: "Ta olhando o quê?",
          },
          {
            src: "/images/infancia/0ff03cf1f06ca12d73d82bf1e4b00edb1.webp",
            alt: "Hmmm...",
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
