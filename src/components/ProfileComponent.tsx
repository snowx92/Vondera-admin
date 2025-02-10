import Image, { StaticImageData } from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin } from "lucide-react"

interface ProfileComponentProps {
  storeLogo: string | StaticImageData
  ownerImage: string| StaticImageData
  ownerName: string
  phoneNumber: string
  address: string
}

export function ProfileComponent({ storeLogo, ownerImage, ownerName, phoneNumber, address }: ProfileComponentProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        <div className="flex items-center space-x-6">
          <div className="flex-shrink-0">
            <Image
              src={storeLogo || "/placeholder.svg"}
              alt="Store Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl font-bold">{ownerName}</h2>
            <div className="flex items-center mt-2">
              <Phone className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-gray-600">{phoneNumber}</span>
            </div>
            <div className="flex items-center mt-1">
              <MapPin className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-gray-600">{address}</span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image src={ownerImage || "/placeholder.svg"} alt="Owner" width={64} height={64} className="rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

