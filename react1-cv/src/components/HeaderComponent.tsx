import React from 'react';
import styled from "styled-components";



export default function Header(){
    return(
      <header >
          <a href="./index.html"><i className="fa fa-user-circle red"></i>Ene George</a>
         <div>
             <a href="#section1">About</a>
              <a href="#section2">Portofolio</a>
              <a href="#section1">Study</a>
              <a href="#section1">Contact</a>
         </div>
      </header>
    )
}
