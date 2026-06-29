# 🎬 Movie Finder App

A responsive Movie Discovery web application built using **Next.js**, **OMDb API**, and **Tailwind CSS**.  
Users can search movies, view details, manage favorites, and navigate results using pagination.

---

## 📸 Screenshots

<img width="959" height="478" alt="Screenshot 2026-06-21 025616" src="https://github.com/user-attachments/assets/b77a8e23-3367-467c-8d07-9e1a503734ac" />


<img width="959" height="474" alt="Screenshot 2026-06-21 025628" src="https://github.com/user-attachments/assets/f4a57eec-bd4a-4398-adad-57c8a764b922" />


---

## 🛠 Tech Stack

- Next.js (App Router)
- React.js
- TypeScript
- Tailwind CSS
- Axios
- OMDb API
- localStorage (for favorites)
- Sonner / Toast notifications

---

## 📌 Features

### 🔍 Search Movies
- Real-time search with debounce
- Search results update as user types

### 🎬 Movie Listing
- Responsive grid layout
- Displays poster, title, and year

### 📄 Movie Details
- Click on a movie to open detailed modal
- Shows plot, rating, genre, runtime, etc.

### ⭐ Favorites System
- Add/remove favorites
- Stored in localStorage
- Persists after page reload

### 📊 Pagination
- Next / Previous navigation
- Page-wise movie browsing

### ⚡ UI States
- Loading state with spinner
- Error handling with toast notifications
- Empty state ("No movies found")

---


## 🚀 Live Demo
[Click here to visit project](https://movie-recommandation-assignment.vercel.app)

---


## ⚠️ API Note

The assignment suggested using TMDB API.  
Due to persistent access issues during development, **OMDb API** was used instead.

OMDb returns 10 results per page by default, so pagination follows the API’s native structure.

---

## 📁 Project Structure
```bash
src/
├── app/
├── components/
│ ├── MovieCard.tsx
│ ├── MovieModal.tsx
│ └── Pagination.tsx
├── hooks/
├── lib/
└── types/
```

---

## ⚙️ Installation & Setup


### 1. Clone the repository

```bash
https://github.com/Sarvesh7617/movie-recommandation-assignment.git
```

### 2. Navigate to project directory


  ```bash
    cd movie-discovery-web-app
  ```


### 3. Install dependencies

  ```bash
  npm install
  ```

### 4. ⚙️ Environment Variables

Create a .env file in the root of your project and add TMDB api key:
  ```env
  NEXT_PUBLIC_OMDB_API_KEY=your_api_key
  ```


### 5. Run development server
  ```bash
  npm run dev
  ```
