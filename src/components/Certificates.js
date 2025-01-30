import React, { useState } from "react";

function Certificates(){
    const [certificates] = useState([
        {
            Title:"OCI Foundation Associate",
            logo:"oracle.png",
            provider:"Oracle University",
            desc:"The certificate demonstrates fundamental knowledge of public cloud services provided by Oracle Cloud Infrastructure"
        },
        {
            Title:"12 Factor App",
            logo:"kodekloud.png",
            provider:"KodeKlousd",
            desc:"The certificate provides a set of best practices for building cloud-native applications that are scalable, resilient, and easy to maintain."
        }
    ]);
    return(
        <div className="certificates" id="certificates">
        <div className="container">
            <h3>Certificates</h3>
            <div className="certificates-wrapper">
            {certificates.map((certificate,i)=>{
                return(
                    <div className="certificate">
                        <img src={certificate.logo} alt="logo"></img>
                        <h4>{certificate.Title}</h4>
                        <p>{certificate.desc}</p>
                        <p>By {certificate.provider}</p>
                        <button className="btn">Know more</button>
                    </div>
                )
            })}
            </div>
        </div>
        </div>
    );
}
export default Certificates;