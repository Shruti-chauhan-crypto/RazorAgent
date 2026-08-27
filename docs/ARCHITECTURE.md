# RazorAgent Architecture

## High-Level App Flow

Customer
   │
   ▼
React Chat Interface
   │
   ▼
FastAPI Backend
   │
   ├── AI Recommendation Engine
   ├── Product Catalog Service
   ├── Cart Service
   ├── Razorpay Payment Service
   └── MongoDB Database
   │
   ▼
Merchant Dashboard

---

# User Journey

1. Customer opens chat.
2. Customer asks for a product.
3. AI understands intent.
4. Backend searches catalog.
5. AI recommends products.
6. Customer adds product to cart.
7. Customer clicks Checkout.
8. Razorpay Checkout opens.
9. Payment succeeds.
10. Order saved in database.
11. Dashboard updates.

---

# System Components

## Frontend

- Landing Page
- Chat Screen
- Cart Drawer
- Checkout Page
- Merchant Dashboard

## Backend APIs

GET /products

POST /chat

POST /recommend

POST /cart

POST /create-order

POST /verify-payment

GET /orders

GET /dashboard

---

# Database Collections

products

users

orders

payments

cart

---

# Folder Structure

RazorAgent

docs/

frontend/
  src/
    assets/
    components/
    pages/
    hooks/
    context/
    services/
    utils/

backend/
  app/
    api/
    services/
    models/
    database/
    prompts/
    utils/

database/
  seed_products.json

README.md

.env.example

---

# Tech Stack

Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios

Backend

- FastAPI
- Python
- Pydantic

Database

- MongoDB Atlas

AI

- Gemini API (Free Tier)
- Prompt Engineering

Payment

- Razorpay Orders API
- Razorpay Checkout API
- Razorpay Signature Verification

Deployment

- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas
