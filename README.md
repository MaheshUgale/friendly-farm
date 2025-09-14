# Full-Stack Application

A modern full-stack web application built with Express.js, MongoDB, React, and Tailwind CSS.

## 🚀 Features

- **Authentication System**: Secure JWT-based authentication with bcrypt password hashing
- **User Management**: Complete user registration, login, and profile management
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Type Safety**: Full TypeScript support on the frontend
- **Security**: Helmet.js, CORS, rate limiting, and input validation
- **Clean Architecture**: Well-organized codebase with separation of concerns

## 🛠️ Tech Stack

### Backend
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **express-validator** - Input validation

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Icon library

## 📁 Project Structure

```
/
├── backend/                 # Express.js backend
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── middleware/      # Custom middleware
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── utils/          # Utility functions
│   ├── .env.example        # Environment variables template
│   ├── package.json
│   └── server.js           # Entry point
│
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # React contexts
│   │   ├── pages/          # Page components
│   │   └── App.tsx         # Main app component
│   └── package.json
│
├── .cursorrules            # Cursor AI rules
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/myapp
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=7d
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The backend server will start on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will start on `http://localhost:5173`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Users
- `GET /api/users` - Get all users (admin only)

## 🔧 Development

### Running Tests
```bash
# Backend tests
cd backend && npm test

# Frontend tests (when implemented)
cd frontend && npm test
```

### Building for Production
```bash
# Backend
cd backend && npm start

# Frontend
cd frontend && npm run build
```

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- CORS protection
- Rate limiting
- Input validation and sanitization
- Security headers with Helmet.js
- Environment variable protection

## 🎨 UI Features

- Responsive design for all devices
- Modern, clean interface
- Loading states and error handling
- Form validation with user feedback
- Smooth transitions and animations
- Accessible components

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support, please open an issue in the repository or contact the development team.