import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const navigate = useNavigate()

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePass(e) {
        setPass(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: pass
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            navigate("/");
        })
        
    }


    return (
        <>
            <div className="login">
                <h1>Login Page</h1>
                <form method="POST">
                    <input onChange={(e) => handleEmail(e)} type="email" placeholder="email" />
                    <br />
                    <input onChange={(e) => handlePass(e)}  type="password" placeholder="password" />
                </form>
                <br />
                <div className="links">
                    <Link to="/register">register</Link>
                    <Link to="/">home</Link>
                </div>
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Login