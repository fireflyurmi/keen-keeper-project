"use client";

import { InteractionProvider } from "@/lib/context/InteractionContext";

export default function Providers({ children }) {
  return (
    <InteractionProvider>
      {children}
    </InteractionProvider>
  );
}