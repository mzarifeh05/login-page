import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const navigate = useNavigate();

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
            localStorage.setItem("uesrToken", data.token);
            console.log(data);
            navigate("/");
        })
        .catch(() => {alert("user not found")})
        setEmail("");
        setPass("");
    }


    return (
        <>
            <div className="login">
                <h1>Login Page</h1>
                <form method="POST">
                    <input onChange={(e) => handleEmail(e)} value={email} type="email" placeholder="Email" />
                    <br />
                    <input onChange={(e) => handlePass(e)} value={pass}  type="password" placeholder="Password" />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
                <br />
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                </div>
                <br />
            </div>
        </>
    )
}

export default Login