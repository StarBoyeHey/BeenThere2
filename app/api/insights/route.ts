import { NextRequest, NextResponse } from 'next/server';
import { InsightsAPI } from '@/lib/api/insights';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  try {
    let response;
    
    if (search) {
      response = await InsightsAPI.searchInsights(search);
    } else if (category) {
      response = await InsightsAPI.getInsightsByCategory(category);
    } else {
      response = await InsightsAPI.getAllInsights();
    }

    if (!response.success) {
      return NextResponse.json({ error: response.error }, { status: 400 });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await InsightsAPI.createInsight(body);

    if (!response.success) {
      return NextResponse.json({ error: response.error }, { status: 400 });
    }

    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}