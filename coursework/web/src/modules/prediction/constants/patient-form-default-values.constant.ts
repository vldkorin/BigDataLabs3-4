import type { PatientFormValues } from "../types/patient-form-values.type";

const PATIENT_FORM_DEFAULT_VALUES: PatientFormValues = {
  age: "",
  sex: "",
  chestPainType: "",
  restingBloodPressure: "",
  cholesterol: "",
  fastingBloodSugar: "",
  restingEcg: "",
  maxHeartRate: "",
  exerciseAngina: "",
  stDepression: "",
  stSlope: ""
};

export { PATIENT_FORM_DEFAULT_VALUES };
