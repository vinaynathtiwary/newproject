// pages/index.js
import Head from 'next/head';
import styles from './service.css.module.css';

export default function service() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Grant Thornton</title>
                <meta name="description" content="Grant Thornton services overview" />
            </Head>
            <main className={styles.main}>
                <div>
                    <h1 className={styles.title}>How Grant Thornton can help</h1>
                    <p className={styles.description}>
                        Changing face of Indian businesses, government led reforms have brought new challenges and new opportunities in the market. This constant evolution requires regular shaping of new strategies and new business solutions. Our extensive network of our member firms and offices in the country can help mitigate the challenges arising on account of the unique legal system, regulatory bottlenecks and tax requirements.
                    </p>
                    <p className={styles.description}>
                        We can help you in your financial growth by overcoming these barriers of growth. This involves doing business in India advisory, corporate finance, management of your business risks, strategic planning of your investments and solving your taxation related queries.
                    </p>
                    <p className={styles.description}>
                        Whatever business you are in, we can offer you the following services:
                    </p>
                </div>
                <br/>
                <div>
                    <h1 className={styles.title}>Our Services</h1>
                </div>
                <div className={styles.services}>
                    <div className={styles.serviceCard}>
                        <h2>Consulting</h2>
                        <p>Adapt to dynamic markets with tailored solutions and expert business consultancy.</p><hr/>
                        <a href="#">See our 6 consulting services</a>
                    </div>
                    <div className={styles.serviceCard}>
                        <h2>Tax, Regulatory & Finance Consulting</h2>
                        <p>Tax advisory and advisory services in India by Grant Thornton aim to help businesses of all sizes to formulate and implement effective strategies to optimize their taxes and minimize tax challenges.</p><hr/>
                        <a href="#">See our 16 tax, regulatory & finance consulting services</a>
                    </div>
                    <div className={styles.serviceCard}>
                        <h2>ESG & Risk Consulting</h2>
                        <p>ESG & Risk Consulting</p><hr/>
                        <a href="#">See our 4 risk advisory services</a>
                    </div>
                    <div className={styles.serviceCard}>
                        <h2>Deals Consulting</h2>
                        <p>Supporting you to grow your business profitably through our partner-led deals service.</p><hr/>
                        <a href="#">See our 7 additional services</a>
                    </div>
                    <div className={styles.serviceCard}>
                        <h2>Assurance Services</h2>
                        <p>Assurance Services</p><hr/>
                        <a href="#">See our 4 risk advisory services</a>
                    </div>
                    <div className={styles.serviceCard}>
                        <h2>Global Delivery Services</h2>
                        <p>Grant Thornton’s Global Delivery Services works to provide innovative multi-disciplinary solutions across service lines and expertise areas, with a global customer base.</p><hr/>
                        <a href="#">See our 7 additional services</a>
                    </div>
                </div>
            </main>
        </div>
    );
}