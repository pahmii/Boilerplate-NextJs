"use client";

import React, { useState } from "react";
import { Search, Plus, MoreVertical, Shield, Mail, User } from "lucide-react";

// Tipe data untuk User
interface UserData {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Member";
  status: "Active" | "Inactive";
  avatar: string;
}

// Data dummy (contoh data pengguna)
const initialUsers: UserData[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    avatar: "JD",
  },
  {
    id: 2,
    name: "Siti Rahma",
    email: "siti@example.com",
    role: "Editor",
    status: "Active",
    avatar: "SR",
  },
  {
    id: 3,
    name: "Budi Santoso",
    email: "budi@example.com",
    role: "Member",
    status: "Inactive",
    avatar: "BS",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    email: "dewi@example.com",
    role: "Editor",
    status: "Active",
    avatar: "DL",
  },
  {
    id: 5,
    name: "Ahmad Fauzi",
    email: "ahmad@example.com",
    role: "Member",
    status: "Active",
    avatar: "AF",
  },
];

export default function UserListPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [users] = useState<UserData[]>(initialUsers);

  // Filter user berdasarkan input pencarian nama atau email
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Manajemen Pengguna
          </h1>
          <p className="text-sm text-gray-500">
            Daftar seluruh pengguna yang terdaftar di dalam sistem.
          </p>
        </div>
        <button
          onClick={() => alert("Fitur tambah user")}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-700 transition">
          <Plus size={18} />
          <span>Tambah Pengguna</span>
        </button>
      </div>

      {/* Kontak Utama (Card Tabel dengan Fitur Cari) */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Baris Filter & Pencarian */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Cari nama atau email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
          </div>
          <div className="text-xs text-gray-500">
            Menampilkan{" "}
            <span className="font-semibold text-gray-800">
              {filteredUsers.length}
            </span>{" "}
            dari {users.length} pengguna
          </div>
        </div>

        {/* Tabel Data User */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <th className="py-3 px-6">Pengguna</th>
                <th className="py-3 px-6">Peran (Role)</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-xs">
                          {user.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-400">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">
                        <Shield size={12} className="text-gray-500" />
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-gray-100 text-gray-600"
                        }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => alert(`Aksi untuk ${user.name}`)}
                        className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="py-8 text-center text-sm text-gray-400">
                    Tidak ada pengguna yang ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
