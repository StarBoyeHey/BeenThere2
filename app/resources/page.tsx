import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Code, Database, Globe, Lightbulb, Target, Users, Video, FileText, ExternalLink, Brain, Shield, BarChart3, Cloud, Cpu, Palette, Server, Zap, Eye, Smartphone, Lock, Wifi, Monitor, HardDrive, Activity } from 'lucide-react';
import Link from 'next/link';

const resourceCategories = [
  {
    id: 'coding',
    title: 'Coding & DSA',
    icon: Code,
    description: 'Master data structures, algorithms, and competitive programming',
    resources: [
      {
        name: 'TakeUForward (Striver)',
        description: 'Complete DSA course by Striver with A2Z DSA sheet and interview preparation',
        url: 'https://takeuforward.org',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['DSA', 'Striver', 'A2Z Sheet', 'Interview Prep']
      },
      {
        name: 'GeeksforGeeks DSA Self Paced',
        description: 'Comprehensive DSA course with practice problems and interview preparation',
        url: 'https://geeksforgeeks.org',
        type: 'Platform',
        difficulty: 'Beginner to Advanced',
        tags: ['DSA', 'Tutorials', 'Practice', 'Interview']
      },
      {
        name: 'InterviewBit Programming',
        description: 'Structured programming interview preparation with guided paths',
        url: 'https://interviewbit.com',
        type: 'Platform',
        difficulty: 'Intermediate',
        tags: ['Interview', 'DSA', 'Guided Learning']
      },
      {
        name: 'LeetCode',
        description: 'Practice coding problems with company-specific tags',
        url: 'https://leetcode.com',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['DSA', 'Coding', 'Interview Prep']
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
      },
      {
        name: 'CodeChef',
        description: 'Competitive programming platform with contests',
        url: 'https://codechef.com',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Competitive Programming', 'Contests', 'Practice']
      },
      {
        name: 'Codeforces',
        description: 'Competitive programming contests and practice',
        url: 'https://codeforces.com',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['Competitive Programming', 'Contests', 'Rating']
      },
      {
        name: 'AtCoder',
        description: 'Japanese competitive programming platform with quality problems',
        url: 'https://atcoder.jp',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Competitive Programming', 'Quality Problems', 'Contests']
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
      },
      {
        name: 'ByteByteGo',
        description: 'System design newsletter and visual explanations',
        url: 'https://bytebytego.com',
        type: 'Newsletter',
        difficulty: 'Intermediate',
        tags: ['System Design', 'Visual Learning', 'Newsletter']
      },
      {
        name: 'System Design Interview by Alex Xu',
        description: 'Popular system design interview preparation book',
        url: '#',
        type: 'Book',
        difficulty: 'Intermediate',
        tags: ['System Design', 'Interview', 'Preparation']
      }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Palette,
    description: 'Modern frontend frameworks and UI/UX development',
    resources: [
      {
        name: 'React Documentation',
        description: 'Official React.js documentation and tutorials',
        url: 'https://react.dev',
        type: 'Documentation',
        difficulty: 'Beginner to Advanced',
        tags: ['React', 'Frontend', 'JavaScript']
      },
      {
        name: 'Next.js Learn',
        description: 'Interactive Next.js tutorial and documentation',
        url: 'https://nextjs.org/learn',
        type: 'Course',
        difficulty: 'Intermediate',
        tags: ['Next.js', 'React', 'Full Stack']
      },
      {
        name: 'Vue.js Guide',
        description: 'Progressive JavaScript framework documentation',
        url: 'https://vuejs.org/guide',
        type: 'Documentation',
        difficulty: 'Beginner to Advanced',
        tags: ['Vue.js', 'Frontend', 'JavaScript']
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework documentation',
        url: 'https://tailwindcss.com/docs',
        type: 'Documentation',
        difficulty: 'Beginner',
        tags: ['CSS', 'Styling', 'Framework']
      },
      {
        name: 'Frontend Masters',
        description: 'Advanced frontend engineering courses',
        url: 'https://frontendmasters.com',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['Courses', 'Advanced', 'Frontend']
      },
      {
        name: 'Figma Academy',
        description: 'Learn UI/UX design with Figma',
        url: 'https://figma.com/academy',
        type: 'Course',
        difficulty: 'Beginner',
        tags: ['Design', 'UI/UX', 'Figma']
      },
      {
        name: 'Angular Documentation',
        description: 'Comprehensive Angular framework guide',
        url: 'https://angular.io/docs',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Angular', 'TypeScript', 'Framework']
      },
      {
        name: 'Svelte Tutorial',
        description: 'Modern reactive framework with great performance',
        url: 'https://svelte.dev/tutorial',
        type: 'Tutorial',
        difficulty: 'Beginner to Intermediate',
        tags: ['Svelte', 'Reactive', 'Performance']
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    description: 'Server-side development and API design',
    resources: [
      {
        name: 'Node.js Documentation',
        description: 'Server-side JavaScript development',
        url: 'https://nodejs.org/docs',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Node.js', 'Backend', 'JavaScript']
      },
      {
        name: 'Express.js Guide',
        description: 'Fast, unopinionated web framework for Node.js',
        url: 'https://expressjs.com',
        type: 'Documentation',
        difficulty: 'Beginner to Intermediate',
        tags: ['Express.js', 'Node.js', 'API']
      },
      {
        name: 'Django Documentation',
        description: 'High-level Python web framework',
        url: 'https://docs.djangoproject.com',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Django', 'Python', 'Web Framework']
      },
      {
        name: 'Spring Boot',
        description: 'Java-based framework for microservices',
        url: 'https://spring.io/projects/spring-boot',
        type: 'Documentation',
        difficulty: 'Intermediate to Advanced',
        tags: ['Java', 'Spring', 'Microservices']
      },
      {
        name: 'FastAPI',
        description: 'Modern, fast web framework for building APIs with Python',
        url: 'https://fastapi.tiangolo.com',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Python', 'API', 'FastAPI']
      },
      {
        name: 'GraphQL',
        description: 'Query language and runtime for APIs',
        url: 'https://graphql.org/learn',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['GraphQL', 'API', 'Query Language']
      },
      {
        name: 'Ruby on Rails',
        description: 'Web application framework written in Ruby',
        url: 'https://rubyonrails.org',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['Ruby', 'Rails', 'Web Framework']
      },
      {
        name: 'ASP.NET Core',
        description: 'Cross-platform framework for building web applications',
        url: 'https://docs.microsoft.com/aspnet/core',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['C#', '.NET', 'Microsoft']
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: Cloud,
    description: 'Infrastructure, deployment, and cloud technologies',
    resources: [
      {
        name: 'Docker Documentation',
        description: 'Containerization platform and tools',
        url: 'https://docs.docker.com',
        type: 'Documentation',
        difficulty: 'Beginner to Intermediate',
        tags: ['Docker', 'Containers', 'DevOps']
      },
      {
        name: 'Kubernetes Documentation',
        description: 'Container orchestration platform',
        url: 'https://kubernetes.io/docs',
        type: 'Documentation',
        difficulty: 'Intermediate to Advanced',
        tags: ['Kubernetes', 'Orchestration', 'DevOps']
      },
      {
        name: 'AWS Documentation',
        description: 'Amazon Web Services cloud platform',
        url: 'https://docs.aws.amazon.com',
        type: 'Documentation',
        difficulty: 'All Levels',
        tags: ['AWS', 'Cloud', 'Infrastructure']
      },
      {
        name: 'Terraform Documentation',
        description: 'Infrastructure as Code tool',
        url: 'https://terraform.io/docs',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Terraform', 'IaC', 'Infrastructure']
      },
      {
        name: 'Jenkins Documentation',
        description: 'Open source automation server',
        url: 'https://jenkins.io/doc',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Jenkins', 'CI/CD', 'Automation']
      },
      {
        name: 'Azure DevOps',
        description: 'Microsoft cloud DevOps services',
        url: 'https://docs.microsoft.com/azure/devops',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Azure', 'DevOps', 'Microsoft']
      },
      {
        name: 'Google Cloud Platform',
        description: 'Google\'s cloud computing services',
        url: 'https://cloud.google.com/docs',
        type: 'Documentation',
        difficulty: 'All Levels',
        tags: ['GCP', 'Cloud', 'Google']
      },
      {
        name: 'Ansible Documentation',
        description: 'IT automation and configuration management',
        url: 'https://docs.ansible.com',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Ansible', 'Automation', 'Configuration']
      },
      {
        name: 'GitLab CI/CD',
        description: 'Continuous integration and deployment',
        url: 'https://docs.gitlab.com/ee/ci',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['GitLab', 'CI/CD', 'DevOps']
      },
      {
        name: 'Prometheus Monitoring',
        description: 'Open-source monitoring and alerting toolkit',
        url: 'https://prometheus.io/docs',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Monitoring', 'Prometheus', 'Observability']
      }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Artificial Intelligence and Machine Learning resources',
    resources: [
      {
        name: 'Andrew Ng ML Course',
        description: 'Comprehensive machine learning course by Andrew Ng',
        url: 'https://coursera.org/learn/machine-learning',
        type: 'Course',
        difficulty: 'Beginner to Intermediate',
        tags: ['Machine Learning', 'Andrew Ng', 'Coursera']
      },
      {
        name: 'Fast.ai',
        description: 'Practical deep learning for coders',
        url: 'https://fast.ai',
        type: 'Course',
        difficulty: 'Intermediate',
        tags: ['Deep Learning', 'Practical', 'Python']
      },
      {
        name: 'Hugging Face',
        description: 'Open source ML platform and model hub',
        url: 'https://huggingface.co',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['NLP', 'Transformers', 'Models']
      },
      {
        name: 'OpenAI Documentation',
        description: 'GPT and AI API documentation',
        url: 'https://platform.openai.com/docs',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['OpenAI', 'GPT', 'API']
      },
      {
        name: 'Kaggle Learn',
        description: 'Free micro-courses on data science topics',
        url: 'https://kaggle.com/learn',
        type: 'Course',
        difficulty: 'Beginner to Intermediate',
        tags: ['Data Science', 'Kaggle', 'Free']
      },
      {
        name: 'Papers With Code',
        description: 'Latest ML research papers with code implementations',
        url: 'https://paperswithcode.com',
        type: 'Repository',
        difficulty: 'Advanced',
        tags: ['Research', 'Papers', 'Code']
      },
      {
        name: 'LangChain',
        description: 'Framework for developing LLM applications',
        url: 'https://langchain.com',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['LLM', 'Framework', 'AI Apps']
      },
      {
        name: 'DeepLearning.AI',
        description: 'Specialized courses in deep learning and AI',
        url: 'https://deeplearning.ai',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['Deep Learning', 'AI', 'Specialization']
      },
      {
        name: 'TensorFlow',
        description: 'Open source machine learning framework',
        url: 'https://tensorflow.org',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['TensorFlow', 'ML Framework', 'Google']
      },
      {
        name: 'PyTorch',
        description: 'Dynamic neural network framework',
        url: 'https://pytorch.org',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['PyTorch', 'Neural Networks', 'Facebook']
      },
      {
        name: 'Anthropic Claude',
        description: 'AI assistant and API documentation',
        url: 'https://anthropic.com',
        type: 'Platform',
        difficulty: 'Intermediate',
        tags: ['Claude', 'AI Assistant', 'API']
      },
      {
        name: 'Stability AI',
        description: 'Generative AI models and tools',
        url: 'https://stability.ai',
        type: 'Platform',
        difficulty: 'Intermediate',
        tags: ['Generative AI', 'Stable Diffusion', 'Models']
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    icon: BarChart3,
    description: 'Data analysis, visualization, and business intelligence',
    resources: [
      {
        name: 'Pandas Documentation',
        description: 'Python data manipulation and analysis library',
        url: 'https://pandas.pydata.org/docs',
        type: 'Documentation',
        difficulty: 'Beginner to Advanced',
        tags: ['Python', 'Data Analysis', 'Pandas']
      },
      {
        name: 'Tableau Learning',
        description: 'Data visualization and business intelligence',
        url: 'https://tableau.com/learn',
        type: 'Course',
        difficulty: 'Beginner to Intermediate',
        tags: ['Visualization', 'BI', 'Tableau']
      },
      {
        name: 'Power BI Learning',
        description: 'Microsoft business analytics solution',
        url: 'https://docs.microsoft.com/power-bi',
        type: 'Documentation',
        difficulty: 'Beginner to Intermediate',
        tags: ['Power BI', 'Microsoft', 'Analytics']
      },
      {
        name: 'SQL for Data Science',
        description: 'Database querying for data analysis',
        url: 'https://mode.com/sql-tutorial',
        type: 'Tutorial',
        difficulty: 'Beginner',
        tags: ['SQL', 'Database', 'Data Analysis']
      },
      {
        name: 'R for Data Science',
        description: 'Comprehensive guide to R programming',
        url: 'https://r4ds.had.co.nz',
        type: 'Book',
        difficulty: 'Beginner to Intermediate',
        tags: ['R', 'Statistics', 'Data Science']
      },
      {
        name: 'Apache Spark',
        description: 'Unified analytics engine for big data processing',
        url: 'https://spark.apache.org/docs/latest',
        type: 'Documentation',
        difficulty: 'Intermediate to Advanced',
        tags: ['Big Data', 'Spark', 'Analytics']
      },
      {
        name: 'Jupyter Notebooks',
        description: 'Interactive computing environment for data science',
        url: 'https://jupyter.org',
        type: 'Tool',
        difficulty: 'Beginner',
        tags: ['Jupyter', 'Interactive', 'Data Science']
      },
      {
        name: 'Plotly',
        description: 'Interactive data visualization library',
        url: 'https://plotly.com',
        type: 'Library',
        difficulty: 'Beginner to Intermediate',
        tags: ['Visualization', 'Interactive', 'Plotly']
      },
      {
        name: 'Databricks',
        description: 'Unified analytics platform for big data and ML',
        url: 'https://databricks.com',
        type: 'Platform',
        difficulty: 'Intermediate',
        tags: ['Big Data', 'ML', 'Analytics']
      },
      {
        name: 'Snowflake',
        description: 'Cloud data platform for analytics',
        url: 'https://snowflake.com',
        type: 'Platform',
        difficulty: 'Intermediate',
        tags: ['Cloud', 'Data Warehouse', 'Analytics']
      }
    ]
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst Track',
    icon: Activity,
    description: 'Specialized resources for aspiring data analysts',
    resources: [
      {
        name: 'Google Data Analytics Certificate',
        description: 'Professional certificate program for data analytics',
        url: 'https://coursera.org/professional-certificates/google-data-analytics',
        type: 'Certificate',
        difficulty: 'Beginner',
        tags: ['Google', 'Certificate', 'Data Analytics']
      },
      {
        name: 'Excel for Data Analysis',
        description: 'Master Excel for data analysis and visualization',
        url: 'https://support.microsoft.com/excel',
        type: 'Tutorial',
        difficulty: 'Beginner',
        tags: ['Excel', 'Data Analysis', 'Microsoft']
      },
      {
        name: 'SQL for Data Analysts',
        description: 'Complete SQL course for data analysis',
        url: 'https://sqlbolt.com',
        type: 'Course',
        difficulty: 'Beginner',
        tags: ['SQL', 'Data Analysis', 'Database']
      },
      {
        name: 'Tableau Public',
        description: 'Free data visualization tool and community',
        url: 'https://public.tableau.com',
        type: 'Tool',
        difficulty: 'Beginner',
        tags: ['Tableau', 'Visualization', 'Free']
      },
      {
        name: 'Python for Data Analysis',
        description: 'Learn Python specifically for data analysis',
        url: 'https://wesmckinney.com/book',
        type: 'Book',
        difficulty: 'Intermediate',
        tags: ['Python', 'Data Analysis', 'Pandas']
      },
      {
        name: 'Statistics for Data Science',
        description: 'Essential statistics concepts for data analysts',
        url: 'https://khan-academy.org/math/statistics-probability',
        type: 'Course',
        difficulty: 'Beginner',
        tags: ['Statistics', 'Probability', 'Math']
      },
      {
        name: 'Looker Studio (Google Data Studio)',
        description: 'Free data visualization and reporting tool',
        url: 'https://datastudio.google.com',
        type: 'Tool',
        difficulty: 'Beginner',
        tags: ['Google', 'Visualization', 'Reporting']
      },
      {
        name: 'Microsoft Power Platform',
        description: 'Low-code platform for data analysis and automation',
        url: 'https://powerplatform.microsoft.com',
        type: 'Platform',
        difficulty: 'Beginner to Intermediate',
        tags: ['Microsoft', 'Low-code', 'Analytics']
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Information security and ethical hacking',
    resources: [
      {
        name: 'OWASP Top 10',
        description: 'Top 10 web application security risks',
        url: 'https://owasp.org/www-project-top-ten',
        type: 'Guide',
        difficulty: 'Intermediate',
        tags: ['Web Security', 'OWASP', 'Vulnerabilities']
      },
      {
        name: 'Cybrary',
        description: 'Free cybersecurity training platform',
        url: 'https://cybrary.it',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Training', 'Certification', 'Free']
      },
      {
        name: 'TryHackMe',
        description: 'Hands-on cybersecurity learning platform',
        url: 'https://tryhackme.com',
        type: 'Platform',
        difficulty: 'Beginner to Advanced',
        tags: ['Hands-on', 'CTF', 'Learning']
      },
      {
        name: 'HackTheBox',
        description: 'Penetration testing labs and challenges',
        url: 'https://hackthebox.com',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['Penetration Testing', 'Labs', 'CTF']
      },
      {
        name: 'SANS Training',
        description: 'Professional cybersecurity training',
        url: 'https://sans.org',
        type: 'Training',
        difficulty: 'Intermediate to Advanced',
        tags: ['Professional', 'Certification', 'SANS']
      },
      {
        name: 'Metasploit',
        description: 'Penetration testing framework',
        url: 'https://metasploit.com',
        type: 'Tool',
        difficulty: 'Intermediate to Advanced',
        tags: ['Penetration Testing', 'Framework', 'Tool']
      },
      {
        name: 'Burp Suite',
        description: 'Web application security testing platform',
        url: 'https://portswigger.net/burp',
        type: 'Tool',
        difficulty: 'Intermediate',
        tags: ['Web Security', 'Testing', 'Tool']
      },
      {
        name: 'Wireshark',
        description: 'Network protocol analyzer',
        url: 'https://wireshark.org',
        type: 'Tool',
        difficulty: 'Intermediate',
        tags: ['Network', 'Analysis', 'Protocol']
      },
      {
        name: 'Kali Linux',
        description: 'Penetration testing and security auditing platform',
        url: 'https://kali.org',
        type: 'Platform',
        difficulty: 'Intermediate',
        tags: ['Linux', 'Penetration Testing', 'Security']
      },
      {
        name: 'CompTIA Security+',
        description: 'Entry-level cybersecurity certification',
        url: 'https://comptia.org/certifications/security',
        type: 'Certification',
        difficulty: 'Beginner to Intermediate',
        tags: ['CompTIA', 'Certification', 'Security']
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: Smartphone,
    description: 'iOS, Android, and cross-platform mobile development',
    resources: [
      {
        name: 'React Native',
        description: 'Cross-platform mobile development with React',
        url: 'https://reactnative.dev',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['React Native', 'Cross-platform', 'Mobile']
      },
      {
        name: 'Flutter Documentation',
        description: 'Google\'s UI toolkit for mobile, web, and desktop',
        url: 'https://flutter.dev/docs',
        type: 'Documentation',
        difficulty: 'Beginner to Advanced',
        tags: ['Flutter', 'Dart', 'Cross-platform']
      },
      {
        name: 'Swift Documentation',
        description: 'Apple\'s programming language for iOS development',
        url: 'https://swift.org/documentation',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Swift', 'iOS', 'Apple']
      },
      {
        name: 'Android Developers',
        description: 'Official Android development documentation',
        url: 'https://developer.android.com',
        type: 'Documentation',
        difficulty: 'Beginner to Advanced',
        tags: ['Android', 'Kotlin', 'Java']
      },
      {
        name: 'Ionic Framework',
        description: 'Cross-platform mobile app development',
        url: 'https://ionicframework.com/docs',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['Ionic', 'Cross-platform', 'Web Technologies']
      },
      {
        name: 'Xamarin',
        description: 'Microsoft\'s cross-platform mobile development',
        url: 'https://docs.microsoft.com/xamarin',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['Xamarin', 'Microsoft', 'Cross-platform']
      },
      {
        name: 'Kotlin Multiplatform',
        description: 'Share code between Android and iOS',
        url: 'https://kotlinlang.org/lp/mobile',
        type: 'Framework',
        difficulty: 'Intermediate to Advanced',
        tags: ['Kotlin', 'Multiplatform', 'JetBrains']
      },
      {
        name: 'Firebase',
        description: 'Google\'s mobile and web application development platform',
        url: 'https://firebase.google.com/docs',
        type: 'Platform',
        difficulty: 'Beginner to Intermediate',
        tags: ['Firebase', 'Backend', 'Google']
      }
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    icon: Lock,
    description: 'Blockchain development and cryptocurrency',
    resources: [
      {
        name: 'Ethereum Documentation',
        description: 'Decentralized platform for smart contracts',
        url: 'https://ethereum.org/developers',
        type: 'Documentation',
        difficulty: 'Intermediate to Advanced',
        tags: ['Ethereum', 'Smart Contracts', 'Blockchain']
      },
      {
        name: 'Solidity Documentation',
        description: 'Programming language for Ethereum smart contracts',
        url: 'https://docs.soliditylang.org',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Solidity', 'Smart Contracts', 'Programming']
      },
      {
        name: 'Web3.js',
        description: 'JavaScript library for interacting with Ethereum',
        url: 'https://web3js.readthedocs.io',
        type: 'Library',
        difficulty: 'Intermediate',
        tags: ['Web3', 'JavaScript', 'Ethereum']
      },
      {
        name: 'OpenZeppelin',
        description: 'Secure smart contract development framework',
        url: 'https://openzeppelin.com/contracts',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['Security', 'Smart Contracts', 'Framework']
      },
      {
        name: 'Hardhat',
        description: 'Ethereum development environment',
        url: 'https://hardhat.org/docs',
        type: 'Tool',
        difficulty: 'Intermediate',
        tags: ['Development Environment', 'Ethereum', 'Testing']
      },
      {
        name: 'Polygon Documentation',
        description: 'Ethereum scaling and infrastructure development',
        url: 'https://docs.polygon.technology',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Polygon', 'Scaling', 'Layer 2']
      },
      {
        name: 'Chainlink',
        description: 'Decentralized oracle networks',
        url: 'https://docs.chain.link',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Oracles', 'Chainlink', 'Data']
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
        name: 'Pluralsight',
        description: 'Technology skills platform for developers',
        url: 'https://pluralsight.com',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['Technology', 'Skills', 'Professional']
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
        name: 'YouTube Tech Channels',
        description: 'Free educational content from tech creators',
        url: '#',
        type: 'Video',
        difficulty: 'All Levels',
        tags: ['Free', 'Video', 'Tutorials']
      },
      {
        name: 'freeCodeCamp',
        description: 'Free coding bootcamp with certifications',
        url: 'https://freecodecamp.org',
        type: 'Platform',
        difficulty: 'Beginner to Intermediate',
        tags: ['Free', 'Coding', 'Certification']
      },
      {
        name: 'Khan Academy',
        description: 'Free educational platform with computer science courses',
        url: 'https://khanacademy.org',
        type: 'Platform',
        difficulty: 'Beginner',
        tags: ['Free', 'Education', 'Computer Science']
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
    case 'Framework':
      return 'bg-violet-100 text-violet-800 border-violet-200 dark:bg-violet-900/30 dark:text-violet-400';
    case 'Tool':
      return 'bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/30 dark:text-teal-400';
    case 'Library':
      return 'bg-lime-100 text-lime-800 border-lime-200 dark:bg-lime-900/30 dark:text-lime-400';
    case 'Training':
      return 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400';
    case 'Newsletter':
      return 'bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-900/30 dark:text-sky-400';
    case 'Tutorial':
      return 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200 dark:bg-fuchsia-900/30 dark:text-fuchsia-400';
    case 'Certificate':
    case 'Certification':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400';
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
            Comprehensive collection of the latest resources across all tech domains - from AI/ML to cybersecurity, 
            frontend to blockchain. Stay ahead with cutting-edge learning materials and reveal the scene in your field.
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
                Know of an amazing resource that helped you in your learning journey? 
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