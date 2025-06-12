'use client';

import { useState, useMemo } from 'react';
import { companies, calculateSuccessRates, getDynamicStats } from '@/data/companies';
import CompanyCard from '@/components/CompanyCard';
import SearchBar from '@/components/SearchBar';
import Header from '@/components/Header';
import { Company } from '@/types/company';
import { Sparkles, Rocket, Target, Users, TrendingUp, Star } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    industry: '',
    difficulty: '',
    role: '',
    experienceType: ''
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

      // Experience type filter
      const matchesExperienceType = filters.experienceType === '' || filters.experienceType === 'all' ||
        company.experiences.some(exp => exp.experienceType === filters.experienceType);

      return matchesSearch && matchesIndustry && matchesRole && matchesDifficulty && matchesExperienceType;
    });
  }, [searchQuery, filters]);

  // Get dynamic statistics
  const stats = getDynamicStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <Header />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section with enhanced styling */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Sparkles className="w-96 h-96 text-blue-500 animate-pulse" />
          </div>
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                Get Interview Insights
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-gradient">
                from Seniors
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Connect with seniors who've been through the interview process. Get valuable insights, 
              preparation tips, and real experiences to ace your campus placements.
            </p>

            {/* Enhanced stats cards with dynamic data */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-xl rounded-2xl p-4 border border-white/30 dark:border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-center mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {stats.totalCompanies}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Companies</div>
              </div>

              <div className="bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-xl rounded-2xl p-4 border border-white/30 dark:border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-center mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stats.totalExperiences}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Experiences</div>
              </div>

              <div className="bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-xl rounded-2xl p-4 border border-white/30 dark:border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-center mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20">
                    <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {stats.overallSuccessRate}%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Success Rate</div>
              </div>

              <div className="bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-xl rounded-2xl p-4 border border-white/30 dark:border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-center mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20">
                    <Star className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  {stats.avgRating}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Avg Rating</div>
              </div>
            </div>

            {/* Experience type breakdown with dynamic data */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{stats.fullTimeCount}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Full-time</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{stats.internshipCount}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{stats.ppoCount}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">PPO Conversions</div>
              </div>
            </div>
          </div>
        </div>

        <SearchBar 
          onSearch={setSearchQuery}
          onFilterChange={setFilters}
        />

        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                {searchQuery || Object.values(filters).some(f => f && f !== 'all') ? 'Search Results' : 'All Companies'}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                {filteredCompanies.length} compan{filteredCompanies.length !== 1 ? 'ies' : 'y'} found
              </p>
            </div>
            
            {(searchQuery || Object.values(filters).some(f => f && f !== 'all')) && (
              <div className="text-sm bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full px-4 py-2 border border-blue-200 dark:border-blue-700">
                {searchQuery && (
                  <span className="text-slate-700 dark:text-slate-300">
                    Searching for: <strong className="text-blue-600 dark:text-blue-400">"{searchQuery}"</strong>
                  </span>
                )}
              </div>
            )}
          </div>

          {filteredCompanies.length === 0 ? (
            <div className="text-center py-20">
              <div className="relative mb-8">
                <div className="text-8xl mb-4 animate-float">🔍</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4">No companies found</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCompanies.map((company, index) => (
                <div 
                  key={company.id} 
                  className="animate-float"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CompanyCard company={company} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/50">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                  <Rocket className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Want to Share Your Experience?
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Help future batches by sharing your interview experience. Your insights could be the key 
                to someone's success story.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="group bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/30 dark:to-blue-800/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">📝</div>
                  <p className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Share Experience</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Add your interview story</p>
                </div>
                
                <div className="group bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/30 dark:to-purple-800/20 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-700/50 hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">💡</div>
                  <p className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Give Tips</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Help others prepare better</p>
                </div>
                
                <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-900/30 dark:to-emerald-800/20 rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-700/50 hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">🤝</div>
                  <p className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Mentor Juniors</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Guide the next batch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}