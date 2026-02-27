interface PageProps {
  params: {
    id: string;
  };
}

export default function ProductForm({ params }: PageProps) {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
      <h1 className="text-xl font-bold mb-6">
        Form Produk ID: {params.id}
      </h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Nama Produk
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Deskripsi
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}