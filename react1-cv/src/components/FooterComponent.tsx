import React from 'react';


export default function FooterComponent(){
    return(
        <footer>
        <div className='Contact' id='section4'>
        <section>
        <h1 >Connect whit Me</h1>
        <p > <i className="fa fa-phone-square red" ></i>Phone</p>
        <p><a href="tel:+40767316198">+40767316198</a></p>
        <p><i className="fa fa-envelope red"></i> Email</p>
        <p>  <a href = "mailto: ene.2456@gmail.com"target={"_blank"}>Ene.2456@gmail.com</a></p>
          
          
        </section>
        <div className='FormSection'>
        <form action="https://formsubmit.co/ene.2456@gmail.com" method="POST">
            <input type="text"  placeholder='Your name' name='name'/>
            <input type="text" placeholder='Your email' name='email'/>
            <input type="text"placeholder='Your phone' name='phone'/>
            <textarea placeholder='Your message here' name='text'></textarea>
            <button type='submit'>Submit message</button>
            
        </form>
       
        </div>
        </div>
        
        </footer>
    );
}
