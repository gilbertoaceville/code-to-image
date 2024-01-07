"use client";

import { Download } from "lucide-react";

import CodeEditor from "@/components/CodeEditor";
import LanguageSelector from "@/components/LangugeSelector";
import ThemeSelector from "@/components/ThemeSelector";
import BackgroundSelector from "@/components/BackgroundSelector";
import PaddingSelector from "@/components/PaddingSelector";
import { useGlobalContext } from "@/base/context/globalProvider";

export default function Home() {
  const { language, theme, padding, background } = useGlobalContext();

  console.log({ language, theme });
  return (
    <main className="h-[100vh] flex flex-col items-center justify-between">
      <header
        className="mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
         z-10 bg-secondary rounded border border-b-secondary shadow-md"
      >
        <LanguageSelector key={language.name} />
        <ThemeSelector key={theme} />
        <BackgroundSelector key={background} />
        <PaddingSelector key={padding} />

        <div className="export-btn self-center ml-auto">
          <button
            className="flex items-center gap-3 py-2 px-3 bg-violet-400 rounded-md text-sm text-violet-400 
              font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
              duration-300"
            // onClick={exportPng}
          >
            <Download />
            Export PNG
          </button>
        </div>
      </header>

      <div className="editor mt-[13rem]">
        <CodeEditor key={"editor"} />
      </div>
    </main>
  );
}
