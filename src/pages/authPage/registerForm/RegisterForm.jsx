import { registerUser } from "../../../api/users-service"
import { useState } from "react"


const RegisterForm = () => {
    const [registerInps, setRegisterInput] = useState({
        author: "",
        password: "",
        email: ""
    })
    
    const [ formMessage, setFormMessage ] = useState("")

    const sendForm = (event) => {
        registerUser(registerInps).then(data => {
            console.log(data)
        })
        .catch(err => {
            setFormMessage("This user already exist")

            setTimeout(() => {
                setFormMessage("")
            }, 2000)
        })
    }

    return (
        <form onSubmit={sendForm}>
            <h2>Register</h2>
            <input
                required
                type="text" 
                placeholder="login"
                value={registerInps.author}
                onChange={(e) => setRegisterInput(prev => ({ ...prev, author: e.target.value }))}
            />

            <input
                required
                type="password" 
                placeholder="password"
                value={registerInps.password}
                onChange={(e) => setRegisterInput(prev => ({ ...prev, password: e.target.value }))}
            />

            <input
                required
                type="email" 
                placeholder="email"
                value={registerInps.email}
                onChange={(e) => setRegisterInput(prev => ({ ...prev, email: e.target.value }))}
            />

            {formMessage && <p style={{color: red}}>{formMessage}</p>}

            <button>Register</button>
        </form>
    )
}


export default RegisterForm