import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import useAuthStore from '../store/useAuthStore';
import Navbar from '../components/Navbar';

export default function AuthLayout({ children }) {
  const setUser = useAuthStore((state) => state.setUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold text-blue-500">
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
    </>
  );
}
