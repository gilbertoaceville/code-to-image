"use client";

import React from "react";

import { ChevronDown } from "lucide-react";
import { useRef } from "react";

import { themes } from "@/base/config/config";
import { useEditor } from "@/base/hooks/useEditor";
import useToggle from "@/base/hooks/useToggle";
import { useOnClickOutside } from "@/base/hooks/useOnClickOutside";

export default function ThemeSelector() {
  const { isOn, toggle, setOff } = useToggle();
  const { theme, handleThemeChange } = useEditor();

  const themeRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(themeRef, setOff);

  return (
    <div ref={themeRef} onClick={toggle}>
      <p className="py-[5px] text-sm font-medium">Code Colors</p>
      <div className="dropdown-title capitalize w-[120px] hover:text-slate-50 transition-all duration-300 ease-in-out">
        {theme} <ChevronDown />
      </div>
      {isOn && (
        <div className="dropdown-menu relative top-[94px] w-[120px]">
          {themes.map((theme, i) => {
            return (
              <button
                key={i}
                onClick={() => handleThemeChange(theme)}
                className=" capitalize text-left hover:text-slate-50 transition-all duration-300 ease-in-out"
              >
                {theme}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
