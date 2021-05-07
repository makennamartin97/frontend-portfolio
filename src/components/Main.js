import React from 'react';
import Nav from './Navbar';
import Section1 from './Section1'
import Contact from './Contact'
import Skills from './Skills'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Experience from './Experience';
import Projects from './Projects';




const Main = () => {
    function FadeInSection(props) {
        const [isVisible, setVisible] = React.useState(false);
        

        const domRef = React.useRef();
        React.useEffect(() => {
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
          });
          observer.observe(domRef.current);
        }, []);
        return (
          <div
            className={`fade-in ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
          >
            {props.children}
          </div>
        );
      }


    return (
        <div className="main">
            
          <Nav/>
     
        
          <Section1/>

          <Slide bottom>
            <Skills/>

          </Slide>
          <Slide bottom>
            <Experience/>

          </Slide>
          <Slide bottom>
            <Projects/>

          </Slide>
          <Slide bottom>
            <Contact/>

          </Slide>
          

            
        </div>
    )
}

export default Main