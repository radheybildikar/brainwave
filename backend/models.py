from sqlalchemy import Column, Integer, String, Text, Float, DateTime, JSON
from sqlalchemy.sql import func
from database import Base

class NewsletterSubscriber(Base):
    __tablename__ = "newsletter_subscribers"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(150), nullable=True)
    email = Column(String(150), nullable=False, unique=True)
    subscribed_at = Column(DateTime(timezone=True), server_default=func.now())
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

class GalleryImage(Base):
    __tablename__ = "gallery_images"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    image_url = Column(String(500), nullable=False)
    caption = Column(String(200))
    location = Column(String(100))

class Stat(Base):
    __tablename__ = "stats"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    label = Column(String(100), nullable=False)
    value = Column(String(50), nullable=False)
    icon = Column(String(50))

class BlogPost(Base):
    __tablename__ = "blog_posts"

    id = Column(String(80), primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    excerpt = Column(String(300))
    content = Column(Text)
    cover_image = Column(String(500))
    author = Column(String(100))
    read_time = Column(String(20))
    published_at = Column(DateTime(timezone=True), server_default=func.now())

class FAQ(Base):
    __tablename__ = "faqs"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    question = Column(String(300), nullable=False)
    answer = Column(Text, nullable=False)
    order = Column(Integer, default=0)
