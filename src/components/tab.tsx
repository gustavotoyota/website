import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Tab(props: {
  name: string;
  path: string;
  icon?: string;
  onClose?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const active = pathname === props.path;

  return (
    <div
      className={`group px-1 flex items-center
        ${active ? "" : "text-neutral-400"}
        ${active ? "bg-[#1f1f1f]" : "hover:bg-white/5"}
        border-r border-r-white/10
        ${active ? "" : "border-b border-b-white/10"}
        text-[13px] cursor-pointer
        h-[35px]
        border-t
        ${active ? "border-t-[#0078d4]" : "border-t-transparent"}`}
      onClick={() => router.push(props.path)}
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
          ${active ? "" : "invisible group-hover:visible"}
          hover:bg-white/10 cursor-pointer`}
        onClick={(event) => {
          event.stopPropagation();

          props.onClose?.(event);
        }}
      >
        <svg className={`w-4 h-4 ${active ? "" : "text-neutral-400"}`}>
          <use xlinkHref="codicon.svg#close" />
        </svg>
      </div>
    </div>
  );
}
