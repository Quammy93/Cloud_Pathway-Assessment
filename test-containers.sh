#!/bin/bash

echo "Testing MongoDB connection..."
docker exec mongo_container mongo --eval "db.stats()"

echo "Testing Backend API..."
curl -I http://localhost:5000/api/health

echo "Testing Frontend..."
curl -I http://localhost:3000

echo "Currently running containers:"
docker ps
