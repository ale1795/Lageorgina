import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function About() {
    const bullets = ["Presentadora de TV 11 años", "Embajadora UNICEF", "Miss Internacional El Salvador 2008"];
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sobre mí</h2>
                    <p className="mt-4 text-foreground/80">
                        Comunicadora salvadoreña, creadora digital y mamá orgullosa. Mi propósito es inspirar con experiencias reales.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm">
                        {bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2 text-foreground/90">
                                <CheckCircle className="h-4 w-4 text-rosegold" /> {b}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-xl ring-1 ring-rosegold/20 relative">
                        <Image
                            src="https://images.unsplash.com/photo-1520975922325-24baf955c082?q=80&w=1600&auto=format&fit=crop"
                            alt="About Georgina"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
