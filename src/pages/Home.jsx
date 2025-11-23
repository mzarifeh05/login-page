import { Link } from "react-router-dom"

function Home() {

    return (
        <>
            <h1>Home Page</h1>
            <Link to="/login">login</Link>
            <br />
            <Link to="/register">register</Link>
        </>
    )
}

export default Home