"use client";

import GlobalProvider from "@/base/context/globalProvider";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <GlobalProvider>{children}</GlobalProvider>;
}
