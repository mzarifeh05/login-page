import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Edit() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState(null);

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }
    function handleLastName(e) {
        setLastName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function hanldePhoto(e) {
        setPhoto(e.target.files[0]);
    }

    useEffect(() => {
        const token = localStorage.getItem("userToken");

        if (!token) {
            navigate("/login");
            return;
        }

        fetch(`http://localhost:5000/api/users/me/`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        .then(res => res.json())
        .then(data => {
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setEmail(data.email);
        })
        .catch(error => {
            console.log(error);
            alert("Something went wrong");
        })
    }, []);

    function handleSave(e) {
        e.preventDefault();
        const token = localStorage.getItem("userToken");

        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        if (photo) formData.append("photo", photo);

        fetch(`http://localhost:5000/api/users/me`, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + token,
            },
            body: formData
            // body: JSON.stringify({
            //     firstName: firstName,
            //     lastName: lastName,
            //     email: email
            // })
        })  
        .then(res => res.json())
        .then(data => {
            console.log(data);
            navigate("/profile");
        })
        .catch(() => { alert("Something went wrong") })
    }

    function handleCancel() {
        navigate("/profile")
    }

    return(
        <div className="edit-section">
            <h1>Edit Profile</h1>
            <form method="POST">
                <input required onChange={(e) => handleFirstName(e)} value={firstName} type="text" placeholder="First Name" />
                <br />
                <input required onChange={(e) => handleLastName(e)} value={lastName} type="text" placeholder="Last Name" />
                <br />
                <input required onChange={(e) => handleEmail(e)} value={email} type="email" placeholder="Email" />
                <br />
                <p style={{textAlign: "left", color: "gray", marginBottom: "0"}}>*add a profile picture</p>
                <input accept="image/*" onChange={(e) => hanldePhoto(e)} type="file" />
                <br />
                <div className="buttons">
                    <button onClick={handleSave}>Save</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Edit
