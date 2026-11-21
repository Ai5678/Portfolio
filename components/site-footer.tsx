// Sits directly under the yellow contact section, so it shares the accent fill
// and the two read as one band (as in the draft).
export default function SiteFooter() {
  return (
    <footer className="bg-accent text-ink">
      <div className="mx-auto flex max-w-page flex-wrap justify-between gap-4 px-gutter py-8 font-mono text-label uppercase">
        {/* Year is hardcoded: with cacheComponents on, new Date() in a server component breaks prerendering. */}
        <p>© 2026 Narisara Tochamnong</p>
        <p>Built with Next.js &amp; TypeScript</p>
      </div>
    </footer>
  );
}
