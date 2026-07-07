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
    allow_origins=["http://localhost:5173"],
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

# Gallery
@app.get("/gallery", response_model=List[schemas.GalleryImageOut])
def read_gallery(db: Session = Depends(get_db)):
    return crud.get_gallery(db)

# Stats
@app.get("/stats", response_model=List[schemas.StatOut])
def read_stats(db: Session = Depends(get_db)):
    return crud.get_stats(db)

# Blog
@app.get("/blog", response_model=List[schemas.BlogPostOut])
def read_blog_posts(db: Session = Depends(get_db)):
    return crud.get_blog_posts(db)

@app.get("/blog/{post_id}", response_model=schemas.BlogPostOut)
def read_blog_post(post_id: str, db: Session = Depends(get_db)):
    post = crud.get_blog_post(db, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

# FAQ
@app.get("/faqs", response_model=List[schemas.FAQOut])
def read_faqs(db: Session = Depends(get_db)):
    return crud.get_faqs(db)

# Newsletter
@app.post("/newsletter", response_model=schemas.NewsletterOut)
def subscribe(sub: schemas.NewsletterCreate, db: Session = Depends(get_db)):
    return crud.create_subscriber(db, sub)