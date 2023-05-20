"use client";

import File from "@/components/file";
import MiniButton from "@/components/mini-button";
import Tab from "@/components/tab";
import { useStateEx } from "@/utils";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  const [activeAction, setActiveAction] = useState("explorer");

  const files = [
    "carreira.html",
    "competencias.html",
    "fotos.html",
    "projetos.html",
  ];

  const [tabs, setTabs, getTabs] = useStateEx([
    "Welcome",
    "carreira.html",
    "competencias.html",
    "fotos.html",
    "projetos.html",
  ]);

  const [activeTab, setActiveTab] = useState("Welcome");

  return (
    <main className="flex min-h-screen flex-col text-white bg-[#181818]">
      {showBanner ? (
        <div className="pl-2 bg-[#323232] flex items-center py-[3px]">
          <div>
            <svg className="w-4 h-4 text-neutral-200">
              <use xlinkHref="codicon.svg#code" />
            </svg>
          </div>

          <div className="ml-1 flex-1">
            Estou à procura de emprego. Caso interessado, entrar em contato por{" "}
            <a href="mailto:mail@gustavotoyota.dev" className="underline">
              mail@gustavotoyota.dev
            </a>
            .
          </div>

          <div className="flex-none mr-2 flex items-center justify-center">
            <div
              className="w-5 h-5 rounded flex items-center justify-center hover:bg-white/10 cursor-pointer"
              onClick={() => setShowBanner(false)}
            >
              <svg className="w-4 h-4 text-neutral-200">
                <use xlinkHref="codicon.svg#close" />
              </svg>
            </div>
          </div>
        </div>
      ) : null}

      <div className="flex-1 flex select-none">
        {/* Mini buttons */}

        <div className="flex-none w-12 border-r border-r-white/10 flex flex-col">
          <div className="group w-12 h-9 flex items-center justify-center relative cursor-pointer">
            <div className="hidden group-hover:block bg-[#0078d4] left-0 top-0 bottom-0 right-0"></div>

            <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300">
              <use xlinkHref="codicon.svg#menu" />
            </svg>
          </div>

          <MiniButton
            icon="files"
            active={activeAction === "explorer"}
            onClick={() => setActiveAction("explorer")}
          />

          <MiniButton
            icon="search"
            active={activeAction === "search"}
            onClick={() => setActiveAction("search")}
          />

          <MiniButton
            icon="source-control"
            active={activeAction === "source-control"}
            onClick={() => setActiveAction("source-control")}
          />

          <MiniButton
            icon="debug"
            active={activeAction === "debug"}
            onClick={() => setActiveAction("debug")}
          />

          <MiniButton
            icon="extensions"
            active={activeAction === "extensions"}
            onClick={() => setActiveAction("extensions")}
          />

          <MiniButton
            icon="remote-explorer"
            active={activeAction === "remote-explorer"}
            onClick={() => setActiveAction("remote-explorer")}
          />

          <div className="flex-1"></div>

          <div className="group w-12 h-12 flex items-center justify-center relative cursor-pointer">
            <svg className="w-6 h-6 text-neutral-400 group-hover:text-neutral-200">
              <use xlinkHref="codicon.svg#account" />
            </svg>
          </div>

          <div className="group w-12 h-12 flex items-center justify-center relative cursor-pointer">
            <svg className="w-[27px] h-[27px] text-neutral-400 group-hover:text-neutral-200">
              <use xlinkHref="codicon.svg#gear" />
            </svg>
          </div>
        </div>

        {/* Sidebar */}

        <div className="flex-none w-64 bg-[#181818] border-r border-r-white/10 flex flex-col">
          <div className="text-[11px] h-[35px] flex items-center">
            <div className="flex-1 ml-5 text-[#cccccc]">EXPLORER</div>

            <div className="mr-2">
              <div className="rounded w-[22px] h-[22px] hover:bg-white/10 cursor-pointer flex items-center justify-center">
                <svg className="w-4 h-4 text-neutral-200">
                  <use xlinkHref="codicon.svg#ellipsis" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex items-center h-[22px] cursor-pointer">
              <svg className="ml-[2px] w-4 h-4 text-neutral-200">
                <use xlinkHref="codicon.svg#chevron-down" />
              </svg>

              <div className="ml-[2px] font-bold text-[11px] text-[#cccccc]">
                WORKSPACE
              </div>
            </div>

            <div className="flex items-center h-[22px] cursor-pointer hover:bg-white/10">
              <svg className="ml-4 w-4 h-4 text-neutral-200">
                <use xlinkHref="codicon.svg#chevron-down" />
              </svg>

              <div className="ml-[2px] text-[13px] text-[#cccccc]">
                Gustavo Toyota
              </div>
            </div>

            {files.map((file) => (
              <File
                name={file}
                key={file}
                onClick={() => {
                  if (!tabs.includes(file)) {
                    setTabs([...tabs, file]);
                  }

                  setActiveTab(file);
                }}
              />
            ))}
          </div>

          <div className="flex-1"></div>

          <div className="flex items-center h-[22px] cursor-pointer border-t border-t-white/10">
            <svg className="ml-[2px] w-4 h-4 text-neutral-200">
              <use xlinkHref="codicon.svg#chevron-right" />
            </svg>

            <div className="ml-[2px] font-bold text-[11px] text-[#cccccc]">
              OUTLINE
            </div>
          </div>

          <div className="flex items-center h-[22px] cursor-pointer border-t border-t-white/10">
            <svg className="ml-[2px] w-4 h-4 text-neutral-200">
              <use xlinkHref="codicon.svg#chevron-right" />
            </svg>

            <div className="ml-[2px] font-bold text-[11px] text-[#cccccc]">
              TIMELINE
            </div>
          </div>
        </div>

        {/* Main content */}

        <div className="flex-1 flex flex-col w-0">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <Tab
                name={tab}
                active={tab === activeTab}
                onActivate={() => setActiveTab(tab)}
                onClose={async () => {
                  setTabs(tabs.filter((t) => t !== tab));

                  setActiveTab((await getTabs())[0]);
                }}
                key={tab}
              />
            ))}

            {/* Ellipsis */}

            <div className="flex-1 ml-2 border-b border-b-white/10 flex items-center">
              <div className="flex-1"></div>

              <div className="mr-2">
                <div className="rounded w-[22px] h-[22px] hover:bg-white/10 cursor-pointer flex items-center justify-center">
                  <svg className="w-4 h-4 text-neutral-200">
                    <use xlinkHref="codicon.svg#ellipsis" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-[#1f1f1f]"></div>
        </div>
      </div>

      {/* Status bar */}

      <div className="flex-none h-[23px] border-t border-t-white/10 flex">
        <div className="w-[34px] bg-[#0078D4] flex items-center justify-center hover:brightness-110 cursor-pointer">
          <svg className="w-[14px] h-[14px]">
            <use xlinkHref="codicon.svg#remote" />
          </svg>
        </div>
      </div>
    </main>
  );
}
