import React from 'react';
import styles from '../styles/Project.module.css';

const Project = () => {
    return (
        <div className={styles.project}>
            <div className={styles.maincontainer}>
                <div className={styles.header}>
                    <span className={styles.headermain}>
                        PROJECTS
                    </span>
                    <span className={styles.after}>

                    </span>
                    <div className={styles.section}>
                        Here you will find some of the personal and clients projects that I created with each project containing its own case study.
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.projectrow}>
                        <div className={styles.projecticon}>
                            <img className={styles.myImg} src='https://camo.githubusercontent.com/dd4c0cf5c6e2eeedef59e83f28e614f62bd2c408143e6264f03b5ab589f34a8f/68747470733a2f2f6c7563617370756c6c696573652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032302f30392f65636f6d6d657263652d322e6a7067' alt='icon' width={240} height={160} />
                        </div>
                        <div className={styles.project_content}>
                            <h3 className={styles.title}>
                                CRWN-CLOTHING
                            </h3>
                            <p className={styles.img_content}>
                                Crwn-Clothing is a web-app that I created where people can shop the clothes of their favorite t-shirt, jeans or other products and can be part of the conversation.
                            </p>
                            <button className={styles.contact}>
                                Case Study
                            </button>
                        </div>
                    </div>
                    <div className={styles.projectrow}>
                        <div className={styles.projecticon}>
                            <img className={styles.myImg} src='https://previews.123rf.com/images/mariusz_prusaczyk/mariusz_prusaczyk1409/mariusz_prusaczyk140900558/32094470-3d-word-portfolio-on-white-background.jpg' alt='icon' width={240} height={160} />
                        </div>
                        <div className={styles.project_content}>
                            <h3 className={styles.title}>
                                PORTFOLIO
                            </h3>
                            <p className={styles.img_content}>
                                In this project i showcase My Self and My Skills in ui building and added some beautiful Animations.
                            </p>
                            <button className={styles.contact}>
                                Case Study
                            </button>
                        </div>
                    </div>
                    <div className={styles.projectrow}>
                        <div className={styles.projecticon}>
                            <img className={styles.myImg} src='https://static.wixstatic.com/media/63044d_236bed0a9614460faa6a09fea16fb7c7~mv2.jpeg/v1/fit/w_2500,h_1330,al_c/63044d_236bed0a9614460faa6a09fea16fb7c7~mv2.jpeg' alt='icon' width={240} height={160} />
                        </div>
                        <div className={styles.project_content}>
                            <h3 className={styles.title}>
                                WINNER YOGA
                            </h3>
                            <p className={styles.img_content}>
                                Winner yoga is a web-app that I created where people can shop the clothes of their favorite gym costume and can be part of the conversation.
                            </p>
                            <button className={styles.contact}>
                                Case Study
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;