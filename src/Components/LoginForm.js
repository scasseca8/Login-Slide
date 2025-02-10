import React from "react";
import Button from "./Button";
import Input from "./Input"
import RegisterLink from "./RegisterLink";


export default function LoginForm() {
    return (
       <div className="login_control">
            <form action="" className="form_control">
                <h1>Login</h1>
                <p>Please login to your account</p>
                <Input type="email" placeholder="Insira o email" />
                <Input type="password" placeholder="Insira a Senha" />
                <div className="forgot_pass">
                    <span className="forgot">Forgot Password?</span>
                </div>
                <Button text="Sign In" />
                <RegisterLink text="Don't have an account ?" textLink="Sign Up" />
            </form>

        </div>
    )
}