"use client"

import { useState } from "react";
import { cva } from "class-variance-authority";

const logoWallStyles = cva("flex mx-auto max-w-full p-[20px_10px]", {
    variants: {
        direction: {
            horizontal: "flex-col",
            vertical: "flex-row justify-center h-full"
        }
    }
});

const marqueeStyles = cva("relative flex overflow-hidden select-none justify-start w-full", {
    variants: {
        direction: {
            horizontal: "mask-horizontal gap-[calc(var(--size)/14)]",
            vertical: "mask-vertical flex-col h-full gap-[calc(var(--size)/14)]"
        },
        paused: {
            true: "[&_.animate-scroll]:animation-paused"
        }
    }
});

const scrollContainerStyles = cva("flex-shrink-0 flex items-center justify-around gap-[calc(var(--size)/14)]", {
    variants: {
        direction: {
            horizontal: "min-w-full animate-scroll",
            vertical: "min-h-full flex-col animate-scroll-vertical"
        },
        reverse: {
            true: "animate-reverse"
        }
    }
});

const logoStyles = cva("object-contain", {
    variants: {
        direction: {
            horizontal: "aspect-video w-[var(--size)] p-[calc(var(--size)/10)]",
            vertical: "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]"
        }
    }
});

function LogoWall({
    items = [],
    direction = "horizontal",
    pauseOnHover = false,
    size = "clamp(8rem, 1rem + 30vmin, 25rem)",
    duration = "60s",
    className,
}: {
    items: Array<{ imgUrl: string; altText: string, url: string }>;
    direction?: "horizontal" | "vertical";
    pauseOnHover?: boolean;
    size?: string;
    duration?: string;
    className?: string;
}) {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <article
            className={logoWallStyles({ direction, className })}
            style={{
                ["--size" as string]: size,
                ["--duration" as string]: duration,
            }}
        >
            {/* Forward scroll */}
            <div
                className={marqueeStyles({ direction, paused: isPaused })}
                onMouseEnter={() => pauseOnHover && setIsPaused(true)}
                onMouseLeave={() => pauseOnHover && setIsPaused(false)}
            >
                {[1, 2].map((i) => (
                    <div
                        key={`forward-${i}`}
                        className={scrollContainerStyles({ direction })}
                        aria-hidden={i > 1}
                    >
                        {items.map((item, idx) => (
                            <div key={idx} className="relative">
                                <img
                                    key={`f-${idx}-${i}`}
                                    src={item.imgUrl}
                                    alt={item.altText}
                                    className={logoStyles({ direction })}
                                />
                                <a className="absolute inset-0 text-transparent" href={item.url}>{item.altText}</a>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </article>
    );
}

export default LogoWall;
