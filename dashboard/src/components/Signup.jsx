import React, { useState } from 'react';
import "../styles/signup.css";
import { register } from "./../lib/firebase/auth";
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [income, setIncome] = useState('');
  const [age, setAge] = useState('');
  const [retirementIncome, setRetirementIncome] = useState('');
  const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await register(name, email, password, age, income, retirementIncome);

      console.log("Registration successful!");

        navigate('/dashboard');
    } catch (error) {
      console.error("Error during registration", error);
    }
  };

  return (
    <div className="signup-card">
      <h2 className='signup-header'>SIGNUP FORM</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="Income" required />
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
        <input type="number" value={retirementIncome} onChange={(e) => setRetirementIncome(e.target.value)} placeholder="Retirement Income" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;

