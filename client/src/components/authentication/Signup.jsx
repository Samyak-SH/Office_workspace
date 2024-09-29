import React, { useEffect, useState } from 'react';

const SERVER_PORT = import.meta.env.VITE_SERVER_PORT;

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'employee', // default to employee
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:${SERVER_PORT}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the Content-Type header
            },
            body: JSON.stringify(formData), // Stringify the formData
        });
        console.log(response);
        
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Role:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="boss"
                                checked={formData.role === 'boss'}
                                onChange={handleChange}
                            />
                            Boss
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="employee"
                                checked={formData.role === 'employee'}
                                onChange={handleChange}
                            />
                            Employee
                        </label>
                    </div>
                </div>

                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
