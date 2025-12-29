/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote?: string;
    name?: string;
    title?: string;
    img?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast"
        ? "20s"
        : speed === "normal"
        ? "40s"
        : "80s"
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
            flex-shrink-0 border-slate-800 p-3 md:p-6 md:w-[60vw]"
            style={{ background: "rgb(4,7,29)" }}
          >
            <blockquote className="flex items-center justify-center w-full h-full">
              {/* IMAGE MODE */}
              {item.img ? (
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={item.img}
                    alt="certificate / profile"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              ) : (
                /* TEXT MODE (BACKWARD COMPATIBLE) */
                <div>
                  <span className="text-sm md:text-lg leading-[1.6] text-white">
                    {item.quote}
                  </span>

                  <div className="mt-6 flex items-center gap-3">
                    <img src="/profile.svg" alt="profile" />
                    <div>
                      <div className="text-xl font-bold text-white">
                        {item.name}
                      </div>
                      <div className="text-sm text-white-200">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
