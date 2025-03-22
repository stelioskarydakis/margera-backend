# Backend for Subscriber Management

## Description

This is the backend API for managing subscribers. It is built using Node.js, Express, and includes middleware for error handling. The application exposes endpoints to manage subscribers, including adding, deleting, and listing them.

## Features

- **Add subscribers:** Allows you to add new subscribers to the system.
- **Delete subscribers:** Allows you to delete subscribers based on their email address.
- **Fetch subscribers:** Lists subscribers with pagination.
- **Error handling middleware:** Handles errors and provides relevant responses.

## Technologies Used

- **Node.js** (JavaScript runtime)
- **Express** (Web framework)
- **CORS** (Cross-Origin Resource Sharing)
- **Error Middleware** (Custom error handling)

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v14.x or higher)
- npm (v6.x or higher)

### Steps

1. Clone the repository:

   ```bash
   git clone git@github.com:stelioskarydakis/margera-backend.git

   ```

2. Navigate to the project directory:

   ```bash
   cd margera-backend

   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Create an .env file

   From campaignmonitor add
   CM_API_KEY=<your-api-key>
   LIST_ID=<your-list-id>
   CLIENT_ID=<your-client-id>
   CM_PASSWORD=<your-password>
   BASE_URL=https://api.createsend.com/api/v3.3

5. Start the server:

   ```bash
   npm run dev

   ```

6. Visit in a browser at

   http://localhost:8080
