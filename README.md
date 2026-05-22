# VerifyKE

VerifyKE is a modern verification and authentication web application built with React and Firebase.  
The project is designed to help users securely sign up, log in, and manage authentication with a clean and responsive user interface.

---

## Features

- User Login & Signup
- Firebase Authentication
- Google Sign-In
- GitHub Sign-In
- Responsive Design
- Protected Routes
- Modern UI with React

---

## Tech Stack

- React.js
- Firebase
- JavaScript
- CSS
- Vite

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/verifyke.git
```

### 2. Open the project folder

```bash
cd verifyke
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

---

## Firebase Setup

1. Create a project on Firebase Console  
2. Enable:
   - Email/Password Authentication
   - Google Authentication
   - GitHub Authentication

3. Create a `.env` file in the root folder and add:

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

---

## Build for Production

```bash
npm run build
```

---

## Deployment

You can deploy the project easily using:

- Vercel
- Netlify

---

## Folder Structure

```bash
src/
 ├── components/
 ├── pages/
 ├── firebase.js
 ├── App.jsx
 └── main.jsx
```

---

## Future Improvements

- User Dashboard
- Email Verification
- Password Reset
- Dark Mode
- Admin Panel

---

## Author

Created by Nathan Kiprono

---

## License

This project is licensed under the MIT License.
