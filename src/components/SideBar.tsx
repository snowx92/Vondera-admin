"use client"; // Mark this component as a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation"; // Now this will work
import { Home, Users, ShoppingBag, CreditCard, BarChart2, Settings, Store } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/merchants", label: "Merchants", icon: Store },
  { href: "/dashboard/users", label: "Users", icon: Users },
  { href: "/dashboard/products", label: "Products", icon: ShoppingBag },
  { href: "/dashboard/orders", label: "Orders", icon: CreditCard },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]


export default function SideBar() {
  const pathname = usePathname(); // Now this hook will work

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-2xl font-bold">My App</h1>
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.label} className="mb-4">
              <Link
                href={item.href}
                className={`flex items-center p-2 rounded-lg hover:bg-gray-700 ${
                  pathname === item.href ? "bg-gray-700" : ""
                }`}
              >
                <item.icon className="w-5 h-5 mr-2" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}