import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PredictionPage } from "@/pages/prediction/prediction-page";

const App = () => {
  const [queryClient] = useState(() => {
    return new QueryClient();
  });

  return (
    <QueryClientProvider client={queryClient}>
      <PredictionPage />
    </QueryClientProvider>
  );
};

export { App };
