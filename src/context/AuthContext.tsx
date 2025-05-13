import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppAccess {
  appId: string;
  role: string;
  permissions: string[];
}

interface User {
  initials: string;
  fullName: string;
  email: string;
  role: string;
  department: string;
  appAccess: AppAccess[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, appId?: string) => void;
  logout: () => void;
  hasAppAccess: (appId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string, appId?: string) => {
    // In a real app, this would validate credentials with a backend
    // and return app-specific permissions
    const newUser = {
      initials: 'DSJ',
      fullName: 'Dr. Sarah Johnson',
      email: email,
      role: 'Supervising Physician',
      department: 'Main Hospital - Cardiology Department',
      appAccess: []
    };

    if (appId) {
      // Add specific app access
      newUser.appAccess.push({
        appId,
        role: 'User',
        permissions: ['read', 'write']
      });
    } else {
      // If logging into main platform, grant access to all apps
      newUser.appAccess = [
        { appId: 'referral', role: 'Admin', permissions: ['read', 'write', 'admin'] },
        { appId: 'sleep', role: 'User', permissions: ['read', 'write'] },
        { appId: 'implant', role: 'User', permissions: ['read'] }
      ];
    }

    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const hasAppAccess = (appId: string) => {
    if (!user) return false;
    return user.appAccess.some(access => access.appId === appId);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, hasAppAccess }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}