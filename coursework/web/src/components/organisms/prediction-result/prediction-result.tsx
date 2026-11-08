import { mergeClassNames } from "@/common/utils/class-name/merge-class-names";
import { RiskLevel } from "@/modules/prediction/enums/risk-level.enum";

interface PredictionResultProps {
  risk: RiskLevel;
}

const RISK_LABEL: Record<RiskLevel, string> = {
  [RiskLevel.HIGH]: "ВИСОКИЙ",
  [RiskLevel.LOW]: "НИЗЬКИЙ"
};

const PredictionResult = ({ risk }: PredictionResultProps) => {
  return (
    <p
      className={mergeClassNames(
        "rounded-md border px-4 py-3 text-center text-lg font-semibold",
        risk === RiskLevel.HIGH &&
          "border-red-300 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300",
        risk === RiskLevel.LOW &&
          "border-green-300 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950/30 dark:text-green-300"
      )}
    >
      Ризик ССЗ: {RISK_LABEL[risk]}
    </p>
  );
};

export { PredictionResult };
