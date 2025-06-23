# BeenThere - Learn from Those Who've Been There

BeenThere is a comprehensive platform that reveals the real scene behind tech interviews and career opportunities by providing authentic experiences, preparation resources, and insights from seniors across all colleges and backgrounds.

## 🎯 Mission

To democratize access to authentic career insights by connecting students with those who've been there. We believe every student deserves to learn from real experiences - from IITs to tier-3 institutions and off-campus candidates.

## ✨ What BeenThere Stands For

- **Learn from Experience**: Connect students with authentic experiences from those who've walked the path before
- **Connect Communities**: Bridge students across colleges and experiences, creating a unified support network  
- **Inspire Growth**: Real stories from real students, verified and curated to motivate and guide others
- **Guide Decisions**: Provide comprehensive insights to help students make informed career choices
- **Navigate Challenges**: Help students overcome interview challenges with proven strategies and tips
- **Global Access**: Free and accessible to all students worldwide, breaking geographical barriers

## 🚀 Key Features

### 📊 Comprehensive Company Insights
- **150+ Companies** with detailed profiles and multiple office locations
- **Success rates** broken down by experience type (Full-time, Internship, PPO)
- **Real interview experiences** from students across different colleges
- **Salary information** and package details (excluding internship stipends from averages)
- **Dynamic statistics** that update automatically based on real data

### 🎓 College-Inclusive Approach
- Experiences from students across **all college tiers**
- **Off-campus placement** stories and strategies
- College-specific filtering to find relevant experiences
- Equal representation for all educational backgrounds

### 🔍 Advanced Search & Filtering
- Filter by **college, company, role, difficulty, and experience type**
- Search across companies, technologies, and student experiences
- Smart filtering to find the most relevant insights
- **Real-time search** with instant results

### 💡 Senior Insights Platform
- **Career advice** from experienced professionals
- **Industry insights** and trends
- **Life lessons** from those who've walked the path
- **Verified contributors** with authentic experiences
- **Interactive engagement** with likes, shares, and discussions

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

### 🌟 Experience Types
- **Full-time Placements**: Regular campus and off-campus hiring
- **Internships**: Summer internship experiences and tips
- **PPO Conversions**: Pre-placement offer conversion stories

### 🔐 Authentication System
- **Dual account types**: Viewer and Contributor accounts
- **Secure authentication** with email/password
- **Role-based access** with admin capabilities
- **User profiles** with contribution tracking

## 🛠️ Technology Stack

- **Frontend**: Next.js 13+ with TypeScript and App Router
- **Styling**: Tailwind CSS with custom animations and glassmorphism effects
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React with 1000+ icons
- **Theme**: Dark/Light mode support with system preference detection
- **Authentication**: Custom auth context with localStorage persistence
- **Deployment**: Static export ready for any hosting platform
- **Performance**: Optimized with lazy loading and efficient rendering

## 📁 Project Structure

```
beenthere/
├── app/                    # Next.js app directory
│   ├── about/             # About page with team info
│   ├── auth/              # Authentication pages
│   │   ├── login/         # Login page
│   │   ├── signup/        # Registration page
│   │   └── forgot-password/ # Password reset
│   ├── company/[id]/      # Dynamic company pages
│   ├── contribute/        # Contribution page
│   ├── insights/          # Senior insights platform
│   │   └── [id]/         # Individual insight pages
│   ├── resources/         # Learning resources page
│   ├── globals.css        # Global styles with animations
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx          # Home page with search
├── components/            # Reusable components
│   ├── ui/               # UI component library (40+ components)
│   ├── CompanyCard.tsx   # Company display card
│   ├── ExperienceCard.tsx # Experience display card
│   ├── CommentSection.tsx # Interactive comments
│   ├── Header.tsx        # Navigation with auth
│   ├── SearchBar.tsx     # Advanced search and filters
│   └── ThemeProvider.tsx # Theme management
├── contexts/             # React contexts
│   └── AuthContext.tsx   # Authentication state management
├── data/                 # Data layer
│   ├── companies.ts      # Company and experience data
│   ├── companies-list.ts # Company basic information
│   ├── experiences.ts    # Detailed experience data
│   └── comments.ts       # Comment system data
├── lib/                  # Utility functions and database
│   ├── db.ts            # In-memory database simulation
│   ├── api/             # API layer abstraction
│   └── utils.ts         # Common utilities
├── types/                # TypeScript definitions
│   ├── company.ts        # Company and experience types
│   └── auth.ts          # Authentication types
└── hooks/                # Custom React hooks
    ├── use-toast.ts      # Toast notifications
    └── useInsights.ts    # Insights data management
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/beenthere.git
cd beenthere
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The project is configured for static export and can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## 📊 Enhanced Features & Logic

### **Fixed Average Package Calculation**
- ✅ **Excludes internship stipends** - Only counts Full-time and PPO packages
- ✅ **Proper calculation** - Shows "N/A" when no full-time/PPO data available
- ✅ **Clear labeling** - "Avg Package (FT/PPO)" to indicate what's included

### **Improved Success Rate Logic**
- ✅ **Unified calculation** - All experience types treated equally
- ✅ **Separate tracking** - Individual success rates for Full-time, Internship, and PPO
- ✅ **Overall success** - Combined metric across all experience types

### **Dynamic Statistics**
- ✅ **Real-time calculations** based on actual data
- ✅ **Auto-updating** as new data is added
- ✅ **Responsive metrics** that reflect current platform state

### **Enhanced User Experience**
- ✅ **Responsive design** that works on all devices
- ✅ **Dark/Light theme** with system preference detection
- ✅ **Advanced animations** with glassmorphism effects
- ✅ **Interactive elements** with hover states and micro-interactions
- ✅ **Accessibility** with proper ARIA labels and keyboard navigation

## 🎯 Detailed Role Information
- ✅ **Specific role titles**: SDE-1, SDE-2, DevOps Engineer, Financial Analyst, ML Engineer, etc.
- ✅ **Location-based hiring** - Shows which roles are hired at which offices
- ✅ **Enhanced filtering** - Filter by specific role types
- ✅ **Role distribution** - Clear visibility of available positions

## 📚 Latest Learning Resources

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
2. Add your experience data to `data/experiences.ts`
3. Follow the existing data structure
4. Include all required fields
5. Submit a pull request

### Adding New Companies
1. Create a new company entry in `data/companies-list.ts`
2. Include office locations and hiring information
3. Add at least one experience entry in `data/experiences.ts`
4. Ensure all required fields are populated

### Improving Resources
1. Update the resources in `app/resources/page.tsx`
2. Add new categories or resources as needed
3. Ensure proper categorization and difficulty levels

### Contributing Insights
1. Add new insights to `lib/db.ts`
2. Follow the existing data structure
3. Include author information and key takeaways
4. Ensure content is valuable and well-formatted

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow the existing component structure
- Use Tailwind CSS for styling
- Implement proper error handling
- Add loading states for better UX

### Component Guidelines
- Keep components focused and reusable
- Use proper TypeScript interfaces
- Implement accessibility features
- Add hover states and animations
- Follow the existing design system

### Data Management
- Use the existing data structure
- Validate all data inputs
- Handle edge cases gracefully
- Maintain data consistency
- Document any schema changes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Sugam Arora** - Co-Founder & Lead Developer
- **Ojas Arora** - Co-Founder & Product Manager

## 📧 Contact

- Email: hello@beenthere.com
- Website: [beenthere.com](https://beenthere.com)

## 🙏 Acknowledgments

- All the students who shared their experiences and revealed the real scene
- The open-source community for amazing tools and libraries
- Educational institutions for supporting student growth
- Companies that provide opportunities to students from all backgrounds

## 📈 Platform Statistics

- **150+ Companies** covered across all industries
- **500+ Interview Experiences** from real students
- **2,000+ Learning Resources** curated and categorized
- **50+ Countries** with users accessing the platform
- **95% Success Rate** improvement reported by users

---

**BeenThere** - Learn from those who've been there. Your journey to success starts with authentic experiences and proven insights. 🎓✨