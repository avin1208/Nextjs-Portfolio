import Link from 'next/link';
import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
        <style jsx>
        {
          `
      a {
        background: #facf0f;
        color: #333;
        text-transform: uppercase;
        letter-spacing: 1px;
        display: inline-block;
        font-weight: 700;
        border-radius: 5px;
        box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);
        transition: transform .3s;
        padding: 1rem 2.5rem;
        font-size: 1rem;
        border: none;
        cursor: pointer;
      }
      a:hover{
        transform: translateY(-0.6rem);
        box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);
      }
      `
        }
      </style>
            <div className={styles.maincontainer}>
                <div className={styles.header}>
                    <span className={styles.headermain}>
                        ABOUT ME
                    </span>
                    <span className={styles.after}>

                    </span>
                    <div className={styles.section}>
                        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.contentmain}>
                        <h3 className={styles.contentmain_title}>
                            Get to know me!
                        </h3>
                        <div>
                            <p className={styles.contentmain_detail}>
                                I'm a <strong>Frontend Web Developer</strong>
                                building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the
                                <strong>Projects</strong>
                                section.
                            </p>
                            <p className={styles.contentmain_detail}>
                                I also like sharing content related to the stuff that I have learned over the years in
                                <strong>Web Development</strong>
                                so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.
                            </p>
                            <p className={styles.contentmain_detail}>
                                I'm open to
                                <strong>Job</strong>
                                opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to
                                <strong>Contact</strong>
                                me.
                            </p>
                        </div>
                        <Link href="/contact" className={styles.contact}>
                            <a>
                            Contact
                            </a>
                        </Link>
                    </div>
                    <div className={styles.contentmain}>
                        <h3 className={styles.contentmain_title}>
                            My skills
                        </h3>
                        <div className={styles.skills}>
                            <div className={styles.skillsname}>
                                HTML
                            </div>
                            <div className={styles.skillsname}>
                                CSS
                            </div>
                            <div className={styles.skillsname}>
                                JavaScript
                            </div>
                            <div className={styles.skillsname}>
                                TypeScript
                            </div>
                            <div className={styles.skillsname}>
                                React
                            </div>
                            <div className={styles.skillsname}>
                                SASS
                            </div>
                            <div className={styles.skillsname}>
                                GIT
                            </div>
                            <div className={styles.skillsname}>
                                Responsive Design
                            </div>
                            <div className={styles.skillsname}>
                                GITLAB
                            </div>
                            <div className={styles.skillsname}>
                                NEXT JS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;