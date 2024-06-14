"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import Image from "next/image";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { token, login } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const [inputError, setInputError] = useState<Boolean>(false);

  useEffect(() => {
    if (token) {
      router.push(`/${locale}/team`);
    }
  }, [token, router, locale]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      router.push(`/${locale}/team`);
    } catch (err) {
      setError("Invalid username or password");
      setInputError(true);
      setTimeout(() => setInputError(false), 800);
    }
  };

  return (
    <div className="sm:min-h-screen min-h-[90vh] p-4 flex items-center justify-center">
      <div
        className={`bg-white dark:bg-zinc-800 shadow-md rounded-lg p-8 max-w-md w-full border-2 ${
          inputError ? "border-red-500 shake" : "border-[#e2e8f000]"
        } `}
      >
        <div className="flex justify-center mb-6">
          <Image
            src="/YTUBC.png"
            alt="YTUBC Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Team Login
        </h2>
        {token ? (
          <div className="text-center">
            <p className="text-green-500">
              logged in successfully. Redirecting to admin page...
            </p>
            <p>
              If you are not redirected automatically, click{" "}
              <a href={`/${locale}/team`} className="text-blue-500 underline">
                here
              </a>
              .
            </p>
          </div>
        ) : (
          <>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className={`space-y-4 `}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-gray-700 dark:text-gray-300"
                >
                  Username
                </label>
                <input
                  autoComplete="username"
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  autoComplete="current-password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              >
                Login
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
