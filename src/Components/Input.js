import React from "react";

export default function Input({type, placeholder}){
    return(
        <div className="input_box">
            <input type={type} placeholder={placeholder} required/>
        </div>
    )

}