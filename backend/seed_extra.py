from database import SessionLocal, engine
import models

models.Base.metadata.create_all(bind=engine)
db = SessionLocal()

gallery = [
    {"image_url": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80", "caption": "Mountain sunrise", "location": "Swiss Alps"},
    {"image_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", "caption": "Beach escape", "location": "Maldives"},
    {"image_url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80", "caption": "City lights", "location": "Tokyo"},
    {"image_url": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80", "caption": "Desert dunes", "location": "Dubai"},
    {"image_url": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80", "caption": "Alpine lake", "location": "Canada"},
    {"image_url": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80", "caption": "Forest trail", "location": "New Zealand"},
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