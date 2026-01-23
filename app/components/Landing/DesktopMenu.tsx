"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

  return (
    <li className="relative">
      <Link
        href={href}
        className="hover:text-primary flex items-center gap-1.5 rounded-md transition-colors"
        onMouseEnter={() => sections && setIsOpen(true)}
        onMouseLeave={() => sections && setIsOpen(false)}
      >
        {label}
        {sections && (
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>

      {sections && isOpen && (
        <div
          className="border-primary absolute top-full right-2/4 z-50 mt-6 min-w-max translate-x-2/4 overflow-hidden border bg-white"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="grid min-w-max grid-cols-4 gap-8 p-8">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="mb-4 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-3 text-sm text-gray-700 transition-colors hover:text-gray-900"
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
                      </Link>
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
