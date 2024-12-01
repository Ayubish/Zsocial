// /src/app/page.js
"use client";

import Link from "next/link";
import Feeds from "@/components/Feeds";

export default function MyApp() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Feeds />
    </main>
  );
}
