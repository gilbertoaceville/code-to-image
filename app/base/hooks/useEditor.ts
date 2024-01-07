import { useState } from "react";
import { languages, linearBackgrounds, themes } from "@/base/config/config";
import { LanguageType } from "@/components/LangugeSelector/types";

export enum EditorType {
  language = "LANGUAGE",
  theme = "THEME",
  background = "BACKGROUND",
}

export function useEditor() {
  const [language, setLanguage] = useState<LanguageType>(languages[0]);
  const [theme, setTheme] = useState<string>(themes[0]);
  const [background, setBackground] = useState(linearBackgrounds[0]);

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
      default:
        throw new Error(`${type} is invalid`);
    }
  }

  return {
    language,
    theme,
    background,
    handleChange,
  };
}
