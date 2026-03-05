'use client';

import React, { useState } from 'react';
import {
  Save,
  ImagePlus,
  Beaker,
  FileText,
  Calendar,
  AlertCircle,
  ShieldCheck
} from 'lucide-react';


export default function ProductForm() {
  const [hakiType, setHakiType] = useState('');
  return (
    <div className="px-4 pb-10">
      {/* Header Form */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tambah Produk</h1>
          <p className="text-slate-500 text-sm">Pastikan semua informasi teknis sesuai dengan label kemasan.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">
            Simpan Draft
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-sm shadow-emerald-200">
            <Save className="w-4 h-4" />
            Ajukan ke Manager
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Kolom Kiri: Input Data (Span 2) */}
        <div className="lg:col-span-2 space-y-4">

          {/* Section 1: Informasi Dasar */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-slate-800 font-semibold border-b pb-3">
              <FileText className="w-5 h-5 text-emerald-500" />
              Informasi Umum
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap Produk</label>
                <input type="text" placeholder="Contoh: NPK Mutiara 16-16-16" className="w-full p-2.5 text-slate-300 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Kategori</label>
                <select className="w-full p-2.5 border text-slate-500 border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                  <option>Pilih Kategori</option>
                  <option>Pupuk Organik</option>
                  <option>Pupuk Anorganik</option>
                  <option>Hayati</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Produsen</label>
                <select className="w-full p-2.5 border text-slate-500 border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                  <option>Pilih Produsen</option>
                  <option>PT. Agrofarm Nusa Raya</option>
                  <option>PT. MAA</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section: Deskripsi & Instruksi (Tambahkan di bawah Section Kandungan) */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-slate-800 font-semibold border-b pb-3">
              <FileText className="w-5 h-5 text-emerald-500" />
              Deskripsi & Instruksi Penggunaan
            </div>
            <div className="space-y-4">
              {/* Deskripsi Produk */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Deskripsi Produk</label>
                <textarea
                  rows={4}
                  placeholder="Jelaskan keunggulan dan karakteristik umum pupuk ini..."
                  className="w-full p-2.5 text-slate-300 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Manfaat Utama */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Manfaat Utama</label>
                  <textarea
                    rows={3}
                    placeholder="Contoh: - Meningkatkan hasil panen&#10;- Memperbaiki struktur tanah"
                    className="w-full p-2.5 text-slate-300 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                  ></textarea>
                </div>
                {/* Target Tanaman */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Target Tanaman</label>
                  <textarea
                    rows={3}
                    placeholder="Contoh: Padi, Jagung, Sawit, Hortikultura"
                    className="w-full p-2.5 text-slate-300 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                  ></textarea>
                </div>
              </div>
    
              {/* Dosis & Cara Pakai */}
              <label className="block text-sm font-medium text-slate-700 mb-1">Cara Penggunaan</label>
              <textarea
                rows={3}
                placeholder="Contoh: Larutkan 2gr ke dalam 1 liter air, semprotkan pada daun di pagi hari..."
                className="w-full p-2.5 text-slate-300 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
              >
              </textarea>
            </div>
          </div>

          {/* Section 2: Spesifikasi Kandungan */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-slate-800 font-semibold border-b pb-3">
              <Beaker className="w-5 h-5 text-emerald-500" />
              Kandungan & Bahan
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Bahan Aktif & Persentase</label>
                <textarea rows={3} placeholder="N: 16%, P: 16%, K: 16%..." className="w-full p-2.5 text-slate-300 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Bentuk Fisik</label>
                  <input type="text" placeholder="Granul / Cair / Tepung" className="w-full p-2.5 text-slate-300 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nomor Izin Edar</label>
                  <input type="text" placeholder="01.02.202X.XXX" className="w-full p-2.5 text-slate-300 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Form Input No HAKI */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm mt-4">
            <div className="flex items-center gap-2 mb-3 text-slate-800 font-semibold border-b pb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Kebutuhan Produk
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1 tracking-wide">
                  Jenis Kebutuhan
                </label>
                <select
                  value={hakiType}
                  onChange={(e) => setHakiType(e.target.value)}
                  className="w-full p-2.5 border text-slate-500 border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none bg-emerald-50/10"
                >
                  <option value="">Pilih Jenis</option>
                  <option value="internal">Internal</option>
                  <option value="eksternal">Eksternal</option>
                </select>
              </div>

              {/* Form Input No HAKI - Hanya muncul jika pilih Internal */}
              {hakiType === 'internal' && (
                <div className="animate-in fade-in slide-in-from-left-2 duration-300">
                  <label className="block text-sm font-medium text-emerald-700 mb-1 tracking-wide">
                    Nomor Registrasi HAKI
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan No. HAKI Internal..."
                    className="w-full p-2 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none bg-emerald-50/10"
                  />
                </div>
              )}

              {/* Pesan Info jika pilih Eksternal */}
              {hakiType === 'eksternal' && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded animate-in fade-in duration-300">
                  <span className="text-[10px] text-slate-500 italic">
                    * Lisensi pihak ketiga, tidak memerlukan input nomor registrasi internal.
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Tanggal & Produksi */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-slate-800 font-semibold border-b pb-3">
              <Calendar className="w-5 h-5 text-emerald-500" />
              Logistik & Produksi
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-500">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tanggal Produksi</label>
                <input type="date" className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Masa Kadaluwarsa</label>
                <input type="date" className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Gambar & Status (Span 1) */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-slate-800 font-semibold">
              <ImagePlus className="w-5 h-5 text-emerald-500" />
              Foto Produk
            </div>
            <div className="aspect-square w-full border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
              <div className="p-3 rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform">
                <ImagePlus className="w-6 h-6 text-slate-400" />
              </div>
              <p className="mt-3 text-sm font-medium text-slate-600">Klik untuk unggah</p>
              <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 5MB</p>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                  Galeri
                </div>
              ))}
            </div>
          </div>

          {/* Widget Informasi Status */}
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-amber-800">Review Manager</p>
                <p className="text-xs text-amber-700 mt-1">
                  Data yang Anda simpan akan masuk ke antrean verifikasi sebelum bisa dipublikasikan ke katalog publik.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}