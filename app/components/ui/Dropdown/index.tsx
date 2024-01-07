import { ForwardedRef, RefObject, forwardRef } from "react";
import { ChevronDown } from "lucide-react";

import { DropdownProps } from "./types";
import useToggle from "@/base/hooks/useToggle";
import { useOnClickOutside } from "@/base/hooks/useOnClickOutside";
import { EditorType } from "@/base/context/globalProvider";
import { LanguageType } from "@/components/LangugeSelector/types";

const Dropdown = forwardRef(function Dropdown(
  { label, options, type, handleChange }: DropdownProps,
  ref: ForwardedRef<HTMLDivElement> | RefObject<HTMLDivElement>
) {
  const { isOn, toggle, setOff } = useToggle();

  useOnClickOutside(ref as RefObject<HTMLDivElement>, setOff);
  return (
    <div ref={ref as ForwardedRef<HTMLDivElement>} onClick={toggle}>
      <p className="py-[5px] text-sm font-medium">Code Colors</p>
      <div className="dropdown-title capitalize w-[120px] hover:text-slate-50 transition-all duration-300 ease-in-out">
        {label} <ChevronDown />
      </div>
      {isOn && (
        <div className="dropdown-menu top-[94px] w-[120px]">
          {options.map((option, i) => {
            const name =
              type === EditorType.language
                ? (option as LanguageType).name
                : (option as string);
            return (
              <div key={i}>
                <button
                  onClick={() => handleChange?.(type, option)}
                  className="capitalize text-left hover:text-slate-50 transition-all duration-300 ease-in-out"
                >
                  {name}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});

export default Dropdown;
