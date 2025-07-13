// components/image.tsx
"use client";

import NextImage, { ImageProps } from "next/image";

// Bisa kamu custom lagi nanti (e.g. shimmer, fallback)
export default function Image(props: ImageProps) {
  return <NextImage {...props} />;
}
