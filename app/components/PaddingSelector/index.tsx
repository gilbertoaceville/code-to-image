"use client";

import { paddings } from "@/base/config/config";
import { EditorType, useGlobalContext } from "@/base/context/globalProvider";

export default function PaddingSelector() {
  const { padding: currentPadding, handleChange } = useGlobalContext();
  return (
    <div>
      <p className="py-[5px] text-sm font-medium">Padding Selector</p>
      <div className="flex gap-6">
        {paddings.map((padding, i) => {
          return (
            <button
              key={i}
              onClick={() => handleChange?.(EditorType.padding, padding)}
              className={`h-[37px]  flex items-center justify-center text-sm px-2 cursor-pointer
            ${
              currentPadding === padding && "bg-accent text-tertiary rounded-md"
            } hover:text-tertiary ease-linear transition-all duration-300
          `}
            >
              {padding}
            </button>
          );
        })}
      </div>
    </div>
  );
}
