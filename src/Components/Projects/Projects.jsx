import { FaExternalLinkAlt, FaGithub, FaImages, FaTimes } from "react-icons/fa";
import styles from "./Projects.module.css";
import { useState, useEffect } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Todo App",
      description:
        "A streamlined task management application to organize, track, and complete daily tasks efficiently.",
      images: [
        "https://res.cloudinary.com/dhtog7w9u/image/upload/v1760097674/todoApp-3_vdraad.png",
        "https://res.cloudinary.com/dhtog7w9u/image/upload/v1760097674/todoApp-1_jqk7zv.png",
        "https://res.cloudinary.com/dhtog7w9u/image/upload/v1760097674/todoApp-1_jqk7zv.png",
      ],
      demoLink: "https://todo-app-alpha-five-45.vercel.app/",
      githubLink: "https://github.com/ankitbareth-dev/Todo-App",
    },
    {
      id: 2,
      title: "Indiamart Odoo Module Design",
      description:
        "Designed a modern Odoo module interface for Indiamart with optimized UX and responsive design.",
      images: [
        "https://res.cloudinary.com/dhtog7w9u/image/upload/v1760100686/odoo-module-1_qufcx6.png",
        "https://res.cloudinary.com/dhtog7w9u/image/upload/v1760100684/odoo-module-2_ffbqfy.png",
        "https://res.cloudinary.com/dhtog7w9u/image/upload/v1760100684/odoo-module-3_fyo4f1.png",
      ],
    },
    {
      id: 3,
      title: "Eduquity Exam Platform (Web + Mobile)",
      description:
        "Developed a scalable exam platform with geo-fencing, native photo upload, and secure candidate authentication.",
      images: [
        "https://res.cloudinary.com/dhtog7w9u/image/upload/v1760100684/eduquity-1_l3i8ud.png",
        "https://res.cloudinary.com/dhtog7w9u/image/upload/v1760100684/eduquity-2_tjxyjq.png",
        "https://res.cloudinary.com/dhtog7w9u/image/upload/v1760100684/eduquity-3_rwmn1w.png",
      ],
    },
    {
      id: 4,
      title: "Product Research App (Web + Android)",
      description:
        "A research management app allowing field agents to capture, submit, and analyze product data in real-time.",
      images: [
        "https://res.cloudinary.com/dhtog7w9u/image/upload/v1760100685/product-1_ggneul.png",
        "https://res.cloudinary.com/dhtog7w9u/image/upload/v1760100685/product-2_haluuy.png",
        "https://res.cloudinary.com/dhtog7w9u/image/upload/v1760100685/product-3_sj0bsb.png",
      ],
    },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [previewImages, setPreviewImages] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(0);

  // Handle hover slideshow
  const handleMouseEnter = (id, images) => {
    if (images.length > 1) {
      let index = 0;
      const interval = setInterval(() => {
        index = (index + 1) % images.length;
        setSlideIndex(index);
      }, 1800);
      setHoveredProject({ id, interval });
    }
  };

  const handleMouseLeave = () => {
    if (hoveredProject?.interval) clearInterval(hoveredProject.interval);
    setHoveredProject(null);
    setSlideIndex(0);
  };

  // Handle modal open/close
  const openPreview = (images, index = 0) => {
    setPreviewImages(images);
    setPreviewIndex(index);
  };

  const closePreview = () => {
    setPreviewImages(null);
    setPreviewIndex(0);
  };

  const nextImage = () => {
    if (previewImages)
      setPreviewIndex((prev) => (prev + 1) % previewImages.length);
  };

  const prevImage = () => {
    if (previewImages)
      setPreviewIndex(
        (prev) => (prev - 1 + previewImages.length) % previewImages.length
      );
  };

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && closePreview();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.heading}>Featured Projects</h2>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onMouseEnter={() => handleMouseEnter(project.id, project.images)}
            onMouseLeave={handleMouseLeave}
            onClick={() => openPreview(project.images)}
          >
            <div className={styles.projectImage}>
              <img
                src={
                  hoveredProject?.id === project.id
                    ? project.images[slideIndex]
                    : project.images[0]
                }
                alt={project.title}
              />
              {/* Dots indicator */}
              <div className={styles.dots}>
                {project.images.map((_, i) => (
                  <span
                    key={i}
                    className={`${styles.dot} ${
                      i === slideIndex ? styles.active : ""
                    }`}
                  ></span>
                ))}
              </div>
            </div>

            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.projectLinks}>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnPrimary}
                  >
                    <FaExternalLinkAlt /> &nbsp; Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnSecondary}
                  >
                    <FaGithub /> &nbsp; GitHub
                  </a>
                )}
                {!project.demoLink && !project.githubLink && (
                  <span className={styles.placeholder}>
                    <FaImages /> &nbsp; Screenshots Available
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Preview Modal */}
      {previewImages && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeBtn} onClick={closePreview}>
              <FaTimes />
            </button>

            <img
              src={previewImages[previewIndex]}
              alt="Preview"
              className={styles.previewImage}
            />

            <div className={styles.modalControls}>
              <button onClick={prevImage}>⟨</button>
              <button onClick={nextImage}>⟩</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
