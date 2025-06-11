import { companies } from '@/data/companies';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import ExperienceCard from '@/components/ExperienceCard';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star, MapPin, Users, ExternalLink, TrendingUp, Award, Clock, Target } from 'lucide-react';
import Link from 'next/link';

interface CompanyPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return companies.map((company) => ({
    id: company.id,
  }));
}

export default function CompanyPage({ params }: CompanyPageProps) {
  const company = companies.find(c => c.id === params.id);

  if (!company) {
    notFound();
  }

  const totalExperiences = company.experiences.length;
  const selectedCount = company.experiences.filter(exp => exp.selected).length;
  const selectionRate = totalExperiences > 0 ? (selectedCount / totalExperiences * 100).toFixed(1) : '0';

  const avgPackage = company.experiences.length > 0 
    ? company.experiences.reduce((acc, exp) => {
        const packageValue = parseFloat(exp.package.replace(/[₹LPA\s]/g, ''));
        return acc + packageValue;
      }, 0) / company.experiences.length
    : 0;

  const roles = [...new Set(company.experiences.map(exp => exp.role))];
  const difficulties = company.experiences.map(exp => exp.difficulty);
  const difficultyCount = {
    Easy: difficulties.filter(d => d === 'Easy').length,
    Medium: difficulties.filter(d => d === 'Medium').length,
    Hard: difficulties.filter(d => d === 'Hard').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Company Header */}
        <div className="mb-8">
          <Link href="/" className="text-primary hover:text-primary/80 mb-4 inline-flex items-center gap-2">
            ← Back to Companies
          </Link>
          
          <Card className="shadow-xl border-2 border-border">
            <CardHeader className="pb-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{company.logo}</div>
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{company.name}</h1>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary" className="text-sm">
                        {company.industry}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{company.rating}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground max-w-2xl">{company.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{company.size} employees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <a href={company.website} target="_blank" rel="noopener noreferrer" 
                       className="text-primary hover:text-primary/80">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{selectionRate}%</div>
              <p className="text-sm text-muted-foreground">Selection Rate</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹{avgPackage.toFixed(1)} LPA</div>
              <p className="text-sm text-muted-foreground">Avg Package</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{roles.length}</div>
              <p className="text-sm text-muted-foreground">Different Roles</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{totalExperiences}</div>
              <p className="text-sm text-muted-foreground">Total Experiences</p>
            </CardContent>
          </Card>
        </div>

        {/* Roles and Difficulty Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Available Roles</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {roles.map((role, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {role}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Difficulty Distribution</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(difficultyCount).map(([difficulty, count]) => (
                  <div key={difficulty} className="flex items-center justify-between">
                    <span className="text-sm">{difficulty}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            difficulty === 'Easy' ? 'bg-green-500' :
                            difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${(count / totalExperiences) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experiences */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Interview Experiences ({totalExperiences})
          </h2>
          
          {company.experiences.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No experiences shared yet</h3>
                <p className="text-muted-foreground">Be the first to share your interview experience!</p>
              </CardContent>
            </Card>
          ) : (
            <div>
              {company.experiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}