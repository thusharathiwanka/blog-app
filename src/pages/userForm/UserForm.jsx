import React from "react";
import { Link } from "react-router-dom";

import "./UserForm.css";
import loginImg from "../../assets/login-register.jpg";

const Login = ({ title }) => {
	return (
		<div className="login-section">
			<img src={loginImg} alt="login-img" />
			<h1>{title}</h1>
			<form>
				<label htmlFor="email">Email</label>
				<input type="email" required />
				<label htmlFor="email">Password</label>
				<input type="password" required />
				<p>
					{title.toUpperCase() === "REGISTER"
						? "Already have an account ? "
						: "Don't have an account ? "}
					<Link
						to={
							title.toUpperCase() === "REGISTER"
								? "/auth/login"
								: "/auth/register"
						}
					>
						{title.toUpperCase() === "REGISTER" ? "Login" : "Register"}
					</Link>
				</p>
				<div className="submit-container">
					<button type="submit">{title}</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
