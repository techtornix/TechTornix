# Render Backend Deployment Guide (Permanent Free)

## Why Render?
- **Permanent Free**: 750 hours/month (24/7 coverage)
- **Auto-sleep**: Saves resources, wakes up in ~30 seconds
- **No credit card**: Required for free tier
- **Custom domains**: Free SSL certificates
- **GitHub integration**: Auto-deploy on push

## Step-by-Step Deployment

### 1. Prepare Your Repository
Ensure your backend code is on GitHub with:
- `package.json` with start script
- Environment variables in `.env.example`
- Health endpoint at `/api/health`

### 2. Deploy to Render
1. Go to [render.com](https://render.com)
2. Sign up with GitHub account
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure deployment:
   ```
   Name: techtornix-backend
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   ```

### 3. Set Environment Variables
In Render dashboard, add these environment variables:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/techtornix
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
CLIENT_URL=https://techtornix.com
NODE_ENV=production
EMAIL_USER=your-email@gmail.com (optional)
EMAIL_PASS=your-app-password (optional)
```

### 4. Custom Domain (Optional)
- Add custom domain in Render dashboard
- Update DNS records as instructed
- SSL certificate auto-generated

## Your Render URLs
- **Default**: `https://techtornix-backend.onrender.com`
- **Health Check**: `https://techtornix-backend.onrender.com/api/health`
- **Custom Domain**: `https://api.techtornix.com` (if configured)

## Important Notes
- **Cold starts**: ~30 seconds wake-up time after 15 minutes inactivity
- **Free tier limits**: 750 hours/month (enough for 24/7)
- **Auto-deploy**: Pushes to main branch auto-deploy
- **Logs**: Available in Render dashboard

## Troubleshooting
- **Build fails**: Check package.json start script
- **Environment variables**: Verify all required vars are set
- **CORS errors**: Ensure CLIENT_URL matches frontend domain
- **Database connection**: Check MongoDB Atlas IP whitelist (0.0.0.0/0)

## Performance Tips
- Keep backend active with uptime monitoring (UptimeRobot)
- Optimize cold start time with lightweight dependencies
- Use caching for frequently accessed data
