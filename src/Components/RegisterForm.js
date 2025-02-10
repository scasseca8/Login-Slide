import React from "react";
import Button from "./Button";
import Input from "./Input"
import RegisterLink from "./RegisterLink";


export default function RegisterForm() {
    return (
        // <div className={`register_control ${signinIn ? 'signup': ''}`}>
        <div className="register_control">
            <form action="" className="form_control">
                <h1>SignUp</h1>
                <p>Create an account</p>
                <Input type="text" placeholder="Insira o nome" />
                <Input type="email" placeholder="Insira o email" />
                <Input type="password" placeholder="Insira a Senha" />
                <Button text="Sign Up" />
                <RegisterLink text="Do you have an account ?" textLink="Login" />
            </form>
        </div>
    )
}