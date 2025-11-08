
import React, { useState, FormEvent } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Plan } from '../types';
import { LockIcon } from './icons/LockIcon';
import { SpinnerIcon } from './icons/SpinnerIcon';

interface PaymentModalProps {
  plan: Plan;
  onClose: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ plan, onClose }) => {
    const { subscribe } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call for payment processing
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
            // After success animation/message, subscribe and close
            setTimeout(() => {
                subscribe(plan);
                onClose();
            }, 1500);
        }, 2000);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 transition-opacity duration-300" onClick={onClose}>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-8 transform transition-all duration-300 scale-100" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Upgrade to {plan.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Complete your payment to activate your plan.</p>

                {isSuccess ? (
                    <div className="text-center py-10">
                         <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                             <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                         </div>
                         <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mt-4">Payment Successful!</h3>
                         <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Your subscription is now active.</p>
                     </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name on Card</label>
                                <input type="text" id="card-name" defaultValue="Alex Doe" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                            </div>
                            <div>
                                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Card Number</label>
                                <input type="text" id="card-number" placeholder="**** **** **** 1234" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                            </div>
                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Expiry Date</label>
                                    <input type="text" id="expiry-date" placeholder="MM / YY" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 dark:text-gray-300">CVC</label>
                                    <input type="text" id="cvc" placeholder="123" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                             <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <SpinnerIcon className="animate-spin h-5 w-5 text-white" />
                                ) : (
                                    <>
                                        <LockIcon className="w-5 h-5 mr-2" />
                                        Pay ${plan.price}
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
                
                <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 text-center">
                    Secure payments powered by a fictional payment provider.
                </p>
            </div>
        </div>
    );
};
