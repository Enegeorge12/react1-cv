import React from 'react';

export default function AboutComponent(){
    return(
        
        
        <article className='about-class' id='section1'>
        <img src="https://knowtechie.com/wp-content/uploads/2018/02/web-developer.jpg" alt="picturePc" />
        <section className='aboutme'>
            <h3>About <span className='red'>Me</span> </h3>
            <h4>I am George</h4>
            <h1><span className='red'>Web</span> Developer</h1>

            <p> Based in Bucharest, Romania</p>
            <h5>My name is Ene George, I am currently in the process of professional reorientation, looking for a position as a Frontend Developer.
             I attended the courses from <span ><a href="https://wantsome.ro/" className='red'>Wantsome</a></span> (specialization Frontend Developer) for professional training in the IT area.
             </h5>
            <a href="./react1-cv\src\Resume-George-Ene.pdf" download className='red'>Download CV <i className="fa fa-download red" style={{paddingLeft:"10px"}}></i></a>
            </section>
            <img src="https://flatironschool.com/wp-content/uploads/2021/11/fe-vs-be.jpg" className='imgdown' alt="picturePc" />
        </article>

    );
}

