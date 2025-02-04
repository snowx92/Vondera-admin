
// StatCard.tsx
import { motion } from "framer-motion"
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: number
  change: number
  icon: LucideIcon
  color: string
  transactionCount?: string;
}


const StatCard = ({ title, value, change, icon: Icon, color, transactionCount }: StatCardProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow min-h-[176px] flex flex-col justify-between"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col min-h-[88px]">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-1 text-3xl font-semibold text-purple-900">{value.toLocaleString()}</p>
          {transactionCount && (
            <p className="mt-1 text-sm text-gray-500">
              No: # <span className="font-medium text-purple-900">{transactionCount}</span>
            </p>
          )}
          {!transactionCount && <div className="mt-1 h-6" />} {/* Placeholder for consistent height */}
        </div>
        <div className={`p-3 rounded-full ${change >= 0 ? "bg-green-100" : "bg-red-100"}`}>
          <Icon className={color} size={24} />
        </div>
      </div>
      <div className="mt-4">
        <span className={`text-sm font-medium ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
          {change >= 0 ? "+" : ""}{change}%
        </span>
        <span className="text-sm font-medium text-gray-500"> from last month</span>
      </div>
    </motion.div>
  );
};
export default StatCard;

