export function Motif({ kind }: { kind: "seed" | "early" | "growth" }) {
  if (kind === "seed") return <div className="motif motif-seed" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>;
  if (kind === "early") return <div className="motif motif-early" aria-hidden="true"><span className="loop dry">DRY LAB</span><span className="loop wet">WET LAB</span><b>VALIDATE</b><i/><i/><i/><i/></div>;
  return <div className="motif motif-growth" aria-hidden="true">{Array.from({length:24},(_,i)=><i key={i}/>) }<span className="neural-core">C+</span></div>;
}
