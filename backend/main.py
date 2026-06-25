from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

import models
import schemas
from database import engine, SessionLocal

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Brainwave API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def read_root():
    return {"status": "Brainwave API is running"}


@app.post("/signup", response_model=schemas.SignupResponse)
def create_signup(signup: schemas.SignupCreate, db: Session = Depends(get_db)):
    new_signup = models.Signup(
        name=signup.name,
        email=signup.email,
        plan=signup.plan,
    )
    db.add(new_signup)
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=400, detail="Email already signed up")
    db.refresh(new_signup)
    return new_signup


@app.get("/signups", response_model=list[schemas.SignupResponse])
def list_signups(db: Session = Depends(get_db)):
    return db.query(models.Signup).all()