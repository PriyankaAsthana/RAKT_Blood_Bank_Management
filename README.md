<!-- RAKT: Blood Bank Management System README -->
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Poppins&pause=1000&color=F70000&center=true&vCenter=true&width=700&lines=🩸+RAKT+-+Token+%26+Location-Based+Blood+Bank+Management+System;AI-Driven+%7C+Geo-Intelligent+%7C+MERN+Stack+Innovation" alt="Typing Animation" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Under%20Review-blueviolet?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Tech%20Stack-MERN%20%7C%20AI%20%7C%20GeoJSON-red?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Made%20with❤️by-Priyanka%20Asthana-pink?style=for-the-badge"/>
</p>

---

<h3 align="center">🚀 A Next-Gen AI & Geospatial Platform to Revolutionize Blood Management</h3>

<p align="center">
  <img src="https://github.com/yourusername/RAKT-BBMS/assets/placeholder/demo.gif" alt="RAKT Demo" width="750"/>
</p>

---

## 🌟 Overview  

**RAKT (रक्त)** is a **Token & Location-Based Blood Bank Management System** leveraging **AI + MERN + Geo-Intelligence**.  
It eliminates manual delays by **automating donor matching, geolocation tracking, and tokenized blood exchange.**

<p align="center">
  <img src="https://img.shields.io/badge/Innovation-Lifesaving-red?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Focus-SDG%203%20Good%20Health-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/AI%20Module-Python%20Flask-orange?style=for-the-badge"/>
</p>

---

## ✨ Key Features

| 🚀 Feature | 💡 Description |
|-------------|----------------|
| 🩸 **Tokenized Requests** | Every donation and request is traceable through unique tokens. |
| 🧭 **Real-Time Location Tracking** | Google Maps & GeoJSON integration for nearby donor mapping. |
| 🧠 **AI-Powered Matching** | Suggests the best donor via blood type, distance & availability. |
| 🔐 **JWT Security** | Multi-role authentication for Admin, Donor, and Hospital. |
| 📊 **Smart Dashboards** | Role-based analytics, donor history & availability heatmaps. |
| 📩 **Auto Notifications** | Instant alerts through Email and SMS APIs. |

---

<h2 align="center">🧭 System Architecture</h2>

graph TD;
    A[Frontend: React + Tailwind] -->|REST API| B[Backend: Express + Node]
    B --> C[(MongoDB Atlas)]
    B --> D[AI Engine: Python + Flask]
    D --> E[Geo APIs: Google Maps + GeoJSON]
    C --> F[Admin Dashboard & Analytics]
🧱 Tech Stack
<p align="center"> <img src="https://skillicons.dev/icons?i=react,nodejs,express,mongodb,python,flask,git,tailwind,vscode,postman&theme=dark" /> </p>
⚙️ Installation

# Clone repository
git clone https://github.com/yourusername/RAKT-BBMS.git

# Install dependencies
npm install && cd client && npm install

# Add environment variables in .env
MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret
GOOGLE_API_KEY=your_api_key

# Run backend
npm start

# Run frontend
cd client && npm run dev
<details> <summary><b>🧠 AI Matching Module (click to expand)</b></summary>
python
Copy code
from sklearn.ensemble import RandomForestClassifier
import numpy as np

model = RandomForestClassifier()
model.fit(X_train, y_train)

def suggest_donor(blood_group, location):
    prediction = model.predict([[blood_group, location]])
    return prediction
</details>
🔮 Future Roadmap
✅ Phase I – MERN Stack core + Token System
🚧 Phase II – AI donor recommendation engine
🌐 Phase III – Cloud deployment + Geospatial mapping
💫 Phase IV – Blockchain-based traceability
🤖 Phase V – NLP chatbot for donor assistance

📊 UI Snapshots
<p align="center"> <img src="https://github.com/yourusername/RAKT-BBMS/assets/placeholder/dashboard.gif" width="700"/> <br/> <sub><i>Dynamic dashboards and AI-powered donor matching in action</i></sub> </p>
🧠 Research Context
RAKT: A Token & Location-Based Blood Bank Management System (2025)
Combines AI-driven logistics, geospatial analytics, and tokenized data flow to enhance medical supply chain transparency.
Under peer review (2025). Aligns with UN SDG 3 – Good Health & Well-being and SDG 9 – Industry, Innovation & Infrastructure.

👩‍💻 Author
Priyanka Asthana
🎓 B.Tech (Hons) CSE | Minor in Robotics
📍 India | 🌐 Portfolio | 💼 LinkedIn | 💻 GitHub
📧 asthanapriyanka829@gmail.com

<h3 align="center">🌟 Show some ❤️ by starring the repo! 🌟</h3> <p align="center"> <img src="https://github.com/Platane/snk/raw/output/github-contribution-grid-snake.svg" alt="Snake animation" /> </p> <p align="center"> <img src="https://raw.githubusercontent.com/itsZed0/itsZed0/main/dino.gif" alt="dino" width="700"/> </p>
