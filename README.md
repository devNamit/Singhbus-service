# 🚌 Singh Bus Service

> **Modern Bus Booking Platform for Singh Transport Services**

A professional, full-stack bus booking platform used in production by Singh Bus Service - a family-owned transport business. Features real-time booking, route management, and user authentication.

## 🌐 Live Website
[**Visit Singh Bus Service**](https://singhbusservice.onrender.com)

---

## ✨ Features

- 🎟️ **Online Bus Booking** - Real-time seat selection and booking
- 🗺️ **Route Management** - Browse available routes with schedules
- 👤 **User Authentication** - Secure login/signup with profile management
- 💳 **Booking History** - Track all past and upcoming bookings
- 📱 **Responsive Design** - Fully mobile-optimized experience
- 🔍 **Route Search** - Filter buses by date, time, and destination
- 📧 **Email Notifications** - Confirmation emails for bookings
- ⚡ **Real-time Updates** - Live seat availability

---

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

**Frontend:** Next.js 16, TypeScript, Tailwind CSS, shadcn/ui  
**Backend:** Next.js API Routes, Node.js  
**Database:** MongoDB with Mongoose  
**Styling:** Tailwind CSS with custom components  
**Deployment:** Render.com (Production)  

---

## 📋 Quick Setup

### Requirements
- Node.js v18+
- MongoDB (Local or Atlas)
- npm or pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/devNamit/Singhbus-service.git
cd Singhbus-service

# Install dependencies
npm install
# or
pnpm install

# Create environment file
touch .env.local
```

Add to `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

```bash
# Development server
npm run dev
# or
pnpm dev
```

Open `http://localhost:3000` 🚀

---

## 🏗️ Project Architecture
