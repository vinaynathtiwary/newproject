import React from 'react';
import styles from './contact.css.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <section className={styles.ContactTopSection}>
                <h1 className={styles.header}>Connect with Us Today: Your Feedback Matters!</h1>
            </section>
            <section className={styles.ContactBottomSection}>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <h2 className={styles.formHeader}>Get in Touch</h2>
                        <input type="text" className={styles.input} placeholder="Enter your full name..." required />
                        <input type="email" className={styles.input} placeholder="Enter your email address..." required />
                        <input type="text" className={styles.input} placeholder="Enter a subject..." required />
                        <textarea className={styles.textArea} placeholder="Enter your message..." required />
                        <button type="submit" className={styles.button}>Send Message</button>
                    </form>
                </div>
                <div className={styles.contactInfoContainer}>
                    <div className={styles.contactCard}>
                        <h2>Contact us</h2>
                        <p className={styles.contactDetail}>+91-9888034677</p>
                        <p className={styles.contactDetail}>contact@hedgmyfunds.co.in</p>
                        <address className={styles.address}>
                        Hedgemyfunds.co.in<br/>
                        TDS Tower, Phase 88, <br/>Industrial Area Mohall,<br/>
                        Sahibzada Ajit Singh Nagar, <br/>Punjab 160055.
                        </address>
                        <a href="/locations" className={styles.locationsLink}>View our locations <span>&#8594;</span></a>
                    </div>
                    <div className={styles.socialMedia}>
                        <h3>Follow us on</h3>
                        <div className={styles.socialIcons}>
                            <a href="https://facebook.com"><img src="/icons/facebook.png" alt="Facebook" /></a>
                            <a href="https://linkedin.com"><img src="/icons/linkedin.png" alt="LinkedIn" /></a>
                            <a href="https://twitter.com"><img src="/icons/twitter.png" alt="Twitter" /></a>
                            <a href="https://instagram.com"><img src="/icons/instagram.png" alt="Instagram" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact; 
