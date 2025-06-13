import Link from 'next/link';
import { GraduationCap, Users, TrendingUp, BookOpen, Sparkles, Eye } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/50 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 p-3 rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                KyaSeen
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Kya Scene Hai? Your Career Insights Hub
              </p>
            </div>
          </Link>
          
          <nav className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <span className="font-medium">Companies</span>
              </Link>
              <Link href="/resources" className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                  <BookOpen className="h-4 w-4" />
                </div>
                <span className="font-medium">Resources</span>
              </Link>
              <Link href="/about" className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 transition-all duration-300">
                  <Users className="h-4 w-4" />
                </div>
                <span className="font-medium">About</span>
              </Link>
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}