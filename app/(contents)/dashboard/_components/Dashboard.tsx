import React from "react";
import {
  Users,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-sm text-gray-500">
            Selamat datang kembali, John! Berikut ringkasan performa sistem hari
            ini.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg shadow-sm hover:bg-gray-50 transition">
            Unduh Laporan
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-700 transition">
            + Tambah Data
          </button>
        </div>
      </div>

      {/* Grid Kartu Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Pendapatan"
          value="Rp 84.5 Juta"
          change="+12.5%"
          isPositive={true}
          icon={<DollarSign size={22} className="text-blue-600" />}
          bgIcon="bg-blue-50"
        />
        <StatCard
          title="Pengguna Aktif"
          value="2,415"
          change="+8.2%"
          isPositive={true}
          icon={<Users size={22} className="text-emerald-600" />}
          bgIcon="bg-emerald-50"
        />
        <StatCard
          title="Sistem Load"
          value="34.2%"
          change="-2.1%"
          isPositive={true}
          icon={<Activity size={22} className="text-indigo-600" />}
          bgIcon="bg-indigo-50"
        />
        <StatCard
          title="Tiket Pending"
          value="14"
          change="+3"
          isPositive={false}
          icon={<AlertCircle size={22} className="text-amber-600" />}
          bgIcon="bg-amber-50"
        />
      </div>

      {/* Bagian Grafik & Statistik Sekunder (Dummy Visual) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Grafik Utama (Dummy Chart Box) */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-semibold text-gray-800">
                Statistik Pendapatan Bulanan
              </h3>
              <p className="text-xs text-gray-500">
                Perbandingan pendapatan tahun 2025 dan 2026
              </p>
            </div>
            <button className="p-1 text-gray-400 hover:text-gray-600 rounded-lg">
              <MoreHorizontal size={20} />
            </button>
          </div>

          {/* Visualisasi Batang / Bar Chart Sederhana menggunakan Tailwind */}
          <div className="h-64 flex items-end justify-between gap-2 pt-6 px-2 border-b border-gray-100">
            {[45, 60, 35, 80, 55, 95, 75, 85, 65, 90, 70, 100].map(
              (height, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col items-center gap-2 group">
                  <div
                    style={{ height: `${height}%` }}
                    className="w-full bg-blue-100 group-hover:bg-blue-600 rounded-t-md transition-all duration-300 relative">
                    {/* Tooltip kecil saat di-hover */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                      {height}k
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
          <div className="flex justify-between text-xs text-gray-400 pt-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>Mei</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Agu</span>
            <span>Sep</span>
            <span>Okt</span>
            <span>Nov</span>
            <span>Des</span>
          </div>
        </div>

        {/* Aktivitas Terbaru */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col">
          <h3 className="text-base font-semibold text-gray-800 mb-1">
            Aktivitas Terbaru
          </h3>
          <p className="text-xs text-gray-500 mb-4">Aksi log sistem terkini</p>

          <div className="space-y-4 flex-1">
            <ActivityItem
              title="Pengguna Baru Terdaftar"
              time="Baru saja"
              icon={<Users size={16} className="text-blue-600" />}
              color="bg-blue-50"
            />
            <ActivityItem
              title="Pembaruan Sistem v2.4"
              time="2 jam yang lalu"
              icon={<Activity size={16} className="text-emerald-600" />}
              color="bg-emerald-50"
            />
            <ActivityItem
              title="Backup Database Selesai"
              time="5 jam yang lalu"
              icon={<CheckCircle2 size={16} className="text-indigo-600" />}
              color="bg-indigo-50"
            />
            <ActivityItem
              title="Peringatan Keamanan Login"
              time="Kemarin"
              icon={<AlertCircle size={16} className="text-amber-600" />}
              color="bg-amber-50"
            />
          </div>
        </div>
      </div>

      {/* Tabel Data Terbaru */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-gray-800">
              Transaksi Terakhir
            </h3>
            <p className="text-xs text-gray-500">
              Daftar transaksi yang masuk dalam sistem
            </p>
          </div>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
            Lihat Semua
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <th className="py-3 px-6">Pelanggan</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Tanggal</th>
                <th className="py-3 px-6 text-right">Jumlah</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
              <TableRow
                name="Siti Rahma"
                email="siti@example.com"
                status="Berhasil"
                date="01 Sep 2026"
                amount="Rp 1.250.000"
                statusColor="bg-emerald-50 text-emerald-700"
              />
              <TableRow
                name="Budi Santoso"
                email="budi@example.com"
                status="Tertunda"
                date="31 Agu 2026"
                amount="Rp 750.000"
                statusColor="bg-amber-50 text-amber-700"
              />
              <TableRow
                name="Dewi Lestari"
                email="dewi@example.com"
                status="Berhasil"
                date="30 Agu 2026"
                amount="Rp 3.400.000"
                statusColor="bg-emerald-50 text-emerald-700"
              />
              <TableRow
                name="Ahmad Fauzi"
                email="ahmad@example.com"
                status="Gagal"
                date="29 Agu 2026"
                amount="Rp 450.000"
                statusColor="bg-red-50 text-red-700"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// --- Komponen Pendukung Pendukung ---

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  bgIcon: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  isPositive,
  icon,
  bgIcon,
}) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
    <div>
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
        {title}
      </p>
      <h3 className="text-xl font-bold text-gray-800 mt-1">{value}</h3>
      <div className="flex items-center gap-1 mt-2">
        <span
          className={`inline-flex items-center text-xs font-semibold ${isPositive ? "text-emerald-600" : "text-red-600"}`}>
          {isPositive ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}
          {change}
        </span>
        <span className="text-xs text-gray-400">vs bulan lalu</span>
      </div>
    </div>
    <div
      className={`w-12 h-12 rounded-xl ${bgIcon} flex items-center justify-center`}>
      {icon}
    </div>
  </div>
);

const ActivityItem: React.FC<{
  title: string;
  time: string;
  icon: React.ReactNode;
  color: string;
}> = ({ title, time, icon, color }) => (
  <div className="flex items-start gap-3">
    <div
      className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center shrink-0 mt-0.5`}>
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-800 leading-snug">{title}</p>
      <p className="text-xs text-gray-400 mt-0.5">{time}</p>
    </div>
  </div>
);

const TableRow: React.FC<{
  name: string;
  email: string;
  status: string;
  date: string;
  amount: string;
  statusColor: string;
}> = ({ name, email, status, date, amount, statusColor }) => (
  <tr className="hover:bg-gray-50/50 transition">
    <td className="py-4 px-6">
      <div className="font-medium text-gray-900">{name}</div>
      <div className="text-xs text-gray-400">{email}</div>
    </td>
    <td className="py-4 px-6">
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
        {status}
      </span>
    </td>
    <td className="py-4 px-6 text-gray-500">{date}</td>
    <td className="py-4 px-6 text-right font-medium text-gray-900">{amount}</td>
  </tr>
);
