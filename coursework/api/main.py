import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.predictor import predictor
from api.schemas import PatientInput, PredictionResponse

app = FastAPI(title='Heart Disease Risk API')

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv('FRONTEND_ORIGIN', 'http://localhost:5173')],
    allow_methods=['POST'],
    allow_headers=['Content-Type'],
)


@app.post('/predict', response_model=PredictionResponse)
def predict(patient: PatientInput):
    return PredictionResponse(risk=predictor.predict(patient))
