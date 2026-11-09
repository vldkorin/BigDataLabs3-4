import { z } from "zod";

import { RiskLevel } from "../enums/risk-level.enum";

const predictionResultSchema = z.object({
  risk: z.enum(RiskLevel),
  probability: z.number().min(0).max(1)
});

export { predictionResultSchema };
