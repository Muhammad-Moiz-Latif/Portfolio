"use client";

import { useRef } from "react";
import {
    motion,
    MotionConfig,
    useReducedMotion,
    useScroll,
    useTransform,
    type HTMLMotionProps,
} from "motion/react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const revealTransition = {
    duration: 0.7,
    ease: EASE,
};

export const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

export function MotionProvider({ children }: { children: ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function MotionReveal({
    children,
    className,
    delay = 0,
    ...props
}: RevealProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{ ...revealTransition, delay }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function MotionMountReveal({
    children,
    className,
    delay = 0,
    ...props
}: RevealProps) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ ...revealTransition, delay }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function MotionStagger({
    children,
    className,
    ...props
}: HTMLMotionProps<"div">) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function MotionItem({
    children,
    className,
    ...props
}: HTMLMotionProps<"div">) {
    return (
        <motion.div
            variants={fadeUp}
            transition={revealTransition}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function MotionListItem({
    children,
    className,
    ...props
}: HTMLMotionProps<"li">) {
    return (
        <motion.li
            variants={fadeUp}
            transition={revealTransition}
            className={className}
            {...props}
        >
            {children}
        </motion.li>
    );
}

/**
 * Hero portrait. Scale only (no opacity) so the image is painted in the
 * server HTML and LCP isn't gated on hydration.
 */
export function MotionScale({
    children,
    className,
    ...props
}: HTMLMotionProps<"div">) {
    return (
        <motion.div
            initial={{ scale: 0.97 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

/**
 * Scroll-drawn journey route. Same props as before.
 * A faint static track sits underneath; the coloured route on top is
 * revealed top-to-bottom by clip-path as the container scrolls through
 * the viewport. Must be placed inside a `relative` parent that spans
 * the whole timeline.
 */
export function MotionRoutePath({
    segments,
    lastX,
    lastY,
    tailEnd,
}: {
    segments: string[];
    lastX: number;
    lastY: number;
    tailEnd: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        // 0 when the timeline's top reaches 75% down the viewport,
        // 1 when its bottom reaches 45% down. Tune these two numbers.
        offset: ["start 0.75", "end 0.45"],
    });

    const clipPath = useTransform(scrollYProgress, (p) => {
        if (!(p > 0)) return "inset(0 0 100% 0)"; // also catches NaN
        if (p >= 0.999) return "inset(-4px)";
        return `inset(-4px -4px ${(1 - p) * 100}% -4px)`;
    });

    const tail = `M ${lastX} ${lastY} L ${lastX} ${tailEnd}`;
    const svgProps = {
        viewBox: "0 0 100 100",
        preserveAspectRatio: "none" as const,
        className: "absolute inset-0 h-full w-full overflow-visible",
    };

    return (
        <div
            ref={ref}
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden lg:block"
        >
            {/* Static track */}
            <svg {...svgProps}>
                {[...segments, tail].map((d) => (
                    <path
                        key={d}
                        d={d}
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                        className="stroke-ink/15"
                        strokeWidth={1}
                    />
                ))}
            </svg>

            {/* Drawn route, revealed by scroll */}
            <motion.svg
                {...svgProps}
                style={{ clipPath: reduceMotion ? "none" : clipPath }}
            >
                {segments.map((d, i) => {
                    const isLast = i === segments.length - 1;
                    return (
                        <path
                            key={d}
                            d={d}
                            fill="none"
                            vectorEffect="non-scaling-stroke"
                            className={isLast ? "stroke-accent" : "stroke-ink/70"}
                            strokeWidth={isLast ? 2 : 1}
                        />
                    );
                })}
                <path
                    d={tail}
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                    className="stroke-accent"
                    strokeWidth={2}
                />
            </motion.svg>
        </div>
    );
}

export function CopyEmailLink({
    email,
    children,
    onCopy,
    ...props
}: {
    email: string;
    children: ReactNode;
    onCopy?: () => void;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            onCopy?.();
        } catch (error) {
            console.error("Unable to copy email address.", error);
        }
    };

    return (
        <a href={`mailto:${email}`} onClick={copyEmail} {...props}>
            {children}
        </a>
    );
}


/**
 * Timeline milestone. Reveals on its own once it passes ~72% down the
 * viewport, which is roughly where the route's drawing edge is.
 * Use inside a plain <ol>, not inside MotionStagger.
 */
export function MotionMilestone({
    children,
    className,
    ...props
}: HTMLMotionProps<"li">) {
    return (
        <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -28% 0px" }}
            variants={fadeUp}
            transition={revealTransition}
            className={className}
            {...props}
        >
            {children}
        </motion.li>
    );
}