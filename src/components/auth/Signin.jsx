import { useState } from 'react';
import { auth, registerUser, loginUser, logoutUser } from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import useAuthStore from '../../store/authStore';
import React from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useAuthStore((state) => state.setUser);

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Sign Up</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" placeholder="Password" />
      <button onClick={handleSignup} className="bg-blue-500 text-white py-2 rounded">Sign Up</button>
    </div>
  );
}
