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
  }
];