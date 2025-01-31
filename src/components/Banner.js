import React from "react";
import resume from './Resume.pdf';

//testing pass ke required or not
function Banner() {
    return(
        <section className="banner" id="banner">
            <div className="container">
                <div className="banner-wrapper">
                    <div className="banner-img">
                        <img src="Profile_picture_1.png" alt=""></img>
                    </div>
                    <div className="banner-content">
                        <h6>Hello, I am Aditya Kamble</h6> 
                        <span>a</span><h3>Web Developer</h3>
                        <p> who loves turning ideas into interactive, visually stunning experiences. Whether it's building sleek React apps or crafting 3D web magic with Three.js, I'm all about pushing the limits of what's possible online. <b>Let’s create something awesome together!</b></p>
                        <div className="buttons">
                        <a className="btn" href={resume} download="Aditya Kamble"><i class="fa-solid fa-file-lines"></i>Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;