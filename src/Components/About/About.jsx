import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.bgGlow}></div>

      <div className={styles.contentWrapper}>
        <h2 className={styles.heading}>About Me</h2>
        <div className={styles.divider}></div>

        <div className={styles.textBox}>
          <p>
            Hey there! 👋 I’m{" "}
            <span className={styles.highlight}>Ankit Bareth</span>, a passionate
            developer who loves creating smooth, elegant, and meaningful digital
            experiences. My journey into tech started with curiosity — and
            quickly turned into a deep love for problem-solving and building
            things that work beautifully.
          </p>

          <p>
            I completed my{" "}
            <span className={styles.highlight}>
              BCA from Pacific University, Udaipur
            </span>{" "}
            in 2024. Since then, I’ve been crafting my skills in{" "}
            <span className={styles.highlight}>web development</span> and{" "}
            <span className={styles.highlight}>mobile app development</span>,
            focusing especially on{" "}
            <span className={styles.highlight}>Android applications</span>.
          </p>

          <p>
            On <span className={styles.highlight}>May 20, 2025</span>, I got the
            incredible opportunity to begin an internship at{" "}
            <span className={styles.highlight}>4DevNet Pvt. Ltd.</span> The
            experience was eye-opening — it pushed my limits, taught me to think
            like a creator, not just a coder. My internship concluded on{" "}
            <span className={styles.highlight}>August 20, 2025</span>, and
            shortly after, I was offered a full-time position.
          </p>

          <p>
            Since <span className={styles.highlight}>September 1, 2025</span>,
            I’ve been a proud member of the{" "}
            <span className={styles.highlight}>4DevNet</span> team, working
            alongside amazing developers, designers, and thinkers. Each project
            sharpens my craft and inspires me to go beyond what’s expected — to
            build things that truly make a difference.
          </p>

          <div className={styles.socials}>
            <a
              href="https://github.com/ankitbareth-dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-bareth-64956035b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/ankit_bareth_dev/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/AnkitbarethDev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
