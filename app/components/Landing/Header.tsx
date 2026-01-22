"use client";

import Image from "next/image";
import { CircleUserRound } from "lucide-react";
import Button from "../common/Button";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";

export interface Navigation {
  label: string;
  href: string;
  subMenu?: NavigationMenu;
}

interface NavigationMenu {
  heading: string;
  linkList: NavigationMenuItem[];
}

interface NavigationMenuItem {
  icon: boolean;
  label: string;
  href: string;
}

const menus: Navigation[] = [
  {
    label: "Products",
    href: "#",
    subMenu: {
      heading: "Send and receive emails",
      linkList: [
        {
          icon: true,
          label: "Email API",
          href: "/products/email-api",
        },
        {
          icon: true,
          label: "SMTP Relay",
          href: "/products/smtp-relay",
        },
        {
          icon: true,
          label: "Inbound Routing",
          href: "/products/inbound-routing",
        },
        {
          icon: true,
          label: "Email Verification",
          href: "/products/email-verification",
        },
      ],
    },
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
    <header className="flex items-center justify-between">
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
              subMenu={item.subMenu}
            />
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-3.5 text-xs">
        <Button size="small">
          <CircleUserRound size={20} />
          <span>Login</span>
        </Button>
        <Button size="small" variant="primary">
          Sign up
        </Button>
      </div>
    </header>
  );
};

export default Header;
