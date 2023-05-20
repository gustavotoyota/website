"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  const [activeAction, setActiveAction] = useState("explorer");

  return (
    <main className="flex min-h-screen flex-col text-white bg-[#181818]">
      {showBanner ? (
        <div className="pl-2 leading-[26px] bg-[#323232] flex">
          <div className="flex-1">
            Estou à procura de emprego. Caso interessado, entre em contato por{" "}
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

      <div className="flex-1 flex">
        {/* Mini buttons */}

        <div className="flex-none w-12 border-r border-r-white/10">
          <div className="group w-12 h-9 flex items-center justify-center relative cursor-pointer">
            <div className="hidden group-hover:block bg-[#0078d4] left-0 top-0 bottom-0 right-0"></div>

            <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300">
              <use xlinkHref="codicon.svg#menu" />
            </svg>
          </div>

          <div
            className="group w-12 h-12 flex items-center justify-center relative cursor-pointer"
            onClick={() => setActiveAction("explorer")}
          >
            <svg
              className={`w-6 h-6 text-neutral-400 group-hover:text-neutral-200 ${
                activeAction === "explorer" ? "text-neutral-200" : ""
              }`}
            >
              <use xlinkHref="codicon.svg#files" />
            </svg>

            {activeAction === "explorer" ? (
              <div className="absolute inset-0 border-l-2 border-l-[#0078d4]"></div>
            ) : null}
          </div>

          <div
            className="group w-12 h-12 flex items-center justify-center relative cursor-pointer"
            onClick={() => setActiveAction("search")}
          >
            <svg
              className={`w-6 h-6 text-neutral-400 group-hover:text-neutral-200 ${
                activeAction === "search" ? "text-neutral-200" : ""
              }`}
            >
              <use xlinkHref="codicon.svg#search" />
            </svg>

            {activeAction === "search" ? (
              <div className="absolute inset-0 border-l-2 border-l-[#0078d4]"></div>
            ) : null}
          </div>

          <div
            className="group w-12 h-12 flex items-center justify-center relative cursor-pointer"
            onClick={() => setActiveAction("source-control")}
          >
            <svg
              className={`w-6 h-6 text-neutral-400 group-hover:text-neutral-200 ${
                activeAction === "source-control" ? "text-neutral-200" : ""
              }`}
            >
              <use xlinkHref="codicon.svg#source-control" />
            </svg>

            {activeAction === "source-control" ? (
              <div className="absolute inset-0 border-l-2 border-l-[#0078d4]"></div>
            ) : null}
          </div>

          <div
            className="group w-12 h-12 flex items-center justify-center relative cursor-pointer"
            onClick={() => setActiveAction("debug")}
          >
            <svg
              className={`w-6 h-6 text-neutral-400 group-hover:text-neutral-200 ${
                activeAction === "debug" ? "text-neutral-200" : ""
              }`}
            >
              <use xlinkHref="codicon.svg#debug-alt" />
            </svg>

            {activeAction === "debug" ? (
              <div className="absolute inset-0 border-l-2 border-l-[#0078d4]"></div>
            ) : null}
          </div>

          <div
            className="group w-12 h-12 flex items-center justify-center relative cursor-pointer"
            onClick={() => setActiveAction("extensions")}
          >
            <svg
              className={`w-6 h-6 text-neutral-400 group-hover:text-neutral-200 ${
                activeAction === "extensions" ? "text-neutral-200" : ""
              }`}
            >
              <use xlinkHref="codicon.svg#extensions" />
            </svg>

            {activeAction === "extensions" ? (
              <div className="absolute inset-0 border-l-2 border-l-[#0078d4]"></div>
            ) : null}
          </div>

          <div
            className="group w-12 h-12 flex items-center justify-center relative cursor-pointer"
            onClick={() => setActiveAction("remote-explorer")}
          >
            <svg
              className={`w-6 h-6 text-neutral-400 group-hover:text-neutral-200 ${
                activeAction === "remote-explorer" ? "text-neutral-200" : ""
              }`}
            >
              <use xlinkHref="codicon.svg#remote-explorer" />
            </svg>

            {activeAction === "remote-explorer" ? (
              <div className="absolute inset-0 border-l-2 border-l-[#0078d4]"></div>
            ) : null}
          </div>
        </div>

        {/* Sidebar */}

        <div className="flex-none w-64 bg-[#181818] border-r border-r-white/10">
          <div className="text-[11px] h-[35px] flex items-center">
            <div className="flex-1 ml-4">EXPLORER</div>

            <div className="mr-2">
              <div className="rounded w-[22px] h-[22px] hover:bg-white/10 cursor-pointer flex items-center justify-center">
                <svg className="w-4 h-4 text-neutral-200">
                  <use xlinkHref="codicon.svg#ellipsis" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}

        <div className="flex-1 flex">
          <div></div>
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
