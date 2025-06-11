import Link from 'next/link';
import { GraduationCap, Users, TrendingUp, BookOpen } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl group-hover:scale-105 transition-transform">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Campus Connect
              </h1>
              <p className="text-xs text-muted-foreground">Interview Insights Platform</p>
            </div>
          </Link>
          
          <nav className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <TrendingUp className="h-4 w-4" />
                <span>Companies</span>
              </Link>
              <Link href="/resources" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <BookOpen className="h-4 w-4" />
                <span>Resources</span>
              </Link>
              <Link href="/about" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Users className="h-4 w-4" />
                <span>About</span>
              </Link>
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}