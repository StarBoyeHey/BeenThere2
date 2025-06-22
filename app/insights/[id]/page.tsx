import { generalInsights } from '@/data/insights';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Building, 
  GraduationCap, 
  Clock, 
  ThumbsUp, 
  Calendar, 
  CheckCircle,
  Star,
  ArrowLeft,
  Share2,
  BookOpen,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';

interface InsightPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return generalInsights.map((insight) => ({
    id: insight.id,
  }));
}

export default function InsightPage({ params }: InsightPageProps) {
  const insight = generalInsights.find(i => i.id === params.id);

  if (!insight) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null;
      
      // Handle bold text
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={index} className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-3">
            {paragraph.slice(2, -2)}
          </h3>
        );
      }
      
      // Handle regular paragraphs
      return (
        <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    }).filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/30">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/insights" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <Card className="mb-8 shadow-xl border-2 border-white/20 dark:border-slate-700/50 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl">
          <CardHeader className="pb-6">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">
                    {insight.category}
                  </Badge>
                  {insight.isVerified && (
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-blue-600 font-medium">Verified</span>
                    </div>
                  )}
                </div>
                
                <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                  {insight.title}
                </CardTitle>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-medium">{insight.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span>{insight.authorRole} at {insight.authorCompany}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>Batch {insight.authorBatch}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{insight.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{insight.likes}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(insight.publishedAt)}</span>
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="shadow-xl border-2 border-white/20 dark:border-slate-700/50 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  {formatContent(insight.content)}
                </div>
                
                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {insight.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-slate-50 dark:bg-slate-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Key Takeaways */}
              <Card className="shadow-xl border-2 border-white/20 dark:border-slate-700/50 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Key Takeaways
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {insight.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <span className="text-emerald-600 mt-1 font-bold">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Author Info */}
              <Card className="shadow-xl border-2 border-white/20 dark:border-slate-700/50 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-lg">About the Author</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                        {insight.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">{insight.author}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">{insight.authorRole}</div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-2 mb-1">
                        <Building className="w-4 h-4" />
                        <span>{insight.authorCompany}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>Batch {insight.authorBatch}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Actions */}
              <Card className="shadow-xl border-2 border-white/20 dark:border-slate-700/50 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <Link href="/insights">
                      <Button variant="outline" className="w-full justify-start">
                        <BookOpen className="w-4 h-4 mr-2" />
                        More Insights
                      </Button>
                    </Link>
                    <Link href="/contribute">
                      <Button className="w-full justify-start bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                        <Lightbulb className="w-4 h-4 mr-2" />
                        Share Your Insight
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}