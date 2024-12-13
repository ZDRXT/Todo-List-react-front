import "./AuthPage.scss"

import RegisterForm from "./registerForm/RegisterForm"
import LoginForm from "./loginForm/LoginForm"
import { useState } from "react"

const AuthPage = (setUser) => {
	const [typeForm, setTypeForm] = useState("login")

	return (
		<main>
			<section className="auth">
				<div className="container">
					<div className="auth_wrapper">
						{
							typeForm === "login" ?
								<>
									<LoginForm setUser={setUser} />
									<p>You don't have account? Go to <button onClick={() => setTypeForm("register")}>Register</button></p>
								</> :
								<>
									<RegisterForm setUser={setUser} />
									<p>You have account? Go to <button onClick={() => setTypeForm("login")}>Login</button></p>
								</>
						}
					</div>
				</div>
			</section>
		</main>
	)
}

export default AuthPage