# Luxury Video App

A luxury video app built with Next.js, TailwindCSS, and Firebase.

## Setup

1. Clone the repository: `git clone https://github.com/your-username/luxury-video-app.git`
2. Install dependencies: `npm install`
3. Create a Firebase project and enable the Firebase Authentication and Realtime Database.
4. Create a Pexels API account and obtain an API key.
5. Create a `.env` file with the following environment variables:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `PEXELS_API_KEY`
6. Run the development server: `npm run dev`

## Usage

1. Open the app in your web browser: `http://localhost:3000`
2. Sign in with your Firebase account or create a new one.
3. Upload a video or browse existing videos.
4. Search and filter videos by tags, titles, and categories.
5. View your uploaded videos, stats, and settings in the user dashboard.
6. Manage videos and users in the admin dashboard (if logged in as admin).