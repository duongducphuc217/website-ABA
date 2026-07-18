"use client";
import { useEffect } from "react";
export default function BootstrapInit() {
  useEffect(() => {
    console.warn = () => {};
    if (typeof window !== "undefined") {
      const originalError = console.error;
      console.error = function (...args) {
        if (args.some(arg => typeof arg === "string" && arg.includes("bis_skin_checked"))) {
          return;
        }
        originalError.apply(console, args);
      };
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);
  return null;
}
