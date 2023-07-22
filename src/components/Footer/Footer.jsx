import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <a href="https://www.linkedin.com/in/keyur-raval-644198191">
                <FaLinkedin className={styles.socialicon} />
            </a>
            <a href="https://twitter.com/_keyur_im">
                <FaTwitter className={styles.socialicon} />
            </a>
            <a href="mailto:ravalkeyur054@gmail.com">
                <FaEnvelope className={styles.socialicon} />
            </a>
            <a href="https://github.com/keyuraval">
                <FaGithub className={styles.socialicon} />
            </a>
            <p>
                Designed &amp; Developed with ❤️ by
                <a href="https://www.linkedin.com/in/keyur-raval-644198191">Keyur Raval</a>
            </p>
        </div>
    );
};

export default Footer;
