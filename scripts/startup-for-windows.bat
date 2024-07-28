@echo off

cd ../backend

call mvn clean install -DskipTests || goto :error

cd ..

docker compose up -d || goto :error

cd ./backend

mvn clean || goto :error

goto :end

:error
echo An error occurred during the execution of the script.
pause

:end