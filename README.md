# KyaSeen - Kya Scene Hai? Your Career Insights Hub

KyaSeen is a comprehensive platform that reveals the real scene behind tech interviews and career opportunities by providing authentic experiences, preparation resources, and insights from seniors across all colleges and backgrounds.

## 🎯 Mission

To reveal the real scene behind tech interviews and democratize access to authentic career insights. We believe every student deserves to know "kya scene hai" in their target companies - from IITs to tier-3 institutions and off-campus candidates.

## ✨ What KyaSeen Stands For

- **Reveal the Scene**: Show students the real picture behind company interviews and hiring processes
- **Connect Communities**: Bridge students across colleges and experiences, creating a unified support network
- **Inspire Growth**: Real stories from real students to motivate and guide others
- **Guide Decisions**: Provide comprehensive insights to help students make informed career choices
- **Navigate Challenges**: Help students overcome interview challenges with proven strategies
- **Global Access**: Free and accessible to all students worldwide, breaking geographical barriers

## 🚀 Features

### 📊 Comprehensive Company Insights
- Detailed company profiles with multiple office locations
- Success rates broken down by experience type (Full-time, Internship, PPO)
- Real interview experiences from students across different colleges
- Salary information and package details (excluding internship stipends from averages)

### 🎓 College-Inclusive Approach
- Experiences from students across all college tiers
- Off-campus placement stories and strategies
- College-specific filtering to find relevant experiences
- Equal representation for all educational backgrounds

### 🔍 Advanced Filtering & Search
- Filter by college, company, role, difficulty, and experience type
- Search across companies, technologies, and student experiences
- Smart filtering to find the most relevant insights

### 📚 Comprehensive Learning Resources
- **12+ Major Categories** covering all tech domains:
  - **Coding & DSA** - TakeUForward (Striver), LeetCode, GeeksforGeeks, InterviewBit
  - **System Design** - Scalability, architecture, distributed systems
  - **Frontend Development** - React, Vue, Next.js, Tailwind CSS, Figma
  - **Backend Development** - Node.js, Django, Spring Boot, FastAPI, GraphQL
  - **DevOps & Cloud** - Docker, Kubernetes, AWS, Terraform, Jenkins
  - **AI & Machine Learning** - Andrew Ng, Fast.ai, Hugging Face, OpenAI, LangChain
  - **Data Science & Analytics** - Pandas, Tableau, Power BI, Apache Spark
  - **Data Analyst Track** - Specialized resources for aspiring data analysts
  - **Cybersecurity** - OWASP, TryHackMe, HackTheBox, penetration testing
  - **Mobile Development** - React Native, Flutter, Swift, Android
  - **Blockchain & Web3** - Ethereum, Solidity, smart contracts
  - **Learning Platforms** - Coursera, edX, Udemy, Pluralsight

### 💡 Experience Types
- **Full-time Placements**: Regular campus and off-campus hiring
- **Internships**: Summer internship experiences and tips
- **PPO Conversions**: Pre-placement offer conversion stories

### 🌟 Key Highlights
- Subjective difficulty assessments with proper disclaimers
- Detailed interview processes and preparation strategies
- Success tips from students who got selected
- Resource recommendations for each topic
- Timeline information for preparation planning
- Dynamic statistics that update automatically

## 🛠️ Technology Stack

- **Frontend**: Next.js 13 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Theme**: Dark/Light mode support
- **Deployment**: Static export ready

## 📁 Project Structure

```
kyaseen/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── company/[id]/      # Dynamic company pages
│   ├── contribute/        # Contribution page
│   ├── resources/         # Learning resources page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── ui/               # UI component library
│   ├── CompanyCard.tsx   # Company display card
│   ├── ExperienceCard.tsx # Experience display card
│   ├── Header.tsx        # Navigation header
│   ├── SearchBar.tsx     # Search and filter component
│   └── ThemeProvider.tsx # Theme management
├── data/                 # Data layer
│   └── companies.ts      # Company and experience data
├── types/                # TypeScript type definitions
│   └── company.ts        # Company and experience types
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
└── hooks/                # Custom React hooks
    └── use-toast.ts      # Toast notification hook
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sugamarora/kyaseen.git
cd kyaseen
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

The project is configured for static export and can be deployed to any static hosting service.

## 📊 Enhanced Logic & Features

### **Fixed Average Package Calculation**
- ✅ **Excludes internship stipends** - Only counts Full-time and PPO packages
- ✅ **Proper calculation** - Shows "N/A" when no full-time/PPO data available
- ✅ **Clear labeling** - "Avg Package (FT/PPO)" to indicate what's included

### **Improved Success Rate Logic**
- ✅ **Unified calculation** - Internship rejections and placement rejections are treated equally
- ✅ **Separate tracking** - Individual success rates for Full-time, Internship, and PPO
- ✅ **Overall success** - Combined metric across all experience types

### **Dynamic Statistics**
- ✅ **Real-time calculations** based on actual data
- ✅ **Auto-updating** as new data is added
- ✅ **Responsive metrics** that reflect current platform state

## 🎯 **Detailed Role Information**
- ✅ **Specific role titles**: SDE-1, SDE-2, DevOps Engineer, Financial Analyst, ML Engineer, etc.
- ✅ **Location-based hiring** - Shows which roles are hired at which offices
- ✅ **Enhanced filtering** - Filter by specific role types
- ✅ **Role distribution** - Clear visibility of available positions

## 📚 **Latest Learning Resources**

### **Featured Platforms:**
- ✅ **TakeUForward (Striver)** - Complete DSA course with A2Z DSA sheet
- ✅ **GeeksforGeeks** - Comprehensive tutorials and practice
- ✅ **InterviewBit** - Structured interview preparation
- ✅ **OpenAI Documentation** - GPT and AI APIs
- ✅ **LangChain** - LLM application framework
- ✅ **Hugging Face** - Transformer models and NLP

### **Specialized Tracks:**
- ✅ **Data Analyst Track** - Google Data Analytics Certificate, Excel, SQL, Tableau
- ✅ **AI Engineer Track** - Latest AI/ML frameworks and tools
- ✅ **Modern Tech Stack** - Next.js 13+, TypeScript, Docker, Kubernetes

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Adding New Experiences
1. Fork the repository
2. Add your experience data to `data/companies.ts`
3. Follow the existing data structure
4. Include all required fields
5. Submit a pull request

### Adding New Companies
1. Create a new company entry in `data/companies.ts`
2. Include office locations and hiring information
3. Add at least one experience entry
4. Ensure all required fields are populated

### Improving Resources
1. Update the resources in `app/resources/page.tsx`
2. Add new categories or resources as needed
3. Ensure proper categorization and difficulty levels

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Sugam Arora** - Co-Founder & Lead Developer
- **Ojas Arora** - Co-Founder & Product Manager

## 📧 Contact

- Email: hello@kyaseen.com
- Website: [kyaseen.com](https://kyaseen.com)

## 🙏 Acknowledgments

- All the students who shared their experiences and revealed the real scene
- The open-source community for amazing tools and libraries
- Educational institutions for supporting student growth
- Companies that provide opportunities to students from all backgrounds

---

**KyaSeen** - Revealing the real scene behind tech interviews, one experience at a time. Kya scene hai in your dream company? 👁️