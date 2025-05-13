import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock, Mail, Moon, ArrowRightLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Get the app ID from the URL search params
  const searchParams = new URLSearchParams(location.search);
  const appId = searchParams.get('app');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, appId || undefined);
    
    if (appId === 'referral') {
      navigate('/referral/environments');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-brand-secondary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl"
      >
        <div>
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to App Hub
          </button>
          <div className="flex items-center mt-6 mb-2">
            <Moon className="h-8 w-8 text-brand-primary" />
            <span className="ml-2 text-xl font-bold text-gray-900">Dedicare</span>
          </div>
          {appId ? (
            <div className="flex items-center space-x-2 mb-2">
              <ArrowRightLeft className="h-6 w-6 text-category-referral" />
              <h2 className="text-2xl font-bold text-gray-900">Referral System</h2>
            </div>
          ) : (
            <h2 className="text-2xl font-bold text-gray-900 mb-2">App Suite Login</h2>
          )}
          <p className="text-sm text-gray-600">
            {appId ? 'Sign in to access the referral management system' : 'Sign in to access all Dedicare applications'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`pl-10 block w-full rounded-lg border-gray-300 shadow-sm ${
                    appId ? 'focus:ring-category-referral focus:border-category-referral' : 'focus:ring-brand-primary focus:border-brand-primary'
                  }`}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`pl-10 block w-full rounded-lg border-gray-300 shadow-sm ${
                    appId ? 'focus:ring-category-referral focus:border-category-referral' : 'focus:ring-brand-primary focus:border-brand-primary'
                  }`}
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className={`h-4 w-4 border-gray-300 rounded ${
                  appId ? 'text-category-referral focus:ring-category-referral' : 'text-brand-primary focus:ring-brand-primary'
                }`}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className={`font-medium ${
                  appId
                    ? 'text-category-referral hover:text-category-referral/80'
                    : 'text-brand-primary hover:text-brand-primary/80'
                }`}
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
              appId
                ? 'bg-category-referral hover:bg-category-referral/90 focus:ring-category-referral'
                : 'bg-brand-primary hover:bg-brand-primary/90 focus:ring-brand-primary'
            } focus:outline-none focus:ring-2 focus:ring-offset-2`}
          >
            {appId ? 'Sign in to Referral System' : 'Sign in to Dedicare'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}