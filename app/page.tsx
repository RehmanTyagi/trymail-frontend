"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Send, ChevronDown } from "lucide-react";
import { CgMenu } from "react-icons/cg";

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = React.useState("English");
  return (
    <nav>
      {/* promotional header */}
      <div className="bg-foreground flex justify-end text-sm">
        <div className="flex items-center gap-1.5 p-2 text-white">
          <Send className="h-4 w-4" />
          <span className="font-semibold">Contact Sales</span>
        </div>
        <span className="mx-1 border-l-[0.5px] border-black" />
        <div className="flex cursor-pointer items-center gap-1.5 p-2 text-white">
          <Globe className="h-4 w-4" />
          <span>{currentLanguage}</span>
          <ChevronDown className="h-3.5 w-3.5" />
        </div>
      </div>
      {/* promotional header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Image
          className="h-10 w-24"
          src="./logo.svg"
          alt="Logo"
          fetchPriority="high"
          width={100}
          height={100}
        />

        <button className="md:hidden">
          <CgMenu className="h-7 w-7 stroke-[0.25px]" />
        </button>
      </div>
      <section className="flex flex-col px-5 py-2">
        <div>
          <h1 className="text-center text-3xl leading-tight font-bold">
            Reliable Email API for Transactional Emails at Scale
          </h1>
          <p className="mt-4 text-center text-sm leading-relaxed text-gray-600">
            Your transactional emails land in inboxes, not spam folders, even at
            high volume.
          </p>
        </div>
        <div>
          <Image
            src="/images/hero.avif"
            alt="hero image"
            width={800}
            height={500}
            className="h-auto w-full"
          />
        </div>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 rounded-md p-4 text-sm font-medium md:mx-auto">
          Get Started
        </button>
      </section>
    </nav>
  );
}
