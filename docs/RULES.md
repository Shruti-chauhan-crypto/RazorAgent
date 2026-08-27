# RazorAgent Development Rules

## Coding Rules

- Use functional React components only.
- Use hooks instead of class components.
- Keep components reusable.
- Follow consistent folder structure.

---

# Frontend Libraries

Allowed

- React
- Tailwind CSS
- Axios
- React Router
- React Icons
- Framer Motion

Avoid

- Redux (Context API is enough.)
- Material UI.
- Bootstrap.
- jQuery.

---

# Backend Libraries

Allowed

- FastAPI
- Uvicorn
- Pydantic
- pymongo
- python-dotenv
- Razorpay SDK

Avoid

- Django
- Flask (only if switching from FastAPI)
- SQL databases

---

# AI Rules

- AI must recommend only products from catalog.
- Do not hallucinate products.
- Keep responses concise.
- Always return structured JSON from AI.

---

# API Rules

Every API should return:

status

message

data

Example

{
  "status":"success",
  "message":"Products fetched",
  "data":[]
}

---

# Error Handling

Frontend

- Loading spinner.
- Toast notification.
- Friendly error messages.

Backend

- Try/Except blocks.
- Validation errors.
- Payment verification errors.
- API timeout handling.

---

# Security Rules

- Keep API keys in .env.
- Never expose secret keys.
- Use Razorpay Test Mode.
- Validate payment signature.

---

# Git Rules

Branch Naming

feature/chat-ui

feature/payment

feature/dashboard

bugfix/cart

Commits

feat: Add cart API

fix: Razorpay signature verification

style: Improve chat UI
