
import React from 'react';

export default function ProjectsMain(){
    return(
        <>
        <h1 style={{textAlign: "center", marginTop:"140px"}}><span className='red'>Check</span> my portofolio</h1>
       <div className='article-main'id='section2'> 
        <article>
            <h1>Project 1</h1>
            <h4>Ethic whine</h4>
            <h5>Wine Shop</h5>
            <a href="https://enegeorge12.github.io/E-commerce-in-progress/"  target={"_blank"}>Link</a>
        </article>
        <article>
            <h1>Project 2</h1>
            <h4>Windows Landing Page</h4>
            <h5>Landing Page</h5>
            <a href="https://enegeorge12.github.io/Windows-Landing-Page/">Link</a>
        </article>
        <article>
            <h1>Project 3</h1>
            <h4>To Do List</h4>
            <h5>Program </h5>
            <a href=" https://enegeorge12.github.io/ToDoList/">Link</a>
        </article>
       
       </div>
       <h1 style={{textAlign: "center" , color:"#555555",textDecoration:"none"}} ><a href='https://github.com/Enegeorge12' target={"_blank"}style={{ color:"#555555",textDecoration:"none", }}><span className='red'>Click </span>here for more!</a></h1>
       </>
    )
}