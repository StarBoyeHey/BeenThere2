export interface Insight {
  id: string;
  title: string;
  author: string;
  authorRole: string;
  authorCompany: string;
  authorBatch: string;
  category: 'Interview Prep' | 'Career Growth' | 'Skill Development' | 'Industry Trends' | 'Work-Life Balance' | 'Networking';
  content: string;
  keyTakeaways: string[];
  tags: string[];
  readTime: string;
  likes: number;
  publishedAt: string;
  isVerified: boolean;
}

export const generalInsights: Insight[] = [
  {
    id: 'insight-1',
    title: 'The Real Truth About Technical Interviews: What No One Tells You',
    author: 'Priya Sharma',
    authorRole: 'Senior SDE',
    authorCompany: 'Google',
    authorBatch: '2019',
    category: 'Interview Prep',
    content: `After conducting 100+ technical interviews at Google, here's what I wish every candidate knew:

**The Interviewer is Rooting for You**
Contrary to popular belief, interviewers want you to succeed. We're not trying to trick you - we're evaluating if you can solve problems and communicate effectively.

**It's Not Just About the Right Answer**
I've seen candidates get hired despite not completing the problem perfectly. What mattered was their approach, communication, and how they handled hints.

**The Power of Thinking Out Loud**
The biggest mistake candidates make is staying silent. Even if you're stuck, explain your thought process. This helps us understand your problem-solving approach and gives us opportunities to guide you.

**Preparation vs. Over-preparation**
You don't need to solve 1000 LeetCode problems. Focus on understanding patterns and being able to explain your solutions clearly. Quality over quantity always wins.

**The Follow-up Questions Matter**
When we ask "How would you optimize this?" or "What if the input was much larger?", we're testing your ability to think beyond the immediate solution. These questions often carry more weight than the initial problem.`,
    keyTakeaways: [
      'Communicate your thought process throughout the interview',
      'Focus on problem-solving approach over perfect solutions',
      'Interviewers want to see how you handle guidance and hints',
      'Quality preparation beats quantity - understand patterns deeply',
      'Follow-up questions are often more important than the main problem'
    ],
    tags: ['Technical Interviews', 'Problem Solving', 'Communication', 'Google', 'Interview Tips'],
    readTime: '5 min read',
    likes: 234,
    publishedAt: '2024-01-15',
    isVerified: true
  },
  {
    id: 'insight-2',
    title: 'From Tier-3 College to FAANG: The Journey No One Talks About',
    author: 'Rahul Verma',
    authorRole: 'SDE-2',
    authorCompany: 'Amazon',
    authorBatch: '2020',
    category: 'Career Growth',
    content: `Coming from a tier-3 college, I faced unique challenges that my IIT friends never had to deal with. Here's the unfiltered truth about making it to FAANG from a non-premier institution:

**The Confidence Gap is Real**
The biggest hurdle wasn't technical skills - it was believing I belonged in the same room as IIT graduates. This imposter syndrome can be paralyzing, but it's also your biggest motivator.

**Network Differently**
Without alumni networks at top companies, I had to be creative. I contributed to open source projects, wrote technical blogs, and engaged with tech communities on Twitter and LinkedIn. This visibility led to referrals.

**Over-prepare, Then Prepare Some More**
While my IIT friends could rely on their college brand, I had to prove myself through exceptional preparation. I solved 500+ LeetCode problems and could explain every solution in my sleep.

**Embrace the Underdog Advantage**
Being underestimated can work in your favor. I had nothing to lose and everything to prove. This hunger and determination often impressed interviewers more than pedigree.

**The Long Game Pays Off**
It took me 3 years and multiple rejections to land at Amazon. But each rejection taught me something valuable. Persistence and continuous improvement are your best friends.`,
    keyTakeaways: [
      'Confidence matters as much as technical skills',
      'Build your network through contributions and community engagement',
      'Over-preparation can compensate for lack of college brand',
      'Use the underdog status as motivation, not limitation',
      'Play the long game - each rejection is a learning opportunity'
    ],
    tags: ['Tier-3 College', 'FAANG', 'Career Journey', 'Persistence', 'Non-IIT Success'],
    readTime: '7 min read',
    likes: 456,
    publishedAt: '2024-01-10',
    isVerified: true
  },
  {
    id: 'insight-3',
    title: 'The Skills That Actually Matter in Your First Job (Hint: It\'s Not Just Coding)',
    author: 'Ananya Gupta',
    authorRole: 'Tech Lead',
    authorCompany: 'Microsoft',
    authorBatch: '2018',
    category: 'Skill Development',
    content: `After 6 years in the industry and leading a team of 12 engineers, here are the skills that actually determine your success in your first job:

**Communication Trumps Code**
You'll spend more time explaining your code than writing it. The ability to articulate complex technical concepts to both technical and non-technical stakeholders is invaluable.

**Learning How to Learn**
Technology changes rapidly. The specific framework you learned in college might be obsolete in 2 years. What matters is your ability to quickly pick up new technologies and adapt.

**Debugging and Problem-Solving**
In college, you write code from scratch. At work, you'll spend 70% of your time debugging existing code written by others. Learn to read code, understand legacy systems, and debug efficiently.

**Collaboration Over Competition**
Your success depends on your team's success. Learn to give and receive code reviews constructively, pair program effectively, and help your teammates grow.

**Understanding the Business Context**
Code doesn't exist in a vacuum. Understanding why you're building something is as important as how you're building it. This business awareness will set you apart from your peers.

**Time Management and Prioritization**
You'll always have more tasks than time. Learning to prioritize, estimate effort accurately, and manage your time effectively is crucial for long-term success.`,
    keyTakeaways: [
      'Communication skills are as important as technical skills',
      'Focus on learning how to learn rather than specific technologies',
      'Debugging and reading existing code is a critical skill',
      'Collaboration and teamwork drive career success',
      'Understanding business context makes you a valuable engineer',
      'Time management and prioritization are essential workplace skills'
    ],
    tags: ['First Job', 'Soft Skills', 'Career Development', 'Workplace Skills', 'Professional Growth'],
    readTime: '6 min read',
    likes: 189,
    publishedAt: '2024-01-08',
    isVerified: true
  },
  {
    id: 'insight-4',
    title: 'Why Your Side Projects Matter More Than Your CGPA',
    author: 'Vikash Kumar',
    authorRole: 'Senior SDE',
    authorCompany: 'Flipkart',
    authorBatch: '2019',
    category: 'Skill Development',
    content: `I graduated with a 7.2 CGPA from a decent college, but my side projects got me into Flipkart. Here's why projects matter more than grades:

**Projects Show Real Problem-Solving**
While CGPA shows you can follow instructions and pass exams, projects demonstrate your ability to identify problems, design solutions, and execute them independently.

**They Demonstrate Passion**
A well-executed side project shows you code because you love it, not just because you have to. This passion is what companies are really looking for.

**Projects Are Conversation Starters**
In every interview, 60% of the time was spent discussing my projects. They provide concrete examples of your skills and give interviewers something tangible to evaluate.

**They Show You Can Ship**
Building a complete project - from idea to deployment - demonstrates project management skills, attention to detail, and the ability to see things through to completion.

**Real-World Technology Exposure**
Side projects force you to learn technologies beyond your curriculum. You'll encounter real deployment challenges, user feedback, and scalability issues.

**Building a Portfolio**
Your GitHub becomes your portfolio. Recruiters and hiring managers can see your coding style, project complexity, and growth over time.`,
    keyTakeaways: [
      'Projects demonstrate practical problem-solving abilities',
      'They show genuine passion for technology and coding',
      'Projects provide concrete talking points in interviews',
      'Completing projects shows execution and project management skills',
      'Side projects expose you to real-world technologies and challenges',
      'Your GitHub becomes a powerful portfolio for recruiters'
    ],
    tags: ['Side Projects', 'Portfolio', 'GitHub', 'Practical Skills', 'Career Building'],
    readTime: '5 min read',
    likes: 312,
    publishedAt: '2024-01-05',
    isVerified: true
  },
  {
    id: 'insight-5',
    title: 'The Networking Game: How to Build Meaningful Professional Relationships',
    author: 'Sneha Patel',
    authorRole: 'Product Manager',
    authorCompany: 'Zomato',
    authorBatch: '2020',
    category: 'Networking',
    content: `Networking isn't about collecting business cards or LinkedIn connections. It's about building genuine relationships that create mutual value. Here's how to do it right:

**Start with Giving, Not Taking**
Instead of asking for referrals immediately, offer value first. Share interesting articles, make introductions between your connections, or offer help with their projects.

**Quality Over Quantity**
Having 10 meaningful professional relationships is better than 1000 superficial LinkedIn connections. Focus on building deeper relationships with people you genuinely connect with.

**Be Authentic and Genuine**
People can sense when you're being transactional. Be genuinely interested in others' work, challenges, and successes. Ask thoughtful questions and listen actively.

**Leverage Online Communities**
Join tech communities on Discord, Slack, or Reddit. Participate in discussions, share knowledge, and help others. This builds your reputation and creates natural networking opportunities.

**Follow Up and Stay Connected**
Networking doesn't end after the first conversation. Send periodic updates, congratulate people on their achievements, and maintain regular contact without being pushy.

**Attend Events and Meetups**
Both online and offline events are great for meeting like-minded professionals. Come prepared with genuine questions and be ready to share your own experiences.`,
    keyTakeaways: [
      'Lead with value and help others before asking for help',
      'Focus on building fewer but deeper professional relationships',
      'Authenticity and genuine interest are key to meaningful connections',
      'Online communities are powerful networking platforms',
      'Consistent follow-up and staying connected is crucial',
      'Events and meetups provide natural networking opportunities'
    ],
    tags: ['Networking', 'Professional Relationships', 'Career Growth', 'Community Building', 'LinkedIn'],
    readTime: '6 min read',
    likes: 278,
    publishedAt: '2024-01-03',
    isVerified: true
  },
  {
    id: 'insight-6',
    title: 'Work-Life Balance in Tech: Myths, Realities, and Strategies',
    author: 'Arjun Singh',
    authorRole: 'Engineering Manager',
    authorCompany: 'Adobe',
    authorBatch: '2017',
    category: 'Work-Life Balance',
    content: `After 7 years in tech and managing teams for 3 years, here's the truth about work-life balance in our industry:

**The Myth of Perfect Balance**
Work-life balance isn't about perfect 50-50 split every day. It's about having the flexibility to prioritize what matters most at different times in your life.

**Set Boundaries Early**
In your first job, you'll be eager to prove yourself. But setting boundaries early prevents burnout later. Learn to say no to non-essential requests and protect your personal time.

**Remote Work is a Double-Edged Sword**
While remote work offers flexibility, it can also blur the lines between work and personal life. Create physical and temporal boundaries to maintain separation.

**Invest in Your Health**
Long coding sessions and deadline pressure can take a toll on your physical and mental health. Regular exercise, proper sleep, and mental health breaks are investments in your career longevity.

**The Power of Saying No**
As you grow in your career, you'll get more opportunities than you can handle. Learning to say no to good opportunities so you can say yes to great ones is a crucial skill.

**Find Your Rhythm**
Some people are most productive in the morning, others late at night. Find your natural rhythm and structure your work accordingly when possible.`,
    keyTakeaways: [
      'Work-life balance is about flexibility, not perfect daily splits',
      'Set boundaries early in your career to prevent burnout',
      'Remote work requires intentional boundary setting',
      'Physical and mental health are career investments',
      'Learning to say no is as important as saying yes',
      'Find and optimize for your natural productivity rhythm'
    ],
    tags: ['Work-Life Balance', 'Mental Health', 'Productivity', 'Career Longevity', 'Remote Work'],
    readTime: '7 min read',
    likes: 195,
    publishedAt: '2024-01-01',
    isVerified: true
  }
];

export const getInsightsByCategory = (category: string) => {
  if (category === 'all') return generalInsights;
  return generalInsights.filter(insight => insight.category === category);
};

export const getInsightById = (id: string) => {
  return generalInsights.find(insight => insight.id === id);
};

export const getPopularInsights = () => {
  return generalInsights.sort((a, b) => b.likes - a.likes).slice(0, 3);
};