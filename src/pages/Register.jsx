import { useState } from "react"
import { Link , useNavigate} from "react-router-dom"

function Register() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [confirmPass, setConfirmPass] = useState();

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }
    function handleLastName(e) {
        setLastName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePass(e) {
        setPass(e.target.value);
    }
    function hanldeConfirmPass(e) {
        setConfirmPass(e.target.value);
    }
    function handleSubmit() {
        if (pass === confirmPass)
            alert("True")
        else
            alert("False")
    }

    return (
        <>
            <div className="register">
                <h1>Register Page</h1>
                <form method="POST">
                    <input onChange={(e) => handleFirstName(e)} value={firstName} type="text" placeholder="First Name" />
                    <br />
                    <input onChange={(e) => handleLastName(e)} value={lastName} type="text" placeholder="Last Name" />
                    <br />
                    <input onChange={(e) => handleEmail(e)} value={email} type="email" placeholder="Email" />
                    <br />
                    <input onChange={(e) => handlePass(e)} value={pass} type="password" placeholder="Password" />
                    <br />
                    <input  onChange={(e) => hanldeConfirmPass(e)} value={confirmPass} type="password" placeholder="Confirm Password" />
                    <button>Register</button>
                </form>
                <div className="links">
                    <Link to="/login">login</Link>
                    <Link to="/">home</Link>
                </div>
            </div>
        </>
    )
}

export default Register