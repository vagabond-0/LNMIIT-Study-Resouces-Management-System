﻿# LNMIIT Study Resources Management System

Welcome to the **LNMIIT Study Resources Management System**. This platform enables students to access, manage, and organize academic resources like notes, slides, projects, and previous question papers, with the added ability to mark favorites and search by categories.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### User Features

- **User Authentication**: Secure login and registration with token-based authentication.
- **Profile Management**: Users can edit their profiles, including updating names, email, semester, and CGPA.
- **Resource Access**: Access resources across multiple categories (Notes, Slides, Assignments, Previous Year Questions).
- **Search Functionality**: Search resources by title or category.
- **Favorites Management**: Add and remove resources to/from favorites for easy access.

### Admin Features

- **Resource Management**: Admins can add, edit, or delete resources.
- **User Management**: View and manage user profiles and permissions.

---

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Render

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/lnmiit-study-resources-management-system.git
   cd lnmiit-study-resources-management-system
   ```

2. **Install dependencies**:
   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

3. **Set up environment variables** (see [Environment Variables](#environment-variables)).

4. **Start the application**:
   ```bash
   # Start the frontend
   cd client
   npm start

   # Start the backend
   cd ../server
   npm start
   ```

5. **Access**:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

---

## Environment Variables

Create a `.env` file in the root directory and add the following:

```plaintext
# Backend
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Frontend
VITE_BACKEND_URL=http://localhost:5000
```

Ensure these variables are correctly set for production deployment.

---

## Folder Structure

```
lnmiit-study-resources-management-system/
├── client/                   # Frontend code (React)
│   ├── public/               # Public assets
│   ├── src/                  # React application code
│       ├── components/       # Reusable components
│       ├── pages/            # Application pages
│       ├── services/         # API calls
│       ├── styles/           # CSS and styling files
│       └── App.js            # Main React component
│
├── server/                   # Backend code (Node.js, Express)
│   ├── controllers/          # Request handlers
│   ├── middleware/           # Authentication and error handling
│   ├── models/               # MongoDB schemas and models
│   ├── routes/               # API routes
│   ├── utils/                # Helper functions and utilities
│   └── server.js             # Main server file
│
├── .env                      # Environment variables
├── .gitignore                # Files and directories to ignore in git
├── README.md                 # Project documentation
└── package.json              # Project dependencies and scripts
```

---

## API Endpoints

### Authentication

- **POST** `/api/auth/register`: Register a new user
- **POST** `/api/auth/login`: Log in a user and generate a token

### Profile Management

- **GET** `/api/profile`: Get user profile
- **PUT** `/api/profile/update`: Update user profile

### Resource Management

- **GET** `/api/resources`: Fetch all resources
- **POST** `/api/resources/add`: Add a new resource (Admin only)
- **PUT** `/api/resources/:id`: Update a resource (Admin only)
- **DELETE** `/api/resources/:id`: Delete a resource (Admin only)

### Favorites

- **POST** `/api/resource/addFavorite/:id`: Toggle resource as favorite
- **GET** `/api/profile/favorites`: Get user's favorite resources

---


## Contributing

Contributions are welcome! To get started, follow these steps:

1. Fork the project.
2. Create a new branch for your feature (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have questions, suggestions, or issues regarding this project!
