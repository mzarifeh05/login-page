import { Link } from "react-router-dom"

function Register() {

    return (
        <>
            <h1>Register Page</h1>
            <Link to="/login">login</Link>
            <br />
            <Link to="/">home</Link>
        </>
    )
}

export default Register