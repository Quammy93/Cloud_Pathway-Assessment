# Fullstack Todo List Application

This repository contains a Fullstack Todo List application built with a modern frontend and backend. The application is containerized using Docker to simplify deployment and testing.

---

# 3-Tier Dockerized Application

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
2. **Docker Compose**: (Usually bundled with Docker Desktop)
3. **Git**: [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

---

## Clone the Repository

To start, clone this repository to your local machine:

```bash
git clone https://github.com/icnoka/fullstack-todo-list.git
cd fullstack-todo-list
```

---

## Build the Docker Containers

Follow these steps to build the Docker containers for both the frontend and backend:

1. Ensure you are in the project root directory:
   ```bash
   cd fullstack-todo-list
   ```

2. Build the containers using Docker Compose:
   ```bash
   docker-compose build
   ```

   This will build the images for both the frontend and backend services defined in the `docker-compose.yml` file.

---

## Run the Docker Containers

To run the containers:

1. Start the containers using Docker Compose:
   ```bash
   docker-compose up
   ```

2. Open your browser and navigate to the following URLs:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000](http://localhost:5000)

3. Verify that both the frontend and backend are running as expected.

> **Tip**: Use the `-d` flag to run the containers in detached mode:
> ```bash
> docker-compose up -d
> ```

---

## Stop the Docker Containers

To stop the running containers:

1. Use Docker Compose to stop the services:
   ```bash
   docker-compose down
   ```

   This will stop and remove the containers, but the images and volumes will remain intact.

---

## Clean Up

If you want to remove all resources, including containers, images, and volumes:

1. Use the following command:
   ```bash
   docker-compose down --volumes --rmi all
   ```

   This will:
   - Stop and remove all containers
   - Remove all associated images
   - Remove all volumes

---

## Common Issues

1. **Port Conflicts**:
   - Ensure no other services are running on ports `3000` or `5000`.
   - Modify the `docker-compose.yml` file if needed to use different ports.

2. **Permission Errors**:
   - Run Docker commands with `sudo` if you encounter permission issues (Linux).

3. **Build Errors**:
   - Clear the Docker cache and rebuild the containers:
     ```bash
     docker-compose build --no-cache
     ```

---