"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MerchantCard } from "@/components/MerchantCard"
import { Pagination } from "@/components/Pagination"
import { MerchantModal } from "@/components/MerchantModal"
import { Search } from "lucide-react"
import { Toast } from "@/components/ui/toast"
import { StaticImageData } from "next/image"
import logo from "@/lib/logo.png"
import  ProfileImg   from "@/lib/profile.png"
// Mock data for merchants (updated with website visits and products)
const mockMerchants = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  storeName: `Store ${i + 1}`,
  storeLogo: logo,
  planName: ["Starter", "Plus", "Pro", "Free"][Math.floor(Math.random() * 4)],
  createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  storeUsername: `store${i + 1}`,
  totalOrders: Math.floor(Math.random() * 1000),
  totalEmployees: Math.floor(Math.random() * 50),
  websiteLink: `https://store${i + 1}.com`,
  planExpirationDate: new Date(Date.now() + Math.random() * 10000000000).toISOString().split("T")[0],
  ownerProfileImage: ProfileImg,
  currentPlan: ["Starter", "Plus", "Pro", "Free"][Math.floor(Math.random() * 4)],
  ordersLimit: 1000,
  currentOrders: Math.floor(Math.random() * 1000),
  websiteVisits: Math.floor(Math.random() * 10000),
  products: Math.floor(Math.random() * 100),
  status: ["subscribed", "stopped", "hidden"][Math.floor(Math.random() * 3)],
}))

export default function MerchantListingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  interface Merchant {
    id: number
    storeName: string
    storeLogo: string | StaticImageData
    planName: string
    createdAt: string
    storeUsername: string
    totalOrders: number
    totalEmployees: number
    websiteLink: string
    planExpirationDate: string
    ownerProfileImage: string | StaticImageData
    currentPlan: string
    ordersLimit: number
    currentOrders: number
    websiteVisits: number
    products: number
    status: string
  }

  const [selectedMerchant, setSelectedMerchant] = useState<Merchant | null>(null)
  const [sortBy, setSortBy] = useState("date")
  const [filterPlan, setFilterPlan] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [showDeleteToast, setShowDeleteToast] = useState(false)
  const [showRestoreToast, setShowRestoreToast] = useState(false)
  const [selectedMerchantId, setSelectedMerchantId] = useState<number | null>(null)
  const itemsPerPage = 15

  const filteredAndSortedMerchants = useMemo(() => {
    return mockMerchants
      .filter(
        (merchant) =>
          (merchant.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            merchant.storeUsername.toLowerCase().includes(searchTerm.toLowerCase())) &&
          (filterPlan === "all" || merchant.planName.toLowerCase() === filterPlan) &&
          (filterStatus === "all" || merchant.status === filterStatus),
      )
      .sort((a, b) => {
        switch (sortBy) {
          case "date":
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          case "orders":
            return b.totalOrders - a.totalOrders
          case "visits":
            return b.websiteVisits - a.websiteVisits
          case "products":
            return b.products - a.products
          default:
            return 0
        }
      })
  }, [searchTerm, sortBy, filterPlan, filterStatus])

  const currentMerchants = filteredAndSortedMerchants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  const handleSubscribe = (merchantId: number) => {
    setSelectedMerchant(mockMerchants.find((m) => m.id === merchantId) || null)
  }

  const handleDelete = (merchantId: number) => {
    setSelectedMerchantId(merchantId)
    setShowDeleteToast(true)
  }

  const handleRestore = (merchantId: number) => {
    setSelectedMerchantId(merchantId)
    setShowRestoreToast(true)
  }

  const confirmDelete = () => {
    // Implement delete logic here
    console.log(`Deleting merchant with ID: ${selectedMerchantId}`)
    setShowDeleteToast(false)
  }

  const confirmRestore = () => {
    // Implement restore logic here
    console.log(`Restoring data for merchant with ID: ${selectedMerchantId}`)
    setShowRestoreToast(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Merchants</h1>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search by store name or username"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="orders">Orders</SelectItem>
            <SelectItem value="visits">Website Visits</SelectItem>
            <SelectItem value="products">Products</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filterPlan} onValueChange={setFilterPlan}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Plans</SelectItem>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="starter">Starter</SelectItem>
            <SelectItem value="plus">Plus</SelectItem>
            <SelectItem value="pro">Pro</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="subscribed">Subscribed</SelectItem>
            <SelectItem value="stopped">Stopped</SelectItem>
            <SelectItem value="hidden">Hidden Orders</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-4">
        {currentMerchants.map((merchant) => (
          <MerchantCard
            key={merchant.id}
            {...merchant}
            onSubscribe={() => handleSubscribe(merchant.id)}
            onDelete={() => handleDelete(merchant.id)}
            onRestore={() => handleRestore(merchant.id)}
          />
        ))}
      </div>
      <Pagination
        totalItems={filteredAndSortedMerchants.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      {selectedMerchant && (
        <MerchantModal
          isOpen={!!selectedMerchant}
          onClose={() => setSelectedMerchant(null)}
          merchantData={selectedMerchant}
        />
      )}
      {showDeleteToast && (
        <Toast
          message="Are you sure you want to delete the store?"
          onConfirm={confirmDelete}
          onCancel={() => setShowDeleteToast(false)}
        />
      )}
      {showRestoreToast && (
        <Toast
          message="Are you sure you want to restore the store data?"
          onConfirm={confirmRestore}
          onCancel={() => setShowRestoreToast(false)}
        />
      )}
    </div>
  )
}

