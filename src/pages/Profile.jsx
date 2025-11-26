import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import profilePlaceholder from "../assets/profile.png";


function Profile() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("First Name");
    const [lastName, setLastName] = useState("Last Name");
    const [email, setEmail] = useState("example@gmail.com");
    const [imageUrl, setPhoto] = useState();

    useEffect(() => {
        const token = localStorage.getItem("userToken");

        
        console.log("Token:", token);
        console.log("imageUrl:", imageUrl);
        if (!token) {
            navigate("/login");
            return;
        }

        fetch(`http://localhost:5000/api/users/me`,{
             method: "GET" ,
            headers: {
                "Authorization": "Bearer " + token,
            }
        }
        )
        .then(res => res.json())
        .then(data => {
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setEmail(data.email);
            setPhoto(data.imageUrl);
        })
        .catch(error => {
            console.log(error);
            alert("Something went wrong");
        })
    }, []);

    function logout() {
        localStorage.removeItem("userToken");
        navigate("/login");
    }

    function navigateEdit() {
        navigate("/edit");
    }

    const resolvedImageSrc = imageUrl
        ? (imageUrl.startsWith("http") ? imageUrl : `http://localhost:5000/${imageUrl}`)
        : profilePlaceholder;

    return (
        <div className="profile-container">
            <div className="profile">
                <div className="upper">
                    <img src={resolvedImageSrc} alt="profile-pic" />
                    <button onClick={navigateEdit}>Edit Info</button>
                </div>
                <div className="text">
                    <h1>{firstName} {lastName}</h1>
                    <h4>{email}</h4>
                </div>
            </div>
            <div className="profile-buttons">
                    <button  className="home-btn"><Link to="/">Home</Link></button>
                    <button className="home-btn" onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default Profile;
