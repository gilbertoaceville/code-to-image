"use client";

import { useRef } from "react";

import { languages } from "@/base/config/config";
import { EditorType, useGlobalContext } from "@/base/context/globalProvider";
import Dropdown from "../ui/Dropdown";

export default function LanguageSelector() {
  const { language, handleChange } = useGlobalContext();

  const langRef = useRef<HTMLDivElement>(null);

  return (
    <Dropdown
      ref={langRef}
      label={language.name}
      type={EditorType.language}
      options={languages}
      handleChange={handleChange}
    />
  );
}
