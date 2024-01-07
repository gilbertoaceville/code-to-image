"use client";

import { useRef } from "react";

import { themes } from "@/base/config/config";
import { EditorType, useGlobalContext } from "@/base/context/globalProvider";
import Dropdown from "@/components/ui/Dropdown";

export default function ThemeSelector() {
  const { theme, handleChange } = useGlobalContext();

  const themeRef = useRef<HTMLDivElement>(null);

  return (
    <Dropdown
      ref={themeRef}
      label={theme}
      type={EditorType.theme}
      options={themes}
      handleChange={handleChange}
    />
  );
}
