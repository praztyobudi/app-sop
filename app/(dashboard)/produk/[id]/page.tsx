import Link from "next/link";

interface Props {
  params: { id: string };
}

async function getProductById(id: string) {
  return {
    nama: "NPK Mutiara 16-16-16",
    kategori: "Pupuk Anorganik",
    produsen: "PT. Agrofarm Nusa Raya",
    deskripsi:
      "Pupuk majemuk dengan kandungan NPK seimbang untuk meningkatkan hasil panen dan memperbaiki kualitas tanah.",
    kandungan: "N:16% P:16% K:16%",
    bentuk: "Granul",
    izin: "01.02.2024.001",
    kebutuhan: "Internal",
    haki: "HKI-2024-7788",
    produksi: "2024-01-01",
    kadaluarsa: "2026-01-01",
    status: "Pending Approval"
  };
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-200 py-2">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="md:col-span-2 text-sm font-medium text-slate-800">
        {value || "-"}
      </div>
    </div>
  );
}

export default async function ProductDetail({ params }: Props) {
  const product = await getProductById(params.id);

  return (
    <div className="min-h-screen px-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{product.nama}</h1>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <span className="px-3 py-1 text-xs bg-amber-100 text-amber-700 rounded-full">
            {product.status}
          </span>
          <Link
            href={`/produk/${params.id}/edit`}
            className="px-4 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
          >
            Edit
          </Link>
        </div>
      </div>

      {/* DOCUMENT CONTAINER */}
      <div className="w-full bg-white shadow-lg rounded-xl border border-slate-200 p-8">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* FOTO */}
          <div className="md:col-span-1">
            <div className="aspect-square border border-slate-200 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 text-sm">
              Foto Produk
            </div>
          </div>

          {/* DATA UTAMA */}
          <div className="md:col-span-2 space-y-2">
            <Row label="Kategori" value={product.kategori} />
            <Row label="Produsen" value={product.produsen} />
            <Row label="Bentuk Fisik" value={product.bentuk} />
            <Row label="Nomor Izin Edar" value={product.izin} />
          </div>
        </div>

        {/* KANDUNGAN */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
            Kandungan & Legalitas
          </h3>
          <div className="border border-slate-200 rounded-lg p-4">
            <Row label="Bahan Aktif" value={product.kandungan} />
            <Row label="Jenis Kebutuhan" value={product.kebutuhan} />
            {product.kebutuhan === "Internal" && (
              <Row label="Nomor Registrasi HAKI" value={product.haki} />
            )}
          </div>
        </div>

        {/* DESKRIPSI */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
            Deskripsi Produk
          </h3>
          <div className="border border-slate-200 rounded-lg p-4 text-sm text-slate-700 leading-relaxed">
            {product.deskripsi}
          </div>
        </div>

        {/* LOGISTIK */}
        <div>
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
            Logistik & Produksi
          </h3>
          <div className="border border-slate-200 rounded-lg p-4">
            <Row label="Tanggal Produksi" value={product.produksi} />
            <Row label="Masa Kadaluwarsa" value={product.kadaluarsa} />
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-12 pt-6 border-t text-xs text-slate-400 text-center">
          Dokumen ini dihasilkan oleh sistem katalog internal perusahaan.
        </div>

      </div>
    </div>
  );
}