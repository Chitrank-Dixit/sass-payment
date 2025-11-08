
import React, { useState } from 'react';
import { PLANS } from '../constants';
import { PricingCard } from './PricingCard';
import { Plan } from '../types';
import { PaymentModal } from './PaymentModal';

export const PricingPage: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

    const handleSelectPlan = (plan: Plan) => {
        if (plan.price === 0) {
            // Handle free plan selection directly if needed
            console.log("Free plan selected");
        } else {
            setSelectedPlan(plan);
        }
    };

    const handleCloseModal = () => {
        setSelectedPlan(null);
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Choose Your Plan</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Simple, transparent pricing for teams of all sizes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PLANS.map((plan) => (
                    <PricingCard key={plan.id} plan={plan} onSelect={handleSelectPlan} />
                ))}
            </div>
            
            {selectedPlan && <PaymentModal plan={selectedPlan} onClose={handleCloseModal} />}
        </div>
    );
};
