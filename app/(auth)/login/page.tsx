"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-gray-100 min-h-screen">
      <div className="mb-8">
        <img src="/Logo.png" alt="Workify logo" className="inline-block w-20" />
        <span className="text-2xl font-semibold text-gray-800 ml-2">
          CareerHub
        </span>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] md:w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border rounded-lg bg-blue-100"
              placeholder="name@email.com"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full p-3 border rounded-lg bg-blue-100 pr-12"
                placeholder="********"
                name="password"
                minLength={8}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-800"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 mt-6">
          don't have an account?
          <Link
            href={"/register"}
            className="text-blue-600 ml-1 hover:border-b-2 hover:border-blue-600 cursor-pointer"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
