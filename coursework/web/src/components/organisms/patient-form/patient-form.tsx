import { useForm } from "@tanstack/react-form";

import { Button } from "@/components/atoms/button/button";
import { FormField } from "@/components/molecules/form-field/form-field";
import { SelectField } from "@/components/molecules/select-field/select-field";
import { PATIENT_FORM_DEFAULT_VALUES } from "@/modules/prediction/constants/patient-form-default-values.constant";
import { patientFormSchema } from "@/modules/prediction/schemas/patient-form.schema";
import type { PatientInput } from "@/modules/prediction/types/patient-input.type";

import { PATIENT_FORM_FIELDS } from "./constants/patient-form-fields.constant";

interface PatientFormProps {
  isPending: boolean;
  onSubmit: (input: PatientInput) => void;
}

const PatientForm = ({ isPending, onSubmit }: PatientFormProps) => {
  const form = useForm({
    defaultValues: PATIENT_FORM_DEFAULT_VALUES,
    validators: {
      onSubmit: patientFormSchema
    },
    onSubmit: ({ value }) => {
      onSubmit(patientFormSchema.parse(value));
    }
  });

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void form.handleSubmit();
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {PATIENT_FORM_FIELDS.map((config) => {
          return (
            <form.Field key={config.name} name={config.name}>
              {(field) => {
                switch (config.kind) {
                  case "number": {
                    return (
                      <FormField
                        field={field}
                        label={config.label}
                        placeholder={config.placeholder}
                        step={config.step}
                        submissionAttempts={form.state.submissionAttempts}
                        type="number"
                      />
                    );
                  }

                  case "select": {
                    return (
                      <SelectField
                        field={field}
                        label={config.label}
                        options={config.options}
                        placeholder="Оберіть"
                        submissionAttempts={form.state.submissionAttempts}
                      />
                    );
                  }
                }
              }}
            </form.Field>
          );
        })}
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Обчислення..." : "Отримати прогноз"}
      </Button>
    </form>
  );
};

export { PatientForm };
