import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Image, { StaticImageData } from "next/image"

interface MerchantModalProps {
  isOpen: boolean
  onClose: () => void
  merchantData: {
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
}

export function MerchantModal({ isOpen, onClose, merchantData }: MerchantModalProps) {
  const [planType, setPlanType] = useState("")
  const [duration, setDuration] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribing with:", { planType, duration, amount })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{merchantData.storeName}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex justify-center">
            <Image
              src={merchantData.ownerProfileImage || "/placeholder.svg"}
              alt="Store Owner"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Current Plan: {merchantData.currentPlan}</p>
            <Progress value={(merchantData.currentOrders / merchantData.ordersLimit) * 100} className="w-full" />
            <p className="text-sm text-gray-500 mt-1">
              {merchantData.currentOrders} / {merchantData.ordersLimit} orders
            </p>
          </div>
          <Select onValueChange={setPlanType}>
            <SelectTrigger>
              <SelectValue placeholder="Select Plan Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="starter">Starter</SelectItem>
              <SelectItem value="plus">Plus</SelectItem>
              <SelectItem value="pro">Pro</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setDuration}>
            <SelectTrigger>
              <SelectValue placeholder="Select Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="number"
            placeholder="Amount to be paid"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <Button onClick={handleSubscribe}>Subscribe</Button>
      </DialogContent>
    </Dialog>
  )
}

