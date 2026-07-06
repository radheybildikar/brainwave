from sqlalchemy.orm import Session
import models, schemas

# Destinations
def get_destinations(db: Session):
    return db.query(models.Destination).all()

def get_destination(db: Session, dest_id: str):
    return db.query(models.Destination).filter(models.Destination.id == dest_id).first()

def create_destination(db: Session, dest: schemas.DestinationCreate):
    db_dest = models.Destination(**dest.model_dump())
    db.add(db_dest)
    db.commit()
    db.refresh(db_dest)
    return db_dest

# Contact
def create_contact(db: Session, contact: schemas.ContactCreate):
    db_contact = models.ContactSubmission(**contact.model_dump())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

def get_contacts(db: Session):
    return db.query(models.ContactSubmission).order_by(models.ContactSubmission.created_at.desc()).all()

# Bookings
def create_booking(db: Session, booking: schemas.BookingCreate):
    db_booking = models.Booking(**booking.model_dump())
    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    return db_booking

def get_bookings(db: Session):
    return db.query(models.Booking).order_by(models.Booking.created_at.desc()).all()