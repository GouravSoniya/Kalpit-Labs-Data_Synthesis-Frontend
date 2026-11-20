// Decorative lattice (jali) pattern: concave four-point stars joined by small crosses.
const STEP = 78;
const R = 25;

function star(cx: number, cy: number) {
  return `M${cx} ${cy - R}Q${cx} ${cy} ${cx + R} ${cy}Q${cx} ${cy} ${cx} ${cy + R}Q${cx} ${cy} ${cx - R} ${cy}Q${cx} ${cy} ${cx} ${cy - R}Z`;
}

export default function Jali({ cols = 5, rows = 6 }: { cols?: number; rows?: number }) {
  const w = cols * STEP;
  const h = rows * STEP;
  const stars = [];
  const crosses = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cx = c * STEP + STEP / 2;
      const cy = r * STEP + STEP / 2;
      stars.push(
        <g key={`s${r}-${c}`}>
          <path d={star(cx, cy)} />
          <circle cx={cx} cy={cy} r={2.5} className="jali-dot" />
        </g>
      );
      if (r < rows - 1 && c < cols - 1) {
        const x = cx + STEP / 2;
        const y = cy + STEP / 2;
        crosses.push(<path key={`x${r}-${c}`} d={`M${x - 15} ${y - 15}L${x + 15} ${y + 15}M${x + 15} ${y - 15}L${x - 15} ${y + 15}`} />);
      }
    }
  }
  return (
    <svg className="jali" viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Decorative lattice pattern">
      <g className="jali-star">{stars}</g>
      <g className="jali-cross">{crosses}</g>
    </svg>
  );
}