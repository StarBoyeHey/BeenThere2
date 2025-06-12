'use client';

import { useState } from 'react';
import { Search, Filter, Sparkles, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: { industry: string; difficulty: string; role: string; experienceType: string }) => void;
}

export default function SearchBar({ onSearch, onFilterChange }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    industry: '',
    difficulty: '',
    role: '',
    experienceType: ''
  });

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    setFilters({ industry: '', difficulty: '', role: '', experienceType: '' });
    onFilterChange({ industry: '', difficulty: '', role: '', experienceType: '' });
  };

  const hasActiveFilters = Object.values(filters).some(f => f && f !== 'all');

  return (
    <div className="w-full max-w-6xl mx-auto mb-12">
      {/* Search Input */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50" />
        <div className="relative bg-gradient-to-r from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-slate-700/50 shadow-2xl overflow-hidden">
          <div className="flex items-center">
            <div className="p-4">
              <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <Input
              type="text"
              placeholder="Search companies, roles, technologies, or anything..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="flex-1 border-0 bg-transparent text-lg placeholder:text-slate-500 dark:placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0 h-16"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSearch('')}
                className="mr-2 h-8 w-8 p-0 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            <div className="p-2">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filters */}
      <div className="bg-gradient-to-r from-white/80 to-white/60 dark:from-slate-900/80 dark:to-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/30 dark:border-slate-700/50 shadow-xl">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <Filter className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Filters:</span>
          </div>
          
          <Select value={filters.industry} onValueChange={(value) => handleFilterChange('industry', value)}>
            <SelectTrigger className="w-48 bg-gradient-to-r from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border-slate-300/50 dark:border-slate-600/50 hover:border-blue-400/50 transition-all duration-300">
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/30 dark:border-slate-700/50">
              <SelectItem value="all">All Industries</SelectItem>
              <SelectItem value="Technology">🔧 Technology</SelectItem>
              <SelectItem value="E-commerce">🛒 E-commerce</SelectItem>
              <SelectItem value="E-commerce/Cloud">☁️ E-commerce/Cloud</SelectItem>
              <SelectItem value="FinTech">💳 FinTech</SelectItem>
              <SelectItem value="Food Tech">🍕 Food Tech</SelectItem>
              <SelectItem value="Software/Creative">🎨 Software/Creative</SelectItem>
              <SelectItem value="Cloud/CRM">☁️ Cloud/CRM</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.experienceType} onValueChange={(value) => handleFilterChange('experienceType', value)}>
            <SelectTrigger className="w-48 bg-gradient-to-r from-white/80 to-white/60  dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border-slate-300/50 dark:border-slate-600/50 hover:border-blue-400/50 transition-all duration-300">
              <SelectValue placeholder="Experience Type" />
            </SelectTrigger>
            <SelectContent className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/30 dark:border-slate-700/50">
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Full-time">💼 Full-time</SelectItem>
              <SelectItem value="Internship">🎓 Internship</SelectItem>
              <SelectItem value="PPO">🏆 PPO Conversion</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.difficulty} onValueChange={(value) => handleFilterChange('difficulty', value)}>
            <SelectTrigger className="w-48 bg-gradient-to-r from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border-slate-300/50 dark:border-slate-600/50 hover:border-blue-400/50 transition-all duration-300">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/30 dark:border-slate-700/50">
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="Easy">🟢 Easy</SelectItem>
              <SelectItem value="Medium">🟡 Medium</SelectItem>
              <SelectItem value="Hard">🔴 Hard</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.role} onValueChange={(value) => handleFilterChange('role', value)}>
            <SelectTrigger className="w-48 bg-gradient-to-r from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border-slate-300/50 dark:border-slate-600/50 hover:border-blue-400/50 transition-all duration-300">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/30 dark:border-slate-700/50">
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="SDE-1">👨‍💻 SDE-1</SelectItem>
              <SelectItem value="SDE-2">🚀 SDE-2</SelectItem>
              <SelectItem value="Product Manager">📊 Product Manager</SelectItem>
              <SelectItem value="Data Scientist">📈 Data Scientist</SelectItem>
              <SelectItem value="DevOps Engineer">⚙️ DevOps Engineer</SelectItem>
              <SelectItem value="ML Engineer">🤖 ML Engineer</SelectItem>
              <SelectItem value="Financial Analyst">💰 Financial Analyst</SelectItem>
            </SelectContent>
          </Select>

          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 border-red-300/50 dark:border-red-700/50 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/50 transition-all duration-300 hover:scale-105"
            >
              <X className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}