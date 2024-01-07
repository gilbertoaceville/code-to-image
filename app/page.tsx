import CodeEditor from "@/components/CodeEditor";
import LanguageSelector from "@/components/LangugeSelector";

export default function Home() {
  return (
    <main>
      <header
        className="mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
         z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md"
      >
        <LanguageSelector />
      </header>

      <div className="editor">
        <CodeEditor />
      </div>
    </main>
  );
}
