import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { useSmoothScroll } from "../../Hooks/useSmoothScroll";
import { FiHome, FiUser, FiCode, FiFolder, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>ankitBareth.dev</div>

      <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      <ul
        ref={menuRef}
        className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}
      >
        <li>
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, () => setIsMenuOpen(false))}
          >
            <FiHome className={styles.icon} /> Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, () => setIsMenuOpen(false))}
          >
            <FiUser className={styles.icon} /> About
          </a>
        </li>
        <li>
          <a
            href="#craft"
            onClick={(e) => scrollToSection(e, () => setIsMenuOpen(false))}
          >
            <FiCode className={styles.icon} /> Craft
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, () => setIsMenuOpen(false))}
          >
            <FiFolder className={styles.icon} /> Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
