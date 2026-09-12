import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Fiza Anwar Khetani",
  location: "Karachi, Pakistan",
  phone: "+92343 8335551",
  email: "fizaanwar02@gmail.com",
  github: "https://github.com/FizaAnwar",
  // The resume displays a shortened LinkedIn URL. Replace this with the exact profile URL.
  linkedin: "https://www.linkedin.com/in/fiza-anwar--/",
};

const experiences = [
  {
    company: "Bytewise — Data Science Intern",
    date: "Jun 2024 — Sept 2024",
    description:
      "Built an end-to-end regression pipeline to predict California house prices, covering data preprocessing, EDA and model development. Implemented and compared ANN and 1D CNN architectures, evaluating performance using standard regression metrics such as MAE, RMSE and R².",
    tags: ["Regression", "ANN", "CNN", "Scikit-Learn", "EDA"],
  },
  {
    company: "PIA — Data Science Intern",
    date: "Sept 2025 — Oct 2025",
    description:
      "Scraped and cleaned operational datasets, then conducted extensive exploratory data analysis (EDA) to surface trends in flight and passenger data. Designed and deployed interactive Power BI dashboards, giving stakeholders self-service visibility into key operational metrics.",
    tags: ["Python", "EDA", "Power BI", "Data Cleaning", "Analytics"],
  },
  
   {
    company: "10 Pearls — Data Science Intern",
    date: "Oct 2025 — Dec 2025",
    description:
    "Built and deployed a Python-based real-time Air Quality Index (AQI) predictive modeling pipeline for time-series forecasting. Automated the ML lifecycle with GitHub Actions CI/CD workflows, scheduled retraining and continuous model updates. Managed feature engineering and model versioning using Hopsworks Feature Store and Model Registry.",
    tags: ["Python", "AQI", "Time Series", "Hopsworks", "GitHub Actions"],
  },
  {
    company: "JSH (Johar Software House)— Data Science Intern",
    date: "Aug 2026 — Oct 2026",
    description:
      "Understands company ERP modules and Studied about SAC(SAP Analytics Cloud) and its integration. Developed Financial reporting of sales data using Power BI and Looker Studio and learn about AI reporting",       
     tags: ["Python", "AI", "SAC", "SAP-Datasphere", "Looker Studio", "Power BI", "Data Cleaning", "Analytics"],
  },
];

const projects = [
  {
    title: "Smart AQI Predictor",
    stack: "Python • Random Forest • Ridge • LSTM • SHAP",
    description:
      "An intelligent air-quality prediction system using feature engineering, machine learning and time-series forecasting with explainable AI insights.",
    icon: BarChart3,
    image: "/images/AQI.jpg",
    featured: true,
    github: "https://github.com/FizaAnwar",
    demo: "#",
  },

  {
    title: "RealEstateML",
    stack: "Python • Regression • ANN • CNN • Scikit-Learn",
    description:
      "A machine learning system for predicting California housing prices using demographic, geographic and property-related features.",
    icon: Database,
    image: "/images/real-estate.jpg",
    featured: false,
    github: "https://github.com/FizaAnwar",
    demo: "#",
  },

  {
    title: "Explainable ML Web App",
    stack: "Python • SHAP • Streamlit • Machine Learning",
    description:
      "An interactive web application combining machine-learning predictions with SHAP explanations to make model decisions easier to understand.",
    icon: Sparkles,
    image: "/images/explainable-ml.jpg",
    featured: false,
    github: "https://github.com/FizaAnwar",
    demo: "#",
  },

  {
    title: "Multimodal AI Intelligence System",
    stack: "Gemini API • NLP • Computer Vision • Python",
    description:
      "A multimodal AI system designed to process text, images and structured data to provide context-aware insights and intelligent decision support.",
    icon: Brain,
    image: "/images/ai-intelligence.jpg",
    featured: false,
    github: "https://github.com/FizaAnwar",
    demo: "#",
  },

  {
    title: "Customer Churn Prediction",
    stack: "Python • Pandas • Streamlit",
    description:
      "A customer analytics project using K-Means clustering to identify groups based on purchasing behavior and spending patterns.",
    icon: BarChart3,
    image: "/images/churn.jpg",
    featured: false,
    github: "https://github.com/FizaAnwar",
    demo: "#",
  },

  {
    title: "Multimodal Stroke Severity Detection",
    stack: "ViT • Wav2Vec2 • LSTM • Explainable AI",
    description:
      "A multimodal clinical decision-support prototype combining brain-scan analysis and voice-based severity estimation into a unified report.",
    icon: Brain,
    image: "/images/multimodal-ai.jpg",
    featured: true,
    github: "https://github.com/FizaAnwar",
    demo: "#",
  },
]


const skills = {
  "Languages": ["Python", "SQL", "MATLAB"],
  "Data Analysis / ML": [
    "Scikit-Learn",
    "XGBoost",
    "TensorFlow / Keras",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
  ],
  "MLOps / Tools": [
    "GitHub Actions",
    "Colab",
    "Jupyter",
    "Git",
    "Hopsworks",
    "Streamlit",
    "MySQL",
    "Power BI",
    "Tableau",
    "Plotly",
    "Excel",
  ],
  "Concepts": [
    "EDA",
    "Statistical Modeling",
    "Feature Engineering",
    "Model Evaluation",
    "Data Cleaning",
    "Data Visualization",
    "Data Warehousing",
    "Time Series Analysis",
    "Predictive Analytics",
  ],
};

const certifications = [
  "Python Smart Pro Course — Aptech Education",
  "Introduction to Python — DataCamp",
  "Introduction to SQL — DataCamp",
  "CS50 — Harvard University",
  "Prompt Engineering — Andrew Ng",
  "Treasurer — ACM-DSU",
  "MLSC Volunteer",
];

const education = [
  {
    institution: "DHA Suffa University",
    period: "2022 — 2026",
    degree: "BS Data Science",
  },
  {
    institution: "Meritorious Science College",
    period: "2020 — 2022",
    degree: "Intermediate in Pre-Engineering",
  },
  {
    institution: "Dawood Public School",
    period: "2009 — 2020",
    degree: "O Levels",
  },
];

function App() {
  const [dark, setDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <header className="nav">
        <div className="container nav-inner">
          <button className="brand" onClick={() => goTo("home")}>
            FA<span>.</span>
          </button>

          <nav className={`nav-links ${mobileOpen ? "open" : ""}`}>
            {["home", "About", "Experience", "Skills", "Projects", "Education", "Contact"].map((id) => (
              <button
                key={id}
                className={activeSection === id ? "active" : ""}
                onClick={() => goTo(id)}
              >
                {id === "home" ? "Home" : id[0].toUpperCase() + id.slice(1)}
              </button>
            ))}
            <a className="nav-cv" href="/Fiza_Anwar_Resume.pdf" target="_blank" rel="noreferrer">
              CV <ExternalLink size={14} />
            </a>
          </nav>

          <div className="nav-actions">
            <button
              className="icon-btn"
              aria-label="Toggle theme"
              onClick={() => setDark((v) => !v)}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="menu-btn"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse" /> DATA SCIENCE • AI • MACHINE LEARNING</div>

              <h1>
                Hi, <br />
                <span> I'm Fiza Anwar</span>
              </h1>

              <h2>Data Science Graduate <br />
                <h4>Focused about data science & 
                building practical AI & ML solutions.</h4>
              </h2>

              <p className="hero-summary">
                Working on machine learning, statistical analysis, data visualization,
                predictive modeling and real-world ML workflows. Skilled in Python, SQL,
                Power BI and Tableau, with hands-on experience taking models from data
                preparation to deployment.
              </p>

              <div className="hero-cta">
                <button className="btn primary" onClick={() => goTo("projects")}>
                  View Projects <ArrowUpRight size={17} />
                </button>
                <a className="btn secondary" href="/Fiza_Anwar_Resume.pdf" target="_blank" rel="noreferrer">
                  <Download size={17} /> Download Resume
                </a>
              </div>

              <div className="quick-links">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={17} /> LinkedIn
                </a>
                <a href={`mailto:${profile.email}`}>
                  <Mail size={17} /> Email
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="orbit orbit-a" />
              <div className="orbit orbit-b" />

              <div className="profile-card">
                <div className="profile-avatar">FA</div>
                <div className="profile-card-copy">
                  <span>FIZA ANWAR</span>
                  <strong>Data Science</strong>
                  <small>AI / ML • Analytics</small>
                </div>
              </div>

              <div className="floating-stat stat-a">
                <span>Focus</span>
                <strong>AI / ML</strong>
              </div>

              <div className="floating-stat stat-b">
                <span>Experience</span>
                <strong>Data Science</strong>
              </div>

              <div className="data-dots">
                {Array.from({ length: 28 }).map((_, i) => <i key={i} />)}
              </div>
            </div>
          </div>

          <button className="scroll-hint" onClick={() => goTo("about")}>
            <span>Scroll to explore</span>
            <ChevronDown size={18} />
          </button>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionTitle eyebrow="PROFILE" title="About Me" />

            <div className="about-grid">
              <div className="about-copy">
                <p className="lead">
                  I'm a Data Science graduate with practical experience in machine learning,
                  statistical analysis, data visualization, data engineering and MLOps workflows.
                </p>
                <p>
                  I have worked on real-world data science tasks through  my internships at
                  10 Pearls, PIA, Bytewise and JSH, covering all aspects of predictive modeling, operational
                  analytics, dashboards, feature engineering, data mining, data warehousing, model evaluation and deployment.
                </p>
                <p>
                  My interests include applying reliable ML models to create ML systems, explainable AI,
                  multimodal intelligence, data analysis, datascraping  and turning complex datasets into useful,
                  decision-ready insights.
                </p>

                <div className="contact-mini">
                  <div><MapPin size={17} /> {profile.location}</div>
                  <div><Phone size={17} /> {profile.phone}</div>
                  <div><Mail size={17} /> {profile.email}</div>
                </div>
              </div>

                    <div className="profile-right">

                {/* Profile Image */}
                <div className="profile-image-container">
                  <img
                    src="/images/fiza.jpg"
                    alt="Fiza Anwar"
                    className="profile-pic"
                  />
                </div>

                {/* Education */}
                <div className="education-section">

                  <div className="education-icon">
                    <GraduationCap size={28} />
                  </div>

                  <div className="education-content">
                    <span>EDUCATION</span>
                    <h3>BS Data Science</h3>
                    <p>DHA Suffa University · 2022—2026</p>
                  </div>

                </div>

              </div>

            </div>
          </div>
      
        </section>

        <section id="experience" className="section section-alt">
          <div className="container">
            <SectionTitle eyebrow="CAREER" title="Work experience" />

            <div className="timeline">
              {experiences.map((item, index) => (
                <article className="timeline-item" key={item.company}>
                  <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
                  <div className="timeline-card">
                    <div className="timeline-top">
                      <div>
                        <span className="date">{item.date}</span>
                        <h3>{item.company}</h3>
                      </div>
                      <BriefcaseBusiness size={22} />
                    </div>
                    <p>{item.description}</p>
                    <div className="tag-row">
                      {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <SectionTitle eyebrow="TOOLKIT" title="Technical skills" />

            <div className="skills-layout">
              {Object.entries(skills).map(([category, items]) => (
                <div className="skill-card" key={category}>
                  <div className="skill-card-title">
                    <Code2 size={19} />
                    <h3>{category}</h3>
                  </div>
                  <div className="skill-pills">
                    {items.map((skill) => (
                      <span key={skill}><Check size={13} />{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <SectionTitle eyebrow="SELECTED WORK" title="Technical projects" />

            <div className="projects-grid">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.title}>
                    <div className="project-image">
                    <img
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                      />
                    </div>
                    <div className="project-number">0{index + 1}</div>
                    <div className="project-icon"><Icon size={22} /></div>
                    <span className="project-stack">{project.stack}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <button className="project-more" onClick={() => goTo("contact")}>
                      Discuss project <ArrowUpRight size={16} />
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section featured">
          <div className="container featured-box">
            <div>
              <span className="eyebrow">FEATURED FYP</span>
              <h2>Multimodal Stroke <span>Severity Detection</span></h2>
              <p>
                A prototype combining brain-scan analysis and voice-based severity estimation
                into a single report using ViT and LSTM-based approaches.
              </p>
            </div>
            <div className="feature-pipeline">
              <div><Brain size={22} /><strong>Brain Scan</strong><small>ViT</small></div>
              <ArrowUpRight className="pipeline-arrow" />
              <div><Sparkles size={22} /><strong>Voice</strong><small>LSTM</small></div>
              <ArrowUpRight className="pipeline-arrow" />
              <div><Award size={22} /><strong>Report</strong><small>Multimodal AI</small></div>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container two-column-section">
            <div>
              <SectionTitle eyebrow="ACADEMIC BACKGROUND" title="Education" />
              <div className="education-list">
                {education.map((item) => (
                  <article className="education-item" key={item.institution}>
                    <div className="education-icon"><GraduationCap size={20} /></div>
                    <div>
                      <span>{item.period}</span>
                      <h3>{item.institution}</h3>
                      <p>{item.degree}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle eyebrow="LEARNING" title="Certifications & activities" />
              <div className="cert-list">
                {certifications.map((cert) => (
                  <div className="cert-item" key={cert}>
                    <Award size={18} />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-box">
              <div className="contact-copy">
                <span className="eyebrow">LET'S CONNECT</span>
                <h2>Let's build something <span>meaningful.</span></h2>
                <p>
                  Open to junior Data Scientist, AI/ML Engineer and related opportunities,
                  collaborations and interesting data-driven projects.
                </p>
              </div>

              <div className="contact-actions">
                <a href={`mailto:${profile.email}`} className="contact-action">
                  <Mail />
                  <div><small>Email</small><strong>{profile.email}</strong></div>
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="contact-action">
                  <Github />
                  <div><small>GitHub</small><strong>github.com/FizaAnwar</strong></div>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-action">
                  <Linkedin />
                  <div><small>LinkedIn</small><strong>View LinkedIn profile</strong></div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© Fiza Anwar</span>
          <span>Data Science • AI • Machine Learning</span>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
