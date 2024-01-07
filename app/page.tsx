"use client";

import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import { useRef } from "react";

import CodeEditor from "@/components/CodeEditor";
import LanguageSelector from "@/components/LangugeSelector";
import ThemeSelector from "@/components/ThemeSelector";
import BackgroundSelector from "@/components/BackgroundSelector";
import PaddingSelector from "@/components/PaddingSelector";
import { useGlobalContext } from "@/base/context/globalProvider";
import Footer from "@/components/ui/Footer";

export default function Home() {
  const editorRef = useRef<HTMLDivElement>(null);

  async function downloadImage() {
    const element = editorRef.current;

    if (element) {
      //hide elements
      const handleElems = document.querySelectorAll(".handle") as NodeList;
      const cursorElem = document.querySelector(".ace_cursor") as HTMLElement;
      const codetitle = document.querySelector(".code-title") as HTMLElement;
      const codeEditor = document.querySelector(".ace_editor") as HTMLElement;

      handleElems.forEach((elem: any) => {
        elem.style.display = "none";
      });
      cursorElem.style.display = "none";
      codetitle.style.boxShadow = "none";
      codeEditor.style.boxShadow = "none";

      const canvas = await html2canvas(element);
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      const link = document.createElement("a");
      link.download = "code-editor.png";
      link.href = image;
      link.click();

      //show elements
      handleElems.forEach((elem: any) => {
        elem.style.display = "block";
      });
      cursorElem.style.display = "block";
      codetitle.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.2)";
      codeEditor.style.boxShadow = "2px 3px 10px rgba(0, 0, 0, 0.2)";
    }
  }

  return (
    <main className="h-[100vh] flex flex-col items-center justify-between">
      <header
        className="mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
         z-10 bg-secondary rounded border border-b-secondary shadow-md"
      >
        <LanguageSelector />
        <ThemeSelector />
        <BackgroundSelector />
        <PaddingSelector />

        <div className="export-btn self-center ml-auto">
          <button
            className="flex items-center gap-3 py-2 px-3 bg-violet-400 rounded-md text-sm text-violet-400 
              font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
              duration-300"
            onClick={downloadImage}
          >
            <Download />
            Download File
          </button>
        </div>
      </header>

      <div ref={editorRef} className="editor mt-[13rem]">
        <CodeEditor />
      </div>

      <Footer />
    </main>
  );
}
