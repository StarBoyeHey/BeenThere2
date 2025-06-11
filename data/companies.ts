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
    location: 'Mountain View, CA',
    rating: 4.8,
    experiences: [
      {
        id: '1',
        studentName: 'Rahul S.',
        batch: '2023',
        role: 'Software Engineer',
        package: '₹45 LPA',
        difficulty: 'Hard',
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
        date: '2023-09-15'
      },
      {
        id: '2',
        studentName: 'Priya M.',
        batch: '2023',
        role: 'Product Manager Intern',
        package: '₹2 LPA (Internship)',
        difficulty: 'Medium',
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
        date: '2023-08-20'
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
    location: 'Redmond, WA',
    rating: 4.6,
    experiences: [
      {
        id: '3',
        studentName: 'Amit K.',
        batch: '2023',
        role: 'Software Development Engineer',
        package: '₹42 LPA',
        difficulty: 'Hard',
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
        date: '2023-10-05'
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
    location: 'Seattle, WA',
    rating: 4.3,
    experiences: [
      {
        id: '4',
        studentName: 'Sneha P.',
        batch: '2023',
        role: 'Software Development Engineer',
        package: '₹40 LPA',
        difficulty: 'Hard',
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
        date: '2023-09-30'
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
    location: 'Bangalore, India',
    rating: 4.2,
    experiences: [
      {
        id: '5',
        studentName: 'Vikash R.',
        batch: '2023',
        role: 'Software Development Engineer',
        package: '₹24 LPA',
        difficulty: 'Medium',
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
        date: '2023-08-15'
      }
    ]
  },
  {
    id: '5',
    name: 'Paytm',
    logo: '💳',
    industry: 'FinTech',
    description: 'Leading digital payments and financial services company in India.',
    website: 'https://paytm.com',
    size: '20,000+',
    location: 'Noida, India',
    rating: 4.0,
    experiences: [
      {
        id: '6',
        studentName: 'Ananya S.',
        batch: '2023',
        role: 'Software Engineer',
        package: '₹18 LPA',
        difficulty: 'Medium',
        process: ['Online Coding Test (90 mins)', 'Technical Round 1 - Coding (1 hour)', 'Technical Round 2 - System Design (45 mins)', 'HR Round (30 mins)'],
        requirements: [
          {
            category: 'Technical Skills',
            details: ['Programming proficiency', 'Understanding of payment systems', 'Database knowledge', 'API development', 'Security concepts']
          },
          {
            category: 'Academic Requirements',
            details: ['CGPA > 6.5', 'Computer Science preferred', 'Good analytical skills']
          },
          {
            category: 'Domain Knowledge',
            details: ['Fintech basics', 'Payment gateway concepts', 'Digital wallet systems', 'Financial regulations awareness']
          }
        ],
        topics: [
          {
            subject: 'Data Structures & Algorithms',
            importance: 'High',
            resources: ['LeetCode medium problems', 'HackerRank', 'GeeksforGeeks', 'InterviewBit']
          },
          {
            subject: 'Payment Systems',
            importance: 'High',
            resources: ['Payment gateway basics', 'UPI system understanding', 'Digital wallet architecture', 'Financial transaction processing']
          },
          {
            subject: 'Database Management',
            importance: 'High',
            resources: ['SQL advanced concepts', 'Transaction management', 'ACID properties', 'Database security']
          },
          {
            subject: 'System Security',
            importance: 'Medium',
            resources: ['Encryption concepts', 'Authentication methods', 'Secure coding practices', 'PCI DSS basics']
          },
          {
            subject: 'API Development',
            importance: 'Medium',
            resources: ['RESTful services', 'API security', 'Rate limiting', 'Microservices basics']
          }
        ],
        tips: [
          'Understand fintech domain and payment systems',
          'Know about digital payments and UPI',
          'Practice system design for payment systems',
          'Be prepared for questions about transaction security',
          'Understand scalability challenges in fintech',
          'Know about regulatory compliance in payments',
          'Practice coding problems related to financial calculations',
          'Be aware of Paytm\'s services and business model'
        ],
        timeline: '4 weeks',
        selected: false,
        date: '2023-07-20'
      }
    ]
  },
  {
    id: '6',
    name: 'Zomato',
    logo: '🍕',
    industry: 'Food Tech',
    description: 'Leading food delivery and restaurant discovery platform.',
    website: 'https://zomato.com',
    size: '5,000+',
    location: 'Gurugram, India',
    rating: 4.1,
    experiences: [
      {
        id: '7',
        studentName: 'Rohan M.',
        batch: '2023',
        role: 'Backend Developer',
        package: '₹20 LPA',
        difficulty: 'Medium',
        process: ['Online Assessment (2 hours)', 'Technical Round 1 - Backend (1 hour)', 'Technical Round 2 - System Design (1 hour)', 'Final Round - CTO (45 mins)'],
        requirements: [
          {
            category: 'Technical Skills',
            details: ['Backend development expertise', 'API design and development', 'Database optimization', 'Microservices architecture', 'Cloud services knowledge']
          },
          {
            category: 'Academic Requirements',
            details: ['CGPA > 7.0', 'Computer Science or IT preferred', 'Strong project portfolio']
          },
          {
            category: 'Domain Knowledge',
            details: ['Food delivery systems', 'Location-based services', 'Real-time systems', 'Mobile app backends']
          }
        ],
        topics: [
          {
            subject: 'Backend Development',
            importance: 'High',
            resources: ['Node.js/Express.js', 'Python Django/Flask', 'Java Spring Boot', 'Database design patterns', 'API best practices']
          },
          {
            subject: 'System Design',
            importance: 'High',
            resources: ['Food delivery system design', 'Location-based services', 'Real-time tracking systems', 'Microservices architecture', 'Load balancing']
          },
          {
            subject: 'Database Management',
            importance: 'High',
            resources: ['SQL optimization', 'NoSQL databases (MongoDB)', 'Database indexing', 'Caching strategies (Redis)', 'Data modeling']
          },
          {
            subject: 'Data Structures & Algorithms',
            importance: 'Medium',
            resources: ['LeetCode medium problems', 'Graph algorithms', 'Tree data structures', 'Sorting and searching']
          },
          {
            subject: 'Cloud & DevOps',
            importance: 'Medium',
            resources: ['AWS/GCP basics', 'Docker containers', 'CI/CD pipelines', 'Monitoring and logging']
          }
        ],
        tips: [
          'Focus on backend technologies and frameworks',
          'Understand food delivery system architecture',
          'Know about location-based services and GPS',
          'Practice API design and RESTful services',
          'Understand real-time systems and WebSockets',
          'Know about database optimization techniques',
          'Be familiar with microservices patterns',
          'Understand Zomato\'s business model and challenges'
        ],
        timeline: '5 weeks',
        selected: true,
        date: '2023-09-10'
      }
    ]
  },
  {
    id: '7',
    name: 'Adobe',
    logo: '🎨',
    industry: 'Software/Creative',
    description: 'Leading creative software company known for Photoshop, Illustrator, and Creative Cloud.',
    website: 'https://adobe.com',
    size: '25,000+',
    location: 'San Jose, CA',
    rating: 4.5,
    experiences: [
      {
        id: '8',
        studentName: 'Kavya L.',
        batch: '2023',
        role: 'Software Engineer',
        package: '₹38 LPA',
        difficulty: 'Hard',
        process: ['Online Assessment (2.5 hours)', 'Technical Phone Screen (1 hour)', 'Virtual Onsite - Coding (1 hour)', 'Virtual Onsite - System Design (1 hour)', 'Virtual Onsite - Behavioral (45 mins)'],
        requirements: [
          {
            category: 'Technical Skills',
            details: ['Strong programming in C++/Java', 'Computer graphics knowledge', 'Algorithm optimization', 'Software architecture', 'Performance tuning']
          },
          {
            category: 'Academic Requirements',
            details: ['CGPA > 8.0', 'Computer Science or related field', 'Strong mathematical background']
          },
          {
            category: 'Creative & Technical',
            details: ['Understanding of creative workflows', 'Image processing concepts', 'UI/UX awareness', 'Cross-platform development']
          }
        ],
        topics: [
          {
            subject: 'Data Structures & Algorithms',
            importance: 'High',
            resources: ['LeetCode hard problems', 'Competitive programming', 'Algorithm optimization', 'Mathematical algorithms']
          },
          {
            subject: 'Computer Graphics',
            importance: 'High',
            resources: ['Computer Graphics principles', 'Image processing algorithms', 'Rendering techniques', 'Color theory']
          },
          {
            subject: 'System Design',
            importance: 'High',
            resources: ['Large-scale software architecture', 'Performance optimization', 'Memory management', 'Cross-platform design']
          },
          {
            subject: 'Software Engineering',
            importance: 'Medium',
            resources: ['Design patterns', 'Clean code practices', 'Testing methodologies', 'Version control']
          }
        ],
        tips: [
          'Master advanced algorithms and data structures',
          'Understand computer graphics and image processing',
          'Know Adobe products and their technical challenges',
          'Practice performance optimization problems',
          'Understand creative software requirements',
          'Be prepared for mathematical and logical reasoning',
          'Know about cross-platform development challenges',
          'Understand user experience in creative tools'
        ],
        timeline: '8 weeks',
        selected: true,
        date: '2023-10-12'
      }
    ]
  },
  {
    id: '8',
    name: 'Salesforce',
    logo: '☁️',
    industry: 'Cloud/CRM',
    description: 'Leading customer relationship management (CRM) software company.',
    website: 'https://salesforce.com',
    size: '70,000+',
    location: 'San Francisco, CA',
    rating: 4.4,
    experiences: [
      {
        id: '9',
        studentName: 'Arjun T.',
        batch: '2023',
        role: 'Software Engineer',
        package: '₹35 LPA',
        difficulty: 'Medium',
        process: ['Online Assessment (2 hours)', 'Technical Round 1 (1 hour)', 'Technical Round 2 (1 hour)', 'Hiring Manager Round (45 mins)'],
        requirements: [
          {
            category: 'Technical Skills',
            details: ['Java/Python proficiency', 'Web development', 'Database knowledge', 'Cloud computing', 'API development']
          },
          {
            category: 'Academic Requirements',
            details: ['CGPA > 7.5', 'Any engineering branch', 'Good communication skills']
          }
        ],
        topics: [
          {
            subject: 'Data Structures & Algorithms',
            importance: 'High',
            resources: ['LeetCode medium problems', 'GeeksforGeeks', 'HackerRank']
          },
          {
            subject: 'Web Development',
            importance: 'High',
            resources: ['JavaScript fundamentals', 'REST APIs', 'Web frameworks', 'Frontend basics']
          },
          {
            subject: 'Database Management',
            importance: 'Medium',
            resources: ['SQL queries', 'Database design', 'SOQL (Salesforce)', 'Data modeling']
          },
          {
            subject: 'Cloud Computing',
            importance: 'Medium',
            resources: ['Salesforce platform basics', 'Cloud architecture', 'SaaS concepts']
          }
        ],
        tips: [
          'Understand CRM and business software concepts',
          'Know Salesforce platform basics',
          'Practice web development problems',
          'Understand enterprise software challenges',
          'Know about multi-tenant architecture',
          'Practice SQL and database design',
          'Understand API design principles'
        ],
        timeline: '6 weeks',
        selected: true,
        date: '2023-09-25'
      }
    ]
  }
];