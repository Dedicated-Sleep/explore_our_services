import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Search, Bell, HelpCircle, Grid3x3, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProfileMenu from './ProfileMenu';

export default function MenuBar() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-4"></a>
              <img src="https://dedicatedcare.s3.eu-north-1.amazonaws.com/Dedicated-Sleep-TMD-Implants.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUQ4L3MS362OVUWVW%2F20250513%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250513T210543Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCmV1LW5vcnRoLTEiRjBEAiAF5n%2FbWa4VshiC15KELwzzY3cn4A5lMNqx2Y4zKZrAWgIgVCmUr8BmMh8s0Z4ybA8JrrmUSkogXHmtGwDxUW51J2EqzwMI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwzMTExNDE1NTc0MzEiDCsxTo0%2FIoQZx5IDAyqjA8bPf6t2CG5Zl2B70jbFtuh1NAclRnyQq334XAJOWKoZM%2FVWVwqIQ9o1ZWsFHqCh9q05NITfILYO%2BBUtJSJG1NJHQ%2FkgTCnmPa%2BESCXbRiGDR5fErwjYSxRR1sGfy%2F6REXSbDul9MAJBLo4d6B8KZ%2BMX8YpgMLussPNmnXFsgpQF20lBtLfGRmT3U8GIL0CyYow2S2ME4TMTYh1Hd6VLwxovtlOdYFDfqFUzXm%2B0NRSA%2BwujwHv3WGnUcYznVu2KQBkmoIDAje9qjb5ICLIhQWxj8pA%2B3VsPqK8As0HGKYG8Qaphvp3bFydOBdMNl%2BwjHrgUD73P3dVCGeTGClq%2F5lPVdM6hmjynow19SRutf7ekSq%2FedcUArjA7ioks7e0C4PI3x4ud7F4OLHyyUb%2FtFo0Ku6IqDR1n1lKXNR86JG9FaeVXnxJmG3J0w3lz%2Bk0wGJxN%2F9HQLxIc1C0Oe8AUPj9BWduBmlvq3I5e7cexgL0lnyN0KMQHdOHVsN8iwyYVAf5gWwlcJlV7sH1%2BbspOaSG6OG9giNjcIBFRY6haR8axCDARMJbkjsEGOpUCVb1EGZiYhGeL%2Bfbj4o%2BOwXKiy1CxZ4VWK36YXwkgQf3GgecGZdapg3aOiTTH%2F7qIB56ewKIBt5p88sqaWQJW%2BFkA3Yy9fi0sUdylwuilblhPTctoJQinxhL1hFDtgpoms35g0WmcCxraIM8mBnYlPk1KfTF%2BoDlHhn%2FlBmhuUL8lFGXLhxBX0lalz3LMH%2BR3zEPTAnFwnjENOefYuw65kEYMlbsKp7OIkrcTWnHzWGeYaKQFfj%2Ft39%2BsJEieuntGBWOHPBy%2B6y97JFZvTdM%2BhQ0NXI18R9WvmaoHSntrTitX98czOkyd%2F%2BM8dGxbbW%2BZljykkKhSUahIa8Vi7PxWbtShhV%2BkP66XrOCUOqf%2Fv8lNLZYwwg%3D%3D&X-Amz-Signature=5edf379a986476c48c2ee8ae8e37fbb1595e1e01f0df89e551c8f8384f2a4c97&X-Amz-SignedHeaders=host&response-content-disposition=inline" alt="Logo" className="h-16 " />
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className={`relative transition-all duration-200 ${searchFocused ? 'scale-105' : ''}`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search apps..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <motion.button 
              onClick={() => navigate('/')}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Grid3x3 className="h-5 w-5 text-gray-600" />
            </motion.button>
            {user ? (
              <>
                <motion.button 
                  className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Bell className="h-5 w-5 text-gray-600" />
                  <span className="absolute top-0 right-0 h-4 w-4 bg-brand-secondary rounded-full text-[10px] font-medium text-white flex items-center justify-center">
                    2
                  </span>
                </motion.button>
                <motion.button 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <HelpCircle className="h-5 w-5 text-gray-600" />
                </motion.button>
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="relative"
                  >
                    <div className="h-10 w-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {user.initials}
                    </div>
                  </motion.button>
                  <ProfileMenu
                    isOpen={isProfileOpen}
                    onClose={() => setIsProfileOpen(false)}
                  />
                </div>
              </>
            ) : (
              <motion.button
                onClick={() => navigate('/login')}
                className="flex items-center space-x-2 px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogIn className="h-4 w-4" />
                <span className="font-medium">Sign in</span>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}