from database import SessionLocal, engine
import models

models.Base.metadata.create_all(bind=engine)

db = SessionLocal()

destinations = [
    {
        "id": "bali",
        "name": "Bali, Indonesia",
        "tagline": "Island of the Gods",
        "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
        "duration": "5-7 days",
        "price": "$650",
        "rating": 4.8,
        "description": "Bali blends lush rice terraces, volcanic landscapes, and vibrant beach towns. From spiritual temples in Ubud to surf breaks in Canggu, it is built for both relaxation and adventure.",
        "highlights": ["Tegallalang Rice Terraces", "Uluwatu Temple sunset", "Nusa Penida day trip", "Ubud Monkey Forest"],
        "best_time": "April to October (dry season)"
    },
    {
        "id": "santorini",
        "name": "Santorini, Greece",
        "tagline": "Whitewashed Cliffside Views",
        "image": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
        "duration": "4-6 days",
        "price": "$900",
        "rating": 4.9,
        "description": "Famous for its blue-domed churches and caldera views, Santorini is one of the most photographed islands in the world, perfect for slow mornings and sunset watching.",
        "highlights": ["Oia sunset viewpoint", "Fira to Oia coastal walk", "Red Beach", "Wine tasting at local vineyards"],
        "best_time": "May to September"
    },
    {
        "id": "kyoto",
        "name": "Kyoto, Japan",
        "tagline": "Timeless Temples and Gardens",
        "image": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
        "duration": "5-8 days",
        "price": "$780",
        "rating": 4.9,
        "description": "Kyoto preserves centuries of Japanese tradition through its temples, tea houses, and bamboo groves, offering a quieter, deeply cultural counterpoint to Tokyo.",
        "highlights": ["Fushimi Inari Shrine", "Arashiyama Bamboo Grove", "Kinkaku-ji Golden Pavilion", "Gion district evening walk"],
        "best_time": "March-April (cherry blossoms) or Oct-Nov (autumn colors)"
    }
]

for d in destinations:
    existing = db.query(models.Destination).filter(models.Destination.id == d["id"]).first()
    if not existing:
        db.add(models.Destination(**d))

db.commit()
db.close()
print("Seeded destinations successfully.")