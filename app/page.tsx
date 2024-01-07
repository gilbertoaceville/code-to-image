import CodeEditor from "@/components/CodeEditor";
import LanguageSelector from "@/components/LangugeSelector";
import ThemeSelector from "@/components/ThemeSelector";
import BackgroundSelector from "@/components/BackgroundSelector";
import PaddingSelector from "@/components/PaddingSelector";

export default function Home() {
  return (
    <main>
      <header
        className="mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
         z-10 bg-secondary rounded border border-b-secondary shadow-md"
      >
        <LanguageSelector />
        <ThemeSelector />
        <BackgroundSelector />
        <PaddingSelector />
      </header>

      <div className="editor">
        <CodeEditor />
      </div>
    </main>
  );
}
