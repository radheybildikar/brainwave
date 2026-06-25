from pydantic import BaseModel, EmailStr
from datetime import datetime


class SignupCreate(BaseModel):
    name: str
    email: EmailStr
    plan: str | None = None


class SignupResponse(BaseModel):
    id: int
    name: str
    email: str
    plan: str | None
    created_at: datetime

    class Config:
        from_attributes = True