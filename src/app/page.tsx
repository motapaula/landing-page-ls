'use client'

import Image from "next/image";
import StyledComponentsRegistry from "@/lib/registry";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import MoreInfo from "@/components/MoreInfo";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <MoreInfo />      
      <CallToAction />
      
      
    </>
  )
}



