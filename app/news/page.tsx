"use client";
import { useEffect } from "react";
import { usePageHandler } from "../hooks/usePage";

export default function News() {
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler("news");
  });

  return (
    <main className="bg-zinc-900 w-full flex flex-col gap-8 items-center justify-center"></main>
  );
}
