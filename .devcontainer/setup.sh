#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🔄 Setting up environment files..."

# Client .env
if [ ! -f ./client/.env ]; then
  cp ./client/.env.example ./client/.env
  echo "✅ Client .env created."
else
  echo "⚠️  Client .env already exists. Skipping."
fi

# Server .env
if [ ! -f ./server/.env ]; then
  cp ./server/.env.example ./server/.env
  echo "✅ Server .env created."
else
  echo "⚠️  Server .env already exists. Skipping."
fi

echo "📦 Installing dependencies..."

# Install client dependencies
cd ./client && npm install && cd ..

# Install server dependencies
cd ./server && npm install && cd ..

echo "🎉 Setup complete!"
