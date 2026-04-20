export const resumeData = {
  name: "Gatri Reddy",
  title: "AI/ML & Full-Stack Developer",
  tagline: "Building intelligent systems and modern web experiences",
  email: "gatrireddy@gmail.com",
  phone: "+91 78932 50885",
  github: "https://github.com/gatrireddy",
  linkedin: "https://linkedin.com/in/gatrireddy",
  
  about: `I'm a B.Tech student in Artificial Intelligence at Mahindra University with hands-on experience in machine learning, NLP, and full-stack development. I have a passion for building intelligent solutions and creating seamless user experiences. Currently, I'm exploring blockchain and Web3 technologies while continuously learning and contributing to open-source projects.`,
  
  researchInterests: [
    "Natural Language Processing & Large Language Models",
    "Machine Learning & Deep Learning",
    "Web3 & Blockchain Technologies",
    "Full-Stack Web Development",
    "Data Science & Analytics"
  ],

  education: [
    {
      school: "Mahindra University",
      location: "Hyderabad, IN",
      degree: "B.Tech in Artificial Intelligence",
      details: "CGPA: 7.04 | Aug 2023 – Jun 2027"
    },
    {
      school: "Page College",
      location: "Hyderabad, IN",
      degree: "Intermediate (TSBIE)",
      details: "92% | Jun 2021 – May 2023"
    }
  ],

  experience: [
    {
      role: "Marketing & Social Media Head",
      company: "Blockchain Club, Mahindra University",
      period: "Jan 2025 – Present",
      highlights: [
        "Coordinating outreach and digital strategy for blockchain-focused initiatives and workshops across MU",
        "Participated in technical workshops by Aleph Zero, Hyderabad DAO, and Pyor, building hands-on Web3 exposure"
      ]
    }
  ],

  projects: [
    {
      name: "RESCORE — AI-Powered Resume Analyzer",
      description: "Built and significantly extended an open-source resume analyzer, fixing 17 bugs across build, React component, and CSS layers with a full design system overhaul. Integrated AI-driven resume scoring, feedback generation, and keyword analysis to help users optimise resumes for ATS systems.",
      technologies: ["React", "Node.js", "OpenAI API", "CSS"],
      github: "https://github.com/gatrireddy/rescore",
      date: "Feb 2026"
    },
    {
      name: "Dishly — Recipe Search Web Application",
      description: "Built a full-stack recipe search app using React hooks, Spoonacular API via Axios, dietary filters, localStorage favourites, and React Router navigation. Features smooth transitions and responsive design.",
      technologies: ["React.js", "Axios", "Material-UI", "REST API"],
      github: "https://github.com/gatrireddy/dishly",
      date: "Nov 2025"
    },
    {
      name: "Legal & Medical Document Summarization",
      description: "Fine-tuned T5 with LoRA (rank=8, α=32) on BillSum and PubMed datasets for cross-domain abstractive summarization with limited GPU resources. Evaluated outputs using ROUGE metrics against Lead-3 and TextRank extractive baselines.",
      technologies: ["Python", "T5", "LoRA", "HuggingFace"],
      github: "https://github.com/gatrireddy/doc-summarizer",
      date: "Oct 2025"
    },
    {
      name: "HR Attrition & Salary Prediction — SalaryInsight",
      description: "Built a two-stage ML pipeline combining classification (attrition probability) and regression (salary forecasting) on the IBM HR Analytics dataset. Computed expected financial loss per employee using P(Attrition) x Predicted Salary.",
      technologies: ["Python", "Scikit-learn", "XGBoost"],
      github: "https://github.com/gatrireddy/salaryinsight",
      date: "May 2025"
    },
    {
      name: "F1 Race Result Prediction Pipeline",
      description: "Engineered race, driver, and circuit-level features (DNFs, pit stops, weather, penalties) from FastF1 API across 2018-2025 seasons. Trained XGBoost and Random Forest models with Monte Carlo simulations.",
      technologies: ["Python", "XGBoost", "FastF1", "Monte Carlo"],
      github: "https://github.com/gatrireddy/f1-prediction",
      date: "May 2025"
    }
  ],

  skills: {
    languages: ["Python", "JavaScript", "Java", "C", "C#", "SQL", "HTML", "CSS"],
    aiml: ["NLP", "LLMs", "Fine-tuning (LoRA)", "XGBoost", "Random Forest", "Scikit-learn", "HuggingFace Transformers", "Feature Engineering"],
    frameworks: ["React.js", "Node.js", "Axios", "Material-UI", "Pandas", "NumPy", "Matplotlib"],
    tools: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "REST APIs"],
    concepts: ["Machine Learning", "Deep Learning", "NLP", "OOP", "DBMS", "DSA"]
  },

  achievements: [
    "Winner — Web3 Buidlathon",
    "MU Capture The Flag — Top 10 (5th Bridge, 2025)",
    "AI Student of the Year Participant — AI Hub & Google Gemini Hackathon",
    "Shell Shock 2025 — Cybersecurity Hackathon Participant",
    "Google ML Crash Course",
    "NGO Volunteer | Sports: Football, Kho-Kho"
  ]
};
