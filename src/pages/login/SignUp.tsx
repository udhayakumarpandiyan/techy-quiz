import React, { useState } from "react";
import axios from "axios";
const payload = {
    username: "",
    hash: "",
    email: "",
    mobile: "",
    team:
    {
        id: "",
        name: "",
        members: [{
            id: "",
            name: "",
        }]
    },
    joinedOnDate: new Date(),
    profileScore: 0,
    lastQuizScore: 0,
    lastActiveDate: new Date(),
    totalQuizzesCompleted: {
        single: {
            totalContested: 0,
            score: 0,
        },
        directContest: {
            totalContested: 0,
            score: 0,
        },
        tournament: {
            totalContested: 0,
            score: 0,
        },
        teamTourament: {
            totalContested: 0,
            score: 0,
        },
        teamContest: {
            totalContested: 0,
            score: 0,
        }
    }
}

const SignUp = () => {
    const [formData, setFormData] = useState<any>(() => payload);
    // State for form errors
    const [errors, setErrors] = useState<any>(() => {
        return { username: '', password: '', email: '' };
    });

    // Handle input change
    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate the form
    const validateForm = () => {
        let errors: any = {};
        if (!formData.username.trim()) {
            errors.username = "Username is required";
        }
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        if (!formData.password) {
            errors.password = "Password is required";
        } else if (formData.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }
        return errors;
    };

    // Handle form submission
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:5000/api/user/register', formData).then((response) => {
                console.log("Res", response);
            }).catch((err) => {
                console.log("Err", err);
            });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && (
                        <p style={{ color: "red" }}>{errors.password}</p>
                    )}
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
