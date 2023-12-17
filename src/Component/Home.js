import React, { useState, useEffect } from 'react';
import '../CSS/Home.css';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const FadeInElement = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const fadeIn = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
    });

    return <animated.div ref={ref} style={fadeIn}>{children}</animated.div>;
};

const Home = () => {
    const [contentIndex, setContentIndex] = useState(0);

    const contentArray = [
        "I'M Mohammed Rabbani",
        "I'M a Software Developer",
        "I'M a Frontend Developer",
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setContentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [contentArray.length]);
    return (
        <React.Fragment>
            <section className="home" id="home">
                <FadeInElement>
                    <h3>HI THERE<span className="wave">👋</span></h3>
                </FadeInElement>
                <FadeInElement>
                    <h1>
                        <span className="conta">
                            <div className="typing-container typed">{contentArray[contentIndex].toUpperCase()}</div>
                        </span>
                    </h1>
                </FadeInElement>
                <FadeInElement>
                    <p>
                        A Fresher with less than 1 year experience is seeking a full-time position in a reputable organization,
                        in which the personal abilities I possess can assist with the implementation of innovative ideas,
                        creativity, and skills for this developed firm. To add creativity and resourceful working to achieve
                        the corporation's success, as well as success for myself as a valuable representative.
                    </p>
                </FadeInElement>
            </section>

            <section className="about" id="about">
                <h1 className="heading">
                    <div className="row container">
                        <div className="counter">
                            <FadeInElement>
                                <div className="box content">
                                    <span>2</span>
                                    <h3>Internship completed</h3>
                                </div>
                            </FadeInElement>
                            <FadeInElement>
                                <div className="box content">
                                    <span>10+</span>
                                    <h3>project completed</h3>
                                </div>
                            </FadeInElement>
                            <FadeInElement>
                                <div className="box content">
                                    <span>5+</span>
                                    <h3>Certification Completed</h3>
                                </div>
                            </FadeInElement>
                        </div>
                    </div>
                </h1>
            </section>
        </React.Fragment>
    );
};

export default Home;
