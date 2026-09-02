@echo off
title Wanderlust Travel App Launcher
echo ===================================================
echo     Launching Wanderlust Travel Application...
echo ===================================================
echo.
cd /d "%~dp0"
echo Opening server at http://localhost:3000...
echo.
npm run dev
pause
