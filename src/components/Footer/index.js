import styles from "./Footer.module.css";
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="social">
                <a href="https://www.linkedin.com/in/gabriel-rabello-barbosa-204aa7142/" target="_blank" className="social-link">
                     <BsLinkedin />
                </a>

                <a href="https://www.instagram.com/gabrielrbarbosa/" target="_blank" className="social-link">
                    <AiOutlineInstagram />
                </a>

                <a href="https://github.com/gabrielrbarbosa23" target="_blank" class="social-link">
                    <AiOutlineGithub />
                </a>

                <a href="https://gabrielrbarbosa23.github.io/gabrielportfolio/#" target="_blank" className="portfolio">Portfolio</a>
            </div>        
                    
                    <div className="footer_text">
                        <h1 className="footer__title">Our Books</h1>
                        <span className="footer__subtitle">Personal website to read</span>
                    </div>

            <p className="footer-by">&#169; Gabriel R barbosa. All right reserved</p>
        </footer>
    );
}

export default Footer;
