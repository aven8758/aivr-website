@echo off
title AIVR Website
cd /d "%~dp0"

echo ========================================
echo   AIVR Website - Local Server
echo ========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js is not installed.
  echo Download from https://nodejs.org/
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
  )
)

echo Cleaning old build cache...
if exist .next rmdir /s /q .next

echo Checking port 3000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3000" ^| findstr "LISTENING"') do (
  echo Port 3000 is in use by PID %%a — stopping it...
  taskkill /PID %%a /F >nul 2>&1
)

echo.
echo Starting server...
echo Open in browser: http://localhost:3000
echo Keep this window open while viewing the site.
echo Press Ctrl+C to stop.
echo.

call npm run dev

pause
