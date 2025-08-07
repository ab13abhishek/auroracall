✨ AuroraCall: Fullstack Chat & Video Calling Application ✨
AuroraCall is a modern, fullstack chat and video calling application designed for seamless communication with a rich feature set.
Key Features

🌐 Real-time Messaging: Enjoy instant messaging with typing indicators and reactions.
📹 Video Calls: Support for one-on-one and group video calls, including screen sharing and recording.
🔐 Secure Authentication: Implements JWT authentication with protected routes.
🌍 Language Exchange Platform: Connect globally with 32 unique UI themes for personalization.
⚡ Tech Stack: Built with React, Express, MongoDB, TailwindCSS, and TanStack Query.
🧠 State Management: Centralized global state management using Zustand.
🚨 Error Handling: Comprehensive error handling for both frontend and backend.
🚀 Deployment: Free deployment for easy setup.
🎯 Scalability: Powered by scalable technologies like Stream.
⏳ And More: Continuously evolving with additional features!

🧪 Environment Setup
Backend (/backend)
Create a .env file in the /backend directory with the following configuration:
PORT=5001
MONGO_URI=your_mongo_uri
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development

Frontend (/frontend)
Create a .env file in the /frontend directory with the following configuration:
VITE_STREAM_API_KEY=your_stream_api_key

🔧 Running the Backend
Navigate to the backend directory and install dependencies, then start the development server:
cd backend
npm install
npm run dev

💻 Running the Frontend
Navigate to the frontend directory, install dependencies, and start the development server:
cd frontend
npm install
npm run dev

🛠️ Additional Notes

Ensure you have Node.js and npm installed.
Replace placeholder values in the .env files (e.g., your_mongo_uri, your_stream_api_key) with your actual credentials.
For production, update NODE_ENV=production in the backend .env file.
Check out the Stream documentation for additional setup details if needed.
