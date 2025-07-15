# TASKMATE ASSESMENT

## Overview
This project consists of two main components: a backend and a frontend. Each component has its own `.env` file for environment-specific configurations. Below are the instructions to set up and run each component.

## Prerequisites
- Node.js and npm installed on your machine

## Project Structure
- `backend/`: Contains the backend code and `.env` file for backend configurations
- `frontend/`: Contains the frontend code and `.env` file for frontend configurations

## Setup Instructions

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create a `.env` file in the `backend` folder and add the required environment variables (refer to `.env.example` if available).
   ```bash
   DATABASE_URL=
   ```
3. Install dependencies:
   ```bash
   npm i
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Create a `.env` file in the `frontend` folder and add the required environment variables (refer to `.env.example` if available).
   ```bash
   VITE_BACKEND_URL=
   ```
3. Install dependencies:
   ```bash
   npm i
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Additional Notes
- Ensure both backend and frontend servers are running concurrently for the project to function properly.
- Verify that the `.env` files in both folders are correctly configured before starting the servers.
- Refer to individual `package.json` files in each folder for additional scripts or dependencies.