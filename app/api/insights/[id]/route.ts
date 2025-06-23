import { NextRequest, NextResponse } from 'next/server';
import { InsightsAPI } from '@/lib/api/insights';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const response = await InsightsAPI.getInsightById(params.id);

    if (!response.success) {
      return NextResponse.json({ error: response.error }, { status: 404 });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}