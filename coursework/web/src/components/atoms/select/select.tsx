import type { SelectHTMLAttributes } from "react";

import { mergeClassNames } from "@/common/utils/class-name/merge-class-names";

import type { SelectOption } from "./types/select-option.type";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: SelectOption[];
  placeholder: string;
}

const Select = ({
  className = "",
  options,
  placeholder,
  ...props
}: SelectProps) => {
  return (
    <select
      {...props}
      className={mergeClassNames(
        "rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-black dark:border-zinc-700 dark:bg-zinc-900",
        className
      )}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export { Select };
