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
