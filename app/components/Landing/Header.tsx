"use client";

import Image from "next/image";
import { CircleUserRound } from "lucide-react";
import Button from "../common/Button";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";

interface SubMenuSection {
  title: string;
  items: Array<{
    label: string;
    href: string;
    icon?: boolean;
    badge?: string;
  }>;
}

export interface NavigationWithSections {
  label: string;
  href: string;
  sections?: SubMenuSection[];
}

const menus: NavigationWithSections[] = [
  {
    label: "Products",
    href: "#",
    sections: [
      {
        title: "SEND AND RECEIVE EMAILS",
        items: [
          { label: "Email API", href: "/products/email-api", icon: true },
          { label: "SMTP Relay", href: "/products/smtp-relay", icon: true },
          {
            label: "Dynamic email templates",
            href: "/products/email-templates",
            icon: true,
          },
          {
            label: "Inbound email routing",
            href: "/products/inbound-routing",
            icon: true,
          },
          {
            label: "Email verification",
            href: "/products/email-verification",
            icon: true,
          },
        ],
      },
      {
        title: "MANAGE YOUR ACCOUNT",
        items: [
          { label: "User management", href: "/account/users", icon: true },
          { label: "Multiple domains", href: "/account/domains", icon: true },
          {
            label: "Suppression lists",
            href: "/account/suppression",
            icon: true,
          },
          { label: "Analytics", href: "/account/analytics", icon: true },
          {
            label: "MCP server",
            href: "/account/mcp",
            icon: true,
            badge: "NEW",
          },
        ],
      },
      {
        title: "CREATE EMAILS",
        items: [
          { label: "Drag & drop builder", href: "/tools/builder", icon: true },
          {
            label: "HTML template editor",
            href: "/tools/html-editor",
            icon: true,
          },
          {
            label: "Rich-text email editor",
            href: "/tools/editor",
            icon: true,
          },
          {
            label: "Email split testing",
            href: "/tools/split-testing",
            icon: true,
          },
        ],
      },
      {
        title: "SEND SMS",
        items: [
          {
            label: "Transactional SMS",
            href: "/sms/transactional",
            icon: true,
            badge: "US & CA",
          },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Resources",
    href: "/resources",
  },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <Link href="/" className="h-auto w-30">
        <Image
          src="logo.svg"
          alt="trymail-logo"
          width={100}
          height={100}
          className="h-auto w-full"
        />
      </Link>
      <nav>
        <ul className="hidden lg:flex lg:items-center lg:gap-10">
          {menus.map((item) => (
            <DesktopMenu
              key={item.label}
              href={item.href}
              label={item.label}
              sections={item.sections}
            />
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-3.5 text-xs">
        <Button as="a" href="/login" size="small">
          <CircleUserRound size={20} />
          <span>Login</span>
        </Button>
        <Button as="a" href="/signup" size="small" variant="primary">
          Sign up
        </Button>
      </div>
    </header>
  );
};

export default Header;
