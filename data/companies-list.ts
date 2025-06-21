export interface CompanyBasicInfo {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  website: string;
  size: string;
  headquarters: string;
  locations: CompanyLocation[];
  rating: number;
}

export interface CompanyLocation {
  city: string;
  country: string;
  isHeadquarters: boolean;
  hiringFor: string[]; // roles they hire for at this location
}

export const companiesBasicInfo: CompanyBasicInfo[] = [
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
    rating: 4.8
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
    rating: 4.6
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
    rating: 4.3
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
    rating: 4.2
  },
  {
    id: '5',
    name: 'Paytm',
    logo: '💳',
    industry: 'FinTech',
    description: 'Leading Indian digital payments and financial services company.',
    website: 'https://paytm.com',
    size: '20,000+',
    headquarters: 'Noida, India',
    locations: [
      { city: 'Noida', country: 'India', isHeadquarters: true, hiringFor: ['SDE-1', 'SDE-2', 'Product Manager', 'Data Scientist', 'DevOps Engineer'] },
      { city: 'Bangalore', country: 'India', isHeadquarters: false, hiringFor: ['SDE-1', 'Backend Engineer', 'Mobile Developer'] },
      { city: 'Mumbai', country: 'India', isHeadquarters: false, hiringFor: ['Financial Analyst', 'Risk Analyst', 'Business Analyst'] }
    ],
    rating: 4.1
  },
  {
    id: '6',
    name: 'Zomato',
    logo: '🍕',
    industry: 'Food Tech',
    description: 'Leading food delivery and restaurant discovery platform.',
    website: 'https://zomato.com',
    size: '5,000+',
    headquarters: 'Gurugram, India',
    locations: [
      { city: 'Gurugram', country: 'India', isHeadquarters: true, hiringFor: ['SDE-1', 'SDE-2', 'Product Manager', 'Data Scientist', 'Mobile Developer'] },
      { city: 'Bangalore', country: 'India', isHeadquarters: false, hiringFor: ['SDE-1', 'Backend Engineer', 'DevOps Engineer'] },
      { city: 'Mumbai', country: 'India', isHeadquarters: false, hiringFor: ['Business Analyst', 'Operations Manager'] }
    ],
    rating: 4.0
  },
  {
    id: '7',
    name: 'Adobe',
    logo: '🎨',
    industry: 'Software/Creative',
    description: 'Global leader in digital media and creative software solutions.',
    website: 'https://adobe.com',
    size: '25,000+',
    headquarters: 'San Jose, CA, USA',
    locations: [
      { city: 'San Jose', country: 'USA', isHeadquarters: true, hiringFor: ['SDE-1', 'SDE-2', 'Product Manager', 'UX Designer', 'ML Engineer'] },
      { city: 'Bangalore', country: 'India', isHeadquarters: false, hiringFor: ['SDE-1', 'SDE-2', 'Frontend Engineer', 'Mobile Developer'] },
      { city: 'Noida', country: 'India', isHeadquarters: false, hiringFor: ['SDE-1', 'QA Engineer', 'Technical Writer'] }
    ],
    rating: 4.5
  },
  {
    id: '8',
    name: 'Salesforce',
    logo: '☁️',
    industry: 'Cloud/CRM',
    description: 'Leading cloud-based customer relationship management platform.',
    website: 'https://salesforce.com',
    size: '70,000+',
    headquarters: 'San Francisco, CA, USA',
    locations: [
      { city: 'San Francisco', country: 'USA', isHeadquarters: true, hiringFor: ['SDE-1', 'SDE-2', 'Product Manager', 'Solutions Engineer', 'Cloud Architect'] },
      { city: 'Hyderabad', country: 'India', isHeadquarters: false, hiringFor: ['SDE-1', 'SDE-2', 'DevOps Engineer', 'Security Engineer'] },
      { city: 'Bangalore', country: 'India', isHeadquarters: false, hiringFor: ['SDE-1', 'Frontend Engineer', 'Data Engineer'] }
    ],
    rating: 4.4
  },
  {
    id: '9',
    name: 'GlobalLogic',
    logo: '🌐',
    industry: 'IT Services and Consulting',
    description: 'GlobalLogic is a leader in digital product engineering services, helping brands across industries design and build innovative products, platforms, and digital experiences.',
    website: 'https://www.globallogic.com',
    size: '28,000+',
    headquarters: 'San Jose, California, USA',
    locations: [
        {
            city: 'Noida',
            country: 'India',
            isHeadquarters: false,
            hiringFor: [
                'Cloud Engineer',
                'DevOps Engineer',
                'Software Engineer',
                'QA Engineer',
                'Data Engineer'
            ]
        },
        {
            city: 'Bangalore',
            country: 'India',
            isHeadquarters: false,
            hiringFor: [
                'DevOps Engineer',
                'Frontend Developer',
                'Full Stack Developer',
                'Backend Developer'
            ]
        },
        {
            city: 'San Jose',
            country: 'USA',
            isHeadquarters: true,
            hiringFor: [
                'Digital Product Engineer',
                'Solutions Architect',
                'Project Manager',
                'UX Designer'
            ]
        }
    ],
    rating: 4.1
},
{
    id: '10',
    name: 'Texas Instruments',
    logo: '🏢',
    industry: 'Technology',
    description: 'Texas Instruments is a key player in the Technology industry.',
    website: 'https://texasinstruments.com',
    size: '9071+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-2',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-2'
    ]
}
    ],
    rating: 4.2
},
{
    id: '11',
    name: 'Arcesium',
    logo: '🏢',
    industry: 'Technology',
    description: 'Arcesium is a key player in the Technology industry.',
    website: 'https://arcesium.com',
    size: '3461+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'SDE-2',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-2',
        'SDE-1'
    ]
}
    ],
    rating: 4.3
},
{
    id: '12',
    name: 'PhonePe',
    logo: '🏢',
    industry: 'Technology',
    description: 'PhonePe is a key player in the Technology industry.',
    website: 'https://phonepe.com',
    size: '1689+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'Backend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.7
},
{
    id: '13',
    name: 'American Express',
    logo: '🏢',
    industry: 'FinTech',
    description: 'American Express is a key player in the FinTech industry.',
    website: 'https://americanexpress.com',
    size: '194+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Data Analyst',
        'Risk Analyst',
        'SDE-1',
        'Product Manager',
        'Security Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Risk Analyst',
        'Security Engineer',
        'Data Analyst',
        'Product Manager'
    ]
}
    ],
    rating: 3.7
},
{
    id: '14',
    name: 'Goldman Sachs',
    logo: '🏢',
    industry: 'Technology',
    description: 'Goldman Sachs is a key player in the Technology industry.',
    website: 'https://goldmansachs.com',
    size: '865+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Full Stack Developer',
        'Frontend Engineer',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.2
},
{
    id: '15',
    name: 'JP Morgan & Chase',
    logo: '🏢',
    industry: 'Technology',
    description: 'JP Morgan & Chase is a key player in the Technology industry.',
    website: 'https://jpmorganchase.com',
    size: '2861+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Full Stack Developer',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-1'
    ]
}
    ],
    rating: 4.2
},
{
    id: '16',
    name: 'Deutsche Bank India',
    logo: '🏢',
    industry: 'FinTech',
    description: 'Deutsche Bank India is a key player in the FinTech industry.',
    website: 'https://deutschebankindia.com',
    size: '5757+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Product Manager',
        'Security Engineer',
        'Risk Analyst',
        'Data Analyst',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Risk Analyst',
        'Security Engineer',
        'SDE-1',
        'Data Analyst'
    ]
}
    ],
    rating: 4.3
},
{
    id: '17',
    name: 'Whirlpool',
    logo: '🏢',
    industry: 'Technology',
    description: 'Whirlpool is a key player in the Technology industry.',
    website: 'https://whirlpool.com',
    size: '5392+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Frontend Engineer',
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'SDE-2',
        'Frontend Engineer',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.7
},
{
    id: '18',
    name: 'Natwest Group',
    logo: '🏢',
    industry: 'Technology',
    description: 'Natwest Group is a key player in the Technology industry.',
    website: 'https://natwestgroup.com',
    size: '8442+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-2',
        'SDE-1',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.3
},
{
    id: '19',
    name: 'Axxela Research & Analytics',
    logo: '🏢',
    industry: 'AI/ML',
    description: 'Axxela Research & Analytics is a key player in the AI/ML industry.',
    website: 'https://axxelaresearchanalytics.com',
    size: '560+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'ML Engineer',
        'NLP Engineer',
        'Cloud Engineer',
        'Data Scientist',
        'AI Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'ML Engineer',
        'AI Engineer',
        'Data Scientist',
        'Cloud Engineer'
    ]
}
    ],
    rating: 3.7
},
{
    id: '20',
    name: 'ProcDNA Analytics',
    logo: '🏢',
    industry: 'AI/ML',
    description: 'ProcDNA Analytics is a key player in the AI/ML industry.',
    website: 'https://procdnaanalytics.com',
    size: '704+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'ML Engineer',
        'AI Engineer',
        'NLP Engineer',
        'Data Scientist',
        'Cloud Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Cloud Engineer',
        'ML Engineer',
        'NLP Engineer',
        'Data Scientist'
    ]
}
    ],
    rating: 4.8
},
{
    id: '21',
    name: 'D.E. Shaw India Pvt. Ltd.',
    logo: '🏢',
    industry: 'Technology',
    description: 'D.E. Shaw India Pvt. Ltd. is a key player in the Technology industry.',
    website: 'https://deshawindiapvtltd.com',
    size: '5545+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'SDE-1',
        'Frontend Engineer',
        'Backend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'SDE-2',
        'Full Stack Developer',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.3
},
{
    id: '22',
    name: 'JP Morgan & Chase',
    logo: '🏢',
    industry: 'Technology',
    description: 'JP Morgan & Chase is a key player in the Technology industry.',
    website: 'https://jpmorganchase.com',
    size: '3708+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Frontend Engineer',
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-1'
    ]
}
    ],
    rating: 4.6
},
{
    id: '23',
    name: 'Truminds Software',
    logo: '🏢',
    industry: 'Technology',
    description: 'Truminds Software is a key player in the Technology industry.',
    website: 'https://trumindssoftware.com',
    size: '2814+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'Backend Engineer',
        'SDE-1',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'SDE-1',
        'Backend Engineer'
    ]
}
    ],
    rating: 3.9
},
{
    id: '24',
    name: 'zhealth',
    logo: '🏢',
    industry: 'HealthTech',
    description: 'zhealth is a key player in the HealthTech industry.',
    website: 'https://zhealth.com',
    size: '539+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'ML Engineer',
        'Data Engineer',
        'Bioinformatics Analyst',
        'Healthcare Data Analyst'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'ML Engineer',
        'Healthcare Data Analyst',
        'Data Engineer',
        'Bioinformatics Analyst'
    ]
}
    ],
    rating: 4.5
},
{
    id: '25',
    name: 'Intel',
    logo: '🏢',
    industry: 'Technology',
    description: 'Intel is a key player in the Technology industry.',
    website: 'https://intel.com',
    size: '5857+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'SDE-2',
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.4
},
{
    id: '26',
    name: 'Hyperdart Technologies',
    logo: '🏢',
    industry: 'Technology',
    description: 'Hyperdart Technologies is a key player in the Technology industry.',
    website: 'https://hyperdarttechnologies.com',
    size: '8432+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'SDE-2',
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'SDE-1',
        'Frontend Engineer',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.6
},
{
    id: '27',
    name: 'Competishun',
    logo: '🏢',
    industry: 'Technology',
    description: 'Competishun is a key player in the Technology industry.',
    website: 'https://competishun.com',
    size: '975+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-2',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'SDE-1',
        'Backend Engineer',
        'SDE-2'
    ]
}
    ],
    rating: 4.5
},
{
    id: '28',
    name: 'Structured',
    logo: '🏢',
    industry: 'Technology',
    description: 'Structured is a key player in the Technology industry.',
    website: 'https://structured.com',
    size: '9048+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'SDE-1',
        'SDE-2',
        'Frontend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-2',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.6
},
{
    id: '29',
    name: 'UiPath',
    logo: '🏢',
    industry: 'Technology',
    description: 'UiPath is a key player in the Technology industry.',
    website: 'https://uipath.com',
    size: '2778+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-1',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-1'
    ]
}
    ],
    rating: 4.1
},
{
    id: '30',
    name: 'Advantage Club',
    logo: '🏢',
    industry: 'Technology',
    description: 'Advantage Club is a key player in the Technology industry.',
    website: 'https://advantageclub.com',
    size: '3635+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Frontend Engineer',
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-1',
        'SDE-2'
    ]
}
    ],
    rating: 4.7
},
{
    id: '31',
    name: 'Trident',
    logo: '🏢',
    industry: 'Technology',
    description: 'Trident is a key player in the Technology industry.',
    website: 'https://trident.com',
    size: '3031+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'SDE-2',
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.2
},
{
    id: '32',
    name: 'CVENT India Pvt. Ltd.',
    logo: '🏢',
    industry: 'Technology',
    description: 'CVENT India Pvt. Ltd. is a key player in the Technology industry.',
    website: 'https://cventindiapvtltd.com',
    size: '2642+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'Backend Engineer',
        'SDE-1',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-2'
    ]
}
    ],
    rating: 4.1
},
{
    id: '33',
    name: 'McKinsey & Co.',
    logo: '🏢',
    industry: 'Consulting',
    description: 'McKinsey & Co. is a key player in the Consulting industry.',
    website: 'https://mckinseyco.com',
    size: '6632+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Project Manager',
        'Business Analyst',
        'Data Analyst',
        'Product Manager'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Product Manager',
        'Project Manager',
        'Data Analyst',
        'Business Analyst'
    ]
}
    ],
    rating: 4.1
},
{
    id: '34',
    name: 'Danfoss Industries',
    logo: '🏢',
    industry: 'Technology',
    description: 'Danfoss Industries is a key player in the Technology industry.',
    website: 'https://danfossindustries.com',
    size: '5790+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Backend Engineer',
        'SDE-2',
        'Full Stack Developer',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-2',
        'SDE-1'
    ]
}
    ],
    rating: 3.8
},
{
    id: '35',
    name: 'CopperPod IP',
    logo: '🏢',
    industry: 'Technology',
    description: 'CopperPod IP is a key player in the Technology industry.',
    website: 'https://copperpodip.com',
    size: '1432+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'SDE-1',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'Backend Engineer',
        'Frontend Engineer',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.3
},
{
    id: '36',
    name: 'STGI Technologies',
    logo: '🏢',
    industry: 'Technology',
    description: 'STGI Technologies is a key player in the Technology industry.',
    website: 'https://stgitechnologies.com',
    size: '6657+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'SDE-1',
        'Backend Engineer',
        'Frontend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2'
    ]
}
    ],
    rating: 4.2
},
{
    id: '37',
    name: 'Fluor Daniel India',
    logo: '🏢',
    industry: 'Technology',
    description: 'Fluor Daniel India is a key player in the Technology industry.',
    website: 'https://fluordanielindia.com',
    size: '5680+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-2',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2'
    ]
}
    ],
    rating: 4.7
},
{
    id: '38',
    name: 'The Future University',
    logo: '🏢',
    industry: 'Technology',
    description: 'The Future University is a key player in the Technology industry.',
    website: 'https://thefutureuniversity.com',
    size: '8483+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-1',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'SDE-1',
        'Backend Engineer',
        'SDE-2'
    ]
}
    ],
    rating: 4.0
},
{
    id: '39',
    name: 'ELECTROWAVES ELECTRONICS',
    logo: '🏢',
    industry: 'Technology',
    description: 'ELECTROWAVES ELECTRONICS is a key player in the Technology industry.',
    website: 'https://electrowaveselectronics.com',
    size: '2997+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Backend Engineer',
        'SDE-2',
        'Full Stack Developer',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-1'
    ]
}
    ],
    rating: 4.7
},
{
    id: '40',
    name: 'Ikarus 3D',
    logo: '🏢',
    industry: 'Technology',
    description: 'Ikarus 3D is a key player in the Technology industry.',
    website: 'https://ikarus3d.com',
    size: '6202+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'SDE-1',
        'Frontend Engineer'
    ]
}
    ],
    rating: 3.9
},
{
    id: '41',
    name: 'Probo Media Technologies',
    logo: '🏢',
    industry: 'HealthTech',
    description: 'Probo Media Technologies is a key player in the HealthTech industry.',
    website: 'https://probomediatechnologies.com',
    size: '5036+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Bioinformatics Analyst',
        'Data Engineer',
        'Healthcare Data Analyst',
        'ML Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Bioinformatics Analyst',
        'Data Engineer',
        'Healthcare Data Analyst',
        'ML Engineer'
    ]
}
    ],
    rating: 4.8
},
{
    id: '42',
    name: 'Scry Analytics Inc.',
    logo: '🏢',
    industry: 'AI/ML',
    description: 'Scry Analytics Inc. is a key player in the AI/ML industry.',
    website: 'https://scryanalyticsinc.com',
    size: '4724+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'NLP Engineer',
        'Cloud Engineer',
        'AI Engineer',
        'ML Engineer',
        'Data Scientist'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'ML Engineer',
        'AI Engineer',
        'NLP Engineer',
        'Data Scientist'
    ]
}
    ],
    rating: 3.9
},
{
    id: '43',
    name: 'Zavya',
    logo: '🏢',
    industry: 'Technology',
    description: 'Zavya is a key player in the Technology industry.',
    website: 'https://zavya.com',
    size: '4517+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-1',
        'Full Stack Developer',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.6
},
{
    id: '44',
    name: 'OpeninApp',
    logo: '🏢',
    industry: 'Technology',
    description: 'OpeninApp is a key player in the Technology industry.',
    website: 'https://openinapp.com',
    size: '5222+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Full Stack Developer',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'SDE-1',
        'Frontend Engineer',
        'SDE-2'
    ]
}
    ],
    rating: 4.2
},
{
    id: '45',
    name: 'DEE2CEE Brands Pvt. Ltd.',
    logo: '🏢',
    industry: 'Technology',
    description: 'DEE2CEE Brands Pvt. Ltd. is a key player in the Technology industry.',
    website: 'https://dee2ceebrandspvtltd.com',
    size: '9237+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer',
        'SDE-1',
        'Backend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Full Stack Developer',
        'SDE-2',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.8
},
{
    id: '46',
    name: 'Sopra Banking Software',
    logo: '🏢',
    industry: 'FinTech',
    description: 'Sopra Banking Software is a key player in the FinTech industry.',
    website: 'https://soprabankingsoftware.com',
    size: '9103+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Risk Analyst',
        'Security Engineer',
        'Product Manager',
        'Data Analyst',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Data Analyst',
        'Risk Analyst',
        'Product Manager'
    ]
}
    ],
    rating: 4.1
},
{
    id: '47',
    name: 'GOASKNOW Technologies',
    logo: '🏢',
    industry: 'Technology',
    description: 'GOASKNOW Technologies is a key player in the Technology industry.',
    website: 'https://goasknowtechnologies.com',
    size: '1406+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer',
        'SDE-1',
        'Backend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-2'
    ]
}
    ],
    rating: 4.2
},
{
    id: '48',
    name: 'Skylark Drones',
    logo: '🏢',
    industry: 'Technology',
    description: 'Skylark Drones is a key player in the Technology industry.',
    website: 'https://skylarkdrones.com',
    size: '5211+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-2',
        'SDE-1',
        'Backend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-2',
        'SDE-1'
    ]
}
    ],
    rating: 4.5
},
{
    id: '49',
    name: 'BMW India',
    logo: '🏢',
    industry: 'Automotive',
    description: 'BMW India is a key player in the Automotive industry.',
    website: 'https://bmwindia.com',
    size: '1993+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Mechanical Engineer',
        'Embedded Systems Engineer',
        'Automation Test Engineer',
        'IoT Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Mechanical Engineer',
        'Embedded Systems Engineer',
        'Automation Test Engineer',
        'IoT Developer'
    ]
}
    ],
    rating: 4.9
},
{
    id: '50',
    name: 'Athical Pvt. Ltd.',
    logo: '🏢',
    industry: 'Technology',
    description: 'Athical Pvt. Ltd. is a key player in the Technology industry.',
    website: 'https://athicalpvtltd.com',
    size: '3009+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'Backend Engineer',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'SDE-2',
        'Full Stack Developer',
        'SDE-1'
    ]
}
    ],
    rating: 4.5
},
{
    id: '51',
    name: 'Sage Media Pvt. Ltd.',
    logo: '🏢',
    industry: 'HealthTech',
    description: 'Sage Media Pvt. Ltd. is a key player in the HealthTech industry.',
    website: 'https://sagemediapvtltd.com',
    size: '558+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Bioinformatics Analyst',
        'Data Engineer',
        'Healthcare Data Analyst',
        'ML Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Data Engineer',
        'ML Engineer',
        'Healthcare Data Analyst',
        'Bioinformatics Analyst'
    ]
}
    ],
    rating: 4.7
},
{
    id: '52',
    name: 'EduRev',
    logo: '🏢',
    industry: 'EdTech',
    description: 'EduRev is a key player in the EdTech industry.',
    website: 'https://edurev.com',
    size: '2173+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Instructional Designer',
        'UX Designer',
        'SDE-1',
        'EdTech Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'UX Designer',
        'EdTech Engineer',
        'Instructional Designer',
        'SDE-1'
    ]
}
    ],
    rating: 4.6
},
{
    id: '53',
    name: 'Xartup',
    logo: '🏢',
    industry: 'Technology',
    description: 'Xartup is a key player in the Technology industry.',
    website: 'https://xartup.com',
    size: '2264+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'SDE-2',
        'SDE-1',
        'Full Stack Developer',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer'
    ]
}
    ],
    rating: 3.8
},
{
    id: '54',
    name: 'Go4orldbusiness.com',
    logo: '🏢',
    industry: 'Technology',
    description: 'Go4orldbusiness.com is a key player in the Technology industry.',
    website: 'https://go4orldbusinesscom.com',
    size: '2803+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-2',
        'SDE-1',
        'Backend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'SDE-2',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.8
},
{
    id: '55',
    name: 'Renesas Electronics',
    logo: '🏢',
    industry: 'Technology',
    description: 'Renesas Electronics is a key player in the Technology industry.',
    website: 'https://renesaselectronics.com',
    size: '6788+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'SDE-2',
        'Backend Engineer',
        'SDE-1',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'SDE-2',
        'Full Stack Developer',
        'SDE-1'
    ]
}
    ],
    rating: 3.8
},
{
    id: '56',
    name: 'Vimaana Aerospace',
    logo: '🏢',
    industry: 'Aerospace',
    description: 'Vimaana Aerospace is a key player in the Aerospace industry.',
    website: 'https://vimaanaaerospace.com',
    size: '6894+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Simulation Engineer',
        'ML Engineer',
        'Robotics Engineer',
        'FPGA Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Simulation Engineer',
        'ML Engineer',
        'Robotics Engineer',
        'FPGA Developer'
    ]
}
    ],
    rating: 4.3
},
{
    id: '57',
    name: 'Anand',
    logo: '🏢',
    industry: 'Technology',
    description: 'Anand is a key player in the Technology industry.',
    website: 'https://anand.com',
    size: '1703+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'SDE-2',
        'Full Stack Developer',
        'Frontend Engineer',
        'Backend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer',
        'Frontend Engineer'
    ]
}
    ],
    rating: 3.9
},
{
    id: '58',
    name: 'Statcon Powtech',
    logo: '🏢',
    industry: 'Technology',
    description: 'Statcon Powtech is a key player in the Technology industry.',
    website: 'https://statconpowtech.com',
    size: '3358+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-1',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-2'
    ]
}
    ],
    rating: 3.9
},
{
    id: '59',
    name: 'Intellipaat Software',
    logo: '🏢',
    industry: 'Technology',
    description: 'Intellipaat Software is a key player in the Technology industry.',
    website: 'https://intellipaatsoftware.com',
    size: '1471+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'SDE-2',
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'SDE-1',
        'Frontend Engineer',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.0
},
{
    id: '60',
    name: 'Tensor Matics Pvt. Ltd.',
    logo: '🏢',
    industry: 'Technology',
    description: 'Tensor Matics Pvt. Ltd. is a key player in the Technology industry.',
    website: 'https://tensormaticspvtltd.com',
    size: '6426+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'SDE-1',
        'Full Stack Developer',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.5
},
{
    id: '61',
    name: 'Maruti Suzuki India',
    logo: '🏢',
    industry: 'Automotive',
    description: 'Maruti Suzuki India is a key player in the Automotive industry.',
    website: 'https://marutisuzukiindia.com',
    size: '2464+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'IoT Developer',
        'Embedded Systems Engineer',
        'Automation Test Engineer',
        'Mechanical Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'IoT Developer',
        'Embedded Systems Engineer',
        'Mechanical Engineer',
        'Automation Test Engineer'
    ]
}
    ],
    rating: 4.5
},
{
    id: '62',
    name: 'Growth Jockey Private Limited',
    logo: '🏢',
    industry: 'Technology',
    description: 'Growth Jockey Private Limited is a key player in the Technology industry.',
    website: 'https://growthjockeyprivatelimited.com',
    size: '7345+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-2',
        'SDE-1',
        'Backend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer',
        'Frontend Engineer'
    ]
}
    ],
    rating: 3.8
},
{
    id: '63',
    name: 'Dualite',
    logo: '🏢',
    industry: 'Technology',
    description: 'Dualite is a key player in the Technology industry.',
    website: 'https://dualite.com',
    size: '6236+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-2',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.2
},
{
    id: '64',
    name: 'Pinsout Innovations',
    logo: '🏢',
    industry: 'Technology',
    description: 'Pinsout Innovations is a key player in the Technology industry.',
    website: 'https://pinsoutinnovations.com',
    size: '2652+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-1',
        'SDE-2',
        'Backend Engineer',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-2',
        'SDE-1'
    ]
}
    ],
    rating: 4.4
},
{
    id: '65',
    name: 'Atlan Technologies',
    logo: '🏢',
    industry: 'Technology',
    description: 'Atlan Technologies is a key player in the Technology industry.',
    website: 'https://atlantechnologies.com',
    size: '6034+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'SDE-2',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'SDE-2',
        'Backend Engineer',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.1
},
{
    id: '66',
    name: 'SEDEMAC Mechatronics',
    logo: '🏢',
    industry: 'Technology',
    description: 'SEDEMAC Mechatronics is a key player in the Technology industry.',
    website: 'https://sedemacmechatronics.com',
    size: '5686+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Backend Engineer',
        'SDE-2',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.1
},
{
    id: '67',
    name: 'Mamaearth',
    logo: '🏢',
    industry: 'Technology',
    description: 'Mamaearth is a key player in the Technology industry.',
    website: 'https://mamaearth.com',
    size: '6658+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-2',
        'SDE-1',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'Full Stack Developer',
        'Backend Engineer',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.3
},
{
    id: '68',
    name: 'Wayspire Ed-Tech',
    logo: '🏢',
    industry: 'Technology',
    description: 'Wayspire Ed-Tech is a key player in the Technology industry.',
    website: 'https://wayspireed-tech.com',
    size: '2091+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'SDE-2'
    ]
}
    ],
    rating: 4.1
},
{
    id: '69',
    name: 'EffiGO Global',
    logo: '🏢',
    industry: 'Technology',
    description: 'EffiGO Global is a key player in the Technology industry.',
    website: 'https://effigoglobal.com',
    size: '1909+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'Backend Engineer',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-1'
    ]
}
    ],
    rating: 3.8
},
{
    id: '70',
    name: 'Changejar Tech Pvt Ltd',
    logo: '🏢',
    industry: 'Technology',
    description: 'Changejar Tech Pvt Ltd is a key player in the Technology industry.',
    website: 'https://changejartechpvtltd.com',
    size: '788+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-2',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'SDE-1',
        'Full Stack Developer',
        'Frontend Engineer'
    ]
}
    ],
    rating: 3.7
},
{
    id: '71',
    name: 'Deradh Software Pvt Ltd',
    logo: '🏢',
    industry: 'Technology',
    description: 'Deradh Software Pvt Ltd is a key player in the Technology industry.',
    website: 'https://deradhsoftwarepvtltd.com',
    size: '7074+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'SDE-2',
        'Backend Engineer',
        'SDE-1',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'SDE-2',
        'Backend Engineer',
        'SDE-1'
    ]
}
    ],
    rating: 4.2
},
{
    id: '72',
    name: 'Academor',
    logo: '🏢',
    industry: 'EdTech',
    description: 'Academor is a key player in the EdTech industry.',
    website: 'https://academor.com',
    size: '4238+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'UX Designer',
        'Instructional Designer',
        'SDE-1',
        'EdTech Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'EdTech Engineer',
        'Instructional Designer',
        'UX Designer'
    ]
}
    ],
    rating: 3.7
},
{
    id: '73',
    name: 'Rise11 Technologies',
    logo: '🏢',
    industry: 'Technology',
    description: 'Rise11 Technologies is a key player in the Technology industry.',
    website: 'https://rise11technologies.com',
    size: '5189+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'SDE-1',
        'SDE-2',
        'Backend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'SDE-2',
        'Full Stack Developer'
    ]
}
    ],
    rating: 3.9
},
{
    id: '74',
    name: 'Mckinley & Rice',
    logo: '🏢',
    industry: 'Technology',
    description: 'Mckinley & Rice is a key player in the Technology industry.',
    website: 'https://mckinleyrice.com',
    size: '3270+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-1',
        'Full Stack Developer',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'SDE-1',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.6
},
{
    id: '75',
    name: 'AstroTalk',
    logo: '🏢',
    industry: 'Technology',
    description: 'AstroTalk is a key player in the Technology industry.',
    website: 'https://astrotalk.com',
    size: '1426+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-1',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-1',
        'SDE-2'
    ]
}
    ],
    rating: 4.4
},
{
    id: '76',
    name: 'UdyogYantra Technologies',
    logo: '🏢',
    industry: 'Technology',
    description: 'UdyogYantra Technologies is a key player in the Technology industry.',
    website: 'https://udyogyantratechnologies.com',
    size: '3396+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'SDE-1'
    ]
}
    ],
    rating: 3.8
},
{
    id: '77',
    name: 'DDSPLM Private Limited',
    logo: '🏢',
    industry: 'Technology',
    description: 'DDSPLM Private Limited is a key player in the Technology industry.',
    website: 'https://ddsplmprivatelimited.com',
    size: '2272+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-2',
        'Full Stack Developer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'SDE-1',
        'Frontend Engineer',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.6
},
{
    id: '78',
    name: 'Shalimar Paints',
    logo: '🏢',
    industry: 'AI/ML',
    description: 'Shalimar Paints is a key player in the AI/ML industry.',
    website: 'https://shalimarpaints.com',
    size: '1093+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'AI Engineer',
        'ML Engineer',
        'Data Scientist',
        'NLP Engineer',
        'Cloud Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Cloud Engineer',
        'AI Engineer',
        'NLP Engineer',
        'ML Engineer'
    ]
}
    ],
    rating: 4.9
},
{
    id: '79',
    name: 'Omninos Technologies',
    logo: '🏢',
    industry: 'Technology',
    description: 'Omninos Technologies is a key player in the Technology industry.',
    website: 'https://omninostechnologies.com',
    size: '7249+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'SDE-1',
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'SDE-1',
        'Full Stack Developer',
        'SDE-2'
    ]
}
    ],
    rating: 4.6
},
{
    id: '80',
    name: 'Zestminds Technologies',
    logo: '🏢',
    industry: 'Technology',
    description: 'Zestminds Technologies is a key player in the Technology industry.',
    website: 'https://zestmindstechnologies.com',
    size: '2141+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-1',
        'Backend Engineer',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-1',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.6
},
{
    id: '81',
    name: 'Ajna Capital',
    logo: '🏢',
    industry: 'FinTech',
    description: 'Ajna Capital is a key player in the FinTech industry.',
    website: 'https://ajnacapital.com',
    size: '9347+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Risk Analyst',
        'Product Manager',
        'SDE-1',
        'Data Analyst',
        'Security Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Risk Analyst',
        'SDE-1',
        'Security Engineer',
        'Data Analyst'
    ]
}
    ],
    rating: 4.0
},
{
    id: '82',
    name: 'IndiaP2P',
    logo: '🏢',
    industry: 'FinTech',
    description: 'IndiaP2P is a key player in the FinTech industry.',
    website: 'https://indiap2p.com',
    size: '8630+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Security Engineer',
        'Data Analyst',
        'Risk Analyst',
        'Product Manager'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Security Engineer',
        'Product Manager',
        'Data Analyst',
        'Risk Analyst'
    ]
}
    ],
    rating: 4.2
},
{
    id: '83',
    name: 'YourNest Venture Capital',
    logo: '🏢',
    industry: 'FinTech',
    description: 'YourNest Venture Capital is a key player in the FinTech industry.',
    website: 'https://yournestventurecapital.com',
    size: '3113+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Risk Analyst',
        'Data Analyst',
        'SDE-1',
        'Product Manager',
        'Security Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Product Manager',
        'Data Analyst',
        'Security Engineer',
        'Risk Analyst'
    ]
}
    ],
    rating: 3.9
},
{
    id: '84',
    name: 'Bayslope Business Solutions',
    logo: '🏢',
    industry: 'Technology',
    description: 'Bayslope Business Solutions is a key player in the Technology industry.',
    website: 'https://bayslopebusinesssolutions.com',
    size: '6611+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Full Stack Developer',
        'SDE-1',
        'Frontend Engineer',
        'Backend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'SDE-1',
        'Full Stack Developer',
        'Backend Engineer'
    ]
}
    ],
    rating: 3.9
},
{
    id: '85',
    name: 'Arora Iron and Steel',
    logo: '🏢',
    industry: 'Technology',
    description: 'Arora Iron and Steel is a key player in the Technology industry.',
    website: 'https://aroraironandsteel.com',
    size: '9209+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'SDE-2',
        'Backend Engineer',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.4
},
{
    id: '86',
    name: 'Little Kanhya Knitting',
    logo: '🏢',
    industry: 'Technology',
    description: 'Little Kanhya Knitting is a key player in the Technology industry.',
    website: 'https://littlekanhyaknitting.com',
    size: '7385+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'Backend Engineer',
        'SDE-1',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'SDE-2',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.4
},
{
    id: '87',
    name: 'Metlonics',
    logo: '🏢',
    industry: 'Technology',
    description: 'Metlonics is a key player in the Technology industry.',
    website: 'https://metlonics.com',
    size: '7924+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-2',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'SDE-1',
        'Frontend Engineer',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.2
},
{
    id: '88',
    name: 'Besseggen Infotech',
    logo: '🏢',
    industry: 'Technology',
    description: 'Besseggen Infotech is a key player in the Technology industry.',
    website: 'https://besseggeninfotech.com',
    size: '9547+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Full Stack Developer',
        'SDE-1',
        'Backend Engineer',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-2'
    ]
}
    ],
    rating: 4.4
},
{
    id: '89',
    name: 'Mindcog Technologies',
    logo: '🏢',
    industry: 'Technology',
    description: 'Mindcog Technologies is a key player in the Technology industry.',
    website: 'https://mindcogtechnologies.com',
    size: '5680+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer',
        'Backend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-2'
    ]
}
    ],
    rating: 3.9
},
{
    id: '90',
    name: 'Siemens',
    logo: '🏢',
    industry: 'Technology',
    description: 'Siemens is a key player in the Technology industry.',
    website: 'https://siemens.com',
    size: '2716+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-2',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'SDE-2',
        'SDE-1',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.2
},
{
    id: '91',
    name: 'Closeloop Technologies',
    logo: '🏢',
    industry: 'Technology',
    description: 'Closeloop Technologies is a key player in the Technology industry.',
    website: 'https://closelooptechnologies.com',
    size: '3736+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Frontend Engineer',
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'SDE-2'
    ]
}
    ],
    rating: 4.7
},
{
    id: '92',
    name: 'Mitigata Smart Cycles',
    logo: '🏢',
    industry: 'E-commerce',
    description: 'Mitigata Smart Cycles is a key player in the E-commerce industry.',
    website: 'https://mitigatasmartcycles.com',
    size: '978+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Data Scientist',
        'SDE-2',
        'Business Analyst',
        'Product Manager'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Product Manager',
        'Business Analyst',
        'SDE-1',
        'Data Scientist'
    ]
}
    ],
    rating: 4.5
},
{
    id: '93',
    name: 'Loreal',
    logo: '🏢',
    industry: 'Technology',
    description: 'Loreal is a key player in the Technology industry.',
    website: 'https://loreal.com',
    size: '1656+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-1',
        'SDE-2',
        'Backend Engineer',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-1'
    ]
}
    ],
    rating: 4.7
},
{
    id: '94',
    name: 'Allengers Medical',
    logo: '🏢',
    industry: 'HealthTech',
    description: 'Allengers Medical is a key player in the HealthTech industry.',
    website: 'https://allengersmedical.com',
    size: '8903+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Healthcare Data Analyst',
        'Data Engineer',
        'Bioinformatics Analyst',
        'ML Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'ML Engineer',
        'Healthcare Data Analyst',
        'Data Engineer',
        'Bioinformatics Analyst'
    ]
}
    ],
    rating: 4.7
},
{
    id: '95',
    name: 'Coding Ninjas',
    logo: '🏢',
    industry: 'Technology',
    description: 'Coding Ninjas is a key player in the Technology industry.',
    website: 'https://codingninjas.com',
    size: '8391+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-1',
        'SDE-2'
    ]
}
    ],
    rating: 3.9
},
{
    id: '96',
    name: 'Tynor Orthotics',
    logo: '🏢',
    industry: 'Technology',
    description: 'Tynor Orthotics is a key player in the Technology industry.',
    website: 'https://tynororthotics.com',
    size: '5967+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'SDE-2',
        'Full Stack Developer',
        'SDE-1'
    ]
}
    ],
    rating: 4.3
},
{
    id: '97',
    name: 'Schneider Electric',
    logo: '🏢',
    industry: 'Technology',
    description: 'Schneider Electric is a key player in the Technology industry.',
    website: 'https://schneiderelectric.com',
    size: '3955+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'SDE-2',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'SDE-2',
        'Frontend Engineer',
        'SDE-1'
    ]
}
    ],
    rating: 4.4
},
{
    id: '98',
    name: 'aakash institute',
    logo: '🏢',
    industry: 'EdTech',
    description: 'aakash institute is a key player in the EdTech industry.',
    website: 'https://aakashinstitute.com',
    size: '1586+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Instructional Designer',
        'SDE-1',
        'UX Designer',
        'EdTech Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'UX Designer',
        'EdTech Engineer',
        'Instructional Designer',
        'SDE-1'
    ]
}
    ],
    rating: 3.9
},
{
    id: '99',
    name: 'airbus',
    logo: '🏢',
    industry: 'Aerospace',
    description: 'airbus is a key player in the Aerospace industry.',
    website: 'https://airbus.com',
    size: '3906+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'FPGA Developer',
        'Simulation Engineer',
        'Robotics Engineer',
        'ML Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Simulation Engineer',
        'FPGA Developer',
        'ML Engineer',
        'Robotics Engineer'
    ]
}
    ],
    rating: 4.1
},
{
    id: '100',
    name: 'airo digital labs',
    logo: '🏢',
    industry: 'AI/ML',
    description: 'airo digital labs is a key player in the AI/ML industry.',
    website: 'https://airodigitallabs.com',
    size: '2406+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Data Scientist',
        'Cloud Engineer',
        'ML Engineer',
        'AI Engineer',
        'NLP Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Cloud Engineer',
        'ML Engineer',
        'Data Scientist',
        'AI Engineer'
    ]
}
    ],
    rating: 4.1
},
{
    id: '101',
    name: 'amadeus',
    logo: '🏢',
    industry: 'Technology',
    description: 'amadeus is a key player in the Technology industry.',
    website: 'https://amadeus.com',
    size: '5327+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'SDE-1',
        'Backend Engineer',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'SDE-1',
        'Backend Engineer',
        'SDE-2'
    ]
}
    ],
    rating: 3.9
},
{
    id: '102',
    name: 'amdocs',
    logo: '🏢',
    industry: 'Technology',
    description: 'amdocs is a key player in the Technology industry.',
    website: 'https://amdocs.com',
    size: '2568+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'SDE-1',
        'Frontend Engineer'
    ]
}
    ],
    rating: 3.9
},
{
    id: '103',
    name: 'appsian tech private limited',
    logo: '🏢',
    industry: 'Technology',
    description: 'appsian tech private limited is a key player in the Technology industry.',
    website: 'https://appsiantechprivatelimited.com',
    size: '4568+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'SDE-1',
        'Backend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-1',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.6
},
{
    id: '104',
    name: 'ashok leyland',
    logo: '🏢',
    industry: 'Automotive',
    description: 'ashok leyland is a key player in the Automotive industry.',
    website: 'https://ashokleyland.com',
    size: '6354+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Mechanical Engineer',
        'Embedded Systems Engineer',
        'Automation Test Engineer',
        'IoT Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Mechanical Engineer',
        'Embedded Systems Engineer',
        'IoT Developer',
        'Automation Test Engineer'
    ]
}
    ],
    rating: 4.6
},
{
    id: '105',
    name: 'atica hospitality',
    logo: '🏢',
    industry: 'Technology',
    description: 'atica hospitality is a key player in the Technology industry.',
    website: 'https://aticahospitality.com',
    size: '7459+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-2',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'SDE-1',
        'Full Stack Developer',
        'Frontend Engineer'
    ]
}
    ],
    rating: 3.7
},
{
    id: '106',
    name: 'auxoai engineering',
    logo: '🏢',
    industry: 'AI/ML',
    description: 'auxoai engineering is a key player in the AI/ML industry.',
    website: 'https://auxoaiengineering.com',
    size: '4152+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Data Scientist',
        'Cloud Engineer',
        'ML Engineer',
        'NLP Engineer',
        'AI Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'AI Engineer',
        'NLP Engineer',
        'Data Scientist',
        'Cloud Engineer'
    ]
}
    ],
    rating: 4.8
},
{
    id: '107',
    name: 'bain capability network',
    logo: '🏢',
    industry: 'AI/ML',
    description: 'bain capability network is a key player in the AI/ML industry.',
    website: 'https://baincapabilitynetwork.com',
    size: '8233+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'NLP Engineer',
        'Cloud Engineer',
        'Data Scientist',
        'ML Engineer',
        'AI Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'AI Engineer',
        'Cloud Engineer',
        'ML Engineer',
        'NLP Engineer'
    ]
}
    ],
    rating: 4.2
},
{
    id: '108',
    name: 'bajaj auto ltd.',
    logo: '🏢',
    industry: 'Automotive',
    description: 'bajaj auto ltd. is a key player in the Automotive industry.',
    website: 'https://bajajautoltd.com',
    size: '4990+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Automation Test Engineer',
        'Mechanical Engineer',
        'Embedded Systems Engineer',
        'IoT Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Embedded Systems Engineer',
        'Mechanical Engineer',
        'Automation Test Engineer',
        'IoT Developer'
    ]
}
    ],
    rating: 4.5
},
{
    id: '109',
    name: 'best group',
    logo: '🏢',
    industry: 'Technology',
    description: 'best group is a key player in the Technology industry.',
    website: 'https://bestgroup.com',
    size: '420+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'SDE-2',
        'Backend Engineer',
        'Frontend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-2'
    ]
}
    ],
    rating: 4.5
},
{
    id: '110',
    name: 'blinkit',
    logo: '🏢',
    industry: 'Technology',
    description: 'blinkit is a key player in the Technology industry.',
    website: 'https://blinkit.com',
    size: '4012+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-2',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'Backend Engineer',
        'SDE-1',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.3
},
{
    id: '111',
    name: 'blogvault pvt. ltd.',
    logo: '🏢',
    industry: 'Technology',
    description: 'blogvault pvt. ltd. is a key player in the Technology industry.',
    website: 'https://blogvaultpvtltd.com',
    size: '5458+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'Full Stack Developer',
        'Frontend Engineer',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.4
},
{
    id: '112',
    name: 'browserstack',
    logo: '🏢',
    industry: 'Technology',
    description: 'browserstack is a key player in the Technology industry.',
    website: 'https://browserstack.com',
    size: '1425+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'SDE-1',
        'Backend Engineer',
        'Frontend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.6
},
{
    id: '113',
    name: 'carrier',
    logo: '🏢',
    industry: 'Automotive',
    description: 'carrier is a key player in the Automotive industry.',
    website: 'https://carrier.com',
    size: '3330+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Mechanical Engineer',
        'Automation Test Engineer',
        'IoT Developer',
        'Embedded Systems Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Embedded Systems Engineer',
        'IoT Developer',
        'Automation Test Engineer',
        'Mechanical Engineer'
    ]
}
    ],
    rating: 4.4
},
{
    id: '114',
    name: 'chegg india pvt. ltd',
    logo: '🏢',
    industry: 'Technology',
    description: 'chegg india pvt. ltd is a key player in the Technology industry.',
    website: 'https://cheggindiapvtltd.com',
    size: '3697+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'SDE-2',
        'Full Stack Developer',
        'Backend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'Backend Engineer',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.6
},
{
    id: '115',
    name: 'cisco',
    logo: '🏢',
    industry: 'Technology',
    description: 'cisco is a key player in the Technology industry.',
    website: 'https://cisco.com',
    size: '2357+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'SDE-1',
        'Backend Engineer',
        'Frontend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'SDE-1',
        'Frontend Engineer',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.0
},
{
    id: '116',
    name: 'cognizant',
    logo: '🏢',
    industry: 'Technology',
    description: 'cognizant is a key player in the Technology industry.',
    website: 'https://cognizant.com',
    size: '9005+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Backend Engineer',
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'SDE-2',
        'Full Stack Developer',
        'SDE-1'
    ]
}
    ],
    rating: 3.9
},
{
    id: '117',
    name: 'cyfuture india pvt. ltd.',
    logo: '🏢',
    industry: 'Technology',
    description: 'cyfuture india pvt. ltd. is a key player in the Technology industry.',
    website: 'https://cyfutureindiapvtltd.com',
    size: '2929+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'Backend Engineer',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.5
},
{
    id: '118',
    name: 'decimal technologies',
    logo: '🏢',
    industry: 'Technology',
    description: 'decimal technologies is a key player in the Technology industry.',
    website: 'https://decimaltechnologies.com',
    size: '4541+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.7
},
{
    id: '119',
    name: 'deutsche telekom',
    logo: '🏢',
    industry: 'Technology',
    description: 'deutsche telekom is a key player in the Technology industry.',
    website: 'https://deutschetelekom.com',
    size: '5589+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-2',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-2',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.3
},
{
    id: '120',
    name: 'digital transformation center',
    logo: '🏢',
    industry: 'Technology',
    description: 'digital transformation center is a key player in the Technology industry.',
    website: 'https://digitaltransformationcenter.com',
    size: '2064+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-2',
        'SDE-1',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-2'
    ]
}
    ],
    rating: 4.6
},
{
    id: '121',
    name: 'edurev learning pvt. ltd.',
    logo: '🏢',
    industry: 'EdTech',
    description: 'edurev learning pvt. ltd. is a key player in the EdTech industry.',
    website: 'https://edurevlearningpvtltd.com',
    size: '6070+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'EdTech Engineer',
        'UX Designer',
        'Instructional Designer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Instructional Designer',
        'SDE-1',
        'EdTech Engineer',
        'UX Designer'
    ]
}
    ],
    rating: 4.8
},
{
    id: '122',
    name: 'futures first info services',
    logo: '🏢',
    industry: 'Technology',
    description: 'futures first info services is a key player in the Technology industry.',
    website: 'https://futuresfirstinfoservices.com',
    size: '7633+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-2',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-1',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.8
},
{
    id: '123',
    name: 'growth jockey private limited (non-tech)',
    logo: '🏢',
    industry: 'Technology',
    description: 'growth jockey private limited (non-tech) is a key player in the Technology industry.',
    website: 'https://growthjockeyprivatelimited(non-tech).com',
    size: '2735+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-2',
        'Full Stack Developer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2'
    ]
}
    ],
    rating: 3.7
},
{
    id: '124',
    name: 'growth jockey private limited (tech)',
    logo: '🏢',
    industry: 'Technology',
    description: 'growth jockey private limited (tech) is a key player in the Technology industry.',
    website: 'https://growthjockeyprivatelimited(tech).com',
    size: '7698+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'SDE-2',
        'SDE-1',
        'Full Stack Developer',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-1'
    ]
}
    ],
    rating: 4.5
},
{
    id: '125',
    name: 'ibm',
    logo: '🏢',
    industry: 'Technology',
    description: 'ibm is a key player in the Technology industry.',
    website: 'https://ibm.com',
    size: '6551+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-2',
        'Frontend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'SDE-1'
    ]
}
    ],
    rating: 4.4
},
{
    id: '126',
    name: 'icici bank',
    logo: '🏢',
    industry: 'FinTech',
    description: 'icici bank is a key player in the FinTech industry.',
    website: 'https://icicibank.com',
    size: '6805+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Risk Analyst',
        'Product Manager',
        'Security Engineer',
        'Data Analyst',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Security Engineer',
        'Data Analyst',
        'Product Manager'
    ]
}
    ],
    rating: 4.2
},
{
    id: '127',
    name: 'icuerious research',
    logo: '🏢',
    industry: 'Technology',
    description: 'icuerious research is a key player in the Technology industry.',
    website: 'https://icueriousresearch.com',
    size: '2008+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Full Stack Developer',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Full Stack Developer',
        'Backend Engineer',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.4
},
{
    id: '128',
    name: 'ideametrics global',
    logo: '🏢',
    industry: 'Technology',
    description: 'ideametrics global is a key player in the Technology industry.',
    website: 'https://ideametricsglobal.com',
    size: '3164+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Backend Engineer',
        'SDE-1',
        'Frontend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'SDE-1'
    ]
}
    ],
    rating: 3.7
},
{
    id: '129',
    name: 'indus towers limited',
    logo: '🏢',
    industry: 'Technology',
    description: 'indus towers limited is a key player in the Technology industry.',
    website: 'https://industowerslimited.com',
    size: '1316+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-1',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'SDE-2',
        'Backend Engineer',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.4
},
{
    id: '130',
    name: 'infosys',
    logo: '🏢',
    industry: 'Technology',
    description: 'infosys is a key player in the Technology industry.',
    website: 'https://infosys.com',
    size: '5779+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2'
    ]
}
    ],
    rating: 4.6
},
{
    id: '131',
    name: 'jsw sarbloh motor',
    logo: '🏢',
    industry: 'Technology',
    description: 'jsw sarbloh motor is a key player in the Technology industry.',
    website: 'https://jswsarblohmotor.com',
    size: '3313+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-1'
    ]
}
    ],
    rating: 4.8
},
{
    id: '132',
    name: 'kanerika inc',
    logo: '🏢',
    industry: 'Technology',
    description: 'kanerika inc is a key player in the Technology industry.',
    website: 'https://kanerikainc.com',
    size: '3130+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Frontend Engineer',
        'SDE-1',
        'Full Stack Developer',
        'Backend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-1'
    ]
}
    ],
    rating: 4.0
},
{
    id: '133',
    name: 'loreal india pvt. ltd.',
    logo: '🏢',
    industry: 'Technology',
    description: 'loreal india pvt. ltd. is a key player in the Technology industry.',
    website: 'https://lorealindiapvtltd.com',
    size: '8542+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-2',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'SDE-2',
        'Frontend Engineer',
        'SDE-1'
    ]
}
    ],
    rating: 4.2
},
{
    id: '134',
    name: 'labellerr',
    logo: '🏢',
    industry: 'Technology',
    description: 'labellerr is a key player in the Technology industry.',
    website: 'https://labellerr.com',
    size: '4097+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-2',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'Full Stack Developer',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.8
},
{
    id: '135',
    name: 'larsen & toubro',
    logo: '🏢',
    industry: 'Technology',
    description: 'larsen & toubro is a key player in the Technology industry.',
    website: 'https://larsentoubro.com',
    size: '3436+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Frontend Engineer',
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-2'
    ]
}
    ],
    rating: 4.3
},
{
    id: '136',
    name: 'louis dreyfus company',
    logo: '🏢',
    industry: 'Technology',
    description: 'louis dreyfus company is a key player in the Technology industry.',
    website: 'https://louisdreyfuscompany.com',
    size: '8505+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-2'
    ]
}
    ],
    rating: 4.3
},
{
    id: '137',
    name: 'micron semiconductor',
    logo: '🏢',
    industry: 'Technology',
    description: 'micron semiconductor is a key player in the Technology industry.',
    website: 'https://micronsemiconductor.com',
    size: '6486+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-1',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'SDE-1',
        'SDE-2',
        'Full Stack Developer'
    ]
}
    ],
    rating: 3.8
},
{
    id: '138',
    name: 'nagarro',
    logo: '🏢',
    industry: 'Technology',
    description: 'nagarro is a key player in the Technology industry.',
    website: 'https://nagarro.com',
    size: '5798+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'SDE-2',
        'Backend Engineer',
        'SDE-1',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'SDE-2',
        'Full Stack Developer',
        'Frontend Engineer'
    ]
}
    ],
    rating: 3.8
},
{
    id: '139',
    name: 'namekart',
    logo: '🏢',
    industry: 'Technology',
    description: 'namekart is a key player in the Technology industry.',
    website: 'https://namekart.com',
    size: '7706+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Full Stack Developer',
        'SDE-2',
        'Backend Engineer'
    ]
}
    ],
    rating: 3.9
},
{
    id: '140',
    name: 'netsmartz infotech',
    logo: '🏢',
    industry: 'E-commerce',
    description: 'netsmartz infotech is a key player in the E-commerce industry.',
    website: 'https://netsmartzinfotech.com',
    size: '3547+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Product Manager',
        'SDE-2',
        'SDE-1',
        'Data Scientist',
        'Business Analyst'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Data Scientist',
        'SDE-1',
        'Business Analyst',
        'SDE-2'
    ]
}
    ],
    rating: 4.4
},
{
    id: '141',
    name: 'passion gaming private limited',
    logo: '🏢',
    industry: 'Gaming',
    description: 'passion gaming private limited is a key player in the Gaming industry.',
    website: 'https://passiongamingprivatelimited.com',
    size: '9781+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Game Developer',
        'Animation Programmer',
        'Game Designer',
        '3D Artist'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Animation Programmer',
        'Game Developer',
        'Game Designer',
        '3D Artist'
    ]
}
    ],
    rating: 4.0
},
{
    id: '142',
    name: 'pathlock',
    logo: '🏢',
    industry: 'Technology',
    description: 'pathlock is a key player in the Technology industry.',
    website: 'https://pathlock.com',
    size: '2155+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'Backend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'SDE-1',
        'Full Stack Developer',
        'SDE-2'
    ]
}
    ],
    rating: 4.0
},
{
    id: '143',
    name: 'polycab india limited',
    logo: '🏢',
    industry: 'Technology',
    description: 'polycab india limited is a key player in the Technology industry.',
    website: 'https://polycabindialimited.com',
    size: '6183+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'SDE-2',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'SDE-2',
        'SDE-1',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.8
},
{
    id: '144',
    name: 'rdash',
    logo: '🏢',
    industry: 'Technology',
    description: 'rdash is a key player in the Technology industry.',
    website: 'https://rdash.com',
    size: '8484+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'SDE-2',
        'Full Stack Developer',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.0
},
{
    id: '145',
    name: 'samsung engineering',
    logo: '🏢',
    industry: 'Technology',
    description: 'samsung engineering is a key player in the Technology industry.',
    website: 'https://samsungengineering.com',
    size: '8507+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-2',
        'Frontend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'SDE-2',
        'SDE-1',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.7
},
{
    id: '146',
    name: 'samsung research',
    logo: '🏢',
    industry: 'Technology',
    description: 'samsung research is a key player in the Technology industry.',
    website: 'https://samsungresearch.com',
    size: '9098+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-2'
    ]
}
    ],
    rating: 4.5
},
{
    id: '147',
    name: 'signitude private limited',
    logo: '🏢',
    industry: 'Technology',
    description: 'signitude private limited is a key player in the Technology industry.',
    website: 'https://signitudeprivatelimited.com',
    size: '6391+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Full Stack Developer',
        'Backend Engineer',
        'SDE-2',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'SDE-1',
        'Backend Engineer',
        'SDE-2'
    ]
}
    ],
    rating: 4.1
},
{
    id: '148',
    name: 'skeps - streamsourced',
    logo: '🏢',
    industry: 'Technology',
    description: 'skeps - streamsourced is a key player in the Technology industry.',
    website: 'https://skeps-streamsourced.com',
    size: '7021+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'SDE-2',
        'Backend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-2',
        'SDE-1'
    ]
}
    ],
    rating: 4.3
},
{
    id: '149',
    name: 'slb',
    logo: '🏢',
    industry: 'Technology',
    description: 'slb is a key player in the Technology industry.',
    website: 'https://slb.com',
    size: '4271+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Frontend Engineer',
        'SDE-2',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.4
},
{
    id: '150',
    name: 'slo technologies',
    logo: '🏢',
    industry: 'Technology',
    description: 'slo technologies is a key player in the Technology industry.',
    website: 'https://slotechnologies.com',
    size: '7870+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-1',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-1',
        'Full Stack Developer',
        'SDE-2',
        'Backend Engineer'
    ]
}
    ],
    rating: 4.6
},
{
    id: '151',
    name: 'sparkl edventure',
    logo: '🏢',
    industry: 'FinTech',
    description: 'sparkl edventure is a key player in the FinTech industry.',
    website: 'https://sparkledventure.com',
    size: '4670+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Security Engineer',
        'Product Manager',
        'Risk Analyst',
        'SDE-1',
        'Data Analyst'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Risk Analyst',
        'Security Engineer',
        'SDE-1',
        'Data Analyst'
    ]
}
    ],
    rating: 4.0
},
{
    id: '152',
    name: 'steel strips wheels',
    logo: '🏢',
    industry: 'Technology',
    description: 'steel strips wheels is a key player in the Technology industry.',
    website: 'https://steelstripswheels.com',
    size: '6385+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'SDE-1',
        'SDE-2',
        'Frontend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'SDE-2'
    ]
}
    ],
    rating: 4.3
},
{
    id: '153',
    name: 'syrma sgs',
    logo: '🏢',
    industry: 'Technology',
    description: 'syrma sgs is a key player in the Technology industry.',
    website: 'https://syrmasgs.com',
    size: '1745+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-1',
        'Backend Engineer',
        'SDE-2',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'SDE-1',
        'Full Stack Developer',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.5
},
{
    id: '154',
    name: 'tata consultancy services',
    logo: '🏢',
    industry: 'Technology',
    description: 'tata consultancy services is a key player in the Technology industry.',
    website: 'https://tataconsultancyservices.com',
    size: '2579+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'SDE-1',
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-2'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.1
},
{
    id: '155',
    name: 'tata power',
    logo: '🏢',
    industry: 'Technology',
    description: 'tata power is a key player in the Technology industry.',
    website: 'https://tatapower.com',
    size: '6801+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer',
        'SDE-1'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'SDE-2'
    ]
}
    ],
    rating: 3.7
},
{
    id: '156',
    name: 'testingxperts',
    logo: '🏢',
    industry: 'Technology',
    description: 'testingxperts is a key player in the Technology industry.',
    website: 'https://testingxperts.com',
    size: '3277+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'Frontend Engineer',
        'SDE-1',
        'SDE-2',
        'Backend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'SDE-1',
        'Backend Engineer',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.7
},
{
    id: '157',
    name: 'tick2trade technologies',
    logo: '🏢',
    industry: 'Technology',
    description: 'tick2trade technologies is a key player in the Technology industry.',
    website: 'https://tick2tradetechnologies.com',
    size: '5977+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'SDE-2',
        'Backend Engineer',
        'Full Stack Developer',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'SDE-2',
        'SDE-1',
        'Backend Engineer',
        'Full Stack Developer'
    ]
}
    ],
    rating: 4.1
},
{
    id: '158',
    name: 'turing',
    logo: '🏢',
    industry: 'Technology',
    description: 'turing is a key player in the Technology industry.',
    website: 'https://turing.com',
    size: '213+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'SDE-1',
        'Backend Engineer',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'SDE-1',
        'Full Stack Developer',
        'Backend Engineer'
    ]
}
    ],
    rating: 3.8
},
{
    id: '159',
    name: 'uber',
    logo: '🏢',
    industry: 'Technology',
    description: 'uber is a key player in the Technology industry.',
    website: 'https://uber.com',
    size: '552+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Full Stack Developer',
        'SDE-2',
        'Frontend Engineer',
        'Backend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'SDE-1',
        'SDE-2',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.3
},
{
    id: '160',
    name: 'ukg (ultimate kronos group)',
    logo: '🏢',
    industry: 'Technology',
    description: 'ukg (ultimate kronos group) is a key player in the Technology industry.',
    website: 'https://ukg(ultimatekronosgroup).com',
    size: '2846+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-2',
        'Backend Engineer',
        'SDE-1',
        'Full Stack Developer',
        'Frontend Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Frontend Engineer',
        'Full Stack Developer',
        'SDE-1',
        'SDE-2'
    ]
}
    ],
    rating: 4.5
},
{
    id: '161',
    name: 'united airlines',
    logo: '🏢',
    industry: 'AI/ML',
    description: 'united airlines is a key player in the AI/ML industry.',
    website: 'https://unitedairlines.com',
    size: '5684+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'NLP Engineer',
        'Data Scientist',
        'Cloud Engineer',
        'ML Engineer',
        'AI Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'NLP Engineer',
        'Cloud Engineer',
        'AI Engineer',
        'ML Engineer'
    ]
}
    ],
    rating: 3.9
},
{
    id: '162',
    name: 'usha international',
    logo: '🏢',
    industry: 'Technology',
    description: 'usha international is a key player in the Technology industry.',
    website: 'https://ushainternational.com',
    size: '3071+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Backend Engineer',
        'Frontend Engineer',
        'SDE-1',
        'SDE-2',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'SDE-2',
        'Backend Engineer',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.2
},
{
    id: '163',
    name: 'vecmocon technologies',
    logo: '🏢',
    industry: 'Technology',
    description: 'vecmocon technologies is a key player in the Technology industry.',
    website: 'https://vecmocontechnologies.com',
    size: '6555+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'SDE-1',
        'Backend Engineer',
        'SDE-2',
        'Frontend Engineer',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Backend Engineer',
        'SDE-1',
        'Frontend Engineer',
        'Full Stack Developer'
    ]
}
    ],
    rating: 3.7
},
{
    id: '164',
    name: 'vikas group',
    logo: '🏢',
    industry: 'Technology',
    description: 'vikas group is a key player in the Technology industry.',
    website: 'https://vikasgroup.com',
    size: '9196+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Frontend Engineer',
        'Backend Engineer',
        'SDE-1',
        'SDE-2',
        'Full Stack Developer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Full Stack Developer',
        'SDE-1',
        'SDE-2',
        'Frontend Engineer'
    ]
}
    ],
    rating: 4.8
},
{
    id: '165',
    name: 'wns analytics',
    logo: '🏢',
    industry: 'AI/ML',
    description: 'wns analytics is a key player in the AI/ML industry.',
    website: 'https://wnsanalytics.com',
    size: '4449+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Data Scientist',
        'NLP Engineer',
        'ML Engineer',
        'Cloud Engineer',
        'AI Engineer'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'NLP Engineer',
        'Data Scientist',
        'Cloud Engineer',
        'AI Engineer'
    ]
}
    ],
    rating: 4.5
},
{
    id: '166',
    name: 'zs associates',
    logo: '🏢',
    industry: 'Consulting',
    description: 'zs associates is a key player in the Consulting industry.',
    website: 'https://zsassociates.com',
    size: '6404+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Product Manager',
        'Business Analyst',
        'Project Manager',
        'Data Analyst'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Business Analyst',
        'Product Manager',
        'Project Manager',
        'Data Analyst'
    ]
}
    ],
    rating: 4.7
},
{
    id: '167',
    name: 'zscaler',
    logo: '🏢',
    industry: 'Cybersecurity',
    description: 'zscaler is a key player in the Cybersecurity industry.',
    website: 'https://zscaler.com',
    size: '3635+',
    headquarters: 'Bangalore, India',
    locations: [
        {
    city: 'Bangalore',
    country: 'India',
    isHeadquarters: true,
    hiringFor: [
        'Ethical Hacker',
        'Security Engineer',
        'Penetration Tester',
        'Cybersecurity Analyst'
    ]
},
        {
    city: 'Hyderabad',
    country: 'India',
    isHeadquarters: false,
    hiringFor: [
        'Cybersecurity Analyst',
        'Ethical Hacker',
        'Penetration Tester',
        'Security Engineer'
    ]
}
    ],
    rating: 3.9
},
];