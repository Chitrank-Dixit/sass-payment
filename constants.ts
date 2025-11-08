
import { Plan, PlanTier } from './types';

export const PLANS: Plan[] = [
  {
    id: PlanTier.FREE,
    name: 'Free',
    price: 0,
    pricePeriod: 'month',
    description: 'For individuals starting out.',
    features: [
      '1 Project',
      'Basic Analytics',
      'Limited Support',
      '10 GB Storage',
    ],
  },
  {
    id: PlanTier.PRO,
    name: 'Pro',
    price: 29,
    pricePeriod: 'month',
    description: 'For growing teams and professionals.',
    features: [
      '25 Projects',
      'Advanced Analytics',
      'Priority Email Support',
      '100 GB Storage',
      'Team Collaboration',
    ],
    isMostPopular: true,
  },
  {
    id: PlanTier.ENTERPRISE,
    name: 'Enterprise',
    price: 99,
    pricePeriod: 'month',
    description: 'For large organizations needing more.',
    features: [
      'Unlimited Projects',
      'Custom Analytics & Reporting',
      '24/7 Dedicated Support',
      '1 TB Storage',
      'Single Sign-On (SSO)',
    ],
  },
];
