import { Header } from "@/component/Header";
import { PopupTestimonial } from "@/component/Popup-testimonals";
import { Stats } from "@/component/stats";
import { Testimonials } from "@/component/Testimonials";
import { TradingForm } from "@/component/TradingForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Stats />
        <TradingForm />
        <Testimonials />
      </div>
      <PopupTestimonial />
    </main>
  );
}
