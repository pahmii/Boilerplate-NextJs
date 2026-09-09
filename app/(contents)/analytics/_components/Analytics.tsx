"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Users,
  Eye,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Download,
} from "lucide-react";

export default function Analytics() {
  const [timeRange, setTimeRange] = useState<"7d" | "30d" | "12m">("30d");

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Analitik & Performa
          </h1>
          <p className="text-sm text-gray-500">
            Analisis traffic pengunjung dan performa sistem secara real-time.
          </p>
        </div>

        {/* Filter Rentang Waktu & Tombol Export */}
        <div className="flex items-center gap-3">
          <div className="inline-flex bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setTimeRange("7d")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
                timeRange === "7d"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
              7 Hari
            </button>
            <button
              onClick={() => setTimeRange("30d")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
                timeRange === "30d"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
              30 Hari
            </button>
            <button
              onClick={() => setTimeRange("12m")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
                timeRange === "12m"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
              12 Bulan
            </button>
          </div>

          <button
            onClick={() => alert("Mengunduh data analitik...")}
            className="flex items-center gap-2 px-3.5 py-2 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-lg shadow-sm hover:bg-gray-50 transition">
            <Download size={14} />
            <span>Ekspor</span>
          </button>
        </div>
      </div>

      {/* Grid Metrik Utama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnalyticsMetricCard
          title="Total Kunjungan (Views)"
          value="48,652"
          change="+14.2%"
          isPositive={true}
          icon={<Eye size={20} className="text-blue-600" />}
          bgIcon="bg-blue-50"
        />
        <AnalyticsMetricCard
          title="Pengunjung Unik"
          value="12,840"
          change="+8.1%"
          isPositive={true}
          icon={<Users size={20} className="text-emerald-600" />}
          bgIcon="bg-emerald-50"
        />
        <AnalyticsMetricCard
          title="Rata-rata Waktu Sesi"
          value="4m 32s"
          change="-2.4%"
          isPositive={false}
          icon={<Clock size={20} className="text-indigo-600" />}
          bgIcon="bg-indigo-50"
        />
        <AnalyticsMetricCard
          title="Tingkat Konversi"
          value="3.48%"
          change="+0.6%"
          isPositive={true}
          icon={<TrendingUp size={20} className="text-amber-600" />}
          bgIcon="bg-amber-50"
        />
      </div>

      {/* Bagian Grafik Utama */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h3 className="text-base font-semibold text-gray-800">
              Grafik Traffic Pengunjung
            </h3>
            <p className="text-xs text-gray-500">
              Perbandingan jumlah views dan visitor unik
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-gray-600 mt-2 sm:mt-0">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-blue-600 rounded-sm"></span> Views
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-emerald-500 rounded-sm"></span>{" "}
              Visitor Unik
            </span>
          </div>
        </div>

        {/* Visualisasi Batang Ganda (Simulasi Grafik) */}
        <div className="h-64 flex items-end justify-between gap-3 pt-6 px-2 border-b border-gray-100">
          {[
            { v: 65, u: 40 },
            { v: 45, u: 30 },
            { v: 80, u: 55 },
            { v: 60, u: 45 },
            { v: 95, u: 70 },
            { v: 85, u: 60 },
            { v: 100, u: 75 },
            { v: 75, u: 50 },
            { v: 90, u: 65 },
            { v: 70, u: 45 },
            { v: 85, u: 60 },
            { v: 95, u: 70 },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full flex items-end justify-center gap-1 h-full group">
              {/* Bar Views */}
              <div
                style={{ height: `${item.v}%` }}
                className="w-1/2 bg-blue-600 rounded-t-sm transition-all duration-300 group-hover:bg-blue-700"></div>
              {/* Bar Visitor Unik */}
              <div
                style={{ height: `${item.u}%` }}
                className="w-1/2 bg-emerald-500 rounded-t-sm transition-all duration-300 group-hover:bg-emerald-600"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-400 pt-3">
          <span>Minggu 1</span>
          <span>Minggu 2</span>
          <span>Minggu 3</span>
          <span>Minggu 4</span>
        </div>
      </div>

      {/* Grid Informasi Pendukung (Perangkat & Sumber Traffic) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sumber Traffic */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-base font-semibold text-gray-800 mb-1">
            Sumber Traffic Utama
          </h3>
          <p className="text-xs text-gray-500 mb-6">
            Dari mana pengunjung mengakses platform Anda
          </p>

          <div className="space-y-4">
            <TrafficSourceItem
              label="Direct / Langsung"
              percentage={45}
              visits="21,890"
              color="bg-blue-600"
            />
            <TrafficSourceItem
              label="Mesin Pencari (Google, Bing)"
              percentage={30}
              visits="14,595"
              color="bg-emerald-500"
            />
            <TrafficSourceItem
              label="Media Sosial (Twitter, LinkedIn)"
              percentage={15}
              visits="7,297"
              color="bg-indigo-500"
            />
            <TrafficSourceItem
              label="Tautan Referral (Partner)"
              percentage={10}
              visits="4,865"
              color="bg-amber-500"
            />
          </div>
        </div>

        {/* Perangkat Pengguna */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-base font-semibold text-gray-800 mb-1">
            Perangkat Pengguna
          </h3>
          <p className="text-xs text-gray-500 mb-6">
            Jenis perangkat yang digunakan pengunjung
          </p>

          <div className="space-y-4">
            <TrafficSourceItem
              label="Mobile (Smartphone)"
              percentage={62}
              visits="30,164"
              color="bg-blue-600"
            />
            <TrafficSourceItem
              label="Desktop (Komputer / Laptop)"
              percentage={31}
              visits="15,082"
              color="bg-emerald-500"
            />
            <TrafficSourceItem
              label="Tablet"
              percentage={7}
              visits="3,405"
              color="bg-amber-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Komponen Pendukung ---

interface AnalyticsMetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  bgIcon: string;
}

const AnalyticsMetricCard: React.FC<AnalyticsMetricCardProps> = ({
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
        <span className="text-xs text-gray-400">vs periode lalu</span>
      </div>
    </div>
    <div
      className={`w-12 h-12 rounded-xl ${bgIcon} flex items-center justify-center`}>
      {icon}
    </div>
  </div>
);

const TrafficSourceItem: React.FC<{
  label: string;
  percentage: number;
  visits: string;
  color: string;
}> = ({ label, percentage, visits, color }) => (
  <div>
    <div className="flex justify-between text-sm mb-1.5">
      <span className="font-medium text-gray-800">{label}</span>
      <span className="text-gray-500 text-xs">
        {visits} kunjungan ({percentage}%)
      </span>
    </div>
    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
      <div
        style={{ width: `${percentage}%` }}
        className={`h-full ${color} rounded-full`}></div>
    </div>
  </div>
);
