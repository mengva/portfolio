"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, profile } from "@/lib/data";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:flex lg:flex-col lg:justify-between border-b lg:border-b-0 lg:border-r border-ink-600/60 px-6 lg:px-8 py-6 lg:py-12">
      <div>
        <h1>
          <Link
            href="/"
            className="font-display text-lg text-paper focus-ring inline-block"
          >
            Mengva Chuepor
          </Link>
        </h1>
        <nav aria-label="Site navigation" className="mt-4 lg:mt-10">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-sm transition-colors focus-ring inline-block w-full ${active
                        ? "text-teal"
                        : "text-paper-muted hover:text-teal"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <p className="hidden lg:block text-xs text-paper-muted">
        {profile.location}
      </p>
    </header>
  );
}
