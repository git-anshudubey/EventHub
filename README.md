# WTE - WhatTheEvent

**WTE**  is a professional, full-stack Event Management System designed to provide a seamless experience for event organizers and attendees. Built with the MERN stack, it features a modern, full-width responsive UI, secure authentication, and real-time payment processing with Stripe.

---

##  Features

-   **User Authentication**: Secure Login and Registration using JWT.
-   **Event Management**:
    -   Admin Dashboard to Create, Edit, and Delete events.
    -   Rich event details including images, location, date, and capacity.
    -   **Automated Cancellation**: Deleting an event automatically cancels all associated bookings.
-   **Booking System**:
    -   **Smart Inventory**: Tickets are only deducted from inventory upon successful payment.
    -   **Stripe Integration**: Secure payments in **INR (₹)**. Requires a minimum transaction of ~₹50.
    -   **My Bookings**: View booking history with status indicators (Confirmed/Cancelled).
-   **Modern UI/UX**:
    -   Full-width responsive design.
    -   Professional styling with CSS variables and gradients.
    -   Mobile-friendly navigation.

## 🛠️ Tech Stack

-   **Frontend**: React (Vite), React Router, Axios.
-   **Backend**: Node.js, Express.js.
-   **Database**: MongoDB (Mongoose).
-   **Payments**: Stripe API & Webhooks.

---

## ⚙️ Installation & Setup

### Prerequisites
-   Node.js (v14+)
-   MongoDB (Local or Atlas URL)
-   Stripe Account (for payments)

### 1. Clone & Install Dependencies

**Server:**
```bash
cd server
npm install
```

**Client:**
```bash
cd client
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `server` directory:
```env
PORT=5000
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5173
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

Create a `.env` file in the `client` directory:
```env
VITE_API_URL=http://localhost:5000/api
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

### 3. Database Setup (Admin User)
To access the Admin Dashboard, create an admin user:
```bash
cd server
node create-admin.js
```
*   **Email**: `admin@eventhub.com`
*   **Password**: `admin123`

---

## ▶️ Running the Application

### 1. Start the Backend server
```bash
cd server
npm run dev
```

### 2. Start the Frontend client
```bash
cd client
npm run dev
```
The application will be available at `http://localhost:5173`.

### 3. Listen for Webhooks (Stripe)
To ensure ticket inventory updates correctly, run the Stripe CLI listener in a new terminal:
```bash
stripe listen --forward-to localhost:5000/api/payment/webhook
```
*Note: Copy the Signing Secret (`whsec_...`) output by this command into your server `.env` as `STRIPE_WEBHOOK_SECRET`.*

---

## 📝 Usage Guide

1.  **Register/Login**: Sign up as a user to browse and book events.
2.  **Admin Access**: Log in with the admin credentials to manage events.
3.  **Booking**: Select an event, choose tickets, and proceed to checkout using Stripe (Test mode).
4.  **Verification**: After payment, tickets are deducted, and the booking appears in "My Bookings" as "Confirmed".

---

## 📄 License
This project is for educational and portfolio purposes.