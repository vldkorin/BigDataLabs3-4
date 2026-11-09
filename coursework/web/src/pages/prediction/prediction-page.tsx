import { PatientForm } from "@/components/organisms/patient-form/patient-form";
import { PredictionError } from "@/components/organisms/prediction-error/prediction-error";
import { PredictionResult } from "@/components/organisms/prediction-result/prediction-result";
import { PageLayout } from "@/components/templates/page-layout/page-layout";
import { usePredictRisk } from "@/modules/prediction/hooks/use-predict-risk";

const PredictionPage = () => {
  const predictRisk = usePredictRisk();

  return (
    <PageLayout title="Оцінка ризику серцево-судинних захворювань">
      <PatientForm
        isPending={predictRisk.isPending}
        onSubmit={(input) => {
          predictRisk.mutate(input);
        }}
      />
      {predictRisk.data ? (
        <PredictionResult
          probability={predictRisk.data.probability}
          risk={predictRisk.data.risk}
        />
      ) : null}
      {predictRisk.error ? (
        <PredictionError message={predictRisk.error.message} />
      ) : null}
    </PageLayout>
  );
};

export { PredictionPage };
