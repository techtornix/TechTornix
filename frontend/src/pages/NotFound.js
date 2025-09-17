import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Techtornix</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Techtornix homepage." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 animate-fadein">
        <div className="container-custom text-center">
          <div className="transition-all duration-700 opacity-100 translate-y-0 animate-fadein-up">
            {/* 404 Animation */}
            <div className="mb-8">
              <div className="text-8xl md:text-9xl font-bold gradient-text mb-4 transition-transform duration-500 scale-100 animate-scalein">
                404
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8 animate-fadein" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-500 opacity-100 translate-y-0 animate-fadein-up">
              Oops! Page Not Found
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto transition-all duration-500 opacity-100 translate-y-0 animate-fadein-up">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500 opacity-100 translate-y-0 animate-fadein-up">
              <Link
                to="/"
                className="btn-primary group"
              >
                <FiHome className="w-5 h-5 mr-2" />
                <span>Go Home</span>
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="btn-outline group"
              >
                <FiArrowLeft className="w-5 h-5 mr-2" />
                <span>Go Back</span>
              </button>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 transition-all duration-500 opacity-100 translate-y-0 animate-fadein-up">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Or explore these popular pages:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/services"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  Our Services
                </Link>
                <Link
                  to="/portfolio"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  Portfolio
                </Link>
                <Link
                  to="/about"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="/contact#contact-form"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
  </div>
    </>
  );
};

export default NotFound;
