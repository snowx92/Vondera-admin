import { Card, CardContent } from "@/components/ui/card"
import { Users, Globe, Box, Eye, Calendar, Clock } from "lucide-react"
import Image, { type StaticImageData } from "next/image"
import { Progress } from "@/components/ui/progress"

interface MerchantCardProps {
  storeName: string
  storeLogo: string | StaticImageData
  planName: string
  createdAt: string
  storeUsername: string
  totalEmployees: number
  websiteLink: string
  planExpirationDate: string
  websiteVisits: number
  products: number
  status: string
  currentPlan: string
  ordersLimit: number
  currentOrders: number
  onClick: () => void
}

export function MerchantCard({
  storeName,
  storeLogo,
  createdAt,
  storeUsername,
  totalEmployees,
  websiteLink,
  planExpirationDate,
  websiteVisits,
  products,
  status,
  currentPlan,
  ordersLimit,
  currentOrders,
  onClick,
}: MerchantCardProps) {
  const isHiddenOrders = status === "hidden"

  // Calculate progress percentage for monthly orders
  const monthlyOrderProgress = (currentOrders / ordersLimit) * 100

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden" onClick={onClick}>
      <CardContent className="p-6 relative">
        {isHiddenOrders && (
          <div className="absolute top-0 right-0 bg-yellow-500 text-white px-2 py-1 text-xs font-semibold rounded-bl">
            Hidden Orders
          </div>
        )}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Store Logo */}
          <Image
            src={storeLogo || "/placeholder.svg"}
            alt={storeName}
            width={80}
            height={80}
            className="rounded-lg object-cover"
          />

          {/* Store Details */}
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-gray-800">{storeName}</h3>
            <p className="text-sm text-gray-500">@{storeUsername}</p>

            {/* Plan and Status */}
            <div className="mt-2 flex items-center space-x-2 flex-wrap">
              <span className="px-2 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded">{currentPlan}</span>
              <span
                className={`px-2 py-1 text-sm font-medium rounded ${
                  status === "subscribed"
                    ? "bg-green-100 text-green-800"
                    : status === "stopped"
                      ? "bg-red-100 text-red-800"
                      : "bg-gray-100 text-gray-800"
                }`}
              >
                {status}
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-between w-full md:w-auto md:flex-nowrap md:space-x-6">
            <StatItem icon={Users} value={totalEmployees} label="Employees" />
            <StatItem icon={Box} value={products} label="Products" />
            <StatItem icon={Eye} value={websiteVisits} label="Visits" />
          </div>
        </div>

        {/* Progress Bar for Monthly Orders */}
        <div className="flex justify-center mt-2">
  <div className="w-1/2">
    <Progress
      value={monthlyOrderProgress}
      label={`${currentOrders}/${ordersLimit} (${Math.round(monthlyOrderProgress)}%)`}
      className="w-full"
    />
  </div>
</div>

        {/* Additional Details */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
          <DetailItem icon={Calendar} label={`Created: ${new Date(createdAt).toLocaleDateString()}`} />
          <DetailItem icon={Clock} label={`Expires: ${planExpirationDate}`} />
          <DetailItem icon={Globe} label="Visit Website" isLink href={websiteLink} />
        </div>
      </CardContent>
    </Card>
  )
}

function StatItem({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  value: number
  label: string
}) {
  return (
    <div className="text-center px-2 py-1 w-full md:w-auto">
      <Icon className="w-6 h-6 text-gray-500 mx-auto" />
      <p className="text-sm font-medium mt-1">
        {value} {label}
      </p>
    </div>
  )
}

function DetailItem({
  icon: Icon,
  label,
  isLink = false,
  href,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
  isLink?: boolean
  href?: string
}) {
  const content = (
    <div className="flex items-center space-x-2">
      <Icon className="w-4 h-4 text-gray-400" />
      <span>{label}</span>
    </div>
  )

  return isLink ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      {content}
    </a>
  ) : (
    content
  )
}