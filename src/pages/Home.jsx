import { Link } from "react-router-dom"

function Home() {

    return (
        <>
            <div className="home">
                <h1>Welcome 👋</h1>
                <p>Your simple React authentication demo</p>

                <div className="home-buttons">
                    <Link to="/login" className="home-btn">Login</Link>
                    <Link to="/register" className="home-btn">Register</Link>
                </div>
            </div>
        </>
    )
}

export default Home
