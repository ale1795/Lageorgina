export default function Footer() {
    return (
        <footer className="py-8 border-t border-rosegold/20 bg-white">
            <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/70">
                <div>© {new Date().getFullYear()} La Georgina. Todos los derechos reservados.</div>
            </div>
        </footer>
    );
}
