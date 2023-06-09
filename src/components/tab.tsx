import Image from "next/image";

export default function Tab(props: {
  active: boolean;
  name: string;
  icon?: string;
  onActivate: () => void;
  onClose?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  return (
    <div
      className={`group px-1 flex items-center
        ${props.active ? "" : "text-neutral-400"}
        ${props.active ? "bg-[#1f1f1f]" : "hover:bg-white/5"}
        border-r border-r-white/10
        ${props.active ? "" : "border-b border-b-white/10"}
        text-[13px] cursor-pointer
        h-[35px]
        border-t
        ${props.active ? "border-t-[#0078d4]" : "border-t-transparent"}`}
      onClick={props.onActivate}
    >
      <div className="ml-2">
        {props.icon ? (
          <svg className="w-4 h-4 text-[#e37933]">
            <use xlinkHref={`codicon.svg#${props.icon}`} />
          </svg>
        ) : (
          <Image src="/images/icon.png" alt="icon" width={16} height={16} />
        )}
      </div>

      <div className="ml-1 whitespace-nowrap">{props.name}</div>

      <div className="w-2"></div>

      <div
        className={`w-5 h-5 rounded
          flex items-center justify-center
          ${props.active ? "" : "invisible group-hover:visible"}
          hover:bg-white/10 cursor-pointer`}
        onClick={(event) => {
          event.stopPropagation();

          props.onClose?.(event);
        }}
      >
        <svg className={`w-4 h-4 ${props.active ? "" : "text-neutral-400"}`}>
          <use xlinkHref="codicon.svg#close" />
        </svg>
      </div>
    </div>
  );
}
