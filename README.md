# Brainwave — Travel Discovery & Trip Planning Platform

Brainwave is a full-stack travel discovery and trip-planning platform focused on Indian destinations. It gives travelers a single place to browse curated destinations, preview sample itineraries, read travel guides, and submit booking or contact inquiries — backed by real, persisted data instead of static marketing pages.

## Problem it solves

Planning a domestic trip usually means juggling scattered blog posts, inconsistent pricing across sites, and no single reliable source for curated recommendations. Brainwave consolidates discovery (destinations, gallery, blog), trust-building (testimonials, stats, FAQ), and conversion (booking inquiry, newsletter, contact) into one funnel, with a database-backed catalog so content stays consistent and easy to manage.

## Tech stack

**Frontend:** React (Vite), Tailwind CSS, Framer Motion, React Router
**Backend:** FastAPI, SQLAlchemy
**Database:** MySQL

## Project structure

```
brainwave/
├── backend/
│   ├── main.py          # FastAPI app & routes
│   ├── models.py        # SQLAlchemy models
│   ├── schemas.py       # Pydantic schemas
│   ├── crud.py           # DB query logic
│   ├── database.py      # DB connection/session setup
│   ├── seed.py           # Seeds destinations table
│   └── seed_extra.py     # Seeds gallery/stats/blog/faq/newsletter
├── src/
│   ├── components/       # React components (Destinations, Blog, Gallery, etc.)
│   ├── constants/
│   └── App.jsx
└── public/
```

## Getting started

### Backend

```powershell
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file in `backend/` with:

```
DATABASE_URL=mysql+pymysql://root:root@localhost/travel_db
```

Seed the database, then run the API:

```powershell
python seed.py
python seed_extra.py
uvicorn main:app --reload
```

API runs at `http://localhost:8000`.

### Frontend

```powershell
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## API endpoints

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| GET    | `/destinations`      | List all destinations    |
| GET    | `/destinations/{id}` | Get a single destination |
| POST   | `/destinations`      | Add a destination        |
| POST   | `/contact`           | Submit a contact message |
| POST   | `/bookings`          | Submit a booking inquiry |
| GET    | `/gallery`           | List gallery images      |
| GET    | `/stats`             | List site stats          |
| GET    | `/blog`              | List blog posts          |
| GET    | `/blog/{id}`         | Get a single blog post   |
| GET    | `/faqs`              | List FAQs                |
| POST   | `/newsletter`        | Subscribe to newsletter  |
