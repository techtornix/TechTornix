@echo off
echo Deploying Techtornix Backend to Vercel...
echo.

echo Checking Vercel CLI installation...
vercel --version
if %errorlevel% neq 0 (
    echo Vercel CLI not found. Installing...
    npm install -g vercel
)

echo.
echo Logging into Vercel...
vercel login

echo.
echo Deploying to production...
vercel --prod

echo.
echo Deployment complete!
echo Don't forget to set up environment variables in Vercel dashboard:
echo - MONGODB_URI
echo - JWT_SECRET  
echo - EMAIL_USER
echo - EMAIL_PASS
echo - CLIENT_URL
echo.
pause
