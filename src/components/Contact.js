import React from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_aojlwr7', 'template_6vo7f7h', e.target, 'user_tlZlD5XvX8g1NQ5XuvEDM')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset();
    
    }

    return (
        
            
        <div className="section">
            <form onSubmit={sendEmail} className="contact" >
                <div>
                    <div className="header">
                        <h2>Get In Touch</h2>
                        <h3>My inbox is always open for new opportunities and questions!</h3>
                    </div>
                    <div className="line">
                        <label for="name">Name:</label>
                        <input type="text" className="form-control input" placeholder="Name" name="name"/>
                    </div>
                    <div className="line">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control input" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="line">
                        <label for="subject">Subject:</label>
                        <input type="text" className="form-control input" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="line">
                        <label for="message">Message:</label>
                        <textarea className="form-control input" id="" rows="3" name="message"></textarea>
                    </div>
                    <div className="center">
                        <input type="submit" className="btn buttonslide slidedown" value="Send Message"></input>
                    </div>
                </div>
            </form>

            
            
        </div>
       
    )
}

export default Contact