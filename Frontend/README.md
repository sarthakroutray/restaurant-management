# Restaurant Management - React Frontend

This is a React + TypeScript + Vite application for managing a restaurant.

## Features

- **Orders Management**: Create and view orders
- **Menu Items**: Manage menu items with pricing
- **Categories**: Organize menu with categories
- **Customers**: Manage customer information

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **SWR** - Data fetching and caching
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Pre-built components

## Prerequisites

- Node.js 18+ 
- npm (comes with Node.js)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and set your API base URL:
   ```
   VITE_API_BASE_URL=http://localhost:8000
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── categories-manager.tsx
│   ├── customers-manager.tsx
│   ├── menu-manager.tsx
│   └── orders-manager.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and API client
│   ├── api.ts         # API client
│   ├── types.ts       # TypeScript types
│   └── utils.ts       # Utility functions
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## API Integration

The app uses a REST API for data management. Configure the API base URL in `.env`:

```env
VITE_API_BASE_URL=http://your-api-url
```

If not set, the app will use relative paths (assuming the API is on the same domain).

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` folder, ready to be deployed to any static hosting service.

## License

Private
