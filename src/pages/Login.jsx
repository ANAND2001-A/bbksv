import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { loginUser } from '../firebase';
import useAuthStore from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const setUser = useAuthStore((s) => s.setUser);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const user = await loginUser(email, password);
      setUser(user);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>
      <CustomInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <CustomInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="text-red-500">{error}</p>}
      <CustomButton onClick={handleSubmit}>Login</CustomButton>
    </div>
  );
};

export default Login;
