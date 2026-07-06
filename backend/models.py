from sqlalchemy import Column, Integer, String, Text, Float, DateTime, JSON
from sqlalchemy.sql import func
from database import Base

class Destination(Base):
    __tablename__ = "destinations"

    id = Column(String(50), primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    tagline = Column(String(200))
    image = Column(String(500))
    duration = Column(String(50))
    price = Column(String(20))
    rating = Column(Float)
    description = Column(Text)
    highlights = Column(JSON)
    best_time = Column(String(100))

class ContactSubmission(Base):
    __tablename__ = "contact_submissions"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(150), nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    destination_id = Column(String(50), nullable=False)
    name = Column(String(100), nullable=False)
    email = Column(String(150), nullable=False)
    travel_date = Column(String(50))
    num_travelers = Column(Integer, default=1)
    notes = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())