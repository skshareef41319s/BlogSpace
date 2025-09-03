# 🌐 BlogSpace – Premium React Blog Platform

**BlogSpace** is a **frontend-only blog application** built with **React, TypeScript, Tailwind CSS, and Vite**.  
Experience a **modern, premium blogging platform** with user profiles, blog creation, image uploads, engagement features, responsive design, and seamless theme switching – all running entirely in the browser.  
All data is managed in local state and persisted with **localStorage** for a fast, secure, zero-backend experience.

---

## ✨ Features

- 🖼️ **Welcome Screen** – Onboarding prompts for name & email, auto-generating a personalized profile.
- 👤 **Profile Management** – View and update user details, including profile picture and authored blogs.
- 📝 **Blog Operations** – Create, edit, and delete blogs with title, content, and images (JPEG/PNG).
- ❤️ **Engagement Tools** – Like and comment on any blog post, with instant (client-side) feedback.
- 📚 **Preloaded Blog Feed** – Start with 10 rich dummy posts plus unlimited user-generated content.
- 🌗 **Dark/Light Mode** – Toggle theme, auto-persisted for consistent experience.
- 🎨 **Premium UI/UX** – Built with **Tailwind CSS** and animated via **Framer Motion** for a smooth, modern look.
- 📱 **Responsive Design** – Optimized for all devices: desktop, tablet, and mobile.
- 🧭 **Intuitive Navigation** – Fast routing with `react-router-dom`, including error fallback pages.
- 🔒 **Local Persistence** – All blogs, likes, comments, and user data are stored in localStorage.
- 🛡️ **Zero Backend Required** – Instant setup, no server or database dependencies.
- 🚀 **Extensible Architecture** – Easily add new features or integrate APIs.

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router
- **State Management:** React Context API
- **Persistence:** localStorage
- **Tooling:** Vite (blazing fast dev/build)

---

## 📂 Folder Structure

```
src/
├── components/       # Reusable UI components (Navbar, BlogCard, BlogFeed, Profile, etc.)
├── contexts/         # Global contexts for state (AppContext, ThemeContext)
├── data/             # Dummy blog data
├── types/            # TypeScript type definitions
├── utils/            # Utility functions (localStorage, helpers, formatters)
├── assets/           # Static images and logos
├── App.tsx           # Root app component
├── main.tsx          # Entry point
├── index.css         # Global styles (Tailwind)
public/               # Static files (favicon, manifest)
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/skshareef41319s/BlogSpace.git
cd BlogSpace
```

### 2. Install Dependencies

```bash
npm install
npm add react-router-dom@latest
```

### 3. Run the Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## 📝 Usage Guide

- **Profile Setup:** On your first visit, enter your name and email to auto-generate your profile.
- **Create a Blog:** Click "New Blog", enter a title, content, and optionally upload an image (JPEG/PNG).
- **Edit/Delete:** Manage your own blogs from your profile page.
- **Engage:** Like or comment on any blog post; all actions are instant and persist locally.
- **Theme Toggle:** Use the dark/light switch for your preferred reading experience.
- **Mobile Friendly:** Try resizing the browser or open on your phone/tablet!

---

## 🧩 Extending BlogSpace

Want to add features? The codebase is modular and well-typed.
- Add new components in `src/components`.
- Extend context providers for new global state.
- Integrate APIs by swapping localStorage logic in `src/utils/storage.ts`.
- Add authentication or backend (optional) with minimal refactoring.

---

## 🎨 Screenshots

<!-- Add screenshots here -->
| Welcome Screen | Blog Feed | Profile Page | Dark Mode |
|:---:|:---:|:---:|:---:|
| ![](public/screens/welcome.png) | ![](public/screens/feed.png) | ![](public/screens/profile.png) | ![](public/screens/darkmode.png) |

---

## 🏆 Contributing

Pull requests, feature suggestions, and bug reports are welcome!  
Follow conventional commit messages and ensure new code includes relevant tests or storybook stories if UI.

```bash
# Example workflow
git checkout -b feature/my-awesome-feature
npm run dev
# Make changes, commit, push, open PR
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)

---

## 📬 Contact

For questions and support, open an issue or reach out via [GitHub Discussions](https://github.com/skshareef41319s/BlogSpace/discussions).

---

**BlogSpace** – Your premium, instant, zero-backend blog platform.  
Craft. Share. Connect. 🚀
