# 🎯 Quiz App - Angular & Spring Boot

A full-stack Quiz Management System. Admin can create tests, add questions, and view results. Users can take quizzes and check their scores instantly.

### 🔗 Repository
https://github.com/pramodkumar0604/quiz_app

### ✨ Key Features

**Admin Module:**
- Admin Authentication (JWT)
- Create & Manage Tests
- Add / Delete Questions with Options
- View All User Results
- Dashboard with Stats

**User Module:**
- User Registration & Login
- View Available Quizzes
- Take Test with Timer
- Instant Result Calculation
- View Previous Test History

### 🛠️ Tech Stack
- **Frontend:** Angular 17, TypeScript, NG-ZORRO Ant Design, SCSS
- **Backend:** Spring Boot, Java, Spring Security, JWT
- **Database:** MySQL
- **Build Tool:** Angular CLI, Maven

### 🔑 Demo Login (Frontend Mock Mode)

Backend is not deployed, so frontend runs in mock mode for demo purpose. You can login with any password.

**Admin Login:**
> Email: `admin@gmail.com`
> Password: `12345` (any password works)

**User Login:**
> Email: `user@gmail.com`
> Password: `12345` (any password works)

Logic: If email contains `admin` keyword, it will redirect to Admin Dashboard, otherwise to User Dashboard.

### 🚀 How to Run This Project

**Frontend Only (For Quick Demo):**
```bash
git clone https://github.com/pramodkumar0604/quiz_app.git
cd quiz_app
npm install
ng serve
