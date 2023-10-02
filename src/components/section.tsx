import { useState } from "react";

export default function Section(props: {
  name: string;
  active: boolean;
  depth: number;
  expanded?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(props.expanded);

  return (
    <>
      <div
        className={`flex flex-none items-center h-[22px] cursor-pointer border ${
          props.active
            ? "border-[#0078d4]"
            : props.depth === 0
            ? "border-transparent border-t-white/10"
            : "border-transparent"
        }`}
        style={{ paddingLeft: `${props.depth * 12}px` }}
        onClick={(event) => {
          props.onClick?.(event);

          setExpanded((oldExpanded) => !oldExpanded);
        }}
      >
        <svg className="ml-[2px] w-4 h-4 text-neutral-200">
          <use
            xlinkHref={`/codicon.svg#${
              expanded ? "chevron-down" : "chevron-right"
            }`}
          />
        </svg>

        <div
          className={`ml-[2px] ${
            props.depth === 0 ? "font-bold text-[11px]" : ""
          } text-[#cccccc]`}
        >
          {props.name}
        </div>
      </div>

      <div
        className={`transition-all ${
          props.depth === 0 ? "overflow-auto h-0" : ""
        } flex flex-col ${
          expanded ? "flex-1" : "overflow-hidden flex-none h-0"
        }`}
      >
        {props.children}
      </div>
    </>
  );
}
