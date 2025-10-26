import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiIonic,
  SiCapacitor,
} from "react-icons/si";
import styles from "./Skills.module.css";

const Skills = () => {
  const webSkills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ];

  const backendSkills = [
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
  ];

  const mobileSkills = [
    { icon: <SiIonic />, name: "Ionic" },
    { icon: <SiCapacitor />, name: "Capacitor" },
  ];

  return (
    <section id="craft" className={styles.skillsSection}>
      <h2 className={styles.title}>Craft</h2>

      <div className={styles.categories}>
        <div className={styles.category}>
          <h3>Frontend</h3>
          <div className={styles.skillGrid}>
            {webSkills.map((skill, i) => (
              <div key={i} className={styles.skillCard}>
                <div className={styles.icon}>{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.category}>
          <h3>Backend</h3>
          <div className={styles.skillGrid}>
            {backendSkills.map((skill, i) => (
              <div key={i} className={styles.skillCard}>
                <div className={styles.icon}>{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.category}>
          <h3>Mobile Development</h3>
          <div className={styles.skillGrid}>
            {mobileSkills.map((skill, i) => (
              <div key={i} className={styles.skillCard}>
                <div className={styles.icon}>{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className={styles.note}>
        I’ve built several web apps using <strong>React</strong> and mobile apps
        using <strong>Ionic + Capacitor</strong>, constantly improving my
        full-stack and mobile expertise.
      </p>
    </section>
  );
};

export default Skills;
