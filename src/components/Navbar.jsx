import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-warning ">
                <div class="container-fluid">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/FISAT_LOGO.png" alt="Logo" width="155" height="130" class="d-inline-block align-text-top"></img>
                    <a class="navbar-brand text-primary fw-bold fs-3"><center>FISAT EVENT MANAGEMENT SYSTEM</center></a>
                   
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <ul class="nav justify-content-right">
                        <li class="nav-item">
                            <div class="header-right" >
                            <p align = "right">Are you an organiser <a class="nav-link" href="/admn" >signin</a></p>
                            </div>
                            
                        </li>

                    </ul>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">


                        </ul>
                        
                    </div>
                </div>
            </nav>
            <hr class="border border-primary border-1 opacity-50"></hr>
        </div>

    )
}

export default Navbar