import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  value: string
  label: string
}

export default function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-8 rounded-xl text-center"
    >
      <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
      <div className="text-3xl font-bold mb-2 gradient-text">{value}</div>
      <div className="text-gray-300">{label}</div>
    </motion.div>
  )
}