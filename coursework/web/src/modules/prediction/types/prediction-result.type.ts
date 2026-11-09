import type { RiskLevel } from "../enums/risk-level.enum";

interface PredictionResult {
  risk: RiskLevel;
  probability: number;
}

export type { PredictionResult };
