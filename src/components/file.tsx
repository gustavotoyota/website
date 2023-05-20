export default function File(props: any) {
  return (
    <div
      className="flex items-center h-[22px] cursor-pointer hover:bg-white/10"
      onClick={props.onClick}
    >
      <svg className="ml-8 w-4 h-4 text-neutral-200">
        <use xlinkHref="codicon.svg#code" />
      </svg>

      <div className="ml-1 text-[13px] text-[#cccccc]">{props.name}</div>
    </div>
  );
}
