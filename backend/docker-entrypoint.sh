#!/bin/sh
set -e

echo "🚀 Starting backend..."

echo "⏳ Waiting for database..."
until PGPASSWORD=todo_pass psql -h db -U todo_user -d todo_db -c '\q' 2>/dev/null; do
  echo "⏳ Database is unavailable - sleeping"
  sleep 2
done

echo "✅ Database is ready!"

echo "🔄 Running Prisma migrations..."
npx prisma migrate deploy

echo "✅ Migrations applied!"

echo "🎉 Starting NestJS application..."
exec node dist/main.js
