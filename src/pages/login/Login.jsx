import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";
import loginImg from "../../assets/login-register.jpg";

const Login = () => {
	return (
		<div className="login-section">
			<img src={loginImg} alt="login-img" />
			<h1>Login</h1>
			<form>
				<label htmlFor="email">Email</label>
				<input type="email" required />
				<label htmlFor="email">Password</label>
				<input type="password" required />
				<p>
					Don't have an account ? <Link to="/auth/register">Register</Link>
				</p>
				<div className="submit-container">
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
