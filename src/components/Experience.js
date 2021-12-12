import React from 'react';
import Spin from 'react-reveal/Spin';
import Fade from 'react-reveal/Fade';
import a from '../images/arrow.png';

const Experience = () => {
    return(
        <div className="experience" id="experience">
                
            <div className="title">
                <Spin>
                    <h2>Experience</h2>
                </Spin>
            </div>
            <div className="content">
                
                <div className="places">
                    <Fade top>
                    <div className="place">
                        <div className="thename">
                            <h3 id="l1">Python Teaching Assistant for Amazon Career Choice Program</h3>
                            <h3 className="year">January 2021 - Current</h3>
                        </div>
                        <div className="detail">
                            <ul>
                                <li><img src={a}/>Helping assist Amazon employees with their coding assignments and career paths towards getting a job in the technical industry</li>
                                <li><img src={a}/>Supporting instructors with attendance, homework, exam grading, and lectures</li>
                                <li><img src={a}/>Meeting with the instruction team and career services daily to plan and analyze student progression</li>
                                <li><img src={a}/>Recording video tutorials walking through the process of building a full stack web application</li>
                                <li><img src={a}/>Motivating students in the channels everyday through zoom or the chat and making sure no questions get left unanswered</li>
                            </ul>
                        </div>
                    </div>
                    </Fade>
                    <Fade top>
                    <div className="place">
                        <div className="thename">
                            <h3 id="l2">Freelance Software Developer</h3>
                            <h3 className="year">December 2020 - Current</h3>
                        </div>
                        <div className="detail">
                            <ul>
                                <li><img src={a}/>Planning wireframes and communicating with clients to incorporate what features they want</li>
                                <li><img src={a}/>Building and deploying responsive web applications that are suitable for every device screen size</li>
                                <li><img src={a}/>Maintaining and updating the prices, photos, and company changes</li>
                            </ul>
                        </div>
                    </div>
                    </Fade>
                    <Fade top>
                    <div className="place">
                        <div className="thename">
                            <h3 id="l3">Coding Dojo Graduate</h3>
                            <h3 className="year">April 2020 - August 2020</h3>
                        </div>
                        <div className="detail">
                            <ul>
                                <li><img src={a}/>Graduated with perfect-score black belts on all 3 full stack exams in Python/Django, C#/.Net, and MERN</li>
                                <li><img src={a}/>Accumulated 1,500+ hours of intensive programming coursework including building, testing, debugging, and deployment</li>
                                <li><img src={a}/>Worked in teams to build projects and complete hackathons</li>
                            </ul>
                        </div>
                    </div>
                    </Fade>
                    
                </div>
                
                
            </div>
            
            
         
                

        </div>

    )

}
export default Experience