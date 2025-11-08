
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Plan, PlanTier } from '../types';

interface AuthContextType {
  user: User | null;
  currentPlan: Plan | null;
  login: () => void;
  logout: () => void;
  subscribe: (plan: Plan) => void;
  cancelSubscription: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [currentPlan, setCurrentPlan] = useState<Plan | null>(null);

  const login = () => {
    // Simulate a login
    setUser({
      name: 'Alex Doe',
      email: 'alex.doe@example.com',
      avatarUrl: 'https://picsum.photos/100',
    });
    // By default, a logged in user might not have a plan yet
    setCurrentPlan(null); 
  };

  const logout = () => {
    setUser(null);
    setCurrentPlan(null);
  };

  const subscribe = (plan: Plan) => {
    if (user) {
      setCurrentPlan(plan);
    }
  };

  const cancelSubscription = () => {
      // In a real app, this would likely revert to a free plan or deactivate.
      // Here, we'll send them back to the pricing page.
      setCurrentPlan(null);
  }

  return (
    <AuthContext.Provider value={{ user, currentPlan, login, logout, subscribe, cancelSubscription }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
