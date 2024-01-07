import { useState } from "react";
import { languages, themes } from "@/base/config/config";
import { LanguageType } from "@/components/LangugeSelector/types";

export function useEditor() {
  const [language, setLanguage] = useState<LanguageType>(languages[0]);
  const [theme, setTheme] = useState<string>(themes[0]);

  function handleLanguageChange(newLanguage: LanguageType) {
    setLanguage(newLanguage);
  };

  function handleThemeChange(newTheme: string) {
    setTheme(newTheme);
  };

  return { language, theme, handleLanguageChange, handleThemeChange };
}
