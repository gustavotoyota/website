"use client";

import File from "@/components/file";
import MiniButton from "@/components/mini-button";
import Section from "@/components/section";
import Tab from "@/components/tab";
import CompetenciasTab from "@/components/tabs/competencias";
import ExperienciaTab from "@/components/tabs/experiencia";
import GaleriaTab from "@/components/tabs/galeria";
import ProjetosTab from "@/components/tabs/projetos";
import WelcomeTab from "@/components/tabs/welcome";
import { files, useStateEx } from "@/utils";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  const [activeAction, setActiveAction] = useState<string | null>("files");

  useEffect(() => {
    setActiveAction(document.body.clientWidth > 600 ? "files" : null);
  }, []);

  const [activeItem, setActiveItem] = useState<string | null>(null);

  const [tabs, setTabs, getTabs] = useStateEx(["Welcome", ...files]);

  function setActiveFile(file: string) {
    setActiveItem(file);
    setActiveTab(file);
  }

  const [activeTab, setActiveTab] = useState("Welcome");

  return (
    <main className="flex h-[100%] flex-col text-white">
      {showBanner ? (
        <div className="pl-2 bg-[#323232] flex items-center py-[3px]">
          <Image src="/images/icon.png" alt="icon" width={16} height={16} />

          <div className="ml-2 flex-1">
            Para assuntos relacionados a negócios, entre em contato por{" "}
            <a href="mailto:mail@gustavotoyota.dev">mail@gustavotoyota.dev</a>.
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

      <div className="flex-1 flex select-none bg-[#181818] h-0">
        {/* Mini buttons */}

        <div className="flex-none w-12 border-r border-solid border-r-white/10 flex flex-col">
          <div className="group w-12 h-9 flex items-center justify-center relative cursor-pointer">
            <div className="hidden group-hover:block bg-[#0078d4] left-0 top-0 bottom-0 right-0"></div>

            <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300">
              <use xlinkHref="codicon.svg#menu" />
            </svg>
          </div>

          <MiniButton
            name="files"
            activeAction={activeAction}
            setActiveAction={setActiveAction}
          />

          <MiniButton
            name="search"
            activeAction={activeAction}
            setActiveAction={setActiveAction}
          />

          <MiniButton
            name="source-control"
            activeAction={activeAction}
            setActiveAction={setActiveAction}
          />

          <MiniButton
            name="debug-alt"
            activeAction={activeAction}
            setActiveAction={setActiveAction}
          />

          <MiniButton
            name="extensions"
            activeAction={activeAction}
            setActiveAction={setActiveAction}
          />

          <MiniButton
            name="remote-explorer"
            activeAction={activeAction}
            setActiveAction={setActiveAction}
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

        {activeAction != null ? (
          <div className="flex-none w-64 border-r border-r-white/10 flex flex-col">
            <div className="text-[11px] h-[35px] flex items-center">
              <div className="flex-1 ml-5 text-[#cccccc]">
                {activeAction === "files"
                  ? "EXPLORER"
                  : activeAction === "search"
                  ? "SEARCH"
                  : activeAction === "source-control"
                  ? "SOURCE CONTROL"
                  : activeAction === "debug-alt"
                  ? "DEBUG"
                  : activeAction === "extensions"
                  ? "EXTENSIONS"
                  : activeAction === "remote-explorer"
                  ? "REMOTE EXPLORER"
                  : null}
              </div>

              <div className="mr-2">
                <div className="rounded w-[22px] h-[22px] hover:bg-white/10 cursor-pointer flex items-center justify-center">
                  <svg className="w-4 h-4 text-neutral-200">
                    <use xlinkHref="codicon.svg#ellipsis" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <Section
                name="WORKSPACE"
                active={activeItem === "WORKSPACE"}
                onClick={() => setActiveItem("WORKSPACE")}
                expanded
              >
                <div
                  className={`flex items-center h-[22px] cursor-pointer hover:bg-white/10 border ${
                    activeItem === "Gustavo Toyota"
                      ? "border-[#0078d4] bg-white/10"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveItem("Gustavo Toyota")}
                >
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
                    active={file === activeItem}
                    onClick={() => {
                      if (!tabs.includes(file)) {
                        setTabs([...tabs, file]);
                      }

                      setActiveFile(file);

                      if (document.body.clientWidth <= 600) {
                        setActiveAction(null);
                      }
                    }}
                  />
                ))}
              </Section>

              <Section
                name="OUTLINE"
                active={activeItem === "OUTLINE"}
                onClick={() => setActiveItem("OUTLINE")}
              >
                <div className="ml-3 mt-2">Olá.</div>
              </Section>

              <Section
                name="TIMELINE"
                active={activeItem === "TIMELINE"}
                onClick={() => setActiveItem("TIMELINE")}
              >
                <div className="ml-3 mt-2">Tudo bem?</div>
              </Section>
            </div>
          </div>
        ) : null}

        {/* Main content */}

        <div className="flex-1 flex flex-col w-0">
          <div className="flex overflow-x-auto overflow-y-hidden">
            {tabs.map((tab) => (
              <Tab
                name={tab}
                active={tab === activeTab}
                icon={tab === "Welcome" ? undefined : "code"}
                onActivate={() => setActiveFile(tab)}
                onClose={async () => {
                  setTabs(tabs.filter((t) => t !== tab));

                  setActiveFile((await getTabs())[0]);
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

          <div
            key={activeTab}
            className="flex-1 bg-[#1f1f1f] select-text h-0 overflow-auto"
          >
            <div className="max-w-[1200px]">
              {activeTab === "Welcome" ? (
                <WelcomeTab setActiveFile={setActiveFile} />
              ) : activeTab === "experiencia.html" ? (
                <ExperienciaTab setActiveFile={setActiveFile} />
              ) : activeTab === "projetos.html" ? (
                <ProjetosTab />
              ) : activeTab === "competencias.html" ? (
                <CompetenciasTab />
              ) : activeTab === "galeria.html" ? (
                <GaleriaTab />
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}

      <div className="flex-none h-[23px] bg-[#181818] border-t border-t-white/10 flex select-none">
        <div className="w-[34px] bg-[#0078D4] flex items-center justify-center hover:brightness-110 cursor-pointer">
          <svg className="w-[14px] h-[14px]">
            <use xlinkHref="codicon.svg#remote" />
          </svg>
        </div>

        <div className="ml-1 px-1 flex items-center text-xs hover:bg-white/10 cursor-pointer">
          <svg className="w-[14px] h-[14px] text-white/75">
            <use xlinkHref="codicon.svg#error" />
          </svg>

          <div className="ml-[2px] text-white/90">0</div>

          <svg className="ml-[2px] w-[14px] h-[14px] text-white/75">
            <use xlinkHref="codicon.svg#warning" />
          </svg>

          <div className="ml-[2px] text-white/90">0</div>
        </div>

        <div className="flex-1"></div>

        <div className="px-1 flex items-center text-xs text-white/80 hover:bg-white/10 cursor-pointer">
          Layout: us
        </div>

        <div className="ml-2 px-1 flex items-center text-xs text-white/80 hover:bg-white/10 cursor-pointer">
          <svg className="w-[14px] h-[14px] text-white/85">
            <use xlinkHref="codicon.svg#feedback" />
          </svg>
        </div>

        <div className="mx-2 px-1 flex items-center text-xs text-white/80 hover:bg-white/10 cursor-pointer">
          <svg className="w-[14px] h-[14px] text-white/85">
            <use xlinkHref="codicon.svg#bell" />
          </svg>
        </div>
      </div>
    </main>
  );
}
