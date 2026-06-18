(function () {
  const currentPage = window.location.pathname.split("/").pop() || "main.html";

  const links = [
    { href: "main.html", label: "Home" },
    { href: "index.html", label: "Levels" },
    { href: "cheatsheet.html", label: "Cheat Sheet" },
  ];

  function linkClass(href) {
    const active = currentPage === href;
    return [
      "rounded-md px-3 py-1.5 transition-colors",
      active
        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
        : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60",
    ].join(" ");
  }

  const navLinks = links
    .map(
      (link) =>
        `<a href="${link.href}" class="${linkClass(link.href)}">${link.label}</a>`
    )
    .join("");

  const footerLinks = links
    .map(
      (link) =>
        `<a href="${link.href}" class="hover:text-emerald-400 transition-colors">${link.label}</a>`
    )
    .join("");

  const siteHeader = `
    <header class="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-sm">
      <div class="mx-auto flex max-w-5xl items-center gap-4 px-5 py-3">
        <a href="main.html" class="text-base font-bold tracking-wide text-slate-100 transition-colors hover:text-emerald-400">
          git<span class="text-emerald-400">::practice</span>
        </a>
        <nav class="ml-auto flex items-center gap-1 text-xs font-semibold" aria-label="Main navigation">
          ${navLinks}
        </nav>
        <span class="hidden rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400/90 sm:inline">
          CEP146
        </span>
      </div>
    </header>
  `;

  const siteFooter = `
    <footer class="mt-auto border-t border-slate-800 bg-slate-950">
      <div class="mx-auto max-w-5xl px-5 py-8">
        <div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p class="text-sm font-bold text-slate-200">Git Interactive Trainer</p>
            <p class="mt-1 text-xs text-slate-500">CEP146 · Seneca College</p>
          </div>
          <nav class="flex flex-wrap gap-4 text-xs text-slate-400" aria-label="Footer navigation">
            ${footerLinks}
          </nav>
        </div>
        <p class="mt-6 text-[10px] text-slate-600">
          © ${new Date().getFullYear()} CEP146 Team · Gabriel Brito Pinto &amp; Aleksandra Trunova
        </p>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("afterbegin", siteHeader);
  document.body.insertAdjacentHTML("beforeend", siteFooter);
})();
