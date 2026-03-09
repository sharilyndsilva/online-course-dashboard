@echo off
echo ====================================
echo  CourseHub - Startup Script
echo ====================================
echo.
echo [1/2] Starting JSON Server on port 3000...
start cmd /k "cd /d %~dp0 && npx json-server --watch db.json --port 3000"

echo Waiting 3 seconds...
timeout /t 3 /nobreak > nul

echo [2/2] Starting Angular App on port 4200...
start cmd /k "cd /d %~dp0 && npx ng serve --open"

echo.
echo ====================================
echo  JSON Server : http://localhost:3000
echo  Angular App : http://localhost:4200
echo ====================================
pause
