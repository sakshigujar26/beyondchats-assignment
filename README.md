# BeyondChats Full Stack Assignment

This repository contains my submission for the **BeyondChats – Full Stack Web Developer Intern Assignment**.  
The project demonstrates scraping, backend APIs, automation using scripts, and a simple React frontend.

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Frontend:** React.js
- **APIs & Tools:** Axios, Cheerio, Serper API, LLM API

---

## Phase 1: Blog Scraping & CRUD APIs

- Scraped the **5 oldest blog articles** from the BeyondChats blog section.
- Extracted article title and full content.
- Stored articles in MongoDB.
- Implemented full **CRUD APIs** for articles:
  - Create article
  - Get all articles
  - Get article by ID
  - Update article
  - Delete article

---

## Phase 2: Article Enrichment Script

- Fetches articles from backend APIs.
- Searches the article title on Google using **Serper API**.
- Fetches the top 2 ranking related articles.
- Scrapes content from those articles.
- Uses an **LLM API** to rewrite and improve the original article content.
- Updates the article using backend APIs.
- Stores reference links used to generate the updated content.

---

## Phase 3: Frontend (React)

- Displays articles in a clean, simple, and responsive UI.
- Shows both **original** and **updated** article content.
- Includes **Read More / Show Less** functionality.
- Displays reference links for updated articles.
- Limited to showing **5 articles** as per task requirement.

---

## Project Structure

beyondchats-assignment/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ └── utils/
│ └── package.json
│
├── scripts/
│ └── phase2/
│
├── frontend/
│ ├── src/
│ └── package.json
│
└── README.md


---

## How to Run the Project Locally

### Backend

```bash
cd backend
npm install
npm start

Backend runs on:

http://localhost:5000

Frontend

cd frontend
npm install
npm start

Frontend runs on:

http://localhost:3000

Environment Variables

Create a .env file in the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
SERPER_API_KEY=your_serper_api_key
OPENAI_API_KEY=your_openai_api_key

