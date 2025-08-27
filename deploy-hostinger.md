# Hostinger Deployment Guide for Techtornix

## Frontend Deployment on Hostinger (techtornix.com)

### Step 1: Build React App for Production
```bash
cd frontend
npm run build
```

### Step 2: Upload to Hostinger
1. Login to Hostinger cPanel
2. Go to File Manager
3. Navigate to public_html folder
4. Upload all contents from `frontend/build/` folder
5. Upload the `.htaccess` file to public_html root

### Step 3: File Structure on Hostinger
```
public_html/
├── index.html
├── .htaccess
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── manifest.json
└── favicon.ico
```

## Backend Deployment on Railway (Free)

### Step 1: Deploy Backend
1. Go to railway.app
2. Sign up with GitHub
3. New Project → Deploy from GitHub
4. Select your repository
5. Choose backend folder

### Step 2: Environment Variables on Railway
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/techtornix
JWT_SECRET=your-super-secret-jwt-key-12345
NODE_ENV=production
PORT=5000
CLIENT_URL=https://techtornix.com
```

### Step 3: Get Railway URL
After deployment, copy your Railway URL (e.g., https://techtornix-backend.railway.app)

## Important Configuration Changes

### Frontend Environment
- Production API URL points to Railway backend
- CORS configured for techtornix.com domain
- .htaccess handles React routing on shared hosting

### Backend CORS Setup
Backend will accept requests from techtornix.com domain
