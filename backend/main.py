from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List

import models, schemas, crud
from database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Travel Site API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "Travel API running"}

# Destinations
@app.get("/destinations", response_model=List[schemas.DestinationOut])
def read_destinations(db: Session = Depends(get_db)):
    return crud.get_destinations(db)

@app.get("/destinations/{dest_id}", response_model=schemas.DestinationOut)
def read_destination(dest_id: str, db: Session = Depends(get_db)):
    dest = crud.get_destination(db, dest_id)
    if not dest:
        raise HTTPException(status_code=404, detail="Destination not found")
    return dest

@app.post("/destinations", response_model=schemas.DestinationOut)
def add_destination(dest: schemas.DestinationCreate, db: Session = Depends(get_db)):
    existing = crud.get_destination(db, dest.id)
    if existing:
        raise HTTPException(status_code=400, detail="Destination already exists")
    return crud.create_destination(db, dest)

# Contact
@app.post("/contact", response_model=schemas.ContactOut)
def submit_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    return crud.create_contact(db, contact)

@app.get("/contact", response_model=List[schemas.ContactOut])
def list_contacts(db: Session = Depends(get_db)):
    return crud.get_contacts(db)

# Bookings
@app.post("/bookings", response_model=schemas.BookingOut)
def submit_booking(booking: schemas.BookingCreate, db: Session = Depends(get_db)):
    return crud.create_booking(db, booking)

@app.get("/bookings", response_model=List[schemas.BookingOut])
def list_bookings(db: Session = Depends(get_db)):
    return crud.get_bookings(db)