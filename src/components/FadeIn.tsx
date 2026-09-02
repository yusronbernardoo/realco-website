"use client";

import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export default function FadeIn({ children, className = "" }: FadeInProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
