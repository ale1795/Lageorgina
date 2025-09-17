import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "outline";
};

export function Button({ className = "", variant = "primary", ...props }: Props) {
    const base = "inline-flex items-center justify-center px-4 py-2 text-sm rounded-2xl transition border";
    const styles =
        variant === "primary"
            ? "bg-pink-600 text-white border-pink-600 hover:opacity-90"
            : variant === "secondary"
                ? "bg-white text-black border-black hover:bg-neutral-100"
                : "bg-transparent text-white border-white/50 hover:bg-white/10";
    return <button className={`${base} ${styles} ${className}`} {...props} />;
}
