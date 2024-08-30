import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu, Search } from "lucide-react";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

const Header = ({ authscreen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const { setContentType } = useContentStore();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20">
      {authscreen && (
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="logo" className="w-32 sm:w-40" />
        </Link>
      )}
      {!authscreen && (
        <div className="flex items-center gap-10 z-50">
          <Link to={"/"}>
            <img src="/netflix-logo.png" alt="logo" className="w-32 sm:w-40" />
          </Link>
          {/* DEshtop navbar items */}

          <div className="hidden sm:flex gap-2 items-center">
            <Link
              to={"/"}
              className=" hover:underline"
              onClick={() => setContentType("movie")}
            >
              Movies
            </Link>
            <Link
              to={"/"}
              className=" hover:underline"
              onClick={() => setContentType("tv")}
            >
              Tv Shows
            </Link>
            <Link to={"/history"} className=" hover:underline">
              Search History
            </Link>
          </div>
        </div>
      )}
      {!authscreen && (
        <div className="flex gap-2 items-center z-50">
          <Link to="/search">
            <Search className="s-6 cursor-pointer" />
          </Link>
          <img
            src={user?.image}
            alt="Avatar"
            className="h-8 rounded cursor-pointer"
          />
          <LogOut
            className="s-6 cursor-pointersize-6 cursor-pointer"
            onClick={logout}
          />
          <div className="sm:hidden">
            <Menu className="s-6 cursor-pointer" onClick={toggleMobileMenu} />
          </div>
        </div>
      )}

      {/* Mobile navbar items */}
      {isMobileMenuOpen && !authscreen && (
        <div className="w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800">
          <Link
            to="/"
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}
          >
            Movies
          </Link>
          <Link
            to="/"
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}
          >
            Tv Shows
          </Link>
          <Link
            to="/history"
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}
          >
            Search History
          </Link>
        </div>
      )}

      {authscreen && (
        <Link to={"/login"} className="text-white bg-red-600 py-1 px-2 rounded">
          Sign In
        </Link>
      )}
    </header>
  );
};

export default Header;
