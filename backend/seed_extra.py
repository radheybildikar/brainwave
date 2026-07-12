from database import SessionLocal, engine
import models

models.Base.metadata.create_all(bind=engine)
db = SessionLocal()

gallery = [
    {"image_url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80", "caption": "Sunset by the coast", "location": "Goa"},
    {"image_url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80", "caption": "Backwater cruise", "location": "Kerala"},
    {"image_url": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80", "caption": "Fort and palace views", "location": "Rajasthan"},
    {"image_url": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80", "caption": "Mountain valley", "location": "Himachal Pradesh"},
    {"image_url": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80", "caption": "Timeless monument", "location": "Agra"},
    {"image_url": "https://images.unsplash.com/photo-1464093024816-d9eb25eeaf6c?w=600&q=80", "caption": "High-altitude trails", "location": "Ladakh"},
]

stats = [
    {"label": "Happy Travelers", "value": "12K+", "icon": "users"},
    {"label": "Destinations", "value": "80+", "icon": "map-pin"},
    {"label": "Avg Rating", "value": "4.9", "icon": "star"},
    {"label": "Years Running", "value": "6", "icon": "calendar"},
]

blog_posts = [
    {
        "id": "packing-tips-2026",
        "title": "10 Smart Packing Tips for Long Trips",
        "excerpt": "Pack lighter, travel smarter — the essentials that actually matter.",
        "content": "Packing well is about discipline, not luck. Start with a capsule wardrobe built around 2-3 colors so everything mixes and matches. Roll clothes instead of folding to save space and reduce wrinkles. Always pack a change of clothes in your carry-on in case checked luggage is delayed. Use packing cubes to compress and organize by category. Bring a universal adapter and a portable charger. Limit toiletries to travel sizes and buy the rest at your destination. Keep copies of important documents both physically and digitally. Wear your bulkiest shoes on travel days. Leave 20% of your bag empty for souvenirs. Finally, make a checklist and reuse it for every trip.",
        "cover_image": "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
        "author": "Radhey",
        "read_time": "4 min read"
    },
    {
        "id": "budget-travel-guide",
        "title": "How to Travel More on a Tight Budget",
        "excerpt": "Practical strategies for stretching every travel dollar further.",
        "content": "Budget travel starts with flexible dates — flying midweek or during shoulder season can cut costs significantly. Use fare comparison tools and set price alerts instead of booking on impulse. Consider hostels, guesthouses, or home-swaps over hotels. Cook some of your own meals when staying somewhere with a kitchen. Public transport is almost always cheaper and more authentic than taxis. Look for free walking tours and city passes for major attractions. Travel with a small group to split costs on accommodation and transport. Track your spending daily so small purchases don't add up unnoticed.",
        "cover_image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
        "author": "Radhey",
        "read_time": "5 min read"
    },
    {
        "id": "solo-travel-safety",
        "title": "Solo Travel Safety: What Actually Works",
        "excerpt": "Real precautions experienced solo travelers swear by.",
        "content": "Solo travel safety comes down to preparation, not paranoia. Share your itinerary with someone at home and check in periodically. Keep digital copies of your passport and documents in cloud storage. Trust your instincts about people and places — if something feels off, leave. Avoid displaying expensive items in public. Research neighborhoods before booking accommodation. Learn a few basic phrases of the local language. Keep emergency contacts and local embassy info saved offline. Blend in with local dress norms where relevant. Most importantly, stay aware of your surroundings rather than buried in your phone.",
        "cover_image": "https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=800&q=80",
        "author": "Radhey",
        "read_time": "6 min read"
    },
]

faqs = [
    {"question": "How far in advance should I book?", "answer": "For popular destinations and peak seasons, book 2-3 months ahead. For flexible or off-season trips, 3-4 weeks is usually enough.", "order": 1},
    {"question": "Can I customize an itinerary?", "answer": "Yes, every itinerary shown is a starting template. Reach out through the contact form and we'll tailor it to your dates, budget, and interests.", "order": 2},
    {"question": "What is your cancellation policy?", "answer": "Cancellations made 14+ days before departure are fully refundable. Within 14 days, a partial credit is issued toward a future trip.", "order": 3},
    {"question": "Do you help with visas and documentation?", "answer": "We provide destination-specific visa guidance, but the application itself is handled directly by the traveler with local authorities.", "order": 4},
]

for g in gallery:
    db.add(models.GalleryImage(**g))
for s in stats:
    db.add(models.Stat(**s))
for b in blog_posts:
    existing = db.query(models.BlogPost).filter(models.BlogPost.id == b["id"]).first()
    if not existing:
        db.add(models.BlogPost(**b))
for f in faqs:
    db.add(models.FAQ(**f))

db.commit()
db.close()
print("Extra content seeded successfully.")