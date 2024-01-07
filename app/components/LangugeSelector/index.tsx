"use client";

import { ChevronDown } from "lucide-react";
import clsx from "clsx";

import { languages } from "@/base/config/config";
import { useEditor } from "@/base/hooks/useEditor";
import useToggle from "@/base/hooks/useToggle";
import { useRef } from "react";
import { useOnClickOutside } from "@/base/hooks/useOnClickOutside";

import styles from "./styles.module.scss";

export default function LanguageSelector() {
  const { isOn, toggle, setOff } = useToggle();
  const { language, handleLanguageChange } = useEditor();

  const langRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(langRef, setOff);

  return (
    <div ref={langRef} onClick={toggle}>
      <p className="py-[5px] text-sm font-medium">Language</p>
      <div
        className={clsx(
          styles.dropdownTitle,
          "capitalize w-[120px] hover:text-slate-50 transition-all duration-300 ease-in-out"
        )}
      >
        {language.name}
        <ChevronDown />
      </div>

      {isOn && (
        <div className={clsx(styles.dropdownMenu, "w-[120px] top-[94px]")}>
          {languages.map((lang, i) => {
            return (
              <div key={i}>
                <button
                  className="text-left hover:text-slate-50 transition-all duration-300 ease-in-out"
                  onClick={() => handleLanguageChange(lang)}
                >
                  {lang.name}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
