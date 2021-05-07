import React,{useState} from 'react';
import Spin from 'react-reveal/Spin';
import Fade from 'react-reveal/Fade';
import a from '../images/arrow.png';
import weatherapi from '../images/weatherapi2.gif'
import wed from '../images/weddingplanner2.gif'
import crud from '../images/crud.gif'
import kirby from '../images/kirby.gif'
import arrow from '../images/arrow.png';
import mongo from '../images/mongodb copy.png';
import e from '../images/expressjs copy.png';
import react from '../images/react.png';
import node from '../images/nodejs copy.png';

const Projects = () => {
    return(
        <div className="projects">
                
            <div className="title">
                <Spin>
                    <h2>Projects</h2>
                </Spin>
            </div>
            <div className="projrow">
            
            <div className="containrow">
                <div className="proj weatherproj">
                
                    <div className="contain ">
                    
                        <img src={weatherapi} alt="Weather api" />
                    
                        
                    </div>
                </div>
                <div class="modal">
                    <div class="modal_content">
                        <span class="close">&times;</span>
                        <p>I'm A Pop Up!!!</p>
                    </div>
                </div>

                    
            </div>
            <div className="containrow">
                <div className="proj crudelicious ">

                    <div className="contain ">
                        <img src={crud} alt="Crudelicious"/>

                    </div>
      
                </div>
                    
            </div>
            <div className="containrow">
                <div className="proj weddingproj ">
                
                    <div className="contain">
                        <img src={wed} alt="Wedding Planner"/>

                    </div>
                </div>

            </div>
            <div className="containrow">
                <div className="proj ">
                
                    <div className="contain">
                        <img src={kirby} alt="Weather api"/>
                    </div>
                </div>
                    
            </div>

            </div>
            <div className="other">
                <div className="title">
                    <Spin>
                        <h2>Other Projects</h2>
                    </Spin>
                </div>
                <div className="content">
                
                    <div className="moreprojects">
                        <Fade top>
                        <div className="anotherone">
                        <div className="thename">
                            <h3 id="l1">Pet Shelter</h3>

                        </div>
                        <div className="detail">
                            <ul>
                                <li><img src={a}/>Full stack CRUD application that allows users to post, edit, view, and "adopt" pets </li>
                                <li><img src={a}/>Click <a href="https://github.com/makennamartin97/pet-shelter">here</a> to see the source code from Github</li>
                                <li><img src={a}/>Stack: MongoDB, ExpressJS, ReactJS, NodeJS</li>
                            </ul>
                            <div className="stack">
                                <img src={mongo} alt="mongoDB"/>
                                <img src={e} alt="mongoDB"/>
                                <img src={react} alt="mongoDB"/>
                                <img src={node} alt="mongoDB"/>
                            </div>
                        </div>
                    </div>

                        </Fade>
                    </div>
                </div>

            </div>
            
         
                

        </div>

    )

}
export default Projects