"use client";
import VehicleSlider from "./VehicleSlider";
import HeroSection from "./HeroSection";
import AuthModal from "./AuthModal";
import { useState } from "react";

const PublicHome = () => {
  const [authOpen, setAuthOpen] = useState(true);

  return (
    <>
      <HeroSection />
      <VehicleSlider />

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
};

export default PublicHome;
