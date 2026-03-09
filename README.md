# 📚 CourseHub — Online Course Management Dashboard
### Angular 17 Semester Project

---

## 🚀 Quick Start

### Step 1 — Install dependencies (one time only)
```
npm install
```

### Step 2 — Start JSON Server (Terminal 1)
```
npm run server
```

### Step 3 — Start Angular app (Terminal 2)
```
npm start
```

Open: **http://localhost:4200**

> **Windows shortcut**: Double-click `START.bat` after running `npm install`

---

## 📁 Project Structure

```
src/app/
├── models/          → Course, Student, Enrollment, User interfaces
├── services/        → CourseService, StudentService, EnrollmentService, AuthService
├── guards/          → AuthGuard (route protection)
├── interceptors/    → HttpErrorInterceptor (global error handling)
├── pipes/           → filterCourse (filter by category/level)
├── directives/      → highlightNew (highlights new/top-rated courses)
├── material/        → Angular Material module
└── components/
    ├── dashboard/   → Analytics dashboard with stats cards
    ├── course-list/ → Course CRUD + dialog forms
    ├── course-detail→ Full syllabus + enrolled students table
    ├── student-list → Student CRUD + Material table
    └── enrollment/  → Reactive form enrollment + enrollments table
```

---

## 🗺️ Routes

| URL | Page | Guard |
|---|---|---|
| /dashboard | Analytics Dashboard | None |
| /courses | Course List (CRUD) | AuthGuard |
| /courses/:id | Course Detail + Syllabus | AuthGuard |
| /students | Student List (CRUD) | AuthGuard |
| /enrollments | Enrollment Management | AuthGuard |

---

## ✅ Features Implemented

- Angular 17 with TypeScript interfaces for Course, Student, Enrollment
- Full CRUD using MatDialog (add, edit, delete) for Courses and Students
- Reactive Forms with validation for enrollment and student registration
- JSON Server mock backend with REST API (GET, POST, PUT, DELETE)
- RxJS forkJoin for parallel HTTP calls
- AuthGuard protecting instructor/admin routes
- Custom pipe: filterCourse (by category and level)
- Custom directive: highlightNew (teal border for new, gold for top-rated)
- HTTP Error Interceptor with MatSnackBar feedback
- Angular Material: MatTable, MatCard, MatDialog, MatToolbar, MatSidenav, MatTabs, MatProgressBar
- Responsive design with sidebar navigation
