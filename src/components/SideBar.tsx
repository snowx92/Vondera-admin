"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Users, 
  ShoppingBag, 
  CreditCard, 
  BarChart2, 
  Settings, 
  Store, 
  ChevronLeft,
  ChevronRight,

} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/lib/logo.png"
const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/merchants", label: "Merchants", icon: Store },
  { href: "/dashboard/users", label: "Users", icon: Users },
  { href: "/dashboard/products", label: "Products", icon: ShoppingBag },
  { href: "/dashboard/orders", label: "Orders", icon: CreditCard },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Check if route is active or is parent of active route
  const isActiveRoute = (href: string) => {
    if (pathname === href) return true;
    
    if (pathname.startsWith(href) && href !== '/dashboard') {
      const remainingPath = pathname.slice(href.length);
      return remainingPath.startsWith('/');
    }
    
    return false;
  };

  const sidebarVariants = {
    expanded: { width: "280px" },
    collapsed: { width: "80px" },
  };

  return (
    <motion.div 
      initial="expanded"
      animate={isCollapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      className="relative h-screen bg-white border-r border-gray-100 shadow-sm"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-purple-600 rounded-full p-1 shadow-lg hover:bg-purple-700 z-10"
      >
        <motion.div
          animate={{ rotate: isCollapsed ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-white" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Logo Section */}
      <div className="flex items-center h-16 px-4 border-b border-gray-100">
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 w-10 h-10 relative overflow-hidden"
          >
            <Image
              src={logo}
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="ml-3 font-bold text-xl text-gray-800"
              >
                Vondera Admin
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="py-6 px-3">
        <nav>
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <motion.li key={item.label} custom={index} layout>
                <Link href={item.href}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center px-3 py-3 rounded-lg group transition-all duration-200
                      ${isActiveRoute(item.href)
                        ? 'bg-purple-50 text-purple-700' 
                        : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <motion.div
                      whileHover={{ rotate: 8 }}
                      className={`${isActiveRoute(item.href) ? 'text-purple-600' : 'text-gray-500 group-hover:text-purple-500'}`}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.div>
                    <AnimatePresence>
                      {!isCollapsed && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className={`ml-3 font-medium ${isActiveRoute(item.href) ? 'text-purple-700' : 'text-gray-600'}`}
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {isActiveRoute(item.href) && !isCollapsed && (
                      <motion.div 
                        className="ml-auto h-2 w-2 rounded-full bg-purple-600"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                      />
                    )}
                  </motion.div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Action */}

    </motion.div>
  );
}