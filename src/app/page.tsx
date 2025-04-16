import type { Metadata } from "next";
import React from "react";
import "../app/globals.css";
import HomeHeroSection from "@/widgets/pages/home/hero-section";

const LazyHomeMostRelevantSection = React.lazy(
  () => import("@/widgets/pages/home/relevant-section")
);
const LazyHomeDiscoverSection = React.lazy(
  () => import("@/widgets/pages/home/discover-section")
);
const LazyHomeWhyChooseSection = React.lazy(
  () => import("@/widgets/pages/home/why-choose")
);
const LazyHomeTrendingSection = React.lazy(
  () => import("@/widgets/pages/home/trending-section")
);
const LazyHomeAdventureSection = React.lazy(
  () => import("@/widgets/pages/home/adventure-section")
);

export const metadata: Metadata = {
  title: "Home",
  description:
    "Global money transfers, secure savings, bill payments, defi deposits, and swaps; physical and virtual cards; a multicurrency wallet; gift cards; tuition fee payments; a vault for saving in Pounds, Dollars, and Naira; flight bookings; and lifestyle services such as booking lounges, stays, and vacations.",
  keywords:
    "Payment, send money, pay bills, buy airtime, receive money, virtual cards, purchase physical card, receive money from the US, create a bank account, create USD bank account, open an account in the US, open pounds account, get a USD card, flight bookings, book flights, vacations, staycations, save, savings, savings on Vault, Vault, lifestyle",
};

export default function Home() {
  return (
    <main className="w-full">
      <HomeHeroSection />
      <LazyHomeMostRelevantSection />
      <LazyHomeDiscoverSection />
      <LazyHomeWhyChooseSection />
      <LazyHomeTrendingSection />
      <LazyHomeAdventureSection />
    </main>
  );
}
