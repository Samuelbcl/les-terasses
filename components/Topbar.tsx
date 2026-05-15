export default function Topbar() {
  return (
    <div className="bg-charbon text-blanc-craie text-xs uppercase tracking-wider">
      <div className="container-content flex items-center justify-between gap-8 flex-wrap py-3">
        <span>1, Avenue Rogier — 4000 Liège</span>
        <span>
          <a
            href="tel:+32498366677"
            className="opacity-85 hover:opacity-100 transition-opacity"
          >
            0498 / 36 66 77
          </a>{" "}
          ·{" "}
          <a
            href="mailto:info@lesterrasses-liege.com"
            className="opacity-85 hover:opacity-100 transition-opacity"
          >
            info@lesterrasses-liege.com
          </a>
        </span>
      </div>
    </div>
  );
}
