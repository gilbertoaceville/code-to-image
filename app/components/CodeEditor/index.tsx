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

export default function CodeEditor() {
  const { language, theme } = useGlobalContext();

  return (
    <Resizable maxWidth={1000} minHeight={460} minWidth={500}>
      <AceEditor
        value="function() {return 'Hello'}"
        name="UNIQUE_ID_OF_DIV"
        theme={theme}
        mode={language?.name.toLowerCase()}
        wrapEnabled
        fontSize={14}
        highlightActiveLine
        showGutter={false}
        showPrintMargin={false}
        editorProps={{ $blockScrolling: true }}
        className={styles.wrapper}
      />
    </Resizable>
  );
}
