interface PredictionErrorProps {
  message: string;
}

const PredictionError = ({ message }: PredictionErrorProps) => {
  return (
    <p className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300">
      {message}
    </p>
  );
};

export { PredictionError };
