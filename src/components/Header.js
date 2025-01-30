import React, { useState, useEffect } from "react";

function Header() {
    const [stickyHeader, setStickyHeader] = useState("");
    const [active, setActive] = useState(false);
    
    useEffect(()=>{
      window.addEventListener("scroll",stickNavbar);
      return ()=>{
        window.removeEventListener("scroll",stickNavbar);
      };
    },[]);
    
    const stickNavbar = ()=>{
      if(window !== undefined){
        let weindowHeight = window.scrollY;
        weindowHeight > 100 ? setStickyHeader("sticky") : setStickyHeader("");
      }
    };

    return(
        <header className={`${stickyHeader}`}>
        <div className="header-inner">
            <span className="logo">Addy</span>
            <div className="links">
                <a className="link" href="#banner">Home</a>
                <a className="link" href="#projects">Projects</a>
                {/* <a className="link" href="#experiences">Experience</a> */}
                <a className="link" href="#certificates">Certificates</a>
                <a className="link" href="#contact">Contact</a>
            </div>
            <span className="menu" onClick={()=>setActive(!active)}>
            <i className="fas fa-bars"></i>
            </span>
        </div>
        <div className={`mobile-links ${active?"active":""}`}>
            <a className="link" onClick={()=>setActive(!active)} href="#banner">Home</a>
            <a className="link" onClick={()=>setActive(!active)} href="#projects">Projects</a>
            <a className="link" onClick={()=>setActive(!active)} href="#certificates">Certificates</a>
            <a className="link" onClick={()=>setActive(!active)} href="">Contact</a>
        </div>
        </header>
    )
}

export default Header;