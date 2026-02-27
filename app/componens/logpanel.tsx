"use client";

export default function LogPanel() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        System Activity
      </h2>

      <div className="space-y-4">

        {/* INFO */}
        <div className="flex justify-between items-center border border-gray-200 rounded-xl px-4 py-3">
          <div className="flex gap-3 items-center">
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-600">
              INFO
            </span>
            <span className="text-sm text-gray-800">
              User logged in successfully
            </span>
          </div>
          <span className="text-xs text-gray-400">10:21 AM</span>
        </div>

        {/* WARN */}
        <div className="flex justify-between items-center border border-gray-200 rounded-xl px-4 py-3">
          <div className="flex gap-3 items-center">
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-600">
              WARN
            </span>
            <span className="text-sm text-gray-800">
              High memory usage detected
            </span>
          </div>
          <span className="text-xs text-gray-400">10:45 AM</span>
        </div>

        {/* ERROR */}
        <div className="flex justify-between items-center border border-gray-200 rounded-xl px-4 py-3">
          <div className="flex gap-3 items-center">
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-600">
              ERROR
            </span>
            <span className="text-sm text-gray-800">
              Database connection failed
            </span>
          </div>
          <span className="text-xs text-gray-400">11:02 AM</span>
        </div>

      </div>
    </div>
  );
}