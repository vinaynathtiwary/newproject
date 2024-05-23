// pages/index.js
"use client"
import Head from 'next/head';
import styles from './Consulting.module.css';

export default function ConsultingPage() {
    return (
        <section className={styles.container}>
            <section className={styles.backgroundSection}>
                <div>
                    <h1>Consulting</h1>
                    <p>Data-informed strategic decisions and expert consulting to drive business outcomes.</p>
                </div>
            </section>
            <section className={styles.ContentBgSection}>
                <div>
                    <h3>As markets evolve, so do business opportunities and challenges. By collaborating with you, we combine experience with instinct to reach your commercial goals.</h3>
                    <p className={styles.centerText}>You’re facing disruptive technologies, increased global competition, shifting business models, and evolving customer and employee expectations.</p>
                    <p className={styles.centerText}>Partnering with us means challenging your business to think differently, make informed decisions and achieve a competitive advantage.</p>
                </div>
                <div className={styles.services}>
                    <div>
                        <h1>Tailored solutions</h1>
                        <img src="/assets/Collaborative expertise.jpg" alt="" />
                        <p>Strategies that address your unique challenges, ensuring sustainable success.</p>
                    </div>
                    <div>
                        <h1>Collaborative expertise</h1>
                        <img src="/assets/Tailored solutions.jpg" alt="" />
                        <p>Partner with experienced consultants who listen, understand, and guide you towards your goals.</p>
                    </div>
                    <div>
                        <h1>Global insight</h1>
                        <img src="/assets/Global insight.jpg" alt="" />
                        <p>Access our global team, combining local expertise and international insights for unparalleled support.</p>
                    </div>
                </div>
            </section>
            <section className={styles.ourConsulting}>
                <h1>Our Consulting</h1>
                <div className={styles.serviceCard}>
                <div className={styles.card}>
                        <h2>Consulting</h2>
                        <p>Adapt to dynamic markets with tailored solutions and expert business consultancy.</p>
                        <hr />
                    </div>
                    <div className={styles.card}>
                        <h2>Consulting</h2>
                        <p>Adapt to dynamic markets with tailored solutions and expert business consultancy.</p>
                        <hr />
                    </div>
                    <div className={styles.card}>
                        <h2>Consulting</h2>
                        <p>Adapt to dynamic markets with tailored solutions and expert business consultancy.</p>
                        <hr />
                    </div>
                </div>
            </section>
        </section>
    );
}
