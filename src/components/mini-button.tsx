export default function MiniButton(props: {
  name: string;
  activeAction: string | null;
  setActiveAction: (action: string | null) => void;
}) {
  const active = props.activeAction === props.name;

  return (
    <div
      className="group w-12 h-12 flex items-center justify-center relative cursor-pointer"
      onClick={() =>
        active ? props.setActiveAction(null) : props.setActiveAction(props.name)
      }
    >
      <svg
        className={`w-6 h-6 text-neutral-400 group-hover:text-neutral-200 ${
          active ? "text-neutral-200" : ""
        }`}
      >
        <use xlinkHref={`codicon.svg#${props.name}`} />
      </svg>

      {active ? (
        <div className="absolute inset-0 border-l-2 border-l-[#0078d4]"></div>
      ) : null}
    </div>
  );
}
