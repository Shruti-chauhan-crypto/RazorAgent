import {
  FiMessageCircle,
  FiSearch,
  FiShoppingCart,
  FiCreditCard,
  FiTrendingUp,
  FiStar,
} from "react-icons/fi";

export const features = [
  {
    id: 1,
    title: "AI Shopping Assistant",
    description:
      "Understands customer shopping requests using natural language and recommends products instantly.",
    icon: FiMessageCircle,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    id: 2,
    title: "Smart Product Search",
    description:
      "Search products by category, budget, brand, color, and size from the merchant catalog.",
    icon: FiSearch,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    id: 3,
    title: "AI Cart Builder",
    description:
      "Add, remove, and update shopping cart items directly inside the AI conversation.",
    icon: FiShoppingCart,
    color: "text-teal-600",
    bg: "bg-teal-100",
  },
  {
    id: 4,
    title: "Razorpay Checkout",
    description:
      "Generate Razorpay checkout and complete secure payments without leaving the chat.",
    icon: FiCreditCard,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    id: 5,
    title: "Merchant Analytics",
    description:
      "Track orders, successful payments, revenue, and customer conversion in one dashboard.",
    icon: FiTrendingUp,
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    id: 6,
    title: "AI Upselling Engine",
    description:
      "Suggest complementary products to increase average order value and merchant revenue.",
    icon: FiStar,
    color: "text-pink-600",
    bg: "bg-pink-100",
  },
];