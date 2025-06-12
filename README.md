# BeigNa - Bridge • Inspire • Guide • Navigate • Achieve

BeigNa is a comprehensive platform that bridges the gap between students and career opportunities by providing authentic interview experiences, preparation resources, and insights from seniors across all colleges and backgrounds.

## 🎯 Mission

To democratize access to high-quality interview preparation resources and create a platform where students from all colleges - from IITs to tier-3 institutions and off-campus candidates - can learn from authentic experiences of their seniors.

## ✨ What BeigNa Stands For

- **Bridge**: Connect students across colleges and experiences, creating a unified support network
- **Inspire**: Real stories from real students to motivate and guide others
- **Guide**: Provide comprehensive insights to help students make informed career choices
- **Navigate**: Help students overcome interview challenges with proven strategies
- **Achieve**: Empower every student to reach their career goals, regardless of background

## 🚀 Features

### 📊 Comprehensive Company Insights
- Detailed company profiles with multiple office locations
- Success rates broken down by experience type (Full-time, Internship, PPO)
- Real interview experiences from students across different colleges
- Salary information and package details

### 🎓 College-Inclusive Approach
- Experiences from students across all college tiers
- Off-campus placement stories and strategies
- College-specific filtering to find relevant experiences
- Equal representation for all educational backgrounds

### 🔍 Advanced Filtering & Search
- Filter by college, company, role, difficulty, and experience type
- Search across companies, technologies, and student experiences
- Smart filtering to find the most relevant insights

### 📚 Learning Resources
- Curated resources across multiple domains:
  - Data Structures & Algorithms
  - System Design
  - Frontend & Backend Development
  - AI/ML and Data Science
  - DevOps & Cloud Computing
  - Cybersecurity
  - Mobile Development
  - Blockchain & Web3

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

## 🛠️ Technology Stack

- **Frontend**: Next.js 13 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Theme**: Dark/Light mode support
- **Deployment**: Static export ready

## 📁 Project Structure

```
beigna/
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
git clone https://github.com/sugamarora/beigna.git
cd beigna
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

## 📊 Data Structure

### Company Information
- Basic details (name, logo, industry, description)
- Multiple office locations with hiring information
- Rating and size information
- Website and headquarters details

### Experience Data
- Student information (name, batch, college)
- Role and package details
- Experience type (Full-time/Internship/PPO)
- Interview process breakdown
- Requirements and expectations
- Study topics with resources
- Pro tips and advice
- Timeline and location information
- Off-campus vs on-campus distinction

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

### Code Contributions
1. Follow the existing code style
2. Add TypeScript types for new features
3. Test your changes thoroughly
4. Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Sugam Arora** - Co-Founder & Lead Developer
- **Ojas Arora** - Co-Founder & Product Manager

## 📧 Contact

- Email: hello@beigna.com
- Website: [beigna.com](https://beigna.com)

## 🙏 Acknowledgments

- All the students who shared their experiences
- The open-source community for amazing tools and libraries
- Educational institutions for supporting student growth
- Companies that provide opportunities to students from all backgrounds

---

**BeigNa** - Empowering every student to achieve their career dreams, one experience at a time.