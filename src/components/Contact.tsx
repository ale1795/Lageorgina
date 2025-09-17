"use client";
import { Button } from "./ui/button";
import * as React from "react";

export default function Contact() {
    async function send(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = String(fd.get("name") || "");
        const email = String(fd.get("email") || "");
        const message = String(fd.get("message") || "");

        // mailto provisional (luego conectamos /api/contact con Resend)
        window.location.href = `mailto:hola@lageorgina.com?subject=Contacto&body=${encodeURIComponent(
            `Nombre: ${name}\nEmail: ${email}\n\n${message}`
        )}`;
    }

    return (
        <section id="contact" className="py-16 md:py-24 bg-white">
            <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Contacto</h2>
                    <p className="mt-3 text-foreground/80">Escríbenos o agenda una llamada.</p>
                    <div className="mt-6 flex gap-3">
                        <a
                            href="https://wa.me/50377777777?text=Hola%20La%20Georgina%2C%20me%20gustaría%20agendar%20una%20llamada."
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button>WhatsApp</Button>
                        </a>
                        <a href="https://calendly.com/tuusuario/20min" target="_blank" rel="noreferrer">
                            <Button variant="secondary">Calendly</Button>
                        </a>
                    </div>
                </div>
                <form className="grid gap-4" onSubmit={send}>
                    <div>
                        <label className="text-sm">Nombre</label>
                        <input
                            name="name"
                            className="mt-1 w-full border rounded-xl px-3 py-2 bg-white border-rosegold/20"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="mt-1 w-full border rounded-xl px-3 py-2 bg-white border-rosegold/20"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm">Mensaje</label>
                        <textarea
                            name="message"
                            className="mt-1 w-full border rounded-xl px-3 py-2 h-28 bg-white border-rosegold/20"
                            required
                        />
                    </div>
                    <Button type="submit">Enviar</Button>
                </form>
            </div>
        </section>
    );
}
