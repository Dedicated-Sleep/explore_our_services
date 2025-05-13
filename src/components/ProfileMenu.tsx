import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Calendar, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileMenu({ isOpen, onClose }: ProfileMenuProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg py-2 border border-gray-100"
        >
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-semibold">
                {user.initials}
              </div>
              <div>
                <h3 className="text-sm font-semibold">{user.fullName}</h3>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
            <div className="mt-2">
              <span className="inline-block bg-brand-secondary/10 text-brand-secondary text-xs font-medium px-2.5 py-1 rounded">
                {user.role}
              </span>
            </div>
            <div className="mt-1">
              <span className="text-xs text-gray-500">
                {user.department}
              </span>
            </div>
          </div>

          <div className="py-1">
            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>My Profile</span>
            </button>
            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Appointments</span>
            </button>
            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </button>
          </div>

          <div className="border-t border-gray-100 pt-1">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Log Out</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}