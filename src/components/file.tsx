import Link from "next/link";

export default function File(props: {
  name: string;
  path: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={props.path}
      className={`flex items-center h-[22px] cursor-pointer hover:bg-white/10 border ${
        props.active ? "border-[#0078d4] bg-white/10" : "border-transparent"
      }`}
      onClick={props.onClick}
    >
      <svg className="ml-8 w-4 h-4 text-[#e37933]">
        <use xlinkHref="codicon.svg#code" />
      </svg>

      <div className="ml-1 text-[13px] text-[#cccccc]">{props.name}</div>
    </Link>
  );
}
