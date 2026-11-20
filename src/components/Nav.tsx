const links = [
  ["Vision", "#vision"],
  ["Approach", "#approach"],
  ["Research", "#research"],
  ["Team", "#team"],
  ["Contact", "#contact"],
];

export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="brand" aria-label="Kalpit Labs home">
        <span className="brand-mark" lang="hi">क</span>
        <span>Kalpit Labs</span>
      </a>
      <nav aria-label="Main">
        <ul>
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}