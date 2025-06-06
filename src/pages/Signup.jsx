import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { registerUser } from '../firebase';
import useAuthStore from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const setUser = useAuthStore((s) => s.setUser);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const user = await registerUser(email, password);
      setUser(user);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 pt-24">
      <h2 className="text-2xl mb-4 font-bold text-center">Signup</h2>
      <CustomInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <CustomInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="text-red-500">{error}</p>}
      <CustomButton onClick={handleSubmit}>Signup</CustomButton>
    </div>
  );
};

export default Signup;
