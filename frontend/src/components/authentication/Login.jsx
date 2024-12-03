import PropTypes from "prop-types"
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function Login({setAuthToken, setLoginUser}) {
    const styles = {
        show: {
            display: "relative",
            left: "90%",
            bottom: "30px",
            cursor: "pointer",
            color: "blue"
        }
    };
    const navigate = useNavigate();
    // form data state
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const toggleShow = () => {
        setShow(!show);
    }

    // handle form data change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // handle clear input fields
    const handleClear = () => {
        setFormData({
            email: "",
            password: "",
        });
    };

    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // send data to backend
        try {
            const response = await fetch("http://localhost:4000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                const { authToken } = data;
                localStorage.setItem("authToken", authToken);
                console.log(data);
                alert("Login successful");
                handleClear();

                navigate("/listing");
            };
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container my-5">
            {/* <h1 className='mb-5 text-danger'>Login Now</h1> */}

            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={(e) => handleChange(e)} />
                    <Form.Text className="text-muted">
                        We&apos;ll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={show ? "text" : "password"} placeholder="Password" value={formData.password} onChange={(e) => handleChange(e)} />
                    <div style={styles.show}>
                        {show ? (
                            <i className="fa fa-eye" aria-hidden="true" onClick={toggleShow}></i>
                        ) : (
                            <i className="fa fa-eye-slash" aria-hidden="true" onClick={toggleShow}></i>
                        )}
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
}

Login.propTypes = {
  setAuthToken: PropTypes.any,
  setLoginUser: PropTypes.any
}

export default Login;