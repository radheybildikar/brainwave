from database import SessionLocal, engine
import models

models.Base.metadata.create_all(bind=engine)

db = SessionLocal()

# Clear existing destinations first
db.query(models.Destination).delete()
db.commit()

destinations = [
    {
        "id": "goa",
        "name": "Goa",
        "tagline": "Sun, Sand and Susegad",
        "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
        "duration": "4-6 days",
        "price": "Rs 12,000",
        "rating": 4.7,
        "description": "Goa mixes Portuguese-era charm with laid-back beach life. From the lively shacks of Baga to the quiet shores of Palolem, it offers something for every kind of traveler, along with vibrant nightlife and seafood.",
        "highlights": ["Baga and Calangute beaches", "Fort Aguada sunset", "Old Goa churches", "Spice plantation tour"],
        "best_time": "November to February"
    },
    {
        "id": "kerala",
        "name": "Kerala Backwaters",
        "tagline": "God's Own Country",
        "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
        "duration": "5-7 days",
        "price": "Rs 18,000",
        "rating": 4.9,
        "description": "Kerala's backwaters offer a slow, scenic escape through palm-lined canals aboard traditional houseboats, paired with tea plantations in Munnar and wildlife in Periyar.",
        "highlights": ["Alleppey houseboat stay", "Munnar tea gardens", "Periyar wildlife sanctuary", "Fort Kochi walk"],
        "best_time": "September to March"
    },
    {
        "id": "rajasthan",
        "name": "Jaipur, Rajasthan",
        "tagline": "The Pink City",
        "image": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
        "duration": "5-8 days",
        "price": "Rs 15,500",
        "rating": 4.8,
        "description": "Jaipur showcases royal Rajasthani heritage through its forts, palaces, and bazaars. Combine it with Udaipur's lakes and Jodhpur's blue streets for a complete desert-state circuit.",
        "highlights": ["Amber Fort", "City Palace and Hawa Mahal", "Jaipur bazaars", "Chokhi Dhani cultural evening"],
        "best_time": "October to March"
    },
    {
        "id": "himachal",
        "name": "Manali, Himachal Pradesh",
        "tagline": "Gateway to the Himalayas",
        "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
        "duration": "5-7 days",
        "price": "Rs 14,000",
        "rating": 4.8,
        "description": "Manali is a base for mountain adventure, from paragliding and river rafting to scenic drives up to Rohtang Pass and Solang Valley, framed by snow-capped peaks year-round.",
        "highlights": ["Solang Valley", "Rohtang Pass drive", "Old Manali cafes", "River rafting in Kullu"],
        "best_time": "March to June, or Dec-Jan for snow"
    },
]

for d in destinations:
    db.add(models.Destination(**d))

db.commit()
db.close()
print("Seeded Indian destinations successfully.")