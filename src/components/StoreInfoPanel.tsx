import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Phone, MapPin, Package, Users, Truck, Building2, CreditCard, Store, Calendar, Clock, Smartphone, Monitor , PersonStanding ,Car } from "lucide-react";

import logo from "@/lib/logo.png"
import profile from "@/lib/profile.png"


const StoreInfoPanel = () => {
  // Mock data
  const storeData = {
    name: "Tech Gadgets Plus",
    logo: "/api/placeholder/80/80",
    isActive: true,
    createDate: "2023-08-15",
    lastActiveTime: "2024-02-23 14:30:00",
    planName: "Pro",
    stopSubscribing: true,
    hiddenOrders: true,
    lastSubscriptionDate: "2024-01-01",
    expirePlanDate: "2024-12-31",
    createdFrom: "web",
    mainCountry: "United States",
    currency: "USD",
    businessPhone: "+1 (555) 123-4567",
    businessAddress: "123 Tech Street, Silicon Valley, CA 94025",
    storeCategory: "Electronics & Gadgets",
    ownerName: "Sarah Johnson",
    ownerPhone: "+1 (555) 987-6543",
    ownerImage: "/api/placeholder/64/64",
    metrics: {
      totalProducts: 342,
      totalCategories: 28,
      totalEmployees: 12,
      totalCouriers: 8,
      totalStorefronts: 3,
      totalCustomer:186,
      activePaymentGateway: "Vpay",
      Courier:"Bosta",
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'ios':
        return <Smartphone className="w-5 h-5 text-blue-500" />;
      case 'android':
        return <Smartphone className="w-5 h-5 text-green-500" />;
      default:
        return <Monitor className="w-5 h-5 text-purple-500" />;
    }
  };

 

  return (

      <Card className="shadow-lg">
        <CardContent className="p-6">
          {/* Header Section */}
          <div className="flex items-center gap-4 mb-6">
            <Image src={logo} alt="Store Logo" className="rounded-lg" width={80} height={80} />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-gray-800">{storeData.name}</h2>
                <div className={`w-3 h-3 rounded-full ${storeData.isActive ? 'bg-green-500' : 'bg-red-500'}`} />
                {/* Plan, Stop Subscribing, and Hidden Orders Labels */}
                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">{storeData.planName}</span>
                  {storeData.stopSubscribing && (
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded-full">Stop Subscribing</span>
                  )}
                  {storeData.hiddenOrders && (
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2 py-1 rounded-full">Hidden Orders</span>
                  )}
                </div>
              </div>
              <p className="text-gray-500">{storeData.storeCategory}</p>
            </div>
          </div>

          {/* Horizontal Layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Store Details */}
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-600 uppercase">Store Details</label>
              <div className="mt-2 space-y-3">
                <DetailItem icon={<Calendar className="w-5 h-5 text-blue-500" />} label="Created" value={storeData.createDate} />
                <DetailItem icon={<Clock className="w-5 h-5 text-purple-500" />} label="Last Active" value={storeData.lastActiveTime} />
                <DetailItem icon={<Calendar className="w-5 h-5 text-blue-500" />} label="Last Subscription" value={storeData.lastSubscriptionDate} />
                <DetailItem icon={<Calendar className="w-5 h-5 text-blue-500" />} label="Expire Plan" value={storeData.expirePlanDate} />
                <DetailItem icon={getPlatformIcon(storeData.createdFrom)} label="Platform" value={storeData.createdFrom} />
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-600 uppercase">Contact Information</label>
              <div className="mt-2 space-y-3">
                <DetailItem icon={<Globe className="w-5 h-5 text-blue-500" />} label="Country" value={storeData.mainCountry} />
                <DetailItem icon={<Phone className="w-5 h-5 text-green-500" />} label="Phone" value={storeData.businessPhone} />
                <DetailItem icon={<MapPin className="w-5 h-5 text-red-500" />} label="Address" value={storeData.businessAddress} />
              </div>
            </div>

            {/* Owner Information */}
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-600 uppercase">Owner Information</label>
              <div className="mt-2 flex items-center gap-4">
                <Image src={profile} alt="Owner" className="rounded-full" width={64} height={64} />
                <div>
                  <p className="font-medium text-gray-800">{storeData.ownerName}</p>
                  <p className="text-gray-500">{storeData.ownerPhone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Store Metrics */}
          <div className="mt-8">
            <label className="text-sm font-semibold text-gray-600 uppercase">Store Metrics</label>
            <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <MetricItem icon={<Package className="w-6 h-6 text-blue-500" />} label="Products" value={storeData.metrics.totalProducts} />
              <MetricItem icon={<Building2 className="w-6 h-6 text-purple-500" />} label="Categories" value={storeData.metrics.totalCategories} />
              <MetricItem icon={<Users className="w-6 h-6 text-green-500" />} label="Employees" value={storeData.metrics.totalEmployees} />
              <MetricItem icon={<Truck className="w-6 h-6 text-red-500" />} label="Couriers" value={storeData.metrics.totalCouriers} />
              <MetricItem icon={<Store className="w-6 h-6 text-blue-500" />} label="Storefronts" value={storeData.metrics.totalStorefronts} />
              <MetricItem icon={<PersonStanding className="w-6 h-6 text-green-500" />} label="Customers" value={storeData.metrics.totalCustomer} />
              <MetricItem icon={<CreditCard className="w-6 h-6 text-yellow-500" />} label="Payment Gateways" value={storeData.metrics.activePaymentGateway} />
              <MetricItem icon={<Car className="w-6 h-6 text-cyan-500" />} label="Courier" value={storeData.metrics.Courier} />
            </div>
          </div>
        </CardContent>
      </Card>

  );
};
 // Animation variants for icons
 const iconVariants = {
  hover: { scale: 1.1, rotate: 10 },
  tap: { scale: 0.9 },
};
// Detail Item Component
const DetailItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) => (
  <div className="flex items-center gap-3">
    <motion.div whileHover="hover" whileTap="tap" variants={iconVariants}>
      {icon}
    </motion.div>
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-gray-800 font-medium">{value}</p>
    </div>
  </div>
);

// Metric Item Component
const MetricItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) => (
  <div className="flex items-center gap-3">
    <motion.div whileHover="hover" whileTap="tap" variants={iconVariants}>
      {icon}
    </motion.div>
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-gray-800 font-medium">{value}</p>
    </div>
  </div>
);

export default StoreInfoPanel;