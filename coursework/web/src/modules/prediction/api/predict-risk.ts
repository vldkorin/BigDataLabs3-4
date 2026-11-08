import { Env } from "@/config/env.config";

import { ApiPath } from "../enums/api-path.enum";
import { PredictionErrorMessage } from "../enums/prediction-error-message.enum";
import { predictionResultSchema } from "../schemas/prediction-result.schema";
import type { PatientInput } from "../types/patient-input.type";
import type { PredictionResult } from "../types/prediction-result.type";

const sendPredictRequest = async (input: PatientInput) => {
  try {
    return await fetch(`${Env.VITE_API_URL}${ApiPath.PREDICT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input)
    });
  } catch {
    throw new Error(PredictionErrorMessage.SERVICE_UNAVAILABLE);
  }
};

const predictRisk = async (input: PatientInput): Promise<PredictionResult> => {
  const response = await sendPredictRequest(input);

  if (!response.ok) {
    throw new Error(PredictionErrorMessage.REQUEST_FAILED);
  }

  return predictionResultSchema.parse(await response.json());
};

export { predictRisk };
