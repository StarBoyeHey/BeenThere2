import { Company } from '@/types/company';

export const companies: Company[] = [
  {
    id: '1',
    name: 'Google',
    logo: '🔍',
    industry: 'Technology',
    description: 'Leading technology company specializing in search, cloud computing, and AI.',
    website: 'https://google.com',
    size: '100,000+',
    headquarters: 'Mountain View, CA, USA',
    locations: [
      { city: 'Mountain View', country: 'USA', isHeadquarters: true, hiringFor: ['SDE-1', 'SDE-2', 'Product Manager', 'Data Scientist', 'DevOps Engineer'] },
      { city: 'Bangalore', country: 'India', isHeadquarters: false, hiringFor: ['SDE-1', 'SDE-2', 'Site Reliability Engineer', 'ML Engineer'] },
      { city: 'Hyderabad', country: 'India', isHeadquarters: false, hiringFor: ['SDE-1', 'Technical Program Manager', 'Cloud Engineer'] },
      { city: 'London', country: 'UK', isHeadquarters: false, hiringFor: ['SDE-2', 'Product Manager', 'Security Engineer'] }
    ],
    rating: 4.8,
    experiences: [
      {
        id: '1',
        studentName: 'Rahul S.',
        batch: '2023',
        college: 'IIT Delhi',
        role: 'SDE-1',
        package: '₹45 LPA',
        experienceType: 'Full-time',
        difficulty: 'Hard',
        difficultyNote: 'Difficulty is subjective and varies by individual preparation and background',
        process: ['Online Assessment (90 mins)', 'Technical Phone Screen (45 mins)', 'Virtual Onsite - Coding (45 mins)', 'Virtual Onsite - System Design (45 mins)', 'Virtual Onsite - Behavioral (30 mins)', 'Team Matching (30 mins)'],
        requirements: [
          {
            category: 'Technical Skills',
            details: ['Master Data Structures & Algorithms', 'System Design fundamentals', 'Proficiency in Python/Java/C++', 'Understanding of time/space complexity', 'Knowledge of design patterns']
          },
          {
            category: 'Academic Requirements',
            details: ['CGPA > 8.0 (preferred)', 'No active backlogs', 'Computer Science or related field', 'Strong mathematical foundation']
          },
          {
            category: 'Experience & Projects',
            details: ['2+ significant projects', 'Open source contributions (GitHub)', 'Internship experience preferred', 'Competitive programming background']
          }
        ],
        topics: [
          {
            subject: 'Data Structures & Algorithms',
            importance: 'High',
            resources: ['LeetCode (500+ problems)', 'GeeksforGeeks DSA Course', 'Cracking the Coding Interview', 'Elements of Programming Interviews', 'AlgoExpert']
          },
          {
            subject: 'System Design',
            importance: 'High',
            resources: ['Grokking System Design Interview', 'System Design Primer (GitHub)', 'Designing Data-Intensive Applications', 'High Scalability Blog', 'System Design Interview by Alex Xu']
          },
          {
            subject: 'Object Oriented Programming',
            importance: 'Medium',
            resources: ['Head First Design Patterns', 'Clean Code by Robert Martin', 'Effective Java by Joshua Bloch', 'SOLID Principles']
          },
          {
            subject: 'Database Management',
            importance: 'Medium',
            resources: ['Database System Concepts', 'SQL Practice on HackerRank', 'MongoDB University', 'Redis Documentation']
          },
          {
            subject: 'Operating Systems',
            importance: 'Medium',
            resources: ['Operating System Concepts', 'GeeksforGeeks OS', 'Process synchronization', 'Memory management']
          }
        ],
        tips: [
          'Practice 3-4 LeetCode problems daily for at least 6 months',
          'Focus on medium to hard problems, especially Google tagged ones',
          'Master the art of explaining your thought process clearly',
          'Practice system design on whiteboard/paper regularly',
          'Know your projects inside out - be ready for deep technical questions',
          'Use STAR method for behavioral questions',
          'Practice coding without IDE - use pen and paper',
          'Understand Google\'s culture and values thoroughly'
        ],
        timeline: '6 weeks',
        selected: true,
        location: 'Bangalore, India',
        date: '2023-09-15',
        isOffCampus: false
      },
      {
        id: '2',
        studentName: 'Priya M.',
        batch: '2023',
        college: 'IIIT Hyderabad',
        role: 'Product Manager Intern',
        package: '₹80,000/month',
        experienceType: 'Internship',
        difficulty: 'Medium',
        difficultyNote: 'Difficulty perception varies based on individual background and preparation level',
        process: ['Resume Screening', 'Product Sense Case Study (60 mins)', 'Analytical Thinking Round (45 mins)', 'Final Interview with PM (45 mins)'],
        requirements: [
          {
            category: 'Core Skills',
            details: ['Strong analytical thinking', 'Product intuition', 'Excellent communication', 'User empathy', 'Business acumen']
          },
          {
            category: 'Academic',
            details: ['Any engineering branch', 'CGPA > 7.5', 'Leadership experience preferred']
          }
        ],
        topics: [
          {
            subject: 'Product Management Fundamentals',
            importance: 'High',
            resources: ['Cracking the PM Interview', 'Inspired by Marty Cagan', 'The Lean Startup', 'Product School YouTube']
          },
          {
            subject: 'Case Study Frameworks',
            importance: 'High',
            resources: ['Google PM case studies', 'Product Alliance', 'Exponent PM Course', 'Lewis Lin books']
          },
          {
            subject: 'Data Analysis',
            importance: 'Medium',
            resources: ['SQL for Data Analysis', 'Google Analytics', 'A/B Testing concepts', 'Metrics and KPIs']
          }
        ],
        tips: [
          'Practice product sense questions daily',
          'Know Google products extremely well',
          'Develop structured frameworks for case studies',
          'Practice estimation problems',
          'Stay updated with tech industry trends'
        ],
        timeline: '4 weeks',
        selected: false,
        location: 'Mountain View, CA',
        date: '2023-08-20',
        isPPOConverted: false,
        isOffCampus: false
      },
      {
        id: '10',
        studentName: 'Ankit V.',
        batch: '2022',
        college: 'IIT Bombay',
        role: 'SDE-1',
        package: '₹42 LPA',
        experienceType: 'PPO',
        difficulty: 'Medium',
        difficultyNote: 'PPO conversion process was less stressful than regular hiring',
        process: ['Internship Performance Review', 'Technical Presentation (30 mins)', 'Manager Interview (45 mins)', 'Team Fit Discussion (30 mins)'],
        requirements: [
          {
            category: 'Internship Performance',
            details: ['Excellent project delivery', 'Good peer feedback', 'Proactive communication', 'Code quality standards']
          },
          {
            category: 'Technical Skills',
            details: ['Strong coding abilities', 'System design understanding', 'Problem-solving skills']
          }
        ],
        topics: [
          {
            subject: 'Internship Project Deep Dive',
            importance: 'High',
            resources: ['Project documentation', 'Code review feedback', 'Performance metrics', 'Impact analysis']
          },
          {
            subject: 'System Design',
            importance: 'Medium',
            resources: ['System design of internship project', 'Scalability improvements', 'Architecture decisions']
          }
        ],
        tips: [
          'Maintain excellent performance throughout internship',
          'Document your contributions and impact clearly',
          'Build good relationships with team members',
          'Be proactive in seeking feedback and improvement',
          'Prepare to discuss your internship project in detail'
        ],
        timeline: '2 weeks',
        selected: true,
        location: 'Bangalore, India',
        date: '2022-07-30',
        isPPOConverted: true,
        isOffCampus: false
      },
      {
        id: '12',
        studentName: 'Arjun K.',
        batch: '2023',
        college: 'Off-campus',
        role: 'SDE-1',
        package: '₹38 LPA',
        experienceType: 'Full-time',
        difficulty: 'Hard',
        difficultyNote: 'Off-campus applications require extra effort and persistence',
        process: ['Online Application', 'Resume Screening', 'Online Assessment (2 hours)', 'Technical Phone Screen (1 hour)', 'Virtual Onsite - 4 rounds (3 hours)', 'Final HR Round (30 mins)'],
        requirements: [
          {
            category: 'Technical Skills',
            details: ['Exceptional coding skills', 'Strong system design knowledge', 'Open source contributions', 'Personal projects portfolio']
          },
          {
            category: 'Self-Learning',
            details: ['Continuous learning mindset', 'Strong online presence', 'Technical blog writing', 'Community involvement']
          }
        ],
        topics: [
          {
            subject: 'Advanced Data Structures & Algorithms',
            importance: 'High',
            resources: ['LeetCode Premium', 'Competitive Programming 3', 'Advanced algorithms courses', 'Google interview prep']
          },
          {
            subject: 'Portfolio Development',
            importance: 'High',
            resources: ['GitHub profile optimization', 'Personal website', 'Technical blog', 'Open source contributions']
          }
        ],
        tips: [
          'Build an exceptional online portfolio',
          'Contribute to open source projects regularly',
          'Network with Google employees on LinkedIn',
          'Apply through multiple channels (referrals, direct applications)',
          'Be persistent - off-campus hiring takes longer'
        ],
        timeline: '12 weeks',
        selected: true,
        location: 'Bangalore, India',
        date: '2023-11-10',
        isOffCampus: true
      }
    ]
  },
  {
    id: '2',
    name: 'Microsoft',
    logo: '🪟',
    industry: 'Technology',
    description: 'Global technology company known for Windows, Office, and Azure cloud services.',
    website: 'https://microsoft.com',
    size: '220,000+',
    headquarters: 'Redmond, WA, USA',
    locations: [
      { city: 'Redmond', country: 'USA', isHeadquarters: true, hiringFor: ['SDE-1', 'SDE-2', 'Product Manager', 'Data Scientist', 'Cloud Architect'] },
      { city: 'Bangalore', country: 'India', isHeadquarters: false, hiringFor: ['SDE-1', 'SDE-2', 'Program Manager', 'DevOps Engineer'] },
      { city: 'Hyderabad', country: 'India', isHeadquarters: false, hiringFor: ['SDE-1', 'Support Engineer', 'Security Engineer'] }
    ],
    rating: 4.6,
    experiences: [
      {
        id: '3',
        studentName: 'Amit K.',
        batch: '2023',
        college: 'IIT Kanpur',
        role: 'SDE-1',
        package: '₹42 LPA',
        experienceType: 'Full-time',
        difficulty: 'Hard',
        difficultyNote: 'Individual experience may vary based on preparation and technical background',
        process: ['Online Assessment (3 hours)', 'Technical Phone Screen (1 hour)', 'Virtual Onsite Round 1 - Coding (1 hour)', 'Virtual Onsite Round 2 - System Design (1 hour)', 'Virtual Onsite Round 3 - Behavioral (45 mins)', 'Final Round with Hiring Manager (30 mins)'],
        requirements: [
          {
            category: 'Technical Skills',
            details: ['Strong programming fundamentals', 'Advanced DSA knowledge', 'System design expertise', 'Database concepts', 'Cloud computing basics (Azure preferred)']
          },
          {
            category: 'Academic Requirements',
            details: ['CGPA > 7.5', 'Computer Science or related field', 'Strong academic projects']
          },
          {
            category: 'Soft Skills',
            details: ['Team collaboration', 'Problem-solving mindset', 'Growth mindset', 'Communication skills']
          }
        ],
        topics: [
          {
            subject: 'Data Structures & Algorithms',
            importance: 'High',
            resources: ['LeetCode Microsoft tagged', 'Elements of Programming Interviews', 'GeeksforGeeks', 'Competitive Programming 3', 'HackerRank']
          },
          {
            subject: 'System Design',
            importance: 'High',
            resources: ['Designing Data-Intensive Applications', 'System Design Interview', 'Microsoft Azure Architecture', 'Scalability patterns']
          },
          {
            subject: 'Database Management',
            importance: 'High',
            resources: ['Database System Concepts', 'SQL Server documentation', 'NoSQL databases', 'ACID properties']
          },
          {
            subject: 'Cloud Computing',
            importance: 'Medium',
            resources: ['Microsoft Azure fundamentals', 'Cloud design patterns', 'Microservices architecture']
          },
          {
            subject: 'Software Engineering',
            importance: 'Medium',
            resources: ['Clean Code', 'Design Patterns', 'Agile methodologies', 'Version control (Git)']
          }
        ],
        tips: [
          'Be very strong in programming fundamentals',
          'Practice coding on whiteboard and paper',
          'Understand Microsoft technologies and ecosystem',
          'Prepare behavioral questions about teamwork and growth mindset',
          'Know about Microsoft\'s mission and values',
          'Practice explaining complex technical concepts simply',
          'Focus on writing clean, readable code',
          'Understand trade-offs in system design decisions'
        ],
        timeline: '8 weeks',
        selected: true,
        location: 'Hyderabad, India',
        date: '2023-10-05',
        isOffCampus: false
      },
      {
        id: '11',
        studentName: 'Kavya R.',
        batch: '2023',
        college: 'NIT Trichy',
        role: 'Data Scientist Intern',
        package: '₹75,000/month',
        experienceType: 'Internship',
        difficulty: 'Medium',
        difficultyNote: 'Requires strong analytical and statistical background',
        process: ['Online Assessment - ML/Stats (2 hours)', 'Technical Interview - ML Concepts (1 hour)', 'Case Study Presentation (45 mins)', 'Final Round (30 mins)'],
        requirements: [
          {
            category: 'Technical Skills',
            details: ['Machine Learning algorithms', 'Statistics and Probability', 'Python/R programming', 'Data visualization', 'SQL proficiency']
          },
          {
            category: 'Academic',
            details: ['CGPA > 8.0', 'Mathematics/Statistics/CS background', 'Research experience preferred']
          }
        ],
        topics: [
          {
            subject: 'Machine Learning',
            importance: 'High',
            resources: ['Andrew Ng ML Course', 'Hands-On ML by Aurélien Géron', 'Scikit-learn documentation', 'Kaggle Learn']
          },
          {
            subject: 'Statistics',
            importance: 'High',
            resources: ['Think Stats', 'Statistical Learning (ISLR)', 'Khan Academy Statistics', 'Probability concepts']
          }
        ],
        tips: [
          'Strong foundation in statistics is crucial',
          'Practice ML problems on Kaggle',
          'Know when to use which algorithm',
          'Be able to explain complex concepts simply'
        ],
        timeline: '5 weeks',
        selected: true,
        location: 'Bangalore, India',
        date: '2023-07-15',
        isPPOConverted: false,
        isOffCampus: false
      }
    ]
  },
  {
    id: '3',
    name: 'Amazon',
    logo: '📦',
    industry: 'E-commerce/Cloud',
    description: 'Leading e-commerce and cloud computing company with AWS.',
    website: 'https://amazon.com',
    size: '1,500,000+',
    headquarters: 'Seattle, WA, USA',
    locations: [
      { city: 'Seattle', country: 'USA', isHeadquarters: true, hiringFor: ['SDE-1', 'SDE-2', 'Product Manager', 'Data Scientist', 'Solutions Architect'] },
      { city: 'Bangalore', country: 'India', isHeadquarters: false, hiringFor: ['SDE-1', 'SDE-2', 'Support Engineer', 'DevOps Engineer'] },
      { city: 'Chennai', country: 'India', isHeadquarters: false, hiringFor: ['SDE-1', 'Operations Manager', 'Financial Analyst'] }
    ],
    rating: 4.3,
    experiences: [
      {
        id: '4',
        studentName: 'Sneha P.',
        batch: '2023',
        college: 'BITS Pilani',
        role: 'SDE-1',
        package: '₹40 LPA',
        experienceType: 'Full-time',
        difficulty: 'Hard',
        difficultyNote: 'Difficulty assessment is subjective and depends on individual preparation',
        process: ['Online Assessment (2 hours)', 'Technical Round 1 - Coding (1 hour)', 'Technical Round 2 - System Design (1 hour)', 'Behavioral Round - Bar Raiser (1 hour)', 'Final Round - Hiring Manager (45 mins)'],
        requirements: [
          {
            category: 'Technical Skills',
            details: ['Excellent coding skills', 'System design knowledge', 'AWS services familiarity', 'Distributed systems understanding', 'Performance optimization']
          },
          {
            category: 'Leadership Principles',
            details: ['Customer Obsession', 'Ownership', 'Invent and Simplify', 'Learn and Be Curious', 'Hire and Develop the Best', 'Insist on the Highest Standards']
          },
          {
            category: 'Academic',
            details: ['CGPA > 7.0', 'Strong problem-solving skills', 'Project experience']
          }
        ],
        topics: [
          {
            subject: 'Data Structures & Algorithms',
            importance: 'High',
            resources: ['LeetCode Amazon tagged (300+ problems)', 'GeeksforGeeks', 'Cracking the Coding Interview', 'Amazon specific coding patterns']
          },
          {
            subject: 'Amazon Leadership Principles',
            importance: 'High',
            resources: ['Amazon official LP documentation', 'STAR method examples', 'Behavioral interview prep', 'Real-life examples preparation']
          },
          {
            subject: 'System Design',
            importance: 'High',
            resources: ['System Design Interview book', 'AWS Architecture patterns', 'Scalable system design', 'Microservices patterns']
          },
          {
            subject: 'AWS Services',
            importance: 'Medium',
            resources: ['AWS Documentation', 'AWS Solutions Architect Associate', 'Cloud computing fundamentals', 'Serverless architecture']
          },
          {
            subject: 'Distributed Systems',
            importance: 'Medium',
            resources: ['Distributed Systems concepts', 'CAP theorem', 'Consistency patterns', 'Load balancing']
          }
        ],
        tips: [
          'Master all 16 Amazon Leadership Principles with real examples',
          'Practice LeetCode medium-hard problems extensively',
          'Prepare multiple STAR format stories for each LP',
          'Know Amazon services and their use cases',
          'Focus on scalability and performance in system design',
          'Practice behavioral questions with specific examples',
          'Understand customer-centric thinking',
          'Be prepared for follow-up questions on your projects'
        ],
        timeline: '10 weeks',
        selected: true,
        location: 'Bangalore, India',
        date: '2023-09-30',
        isOffCampus: false
      }
    ]
  },
  {
    id: '4',
    name: 'Flipkart',
    logo: '🛒',
    industry: 'E-commerce',
    description: 'Leading Indian e-commerce platform owned by Walmart.',
    website: 'https://flipkart.com',
    size: '50,000+',
    headquarters: 'Bangalore, India',
    locations: [
      { city: 'Bangalore', country: 'India', isHeadquarters: true, hiringFor: ['SDE-1', 'SDE-2', 'Product Manager', 'Data Scientist', 'DevOps Engineer'] },
      { city: 'Delhi', country: 'India', isHeadquarters: false, hiringFor: ['SDE-1', 'Business Analyst', 'Financial Analyst'] },
      { city: 'Mumbai', country: 'India', isHeadquarters: false, hiringFor: ['SDE-1', 'Operations Manager', 'Supply Chain Analyst'] }
    ],
    rating: 4.2,
    experiences: [
      {
        id: '5',
        studentName: 'Vikash R.',
        batch: '2023',
        college: 'VIT Vellore',
        role: 'SDE-1',
        package: '₹24 LPA',
        experienceType: 'Full-time',
        difficulty: 'Medium',
        difficultyNote: 'Difficulty level can vary based on individual technical background and preparation',
        process: ['Online Coding Test (2 hours)', 'Technical Interview 1 - DSA (1 hour)', 'Technical Interview 2 - System Design (1 hour)', 'HR Round (30 mins)'],
        requirements: [
          {
            category: 'Technical Skills',
            details: ['Strong programming skills in Java/Python/C++', 'Good problem-solving abilities', 'Basic system design knowledge', 'Database concepts', 'Web development basics']
          },
          {
            category: 'Academic Requirements',
            details: ['CGPA > 7.0', 'Any engineering branch (CS preferred)', 'Good academic projects']
          },
          {
            category: 'Domain Knowledge',
            details: ['E-commerce understanding', 'Scalability concepts', 'User experience awareness']
          }
        ],
        topics: [
          {
            subject: 'Data Structures & Algorithms',
            importance: 'High',
            resources: ['InterviewBit', 'GeeksforGeeks DSA', 'LeetCode medium problems', 'Coding Ninjas', 'HackerEarth']
          },
          {
            subject: 'System Design',
            importance: 'Medium',
            resources: ['Basic system design concepts', 'E-commerce system design', 'Database design', 'Caching strategies']
          },
          {
            subject: 'Database Management',
            importance: 'Medium',
            resources: ['SQL fundamentals', 'Database normalization', 'Indexing concepts', 'NoSQL basics']
          },
          {
            subject: 'Web Development',
            importance: 'Low',
            resources: ['REST API concepts', 'HTTP protocols', 'Basic frontend knowledge', 'MVC architecture']
          }
        ],
        tips: [
          'Focus on clear problem-solving approach',
          'Know about e-commerce systems and challenges',
          'Practice coding in your preferred language fluently',
          'Be confident and communicate your thought process',
          'Understand Flipkart\'s business model and challenges',
          'Practice medium-level coding problems regularly',
          'Know basic system design patterns',
          'Be prepared for questions about scalability'
        ],
        timeline: '6 weeks',
        selected: true,
        location: 'Bangalore, India',
        date: '2023-08-15',
        isOffCampus: false
      },
      {
        id: '13',
        studentName: 'Ravi M.',
        batch: '2023',
        college: 'DTU',
        role: 'SDE-1',
        package: '₹22 LPA',
        experienceType: 'Full-time',
        difficulty: 'Medium',
        difficultyNote: 'Standard difficulty for tier-2 college placements',
        process: ['Campus Pre-placement Talk', 'Online Assessment (90 mins)', 'Technical Interview 1 (45 mins)', 'Technical Interview 2 (45 mins)', 'HR Round (20 mins)'],
        requirements: [
          {
            category: 'Technical Skills',
            details: ['Solid programming fundamentals', 'DSA proficiency', 'Basic system design', 'Database knowledge']
          },
          {
            category: 'Academic',
            details: ['CGPA > 6.5', 'No active backlogs', 'Relevant projects']
          }
        ],
        topics: [
          {
            subject: 'Core Programming',
            importance: 'High',
            resources: ['Java/Python fundamentals', 'OOP concepts', 'Problem solving', 'Code optimization']
          },
          {
            subject: 'Data Structures',
            importance: 'High',
            resources: ['Arrays, Strings, LinkedList', 'Trees, Graphs', 'Dynamic Programming', 'Greedy algorithms']
          }
        ],
        tips: [
          'Focus on fundamentals rather than advanced topics',
          'Practice explaining your code clearly',
          'Know your resume projects thoroughly',
          'Be honest about what you know and don\'t know'
        ],
        timeline: '4 weeks',
        selected: true,
        location: 'Bangalore, India',
        date: '2023-09-05',
        isOffCampus: false
      }
    ]
  }
];

// Helper function to calculate success rates (excluding internship stipends from average package)
export const calculateSuccessRates = (experiences: any[]) => {
  const total = experiences.length;
  if (total === 0) return { overall: 0, internship: 0, fullTime: 0, ppoConversion: 0 };

  const selected = experiences.filter(exp => exp.selected).length;
  const internships = experiences.filter(exp => exp.experienceType === 'Internship');
  const fullTime = experiences.filter(exp => exp.experienceType === 'Full-time');
  const ppoExperiences = experiences.filter(exp => exp.experienceType === 'PPO');
  
  const internshipSelected = internships.filter(exp => exp.selected).length;
  const fullTimeSelected = fullTime.filter(exp => exp.selected).length;
  const ppoSelected = ppoExperiences.filter(exp => exp.selected).length;

  return {
    overall: total > 0 ? Math.round((selected / total) * 100) : 0,
    internship: internships.length > 0 ? Math.round((internshipSelected / internships.length) * 100) : 0,
    fullTime: fullTime.length > 0 ? Math.round((fullTimeSelected / fullTime.length) * 100) : 0,
    ppoConversion: ppoExperiences.length > 0 ? Math.round((ppoSelected / ppoExperiences.length) * 100) : 0
  };
};

// Helper function to calculate average package (excluding internships)
export const calculateAveragePackage = (experiences: any[]) => {
  const fullTimeAndPPO = experiences.filter(exp => 
    exp.experienceType === 'Full-time' || exp.experienceType === 'PPO'
  );
  
  if (fullTimeAndPPO.length === 0) return 0;
  
  const totalPackage = fullTimeAndPPO.reduce((acc, exp) => {
    const packageValue = parseFloat(exp.package.replace(/[₹LPA\s]/g, ''));
    return acc + packageValue;
  }, 0);
  
  return totalPackage / fullTimeAndPPO.length;
};

// Helper function to get dynamic statistics
export const getDynamicStats = () => {
  const totalCompanies = companies.length;
  const totalExperiences = companies.reduce((acc, company) => acc + company.experiences.length, 0);
  const totalSelected = companies.reduce((acc, company) => 
    acc + company.experiences.filter(exp => exp.selected).length, 0);
  const overallSuccessRate = totalExperiences > 0 ? Math.round((totalSelected / totalExperiences) * 100) : 0;
  
  // Calculate average rating
  const avgRating = companies.reduce((acc, company) => acc + company.rating, 0) / companies.length;
  
  // Count different experience types
  const fullTimeCount = companies.reduce((acc, company) => 
    acc + company.experiences.filter(exp => exp.experienceType === 'Full-time').length, 0);
  const internshipCount = companies.reduce((acc, company) => 
    acc + company.experiences.filter(exp => exp.experienceType === 'Internship').length, 0);
  const ppoCount = companies.reduce((acc, company) => 
    acc + company.experiences.filter(exp => exp.experienceType === 'PPO').length, 0);
  
  return {
    totalCompanies,
    totalExperiences,
    overallSuccessRate,
    avgRating: avgRating.toFixed(1),
    fullTimeCount,
    internshipCount,
    ppoCount
  };
};