import { signInWithGoogle, signInWithFacebook } from '../../firebase';
import useAuthStore from '../../store/authStore';
import React from 'react';

export default function OAuthButtons() {
  const setUser = useAuthStore((state) => state.setUser);

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      setUser(user);
    } catch (error) {
      console.error("Google Login Error:", error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const user = await signInWithFacebook();
      setUser(user);
    } catch (error) {
      console.error("Facebook Login Error:", error.message);
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <button onClick={handleGoogleLogin} className="bg-red-500 text-white py-2 rounded">Login with Google</button>
      <button onClick={handleFacebookLogin} className="bg-blue-600 text-white py-2 rounded">Login with Facebook</button>
    </div>
  );
}
