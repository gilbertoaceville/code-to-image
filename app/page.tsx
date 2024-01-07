"use client";

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
    <main>
      <header
        className="mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
         z-10 bg-secondary rounded border border-b-secondary shadow-md"
      >
        <LanguageSelector key={language.name} />
        <ThemeSelector key={theme} />
        <BackgroundSelector key={background} />
        <PaddingSelector key={padding} />
      </header>

      <div className="editor">
        <CodeEditor key={"editor"} />
      </div>
    </main>
  );
}
