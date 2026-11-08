import { z } from "zod";

import { RiskLevel } from "../enums/risk-level.enum";

const predictionResultSchema = z.object({
  risk: z.enum(RiskLevel)
});

export { predictionResultSchema };
