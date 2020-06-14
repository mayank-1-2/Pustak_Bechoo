import React from 'react';
import './Pustak.css';
function Footer(props) {
    return(
    <div className="footer">
         <footer class="panel-footer">
        <div className="container">
       <div className="row">
            <section id="hours" className="col-sm-4">
                <span>Contact Us:</span><br/>
                <span className="material-icons mr-1"> call </span>
                <a href="tel:410-602-5008"> <span>999-999-9999</span> </a><br/>
                <span className="material-icons mr-1">email</span>
                eg@gmail.com
            </section>
            <section id="address" className="col-sm-4">
            <span>Address:</span><br/>
            7105 Reisterstown Road<br/>
            Baltimore, MD 21215
            <p>* Any thing if u want to add add here.</p>
          </section>
          <section id="testimonials" className="col-sm-4">
            <span>About us</span><br/>
            <p>
              "The best web in the world add the thing why to use this wen sith
              mayank kumar mishra"
            </p>
            <p>
              "Amazing web site! Great service! Couldn't ask for more! I'll be
              back again and again!"
            </p>
            <p>
              "Since 2020"
            </p>
          </section>
       </div>
       <hr/>
        <div className="text-center">© Copyright Pustak bechoo 2020</div>
      </div>
      </footer>

    </div>
    )
}

export default Footer;