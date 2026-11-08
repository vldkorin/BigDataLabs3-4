import { z } from "zod";

import { ChestPainType } from "../enums/chest-pain-type.enum";
import { PatientValidation } from "../enums/patient-validation.enum";
import { PredictionErrorMessage } from "../enums/prediction-error-message.enum";
import { RestingEcg } from "../enums/resting-ecg.enum";
import { Sex } from "../enums/sex.enum";
import { StSlope } from "../enums/st-slope.enum";
import { YesNo } from "../enums/yes-no.enum";

const numberField = (min: number, max: number) => {
  return z
    .string()
    .trim()
    .min(1, { message: PredictionErrorMessage.REQUIRED })
    .pipe(
      z.coerce
        .number<string>({ message: PredictionErrorMessage.NOT_A_NUMBER })
        .min(min, { message: PredictionErrorMessage.OUT_OF_RANGE })
        .max(max, { message: PredictionErrorMessage.OUT_OF_RANGE })
    );
};

const integerField = (min: number, max: number) => {
  return z
    .string()
    .trim()
    .min(1, { message: PredictionErrorMessage.REQUIRED })
    .pipe(
      z.coerce
        .number<string>({ message: PredictionErrorMessage.NOT_A_NUMBER })
        .int({ message: PredictionErrorMessage.NOT_AN_INTEGER })
        .min(min, { message: PredictionErrorMessage.OUT_OF_RANGE })
        .max(max, { message: PredictionErrorMessage.OUT_OF_RANGE })
    );
};

const enumField = <T extends Record<string, string>>(values: T) => {
  return z.enum(values, { message: PredictionErrorMessage.REQUIRED });
};

const yesNoField = () => {
  return enumField(YesNo).transform((value) => {
    return value === YesNo.YES;
  });
};

const patientFormSchema = z.object({
  age: integerField(PatientValidation.AGE_MIN, PatientValidation.AGE_MAX),
  sex: enumField(Sex),
  chestPainType: enumField(ChestPainType),
  restingBloodPressure: numberField(
    PatientValidation.BLOOD_PRESSURE_MIN,
    PatientValidation.BLOOD_PRESSURE_MAX
  ),
  cholesterol: numberField(
    PatientValidation.CHOLESTEROL_MIN,
    PatientValidation.CHOLESTEROL_MAX
  ),
  fastingBloodSugar: yesNoField(),
  restingEcg: enumField(RestingEcg),
  maxHeartRate: numberField(
    PatientValidation.HEART_RATE_MIN,
    PatientValidation.HEART_RATE_MAX
  ),
  exerciseAngina: yesNoField(),
  stDepression: numberField(
    PatientValidation.ST_DEPRESSION_MIN,
    PatientValidation.ST_DEPRESSION_MAX
  ),
  stSlope: enumField(StSlope)
});

export { patientFormSchema };
