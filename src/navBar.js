import React from "react";
import "./navBar.css";

 export default function NavBar(){
     return(
                  
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a 
              class="nav-link" 
              aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/work.html">My work</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
     );
 }