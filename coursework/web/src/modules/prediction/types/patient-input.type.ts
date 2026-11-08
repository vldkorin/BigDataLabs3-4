import type { ChestPainType } from "../enums/chest-pain-type.enum";
import type { RestingEcg } from "../enums/resting-ecg.enum";
import type { Sex } from "../enums/sex.enum";
import type { StSlope } from "../enums/st-slope.enum";

interface PatientInput {
  age: number;
  sex: Sex;
  chestPainType: ChestPainType;
  restingBloodPressure: number;
  cholesterol: number;
  fastingBloodSugar: boolean;
  restingEcg: RestingEcg;
  maxHeartRate: number;
  exerciseAngina: boolean;
  stDepression: number;
  stSlope: StSlope;
}

export type { PatientInput };
