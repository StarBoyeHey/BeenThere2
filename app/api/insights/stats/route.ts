import { NextRequest, NextResponse } from 'next/server';
import { InsightsAPI } from '@/lib/api/insights';

export async function GET() {
  try {
    const response = await InsightsAPI.getInsightsStats();

    if (!response.success) {
      return NextResponse.json({ error: response.error }, { status: 400 });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}