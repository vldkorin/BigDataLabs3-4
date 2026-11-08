import type { FieldLike } from "@/common/types/form/field-like.type";
import { FieldError } from "@/components/atoms/field-error/field-error";
import { Select } from "@/components/atoms/select/select";
import type { SelectOption } from "@/components/atoms/select/types/select-option.type";

interface SelectFieldProps {
  field: FieldLike;
  label: string;
  options: SelectOption[];
  placeholder: string;
  submissionAttempts?: number;
}

const SelectField = ({
  field,
  label,
  options,
  placeholder,
  submissionAttempts = 0
}: SelectFieldProps) => {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span>{label}</span>
      <Select
        name={field.name}
        onBlur={field.handleBlur}
        onChange={(event) => {
          field.handleChange(event.target.value);
        }}
        options={options}
        placeholder={placeholder}
        value={field.state.value}
      />
      <FieldError
        errors={field.state.meta.errors}
        isTouched={field.state.meta.isTouched}
        submissionAttempts={submissionAttempts}
      />
    </label>
  );
};

export { SelectField };
