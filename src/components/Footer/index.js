import styles from "./Footer.module.css";
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.social}>
                <a href="https://www.linkedin.com/in/gabriel-rabello-barbosa-204aa7142/" target="_blank">
                     <BsLinkedin className={styles.icon} />
                </a>

                <a href="https://www.instagram.com/gabrielrbarbosa/" target="_blank">
                    <AiOutlineInstagram className={styles.icon} />
                </a>

                <a href="https://github.com/gabrielrbarbosa23" target="_blank">
                    <AiOutlineGithub className={styles.icon} />
                </a>
            </div> 

            <a href="https://gabrielrbarbosa23.github.io/gabrielportfolio/#" target="_blank" className={styles.port}>Portfolio</a>       

            <p className={styles.footer_by}>&#169; Gabriel R Barbosa. All right reserved</p>
        </footer>
    );
}

export default Footer;
