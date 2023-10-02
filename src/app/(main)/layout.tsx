"use client";

import File from "@/components/file";
import MiniButton from "@/components/mini-button";
import Section from "@/components/section";
import Tab from "@/components/tab";
import useStateWithRef from "@/hooks/use-state-with-ref";
import { FileInfo, allFiles, blogPosts, mainFiles } from "@/misc/files";
import "modern-normalize/modern-normalize.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [activeAction, setActiveAction] = useState<string | null>("files");

  useEffect(() => {
    setActiveAction(window.innerWidth > 600 ? "files" : null);
  }, []);

  const [activeItem, setActiveItem] = useState<string | null>(() => null);

  const [tabs, setTabs, tabsRef] = useStateWithRef<string[]>(() => {
    return [...mainFiles.map((file) => file.id)];
  });

  useEffect(() => {
    const currentFile = allFiles.find((file) => file.path === pathname);

    if (currentFile != null) {
      setActiveItem(currentFile.id);

      setTabs((oldTabs) =>
        oldTabs.some((tab) => tab === currentFile.id)
          ? oldTabs
          : [...oldTabs, currentFile.id]
      );
    }
  }, [pathname]);

  return (
    <main className="flex h-[100%] flex-col text-white">
      <div className="flex-1 flex select-none bg-[#181818] h-0">
        {/* Mini buttons */}

        <div className="flex-none w-12 border-r border-solid border-r-white/10 flex flex-col">
          <div className="group w-12 h-9 flex items-center justify-center relative cursor-pointer">
            <div className="hidden group-hover:block bg-[#0078d4] left-0 top-0 bottom-0 right-0"></div>

            <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300">
              <use xlinkHref="/codicon.svg#menu" />
            </svg>
          </div>

          <MiniButton
            name="files"
            active={activeAction === "files"}
            onClick={() =>
              setActiveAction(activeAction === "files" ? null : "files")
            }
          />

          <MiniButton
            name="search"
            active={activeAction === "search"}
            onClick={() =>
              setActiveAction(activeAction === "search" ? null : "search")
            }
          />

          <MiniButton
            name="source-control"
            active={activeAction === "source-control"}
            onClick={() =>
              setActiveAction(
                activeAction === "source-control" ? null : "source-control"
              )
            }
          />

          <MiniButton
            name="debug-alt"
            active={activeAction === "debug-alt"}
            onClick={() =>
              setActiveAction(activeAction === "debug-alt" ? null : "debug-alt")
            }
          />

          <MiniButton
            name="extensions"
            active={activeAction === "extensions"}
            onClick={() =>
              setActiveAction(
                activeAction === "extensions" ? null : "extensions"
              )
            }
          />

          <MiniButton
            name="remote-explorer"
            active={activeAction === "remote-explorer"}
            onClick={() =>
              setActiveAction(
                activeAction === "remote-explorer" ? null : "remote-explorer"
              )
            }
          />

          <div className="flex-1"></div>

          <div className="group w-12 h-12 flex items-center justify-center relative cursor-pointer">
            <svg className="w-6 h-6 text-neutral-400 group-hover:text-neutral-200">
              <use xlinkHref="/codicon.svg#account" />
            </svg>
          </div>

          <div className="group w-12 h-12 flex items-center justify-center relative cursor-pointer">
            <svg className="w-[27px] h-[27px] text-neutral-400 group-hover:text-neutral-200">
              <use xlinkHref="/codicon.svg#gear" />
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
                    <use xlinkHref="/codicon.svg#ellipsis" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col h-0">
              <Section
                name="WORKSPACE"
                active={activeItem === "WORKSPACE"}
                onClick={() => setActiveItem("WORKSPACE")}
                expanded
                depth={0}
              >
                {mainFiles.map((file) => (
                  <File
                    name={file.name}
                    path={file.path}
                    depth={1}
                    key={file.id}
                    active={file.id === activeItem}
                    onClick={() => {
                      setTabs((oldTabs) =>
                        oldTabs.some((tab) => tab === file.id)
                          ? oldTabs
                          : [...oldTabs, file.id]
                      );

                      setActiveItem(file.id);

                      if (document.body.clientWidth <= 600) {
                        setActiveAction(null);
                      }
                    }}
                  />
                ))}

                <Section
                  name="Blog"
                  active={activeItem === "Blog"}
                  onClick={() => setActiveItem("Blog")}
                  expanded
                  depth={1}
                >
                  {blogPosts.map((post) => (
                    <File
                      name={post.name}
                      path={post.path}
                      depth={2}
                      key={post.id}
                      active={post.id === activeItem}
                      onClick={() => {
                        setTabs((oldTabs) =>
                          oldTabs.some((tab) => tab === post.id)
                            ? oldTabs
                            : [...oldTabs, post.id]
                        );

                        setActiveItem(post.id);

                        if (document.body.clientWidth <= 600) {
                          setActiveAction(null);
                        }
                      }}
                    />
                  ))}
                </Section>
              </Section>

              <Section
                name="OUTLINE"
                active={activeItem === "OUTLINE"}
                onClick={() => setActiveItem("OUTLINE")}
                depth={0}
              >
                <div className="ml-3 mt-2">Olá.</div>
              </Section>

              <Section
                name="TIMELINE"
                active={activeItem === "TIMELINE"}
                onClick={() => setActiveItem("TIMELINE")}
                depth={0}
              >
                <div className="ml-3 mt-2">Está procurando algo?</div>
              </Section>
            </div>
          </div>
        ) : null}

        {/* Main content */}

        <div className="flex-1 flex flex-col w-0">
          <div className="flex overflow-x-auto overflow-y-hidden">
            {tabs.map((tab) =>
              (() => {
                const file = allFiles.find((f) => f.id === tab);

                if (file == null) {
                  return;
                }

                return (
                  <Tab
                    name={file.name}
                    path={file.path}
                    icon={file.name === "Welcome" ? undefined : "code"}
                    onClose={async () => {
                      setTabs((oldTabs) => oldTabs.filter((t) => t !== tab));

                      if (pathname === file.path) {
                        setActiveItem(tabsRef.current[0]);

                        const activeFile = allFiles.find(
                          (f) => f.id === tabsRef.current[0]
                        );

                        if (activeFile != null) {
                          await router.push(activeFile.path);
                        }
                      }
                    }}
                    key={file.id}
                  />
                );
              })()
            )}

            {/* Ellipsis */}

            <div className="flex-1 ml-2 border-b border-b-white/10 flex items-center">
              <div className="flex-1"></div>

              <div className="mr-2">
                <div className="rounded w-[22px] h-[22px] hover:bg-white/10 cursor-pointer flex items-center justify-center">
                  <svg className="w-4 h-4 text-neutral-200">
                    <use xlinkHref="/codicon.svg#ellipsis" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            key={pathname}
            className="flex-1 bg-[#1f1f1f] select-text h-0 overflow-auto"
          >
            <div className="max-w-[1200px]">{children}</div>
          </div>
        </div>
      </div>

      {/* Status bar */}

      <div className="flex-none h-[23px] bg-[#181818] border-t border-t-white/10 flex select-none">
        <div className="w-[34px] bg-[#0078D4] flex items-center justify-center hover:brightness-110 cursor-pointer">
          <svg className="w-[14px] h-[14px]">
            <use xlinkHref="/codicon.svg#remote" />
          </svg>
        </div>

        <div className="ml-1 px-1 flex items-center text-xs hover:bg-white/10 cursor-pointer">
          <svg className="w-[14px] h-[14px] text-white/75">
            <use xlinkHref="/codicon.svg#error" />
          </svg>

          <div className="ml-[2px] text-white/90">0</div>

          <svg className="ml-[2px] w-[14px] h-[14px] text-white/75">
            <use xlinkHref="/codicon.svg#warning" />
          </svg>

          <div className="ml-[2px] text-white/90">0</div>
        </div>

        <div className="flex-1"></div>

        <div className="px-1 flex items-center text-xs text-white/80 hover:bg-white/10 cursor-pointer">
          Layout: us
        </div>

        <div className="ml-2 px-1 flex items-center text-xs text-white/80 hover:bg-white/10 cursor-pointer">
          <svg className="w-[14px] h-[14px] text-white/85">
            <use xlinkHref="/codicon.svg#feedback" />
          </svg>
        </div>

        <div className="mx-2 px-1 flex items-center text-xs text-white/80 hover:bg-white/10 cursor-pointer">
          <svg className="w-[14px] h-[14px] text-white/85">
            <use xlinkHref="/codicon.svg#bell" />
          </svg>
        </div>
      </div>
    </main>
  );
}
