import { WhatsApp, Mail, Phone } from "../assets/icons/SocialNetIcons";

export const Info = [
  {
    id: 4,
    name: "+1 561 359 4933",
    description: "Direct Phone Numer for Dispatch 24h 7 Days",
    link: "tel: +1 561 359 4933",
    logo: <Phone clasName="w-10 h-10" />,
  },
  {
    id: 5,
    name: "fidorides@gmail.com",
    description: "E-mail for reservations with more of 24h advance notice",
    link: "mailto:fidorides@gmail.com",
    logo: <Mail clasName="w-10 h-10" />,
  },

  {
    id: 6,
    name: "+1 561 359 4933",
    description: "Whatsapp Direct Link conversation in real time",
    link: "https://api.whatsapp.com/send/?phone=15613594933&text&type=phone_number&app_absent=0",
    logo: <WhatsApp clasName="w-10 h-10 bg-transparent" />,
  },
];
