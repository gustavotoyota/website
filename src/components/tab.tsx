import Link from "next/link";

export default function Tab(props: {
  name: string;
  path: string;
  active: boolean;
  icon?: string;
  onClose?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    active: boolean
  ) => void;
}) {
  return (
    <Link
      href={props.path}
      className={`group px-1 flex items-center
        ${props.active ? "" : "text-neutral-400"}
        ${props.active ? "bg-[#1f1f1f]" : "hover:bg-white/5"}
        border-r border-r-white/10
        ${props.active ? "" : "border-b border-b-white/10"}
        text-[13px] cursor-pointer
        h-[35px]
        border-t
        ${props.active ? "border-t-[#0078d4]" : "border-t-transparent"}`}
    >
      <div className="ml-2">
        <svg className="w-4 h-4 text-[#e37933]">
          <use xlinkHref={`codicon.svg#${props.icon ? props.icon : "code"}`} />
        </svg>
      </div>

      <div className="ml-1 whitespace-nowrap">{props.name}</div>

      <div className="w-2"></div>

      <div
        className={`w-5 h-5 rounded
          flex items-center justify-center
          ${props.active ? "" : "invisible group-hover:visible"}
          hover:bg-white/10 cursor-pointer`}
        onClick={(event) => {
          event.preventDefault();

          props.onClose?.(event, props.active);
        }}
      >
        <svg className={`w-4 h-4 ${props.active ? "" : "text-neutral-400"}`}>
          <use xlinkHref="codicon.svg#close" />
        </svg>
      </div>
    </Link>
  );
}
