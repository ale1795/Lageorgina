// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = process.env.NEXT_PUBLIC_SITE_URL || "https://lageorgina.com";
    const routes = [
        "/",
        "/en",
        "/#about",
        "/#services",
        "/#contact",
        // agrega más anchors/secciones o rutas nuevas cuando existan
    ];
    const now = new Date();
    return routes.map((r) => ({
        url: `${base}${r}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: r === "/" ? 1 : 0.7,
    }));
}
