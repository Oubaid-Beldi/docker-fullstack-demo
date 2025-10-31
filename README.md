
# Fullstack App (React + Express + PostgreSQL + Docker)

## **Overview**

This project is a fullstack web application with:

* **Frontend:** React
* **Backend:** Express.js
* **Database:** PostgreSQL
* **Containerization:** Docker + Docker Compose

The app allows users to be **added via a form** and displayed in a  **list view** .

The entire stack is  **fully containerized** , so no local installation of Node.js, React, or PostgreSQL is required.

---

## **Project Structure**

```
fullstack-app/
├── backend/
│   ├── Dockerfile
│   ├── src/
│   │   ├── server.js
│   │   ├── config/database.js
│   │   ├── models/userModel.js
│   │   ├── routes/userRoutes.js
│   │   └── controllers/userController.js
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       ├── App.js
│       └── components/UserForm.js, UserList.js
├── docker-compose.yml
└── README.md
```

---

## **Requirements**

* Docker (v20+ recommended)
* Docker Compose (v2+ recommended)

> **Note:** You do **not** need Node.js or PostgreSQL installed locally.

---

## **Setup and Running**

### 1️⃣ Clone the repo

```bash
git clone <repo_url>
cd fullstack-app
```

### 2️⃣ Build and run the containers

```bash
docker compose up --build
```

This will start:

* **PostgreSQL** on port `5432`
* **Backend Express API** on port `5000`
* **Frontend React app** on port `3000`

---

### 3️⃣ Access the app

* Frontend: [http://localhost:3000](http://localhost:3000/)
* Backend API: [http://localhost:5000/api/users](http://localhost:5000/api/users)

---

## **Development Notes**

### Backend

* API endpoints:
  * `POST /api/users` → Add a new user
  * `GET /api/users` → List all users
* Database connection: environment variable `DATABASE_URL`
* Sequelize is used as ORM for PostgreSQL

### Frontend

* Components:
  * `UserForm.js` → Add users
  * `UserList.js` → Display users
* Axios is used for API calls.
* React dev server configured to bind to `0.0.0.0` inside Docker.

---

## **Adding a new package**

1. Update `package.json` locally:

```bash
npm install <package> --save
```

2. Rebuild the Docker image:

```bash
docker compose build backend
docker compose up
```

---

## **Database Persistence**

* Postgres data is persisted using a Docker volume:

```yaml
volumes:
  db_data:
```

* Data is  **local to each developer** , not pushed to Git.
* Use seed scripts if you want the same initial data for all team members.

---

## **Stopping the App**

```bash
docker compose down
```

* Stops and removes containers, but keeps the database volume intact.

---

## **Optional**

* To rebuild everything from scratch and remove volumes:

```bash
docker compose down -v --rmi all --remove-orphans
docker compose up --build
```

---

## **Contributors**

* Oubaid (fullstack development and Docker setup)

---
