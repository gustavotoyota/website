import { Dispatch, SetStateAction, useState } from "react";

export function useStateEx<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>, () => Promise<S>] {
  const [state, setState] = useState<S>(initialState);

  return [
    state,
    setState,
    () =>
      new Promise<S>((resolve) => {
        setState((prevState) => {
          resolve(prevState);
          return prevState;
        });
      }),
  ];
}

export function prepareMarkdown(markdown: string) {
  const lines = markdown.split("\n");

  let numSpaces = 0;

  for (const line of lines) {
    const trimmedLine = line.trimStart();

    if (trimmedLine.length !== line.length) {
      numSpaces = line.length - trimmedLine.length;
      break;
    }
  }

  return lines.map((line) => line.slice(numSpaces)).join("\n");
}
