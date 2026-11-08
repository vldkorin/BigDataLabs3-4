import type { SelectOption } from "@/components/atoms/select/types/select-option.type";
import type { PatientFormValues } from "@/modules/prediction/types/patient-form-values.type";

type PatientFormField =
  | {
      kind: "number";
      name: keyof PatientFormValues;
      label: string;
      placeholder: string;
      step: string;
    }
  | {
      kind: "select";
      name: keyof PatientFormValues;
      label: string;
      options: SelectOption[];
    };

export type { PatientFormField };
