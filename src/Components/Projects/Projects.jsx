import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d2",
      title: "Todo-App",
      description:
        "A streamlined task management application that helps you organize, track, and complete your daily tasks efficiently and effectively.",
      demoLink: "https://todo-app-alpha-five-45.vercel.app/",
      githubLink: "https://github.com/ankitbareth-dev/Todo-App",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1612831455543-41d5d2a3f4b4",
      title: "Portfolio Website",
      description:
        "A modern portfolio showcasing projects, skills, and experience — built with React and Tailwind, optimized for performance and style.",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
      title: "E-Commerce Store",
      description:
        "A dynamic React + Node.js based e-commerce web app featuring user authentication, cart, and secure payments.",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6",
      title: "Weather App",
      description:
        "A clean, responsive weather forecasting app using OpenWeather API, offering real-time temperature and city search features.",
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.heading}>Featured Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.projectLinks}>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnPrimary}
                >
                  <FaExternalLinkAlt /> &nbsp; Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnSecondary}
                >
                  <FaGithub /> &nbsp; GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
