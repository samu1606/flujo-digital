@echo off
echo ==========================================================
echo       GENERADOR DE IMAGENES DE MARKETING - FLUJODIGITAL
echo ==========================================================
echo.

cd marketing

echo [PASO 1/2] Capturando secciones del sitio en vivo...
node scripts/capture.js
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Hubo un problema al capturar las secciones.
    pause
    exit /b %errorlevel%
)

echo.
echo [PASO 2/2] Generando las 19 imagenes de marketing...
node scripts/generate.js
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Hubo un problema al generar las imagenes finales.
    pause
    exit /b %errorlevel%
)

echo.
echo ==========================================================
echo   PROCESO COMPLETADO EXITOSAMENTE
echo   Imagenes guardadas en: flujo-digital/marketing/images/
echo ==========================================================
echo.
pause
