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
    id: "a-teia-invisivel-por-tras-dos-codigos",
    name: "A teia invisível por trás dos códigos [03/10/2023]",
    path: "/blog/a-teia-invisivel-por-tras-dos-codigos",
  },
];

export const allFiles = [...mainFiles, ...blogPosts];
