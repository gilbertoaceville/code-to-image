import { createContext, useContext, useState } from "react";

import {
  languages,
  linearBackgrounds,
  paddings,
  themes,
} from "@/base/config/config";
import { LanguageType } from "@/components/LangugeSelector/types";

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
  handleChange?: (type: EditorType, value: LanguageType | string) => void;
}

export const GlobalContext = createContext<ContextProps>({
  theme: "",
  background: "",
  language: { name: "", icon: "" },
  padding: "",
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

  function handleChange(type: EditorType, newContent: LanguageType | string) {
    switch (type) {
      case EditorType.language: {
        return setLanguage(newContent as LanguageType);
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
      value={{ theme, language, padding, background, handleChange }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
