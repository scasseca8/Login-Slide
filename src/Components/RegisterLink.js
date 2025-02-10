import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa6";

export default function RegisterLink({text, textLink}) {
    return (
        <div className="register">
            <p>or Login with</p>
            <div className="register_link">
                <ul>
                    <li><span><FaGoogle/> Google</span></li>
                    <li><span> <CiFacebook/> Facebook</span></li>
                </ul>
            </div>
            <div className="register_">
                <p>{text} <span>{textLink}</span></p>
            </div>
        </div>
    )
}