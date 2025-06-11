'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
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
  onFilterChange: (filters: { industry: string; difficulty: string; role: string }) => void;
}

export default function SearchBar({ onSearch, onFilterChange }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    industry: '',
    difficulty: '',
    role: ''
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

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search companies, roles, or technologies..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-4 py-3 text-lg border-2 focus:border-primary rounded-xl"
        />
      </div>
      
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Filters:</span>
        </div>
        
        <Select value={filters.industry} onValueChange={(value) => handleFilterChange('industry', value)}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Industries</SelectItem>
            <SelectItem value="Technology">Technology</SelectItem>
            <SelectItem value="E-commerce">E-commerce</SelectItem>
            <SelectItem value="E-commerce/Cloud">E-commerce/Cloud</SelectItem>
            <SelectItem value="FinTech">FinTech</SelectItem>
            <SelectItem value="Food Tech">Food Tech</SelectItem>
            <SelectItem value="Software/Creative">Software/Creative</SelectItem>
            <SelectItem value="Cloud/CRM">Cloud/CRM</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.difficulty} onValueChange={(value) => handleFilterChange('difficulty', value)}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.role} onValueChange={(value) => handleFilterChange('role', value)}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="Software Engineer">Software Engineer</SelectItem>
            <SelectItem value="Product Manager">Product Manager</SelectItem>
            <SelectItem value="Backend Developer">Backend Developer</SelectItem>
            <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
            <SelectItem value="Software Development Engineer">SDE</SelectItem>
          </SelectContent>
        </Select>

        {(filters.industry || filters.difficulty || filters.role) && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setFilters({ industry: '', difficulty: '', role: '' });
              onFilterChange({ industry: '', difficulty: '', role: '' });
            }}
            className="text-muted-foreground"
          >
            Clear Filters
          </Button>
        )}
      </div>
    </div>
  );
}