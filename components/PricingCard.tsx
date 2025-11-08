
import React from 'react';
import { Plan } from '../types';
import { CheckIcon } from './icons/CheckIcon';

interface PricingCardProps {
  plan: Plan;
  onSelect: (plan: Plan) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, onSelect }) => {
  const popularBadge = plan.isMostPopular ? (
    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-500 text-white">
        Most Popular
      </span>
    </div>
  ) : null;

  return (
    <div className={`relative flex flex-col p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 ${plan.isMostPopular ? 'border-indigo-500' : 'border-gray-200 dark:border-gray-700'}`}>
      {popularBadge}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
        <p className="mt-4 text-gray-600 dark:text-gray-300">{plan.description}</p>
        <div className="mt-6">
          <span className="text-5xl font-extrabold text-gray-900 dark:text-white">${plan.price}</span>
          <span className="text-base font-medium text-gray-500 dark:text-gray-400">/{plan.pricePeriod}</span>
        </div>

        <ul className="mt-8 space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <CheckIcon className="w-6 h-6 text-green-500" />
              </div>
              <p className="ml-3 text-base text-gray-700 dark:text-gray-300">{feature}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <button
          onClick={() => onSelect(plan)}
          className={`w-full py-3 px-6 border border-transparent rounded-lg text-center font-medium transition-colors duration-300 ${plan.isMostPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/50 dark:text-indigo-300 dark:hover:bg-indigo-900/75'}`}
        >
          {plan.price > 0 ? 'Choose Plan' : 'Get Started'}
        </button>
      </div>
    </div>
  );
};
