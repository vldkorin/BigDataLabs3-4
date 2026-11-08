import { useMutation } from "@tanstack/react-query";

import { predictRisk } from "../api/predict-risk";

const usePredictRisk = () => {
  return useMutation({ mutationFn: predictRisk });
};

export { usePredictRisk };
