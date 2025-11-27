# BlogSpace — Premium React Blog Platform

BlogSpace is a frontend-only blogging application built with React, TypeScript, Tailwind CSS, and Vite. It provides a modern, responsive blogging experience entirely in the browser — user data, posts, likes, comments, and themes are persisted in localStorage so no backend is required.

This README explains what BlogSpace does, how to run it locally, and how to extend it.

## Features

- Welcome / onboarding screen with name and email capture
- Profile management: update name, email, profile picture, and view authored posts
- Create, edit, and delete blog posts with title, body, and optional image upload (JPEG/PNG)
- Like and comment on posts; all interactions are immediately reflected in the UI
- Preloaded feed of sample posts to get started
- Dark / light theme with persisted preference
- Responsive UI designed for desktop and mobile
- Routing and error pages handled with react-router
- All data stored locally in the browser (localStorage)

## Tech stack

- React with TypeScript
- Vite for dev tooling and builds
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for client-side routing
- React Context API for application state
- localStorage for persistence

## Folder structure

```
src/
├── components/       # Reusable UI components (Navbar, BlogCard, BlogFeed, Profile, etc.)
├── contexts/         # Context providers (AppContext, ThemeContext)
├── data/             # Dummy blog data
├── types/            # TypeScript type definitions
├── utils/            # Helpers (localStorage wrappers, formatters)
├── assets/           # Static images and logos
├── App.tsx           # Root app component
├── main.tsx          # Application entry point
└── index.css         # Tailwind and global styles
public/               # Static files (favicon, manifest)
```

## Getting started

1. Clone the repository
   ```bash
   git clone https://github.com/skshareef41319s/BlogSpace.git
   cd BlogSpace
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Add routing dependency (if not already present)
   ```bash
   npm add react-router-dom@latest
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open the app in your browser (Vite will print the local URL, usually `http://localhost:5173`)

## Usage guide

- On first visit, complete the onboarding form (name and email) to create your local profile.
- Create a new blog by clicking the "New Blog" button — add title, content, and an optional image.
- Edit or delete your own posts from your profile page.
- Like and comment on posts in the feed; likes and comments persist in localStorage.
- Switch between dark and light modes with the theme toggle; the choice is remembered on refresh.
- Use the built-in search or filters (if implemented) to discover posts.

## Extending BlogSpace

Because the app is frontend-only and modular, common extensions are straightforward:

- Persist data to a backend: replace localStorage helpers with API calls.
- Add authentication: integrate OAuth or JWT-based auth and store tokens securely.
- Add rich-text editing: swap the plain textarea for a rich editor (e.g., TipTap or Quill).
- Sync images to cloud storage: upload images to S3 or Cloudinary instead of storing Data URLs locally.
- Add pagination and infinite scroll for large feeds.

## Implementation notes

- Images are handled as Data URLs for convenience; large images may increase localStorage usage.
- All data is stored locally — this is ideal for demos and prototypes, but not for multi-user production apps.
- Keep user-provided content sanitized if you later accept HTML to avoid XSS risks.
- Tailwind configuration and component structure make it simple to change the visual design or add themes.

## Troubleshooting

- If the dev server does not start, ensure Node.js and npm are installed and at supported versions.
- If routing fails on refresh when deployed as static files, configure the static host to fallback to index.html.
- If localStorage data becomes inconsistent during development, clear site storage in your browser and reload.

## Acknowledgements

This project uses:
- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router


## Contact

Created by skshareef41319s — https://github.com/skshareef41319s
