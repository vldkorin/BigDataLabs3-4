from pathlib import Path

import joblib
import pandas as pd

from api.schemas import PatientInput, PredictionResponse, RiskLevel

MODEL_PATH = Path(__file__).resolve().parent.parent / 'models' / 'heart_model.joblib'


class Predictor:
    def __init__(self, model_path):
        self.model = joblib.load(model_path)

    def predict(self, patient: PatientInput) -> PredictionResponse:
        features = pd.DataFrame([{
            'age': patient.age,
            'sex': patient.sex.value,
            'cp': patient.chest_pain_type.value,
            'trestbps': patient.resting_blood_pressure,
            'chol': patient.cholesterol,
            'fbs': float(patient.fasting_blood_sugar),
            'restecg': patient.resting_ecg.value,
            'thalch': patient.max_heart_rate,
            'exang': float(patient.exercise_angina),
            'oldpeak': patient.st_depression,
            'slope': patient.st_slope.value,
        }])
        prediction = self.model.predict(features)[0]
        probability = self.model.predict_proba(features)[0][1]

        return PredictionResponse(
            risk=RiskLevel.HIGH if prediction == 1 else RiskLevel.LOW,
            probability=float(probability),
        )


predictor = Predictor(MODEL_PATH)
