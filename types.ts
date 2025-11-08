
export interface User {
  name: string;
  email: string;
  avatarUrl: string;
}

export enum PlanTier {
    FREE = 'Free',
    PRO = 'Pro',
    ENTERPRISE = 'Enterprise',
}

export interface Plan {
  id: PlanTier;
  name: string;
  price: number;
  pricePeriod: 'month' | 'year';
  description: string;
  features: string[];
  isMostPopular?: boolean;
}

export interface BillingInvoice {
  id: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Failed';
  planName: string;
}
