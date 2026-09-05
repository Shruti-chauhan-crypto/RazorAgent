# 🤖 RazorAgent — AI Merchant Growth & Shopping Assistant

> An AI-powered shopping assistant built for the **Razorpay AI Buildathon** that helps users discover products, compare options, manage carts, and complete secure payments through Razorpay Checkout.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-Python-green?logo=fastapi)
![Razorpay](https://img.shields.io/badge/Razorpay-Payment-blueviolet?logo=razorpay)
![Gemini](https://img.shields.io/badge/Gemini-AI-orange?logo=google)

---

## 🌟 Project Overview

RazorAgent is a full-stack AI shopping assistant that combines **Google Gemini AI**, **FastAPI**, **React**, and **Razorpay** to create an intelligent shopping experience.

Users can ask for product recommendations in natural language (for example, *"White sneakers under ₹3000"*), receive AI-curated results, add products to their cart, and pay securely using Razorpay.

---

## ✨ Features

### 🛍️ AI Shopping Assistant
- Natural language product recommendations.
- Budget-based filtering.
- Bundle and offer suggestions.
- AI-powered shopping advice using Gemini.

### 🛒 Smart Cart
- Add / Remove products.
- Quantity management.
- Coupon support (`WELCOME10`).
- Cart total calculation.

### 💳 Razorpay Checkout
- Secure Razorpay payment gateway.
- Order creation API.
- Payment verification.
- Success and failure notifications.

### 📊 Merchant Dashboard
- KPI cards.
- Revenue analytics.
- Category sales chart.
- Top-selling products.
- AI business insights.

### 🔐 Authentication
- Merchant Signup/Login.
- JWT Authentication.
- Protected Routes.
- Password hashing with Passlib.

### 🎨 Modern UI
- Dark & Light Theme.
- Responsive Design.
- Toast Notifications.
- Loading Skeletons.
- Custom Empty States.

---

## 🧱 Tech Stack

| Frontend | Backend | APIs |
|----------|---------|------|
| React + Vite | FastAPI | Gemini AI |
| Tailwind CSS | Python | Razorpay API |
| React Router | JWT Auth | Google AI API |
| React Hot Toast | Passlib + Bcrypt | Axios |

---

## 📂 Project Structure

```text
RazorAgent/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── api/
│   │   ├── utils/
│   │   └── data/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── config.py
│   │   └── main.py
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd RazorAgent
```

### 2️⃣ Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

Swagger Docs:

```text
http://127.0.0.1:8000/docs
```

### 3️⃣ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 🔑 Environment Variables

### Backend `.env`

```env
APP_NAME=RazorAgent API
APP_VERSION=1.0.0

FRONTEND_URL=http://localhost:5173

SECRET_KEY=your_secret_key

GEMINI_API_KEY=your_gemini_api_key

RAZORPAY_KEY_ID=rzp_test_xxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxx
```

### Frontend `.env`

```env
VITE_API_BASE_URL=http://127.0.0.1:8000

VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxx
```

---

## 📸 Screenshots

> Add screenshots after deployment.

### 🏠 Home Page

<!-- Add screenshot -->

### 🤖 AI Shopping Chat

<!-- Add screenshot -->

### 📊 Dashboard

<!-- Add screenshot -->

### 🛒 Shopping Cart

<!-- Add screenshot -->

### 💳 Razorpay Checkout

<!-- Add screenshot -->

---

## 🔄 API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/health` | Backend health check |
| `/auth/signup` | Merchant registration |
| `/auth/login` | Merchant login |
| `/ai/chat` | AI shopping assistant |
| `/analytics/dashboard` | Dashboard analytics |
| `/payment/create-order` | Razorpay order creation |
| `/payment/verify` | Razorpay payment verification |
| `/orders` | Merchant orders |

---

## 🎯 AI Use Cases

- White sneakers under ₹3000.
- Best earbuds below ₹1500.
- College backpack recommendations.
- Budget shopping bundles.
- Merchant growth suggestions.

---

## 📈 Future Improvements

- Wishlist.
- Voice Shopping Assistant.
- Order Tracking.
- AI Price Comparison.
- Personalized Recommendations.
- Inventory Management.

---

## 👩‍💻 Author

**Shruti Chauhan**

B.Tech CSE (AI/ML) | Full Stack Developer

GitHub: https://github.com/Shruti-chauhan-crypto

---

## 🏆 Built For

**Razorpay AI Buildathon 2026**

An AI-powered merchant growth and shopping assistant integrating Gemini AI with Razorpay Payments.
