# Extensions Manager

A browser extension manager UI built with React, TypeScript, and Tailwind CSS v4. Lets you view, enable/disable, and remove extensions from a single dashboard.

## Features

- **Filter by status** — switch between All, Active, and Inactive extensions
- **Toggle extensions** — enable or disable each extension with a switch
- **Remove extensions** — delete an extension from the list
- **Dark / Light mode** — toggle theme with persistence via `localStorage`

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vite](https://vite.dev/)

## Project Structure

```
src/
├── assets/
│   ├── fonts/              # Noto Sans variable font
│   └── images/             # Theme icons and app logo
├── components/
│   ├── layouts/
│   │   ├── header.tsx      # Logo + theme toggle
│   │   └── navigations.tsx # All / Active / Inactive filter
│   └── ui/
│       └── card.tsx        # Extension card
├── data/
│   └── extensions.json     # Extension list (name, description, logo, enabled)
├── hooks/
│   └── useExtensions.ts    # State logic: toggle, remove, filter
└── App.tsx
public/
└── images/                 # Extension logo SVGs (served as static assets)
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
