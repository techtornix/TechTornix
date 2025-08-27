# Railway Backend Deployment Guide

## Prerequisites
1. Railway account (free tier available)
2. MongoDB Atlas account with database created
3. GitHub repository with your backend code

## Step-by-Step Deployment

### 1. Prepare Environment Variables
Set these environment variables in Railway dashboard:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/techtornix?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
CLIENT_URL=https://techtornix.com
NODE_ENV=production
EMAIL_USER=your-email@gmail.com (optional)
EMAIL_PASS=your-app-password (optional)
```

### 2. Deploy to Railway

#### Option A: Connect GitHub Repository
1. Go to [Railway.app](https://railway.app)
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Select the `backend` folder as root directory
6. Railway will automatically detect Node.js and deploy

#### Option B: Railway CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Deploy
railway up
```

### 3. Configure Domain
1. In Railway dashboard, go to your service
2. Click "Settings" → "Domains"
3. Your app will be available at: `https://your-app-name.railway.app`
4. Update frontend `.env.production` with this URL

### 4. Set Environment Variables
In Railway dashboard:
1. Go to "Variables" tab
2. Add all required environment variables
3. Click "Deploy" to restart with new variables

### 5. Verify Deployment
- Check logs in Railway dashboard
- Test health endpoint: `https://your-app-name.railway.app/api/health`
- Verify CORS is working with your frontend domain

## Important Notes
- Railway free tier: 500 hours/month, $5 credit
- Automatic deployments on git push
- Built-in SSL certificates
- Automatic scaling and monitoring
