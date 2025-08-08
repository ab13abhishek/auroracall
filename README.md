✨ AuroraCall: Fullstack Chat & Video Calling Application ✨
AuroraCall is a modern, fullstack application for seamless real-time chat and video calling, designed with a robust feature set for enhanced user experience.
🌐 Live Demo

🔑 Key Features

Real-time Messaging: Instant chat with typing indicators and emoji reactions for dynamic communication.
Video Calls: High-quality one-on-one and group video calls with screen sharing and recording capabilities.
Secure Authentication: JWT-based authentication with protected routes for enhanced security.
Language Exchange Platform: Connect globally with support for 32 unique UI themes for personalized user experiences.
Scalable Tech Stack: Built with React, Express, MongoDB, TailwindCSS, and TanStack Query.
State Management: Efficient global state management using Zustand.
Error Handling: Robust error management across frontend and backend for reliability.
Easy Deployment: Deployable for free on platforms like Render.
Stream-Powered: Leverages Stream API for scalable, real-time communication.
Evolving Features: Continuously updated with new functionalities.


🧪 Environment Setup
🔧 Backend (/backend)
Create a .env file in the /backend directory with the following:
PORT=5001
MONGO_URI=your_mongo_uri
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development

💻 Frontend (/frontend)
Create a .env file in the /frontend directory with the following:
VITE_STREAM_API_KEY=your_stream_api_key


🏃 Running the Project
Backend
Navigate to the backend directory, install dependencies, and start the development server:
cd backend
npm install
npm run dev

Frontend
Navigate to the frontend directory, install dependencies, and start the development server:
cd frontend
npm install
npm run dev


🛠️ Additional Notes

Ensure Node.js and npm are installed on your system.
Replace placeholder values in .env files (e.g., your_mongo_uri, your_stream_api_key) with your actual credentials.
For production, set NODE_ENV=production in the backend .env file.
Refer to the Stream documentation for additional setup details if needed.


🧑‍💻 Tech Stack

Frontend: React, TailwindCSS, TanStack Query, Zustand, Vite
Backend: Node.js, Express.js, MongoDB, JWT, Stream API
Deployment: Render (Frontend + Backend)


🙌 Acknowledgements

Stream Chat SDK
MongoDB
Zustand
TanStack Query
Vite
