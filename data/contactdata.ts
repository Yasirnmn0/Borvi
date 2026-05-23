import { Phone, Mail, MapPin, Clock } from "lucide-react";
export const channels = [
  {
    icon: Phone,
    label: "Phone",
    value: " +49 30 12345678",
    subtext: "Mon - Sun: 8:00 AM - 8:00 PM",
    link: "tel: +49 30 12345678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@borvi.com",
    subtext: "We reply within 1 hour",
    link: "mailto:hello@borvi.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Friedrichstraße 123,",
    subtext: "10117 Berlin, Germany",
    link: "https://www.google.com/maps?q=Friedrichstraße+123,+10117+Berlin,+Germany",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sun: 8:00 AM - 8:00 PM",
    subtext: "Open All Days",
    link: null,
  },
];
