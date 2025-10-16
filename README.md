# Restaurant Management System

A full-stack restaurant management application built with React, Vite, Tailwind CSS (frontend) and Express, Prisma, MySQL (backend).

## Features
- Manage customers, menu items, categories, and orders
- Relational database with normalized schema
- Modern UI with advanced table and form components
- Real-time updates using SWR
- TypeScript throughout for safety

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, SWR
- **Backend:** Express, Prisma ORM, MySQL
- **Database:** MySQL

## Folder Structure
```
restrauntmanagement/
├── db.sql                # SQL schema for MySQL database
├── backend/              # Express + Prisma backend
│   ├── package.json
│   ├── prisma/
│   │   └── schema.prisma # Prisma schema
│   └── src/
│       ├── index.ts      # Express server entry
│       ├── prismaClient.ts
│       └── routes/       # API routes
├── Frontend/             # React + Vite frontend
│   ├── package.json
│   ├── src/
│   │   ├── App.tsx       # Main app component
│   │   ├── components/   # UI components
│   │   ├── lib/          # API wrapper, types
│   │   └── hooks/        # Custom hooks
│   └── public/
└── README.md             # Project documentation
```

## Setup Instructions

### 1. Database
- Create a MySQL database
- Run the SQL in `db.sql` to create tables
- Update `backend/.env` with your database connection string:
  ```env
  DATABASE_URL="mysql://user:password@localhost:3306/your_db"
  ```

### 2. Backend
- Install dependencies:
  ```sh
  cd backend
  npm install
  ```
- Generate Prisma client:
  ```sh
  npx prisma generate
  ```
- Start the server:
  ```sh
  npm run dev
  ```
- API runs at `http://localhost:4000/api`

### 3. Frontend
- Install dependencies:
  ```sh
  cd Frontend
  npm install
  ```
- Set API base URL in `Frontend/.env`:
  ```env
  VITE_API_BASE_URL=http://localhost:4000/api
  ```
- Start the frontend:
  ```sh
  npm run dev
  ```
- App runs at `http://localhost:5173`

## API Endpoints
- `GET /customers` - List customers
- `POST /customers` - Add customer
- `GET /categories` - List categories
- `POST /categories` - Add category
- `GET /menu-items` - List menu items
- `POST /menu-items` - Add menu item
- `GET /orders` - List orders (with customer and items)
- `POST /orders` - Create order

## Prisma Schema Highlights
- Models use camelCase for client, mapped to PascalCase DB columns
- All relations and indexes match the SQL schema

## Frontend Highlights
- Modern UI with Tailwind
- Advanced table, form, and card components
- TypeScript types for all entities
- SWR for real-time data fetching

## Troubleshooting
- If you see `undefined` in tables, check backend route field names and Prisma schema mapping
- If you get Prisma errors, ensure you ran `npx prisma generate` after schema changes
- For decimal fields, handle as string in frontend (e.g., `Number(item.price)`)

## License
MIT

## Authors
- Sarthak Routray
- Kirtan Kumar Sanghi
