"use client";

import React, { useState } from "react";
import { User, Lock, Bell, Sliders, Save, CheckCircle2 } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<
    "profile" | "security" | "notifications" | "system"
  >("profile");
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // Fungsi simulasi simpan perubahan
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000); // Hilangkan notifikasi setelah 3 detik
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Halaman */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Pengaturan Sistem</h1>
        <p className="text-sm text-gray-500">
          Kelola informasi profil akun, keamanan, dan preferensi aplikasi Anda.
        </p>
      </div>

      {/* Notifikasi Sukses Simpan */}
      {isSaved && (
        <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm animate-fade-in shadow-sm">
          <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
          <span>
            Perubahan berhasil disimpan! Pengaturan Anda telah diperbarui.
          </span>
        </div>
      )}

      {/* Layout Utama dengan Tab Samping/Atas */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Navigasi Tab */}
        <div className="lg:col-span-1 space-y-1 bg-white p-2 rounded-xl border border-gray-200 shadow-sm h-fit">
          <TabButton
            active={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
            icon={<User size={18} />}
            label="Profil Akun"
          />
          <TabButton
            active={activeTab === "security"}
            onClick={() => setActiveTab("security")}
            icon={<Lock size={18} />}
            label="Keamanan & Sandi"
          />
          <TabButton
            active={activeTab === "notifications"}
            onClick={() => setActiveTab("notifications")}
            icon={<Bell size={18} />}
            label="Notifikasi"
          />
          <TabButton
            active={activeTab === "system"}
            onClick={() => setActiveTab("system")}
            icon={<Sliders size={18} />}
            label="Preferensi Sistem"
          />
        </div>

        {/* Konten Form Berdasarkan Tab */}
        <div className="lg:col-span-3 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <form onSubmit={handleSave}>
            {/* TAB 1: PROFIL AKUN */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-gray-800">
                    Informasi Profil
                  </h3>
                  <p className="text-xs text-gray-500">
                    Perbarui foto dan detail informasi pribadi Anda.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-inner">
                    JD
                  </div>
                  <div>
                    <button
                      type="button"
                      className="px-3.5 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-lg shadow-sm hover:bg-gray-50 transition">
                      Ganti Foto
                    </button>
                    <p className="text-[10px] text-gray-400 mt-1">
                      Format JPG, PNG atau GIF. Maksimal ukuran 2MB.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Nama Depan
                    </label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Nama Belakang
                    </label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Bio / Peran Singkat
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="Administrator sistem dengan pengalaman manajemen teknologi informasi."
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"></textarea>
                </div>
              </div>
            )}

            {/* TAB 2: KEAMANAN & SANDI */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-gray-800">
                    Keamanan Akun
                  </h3>
                  <p className="text-xs text-gray-500">
                    Ubah kata sandi dan tingkatkan keamanan akun Anda.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Kata Sandi Saat Ini
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Kata Sandi Baru
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Konfirmasi Kata Sandi Baru
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Autentikasi Dua Faktor (2FA)
                    </p>
                    <p className="text-xs text-gray-500">
                      Amankan akun menggunakan kode verifikasi tambahan.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {/* TAB 3: NOTIFIKASI */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-gray-800">
                    Preferensi Notifikasi
                  </h3>
                  <p className="text-xs text-gray-500">
                    Pilih jenis pemberitahuan yang ingin Anda terima.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <ToggleOption
                    title="Notifikasi Email"
                    description="Terima laporan ringkasan mingguan melalui email terdaftar."
                    defaultChecked={true}
                  />
                  <ToggleOption
                    title="Pemberitahuan Sistem (Push Notification)"
                    description="Peringatan instan saat terjadi aktivitas penting pada sistem."
                    defaultChecked={true}
                  />
                  <ToggleOption
                    title="Pembaruan & Promo"
                    description="Informasi seputar fitur baru, tips, dan penawaran khusus."
                    defaultChecked={false}
                  />
                </div>
              </div>
            )}

            {/* TAB 4: PREFERENSI SISTEM */}
            {activeTab === "system" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-gray-800">
                    Preferensi Tampilan & Sistem
                  </h3>
                  <p className="text-xs text-gray-500">
                    Sesuaikan bahasa, zona waktu, dan tampilan tema aplikasi.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Bahasa
                    </label>
                    <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition bg-white">
                      <option>Bahasa Indonesia</option>
                      <option>English (US)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Zona Waktu
                    </label>
                    <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition bg-white">
                      <option>(GMT+07:00) Jakarta, Bangkok</option>
                      <option>(GMT+08:00) Makassar, Singapura</option>
                      <option>(GMT+09:00) Jayapura</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Tema Tampilan
                  </label>
                  <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition bg-white">
                    <option>Terang (Light Mode)</option>
                    <option>Gelap (Dark Mode)</option>
                    <option>Ikuti Sistem (Auto)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Tombol Simpan Global */}
            <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-700 transition">
                <Save size={16} />
                <span>Simpan Perubahan</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// --- Komponen Pendukung ---

const TabButton: React.FC<{
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}> = ({ active, onClick, icon, label }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex items-center gap-3 w-full px-3.5 py-2.5 rounded-lg text-sm font-medium transition text-left ${
      active
        ? "bg-blue-50 text-blue-600"
        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
    }`}>
    <span className="shrink-0">{icon}</span>
    <span>{label}</span>
  </button>
);

const ToggleOption: React.FC<{
  title: string;
  description: string;
  defaultChecked: boolean;
}> = ({ title, description, defaultChecked }) => (
  <div className="flex items-start justify-between gap-4 p-3 rounded-lg border border-gray-100 bg-gray-50/50">
    <div>
      <p className="text-sm font-medium text-gray-800">{title}</p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
    <input
      type="checkbox"
      defaultChecked={defaultChecked}
      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mt-1 shrink-0"
    />
  </div>
);
