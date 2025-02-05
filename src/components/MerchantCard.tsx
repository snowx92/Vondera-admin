import { Card, CardContent } from "@/components/ui/card";
import { Users, ShoppingBag, Globe, Box, Eye, Calendar, Clock, LogIn, Trash2, RotateCcw, BarChart } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { ActionDropdown } from "@/components/ui/ActionDropdown";
import { Toast } from "@/components/ui/toast";

interface MerchantCardProps {
  id: number;
  storeName: string;
  storeLogo: string | StaticImageData;
  planName: string;
  createdAt: string;
  storeUsername: string;
  totalOrders: number;
  totalEmployees: number;
  websiteLink: string;
  planExpirationDate: string;
  websiteVisits: number;
  products: number;
  status: string;
  currentPlan: string;
  ordersLimit: number;
  currentOrders: number;
  onSubscribe: () => void;
  onDelete: () => void;
  onRestore: () => void;
}

// Function to generate a unique color based on a string value with opacity and a matching text color
export const getUniqueColor = (
  value: string,
  opacity: number = 0.8
): { backgroundColor: string; textColor: string } => {
  // Handle specific cases for "Completed" and "Failed"
  if (value === "Completed") {
    return {
      backgroundColor: `rgba(76, 175, 80, ${opacity})`, // Green color with opacity
      textColor: `rgb(235, 253, 240)`, // Darker green for text
    };
  }
  if (value === "Failed") {
    return {
      backgroundColor: `rgba(244, 67, 54, ${opacity})`, // Red color with opacity
      textColor: `rgb(250, 206, 213)`, // Darker red for text
    };
  }

  // Simple hash function to convert a string to a number
  const hash = value.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  // Generate a color using the hash
  const hue = hash % 360; // Ensure hue is within the 0-359 range
  const backgroundColor = `hsla(${hue}, 70%, 80%, ${opacity})`;

  // Generate a darker shade of the background color for the text
  const textColor = `hsla(${hue}, 70%, 20%, 1)`; // Darker version of the background color

  return { backgroundColor, textColor };
};

export function MerchantCard({
  storeName,
  storeLogo,
  createdAt,
  storeUsername,
  totalOrders,
  totalEmployees,
  websiteLink,
  planExpirationDate,
  websiteVisits,
  products,
  status,
  currentPlan,
  ordersLimit,
  currentOrders,
  onSubscribe,
  onDelete,
  onRestore,
}: MerchantCardProps) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastAction, setToastAction] = useState<() => void>(() => {});

  const isHiddenOrders = status === "hidden";

  const handleDelete = () => {
    setToastMessage("Are you sure you want to delete the store?");
    setToastAction(() => onDelete);
    setShowToast(true);
  };

  const handleRestore = () => {
    setToastMessage("Are you sure you want to restore the store data?");
    setToastAction(() => onRestore);
    setShowToast(true);
  };

  const actions = [
    { icon: ShoppingBag, label: "Subscribe", onClick: onSubscribe, color: "text-blue-500" },
    { icon: LogIn, label: "Login to Store", onClick: () => window.open(websiteLink, "_blank"), color: "text-green-500" },
    { icon: Trash2, label: "Delete", onClick: handleDelete, color: "text-red-500" },
    { icon: RotateCcw, label: "Restore Data", onClick: handleRestore, color: "text-yellow-500" },
    { icon: BarChart, label: "Analytics", onClick: () => {}, color: "text-purple-500" },
  ];

  // Get unique colors for the status


  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg">
      <CardContent className="p-6 relative">
        {isHiddenOrders && (
          <div className="absolute top-0 right-0 bg-yellow-500 text-white px-2 py-1 text-xs font-semibold rounded-bl">
            Hidden Orders
          </div>
        )}

        {/* First Row: Store Logo, Name, Username, Plan, and Progress */}
        <div className="flex  items-center mb-6">
          {/* Left Column: Store Logo, Name, Username, and Plan */}
          <div className="flex items-center space-x-4">
            <Image
              src={storeLogo || "/placeholder.svg"}
              alt={storeName}
              width={60}
              height={60}
              className="rounded-lg object-cover border border-gray-200"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{storeName}</h3>
              <p className="text-sm text-gray-500">@{storeUsername}</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">{currentPlan}</span>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded ${
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
          </div>

          {/* Right Column: Progress Bar */}
          <div className="w-3/4 pl-4">
            <Progress
              value={(currentOrders / ordersLimit) * 100}
              label={`${currentOrders}/${ordersLimit} (${Math.round((currentOrders / ordersLimit) * 100)}%)`}
              className="w-full"
            />
          </div>
        </div>

        {/* Second Row: Stats and Details */}
        <div className="flex justify-between items-center">
          {/* Stats Section */}
          <div className="flex items-center space-x-8">
            <StatItem icon={ShoppingBag} value={totalOrders} label="Orders" color="text-blue-500" />
            <StatItem icon={Users} value={totalEmployees} label="Employees" color="text-green-500" />
            <StatItem icon={Box} value={products} label="Products" color="text-purple-500" />
            <StatItem icon={Eye} value={websiteVisits} label="Visits" color="text-yellow-500" />
          </div>

          {/* Details Section */}
          <div className="flex items-center space-x-8">
            <DetailItem icon={Calendar} label={`Created: ${new Date(createdAt).toLocaleDateString()}`} color="text-blue-500" />
            <DetailItem icon={Clock} label={`Expires: ${planExpirationDate}`} color="text-red-500" />
            <DetailItem icon={Globe} label="Visit Website" isLink href={websiteLink} color="text-green-500" />
          </div>
        </div>

        {/* ActionDropdown with Dynamic Colors */}
        <div className="absolute top-4 right-4">
          <ActionDropdown
            actions={actions}

          />
        </div>
      </CardContent>

      {showToast && (
        <Toast
          message={toastMessage}
          onConfirm={() => {
            toastAction();
            setShowToast(false);
          }}
          onCancel={() => setShowToast(false)}
        />
      )}
    </Card>
  );
}

import { LucideIcon } from "lucide-react";

function StatItem({ icon: Icon, value, label, color }: { icon: LucideIcon; value: number; label: string; color: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Icon className={`w-4 h-4 ${color}`} />
      <div>
        <p className="text-sm font-medium">{value}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    </div>
  );
}

function DetailItem({
  icon: Icon,
  label,
  isLink = false,
  href,
  color,
}: {
  icon: LucideIcon;
  label: string;
  isLink?: boolean;
  href?: string;
  color: string;
}) {
  const content = (
    <div className="flex items-center space-x-2">
      <Icon className={`w-4 h-4 ${color}`} />
      <span className="text-sm">{label}</span>
    </div>
  );

  return isLink ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      {content}
    </a>
  ) : (
    content
  );
}