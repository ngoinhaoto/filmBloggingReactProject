"use client";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-3xl font-bold text-purple-800 hover:text-purple-600 font-['Courier']"
            >
              MovieMuncher
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="py-2 px-4 bg-purple-600 text-white rounded-r-md hover:bg-purple-700 focus:outline-none">
                Search
              </button>
            </div>

            {/* Conditional buttons based on login status */}
            {isLoggedIn ? (
              // If logged in, show avatar and new post button
              <div className="flex items-center space-x-4 ml-4 md:ml-6">
                <div className="flex-shrink-0">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none">
                  New Post
                </button>
              </div>
            ) : (
              // If not logged in, show sign up and sign in buttons
              <div className="hidden md:flex items-center space-x-4">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none">
                  <a href="/signup">Sign Up</a>
                </button>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none">
                  <a href="/signin">Sign In</a>
                </button>
              </div>
            )}

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-gray-100 py-4 px-2 md:hidden">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-4 border border-gray-300 rounded focus:outline-none w-full"
              />
              <div className="mt-4 space-y-2">
                <button className="block w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none">
                  <a href="/signup">Sign Up</a>
                </button>
                <button className="block w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none">
                  <a href="/signin">Sign In</a>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
