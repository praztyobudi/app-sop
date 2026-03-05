"use client";

import { useState } from "react";
import { Pencil, KeyRound, Trash2 } from "lucide-react";

export default function UserManagementPage() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ahmad Fauzi",
      username: "afauzi",
      departemen: "IT",
      role: "Admin",
    },
    {
      id: 2,
      name: "Siti Rahma",
      username: "srahma",
      departemen: "HR",
      role: "User",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    departemen: "",
    role: "User",
  });

  const handleAdd = () => {
    if (!form.name || !form.username) return;

    setUsers([
      ...users,
      { id: Date.now(), ...form },
    ]);

    setForm({
      name: "",
      username: "",
      password: "",
      departemen: "",
      role: "User",
    });
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const departments = [
    "IT",
    "HR",
    "Finance",
    "Marketing",
    "Operations",
  ];

  return (
    <div className="px-4 space-y-2">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-700">
          Account Control Management
        </h1>
        <p className="text-sm text-gray-500">
          Kelola akun pengguna internal kantor
        </p>
      </div>

      {/* FORM CARD */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4 text-slate-700">Add / Edit User</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-slate-300"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-slate-300"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-slate-300"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <select
            className="px-4 py-2 text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-slate-300 bg-white"
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

          <select
            className="px-4 py-2 text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-slate-300"
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="mt-4 flex gap-3">
          <button
            onClick={handleAdd}
            className="px-6 py-2 bg-emerald-600 text-white rounded-xl shadow-md hover:bg-emerald-700 transition"
          >
            Save User
          </button>

          <button
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition"
          >
            Clear
          </button>
        </div>
      </div>

      {/* USER LIST */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4 text-slate-700">User List</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="text-slate-700 border-b">
              <tr>
                <th className="py-2">Name</th>
                <th>Username</th>
                <th>Departemen</th>
                <th>Role</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50 transition text-slate-700 border-slate-200"
                >
                  <td className="py-2">{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.departemen}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${user.role === "Admin"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-gray-200 text-gray-600"
                        }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="text-right">
                    <div className="flex justify-end gap-2">

                      {/* Edit */}
                      <button
                        className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                        title="Edit User"
                      >
                        <Pencil size={16} />
                      </button>

                      {/* Reset Password */}
                      <button
                        className="p-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition"
                        title="Reset Password"
                      >
                        <KeyRound size={16} />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                        title="Delete User"
                      >
                        <Trash2 size={16} />
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {users.length === 0 && (
            <p className="text-center text-gray-400 py-6">
              No users available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}