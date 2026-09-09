"use client";

import React, { useState } from "react";
import {
  Shield,
  Plus,
  Check,
  X,
  Users,
  Lock,
  MoreVertical,
} from "lucide-react";

// Tipe Data untuk Role & Permissions
interface RoleData {
  id: number;
  name: string;
  description: string;
  userCount: number;
  permissions: {
    users: boolean;
    analytics: boolean;
    settings: boolean;
    billing: boolean;
  };
}

// Data Dummy Roles
const initialRoles: RoleData[] = [
  {
    id: 1,
    name: "Super Admin",
    description: "Memiliki akses penuh ke seluruh fitur dan pengaturan sistem.",
    userCount: 2,
    permissions: {
      users: true,
      analytics: true,
      settings: true,
      billing: true,
    },
  },
  {
    id: 2,
    name: "Editor",
    description: "Dapat mengelola konten, data pengguna, dan melihat analitik.",
    userCount: 5,
    permissions: {
      users: true,
      analytics: true,
      settings: false,
      billing: false,
    },
  },
  {
    id: 3,
    name: "Member",
    description: "Pengguna biasa dengan akses terbatas ke dashboard utama.",
    userCount: 28,
    permissions: {
      users: false,
      analytics: false,
      settings: false,
      billing: false,
    },
  },
];

export default function RolesPermissionsPage() {
  const [roles] = useState<RoleData[]>(initialRoles);

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Roles & Permissions
          </h1>
          <p className="text-sm text-gray-500">
            Kelola tingkat akses dan hak istimewa untuk setiap peran pengguna.
          </p>
        </div>
        <button
          onClick={() => alert("Fitur tambah role baru")}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-700 transition">
          <Plus size={18} />
          <span>Tambah Peran Baru</span>
        </button>
      </div>

      {/* Grid Kartu Role */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((role) => (
          <div
            key={role.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-semibold">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      {role.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                      <Users size={12} /> {role.userCount} pengguna aktif
                    </span>
                  </div>
                </div>
                <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition">
                  <MoreVertical size={18} />
                </button>
              </div>

              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                {role.description}
              </p>

              {/* Daftar Izin / Permissions */}
              <div className="space-y-2.5 border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Hak Akses Modul:
                </p>
                <PermissionRow
                  label="Manajemen Pengguna"
                  allowed={role.permissions.users}
                />
                <PermissionRow
                  label="Akses Analitik & Grafik"
                  allowed={role.permissions.analytics}
                />
                <PermissionRow
                  label="Pengaturan Sistem"
                  allowed={role.permissions.settings}
                />
                <PermissionRow
                  label="Keuangan & Billing"
                  allowed={role.permissions.billing}
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                Ubah Izin
              </button>
              <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                ID: #{role.id}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Tabel Matriks Izin (Opsional untuk perbandingan detail) */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mt-8">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-base font-semibold text-gray-800">
            Matriks Perbandingan Akses
          </h3>
          <p className="text-xs text-gray-500">
            Ringkasan izin akses berdasarkan peran sistem
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <th className="py-3 px-6">Fitur / Modul</th>
                <th className="py-3 px-6 text-center">Super Admin</th>
                <th className="py-3 px-6 text-center">Editor</th>
                <th className="py-3 px-6 text-center">Member</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
              <MatrixRow
                feature="Melihat Dashboard Utama"
                superAdmin={true}
                editor={true}
                member={true}
              />
              <MatrixRow
                feature="Kelola Data Pengguna (CRUD)"
                superAdmin={true}
                editor={true}
                member={false}
              />
              <MatrixRow
                feature="Melihat Laporan Analitik"
                superAdmin={true}
                editor={true}
                member={false}
              />
              <MatrixRow
                feature="Ubah Pengaturan Sistem"
                superAdmin={true}
                editor={false}
                member={false}
              />
              <MatrixRow
                feature="Akses Menu Billing"
                superAdmin={true}
                editor={false}
                member={false}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// --- Komponen Pendukung ---

const PermissionRow: React.FC<{ label: string; allowed: boolean }> = ({
  label,
  allowed,
}) => (
  <div className="flex items-center justify-between text-xs">
    <span className="text-gray-600">{label}</span>
    {allowed ? (
      <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
        <Check size={14} /> Ya
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 text-gray-400">
        <X size={14} /> Tidak
      </span>
    )}
  </div>
);

const MatrixRow: React.FC<{
  feature: string;
  superAdmin: boolean;
  editor: boolean;
  member: boolean;
}> = ({ feature, superAdmin, editor, member }) => (
  <tr className="hover:bg-gray-50/50 transition">
    <td className="py-4 px-6 font-medium text-gray-900">{feature}</td>
    <td className="py-4 px-6 text-center">
      {superAdmin ? (
        <Check size={18} className="text-emerald-600 mx-auto" />
      ) : (
        <X size={18} className="text-gray-300 mx-auto" />
      )}
    </td>
    <td className="py-4 px-6 text-center">
      {editor ? (
        <Check size={18} className="text-emerald-600 mx-auto" />
      ) : (
        <X size={18} className="text-gray-300 mx-auto" />
      )}
    </td>
    <td className="py-4 px-6 text-center">
      {member ? (
        <Check size={18} className="text-emerald-600 mx-auto" />
      ) : (
        <X size={18} className="text-gray-300 mx-auto" />
      )}
    </td>
  </tr>
);
