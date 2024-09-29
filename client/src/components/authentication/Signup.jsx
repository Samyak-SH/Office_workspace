import React, { useEffect, useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'employee', // default to employee
  });

  useEffect(()=>{
    console.log(formData);
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Form submitted:', formData);
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
