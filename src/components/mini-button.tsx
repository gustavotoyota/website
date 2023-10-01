export default function MiniButton(props: {
  name: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="group w-12 h-12 flex items-center justify-center relative cursor-pointer"
      onClick={props.onClick}
    >
      <svg
        className={`w-6 h-6 ${
          props.active ? "text-white/90" : "text-white/60"
        } group-hover:text-white/90`}
      >
        <use xlinkHref={`codicon.svg#${props.name}`} />
      </svg>

      {props.active ? (
        <div className="absolute inset-0 border-l-2 border-l-[#0078d4]"></div>
      ) : null}
    </div>
  );
}
