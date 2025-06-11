import { Company } from '@/types/company';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Hard': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const avgDifficulty = company.experiences.length > 0 
    ? company.experiences.reduce((acc, exp) => {
        const diffScore = exp.difficulty === 'Easy' ? 1 : exp.difficulty === 'Medium' ? 2 : 3;
        return acc + diffScore;
      }, 0) / company.experiences.length
    : 0;

  const difficultyLabel = avgDifficulty <= 1.5 ? 'Easy' : avgDifficulty <= 2.5 ? 'Medium' : 'Hard';

  return (
    <Link href={`/company/${company.id}`}>
      <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20 h-full">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{company.logo}</div>
              <div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                <Badge variant="secondary" className="mt-1">
                  {company.industry}
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{company.rating}</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {company.description}
          </p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{company.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{company.size} employees</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Badge className={getDifficultyColor(difficultyLabel)}>
                {difficultyLabel} Level
              </Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              {company.experiences.length} experience{company.experiences.length !== 1 ? 's' : ''}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-border">
            <div className="flex flex-wrap gap-1">
              {company.experiences.slice(0, 3).map((exp, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {exp.role}
                </Badge>
              ))}
              {company.experiences.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{company.experiences.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}