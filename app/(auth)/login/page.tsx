"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setError("Username dan password wajib diisi");
      return;
    }

    setError("");
    setLoading(true);

    // simulasi request API
    setTimeout(() => {
      setLoading(false);
      setError("Login gagal. Periksa kembali akun Anda.");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center
      bg-linier-to-br from-emerald-50 via-white to-emerald-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl
        shadow-lg border border-gray-200 p-8
        transition-all duration-300 hover:shadow-xl fade-in">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Internal System Login
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Masuk untuk melanjutkan ke dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Username */}
          <div className="relative">
            <input
              type="text"
              required
              placeholder=" "
              className="peer w-full px-4 pt-5 border rounded-xl border-slate-300
              text-gray-800 outline-none transition
              focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              value={form.username}
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
            />
            <label
              className="absolute left-4 top-2 text-xs text-gray-500
              transition-all
              peer-placeholder-shown:top-3.5
              peer-placeholder-shown:text-sm
              peer-placeholder-shown:text-gray-400
              peer-focus:top-2
              peer-focus:text-xs
              peer-focus:text-emerald-600"
            >
              Username
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder=" "
              className="peer w-full px-4 pt-5 pr-10 border rounded-xl border-slate-300
    text-gray-800 outline-none transition
    focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <label
              className="absolute left-4 top-2 text-xs text-gray-500
    transition-all
    peer-placeholder-shown:top-3.5
    peer-placeholder-shown:text-sm
    peer-placeholder-shown:text-gray-400
    peer-focus:top-2
    peer-focus:text-xs
    peer-focus:text-emerald-600"
            >
              Password
            </label>

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-gray-400 
    hover:text-emerald-600 transition duration-200 active:scale-90"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="text-sm text-red-600 bg-red-50
              border border-red-200 rounded-lg px-3 py-2">
              {error}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-xl bg-emerald-600
            text-white font-medium shadow-md
            hover:bg-emerald-700 transition
            disabled:opacity-60 disabled:cursor-not-allowed
            flex items-center justify-center"
          >
            {loading && (
              <span className="h-4 w-4 mr-2 border-2 border-white
              border-t-transparent rounded-full animate-spin" />
            )}
            {loading ? "Memproses..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-sm text-center text-gray-500">
          Belum punya akun?{" "}
          <Link
            href="/register"
            className="text-emerald-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}