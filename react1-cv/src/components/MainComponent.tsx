import React from 'react';
import styled from 'styled-components';

export default function MainComponent(): JSX.Element{
    return(
      <main>
        <section>
        <h1>Helllo,</h1>
         <h3>I am <span className='red'>George</span></h3>
         <h4>Frontend Developer</h4>
         <div className='linksContact'>
         <a href="https://github.com/Enegeorge12" target={"_blank"}><i className="fa fa-github red"></i></a>
         <a href="https://www.linkedin.com/in/enegeorge/"target={"_blank"}><i className="fa fa-linkedin-square red"></i></a>
         <a href = "mailto: ene.2456@gmail.com"target={"_blank"}><i className="fa fa-envelope red"></i></a>
         </div>
        </section>
        <article>
       <div className='imgUser'>
       <img
          src="https://imgcdn.bestjobs.eu/cdn/ri/plain/resume_image/632bfec247c11.jpg"
          alt=" logo"
        />
       </div>
       <div></div>
       <div></div>
       <div></div>
        </article>
      </main>
    )
}