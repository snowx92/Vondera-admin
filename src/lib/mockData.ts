import { LucideIcon } from 'lucide-react'
import logo from "@/lib/logo.png"
import  ProfileImg   from "@/lib/profile.png"
export interface StatData {
  title: string
  value: string
  change: number
  icon: LucideIcon
  color: string
}

// stats.ts
import { TrendingUp, CreditCard, RefreshCw, CircleDollarSign ,Store , Package , Shirt , Banknote , Eye}  from 'lucide-react'

export const stats = [
  {
    title: "Total Revenue",
    value: 53000,
    change: 12,
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    title: "Renew Transactions",
    value: 13450,
    change: 5.4,
    icon: RefreshCw,
    color: "text-blue-600",
    transactionCount: "43"
  },
  {
    title: "Subscriptions Transactions",
    value: 10800,
    change: 2.4,
    icon: CircleDollarSign,
    color: "text-green-800",
    transactionCount: "68"
  },
  {
    title: "VPay Transactions",
    value: 15000,
    change: 7.2,
    icon: CreditCard,
    color: "text-indigo-600",
    transactionCount: "32"
  },
  {
    title: "New Merchants",
    value: 478,
    change: 8.1,
    icon: Store,
    color: "text-purple-600"
  },
  {
    title: "Orders",
    value: 18920,
    change: 42.1,
    icon: Package,
    color: "text-yellow-600"
  },
  {
    title: "New Products",
    value: 3215,
    change: 42.1,
    icon: Shirt,
    color: "text-black"
  },
  {
    title: "Total Sales",
    value: 189200871,
    change: 17.6,
    icon: Banknote,
    color: "text-green-900"
  }
];

export const revenueData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [12000, 19000, 15000, 22000, 18000, 24000],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
}

export const topActiveStores = [
  {
    id: "1",
    name: "Tech Haven",
    image: "/placeholder.svg?height=48&width=48",
    secondaryText: "Electronics",
    tertiaryText: "Created on Jan 15, 2023",
    sales: 250000,
    count: 1200,
    extraInfo: "25 employees",
  },
  {
    id: "2",
    name: "Fashion Forward",
    image: "/placeholder.svg?height=48&width=48",
    secondaryText: "Clothing",
    tertiaryText: "Created on Feb 3, 2023",
    sales: 180000,
    count: 950,
    extraInfo: "18 employees",
  },
  {
    id: "3",
    name: "Gourmet Delights",
    image: "/placeholder.svg?height=48&width=48",
    secondaryText: "Food",
    tertiaryText: "Created on Mar 22, 2023",
    sales: 150000,
    count: 800,
    extraInfo: "15 employees",
  },
  {
    id: "4",
    name: "Home Essentials",
    image: "/placeholder.svg?height=48&width=48",
    secondaryText: "Home & Garden",
    tertiaryText: "Created on Apr 10, 2023",
    sales: 120000,
    count: 600,
    extraInfo: "12 employees",
  },
  {
    id: "5",
    name: "Outdoor Adventures",
    image: "/placeholder.svg?height=48&width=48",
    secondaryText: "Sports & Outdoors",
    tertiaryText: "Created on May 5, 2023",
    sales: 100000,
    count: 500,
    extraInfo: "10 employees",
  },
]

export const topSoldProducts = [
  {
    id: "1",
    name: "Wireless Earbuds",
    image: "/logo.png?height=48&width=48",
    secondaryText: "Tech Haven",
    tertiaryText: "Electronics",
    sales: 50000,
    count: 1000,
  },
  {
    id: "2",
    name: "Smart Watch",
    image: "/placeholder.svg?height=48&width=48",
    secondaryText: "Tech Haven",
    tertiaryText: "Electronics",
    sales: 45000,
    count: 900,

  },
  {
    id: "3",
    name: "Designer Jeans",
    image: "/placeholder.svg?height=48&width=48",
    secondaryText: "Fashion Forward",
    tertiaryText: "Clothing",
    sales: 40000,
    count: 800,
  },
  {
    id: "4",
    name: "Gourmet Coffee Beans",
    image: "/placeholder.svg?height=48&width=48",
    secondaryText: "Gourmet Delights",
    tertiaryText: "Food",
    sales: 35000,
    count: 700,
  },
  {
    id: "5",
    name: "Yoga Mat",
    image: "/placeholder.svg?height=48&width=48",
    secondaryText: "Outdoor Adventures",
    tertiaryText: "Sports & Outdoors",
    sales: 30000,
    count: 600,

  },
  {
    id: "6",
    name: "Smart Home Hub",
    image: "/placeholder.svg?height=48&width=48",
    secondaryText: "Tech Haven",
    tertiaryText: "Electronics",
    sales: 28000,
    count: 560,

  },
  {
    id: "7",
    name: "Leather Handbag",
    image: "/placeholder.svg?height=48&width=48",
    secondaryText: "Fashion Forward",
    tertiaryText: "Accessories",
    sales: 26000,
    count: 520,

  },
  {
    id: "8",
    name: "Organic Tea Set",
    image: "/placeholder.svg?height=48&width=48",
    secondaryText: "Gourmet Delights",
    tertiaryText: "Food",
    sales: 24000,
    count: 480,

  },
  {
    id: "9",
    name: "Indoor Plant Kit",
    image: "/placeholder.svg?height=48&width=48",
    secondaryText: "Home Essentials",
    tertiaryText: "Home & Garden",
    sales: 22000,
    count: 440,

  },
  {
    id: "10",
    name: "Fitness Tracker",
    image: "/placeholder.svg?height=48&width=48",
    secondaryText: "Outdoor Adventures",
    tertiaryText: "Sports & Outdoors",
    sales: 20000,
    count: 400,

  },
]
export const storeCategories = {
  labels: ["Electronics", "Clothing", "Food", "Home & Garden", "Others"],
  datasets: [
    {
      data: [30, 25, 20, 15, 10],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
    },
  ],
 // Icons for each category
}

export const storeCountries = {
  labels: ["Egypt", "Saudi Arabia", "United Arab Emirates", "Kuwait", "Qatar"], // English translations
  datasets: [
    {
      data: [40, 20, 15, 10, 15], // Adjust values as necessary
      backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF5"], // Assigned color scheme
    },
  ],
};


export const lastTransactions = [
  { 
    id: "1", 
    date: "2023-06-01", 
    store: "Store A", 
    amount: 150.0, 
    status: "Completed", 
    paymentProvider: "Instapay" ,
    identifier:"@eyadshokry",
  },
  { 
    id: "2", 
    date: "2023-06-02", 
    store: "Store B", 
    amount: 89.99, 
    status: "Failed", 
    paymentProvider: "Wallet" ,
    identifier:"01558808115",
  },
  { 
    id: "3", 
    date: "2023-06-03", 
    store: "Store C", 
    amount: 250.5, 
    status: "Completed", 
    paymentProvider: "Bank Account" ,
    identifier:"01000548888025556",
  },
  { 
    id: "4", 
    date: "2023-06-04", 
    store: "Store D", 
    amount: 75.0, 
    status: "Failed", 
    paymentProvider: "Instapay" ,
    identifier:"@snowahli",
  },
  { 
    id: "5", 
    date: "2023-06-05", 
    store: "Store E", 
    amount: 199.99, 
    status: "Completed", 
    paymentProvider: "Wallet" ,
    identifier:"01112233444",
  },
];

export const subscriptionData = [
  { 
    id: "1", 
    store: "Store A", 
    planName: "Starter", 
    type:"Renewal",
    money: 29.99, 
    planPeriod: "1 Month", 
    discount: 0 
  },
  { 
    id: "2", 
    store: "Store B", 
    planName: "Pro", 
    type:"Subscription",
    money: 89.99, 
    planPeriod: "3 Months", 
    discount: 10 
  },
  { 
    id: "3", 
    store: "Store C", 
    planName: "Plus", 
    type:"Subscription",
    money: 199.99, 
    planPeriod: "1 Year", 
    discount: 20 
  },
  { 
    id: "4", 
    store: "Store D", 
    planName: "Starter", 
    type:"Renewal",
    money: 49.99, 
    planPeriod: "1 Month", 
    discount: 5 
  },
  { 
    id: "5", 
    store: "Store E", 
    planName: "Plus", 
    type:"Renewal",
    money: 129.99, 
    planPeriod: "3 Months", 
    discount: 15 
  },
];


export const chartData = {
  sales: [
    {
      label: "Sales",
      data: [
        { x: "Jan", y: 1000 },
        { x: "Feb", y: 1500 },
        { x: "Mar", y: 1200 },
        { x: "Apr", y: 1800 },
        { x: "May", y: 2000 },
        { x: "Jun", y: 2200 },
      ],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
  orders: [
    {
      label: "Orders",
      data: [
        { x: "Jan", y: 100 },
        { x: "Feb", y: 150 },
        { x: "Mar", y: 120 },
        { x: "Apr", y: 180 },
        { x: "May", y: 200 },
        { x: "Jun", y: 220 },
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
  subscriptions: [
    {
      label: "New Subscriptions",
      data: [
        { x: "Jan", y: 5500, count: 30 }, // y = value, count = count
        { x: "Feb", y: 1477, count: 40 },
        { x: "Mar", y: 7900, count: 35 },
        { x: "Apr", y: 2560, count: 45 },
        { x: "May", y: 4852, count: 50 },
        { x: "Jun", y: 1000, count: 55 },
      ],
      borderColor: "rgb(54, 162, 235)",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
    {
      label: "Renewals",
      data: [
        { x: "Jan", y: 1785, count: 100 },
        { x: "Feb", y: 5620, count: 110 },
        { x: "Mar", y: 1254, count: 105 },
        { x: "Apr", y: 5078, count: 115 },
        { x: "May", y: 6592, count: 120 },
        { x: "Jun", y: 9850, count: 125 },
      ],
      borderColor: "rgb(153, 102, 255)",
      backgroundColor: "rgba(153, 102, 255, 0.5)",
    },
    {
      label: "vPay Transactions",
      data: [
        { x: "Jan", y: 5000, count: 500 },
        { x: "Feb", y: 6000, count: 600 },
        { x: "Mar", y: 5500, count: 550 },
        { x: "Apr", y: 7000, count: 700 },
        { x: "May", y: 7500, count: 750 },
        { x: "Jun", y: 8000, count: 800 },
      ],
      borderColor: "rgb(255, 206, 86)",
      backgroundColor: "rgba(255, 206, 86, 0.5)",
    },
  ],
  newMerchants: [
    {
      label: "New Merchants",
      data: [
        { x: "Jan", y: 100 },
        { x: "Feb", y: 150 },
        { x: "Mar", y: 120 },
        { x: "Apr", y: 180 },
        { x: "May", y: 200 },
        { x: "Jun", y: 220 },
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const mockAnalyticsData = {
  clientName: "Tech Haven",
  currency: "USD",
  country: "United States",
  createdDate: "2023-01-15",
  storeLogo: logo,
  ownerImage: ProfileImg,
  ownerName: "John Doe",
  phoneNumber: "+1 (555) 123-4567",
  address: "123 Tech Street, Silicon Valley, CA 94000",
  stats: [
    { title: "Total Sales", value: 1247865, change: 12, icon: TrendingUp, color: "text-green-600" },
    { title: "Total vpay Transactions", value: 1500, change: 5.75,icon: Banknote, color: "text-green-600", transactionCount: 4 },
    { title: "Total Orders", value: 1485, change: 2.1, icon: Package, color: "text-green-600" },
    { title: "Website Vists", value: 14557, change: 12.5, icon: Eye, color: "text-green-600" },
  ],
  ordersOverTime: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Orders",
        data: [300, 450, 400, 600, 550, 700],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        tension: 0.1,
      },
    ],
  },
  vPayTransactionsOverTime: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "VPay Transactions",
        data: [100, 150, 120, 200, 180, 250],
        borderColor: "rgb(153, 102, 255)",
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        tension: 0.1,
      },
    ],
  },
  ordersPerCountry: {
    labels: ["USA", "Canada", "UK", "Germany", "France"],
    datasets: [
      {
        label: "Orders",
        data: [2000, 1500, 1000, 800, 700],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
      },
    ],
  },
  subscriptionPaymentHistory: [
    { id: "1", date: "2023-06-01",planName: "Starter", amount: 300, planPeriod: "Monthly" },
    { id: "2", date: "2023-05-01",planName: "Starter", amount: 2700, planPeriod: "Yearly" },
    { id: "3", date: "2023-04-01",planName: "Plus", amount: 1200, planPeriod: "3 Month" },
    { id: "4", date: "2023-03-01",planName: "Pro", amount: 700, planPeriod: "Monthly" },
    { id: "5", date: "2023-02-01", planName: "Pro",amount:700, planPeriod: "Yearly"},
  ],
  latestOrders: [
    {
      id: "1",
      date: "2023-06-15",
      store: "Store A",
      amount: 150.0,
      status: "Completed",
      paymentProvider: "Stripe",
      identifier: "ORD123",
      planName: "Premium Plan",
      planPeriod: "Monthly",
      discount: 10,
    },
    {
      id: "2",
      date: "2023-06-14",
      store: "Store B",
      amount: 89.99,
      status: "Processing",
      paymentProvider: "PayPal",
      identifier: "ORD124",
      planName: "Basic Plan",
      planPeriod: "Yearly",
      discount: 0,
    },
    {
      id: "3",
      date: "2023-06-13",
      store: "Store C",
      amount: 200.5,
      status: "Completed",
      paymentProvider: "Stripe",
      identifier: "ORD125",
      planName: "Premium Plan",
      planPeriod: "Monthly",
      discount: 15,
    },
    {
      id: "4",
      date: "2023-06-12",
      store: "Store D",
      amount: 75.0,
      status: "Shipped",
      paymentProvider: "PayPal",
      identifier: "ORD126",
      planName: "Basic Plan",
      planPeriod: "Monthly",
      discount: 5,
    },
    {
      id: "5",
      date: "2023-06-11",
      store: "Store E",
      amount: 120.75,
      status: "Completed",
      paymentProvider: "Stripe",
      identifier: "ORD127",
      planName: "Premium Plan",
      planPeriod: "Yearly",
      discount: 20,
    },
  ],
  latestVPayTransactions: [
    {
      id: "1",
      date: "2023-06-15",
      store: "Store A",
      amount: 50.0,
      status: "Completed",
      paymentProvider: "VPay",
      identifier: "VPAY123",
    },
    {
      id: "2",
      date: "2023-06-14",
      store: "Store B",
      amount: 75.5,
      status: "Completed",
      paymentProvider: "VPay",
      identifier: "VPAY124",
    },
    {
      id: "3",
      date: "2023-06-13",
      store: "Store C",
      amount: 100.0,
      status: "Pending",
      paymentProvider: "VPay",
      identifier: "VPAY125",
    },
    {
      id: "4",
      date: "2023-06-12",
      store: "Store D",
      amount: 25.0,
      status: "Completed",
      paymentProvider: "VPay",
      identifier: "VPAY126",
    },
    {
      id: "5",
      date: "2023-06-11",
      store: "Store E",
      amount: 60.25,
      status: "Completed",
      paymentProvider: "VPay",
      identifier: "VPAY127",
    },
  ],
}