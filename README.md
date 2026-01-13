# Store App (Shopping Cart)

A **Front-end React-based shopping cart application**.

This project focuses on client-side state management, routing, and component design using modern React tools. It is a **mock store** with no backend or checkout system.

🔗 Live Demo: https://store-app-five-rho.vercel.app

## 🛍️ Overview

This project implements a classic shopping cart experience using React.  
Users can browse products, add them to a cart, and manage quantities across multiple pages, all within a single-page application (SPA).

Product data is fetched from a public API (**FakeStore API**).

## 📄 Pages & Routing

The app includes **three main pages**, navigated via a persistent navbar:

- **Home** – Introductory content and landing page
- **Shop** – Displays available products
- **Cart** – Shows selected items and quantities

Routing is handled using **react-router**.

## 🚀 Features

- Client-side routing with React Router
- Product data fetched from FakeStore API
- Product cards with:
  - Quantity input field
  - Increment / decrement controls
  - “Add to Cart” button
- Real-time cart item count displayed in the navbar
- Cart page with:
  - Item quantity adjustment
  - Item removal
- Fully client-side state management
- Responsive layout and custom styling

## 🧱 Tech Stack

| Category   | Technology    |
| ---------- | ------------- |
| Framework  | React         |
| Bundler    | Vite          |
| Routing    | react-router  |
| API        | FakeStore API |
| Deployment | Vercel        |

## 📦 Getting Started

### Prerequisites

- Node.js (v14+)
- npm

### Installation

```bash
git clone https://github.com/joshuaGmartin/store-app.git
cd store-app
npm install
```

## ▶️ Running Locally

```bash
npm run dev
```

## 📁 Project Structure

```bash
store-app/
├── public/
├── src/
│   ├── components/     # Reusable UI components and pages
│   ├── modules/        # JS modules and page routing
│   ├── App.jsx
│   ├── main.jsx
│   ├── reset.css
│   └── main.css
├── index.html
├── package.json
├── README.md
└── vercel.json         # SPA routing configuration
```

## 🌐 Deployment Notes

This project is deployed as a Single Page Application (SPA).

For Vercel, routing is handled via the following configuration:

```bash
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures react-router correctly handles all routes.

## 🎯 Skill Application

This project demonstrates:

- Component-based UI architecture
- State lifting and prop management
- Client-side routing in React
- API data fetching
- SPA deployment configuration

## 📜 License

This project does not include a license.

## ✨ Author

Joshua Martin

GitHub: https://github.com/joshuaGmartin
