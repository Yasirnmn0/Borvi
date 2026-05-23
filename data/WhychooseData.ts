import {
  ShieldCheck,
  Tag,
  Truck,
  Headphones,
  CalendarDays,
  HeartHandshake,
  Users,
  Wrench,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";

export const advantageItems = [
  {
    icon: ShieldCheck,
    title: "Top Quality Equipment",
    desc: "Well-maintained, latest equipment for every need.",
  },
  {
    icon: Tag,
    title: "Affordable Pricing",
    desc: "Best prices with flexible plans that fit your budget.",
  },
  {
    icon: Truck,
    title: "Fast Delivery & Pickup",
    desc: "Quick delivery and easy pickup at your convenience.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: "Our team is always ready to help you, anytime.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Rental Plans",
    desc: "Hourly, daily, weekly, or monthly - choose what works for you.",
  },
  {
    icon: HeartHandshake,
    title: "Safe & Hassle Free",
    desc: "Easy booking, secure payments, and hassle-free process.",
  },
];

export const metricStats = [
  { icon: Users, value: "1000+", label: "Happy Customers" },
  { icon: Wrench, value: "1500+", label: "Equipment" },
  { icon: MapPin, value: "25+", label: "Areas Served" },
  { icon: Star, value: "4.8/5", label: "Customer Rating" },
];

export const testimonials = [
  {
    name: "Rohit Sharma",
    location: "Delhi",
    text: "Great experience! Equipment was in excellent condition and delivery was very prompt.",
    image: "/images/User1.png",
  },
  {
    name: "Anjali Verma",
    location: "Noida",
    text: "Very affordable and the app is so easy to use. Highly recommended!",
    image: "/images/User2.png",
  },
  {
    name: "Vikram Mehta",
    location: "Gurgaon",
    text: "Rented a tent for our trip. Quality was amazing and the process was smooth.",
    image: "/images/User3.png",
  },
  {
    name: "Siddharth Malhotra",
    location: "Mumbai",
    text: "Excellent support team and seamless booking. Will definitely use it again.",
    image: "/images/User4.png",
  },
];
