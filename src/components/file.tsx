import { useRouter } from "next/navigation";

export default function File(props: {
  name: string;
  path: string;
  active: boolean;
  depth: number;
  onClick?: () => void;
}) {
  const router = useRouter();

  return (
    <div
      className={`flex items-center h-[22px] cursor-pointer hover:bg-white/10 border ${
        props.active ? "border-[#0078d4] bg-white/10" : "border-transparent"
      }`}
      style={{ paddingLeft: `${6 + props.depth * 12}px` }}
      onClick={() => {
        router.push(props.path);

        props.onClick?.();
      }}
    >
      <svg className="w-4 h-4 text-[#e37933]">
        <use xlinkHref="codicon.svg#code" />
      </svg>

      <div className="ml-1 text-[13px] text-[#cccccc]">{props.name}</div>
    </div>
  );
}
