'use client';

import { useState, useEffect } from 'react';
import { DatabaseInsight } from '@/lib/db';

export function useInsights(category?: string, searchQuery?: string) {
  const [insights, setInsights] = useState<DatabaseInsight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInsights = async () => {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();
        if (category && category !== 'all') params.append('category', category);
        if (searchQuery) params.append('search', searchQuery);

        const response = await fetch(`/api/insights?${params.toString()}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch insights');
        }

        const data = await response.json();
        setInsights(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, [category, searchQuery]);

  return { insights, loading, error };
}

export function useInsight(id: string) {
  const [insight, setInsight] = useState<DatabaseInsight | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInsight = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/insights/${id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch insight');
        }

        const data = await response.json();
        setInsight(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchInsight();
    }
  }, [id]);

  const likeInsight = async () => {
    try {
      const response = await fetch(`/api/insights/${id}/like`, {
        method: 'POST',
      });

      if (response.ok && insight) {
        setInsight({ ...insight, likes: insight.likes + 1 });
      }
    } catch (err) {
      console.error('Failed to like insight:', err);
    }
  };

  return { insight, loading, error, likeInsight };
}

export function useInsightsStats() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/insights/stats');
        
        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }

        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading, error };
}