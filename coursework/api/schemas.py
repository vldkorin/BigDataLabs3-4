from enum import Enum

from pydantic import BaseModel, ConfigDict, Field
from pydantic.alias_generators import to_camel


class Sex(str, Enum):
    MALE = 'Male'
    FEMALE = 'Female'


class ChestPainType(str, Enum):
    TYPICAL_ANGINA = 'typical angina'
    ATYPICAL_ANGINA = 'atypical angina'
    NON_ANGINAL = 'non-anginal'
    ASYMPTOMATIC = 'asymptomatic'


class RestingEcg(str, Enum):
    NORMAL = 'normal'
    ST_T_ABNORMALITY = 'st-t abnormality'
    LV_HYPERTROPHY = 'lv hypertrophy'


class StSlope(str, Enum):
    UPSLOPING = 'upsloping'
    FLAT = 'flat'
    DOWNSLOPING = 'downsloping'


class RiskLevel(str, Enum):
    HIGH = 'high'
    LOW = 'low'


class PatientInput(BaseModel):
    model_config = ConfigDict(alias_generator=to_camel, populate_by_name=True)

    age: int = Field(ge=1, le=120)
    sex: Sex
    chest_pain_type: ChestPainType
    resting_blood_pressure: float = Field(ge=50, le=250)
    cholesterol: float = Field(ge=50, le=700)
    fasting_blood_sugar: bool
    resting_ecg: RestingEcg
    max_heart_rate: float = Field(ge=40, le=250)
    exercise_angina: bool
    st_depression: float = Field(ge=-5, le=10)
    st_slope: StSlope


class PredictionResponse(BaseModel):
    risk: RiskLevel
    probability: float = Field(ge=0, le=1)
