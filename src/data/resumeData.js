export const resumeData = {
  name: "Gatri Reddy",
  title: "AI/ML Specialist",
  tagline: "Crafting intelligent solutions through AI and machine learning",
  email: "gatrireddy@gmail.com",
  collegeEmail: "se23uari109@mahindrauniversity.edu.in",
  phone: "+91 78932 50885",
  profileImage: "/profile.jpg",
  github: "https://github.com/gatrireddy",
  linkedin: "https://linkedin.com/in/gatrireddy",
  
  about: `I'm a B.Tech student in Artificial Intelligence at Mahindra University, passionate about leveraging cutting-edge AI technologies to solve real-world problems. My expertise spans machine learning, natural language processing, and generative AI applications, with a focus on building intelligent systems that enhance human decision-making. I combine strong fundamentals in AI and ML with practical project experience, continuously exploring how advanced models can drive innovation and create meaningful impact.`,
  
  researchInterests: [
    "Generative AI & Large Language Models",
    "Natural Language Processing",
    "Machine Learning & Deep Learning",
    "AI-Driven Applications",
    "Data Science & Feature Engineering"
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
      role: "AI Research & Development",
      company: "Personal Projects & Learning",
      period: "Jul 2024 – Present",
      highlights: [
        "Developed multiple end-to-end AI/ML projects including NLP models, predictive analytics, and generative AI applications",
        "Focused on fine-tuning LLMs, building production-ready ML pipelines, and optimizing model performance with limited compute resources"
      ]
    }
  ],

  projects: [
    {
      name: "RESCORE — AI-Powered Resume Analyzer",
      description: "Built and significantly extended an open-source resume analyzer with AI-driven resume scoring and feedback generation. Integrated OpenAI API for intelligent keyword analysis and ATS optimization recommendations. Fixed 17 critical bugs across the build, React components, and CSS with a complete design system overhaul.",
      technologies: ["React", "Node.js", "OpenAI API", "Generative AI"],
      github: "https://github.com/gatrireddy/ai-resume-analyser",
      date: "Feb 2026"
    },
    {
      name: "Legal & Medical Document Summarization",
      description: "Fine-tuned T5 transformer with LoRA (rank=8, α=32) for cross-domain abstractive summarization on BillSum and PubMed datasets. Achieved efficient performance on limited GPU resources with ROUGE metric evaluation against extractive baselines.",
      technologies: ["Python", "T5", "LoRA", "HuggingFace", "NLP"],
      github: "https://github.com/gatrireddy/Legal-Healthcare-Document-Summarization",
      date: "Oct 2025"
    },
    {
      name: "HR Attrition & Salary Prediction — SalaryInsight",
      description: "Engineered a two-stage ML pipeline combining classification (attrition probability) and regression (salary forecasting) using XGBoost. Computed expected financial loss per employee and generated comprehensive feature importance visualizations.",
      technologies: ["Python", "XGBoost", "Scikit-learn", "ML Engineering"],
      github: "https://github.com/gatrireddy/SalaryInsight",
      date: "May 2025"
    },
    {
      name: "F1 Race Result Prediction Pipeline",
      description: "Engineered comprehensive race, driver, and circuit-level features from FastF1 API across 2018-2025 seasons. Trained ensemble models (XGBoost, Random Forest) with Monte Carlo simulations for probabilistic race outcome forecasting.",
      technologies: ["Python", "XGBoost", "FastF1", "Monte Carlo Simulation"],
      github: "https://github.com/gatrireddy/F1_Prediction",
      date: "May 2025"
    },
    {
      name: "Dishly — Recipe Search Application",
      description: "Full-stack recipe search platform leveraging the Spoonacular API with intelligent dietary filtering, persistent favorites management, and React Router navigation for a seamless user experience.",
      technologies: ["React.js", "REST API", "Axios", "State Management"],
      github: "https://github.com/gatrireddy/Dishly",
      date: "Nov 2025"
    }
  ],

  skills: {
    languages: ["Python", "JavaScript", "Java", "SQL", "HTML", "CSS"],
    aiml: ["Generative AI", "LLMs", "NLP", "Fine-tuning (LoRA)", "XGBoost", "Scikit-learn", "HuggingFace Transformers", "Feature Engineering", "Deep Learning"],
    frameworks: ["React.js", "Pandas", "NumPy", "Matplotlib", "PyTorch", "TensorFlow"],
    tools: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "Hugging Face Hub"],
    concepts: ["Machine Learning", "Deep Learning", "NLP", "Transformers", "Data Science", "Model Optimization"]
  },

  achievements: [
    "AI Student of the Year Participant — AI Hub & Google Gemini Hackathon",
    "MU Capture The Flag — Top 10 (5th Bridge, 2025)",
    "Google ML Crash Course Completed",
    "Multiple AI/ML Projects in Production",
    "Open Source Contributor",
    "Passionate Learner | Sports: Football, Kho-Kho"
  ]
};
