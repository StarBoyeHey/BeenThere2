import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Heart, Lightbulb, TrendingUp, Globe, Github, Linkedin, Mail, Star } from 'lucide-react';
import Link from 'next/link';
import { getDynamicStats } from '@/data/companies';

const teamMembers = [
  {
    name: 'Sugam Arora',
    role: 'Co-Founder & Lead Developer',
    bio: 'Passionate about creating platforms that bridge the gap between seniors and juniors in tech.',
    image: '👨‍💻',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Ojas Arora',
    role: 'Co-Founder & Product Manager',
    bio: 'Focused on building user-centric experiences that empower students in their career journey.',
    image: '👨‍🎓',
    linkedin: '#',
    github: '#'
  }
];

const values = [
  {
    title: 'Bridge Communities',
    description: 'We connect students across colleges and experiences, creating a unified support network.',
    icon: Users,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Inspire Growth',
    description: 'Real stories from real students, verified and curated to motivate and guide others.',
    icon: Heart,
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Guide Decisions',
    description: 'Provide comprehensive insights to help students make informed career choices.',
    icon: Lightbulb,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Navigate Challenges',
    description: 'Help students overcome interview challenges with proven strategies and tips.',
    icon: Target,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Achieve Success',
    description: 'Empower every student to reach their career goals, regardless of their background.',
    icon: TrendingUp,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Global Access',
    description: 'Free and accessible to all students worldwide, breaking geographical barriers.',
    icon: Globe,
    color: 'from-indigo-500 to-blue-500'
  }
];

export default function AboutPage() {
  const stats = getDynamicStats();

  const dynamicStats = [
    { label: 'Students Helped', value: `${Math.floor(stats.totalExperiences * 150)}+`, icon: Users },
    { label: 'Companies Covered', value: `${stats.totalCompanies}+`, icon: Target },
    { label: 'Success Stories', value: `${Math.floor(stats.totalExperiences * 0.7)}+`, icon: TrendingUp },
    { label: 'Resources Shared', value: '1,500+', icon: Lightbulb }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
              <Heart className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              About BeigNa
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-6">
            <strong>Bridge • Inspire • Guide • Navigate • Achieve</strong>
          </p>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Empowering the next generation of tech professionals through authentic peer experiences, 
            comprehensive resources, and a supportive community that believes in shared success across all colleges and backgrounds.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/50">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto">
                  To democratize access to high-quality interview preparation resources and create a platform 
                  where students from all colleges - from IITs to tier-3 institutions and off-campus candidates - 
                  can learn from authentic experiences of their seniors. We believe that every 
                  student deserves the opportunity to succeed in their career aspirations, regardless of their 
                  college background or circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              Impact by Numbers
            </span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {dynamicStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border border-white/30 dark:border-slate-600/30">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              What BeigNa Stands For
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border border-white/30 dark:border-slate-600/30">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${value.color} bg-opacity-20 border border-opacity-30`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                        {value.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border border-white/30 dark:border-slate-600/30">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="text-6xl p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                      {member.image}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    {member.name}
                  </CardTitle>
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link href={member.linkedin} className="text-blue-600 hover:text-blue-700 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href={member.github} className="text-slate-600 hover:text-slate-700 transition-colors">
                      <Github className="w-5 h-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-cyan-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/50">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
                    Community Guidelines
                  </span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Our community thrives on mutual respect, authenticity, and helpfulness across all colleges and backgrounds.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-emerald-600" />
                    What We Encourage
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Share authentic and detailed experiences from all colleges</li>
                    <li>• Provide constructive feedback and tips</li>
                    <li>• Help fellow students regardless of their college tier</li>
                    <li>• Maintain confidentiality of sensitive information</li>
                    <li>• Be respectful and supportive to all backgrounds</li>
                    <li>• Include both on-campus and off-campus experiences</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-600" />
                    What We Don't Allow
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Sharing false or misleading information</li>
                    <li>• College-based discrimination or elitism</li>
                    <li>• Spam or promotional content</li>
                    <li>• Sharing confidential company information</li>
                    <li>• Personal attacks or harassment</li>
                    <li>• Discouraging students based on their college</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/50">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                  <Mail className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Have questions, suggestions, or want to contribute? We'd love to hear from you!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="mailto:hello@beigna.com" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Link>
                <Link 
                  href="/contribute" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Users className="w-5 h-5" />
                  Contribute
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}