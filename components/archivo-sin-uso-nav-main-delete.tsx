"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <details className="dropdown">
      <summary className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8">Pet Shop</summary>
      
        <ul>
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={
                  'text-sm font-medium transition-colors hover:text-black'
                }
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>

  )
};

export default MainNav;
