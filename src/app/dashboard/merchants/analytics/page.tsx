"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import LineChart from "@/components/LineChart"
import BarChart from "@/components/BarChart"
import DataTable from "@/components/DataTable"
import StatCard from "@/components/StatCard"
import { ClientInfo } from "@/components/ClientInfo"
import { PaymentHistory } from "@/components/PaymentHistory"
import { ProfileComponent } from "@/components/ProfileComponent"
import { mockAnalyticsData } from "@/lib/mockData"
import { motion } from "framer-motion"

export default function MerchantAnalyticsPage() {
  const [dateRange, setDateRange] = useState({ from: "2023-01-01", to: "2023-12-31" })
  const data = mockAnalyticsData

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Analytics for {data.clientName}</h1>

      <div className="mb-6">
        <ProfileComponent
          storeLogo={data.storeLogo}
          ownerImage={data.ownerImage}
          ownerName={data.ownerName}
          phoneNumber={data.phoneNumber}
          address={data.address}
        />
      </div>

      <div className="mb-6 flex justify-between items-center">
        <ClientInfo currency={data.currency} country={data.country} createdDate={data.createdDate} />
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white rounded-md p-2 shadow-sm">
            <Calendar className="h-5 w-5 text-gray-500" />
            <Input
              type="date"
              value={dateRange.from}
              onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
              className="border-none text-sm focus:outline-none"
            />
            <span className="text-gray-500">to</span>
            <Input
              type="date"
              value={dateRange.to}
              onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
              className="border-none text-sm focus:outline-none"
            />
          </div>
          <Select defaultValue="USD">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="GBP">GBP</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data.stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <StatCard {...stat} transactionCount={stat.transactionCount?.toString()} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Orders Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart data={data.ordersOverTime} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>VPay Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart data={data.vPayTransactionsOverTime} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Orders per Country</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={data.ordersPerCountry} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Subscription Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <PaymentHistory payments={data.subscriptionPaymentHistory} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Latest Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable data={data.latestOrders} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Latest VPay Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable data={data.latestVPayTransactions} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

