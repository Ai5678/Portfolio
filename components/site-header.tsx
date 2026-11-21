import Link from "next/link";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-page flex-wrap items-center justify-between gap-x-8 gap-y-3 px-gutter py-6">
      <Link
        href="/"
        aria-label="Narisara Tochamnong, home"
        className="flex items-center gap-3"
      >
        {/* Yellow fill behind black text: the only allowed use of the accent on paper. */}
        <span
          aria-hidden="true"
          className="grid size-8 place-items-center rounded-full bg-accent font-mono text-label font-bold text-ink"
        >
          NT
        </span>
        <span className="font-mono text-label uppercase">Portfolio</span>
      </Link>

      <nav aria-label="Main">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-block py-2 font-mono text-label uppercase underline-offset-4 hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
