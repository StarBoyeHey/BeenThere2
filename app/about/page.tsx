import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Heart, Lightbulb, TrendingUp, Globe, Github, Linkedin, Mail, Star } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & Lead Developer',
    bio: 'Former Google SWE, passionate about helping students succeed in tech interviews.',
    image: '👨‍💻',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Priya Sharma',
    role: 'Community Manager',
    bio: 'Building bridges between seniors and juniors, fostering knowledge sharing.',
    image: '👩‍💼',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Rahul Patel',
    role: 'Content Curator',
    bio: 'Ensuring quality and relevance of shared experiences and resources.',
    image: '👨‍🎓',
    linkedin: '#',
    github: '#'
  }
];

const stats = [
  { label: 'Students Helped', value: '10,000+', icon: Users },
  { label: 'Companies Covered', value: '500+', icon: Target },
  { label: 'Success Stories', value: '2,500+', icon: TrendingUp },
  { label: 'Resources Shared', value: '1,000+', icon: Lightbulb }
];

const values = [
  {
    title: 'Community First',
    description: 'We believe in the power of peer-to-peer learning and knowledge sharing.',
    icon: Users,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Authentic Experiences',
    description: 'Real stories from real students, verified and curated for accuracy.',
    icon: Heart,
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Continuous Growth',
    description: 'Always evolving based on community feedback and industry changes.',
    icon: TrendingUp,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Inclusive Access',
    description: 'Free and accessible to all students, regardless of background.',
    icon: Globe,
    color: 'from-purple-500 to-indigo-500'
  }
];

export default function AboutPage() {
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
              About Campus Connect
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Empowering the next generation of tech professionals through authentic peer experiences, 
            comprehensive resources, and a supportive community that believes in shared success.
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
                  where students can learn from authentic experiences of their seniors. We believe that every 
                  student deserves the opportunity to succeed in their career aspirations, regardless of their 
                  background or circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              Impact by Numbers
            </span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
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
              Our Values
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  Our community thrives on mutual respect, authenticity, and helpfulness.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-emerald-600" />
                    What We Encourage
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Share authentic and detailed experiences</li>
                    <li>• Provide constructive feedback and tips</li>
                    <li>• Help fellow students with their queries</li>
                    <li>• Maintain confidentiality of sensitive information</li>
                    <li>• Be respectful and supportive</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-600" />
                    What We Don't Allow
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Sharing false or misleading information</li>
                    <li>• Discriminatory or offensive content</li>
                    <li>• Spam or promotional content</li>
                    <li>• Sharing confidential company information</li>
                    <li>• Personal attacks or harassment</li>
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
                  href="mailto:hello@campusconnect.com" 
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