export interface Limit {
  id: number;
  pair: string;
  limit: number;
  currency: string;
  remainingLimitAmount: number;
  remainingLimitPercentage: number;
  net: Amount;
  buy: Amount;
  sell: Amount;
  modifiedBy: string;
  modificationDate: Date;
}

export interface Amount{
  amount: number;
  currency: string;
  equivalent: number;
  equivalentCurrency: string;
  averageRate: number;
}