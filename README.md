# GigLens — Fairness & Transparency Platform for Gig Workers

GigLens is a web-based platform that analyzes gig‑economy data (earnings, ratings, penalties) to identify potential fairness issues.  
The system provides an automated audit, a fairness score, and a complete appeal submission and review workflow.

---

## Overview

GigLens allows gig workers to upload their earnings, ratings, and penalties CSV files.  
The backend processes these files, runs fairness checks, and returns a summary of issues along with a fairness score.

Users can also submit appeals when they identify mistakes or unfair penalties.  
Admins can review, update, and resolve appeals.

---

## Features

### 1. CSV Upload & Parsing
- Upload Earnings, Ratings, and Penalties CSV files.
- Automatic validation and parsing.

### 2. Fairness Audit Engine
- Detects unusual penalties.
- Identifies rating inconsistencies.
- Highlights low or missing earnings.
- Computes a fairness score based on rule-based analysis.

### 3. Dashboard
- Displays fairness score.
- Provides a summary of flagged issues.
- Links to the appeals system.

### 4. Appeal System
- Users can submit appeals with messages and attachments.
- Appeals stored with timestamps and status.
- Admins can review and update appeals.

### 5. REST API Integration
- Upload API
- Audit API
- Appeal create/read/update APIs

---

## System Architecture

### Frontend (React + Vite)
- Upload Page
- Dashboard (ScoreCard + IssuesList)
- Appeals UI
- Communicates with backend via REST APIs

### Backend (Node.js + Express)
- File upload handling
- CSV parsing utilities
- Rule-based fairness engine
- Appeal storage and management

### Data Layer
- `appeals.json` for appeals
- Temporary storage for uploaded CSVs

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript (ES6)
- CSS
- Axios

### Backend
- Node.js
- Express.js
- Multer (for uploads)
- Custom CSV parser
- Custom rule engine

---

Both servers must run simultaneously.

---

## Usage Flow

1. Open the frontend UI.
2. Upload Earnings, Ratings, and Penalties CSV files.
3. Click Analyze.
4. View Fairness Score and flagged issues.
5. Submit an appeal if needed.
6. Admin can update appeal status.

---

## Challenges Faced

- Managing different CSV formats.
- Designing consistent rule-based fairness detection logic.
- Solving merge conflicts in JSON storage.
- Integrating React Router without breaking layout.
- Ensuring stable communication between frontend and backend.

---

## Future Enhancements

- Machine learning-based fairness scoring.
- Cloud storage for uploads and appeals.
- Real database integration (MongoDB, PostgreSQL).
- Multi-language support.
- Advanced analytics dashboards.

---

## Contributors
- Manosh Suresh  
- Ruhani Raman  
- Eesha Hemani  

---

## License
This project is for educational purposes.
