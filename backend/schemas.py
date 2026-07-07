from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime

# Destination
class DestinationBase(BaseModel):
    id: str
    name: str
    tagline: Optional[str] = None
    image: Optional[str] = None
    duration: Optional[str] = None
    price: Optional[str] = None
    rating: Optional[float] = None
    description: Optional[str] = None
    highlights: Optional[List[str]] = None
    best_time: Optional[str] = None

class DestinationCreate(DestinationBase):
    pass

class DestinationOut(DestinationBase):
    class Config:
        from_attributes = True

# Contact
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactOut(ContactCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Booking
class BookingCreate(BaseModel):
    destination_id: str
    name: str
    email: EmailStr
    travel_date: Optional[str] = None
    num_travelers: int = 1
    notes: Optional[str] = None

class BookingOut(BookingCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Gallery
class GalleryImageOut(BaseModel):
    id: int
    image_url: str
    caption: Optional[str] = None
    location: Optional[str] = None

    class Config:
        from_attributes = True

# Stats
class StatOut(BaseModel):
    id: int
    label: str
    value: str
    icon: Optional[str] = None

    class Config:
        from_attributes = True

# Blog
class BlogPostBase(BaseModel):
    id: str
    title: str
    excerpt: Optional[str] = None
    content: Optional[str] = None
    cover_image: Optional[str] = None
    author: Optional[str] = None
    read_time: Optional[str] = None

class BlogPostOut(BlogPostBase):
    published_at: datetime

    class Config:
        from_attributes = True

# FAQ
class FAQOut(BaseModel):
    id: int
    question: str
    answer: str
    order: int

    class Config:
        from_attributes = True

# Newsletter
class NewsletterCreate(BaseModel):
    email: EmailStr

class NewsletterOut(NewsletterCreate):
    id: int
    subscribed_at: datetime

    class Config:
        from_attributes = True