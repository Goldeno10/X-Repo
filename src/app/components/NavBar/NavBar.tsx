"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSun, FaMoon, FaUserCircle } from "react-icons/fa";
import { useSession, signOut, signIn } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleTheme = () => setDarkMode(!isDarkMode);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md fixed w-full z-10 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold hover:text-gray-300">
        Study Hub
      </Link>

      {/* Centered Desktop Menu */}
      <div className="flex-1 text-center hidden lg:flex gap-8 justify-center items-center">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/repository" className="hover:text-gray-300">
          Repository
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          Contact
        </Link>
      </div>

      {/* Authentication/User Links on the Far Right */}
      <div className="hidden lg:flex gap-5 items-center">
        {session ? (
          <>
            <Link href="/repository/upload" className="hover:text-gray-300">
              Upload
            </Link>
            <FaUserCircle className="text-2xl" />
            <span>Welcome, {session.user!.name}!</span>
            <button onClick={() => signOut()} className="hover:text-gray-300">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <button onClick={() => signIn()} className="hover:text-gray-300">
              Sign In
            </button>
            <Link href="/register" className="hover:text-gray-300">
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-8 6h8"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-800 lg:hidden mt-4 flex flex-col gap-4 p-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/repository" className="hover:text-gray-300">
            Repository
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          {session ? (
            <>
              <Link href="/repository/upload" className="hover:text-gray-300">
                Upload
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => signIn()}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300"
              >
                Sign In
              </button>
              <Link href="/register" className="hover:text-gray-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
