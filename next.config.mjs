/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Opción A (recomendada):
        remotePatterns: [
            { protocol: "https", hostname: "images.unsplash.com" },
        ],
        // Opción B (equivalente):
        // domains: ["images.unsplash.com"],
    },
};

export default nextConfig;
