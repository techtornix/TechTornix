# Techtornix Deployment Checklist

## Pre-Deployment Setup

### MongoDB Atlas Setup
- [ ] Create MongoDB Atlas account
- [ ] Create new cluster (free tier)
- [ ] Create database user with read/write permissions
- [ ] Whitelist IP addresses (0.0.0.0/0 for Railway)
- [ ] Get connection string

### Frontend Preparation
- [ ] Update `.env.production` with correct backend URL
- [ ] Verify all API endpoints are using environment variables
- [ ] Test build process locally
- [ ] Verify .htaccess file exists

### Backend Preparation
- [ ] Set all environment variables in Railway
- [ ] Verify CORS configuration includes production domains
- [ ] Test all API endpoints
- [ ] Ensure uploads directory handling for production

## Deployment Steps

### 1. Backend Deployment (Railway)
- [ ] Push code to GitHub repository
- [ ] Connect Railway to GitHub repo
- [ ] Set environment variables in Railway dashboard:
  - `MONGODB_URI`
  - `JWT_SECRET`
  - `CLIENT_URL=https://techtornix.com`
  - `NODE_ENV=production`
  - `EMAIL_USER` (optional)
  - `EMAIL_PASS` (optional)
- [ ] Deploy and verify health endpoint
- [ ] Note Railway URL for frontend configuration

### 2. Frontend Deployment (Hostinger)
- [ ] Update `.env.production` with Railway backend URL
- [ ] Run `build-and-deploy.bat`
- [ ] Upload `frontend/build/` contents to Hostinger `public_html/`
- [ ] Verify .htaccess file is uploaded
- [ ] Test website functionality

### 3. Admin Setup
- [ ] Run admin creation script: `node backend/scripts/createAdmin.js`
- [ ] Test admin login with credentials:
  - Username: muhammadbahawal
  - Email: bahawal.dev@gmail.com
  - Password: Bahawal@6432

## Post-Deployment Verification

### Frontend Tests
- [ ] Website loads at https://techtornix.com
- [ ] All pages accessible (Home, Services, Portfolio, etc.)
- [ ] React Router working (no 404 on refresh)
- [ ] Responsive design on mobile/tablet
- [ ] Contact form submits successfully
- [ ] Blog posts load correctly

### Backend Tests
- [ ] Health endpoint: `/api/health`
- [ ] Admin login: `/api/auth/login`
- [ ] Analytics tracking working
- [ ] File uploads working (careers, blog)
- [ ] Email notifications (contact form)

### Performance Tests
- [ ] Page load speed < 3 seconds
- [ ] Images optimized and loading
- [ ] CSS/JS compression working
- [ ] HTTPS certificate active

## Environment Variables Reference

### Railway Backend
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/techtornix
JWT_SECRET=your-long-random-secret-key
CLIENT_URL=https://techtornix.com
NODE_ENV=production
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Frontend Production
```
REACT_APP_API_URL=https://your-railway-app.railway.app
```

## Troubleshooting

### Common Issues
- **CORS errors**: Check backend CORS configuration
- **404 on refresh**: Verify .htaccess uploaded to Hostinger
- **API connection failed**: Check backend URL in frontend env
- **Admin login failed**: Verify JWT_SECRET and run createAdmin script
- **Database connection**: Check MongoDB Atlas IP whitelist and connection string
