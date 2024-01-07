import { EditorType } from "@/base/context/globalProvider";
import { LanguageProps, LanguageType } from "@/components/LangugeSelector/types";

export interface DropdownProps {
  label: string;
  options: string[] | LanguageProps;
  type: EditorType;
  handleChange?: (type: EditorType, value: LanguageType | string) => void;
}
