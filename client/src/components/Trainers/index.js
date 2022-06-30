import React from "react";
import { link } from "react-router-dom";

function Trainers() {
    return (
        <div className="trainers">

            <div className="trainers-title">
            <h1>Meet the Trainers!</h1>
            </div>
        <div className="trainer-container">
        <div className="trainers-card mx-3">
            <div className="img-container">
            </div>
            <h3>
                Hi my name is who, my name is what, my name is chicka chicka slim shady
            </h3>
        </div>

        <div className="trainers-card mx-3">
        <div className="img-container">      
            </div>
            <h3>
                Hi my name is who, my name is what, my name is chicka chicka slim shady
            </h3>  
        </div>

        <div className="trainers-card mx-3">
        <div className="img-container"> 
            </div>
            <h3>
                Hi my name is who, my name is what, my name is chicka chicka slim shady
            </h3>  
        </div>
        </div>

        </div>
    ); 
}

export default Trainers;