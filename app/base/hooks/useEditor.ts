import { useState } from "react";
import { languages } from "@/base/config/config";
import { LanguageType } from "@/components/LangugeSelector/types";

export function useEditor() {
  const [language, setLanguage] = useState<LanguageType>(languages[0]);

  const handleLanguageChange = (newLanguage: LanguageType) => {
    setLanguage(newLanguage);
  };

  return { language, handleLanguageChange };
}
