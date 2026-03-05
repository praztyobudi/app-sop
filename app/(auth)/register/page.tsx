"use client";

import Link from "next/link";
import { useState } from "react";

const departments = ["IT", "HR", "Finance", "Marketing", "Operations"];

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    departemen: "",
    role: "User",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8 fade-in">

        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Create Account
          </h1>
          <p className="text-sm text-gray-500">
            Daftarkan akun internal baru
          </p>
        </div>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-xl border-slate-300
            text-gray-800 placeholder-gray-400
            focus:ring-2 focus:ring-emerald-500 outline-none transition"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-xl border-slate-300
            text-gray-800 placeholder-gray-400
            focus:ring-2 focus:ring-emerald-500 outline-none transition"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-xl border-slate-300
            text-gray-800 placeholder-gray-400
            focus:ring-2 focus:ring-emerald-500 outline-none transition"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <select
            className="w-full px-4 py-2 border rounded-xl border-slate-300
            text-gray-500 focus:ring-2 focus:ring-emerald-500 
            outline-none transition bg-white"
            value={form.departemen}
            onChange={(e) =>
              setForm({ ...form, departemen: e.target.value })
            }
          >
            <option value="">Pilih Departemen</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-emerald-600 
            text-white font-medium shadow-md
            hover:bg-emerald-700 transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="text-emerald-600 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}