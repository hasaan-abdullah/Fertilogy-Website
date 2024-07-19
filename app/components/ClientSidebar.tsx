// components/ClientSidebar.tsx
"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";

export default function ClientSidebar() {
  const pathname = usePathname();
  if (pathname === "/fertilityai") {
    return null;
  }
  return <Sidebar />;
}
