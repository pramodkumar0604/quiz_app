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

WITHOUT BACKEND HOW WE CAN DO?

originally frontend backend tho REST API (`/api/auth/login`) call chestundi. Backend lekunda demo kosam nenu *Mock Authentication* implement chesa
>
> 1.  *AuthService ni bypass chesa:* `authService.login()` backend ki HTTP call vellakunda, `localStorage` lo dummy JWT token `dummy-token-12345` and user role store chesa.
> 2.  *Role-based navigation:* Email lo `admin` word unte `admin/dashboard` ki, lekapothe `user/dashboard` ki `router.navigate()` tho pampincha.
> 3.  *TestService lo data:* Backend nundi tests ravu kabatti, `localStorage` lo `q_tests` ane key tho tests array store chesi, CRUD operations andulo ne chesa. So refresh chesina data povadu.
> 4.  *Path fix:* Angular lo `../../../` relative path issue valla module not found error vachindi sir, dani `../../../../` ga correct chesa, appudu compile ayindi.
>
> Full backend integrate cheyali ante `BASIC_URL = http://localhost:8080/` petti Spring Boot run cheste same code backend tho work avutundi sir, code lo change avasaram ledu, only `submitForm()` lo mock teesi original HTTP call pedithe chalu."

*One line lo cheppali ante:*
"backend lekunda frontend ni independent ga run avadaniki localStorage ni mock database la use chesa sir"

*cross question - "Data ela store avutundi?" ante:*
" `TestService` lo BehaviorSubject use chesi tests ni `localStorage.setItem('q_tests', JSON.stringify(tests))` tho browser lo ne save chesa sir, so backend DB lekunna data persist avutundi"


