
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from './AuthProvider';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200 py-3 px-4 md:px-6 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary-600">FruitVision</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`${location.pathname === '/' ? 'text-primary-600 font-medium' : 'text-gray-600 hover:text-primary-600'} transition-colors`}>
            Home
          </Link>
          {user && (
            <Link to="/dashboard" className={`${location.pathname === '/dashboard' ? 'text-primary-600 font-medium' : 'text-gray-600 hover:text-primary-600'} transition-colors`}>
              Dashboard
            </Link>
          )}
          <Link to="/about" className={`${location.pathname === '/about' ? 'text-primary-600 font-medium' : 'text-gray-600 hover:text-primary-600'} transition-colors`}>
            About
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          {user ? (
            <>
              <span className="hidden md:inline text-sm text-gray-600">Hello, {user.name}</span>
              <Button variant="outline" onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
