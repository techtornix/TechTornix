# Vercel Backend Deployment Instructions

## Prerequisites
- Vercel CLI installed: `npm i -g vercel`
- MongoDB Atlas database setup
- Environment variables ready

## Environment Variables Setup

Set these in your Vercel dashboard (Project Settings > Environment Variables):

```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/techtornix?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CLIENT_URL=https://techtornix.com
NODE_ENV=production
```

## Deployment Steps

1. **Login to Vercel**
   ```bash
   vercel login
   ```

2. **Deploy from project root**
   ```bash
   vercel --prod
   ```

3. **Set up environment variables** (if not done via dashboard)
   ```bash
   vercel env add MONGODB_URI
   vercel env add JWT_SECRET
   vercel env add EMAIL_USER
   vercel env add EMAIL_PASS
   vercel env add CLIENT_URL
   ```

## API Endpoints Available

- `GET /api/health` - Health check
- `POST /api/auth/login` - Admin login
- `GET/POST /api/blog` - Blog operations
- `GET/POST /api/contact` - Contact form
- `GET/POST /api/services` - Services data
- `GET/POST /api/portfolio` - Portfolio projects
- `GET/POST /api/careers` - Job listings and applications
- `GET/POST /api/admin` - Admin dashboard
- `GET/POST /api/admin/analytics` - Analytics data

## CORS Configuration

The backend is configured to accept requests from:
- `https://techtornix.com`
- `https://www.techtornix.com`
- `http://localhost:3000` (development)
- Your `CLIENT_URL` environment variable

## Database Models

All models are defined within the serverless functions for optimal performance:
- Admin
- Blog
- Contact
- Service
- Portfolio
- Job
- Application
- Analytics

## Testing

After deployment, test your endpoints:
```bash
curl https://your-vercel-domain.vercel.app/api/health
```

## Frontend Integration

Update your frontend API base URL to point to your Vercel backend:
```javascript
const API_BASE_URL = 'https://your-vercel-domain.vercel.app/api';
```
