'use client';

import Link from 'next/link';
import { GraduationCap, Users, TrendingUp, BookOpen, Sparkles, Eye, LogIn, LogOut, User, Lightbulb } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/50 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 p-3 rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                BeenThere
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Learn from Those Who&#39;ve Been There
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
              <Link href="/insights" className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 transition-all duration-300">
                  <Lightbulb className="h-4 w-4" />
                </div>
                <span className="font-medium">Insights</span>
              </Link>
              <Link href="/resources" className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                  <BookOpen className="h-4 w-4" />
                </div>
                <span className="font-medium">Resources</span>
              </Link>
              <Link href="/about" className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all duration-300">
                  <Users className="h-4 w-4" />
                </div>
                <span className="font-medium">About</span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              
              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="hidden sm:block text-left">
                        <div className="text-sm font-medium">{user.name}</div>
                        <div className="flex items-center gap-1">
                          <Badge className={`text-xs ${
                            user.userType === 'admin' 
                              ? 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400'
                              : user.userType === 'contributor'
                              ? 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400'
                              : 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300'
                          }`}>
                            {user.userType === 'admin' ? 'Admin' : user.userType === 'contributor' ? 'Contributor' : 'Viewer'}
                          </Badge>
                        </div>
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-red-600 dark:text-red-400">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center gap-2">
                  <Link href="/auth/login">
                    <Button variant="ghost" className="flex items-center gap-2">
                      <LogIn className="w-4 h-4" />
                      <span className="hidden sm:inline">Sign In</span>
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      <User className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">Sign Up</span>
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}