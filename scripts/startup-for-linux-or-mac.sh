#!/bin/bash

cd ../backend || { echo "Failed to change directory to ./backend"; exit 1; }

mvn clean install -DskipTests || { echo "Maven build failed"; exit 1; }

cd .. || { echo "Failed to change directory to parent"; exit 1; }

docker compose up -d || { echo "Docker Compose failed"; exit 1; }

cd ./backend || { echo "Failed to change directory to ./backend"; exit 1; }

mvn clean || { echo "Maven clean failed"; exit 1; }

echo "Script completed successfully"

