export interface FileInfo {
  id: string;
  name: string;
  path: string;
}

export const mainFiles: FileInfo[] = [
  { id: "home", name: "home.html", path: "/" },
  { id: "experiencia", name: "experiencia.html", path: "/experiencia" },
  { id: "projetos", name: "projetos.html", path: "/projetos" },
  { id: "competencias", name: "competencias.html", path: "/competencias" },
];

export const blogPosts: FileInfo[] = [
  {
    id: "uma-simples-estrutura-de-dados-para-particionamento-espacial-de-grades",
    name: "[11/01/2024] Uma simples estrutura de dados para particionamento espacial de grades",
    path: "/blog/uma-simples-estrutura-de-dados-para-particionamento-espacial-de-grades",
  },
  {
    id: "a-teia-invisivel-por-tras-dos-codigos",
    name: "[03/10/2023] A teia invisível por trás dos códigos",
    path: "/blog/a-teia-invisivel-por-tras-dos-codigos",
  },
];

export const allFiles = [...mainFiles, ...blogPosts];
