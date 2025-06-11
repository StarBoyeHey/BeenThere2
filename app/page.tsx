'use client';

import { useState, useMemo } from 'react';
import { companies } from '@/data/companies';
import CompanyCard from '@/components/CompanyCard';
import SearchBar from '@/components/SearchBar';
import Header from '@/components/Header';
import { Company } from '@/types/company';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    industry: '',
    difficulty: '',
    role: ''
  });

  const filteredCompanies = useMemo(() => {
    return companies.filter((company: Company) => {
      // Search query filter
      const matchesSearch = searchQuery === '' || 
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.experiences.some(exp => 
          exp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exp.topics.some(topic => 
            topic.subject.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );

      // Industry filter - treat both empty string and "all" as no filter
      const matchesIndustry = filters.industry === '' || filters.industry === 'all' || company.industry === filters.industry;

      // Role filter - treat both empty string and "all" as no filter
      const matchesRole = filters.role === '' || filters.role === 'all' || 
        company.experiences.some(exp => exp.role.includes(filters.role));

      // Difficulty filter - treat both empty string and "all" as no filter
      const matchesDifficulty = filters.difficulty === '' || filters.difficulty === 'all' || 
        company.experiences.some(exp => exp.difficulty === filters.difficulty);

      return matchesSearch && matchesIndustry && matchesRole && matchesDifficulty;
    });
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get Interview Insights from Seniors
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with seniors who've been through the interview process. Get valuable insights, 
            preparation tips, and real experiences to ace your campus placements.
          </p>
        </div>

        <SearchBar 
          onSearch={setSearchQuery}
          onFilterChange={setFilters}
        />

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {searchQuery || Object.values(filters).some(f => f && f !== 'all') ? 'Search Results' : 'All Companies'}
              </h2>
              <p className="text-muted-foreground">
                {filteredCompanies.length} compan{filteredCompanies.length !== 1 ? 'ies' : 'y'} found
              </p>
            </div>
            
            {(searchQuery || Object.values(filters).some(f => f && f !== 'all')) && (
              <div className="text-sm text-muted-foreground">
                {searchQuery && (
                  <span>Searching for: <strong>"{searchQuery}"</strong></span>
                )}
              </div>
            )}
          </div>

          {filteredCompanies.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No companies found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 shadow-lg border border-border">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Want to Share Your Experience?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Help future batches by sharing your interview experience. Your insights could be the key 
              to someone's success story.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-800">
                <div className="text-2xl mb-2">📝</div>
                <p className="font-medium text-foreground">Share Experience</p>
                <p className="text-sm text-muted-foreground">Add your interview story</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4 text-center border border-purple-200 dark:border-purple-800">
                <div className="text-2xl mb-2">💡</div>
                <p className="font-medium text-foreground">Give Tips</p>
                <p className="text-sm text-muted-foreground">Help others prepare better</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4 text-center border border-green-200 dark:border-green-800">
                <div className="text-2xl mb-2">🤝</div>
                <p className="font-medium text-foreground">Mentor Juniors</p>
                <p className="text-sm text-muted-foreground">Guide the next batch</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}