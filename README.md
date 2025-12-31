# BeyondChats Blog Automation Platform

This project is a full-stack application built as part of the BeyondChats assignment.

It scrapes blog articles, stores them in a database, enhances content using AI, and displays them through a React frontend.

---

## 🚀 Features

- Scrapes blog articles from BeyondChats website
- Stores articles in MongoDB
- Supports CRUD operations on articles
- AI-enhanced article content (optional update flow)
- Displays original and updated articles
- Clean, simple React UI

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Axios
- Cheerio

### Frontend
- React (Create React App)
- Axios
- React Markdown

---

## 📂 Project Structure

beyondchats-assignment/
│
├── backend/ # Express + MongoDB API
├── frontend/ # React frontend
├── scripts/ # Scraper & AI scripts
└── README.md


---

## ▶️ How to Run Locally

### 1️⃣ Backend Setup

```bash
cd backend
npm install
npm start

Backend runs on:

http://localhost:5000

2️⃣ Frontend Setup

cd frontend
npm install
npm start

Frontend runs on:

http://localhost:3000

🌐 Live Demo

Frontend deployed on Vercel:

👉 https://beyondchats-frontend-henna.vercel.app

Note:
The backend API is not deployed to the cloud.
To view articles, please run the backend locally as described above.
⚠️ Important Notes

    Only 5 articles are intentionally fetched as per assignment requirement

    Backend APIs are fully functional locally

    UI focuses on simplicity and readability

    Default CRA README was replaced intentionally

✅ Assignment Status

Scraper implemented

Backend APIs complete

Frontend connected

Live demo deployed

    README documented

👤 Author

Sakshi Gujar

