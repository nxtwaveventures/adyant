#!/bin/bash

# Clear terminal
clear

# Display startup message
echo "🚀 Starting Adyant's Development Environment..."
echo "-------------------------------------------"

# Kill all node processes
echo "🧹 Cleaning up existing Node.js processes..."
killall -9 node 2>/dev/null || true
echo "✅ Node processes cleared"

# Find and kill processes using port 3000
PORT_PIDS=$(lsof -i:3000 -t 2>/dev/null)
if [ ! -z "$PORT_PIDS" ]; then
  echo "🔌 Freeing port 3000..."
  echo $PORT_PIDS | xargs kill -9 2>/dev/null || true
  echo "✅ Port 3000 freed"
fi

# Clean build directories
echo "🧹 Cleaning build cache..."
rm -rf .next
rm -rf node_modules/.cache
echo "✅ Build cache cleared"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
  echo "✅ Dependencies installed"
fi

# Start development server
echo "🌐 Starting Next.js development server..."
echo "-------------------------------------------"
npx next dev 