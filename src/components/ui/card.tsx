import React from "react";

export function Card({ className = "", children }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur ${className}`}>{children}</div>;
}
export function CardContent({ className = "", children }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={className}>{children}</div>;
}
