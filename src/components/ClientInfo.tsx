import { Card, CardContent } from "@/components/ui/card"
import { Globe, Calendar, DollarSign } from "lucide-react"

interface ClientInfoProps {
  currency: string
  country: string
  createdDate: string
}

export function ClientInfo({ currency, country, createdDate }: ClientInfoProps) {
  return (
    <Card>
      <CardContent className="p-4 flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-700">{country}</span>
        </div>
        <div className="flex items-center space-x-2">
          <DollarSign className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-700">{currency}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-700">Created: {createdDate}</span>
        </div>
      </CardContent>
    </Card>
  )
}

