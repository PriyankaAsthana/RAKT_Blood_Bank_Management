<h1 align="center">🩸 RAKT – Token & Location-Based Blood Bank Management System</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Under%20Review-blueviolet?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Tech%20Stack-MERN%20|%20AI%20|%20GeoJSON-red?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge"/>
</p>

<p align="center">
  <i>Smart. Scalable. Life-Saving.</i>  
</p>

---

## 🌍 Overview

**RAKT (रक्त)** is a **tokenized, AI-augmented blood bank management system** built using the **MERN stack** with **geospatial intelligence** and **AI-powered donor matching**.

It reimagines how blood donation and requests are coordinated — using **GPS, AI, and token automation** to ensure faster, safer, and transparent workflows.

<p align="center">
  <img src="https://github.com/yourusername/RAKT-BBMS/assets/placeholder/demo.gif" alt="RAKT Demo" width="800"/>
</p>

---

## 💡 Core Highlights  

✨ **Token-Based Workflow** – Each donation and request is managed via unique tokens for traceability.  
🧭 **GPS Integration** – Real-time donor and blood bank tracking using Google Maps API & GeoJSON.  
🧠 **AI-Driven Matching** – Recommends the most compatible donor based on proximity, blood type & availability.  
📊 **Smart Dashboard** – Analytics and data visualization for admins, donors, and hospitals.  
🔐 **Role-Based Security** – JWT authentication & protected API routes.  
💬 **Automated Notifications** – Real-time updates through email and SMS alerts.  

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-------------|
| 💻 Frontend | React.js, Tailwind CSS, Axios |
| ⚙️ Backend | Node.js, Express.js |
| 🧠 AI Module | Python (Flask API), scikit-learn |
| 🗄️ Database | MongoDB Atlas |
| 🗺️ Geospatial | Google Maps API, GeoJSON |
| 🔧 Tools | Git, Postman, VS Code |

---

## ⚙️ Setup & Installation  

# Clone the repo
git clone https://github.com/yourusername/RAKT-BBMS.git

# Move into project folder
cd RAKT-BBMS

# Install dependencies
npm install

# Setup frontend
cd client && npm install

# Create .env file and add:
# MONGO_URI=your_mongo_connection
# JWT_SECRET=your_secret
# GOOGLE_API_KEY=your_api_key

# Run backend
npm start

# Run frontend
cd client && npm run dev
🧭 System Architecture
mermaid
Copy code
graph TD;
    A[Frontend: React] -->|REST API Calls| B[Backend: Node/Express]
    B --> C[(MongoDB Atlas)]
    B --> D[AI Service: Flask API]
    D --> E[Geo APIs: Google Maps + GeoJSON]
🧪 AI Integration
python
Copy code
# Example: Donor Recommendation Module
model = RandomForestClassifier()
model.fit(X_train, y_train)

def suggest_donor(blood_group, location):
    preds = model.predict([blood_group, location])
    return preds
📈 Future Roadmap
 🧬 AI Predictive Forecasting – Predict future blood demand using hospital datasets.

 ☁️ Cloud Deployment – Deploy on AWS/GCP for global scalability.

 🔗 Blockchain Traceability – Immutable tracking for blood unit provenance.

 🤖 Chatbot Integration – Donor support via NLP assistant.

🧠 Research Context
RAKT: A Token and Location-Based Blood Bank Management System
Manuscript under review (2025) – explores the intersection of AI, geospatial intelligence, and healthcare logistics.
Aligns with UN SDG 3 (Good Health) and SDG 9 (Innovation & Infrastructure).

🧑‍💻 Author
Priyanka Asthana
BTech (Honors) in Computer Science & Engineering | Minor in Robotics
📍 Varanasi, India
📫 asthanapriyanka829@gmail.com
🔗 Portfolio • LinkedIn • GitHub ↗︎

⭐ Acknowledgements
NASA ARSET – for geospatial learning resources

Harvard CS50x – for CS fundamentals

Oracle AI Certification – for applied AI insights

<h3 align="center">🌟 If you found this project inspiring, give it a ⭐ and share to support open innovation 🌟</h3> <p align="center"> <img src="https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake.svg" alt="snake animation"/> </p> 
