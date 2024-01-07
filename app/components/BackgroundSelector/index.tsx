"use client";

import { ChevronDown } from "lucide-react";
import { useRef } from "react";

import { linearBackgrounds } from "@/base/config/config";
import useToggle from "@/base/hooks/useToggle";
import { useOnClickOutside } from "@/base/hooks/useOnClickOutside";
import { EditorType, useGlobalContext } from "@/base/context/globalProvider";

export default function BackgroundSelector() {
  const { isOn, toggle, setOff } = useToggle();
  const { background, handleChange } = useGlobalContext();

  const bgRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(bgRef, setOff);

  return (
    <div ref={bgRef} className="bg-selector relative" onClick={toggle}>
      <p className="py-[5px] text-sm font-medium">Theme Selector</p>
      <div className="dropdown-title w-[62px]">
        <div
          className="rounded-full w-[20px] h-[20px]"
          style={{ background }}
        ></div>
        <ChevronDown />
      </div>
      {isOn && (
        <div className="dropdown-menu top-[74px] w-[62px] rounded-full flex flex-col gap-2">
          {linearBackgrounds.map((background, i) => {
            return (
              <div
                key={i}
                onClick={() => handleChange?.(EditorType.background, background)}
                className="w-[20px] h-[20px] rounded-full cursor-pointer"
                style={{ background }}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
}
