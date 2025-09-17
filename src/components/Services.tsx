import { Card, CardContent } from "./ui/card";
import { CheckCircle } from "lucide-react";

const items = [
    {
        title: "Agencia",
        desc: "Producción de contenido digital, storytelling y consultoría creativa.",
        bullets: ["Branding y guía visual", "Video & redes", "Campañas de marketing"],
    },
    {
        title: "Colaboraciones",
        desc: "Trabajo con marcas para campañas y lanzamientos.",
        bullets: ["Embajadora de marca", "Contenido patrocinado", "Estrategia digital"],
    },
    {
        title: "Host de eventos",
        desc: "Presentadora, maestra de ceremonias y speaker.",
        bullets: ["Eventos corporativos", "Activaciones de marca", "Moderación de paneles"],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-24 bg-white">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Servicios</h2>
                <p className="text-foreground/80 mt-2 max-w-2xl">Agencia · Colabs marcas · Host Eventos</p>
                <div className="mt-10 grid md:grid-cols-3 gap-6">
                    {items.map((s) => (
                        <Card key={s.title} className="rounded-2xl">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-xl text-foreground">{s.title}</h3>
                                <p className="mt-2 text-sm text-foreground/80">{s.desc}</p>
                                <ul className="mt-4 space-y-2 text-sm">
                                    {s.bullets.map((b) => (
                                        <li key={b} className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-rosegold" /> {b}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
