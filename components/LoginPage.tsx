
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { GoogleIcon } from './icons/GoogleIcon';
import { GithubIcon } from './icons/GithubIcon';

export const LoginPage: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">Sign in to manage your subscriptions.</p>
        
        <div className="space-y-4">
          <button
            onClick={login}
            className="w-full flex items-center justify-center py-3 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-200 font-semibold transition-colors duration-300"
          >
            <GoogleIcon className="w-6 h-6 mr-3" />
            Sign in with Google
          </button>
          <button
            onClick={login}
            className="w-full flex items-center justify-center py-3 px-4 bg-gray-800 hover:bg-gray-900 rounded-lg text-white font-semibold transition-colors duration-300"
          >
            <GithubIcon className="w-6 h-6 mr-3" />
            Sign in with GitHub
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          By signing in, you agree to our <a href="#" className="font-medium text-indigo-500 hover:underline">Terms of Service</a>.
        </div>
      </div>
    </div>
  );
};
