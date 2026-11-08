import { ChestPainType } from "@/modules/prediction/enums/chest-pain-type.enum";
import { RestingEcg } from "@/modules/prediction/enums/resting-ecg.enum";
import { Sex } from "@/modules/prediction/enums/sex.enum";
import { StSlope } from "@/modules/prediction/enums/st-slope.enum";
import { YesNo } from "@/modules/prediction/enums/yes-no.enum";

import type { PatientFormField } from "../types/patient-form-field.type";

const YES_NO_OPTIONS = [
  { label: "Так", value: YesNo.YES },
  { label: "Ні", value: YesNo.NO }
];

const PATIENT_FORM_FIELDS: PatientFormField[] = [
  {
    kind: "number",
    name: "age",
    label: "Вік",
    placeholder: "54",
    step: "1"
  },
  {
    kind: "select",
    name: "sex",
    label: "Стать",
    options: [
      { label: "Чоловіча", value: Sex.MALE },
      { label: "Жіноча", value: Sex.FEMALE }
    ]
  },
  {
    kind: "select",
    name: "chestPainType",
    label: "Тип болю в грудях",
    options: [
      { label: "Типова стенокардія", value: ChestPainType.TYPICAL_ANGINA },
      { label: "Атипова стенокардія", value: ChestPainType.ATYPICAL_ANGINA },
      { label: "Неангінальний біль", value: ChestPainType.NON_ANGINAL },
      { label: "Безсимптомний", value: ChestPainType.ASYMPTOMATIC }
    ]
  },
  {
    kind: "number",
    name: "restingBloodPressure",
    label: "Тиск у спокої, мм рт. ст.",
    placeholder: "130",
    step: "1"
  },
  {
    kind: "number",
    name: "cholesterol",
    label: "Холестерин, мг/дл",
    placeholder: "220",
    step: "1"
  },
  {
    kind: "select",
    name: "fastingBloodSugar",
    label: "Цукор натще > 120 мг/дл",
    options: YES_NO_OPTIONS
  },
  {
    kind: "select",
    name: "restingEcg",
    label: "ЕКГ у спокої",
    options: [
      { label: "Норма", value: RestingEcg.NORMAL },
      { label: "Аномалія ST-T", value: RestingEcg.ST_T_ABNORMALITY },
      {
        label: "Гіпертрофія лівого шлуночка",
        value: RestingEcg.LV_HYPERTROPHY
      }
    ]
  },
  {
    kind: "number",
    name: "maxHeartRate",
    label: "Максимальний пульс",
    placeholder: "140",
    step: "1"
  },
  {
    kind: "select",
    name: "exerciseAngina",
    label: "Стенокардія при навантаженні",
    options: YES_NO_OPTIONS
  },
  {
    kind: "number",
    name: "stDepression",
    label: "Депресія сегмента ST",
    placeholder: "1.0",
    step: "0.1"
  },
  {
    kind: "select",
    name: "stSlope",
    label: "Нахил сегмента ST",
    options: [
      { label: "Висхідний", value: StSlope.UPSLOPING },
      { label: "Плаский", value: StSlope.FLAT },
      { label: "Низхідний", value: StSlope.DOWNSLOPING }
    ]
  }
];

export { PATIENT_FORM_FIELDS };
