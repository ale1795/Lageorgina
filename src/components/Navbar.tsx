"use client";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <div className="fixed top-0 inset-x-0 z-50 border-b border-rosegold/30 bg-white/80 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between text-foreground">
                <a href="#" className="font-bold text-xl tracking-tight text-rosegold">La Georgina</a>
                <div className="hidden md:flex gap-6 text-sm">
                    <a href="#about" className="hover:text-rosegold">Sobre mí</a>
                    <a href="#services" className="hover:text-rosegold">Servicios</a>
                    <a href="#contact" className="hover:text-rosegold">Contacto</a>
                </div>
                <div className="hidden md:flex items-center gap-3">
                    <a href="#contact"><Button>Agenda una llamada</Button></a>
                </div>
                <button className="md:hidden text-rosegold" onClick={() => setOpen(!open)} aria-label="menu">☰</button>
            </div>
            {open && (
                <div className="md:hidden border-t border-rosegold/30 bg-white">
                    <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
                        <a href="#about" onClick={() => setOpen(false)}>Sobre mí</a>
                        <a href="#services" onClick={() => setOpen(false)}>Servicios</a>
                        <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>
                    </div>
                </div>
            )}
        </div>
    );
}
