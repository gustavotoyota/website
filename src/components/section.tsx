import { useState } from "react";

export default function Section(props: any) {
  const [expanded, setExpanded] = useState(props.expanded);

  return (
    <>
      <div
        className={`flex items-center h-[22px] cursor-pointer border ${
          props.active
            ? "border-[#0078d4]"
            : "border-transparent border-t-white/10"
        }`}
        onClick={(event) => {
          props.onClick?.(event);

          setExpanded(!expanded);
        }}
      >
        <svg className="ml-[2px] w-4 h-4 text-neutral-200">
          <use
            xlinkHref={`codicon.svg#${
              expanded ? "chevron-down" : "chevron-right"
            }`}
          />
        </svg>

        <div className="ml-[2px] font-bold text-[11px] text-[#cccccc]">
          {props.name}
        </div>
      </div>

      <div
        className={`transition-all overflow-hidden ${
          expanded ? "flex-1" : "flex-none h-0"
        }`}
      >
        {props.children}
      </div>
    </>
  );
}
