import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-rosegold-light to-white">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-rosegold/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-rosegold-light rounded-full blur-3xl" />
            <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="inline-block px-3 py-1 text-xs rounded-full bg-rosegold/10 text-rosegold">Creadora · Host · Marca personal</p>
                    <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-foreground">
                        Inspira con <span className="text-rosegold">tu historia</span> y comparte <span className="text-rosegold">tu luz</span>
                    </h1>
                    <p className="mt-4 text-foreground/80 max-w-xl">
                        Soy Georgina Cisneros, comunicadora, presentadora y creadora. Descubre eventos, colaboraciones y contenido positivo.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <a href="#contact"><Button>Agenda una llamada</Button></a>
                        <a href="#services" className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm border-rosegold hover:bg-rosegold-light">
                            Ver servicios
                        </a>
                    </div>
                </div>
                <div>
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ring-1 ring-rosegold/20">
                        <img
                            src="https://images.unsplash.com/photo-1519017768885-bc3c9abcf5d5?q=80&w=1600&auto=format&fit=crop"
                            alt="Georgina"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
