"use client";

import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

// languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-typescript";

// themes
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-monokai";

import { useGlobalContext } from "@/base/context/globalProvider";

import styles from "./styles.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { useCodeEditor } from "./hook";
import { getLangExtension } from "@/base/utils/getLangExtension";

export default function CodeEditor() {
  const { language, theme, padding, background } = useGlobalContext();
  const {
    codeValue,
    resHeight,
    resWidth,
    title,
    handleCodeValueChange,
    handleChangeTitle,
    handleResize,
  } = useCodeEditor();
  const extension = getLangExtension(language?.name);

  return (
    <Resizable
      maxWidth={1000}
      minHeight={460}
      minWidth={500}
      defaultSize={{
        width: resWidth,
        height: resHeight || 500,
      }}
      onResize={handleResize}
      className="relative resize-container"
      style={{
        background,
      }}
    >
      <div className="code-container" style={{ padding }}>
        <div
          className={clsx(
            styles.handleTop,
            "handle handle-top absolute left-1/2 translate-x-[-50%] top-[-4px] w-2 h-2 rounded-full bg-tertiary hover:bg-slate-50"
          )}
        />
        <div
          className={clsx(
            styles.handleBottom,
            "handle absolute left-1/2 bottom-[-4px] w-2 h-2 rounded-full bg-tertiary hover:bg-slate-50"
          )}
        />
        <div
          className={clsx(
            styles.handleLeft,
            "handle absolute left-[-4px] top-1/2 w-2 h-2 rounded-full  bg-tertiary hover:bg-slate-50 "
          )}
        />
        <div
          className={clsx(
            styles.handleRight,
            "handle absolute right-[-4px] top-1/2 w-2 h-2 rounded-full bg-tertiary hover:bg-slate-50 "
          )}
        />

        <div className="code-title h-[52px] px-4 flex items-center justify-between bg-foreground bg-opacity-80">
          <div className="dots flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbc6a] "></div>
            <div className="w-3 h-3 rounded-full bg-[#67f772] "></div>
          </div>

          <div className="input-contol w-full">
            <input
              type="text"
              value={`${title}${extension}`}
              onChange={handleChangeTitle}
              className="w-full text-[hsla(0,0%,100%,.6)]  outline-none font-medium 
                text-center bg-transparent"
              style={{
                lineHeight: "1.8rem",
              }}
            />
          </div>

          <div
            className="icon flex justify-center items-center p-1 bg-foreground
               bg-opacity-30 rounded-sm"
          >
            <Image
              src={language.icon}
              alt={language.name}
              width={33}
              height={33}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <AceEditor
          value={codeValue}
          name="UNIQUE_ID_OF_DIV"
          theme={theme}
          mode={language?.name.toLowerCase()}
          wrapEnabled
          fontSize={14}
          height={`calc(${resHeight}px - ${padding} - ${padding} - 52px)`}
          highlightActiveLine={false}
          showGutter={false}
          onChange={handleCodeValueChange}
          showPrintMargin={false}
          editorProps={{ $blockScrolling: true }}
          className={styles.wrapper}
        />
      </div>
    </Resizable>
  );
}
