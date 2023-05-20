export default function MiniButton(props: any) {
  return (
    <div
      className="group w-12 h-12 flex items-center justify-center relative cursor-pointer"
      onClick={props.onClick}
    >
      <svg
        className={`w-6 h-6 text-neutral-400 group-hover:text-neutral-200 ${
          props.active ? "text-neutral-200" : ""
        }`}
      >
        <use xlinkHref={`codicon.svg#${props.icon}`} />
      </svg>

      {props.active ? (
        <div className="absolute inset-0 border-l-2 border-l-[#0078d4]"></div>
      ) : null}
    </div>
  );
}
