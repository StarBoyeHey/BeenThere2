// API layer for insights
import { insightsDB, DatabaseInsight } from '@/lib/db';

export interface InsightResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export class InsightsAPI {
  static async getAllInsights(): Promise<InsightResponse> {
    try {
      const insights = await insightsDB.getAllInsights();
      return { success: true, data: insights };
    } catch (error) {
      return { success: false, error: 'Failed to fetch insights' };
    }
  }

  static async getInsightsByCategory(category: string): Promise<InsightResponse> {
    try {
      const insights = await insightsDB.getInsightsByCategory(category);
      return { success: true, data: insights };
    } catch (error) {
      return { success: false, error: 'Failed to fetch insights by category' };
    }
  }

  static async getInsightById(id: string): Promise<InsightResponse> {
    try {
      const insight = await insightsDB.getInsightById(id);
      if (!insight) {
        return { success: false, error: 'Insight not found' };
      }
      return { success: true, data: insight };
    } catch (error) {
      return { success: false, error: 'Failed to fetch insight' };
    }
  }

  static async searchInsights(query: string): Promise<InsightResponse> {
    try {
      const insights = await insightsDB.searchInsights(query);
      return { success: true, data: insights };
    } catch (error) {
      return { success: false, error: 'Failed to search insights' };
    }
  }

  static async likeInsight(id: string): Promise<InsightResponse> {
    try {
      const success = await insightsDB.likeInsight(id);
      if (!success) {
        return { success: false, error: 'Insight not found' };
      }
      return { success: true, data: { message: 'Insight liked successfully' } };
    } catch (error) {
      return { success: false, error: 'Failed to like insight' };
    }
  }

  static async createInsight(insightData: any): Promise<InsightResponse> {
    try {
      const insight = await insightsDB.createInsight(insightData);
      return { success: true, data: insight };
    } catch (error) {
      return { success: false, error: 'Failed to create insight' };
    }
  }

  static async getInsightsStats(): Promise<InsightResponse> {
    try {
      const stats = await insightsDB.getInsightsStats();
      return { success: true, data: stats };
    } catch (error) {
      return { success: false, error: 'Failed to fetch insights statistics' };
    }
  }
}