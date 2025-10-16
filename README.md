# Restaurant Management System

A full-stack restaurant management application with a modern React frontend and Express backend, designed for managing customers, menu items, categories, and orders efficiently.

## ✨ Features

- **Customer Management** - Add, view, and manage customer information with contact details
- **Menu Items** - Create and organize menu items with pricing and categories
- **Categories** - Organize menu items into logical categories
- **Orders** - Create orders, track items and quantities, view order history
- **Real-time Updates** - Instant UI updates using SWR data fetching
- **Type Safety** - Full TypeScript coverage across frontend and backend
- **Modern UI** - Beautiful, responsive interface built with Tailwind CSS and Radix UI

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **SWR** - Data fetching and caching
- **Radix UI** - Accessible component primitives

### Backend
- **Express.js** - Node.js web framework
- **Prisma ORM** - Type-safe database client
- **TypeScript** - End-to-end type safety

### Database
- **MySQL** - Relational database with normalized schema

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

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ and npm
- **MySQL** 5.7+ or 8.0+

### 1. Database Setup

Create a MySQL database:
```sql
CREATE DATABASE restaurantmanagement;
```

Run the schema creation script:
```bash
mysql -u your_username -p restaurantmanagement < db.sql
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment template and configure
cp .env.example .env
# Edit .env and set your DATABASE_URL:
# DATABASE_URL="mysql://USER:PASSWORD@127.0.0.1:3306/restaurantmanagement"

# Generate Prisma client
npx prisma generate

# Start development server
npm run dev
```

Backend will run at `http://localhost:4000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd Frontend

# Install dependencies
npm install

# Environment is already configured in .env
# Verify VITE_API_BASE_URL=http://localhost:4000/api

# Start development server
npm run dev
```

Frontend will run at `http://localhost:5173`

### 4. Access the Application

Open your browser and navigate to `http://localhost:5173`

## 📡 API Endpoints

Base URL: `http://localhost:4000/api`

### Customers
- `GET /customers` - List all customers with contacts
- `POST /customers` - Create a new customer
  ```json
  { "name": "John Doe", "contactNo": "1234567890", "email": "john@example.com" }
  ```

### Categories
- `GET /categories` - List all categories with menu items
- `POST /categories` - Create a new category
  ```json
  { "categoryName": "Appetizers" }
  ```

### Menu Items
- `GET /menu-items` - List all menu items with categories
- `POST /menu-items` - Create a new menu item
  ```json
  { "name": "Caesar Salad", "price": 12.99, "categoryId": 1 }
  ```

### Orders
- `GET /orders` - List all orders with customer and items (newest first)
- `POST /orders` - Create a new order
  ```json
  { 
    "customerId": 1, 
    "orderDate": "2025-10-17", 
    "items": [{ "itemId": 1, "quantity": 2 }] 
  }
  ```

## 📁 Project Structure

```
restrauntmanagement/
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── db.sql                  # MySQL database schema
├── backend/                # Express + Prisma backend
│   ├── .env.example        # Environment template
│   ├── package.json
│   ├── tsconfig.json
│   ├── prisma/
│   │   └── schema.prisma   # Prisma schema with MySQL mapping
│   └── src/
│       ├── index.ts        # Express server entry point
│       ├── prismaClient.ts # Prisma client instance
│       └── routes/         # API route handlers
│           ├── categories.ts
│           ├── customers.ts
│           ├── menuItems.ts
│           └── orders.ts
└── Frontend/               # React + Vite frontend
    ├── .env                # Environment variables (not tracked)
    ├── .env.example        # Environment template
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── index.html
    └── src/
        ├── App.tsx         # Main application component
        ├── main.tsx        # React entry point
        ├── index.css       # Global styles
        ├── components/     # React components
        │   ├── categories-manager.tsx
        │   ├── customers-manager.tsx
        │   ├── menu-manager.tsx
        │   ├── orders-manager.tsx
        │   └── ui/         # Reusable UI components
        ├── lib/
        │   ├── api.ts      # API client wrapper
        │   ├── types.ts    # TypeScript type definitions
        │   └── utils.ts    # Utility functions
        └── hooks/          # Custom React hooks
```

## 🔧 Development Notes

### Prisma Schema
- Models use **camelCase** field names in the Prisma client
- Database columns use **PascalCase** via `@map()` directives
- All foreign keys and indexes match the MySQL schema
- Decimal fields (prices) are returned as strings in JSON

### Code Quality
- Full TypeScript coverage with strict mode
- Error handling with try-catch blocks
- Console errors logged for debugging
- SWR provides automatic revalidation and caching

## 🐛 Troubleshooting

### Database Connection Issues
- Verify MySQL is running: `mysql -u root -p`
- Check DATABASE_URL format in `backend/.env`
- Ensure database exists: `SHOW DATABASES;`

### Prisma Errors
- Run `npx prisma generate` after schema changes
- Run `npx prisma db push` to sync schema with database (dev only)
- Check Prisma client is imported correctly

### Frontend Not Fetching Data
- Verify backend is running on port 4000
- Check `VITE_API_BASE_URL` in `Frontend/.env`
- Open browser console for network errors
- Verify CORS is not blocking requests

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 18+)


## 👥 Authors

- **Sarthak Routray** - [GitHub](https://github.com/sarthakroutray)
- **Kirtan Kumar Sanghi**

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sarthakroutray/restaurant-management/issues).
