"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, RefreshCw } from "lucide-react";
import StatCard from "@/components/StatCard";

import PieChart from "@/components/PieChart";
import DataTable from "@/components/DataTable";
import DynamicList from "@/components/DynamicList";
import {
  stats,
  topActiveStores,
  topSoldProducts,
  storeCategories,
  lastTransactions,
  chartData,
  storeCountries,
  subscriptionData,
} from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LineChartWithTooltip from "@/components/LineChartWithTooltip";

export default function DashboardPage() {
  const [dateRange, setDateRange] = useState({
    from: "2023-01-01",
    to: "2023-12-31",
  });
  const [activeTab, setActiveTab] = useState("stores");

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <motion.h1
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dashboard OverView
        </motion.h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white rounded-md p-2 shadow-sm">
            <Calendar className="h-5 w-5 text-gray-500" />
            <input
              type="date"
              value={dateRange.from}
              onChange={(e) =>
                setDateRange({ ...dateRange, from: e.target.value })
              }
              className="border-none text-sm focus:outline-none"
            />
            <span className="text-gray-500">to</span>
            <input
              type="date"
              value={dateRange.to}
              onChange={(e) =>
                setDateRange({ ...dateRange, to: e.target.value })
              }
              className="border-none text-sm focus:outline-none"
            />
          </div>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
        <LineChartWithTooltip
          title="Sales Over Time"
          datasets={chartData.sales}
        />
        <LineChartWithTooltip
          title="Orders Over Time"
          datasets={chartData.orders}
        />
        <LineChartWithTooltip
          title="New Merchants"
          datasets={chartData.newMerchants}
        />
        <LineChartWithTooltip
          title="Subscriptions and Transactions"
          datasets={chartData.subscriptions}
        />
      </div>

      <Tabs
        defaultValue="stores"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="stores">Top Active Stores</TabsTrigger>
          <TabsTrigger value="products">Top Sold Products</TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <TabsContent value="stores">
              <Card>
                <CardContent className="pt-6">
                  <DynamicList items={topActiveStores} type="stores" />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="products">
              <Card>
                <CardContent className="pt-6">
                  <DynamicList items={topSoldProducts} type="products" />
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <Card>
          <CardHeader>
            <CardTitle>Top Countries</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart data={storeCountries} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Store Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart data={storeCategories} />
          </CardContent>
        </Card>
      </div>

  {/* Card for Last Transactions */}
  <Card>
    <CardHeader>
      <CardTitle>Last Transactions</CardTitle>
    </CardHeader>
    <CardContent>
      <DataTable data={lastTransactions} />
    </CardContent>
  </Card>

  {/* Card for Subscription Data */}
  <Card>
    <CardHeader>
      <CardTitle>Subscriptions</CardTitle>
    </CardHeader>
    <CardContent>
      <DataTable data={subscriptionData} />
    </CardContent>
  </Card>


    </div>
  );
}
