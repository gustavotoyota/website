/* eslint-disable react/no-children-prop */
import { prepareMarkdown } from "@/misc/utils";
import { Metadata } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export const metadata: Metadata = {
  title: "A teia invisível por trás dos códigos [03/10/2023] - Gustavo Toyota",
  description:
    "No desenvolvimento de um software, à medida que o código vai tomando forma, uma teia invisível vai se formando por trás dele. Este artigo explora sua natureza.",
};

export default function ATeiaInvisivelPorTrasDosCodigos() {
  return (
    <div
      className="blog-post p-5 max-w-3xl"
      style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
    >
      <h1 style={{ marginTop: "0.67rem", marginBottom: "0" }}>
        A teia invisível por trás dos códigos
      </h1>
      <div className="h-4"></div>
      <div className="text-xs text-white/80">
        Gustavo Toyota - 3 de outubro de 2023
      </div>
      <div className="h-9"></div>
      <div className="max-w-[600px]">
        <Image
          src="/images/blog/a-teia-invisivel-por-tras-dos-codigos/web.webp"
          width={600}
          height={400}
          alt="Tangled spider web"
          style={{ width: "100%", height: "auto" }}
        />

        <div className="text-xs text-white/80">
          Imagem de{" "}
          <a
            href="https://www.flickr.com/photos/mollivan_jon/6681834037"
            target="_blank"
          >
            Jon Sullivan
          </a>{" "}
          (CC BY-NC 2.0)
        </div>
      </div>
      <div className="h-8"></div>
      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          No desenvolvimento de um software, à medida que o código vai tomando forma, uma teia invisível vai se formando por trás dele. Isso ocorre independentemente da linguagem ou tecnologia utilizada.
          
          É possível desenvolver grande parte de um software sem perceber sua existência. No entanto, mais cedo ou mais tarde, ela começará a afetar a qualidade do código e a atormentar o desenvolvedor, até que ele busque entender mais sobre sua natureza.
          
          Ela é a teia de dependências, e está presente em todo lugar, do nível micro ao macro, inclusive no mundo real. Este artigo tem como objetivo proporcionar uma compreensão mais profunda dessa teia no desenvolvimento de software.

          ## A teia na vida real
        `)}
      />
      <Image
        src="/images/blog/a-teia-invisivel-por-tras-dos-codigos/unity.webp"
        width={400}
        height={0}
        alt="Logo da plataforma de desenvolvimento de jogos Unity"
        className="max-w-full"
        style={{ width: "100%", height: "auto", maxWidth: "400px" }}
      />
      <div className="text-xs text-white/80">
        Logo da plataforma de desenvolvimento de jogos Unity
      </div>
      <div className="h-6"></div>
      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          A teia de dependências não existe somente dentro dos códigos.

          Recentemente, por exemplo, saíram notícias de que a plataforma de desenvolvimento de jogos Unity iria alterar sua política de taxas sobre seus usuários, introduzindo uma cobrança baseada no número de instalações dos jogos desenvolvidos por meio da plataforma.
          
          Inúmeros desenvolvedores dependem dessa plataforma para desenvolverem seus jogos. Muitos deles estão tão atrelados à plataforma que seria muito difícil migrar para plataformas concorrentes como Godot ou Unreal Engine. Muitos desenvolvedores de jogos seriam afetados e até mesmo poderiam falir devido a essa nova taxa.
          
          Veremos que esses efeitos de dependência se manifestam exatamente da mesma forma dentro do desenvolvimento de software.
          
          ## Dependência possui granularidade
        `)}
      />
      <Image
        src="/images/blog/a-teia-invisivel-por-tras-dos-codigos/granularidade.webp"
        width={400}
        height={0}
        alt="Dependência entre módulos"
        className="max-w-full"
        style={{ width: "100%", height: "auto", maxWidth: "400px" }}
      />
      <div className="text-xs text-white/80">
        Dependência entre módulos (DALL·E)
      </div>
      <div className="h-6"></div>
      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          Quando falamos que um objeto depende de outro, ele não depende exatamente do outro objeto. Existe uma granularidade por baixo dessa expressão.
          
          Um objeto depende de **características específicas de outro objeto**.
          
          No caso da Unity, exemplos dessas características seriam detalhes da API de desenvolvimento e plugins específicos da plataforma. Se outra plataforma possuísse todas as mesmas características da Unity da qual um desenvolvedor depende, seria fácil realizar uma migração para ela.
          
          Na programação, um objeto A pode depender de um objeto B ter nome "arr", ser um array e ter valores inteiros como itens. Nesse caso, A dependeria de 3 características de B.
          
          ## Dependência possui consequências
          
          Estamos tão acostumados em ver a palavra "dependência" no desenvolvimento de software, que dá a impressão de ser um simples plugin que você pode conectar e sair utilizando sem mais problemas.
          
          No entanto, existe um grande peso por trás dessa palavra.
          
          A menos que seja uma dependência opcional, quando um módulo depende de outro, ele fica à mercê do outro módulo. Ele atrela a sua própria estabilidade ao outro módulo. De certa forma, ele vira um escravo do outro módulo.
          
          ## Mudanças e efeitos cascata
        `)}
      />
      <Image
        src="/images/blog/a-teia-invisivel-por-tras-dos-codigos/domino.webp"
        width={450}
        height={0}
        alt="Dominós caindo em efeito cascata"
        className="max-w-full"
        style={{ width: "100%", height: "auto", maxWidth: "450px" }}
      />
      <div className="text-xs text-white/80">
        Imagem de{" "}
        <a
          href="https://www.flickr.com/photos/testlab/21496317363"
          target="_blank"
        >
          Kurt:S
        </a>{" "}
        (CC BY-NC 2.0)
      </div>
      <div className="h-8"></div>
      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          Imagine que um módulo A depende de algumas características de um módulo B. Caso uma das características de B das quais A depende mude, A ficaria instável, e precisaria ser modificado para refletir a nova característica de B. Essa característica pode ser tão simples quanto o nome utilizado para se referir a B. Eu costumo chamar esse fenômeno de **transferência de instabilidade**.
          
          Perceba que isso pode provocar um efeito cascata: se ao corrigir essa instabilidade A modifica uma das suas características da qual outro módulo C depende, C também ficaria instável. É como se um castelo tivesse sido construído sobre a areia: se a fundação é instável, o que depende dela também é.
          
          ## Acoplamento e coesão
        `)}
      />
      <Image
        src="/images/blog/a-teia-invisivel-por-tras-dos-codigos/tight-coupling.webp"
        width={400}
        height={0}
        alt="Representação visual de tight-coupling (DALL·E)"
        className="max-w-full"
        style={{ width: "100%", height: "auto", maxWidth: "400px" }}
      />
      <div className="text-xs text-white/80">
        Representação visual de tight-coupling (DALL·E)
      </div>
      <div className="h-6"></div>
      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          Formalmente, existe uma métrica para o "peso" das dependências entre dois módulos: acoplamento (coupling). Acoplamento, em sua definição, é o "grau de interdependência entre módulos de software". Em outras palavras, é uma métrica abstrata que mede o quão atrelado um módulo está aos detalhes de outro módulo.
          
          Apesar do nome correto ser acoplamento, eu prefiro chamar de **atrelamento**. Acredito que traz uma nuance que faz mais sentido e facilita o entendimento.
          
          Acoplamento geralmente é contrastado com outra métrica: coesão (cohesion). Coesão é o "grau em que os elementos de um módulo pertencem juntos". É uma métrica mais subjetiva. Enquanto acoplamento mede a relação entre dois módulos diferentes, coesão mede as relações internas de um único módulo.
          
          Idealmente, um módulo deve possuir baixo acoplamento e alta coesão.
          
          ## A Lei de Deméter
        `)}
      />
      <Image
        src="/images/blog/a-teia-invisivel-por-tras-dos-codigos/demeter.webp"
        width={400}
        height={0}
        alt="Deméter, deusa da colheita e da agricultura (Wikimedia Commons)"
        className="max-w-full"
        style={{ width: "100%", height: "auto", maxWidth: "400px" }}
      />
      <div className="text-xs text-white/80">
        Deméter, deusa da colheita e da agricultura (Wikimedia Commons)
      </div>
      <div className="h-6"></div>
      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          A Lei de Deméter, também conhecida como o princípio do menor conhecimento, é uma heurística que foi proposta em 1987 por Ian Holland e Karl Lieberherr, professores de ciência da computação da Northeastern University localizada em Boston, Massachusetts. Ela pode ser útil para auxiliar o desenvolvedor no desacoplamento de módulos de software.
          
          Essa lei propõe que um método \`M\` de um objeto \`O\` só deve poder acessar membros dos seguintes possíveis objetos:
          
          *   o próprio objeto \`O\`
          *   atributos de \`O\`
          *   parâmetros de \`M\`
          *   objetos instanciados dentro de \`M\`
          *   variáveis globais (apesar de não ser recomendado)
          
          Em sua essência, a Lei de Deméter afirma que um objeto deve se comunicar apenas com seus vizinhos imediatos, evitando acessar objetos distantes ou ter um conhecimento excessivo sobre a estrutura interna de outros objetos. Em outras palavras, essa lei desaconselha que você atravesse múltiplos objetos para acessar alguma propriedade ou método.
          
          De certa forma, essa lei limita a quantidade de pontos (\`.\`) que você pode utilizar para acessar membros de objetos. Deve-se utilizar no máximo 1 ponto, sem contar acessos a membros do próprio objeto (através do \`this\`). A utilização de mais de 1 ponto pode indicar excesso de acoplamento.
          
          Por exemplo, o seguinte código viola a Lei de Deméter, acessando membros de objetos além do vizinho imediato (\`cliente\`):
          
          \`\`\`
          String cidade = this.cliente.obterEndereco().obterCidade();
          \`\`\`
          
          Uma possível solução para essa violação seria adicionar o método \`obterCidade\` no objeto \`cliente\`:
          
          \`\`\`
          String cidade = this.cliente.obterCidade();
          \`\`\`
          
          Outra solução seria adicionar \`endereco\` como um vizinho direto:
          
          \`\`\`
          String cidade = this.endereco.obterCidade();
          \`\`\`
          
          Lembrando que a Lei de Deméter é simplesmente uma heurística. Não deve ser levada como uma regra a ser aplicada em todos os casos, no entanto, ela pode ser muito útil na detecção de possíveis problemas de acoplamento em um código.
          
          ## A busca por mínimas dependências confiáveis
          
          Se um módulo fica à mercê de suas dependências, naturalmente gostaríamos de buscar os seguintes objetivos principais:
          
          *   minimizar as dependências entre módulos, reduzindo o máximo possível as possibilidades e o impacto de transferências de instabilidade;
          *   nas dependências que não puderem ser removidas, garantir que elas sejam as mais confiáveis e estáveis possíveis.
          
          Na busca por esses dois objetivos, diversas ideias e práticas acabam surgindo e se tornando muito importantes no desenvolvimento de software:
          
          ### **Injeção de dependência e dependência em abstrações**
          
          A injeção de dependência é uma técnica que visa evitar o atrelamento de um módulo a características irrelevantes de sua dependência, neste caso, relacionados à maneira como ela é construída. Isso aumenta a estabilidade do módulo, reduzindo suas responsabilidades e a possibilidade de efeitos cascata. Ao mesmo tempo, permite a reutilização do módulo, a substituição da dependência e, consequentemente, o isolamento do mesmo.
          
          O desatrelamento de características irrelevantes das dependências pode ser ampliado através da dependência em abstrações, ideia também conhecida como princípio da inversão de dependência. Abstrações são representações das características essenciais de um determinado conceito, ignorando todo o resto. Em alguns casos, também podem ser chamadas de interfaces ou contratos.
          
          Ao depender de abstrações, garantimos que nosso código está atrelado apenas às características estáveis das reais dependências concretas. Ao mesmo tempo, tornamos o código mais flexível, permitindo o uso de várias implementações que atendem à mesma abstração.
          
          ### **Efeitos colaterais, funções puras e imutabilidade**
          
          Efeitos colaterais são manipulações de estados externos ao escopo de um bloco de código. Eles aumentam significativamente a quantidade de recursos necessários para podermos garantir que o código é confiável. É praticamente impossível eliminar efeitos colaterais de um código, mas podemos reduzi-los e isolá-los para que não exijam muitos recursos e para que não afetem muito a confiabilidade do software.
          
          Funções puras são funções sem efeitos colaterais. Elas possuem resultados previsíveis, determinados somente pelos seus argumentos de entrada. Portanto, com elas é muito mais fácil garantir um código confiável.
          
          Outra forma de deixar o código mais confiável é através de imutabilidade, que consiste em evitar o uso de variáveis e a modificação de propriedades de objetos, a favor do uso de constantes e estruturas de dados imutáveis. Imutabilidade deixa o código mais inteligível e consequentemente confiável, e também o livra de diversos tipos de problemas relacionados a paralelismo e concorrência.
          
          ### **Testes de software**
          
          Testes de software são essenciais para reduzir a probabilidade de falhas no funcionamento de dependências. Em conjunto com as práticas mencionadas anteriormente, como injeção de dependência, dependência em abstrações, funções puras e imutabilidade, os testes de software são uma parte crucial do processo de desenvolvimento que busca a criação de sistemas confiáveis.
          
          ## Conclusão

          Quando for introduzir uma dependência em seu código, avalie cuidadosamente a sua confiabilidade e estabilidade, seja ela um serviço, uma biblioteca ou até mesmo uma simples variável. Evite depender de características desnecessárias, mantendo seu código atrelado apenas a detalhes essenciais. Evite, sobretudo, usar características de dependências não explicitamente declaradas. Essas dicas são especialmente aplicáveis quando a dependência é desenvolvida internamente pela sua equipe ou por você mesmo.

          A teia de dependências desempenha um papel crucial no desenvolvimento de software, ditando muitas das decisões tomadas ao longo do processo. À medida que o software cresce em complexidade e tamanho, a importância de compreender e gerenciar essas dependências torna-se ainda mais evidente. Portanto, é fundamental compreender o seu funcionamento para garantir a construção de um software de alta qualidade.
        `)}
      />

      <div className="h-10"></div>

      <div>Se você gostou deste artigo, compartilhe com seus colegas!</div>
      <div>
        Em caso de dúvidas ou sugestões, entre em contato comigo pelo e-mail
        abaixo.
      </div>

      <div className="h-10"></div>

      <div className="p-3 border border-white/30 bg-black/40 flex">
        <Image
          src="/images/icon.png"
          alt="Foto de Gustavo Toyota"
          className="rounded-full "
          width={128}
          height={128}
        />

        <div className="flex-0 w-4"></div>

        <div className="flex-1 flex flex-col">
          <div className="text-white/80">
            Sobre <b>Gustavo Toyota</b>
          </div>

          <div className="h-2"></div>

          <div className="text-sm text-white/90 flex-1">
            Desenvolvedor de software interessado em extrair o máximo de poder
            da simplicidade, transformando códigos complexos em soluções
            elegantes e eficientes.
          </div>

          <div className="h-2"></div>

          <div>
            <a href="mailto:mail@gustavotoyota.dev" className="text-sm">
              mail@gustavotoyota.dev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
