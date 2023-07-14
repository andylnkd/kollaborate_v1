"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DesktopNavigation({ routes, classNames }) {
  return (
    <nav className={classNames}>
      <ul className='flex space-x-4 lg:space-x-8 rounded-full px-6 py-1.5 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10'>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "relative text-sm font-normal transition-colors text-gray-200 hover:text-gray-500",
              route.active ? "text-white" : "text-gray-300"
            )}
          >
            {route.label}
            {route.active && (
              <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 dark:from-indigo-400/0 dark:via-indigo-400/40 dark:to-indigo-400/0' />
            )}
          </Link>
        ))}
      </ul>
    </nav>
  );
}