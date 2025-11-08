
import React, { useState, useCallback } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LoginPage } from './components/LoginPage';
import { PricingPage } from './components/PricingPage';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Plan, User } from './types';

const AppContent: React.FC = () => {
    const { user, currentPlan } = useAuth();

    if (!user) {
        return <LoginPage />;
    }

    if (!currentPlan) {
        return <PricingPage />;
    }

    return <Dashboard />;
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <Header />
                <main className="p-4 sm:p-6 md:p-8">
                    <AppContent />
                </main>
            </div>
        </AuthProvider>
    );
};

export default App;
