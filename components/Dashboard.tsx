
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { BillingInvoice } from '../types';
import { PricingPage } from './PricingPage';

const MOCK_INVOICES: BillingInvoice[] = [
  { id: 'inv_123', date: '2024-07-01', amount: 29.00, status: 'Paid', planName: 'Pro Plan' },
  { id: 'inv_122', date: '2024-06-01', amount: 29.00, status: 'Paid', planName: 'Pro Plan' },
  { id: 'inv_121', date: '2024-05-01', amount: 29.00, status: 'Paid', planName: 'Pro Plan' },
];

export const Dashboard: React.FC = () => {
    const { user, currentPlan, cancelSubscription } = useAuth();
    const [showPricing, setShowPricing] = React.useState(false);

    if (!user || !currentPlan) {
        // This case should ideally not be hit if logic in App.tsx is correct, but it's a good fallback.
        return <PricingPage />;
    }
    
    if (showPricing) {
        return <PricingPage />;
    }

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome, {user.name}!</h1>

            {/* Current Plan Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Current Subscription</h2>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${currentPlan.isMostPopular ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300' : 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'}`}>
                            {currentPlan.name} Plan
                        </span>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">Your plan renews next on August 1, 2024.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                         <button onClick={() => setShowPricing(true)} className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-900/50 dark:text-indigo-300 dark:hover:bg-indigo-900/75">
                            Change Plan
                        </button>
                        <button onClick={cancelSubscription} className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                            Cancel Subscription
                        </button>
                    </div>
                </div>
            </div>

            {/* Billing History Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                 <div className="p-6">
                    <h2 className="text-xl font-semibold">Billing History</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Invoice ID</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Plan</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {MOCK_INVOICES.map(invoice => (
                                <tr key={invoice.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{invoice.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{invoice.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{invoice.planName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">${invoice.amount.toFixed(2)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                                            {invoice.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
