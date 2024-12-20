# Build Stage
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the production files using Vite
RUN npm run build

# Serve Stage
FROM nginx:alpine AS serve

# Copy the Vite build output to Nginx's default HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
