const links = [
  ["Sobre", "#sobre"], ["Experiência", "#experiencia"], ["Formação", "#formacao"], ["IA & Automação", "#ia"], ["Contato", "#contato"],
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-sm font-black tracking-[0.28em] text-white">GMMC</a>
        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="transition hover:text-electric-400">{label}</a>)}
        </div>
        <a href="#contato" className="rounded-full border border-electric-400/40 px-4 py-2 text-sm font-semibold text-electric-400 transition hover:bg-electric-400 hover:text-navy-950">Contato</a>
      </nav>
    </header>
  );
}
