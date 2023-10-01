export interface TabInfo {
  name: string;
  path: string;
}

export interface FileInfo {
  id: string;
  name: string;
  path: string;
}

export const fileInfos: FileInfo[] = [
  { id: "experiencia", name: "experiencia.html", path: "/experiencia" },
  { id: "projetos", name: "projetos.html", path: "/projetos" },
  { id: "competencias", name: "competencias.html", path: "/competencias" },
];
