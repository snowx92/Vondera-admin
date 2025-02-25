"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Bell,
  Search,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  LogOut,
  User,
  Settings
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "@/lib/profile.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState<
    { label: string; href: string }[]
  >([]);

  // Generate breadcrumbs based on pathname
  useEffect(() => {
    const generateBreadcrumbs = () => {
      const paths = pathname.split("/").filter(Boolean);
      const items = paths.map((path, index) => {
        // Build the URL for this breadcrumb
        const href = `/${paths.slice(0, index + 1).join("/")}`;

        // Format the label (capitalize first letter)
        const label = path.charAt(0).toUpperCase() + path.slice(1);

        return { label, href };
      });

      // Add Home at the beginning
      if (items.length > 0) {
        items.unshift({ label: "Home", href: "/dashboard" });
      }

      setBreadcrumbs(items);
    };

    generateBreadcrumbs();
  }, [pathname]);

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = () => {
      setIsProfileOpen(false);
      setIsNotificationOpen(false);
    };

    // Add event listener when dropdowns are open
    if (isProfileOpen || isNotificationOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isProfileOpen, isNotificationOpen]);

  // Notifications for demo
  const notifications = [
    { id: 1, message: "New order received", time: "5 min ago" },
    { id: 2, message: "Meeting with team at 2pm", time: "1 hour ago" },
    { id: 3, message: "Product launch successful", time: "Yesterday" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-purple-600 hover:bg-purple-50"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Breadcrumbs - Shown on Desktop */}
          <div className="hidden lg:flex items-center space-x-2">
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
                )}
                <Link
                  href={breadcrumb.href}
                  className={`text-sm font-medium ${
                    index === breadcrumbs.length - 1
                      ? "text-purple-600"
                      : "text-gray-500 hover:text-purple-600 hover:underline"
                  }`}
                >
                  {breadcrumb.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Search Bar - Shown on Desktop */}
          <div className="hidden lg:flex items-center flex-1 px-8">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Search everything..."
              />
            </div>
          </div>

          {/* Right section with notifications and profile */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsNotificationOpen(!isNotificationOpen);
                  setIsProfileOpen(false);
                }}
                className="p-1 rounded-full text-gray-500 hover:text-purple-600 focus:outline-none"
              >
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                <Bell className="h-6 w-6" />
              </motion.button>

              {/* Notifications Dropdown */}
              <AnimatePresence>
                {isNotificationOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="origin-top-right absolute right-0 mt-2 w-80 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="py-2">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-800">
                          Notifications
                        </h3>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {notifications.map((notification) => (
                          <motion.div
                            key={notification.id}
                            whileHover={{ backgroundColor: "#f9fafb" }}
                            className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                          >
                            <p className="text-sm text-gray-700">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {notification.time}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 px-4 py-2">
                        <Link
                          href="/notifications"
                          className="text-xs font-medium text-purple-600 hover:text-purple-700"
                        >
                          View all notifications
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsProfileOpen(!isProfileOpen);
                  setIsNotificationOpen(false);
                }}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <div className="relative w-8 h-8 overflow-hidden rounded-full bg-purple-100 border border-purple-200 ring-2 ring-white">
                  <Image
                    src={profile}
                    alt="User profile"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="hidden md:flex items-center">
                  <span className="text-sm font-medium text-gray-700">
                    Snow
                  </span>
                  <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                </div>
              </motion.button>

              {/* Profile Dropdown Menu */}
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="py-1">
                    <Link href="/profile">
  <motion.div
    whileHover={{
      x: 5,
      backgroundColor: "rgba(128, 0, 128, 0.1)", // Light purple background
    }}
    whileTap={{ scale: 0.97 }}
    className="flex items-center px-3 py-3 rounded-lg text-gray-600 hover:text-purple-500 group"
  >
    <User className="w-5 h-5 text-gray-500 group-hover:text-purple-500" />
    <AnimatePresence>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.2 }}
        className="ml-3 font-medium"
      >
        Your Profile
      </motion.span>
    </AnimatePresence>
  </motion.div>
</Link>

<Link href="/settings">
  <motion.div
    whileHover={{
      x: 5,
      backgroundColor: "rgba(128, 0, 128, 0.1)", // Light purple background
    }}
    whileTap={{ scale: 0.97 }}
    className="flex items-center px-3 py-3 rounded-lg text-gray-600 hover:text-purple-500 group"
  >
    <Settings className="w-5 h-5 text-gray-500 group-hover:text-purple-500" />
    <AnimatePresence>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.2 }}
        className="ml-3 font-medium"
      >
        Settings
      </motion.span>
    </AnimatePresence>
  </motion.div>
</Link>

                      <div className="border-t border-gray-100 my-1"></div>
                      <Link href="/logout">
                        <motion.div
                          whileHover={{
                            x: 5,
                            backgroundColor: "rgba(239, 68, 68, 0.1)",
                          }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center px-3 py-3 rounded-lg text-gray-600 hover:text-red-500 group"
                        >
                          <LogOut className="w-5 h-5 text-gray-500 group-hover:text-red-500" />
                          <AnimatePresence>
                            <motion.span
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.2 }}
                              className="ml-3 font-medium"
                            >
                              Logout
                            </motion.span>
                          </AnimatePresence>
                        </motion.div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Breadcrumbs - Shown below navbar on mobile */}
      <div className="lg:hidden px-4 py-2 border-t border-gray-100 bg-gray-50">
        <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={index} className="flex items-center whitespace-nowrap">
              {index > 0 && (
                <ChevronRight className="h-3 w-3 text-gray-400 mx-1 flex-shrink-0" />
              )}
              <Link
                href={breadcrumb.href}
                className={`text-xs font-medium ${
                  index === breadcrumbs.length - 1
                    ? "text-purple-600"
                    : "text-gray-500 hover:text-purple-600"
                }`}
              >
                {breadcrumb.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <div className="relative my-2">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Search everything..."
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
