import type { FieldLike } from "@/common/types/form/field-like.type";
import { FieldError } from "@/components/atoms/field-error/field-error";
import { Input } from "@/components/atoms/input/input";

interface FormFieldProps {
  field: FieldLike;
  label: string;
  placeholder: string;
  step?: string;
  submissionAttempts?: number;
  type?: "number" | "text";
}

const FormField = ({
  field,
  label,
  placeholder,
  step,
  submissionAttempts = 0,
  type = "text"
}: FormFieldProps) => {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span>{label}</span>
      <Input
        name={field.name}
        onBlur={field.handleBlur}
        onChange={(event) => {
          field.handleChange(event.target.value);
        }}
        placeholder={placeholder}
        step={step}
        type={type}
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

export { FormField };
