"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Button from "../common/Button";

interface SubMenuSection {
  title: string;
  items: Array<{
    label: string;
    href: string;
    icon?: boolean;
    badge?: string;
  }>;
}

interface DesktopMenuProps {
  label: string;
  href: string;
  sections?: SubMenuSection[];
}

const DesktopMenu = ({ label, href, sections }: DesktopMenuProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="relative">
      <Button
        as={Link}
        href={href}
        className="hover:text-primary flex items-center gap-1.5 rounded-md transition-colors"
        onClick={handleOpenClose}
      >
        {label}
        {sections && (
          <ChevronDown
            className={`h-3.5 w-3.5 stroke-3 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </Button>

      {sections && isOpen && (
        <div
          className="fixed right-0 left-0 overflow-hidden border-t border-gray-300 bg-white shadow-xl"
          style={{ top: "var(--header-height, 80px)" }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-4 gap-8 py-10">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="mb-5 inline-flex py-1 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                  {section.title}
                </h3>
                <ul className="mb-8 space-y-1 lg:mb-0">
                  {section.items.map((item) => (
                    <li className="group -mx-3" key={item.label}>
                      <Button
                        size="small"
                        as={Link}
                        href={item.href}
                        className="group hover:text-primary flex items-center gap-3 pl-0 transition-colors"
                      >
                        {item.icon && (
                          <span className="h-5 w-5 shrink-0 rounded-full bg-gray-200 transition-colors group-hover:bg-gray-300" />
                        )}
                        <span className="flex items-center gap-2">
                          {item.label}
                          {item.badge && (
                            <span className="rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-700">
                              {item.badge}
                            </span>
                          )}
                        </span>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default DesktopMenu;
