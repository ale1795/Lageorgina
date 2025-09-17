// src/app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lageorgina.com";
const BRAND = "La Georgina";
const DESCRIPTION =
    "Comunicadora y creadora salvadoreña. Eventos, colaboraciones y contenido positivo.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE),
    title: {
        default: `${BRAND} — Sitio Oficial`,
        template: `%s · ${BRAND}`,
    },
    description: DESCRIPTION,
    keywords: [
        "Georgina",
        "La Georgina",
        "presentadora",
        "El Salvador",
        "host de eventos",
        "creadora de contenido",
    ],
    authors: [{ name: "La Georgina" }],
    creator: "La Georgina",
    publisher: "La Georgina",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "/",
        languages: { es: "/", en: "/en" },
    },
    openGraph: {
        type: "website",
        url: SITE,
        siteName: BRAND,
        title: `${BRAND} — Sitio Oficial`,
        description: DESCRIPTION,
        images: [
            {
                url: "/og/default.jpg",
                width: 1200,
                height: 630,
                alt: BRAND,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@LaGeorgina", // cámbialo si es distinto
        creator: "@LaGeorgina",
        title: `${BRAND} — Sitio Oficial`,
        description: DESCRIPTION,
        images: ["/og/default.jpg"],
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
            { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
        ],
        apple: [{ url: "/icons/icon-192.png" }],
    },
    manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
    themeColor: "#b76e79", // rosegold
};

function GA() {
    const id = process.env.NEXT_PUBLIC_GA_ID;
    if (!id) return null;
    return (
        <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}');
          `,
                }}
            />
        </>
    );
}

function MetaPixel() {
    const pid = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    if (!pid) return null;
    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
            (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','${pid}'); fbq('track','PageView');
          `,
                }}
            />
            <noscript>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src={`https://www.facebook.com/tr?id=${pid}&ev=PageView&noscript=1`}
                    alt=""
                />
            </noscript>
        </>
    );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
        <body className="bg-white text-foreground">
        <GA />
        <MetaPixel />
        {children}
        </body>
        </html>
    );
}
