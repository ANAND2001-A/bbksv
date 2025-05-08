import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, registerUser, loginUser, logoutUser } from "../../firebase";
import useAuthStore from '../../store/authStore';
import OAuthButtons from './OAuthButtons';
import React from 'react';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Log In</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" placeholder="Password" />
      <button onClick={handleLogin} className="bg-green-500 text-white py-2 rounded">Login</button>
      <OAuthButtons />
    </div>
  );
}
