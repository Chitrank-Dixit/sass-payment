
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogoIcon } from './icons/LogoIcon';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <LogoIcon className="h-8 w-8 text-indigo-500" />
            <span className="ml-3 text-xl font-bold text-gray-800 dark:text-white">SaaS Manager</span>
          </div>
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={user.avatarUrl} alt="User avatar" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800 dark:text-white">{user.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{user.email}</div>
                </div>
                <button
                  onClick={logout}
                  className="ml-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Logout
                </button>
              </div>
            ) : null }
          </div>
        </div>
      </div>
    </header>
  );
};
