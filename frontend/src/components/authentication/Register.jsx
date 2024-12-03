import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function Register() {
    const styles = {
        show: {
            display: "relative",
            left: "90%",
            bottom: "20px",
            cursor: "pointer",
            justifyContent: "space-between",
            color: "blue" 
        }
    }

    const navigate = useNavigate();

    // form data state
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
    });
    // handle form data change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const toggleShow = () => {
        setShow(!show);
    };

    const handleClear = () => {
        setFormData({
            name: "",
            userName: "",
            email: "",
            password: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // send form data to server
        try {
            const response = await fetch("http://localhost:4000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                alert("Registration successful");
                handleClear();
                navigate("/login");
            }
            
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
        
    return (
        <div className=" my-3 container-fluid">
                <h1 className="mb-5 text-danger">New User Registration</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Your Fullname</Form.Label>
                    <Form.Control type="text" placeholder="Enter Fullname" value={formData.name} onChange={(e) => handleChange(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="userName">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" placeholder="Enter UserName" value={formData.userName} onChange={(e) => handleChange(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={(e) => handleChange(e)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={show ? "text" : "password"} placeholder="Password" value={formData.password} onChange={(e) => handleChange(e)} />
                    <div style={styles.show}>
                        {show ? (
                            <p onClick={toggleShow}>Hide</p>
                        ) : (
                            <p onClick={toggleShow}>Show</p>
                        )};
                        
                    </div>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {loading ? <ClipLoader color="white" /> : "Register"}
                </Button>
            </Form>
        </div>
    );
}

export default Register;