import { Outlet } from 'react-router-dom';
import useAuthStore from '../store/authStore';  // Zustand store

export default function AuthLayout() {
  const user = useAuthStore((state) => state.user);

  // Redirect if user is logged in
  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Outlet />
    </div>
  );
}
