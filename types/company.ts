export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  website: string;
  size: string;
  location: string;
  rating: number;
  experiences: Experience[];
}

export interface Experience {
  id: string;
  studentName: string;
  batch: string;
  role: string;
  package: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  process: string[];
  requirements: Requirement[];
  topics: Topic[];
  tips: string[];
  timeline: string;
  selected: boolean;
  date: string;
}

export interface Requirement {
  category: string;
  details: string[];
}

export interface Topic {
  subject: string;
  importance: 'High' | 'Medium' | 'Low';
  resources: string[];
}