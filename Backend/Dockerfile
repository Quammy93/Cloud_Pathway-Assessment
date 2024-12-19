# Use a lightweight Node.js image as the base
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies for the frontend
RUN npm install

# Copy the rest of the frontend code into the container
COPY . .

# Build the production-ready frontend files
#RUN npm run build

# Use Nginx to serve the built frontend files
FROM nginx:alpine AS serve

# Copy the built files from the previous stage to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
