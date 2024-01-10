import { createContext, useContext, useState } from "react";

import {
  defaultCode,
  languages,
  linearBackgrounds,
  paddings,
  themes,
} from "@/base/config/config";
import { LanguageType } from "@/components/LangugeSelector/types";
import { convertCode, getConvertedCode } from "../utils/convertCode";

export enum EditorType {
  language = "LANGUAGE",
  theme = "THEME",
  background = "BACKGROUND",
  padding = "PADDING",
}

interface ContextProps {
  theme: string;
  background: string;
  language: LanguageType;
  padding: string;
  codeValue: string;
  handleChange?: (type: EditorType, value: LanguageType | string) => void;
  handleCodeValueChange?: (value: string) => void;
}

export const GlobalContext = createContext<ContextProps>({
  theme: "",
  background: "",
  language: { name: "", icon: "" },
  padding: "",
  codeValue: "",
});

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<LanguageType>(languages[0]);
  const [theme, setTheme] = useState<string>(themes[0]);
  const [background, setBackground] = useState(linearBackgrounds[0]);
  const [padding, setPadding] = useState(paddings[2]);
  const [codeValue, setCodeValue] = useState<string>(defaultCode);

  function handleCodeValueChange(newCode: string) {
    setCodeValue(newCode);
  }

  async function handleLanguageChange(newLanguage: LanguageType) {
    setLanguage(newLanguage);

    const convertedCode = await convertCode(codeValue, language?.name);
    console.log({ convertedCode });
  }

  function handleChange(type: EditorType, newContent: LanguageType | string) {
    switch (type) {
      case EditorType.language: {
        return handleLanguageChange(newContent as LanguageType);
      }
      case EditorType.background: {
        return setBackground(newContent as string);
      }
      case EditorType.theme: {
        return setTheme(newContent as string);
      }
      case EditorType.padding: {
        return setPadding(newContent as string);
      }
      default:
        throw new Error(`${type} is invalid`);
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        theme,
        language,
        padding,
        background,
        codeValue,
        handleChange,
        handleCodeValueChange,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
