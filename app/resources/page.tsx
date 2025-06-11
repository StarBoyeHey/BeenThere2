import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Code, Database, Globe, Lightbulb, Target, Users, Video, FileText, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const resourceCategories = [
  {
    id: 'coding',
    title: 'Coding & DSA',
    icon: Code,
    description: 'Master data structures, algorithms, and competitive programming',
    resources: [
      {
        name: 'LeetCode',
        description: 'Practice coding problems with company-specific tags',
        url: 'https://leetcode.com',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['DSA', 'Coding', 'Interview Prep']
      },
      {
        name: 'GeeksforGeeks',
        description: 'Comprehensive DSA tutorials and practice problems',
        url: 'https://geeksforgeeks.org',
        type: 'Platform',
        difficulty: 'Beginner to Advanced',
        tags: ['DSA', 'Tutorials', 'Practice']
      },
      {
        name: 'Cracking the Coding Interview',
        description: 'Essential book for technical interview preparation',
        url: '#',
        type: 'Book',
        difficulty: 'Intermediate',
        tags: ['Interview', 'DSA', 'System Design']
      },
      {
        name: 'AlgoExpert',
        description: 'Curated coding interview questions with video explanations',
        url: 'https://algoexpert.io',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['DSA', 'Video', 'Interview']
      },
      {
        name: 'HackerRank',
        description: 'Coding challenges and skill assessments',
        url: 'https://hackerrank.com',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Coding', 'Practice', 'Contests']
      }
    ]
  },
  {
    id: 'system-design',
    title: 'System Design',
    icon: Database,
    description: 'Learn to design scalable and distributed systems',
    resources: [
      {
        name: 'Grokking System Design Interview',
        description: 'Comprehensive system design course with real examples',
        url: 'https://educative.io',
        type: 'Course',
        difficulty: 'Intermediate to Advanced',
        tags: ['System Design', 'Scalability', 'Architecture']
      },
      {
        name: 'System Design Primer',
        description: 'Open-source guide to system design concepts',
        url: 'https://github.com/donnemartin/system-design-primer',
        type: 'Repository',
        difficulty: 'Intermediate',
        tags: ['System Design', 'Open Source', 'Concepts']
      },
      {
        name: 'Designing Data-Intensive Applications',
        description: 'Deep dive into modern data systems and architecture',
        url: '#',
        type: 'Book',
        difficulty: 'Advanced',
        tags: ['Data Systems', 'Architecture', 'Scalability']
      },
      {
        name: 'High Scalability',
        description: 'Real-world system design case studies',
        url: 'http://highscalability.com',
        type: 'Blog',
        difficulty: 'Intermediate to Advanced',
        tags: ['Case Studies', 'Scalability', 'Architecture']
      }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    icon: Globe,
    description: 'Frontend and backend development skills',
    resources: [
      {
        name: 'MDN Web Docs',
        description: 'Comprehensive web development documentation',
        url: 'https://developer.mozilla.org',
        type: 'Documentation',
        difficulty: 'All Levels',
        tags: ['Web Dev', 'JavaScript', 'CSS', 'HTML']
      },
      {
        name: 'React Documentation',
        description: 'Official React.js documentation and tutorials',
        url: 'https://react.dev',
        type: 'Documentation',
        difficulty: 'Beginner to Advanced',
        tags: ['React', 'Frontend', 'JavaScript']
      },
      {
        name: 'Node.js Documentation',
        description: 'Server-side JavaScript development',
        url: 'https://nodejs.org/docs',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Node.js', 'Backend', 'JavaScript']
      },
      {
        name: 'The Odin Project',
        description: 'Free full-stack web development curriculum',
        url: 'https://theodinproject.com',
        type: 'Course',
        difficulty: 'Beginner to Intermediate',
        tags: ['Full Stack', 'Free', 'Curriculum']
      }
    ]
  },
  {
    id: 'behavioral',
    title: 'Behavioral Interviews',
    icon: Users,
    description: 'Soft skills and behavioral interview preparation',
    resources: [
      {
        name: 'STAR Method Guide',
        description: 'Structure your behavioral interview responses',
        url: '#',
        type: 'Guide',
        difficulty: 'All Levels',
        tags: ['Behavioral', 'Interview', 'Communication']
      },
      {
        name: 'Amazon Leadership Principles',
        description: 'Understanding Amazon\'s 16 leadership principles',
        url: 'https://amazon.jobs/principles',
        type: 'Documentation',
        difficulty: 'All Levels',
        tags: ['Amazon', 'Leadership', 'Behavioral']
      },
      {
        name: 'Behavioral Interview Questions',
        description: 'Common behavioral questions and how to answer them',
        url: '#',
        type: 'Guide',
        difficulty: 'All Levels',
        tags: ['Questions', 'Preparation', 'Examples']
      }
    ]
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance',
    icon: Target,
    description: 'Resume building, career planning, and industry insights',
    resources: [
      {
        name: 'Resume Templates',
        description: 'ATS-friendly resume templates for tech roles',
        url: '#',
        type: 'Template',
        difficulty: 'All Levels',
        tags: ['Resume', 'Template', 'ATS']
      },
      {
        name: 'LinkedIn Learning',
        description: 'Professional development and skill building',
        url: 'https://linkedin.com/learning',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Professional', 'Skills', 'Networking']
      },
      {
        name: 'Glassdoor',
        description: 'Company reviews, salaries, and interview experiences',
        url: 'https://glassdoor.com',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Company Info', 'Salaries', 'Reviews']
      }
    ]
  },
  {
    id: 'learning-platforms',
    title: 'Learning Platforms',
    icon: Video,
    description: 'Online courses and educational platforms',
    resources: [
      {
        name: 'Coursera',
        description: 'University-level courses from top institutions',
        url: 'https://coursera.org',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Courses', 'Certificates', 'University']
      },
      {
        name: 'edX',
        description: 'Free online courses from Harvard, MIT, and more',
        url: 'https://edx.org',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Free', 'University', 'Certificates']
      },
      {
        name: 'Udemy',
        description: 'Practical courses on programming and technology',
        url: 'https://udemy.com',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Practical', 'Programming', 'Technology']
      },
      {
        name: 'YouTube Channels',
        description: 'Free educational content from tech creators',
        url: '#',
        type: 'Video',
        difficulty: 'All Levels',
        tags: ['Free', 'Video', 'Tutorials']
      }
    ]
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
    case 'All Levels':
      return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400';
    case 'Intermediate':
    case 'Beginner to Intermediate':
    case 'Beginner to Advanced':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400';
    case 'Advanced':
    case 'Intermediate to Advanced':
      return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Platform':
      return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400';
    case 'Book':
      return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400';
    case 'Course':
      return 'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400';
    case 'Documentation':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400';
    case 'Repository':
      return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300';
    case 'Blog':
      return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400';
    case 'Guide':
      return 'bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-400';
    case 'Template':
      return 'bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/30 dark:text-pink-400';
    case 'Video':
      return 'bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-900/30 dark:text-rose-400';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300';
  }
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
              <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Learning Resources
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Curated collection of the best resources to help you prepare for technical interviews, 
            build your skills, and advance your career in technology.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resourceCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5 rounded-3xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                      <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h2>
                      <p className="text-slate-600 dark:text-slate-300">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Resources Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.resources.map((resource, index) => (
                      <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border border-white/30 dark:border-slate-600/30">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {resource.name}
                            </CardTitle>
                            {resource.url !== '#' && (
                              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                            )}
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {resource.description}
                          </p>
                        </CardHeader>
                        
                        <CardContent className="pt-0">
                          <div className="space-y-3">
                            {/* Type and Difficulty Badges */}
                            <div className="flex flex-wrap gap-2">
                              <Badge className={`${getTypeColor(resource.type)} text-xs font-medium`}>
                                {resource.type}
                              </Badge>
                              <Badge className={`${getDifficultyColor(resource.difficulty)} text-xs font-medium`}>
                                {resource.difficulty}
                              </Badge>
                            </div>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-1">
                              {resource.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            {/* Link */}
                            {resource.url !== '#' && (
                              <Link 
                                href={resource.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                              >
                                Visit Resource
                                <ExternalLink className="w-3 h-3" />
                              </Link>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/50">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
                  <Lightbulb className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
                  Have a Great Resource?
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Know of an amazing resource that helped you in your interview preparation? 
                Share it with the community to help future candidates succeed!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contribute" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <FileText className="w-5 h-5" />
                  Suggest a Resource
                </Link>
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Users className="w-5 h-5" />
                  View Experiences
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}