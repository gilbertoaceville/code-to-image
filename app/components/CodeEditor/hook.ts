import { defaultCode } from "@/base/config/config";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";

export function useCodeEditor() {
  const [resWidth, setResWidth] = useState(1000);
  const [resHeight, setResHeight] = useState<number | null>(500);
  const [title, setTitle] = useState("Add-Untitled");
  const [codeValue, setCodeValue] = useState<string>(defaultCode);

  function handleCodeValueChange(newCode: string) {
    setCodeValue(newCode);
  }

  function handleChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function handleResize(
    event: MouseEvent | TouchEvent,
    direction: string,
    ref: HTMLElement,
    pos: unknown
  ) {
    const newHeight = ref.style.height;
    setResHeight(parseInt(newHeight, 10));
  }

  function updateWidthSize() {
    setResWidth(window.innerWidth);
  }

  useEffect(() => {
    updateWidthSize();

    window.addEventListener("resize", updateWidthSize);
    return window.removeEventListener("resize", updateWidthSize);
  }, []);

  return { codeValue, resHeight, resWidth, title, handleCodeValueChange, handleResize, handleChangeTitle };
}
