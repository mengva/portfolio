import { navItems, profile } from "@/lib/data";
import Link from "next/link";

export default function Nav() {

  return (
    <header className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:flex lg:flex-col lg:justify-between border-b lg:border-b-0 lg:border-r border-ink-600/60 px-6 lg:px-8 py-6 lg:py-12">
      <div>
        <Link
          href="#top"
          className="font-display text-lg text-paper focus-ring inline-block"
        >
          Mengva Chuepor
        </Link>
        <nav aria-label="Section navigation" className="hidden lg:block mt-10">
          <ul className="space-y-3">
            {navItems.map((item) => {
              return (
                <li key={item.href} className="w-full">
                  <Link
                    href={item.href}
                    className={`text-sm inline-block w-full hover:text-teal transition-colors focus-ring`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
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
