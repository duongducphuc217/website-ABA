"use client";
import React, { useState, useEffect, useRef } from "react";

export default function VisibilitySensor({ children, partialVisibility = true, offset }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // Convert offset.bottom to rootMargin if provided
    let rootMargin = "0px";
    if (offset?.bottom) {
      rootMargin = `0px 0px -${offset.bottom}px 0px`;
    } else if (offset?.top) {
      rootMargin = `-${offset.top}px 0px 0px 0px`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: partialVisibility ? 0.05 : 0.9,
        rootMargin,
      }
    );

    const currentTarget = domRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [partialVisibility, offset]);

  return (
    <span ref={domRef} style={{ display: "inline-block", width: "auto" }}>
      {children({ isVisible })}
    </span>
  );
}
