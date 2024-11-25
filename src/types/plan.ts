import { schedule } from './schedule';

export interface DynamicDays {
  [key: string]: schedule[] | undefined;
}

export interface PlanData {
  days: DynamicDays;
  tips: schedule[];
}

export interface CreateParams {
  planName: string;
  mainImg: string;
  startDate: string;
  endDate: string;
  data: PlanData;
}

interface BasePlanResult {
  mainImg: string;
  startDate: string;
  endDate: string;
  data: PlanData;
  userid: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export interface PlanResult extends BasePlanResult {
  planName: string;
  planId: string;
}

export interface RecommendedPlanResult extends BasePlanResult {
  title: string;
  RecommendedPlanId: string;
}
