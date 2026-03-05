"use client";

type StatCardProps = {
  title: string;
  value: number;
  color: string;
  bg: string;
};

const StatCard = ({ title, value, color, bg }: StatCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          {title}
        </h3>
        <div className={`w-3 h-3 rounded-full ${bg}`} />
      </div>

      <p className={`text-3xl font-bold ${color}`}>
        {value.toLocaleString()}
      </p>

      <p className="text-xs text-gray-400 mt-2">
        Updated just now
      </p>
    </div>
  );
};

export default function StatsCards() {
  const stats = [
    {
      title: "Total Produk",
      value: 1284,
      color: "text-gray-900",
      bg: "bg-gray-400",
    },
    {
      title: "Pending",
      value: 73,
      color: "text-yellow-600",
      bg: "bg-yellow-500",
    },
    {
      title: "Revisi",
      value: 21,
      color: "text-red-600",
      bg: "bg-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((item, index) => (
        <StatCard
          key={index}
          title={item.title}
          value={item.value}
          color={item.color}
          bg={item.bg}
        />
      ))}
    </div>
  );
}