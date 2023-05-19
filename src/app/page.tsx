import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-white bg-[#181818]">
      <div className="pl-2 leading-[26px] bg-[#323232]">
        Estou à procura de emprego.
      </div>

      <div className="flex-1 flex">
        {/* Mini buttons */}

        <div className="flex-none w-12 border-r border-r-white/10">
          <div className="group w-12 h-9 flex items-center justify-center relative cursor-pointer">
            <div className="hidden group-hover:block bg-[#0078d4] left-0 top-0 bottom-0 right-0"></div>

            <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300">
              <use xlinkHref="codicon.svg#menu" />
            </svg>
          </div>

          <div className="group w-12 h-12 flex items-center justify-center relative cursor-pointer">
            <div className="hidden group-hover:block bg-[#0078d4] left-0 top-0 bottom-0 right-0"></div>

            <svg className="w-6 h-6 text-neutral-400 group-hover:text-neutral-300">
              <use xlinkHref="codicon.svg#files" />
            </svg>
          </div>

          <div className="group w-12 h-12 flex items-center justify-center relative cursor-pointer">
            <svg className="w-6 h-6 text-neutral-400 group-hover:text-white">
              <use xlinkHref="codicon.svg#search" />
            </svg>
          </div>

          <div className="group w-12 h-12 flex items-center justify-center relative cursor-pointer">
            <svg className="w-6 h-6 text-neutral-400 group-hover:text-white">
              <use xlinkHref="codicon.svg#source-control" />
            </svg>
          </div>

          <div className="group w-12 h-12 flex items-center justify-center relative cursor-pointer">
            <svg className="w-6 h-6 text-neutral-400 group-hover:text-neutral-300">
              <use xlinkHref="codicon.svg#debug-alt" />
            </svg>
          </div>

          <div className="group w-12 h-12 flex items-center justify-center relative cursor-pointer">
            <svg className="w-6 h-6 text-neutral-400 group-hover:text-neutral-300">
              <use xlinkHref="codicon.svg#extensions" />
            </svg>
          </div>

          <div className="group w-12 h-12 flex items-center justify-center relative cursor-pointer">
            <svg className="w-6 h-6 text-neutral-400 group-hover:text-neutral-300">
              <use xlinkHref="codicon.svg#remote-explorer" />
            </svg>
          </div>
        </div>

        {/* Sidebar */}

        <div className="flex-none w-64 bg-[#181818] border-r border-r-white/10">
          <div className="text-[11px] h-[35px]">
            <div className="ml-4 leading-[35px]">EXPLORER</div>
          </div>
        </div>

        {/* Main content */}

        <div className="flex-1"></div>
      </div>

      {/* Status bar */}

      <div className="flex-none h-[22px] border-t border-t-white/10"></div>
    </main>
  );
}
